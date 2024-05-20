import { promises as fs } from 'fs'
import path from 'path'
import type { Plugin } from 'vinxi'

export const IconSpritePlugin = (): Plugin => {
  const iconsDir = path.join(process.cwd(), 'public', 'icons')

  return {
    name: 'icon-sprite-plugin',
    configureServer: server => {
      const iconsWatcher = server.watcher.add(iconsDir)

      iconsWatcher.on('change', async path => {
        if (path.startsWith(iconsDir)) {
          await generateIconSprite(iconsDir)
        }
      })
    },
    buildStart: async () => {
      await generateIconSprite(iconsDir)
    }
  }
}

const generateIconSprite = async (iconsDir: string) => {
  const timestamp = Math.floor(new Date().getTime() / 1000)
  const files = await getSvgFiles(iconsDir)

  const { sprite, idTypes } = await buildUpSvgSprite(files, iconsDir)

  await writeSpriteIconsLinkWithTimestamp(timestamp)
  await writeIconsSprite(sprite, timestamp)
  await writeIconsTypes(idTypes)
}

const getSvgFiles = async (iconsDir: string) => {
  const files = await fs.readdir(iconsDir)

  return files
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

const writeSpriteIconsLinkWithTimestamp = async (timestamp: number) => {
  // Write layout/components/SpriteIconsLink.tsx
  // const spriteIconsLink = `import { Link } from '@solidjs/meta'\n\nexport const SpriteIconsLink = () => (\n  <Link\n    rel="preload"\n    as="image"\n    href="/icon-sprite-${timestamp}.svg"\n  />\n\n)`
  const spriteIconsLink = `import { Link } from '@solidjs/meta'\n\nexport const SpriteIconsLink = () => (\n  <Link\n    rel="preload"\n    as="image"\n    href="/icon-sprite.svg"\n  />\n\n)`

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

const writeIconsSprite = async (sprite: string, timestamp: number) => {
  // Write the SVG sprite to a file in the public folder
  await fs.writeFile(
    // path.join(process.cwd(), 'public', `icon-sprite-${timestamp}.svg`),
    path.join(process.cwd(), 'public', `icon-sprite.svg`),
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
