import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import gzip from 'rollup-plugin-gzip'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'
import vue from 'rollup-plugin-vue'
import cleanup from 'rollup-plugin-cleanup'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const pkg = require('./package.json')

let plugins = [
  resolve(),
  commonjs(),
  vue({
    defaultLang: {
      style: 'scss'
    },
    css: false,
    compiler: require('vue-template-compiler'),
    style: {
      postcssOptions: {
        minimize: true
      },
      postcssPlugins: [
        autoprefixer,
        cssnano({
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
          }]
        })
      ]
    }
  }),
  scss({
    output: 'dist/index.css',
    options: {
      outputStyle: 'compressed'
    }
  }),
  postcss({
    minimize: {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    },
    extensions: ['css, scss'],
    plugins: [
      autoprefixer(),
      cssnano(),
    ]
  }),
  copy({
    targets: [{ src: 'src/styles/fonts', dest: 'dist' }]
  }),
  cleanup({ comments: 'none' }),
  sourceMaps(),
  terser(),
  gzip()
]

const input = 'src/index.js'

const globals = {
  vue: 'Vue'
}

// Do not bundle peer dependencies
const external = ['vue']

export default [
  {
    input,
    plugins,
    external,
    output: [
      {
        name: pkg.name,
        file: pkg.main,
        format: 'umd',
        sourcemap: true,
        globals
      },
      {
        name: pkg.name,
        file: pkg.module,
        format: 'es',
        sourcemap: true,
        globals
      },
      { name: pkg.name,
        file: pkg.unpkg,
        format: 'cjs',
        sourcemap: false,
        globals
      },
    ]
  }
]
