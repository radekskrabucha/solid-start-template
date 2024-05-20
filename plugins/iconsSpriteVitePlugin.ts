import { promises as fs } from 'fs'
import path from 'path'
import type { Plugin } from 'vinxi'

type SpriteIconsPluginConfig = {
  prefix?: string
}

export const IconSpritePlugin = ({
  prefix = 'icon-sprite'
}: SpriteIconsPluginConfig = {}): Plugin => {
  const spriteIconsDir = path.join(process.cwd(), 'public')
  const iconsDir = path.join(spriteIconsDir, 'icons')

  return {
    name: 'icon-sprite-plugin',
    configureServer: server => {
      const iconsWatcher = server.watcher.add(iconsDir)

      iconsWatcher.on('change', async path => {
        if (path.startsWith(iconsDir)) {
          await generateIconSprite(iconsDir, spriteIconsDir, prefix)
        }
      })
    },
    buildStart: async () => {
      await generateIconSprite(iconsDir, spriteIconsDir, prefix)
    }
  }
}

const generateIconSprite = async (
  iconsDir: string,
  spriteIconsDir: string,
  prefix: string
) => {
  const timestamp = Math.floor(new Date().getTime() / 1000)
  const svgIconsFiles = await getSvgFiles(iconsDir)

  const { sprite, idTypes } = await buildUpSvgSprite(svgIconsFiles, iconsDir)

  const spriteIconFiles = await getSvgSpriteFiles(spriteIconsDir, prefix)
  const oldSprite = await getSvgSpriteFileContent(
    spriteIconsDir,
    spriteIconFiles[0]
  )

  if (oldSprite !== sprite) {
    await removeOldSpriteIcons(spriteIconsDir, spriteIconFiles)
    await writeSpriteIconsLinkWithTimestamp(timestamp, prefix)
    await writeIconsSprite(sprite, timestamp, prefix, spriteIconsDir)
    await writeIconsTypes(idTypes)
  }
}

const getSvgFiles = async (iconsDir: string) => {
  const files = (await fs.readdir(iconsDir)).filter(file =>
    file.endsWith('.svg')
  )

  return files
}

const getSvgSpriteFiles = async (spriteIconsDir: string, prefix: string) => {
  const files = (await fs.readdir(spriteIconsDir)).filter(
    file => file.endsWith('.svg') && file.startsWith(prefix)
  )

  return files
}
const getSvgSpriteFileContent = async (
  spriteIconsDir: string,
  svgSpriteFile: string | undefined
) => {
  if (svgSpriteFile) {
    const svgContent = await fs.readFile(
      path.join(spriteIconsDir, svgSpriteFile),
      'utf8'
    )

    return svgContent
  }
}
const removeOldSpriteIcons = async (
  spriteIconsDir: string,
  spriteIconFiles: Array<string>
) => {
  for (const file of spriteIconFiles) {
    // wait 200ms to avoid race condition
    await new Promise(resolve => setTimeout(resolve, 200))
    await fs.unlink(path.join(spriteIconsDir, file)).catch(error => {})
  }
}

const buildUpSvgSprite = async (files: Array<string>, iconsDir: string) => {
  let symbols = ''
  let idTypes = ''

  // Build up the SVG sprite from the SVG files
  for (const file of files) {
    if (!file.endsWith('.svg')) continue
    let svgContent = await fs.readFile(path.join(iconsDir, file), 'utf8')
    const id = file.replace('.svg', '')
    svgContent = svgContent
      .replace(/id="[^"]+"/, '') // Remove any existing id
      .replace('<svg', `<symbol id="${id}" preserveAspectRatio="xMinYMin meet"`) // Change <svg> to <symbol>
      .replace('</svg>', '</symbol>')
    symbols += svgContent + '\n'
    idTypes += `  | '${id}'\n`
  }
  const sprite = `<svg width="0" height="0" style="display: none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n\n${symbols}\n</defs>\n</svg>`

  return {
    sprite,
    idTypes
  }
}

const writeSpriteIconsLinkWithTimestamp = async (
  timestamp: number,
  prefix: string
) => {
  // Write layout/components/SpriteIconsLink.tsx
  const spriteIconsLink = `import { Link } from '@solidjs/meta'\n\nexport const SpriteIconsLink = () => (\n  <Link\n    rel="preload"\n    as="image"\n    href="/${prefix}-${timestamp}.svg"\n  />\n)\n`

  await fs.writeFile(
    path.join(
      process.cwd(),
      'src',
      'layout',
      'components',
      'SpriteIconsLink.tsx'
    ),
    spriteIconsLink
  )
}

const writeIconsSprite = async (
  sprite: string,
  timestamp: number,
  prefix: string,
  spriteIconsDir: string
) => {
  // Write the SVG sprite to a file in the public folder
  await fs.writeFile(
    path.join(spriteIconsDir, `${prefix}-${timestamp}.svg`),
    sprite
  )
}

const writeIconsTypes = async (idTypes: string) => {
  // Write the types/icons.ts
  const types = `export type IconId =\n${idTypes}`

  await fs.writeFile(
    path.join(process.cwd(), 'src', 'types', 'icons.ts'),
    types
  )
}
