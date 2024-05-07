import { promises as fs } from 'fs'
import path from 'path'

export function IconSpritePlugin() {
  async function generateIconSprite() {
    // Read the SVG files in the public/icons folder
    const iconsDir = path.join(process.cwd(), 'public', 'icons')
    const files = await fs.readdir(iconsDir)
    let symbols = ''
    let idTypes = ''

    // Build up the SVG sprite from the SVG files
    for (const file of files) {
      if (!file.endsWith('.svg')) continue
      let svgContent = await fs.readFile(path.join(iconsDir, file), 'utf8')
      const id = file.replace('.svg', '')
      svgContent = svgContent
        .replace(/id="[^"]+"/, '') // Remove any existing id
        .replace(
          '<svg',
          `<symbol id="${id}" preserveAspectRatio="xMinYMin meet"`
        ) // Change <svg> to <symbol>
        .replace('</svg>', '</symbol>')
      symbols += svgContent + '\n'
      idTypes += `  | '${id}' \n`
    }

    // Write the SVG sprite to a file in the public folder
    const sprite = `<svg width="0" height="0" style="display: none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n\n${symbols}\n</defs>\n</svg>`
    await fs.writeFile(
      path.join(process.cwd(), 'public', 'icon-sprite.svg'),
      sprite
    )

    // Write the icons.ts
    const types = `export type IconId =\n${idTypes}`

    await fs.writeFile(
      path.join(process.cwd(), 'src', 'types', 'icons.ts'),
      types
    )
  }

  return {
    name: 'icon-sprite-plugin',
    buildStart() {
      // Generate during build
      return generateIconSprite()
    },
    configureServer(server) {
      // Regenerate during development whenever an icon is added
      server.watcher.add(path.join(process.cwd(), 'public', 'icons', '*.svg'))
      server.watcher.on('change', async changedPath => {
        if (changedPath.endsWith('.svg')) return generateIconSprite()
      })
    }
  }
}
