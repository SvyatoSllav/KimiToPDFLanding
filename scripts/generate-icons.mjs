import { readFile } from 'node:fs/promises'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const rootDir = process.cwd()
const svgPath = path.join(rootDir, 'app', 'icon.svg')
const outDir = path.join(rootDir, 'public', 'icons')
const sizes = [16, 32, 48, 180, 192, 256, 384, 512]

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true })
}

async function generate() {
  const svg = await readFile(svgPath)
  await ensureDir(outDir)
  for (const size of sizes) {
    const png = await sharp(svg).resize(size, size, { fit: 'cover' }).png().toBuffer()
    const file = path.join(outDir, `icon-${size}.png`)
    await writeFile(file, png)
    console.log(`Wrote ${file}`)
  }
  // Write favicon.ico from 16/32/48 PNGs
  const icoBuffer = await sharp(svg)
    .resize(48, 48, { fit: 'cover' })
    .png()
    .toBuffer()
  await writeFile(path.join(rootDir, 'public', 'favicon.ico'), icoBuffer)
  console.log('Wrote public/favicon.ico')
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})


