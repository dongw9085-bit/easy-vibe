#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawnSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const docsDir = path.join(rootDir, 'docs')
const vitepressBin = path.join(
  rootDir,
  'node_modules/vitepress/bin/vitepress.js'
)

const defaultLocales = [
  'zh-cn',
  'en',
  'zh-tw',
  'ja-jp',
  'ko-kr',
  'es-es',
  'fr-fr',
  'de-de',
  'ar-sa',
  'vi-vn'
]

const locales = (
  process.env.VITEPRESS_BUILD_LOCALES || defaultLocales.join(',')
)
  .split(',')
  .map((locale) => locale.trim())
  .filter(Boolean)

const heapMb = process.env.BUILD_HEAP_MB || '4096'
const groupSize = Number.parseInt(
  process.env.BUILD_LOCALE_GROUP_SIZE || '2',
  10
)
const forceBuild = process.argv.includes('--force')
const finalOutDir = path.join(docsDir, '.vitepress/dist')
const tempRoot = path.join(docsDir, '.vitepress/dist-locales')
const mergedHashmap = {}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
    ...options
  })

  if (result.status !== 0) {
    process.exit(result.status || 1)
  }
}

function mergeHashmap(outDir) {
  const hashmapPath = path.join(outDir, 'hashmap.json')
  if (!fs.existsSync(hashmapPath)) return

  const hashmap = JSON.parse(fs.readFileSync(hashmapPath, 'utf8'))
  Object.assign(mergedHashmap, hashmap)
}

function copySitemap() {
  const generatedSitemap = path.join(docsDir, 'public/sitemap.xml')
  if (fs.existsSync(generatedSitemap)) {
    fs.copyFileSync(generatedSitemap, path.join(finalOutDir, 'sitemap.xml'))
  }
}

function chunkLocales(items, size) {
  const normalizedSize = Number.isFinite(size) && size > 0 ? size : 1
  const chunks = []
  for (let index = 0; index < items.length; index += normalizedSize) {
    chunks.push(items.slice(index, index + normalizedSize))
  }
  return chunks
}

console.log(`Building locales: ${locales.join(', ')}`)
console.log(`Node heap per locale build: ${heapMb} MB`)
console.log(`Locale group size: ${groupSize}`)
if (forceBuild) console.log('VitePress force build: enabled')

fs.rmSync(tempRoot, { recursive: true, force: true })
fs.rmSync(finalOutDir, { recursive: true, force: true })
fs.mkdirSync(tempRoot, { recursive: true })
fs.mkdirSync(finalOutDir, { recursive: true })

run(process.execPath, ['scripts/generate-sitemap.mjs'])

for (const localeGroup of chunkLocales(locales, groupSize)) {
  const groupName = localeGroup.join('+')
  const outDir = path.join(tempRoot, groupName)
  console.log(`\n=== Building locale group: ${groupName} ===`)
  run(
    process.execPath,
    [
      `--max-old-space-size=${heapMb}`,
      vitepressBin,
      'build',
      'docs',
      '--outDir',
      outDir,
      ...(forceBuild ? ['--force'] : [])
    ],
    {
      env: {
        ...process.env,
        VITEPRESS_BUILD_LOCALES_ACTIVE: localeGroup.join(',')
      }
    }
  )

  mergeHashmap(outDir)
  fs.cpSync(outDir, finalOutDir, { recursive: true, force: true })
}

fs.writeFileSync(
  path.join(finalOutDir, 'hashmap.json'),
  `${JSON.stringify(mergedHashmap)}\n`
)
copySitemap()
fs.rmSync(tempRoot, { recursive: true, force: true })

console.log(`\nMerged ${Object.keys(mergedHashmap).length} page hashes.`)
console.log(`Build output: ${path.relative(rootDir, finalOutDir)}`)
