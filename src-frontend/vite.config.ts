import postcss from './postcss.config'
import { exec } from 'node:child_process'
import util from 'node:util'
import { resolve } from 'path'
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'vite'

const exc = util.promisify(exec)

function quickReload() {
  return {
    name: 'rollup-plugin-quick-reload',
    buildEnd: async () => {
      const { stdout, stderr } = await exc('atlas-mvn package', {
        cwd: resolve(__dirname, '..'),
      })
      if (stderr) {
        console.error(`stderr: ${stderr}`)
      } else {
        console.log(`stdout: ${stdout}`)
      }
    },
  }
}

export default defineConfig(() => {
  return {
    plugins: [
      copy({
        targets: [
          {
            src: 'node_modules/@emdgroup-liquid/liquid/dist/*',
            dest: resolve(__dirname, 'public/liquid'),
          },
        ],
        hook: 'buildStart',
        copyOnce: true,
      }),
      quickReload(),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, './src/liquid-confluence.ts'),
        name: 'Liquid for Confluence',
        fileName: 'liquid-confluence',
      },
      outDir: resolve(__dirname, '../src/main/resources/out'),
      watch: {},
      emptyOutDir: true,
    },
    css: {
      postcss,
    },
    resolve: {
      alias: {
        path: 'path-browserify',
      },
    },
  }
})
