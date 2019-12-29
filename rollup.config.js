import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import gzip from 'rollup-plugin-gzip'
import sass from 'rollup-plugin-sass'
import copy from 'rollup-plugin-copy'
import vue from 'rollup-plugin-vue'
import cleanup from 'rollup-plugin-cleanup'

const pkg = require('./package.json')
const isProductionBuild = process.env.NODE_ENV === 'production'

let plugins = [
  resolve(),
  commonjs(),
  vue({
    defaultLang: {
      style: 'scss'
    },
    css: false,
    compiler: require('vue-template-compiler')
  }),
  sass({
    output: 'dist/index.css',
    options: {
      outputStyle: isProductionBuild ? 'compressed' : 'expanded'
    }
  }),
  copy({
    targets: [{ src: 'src/styles/fonts', dest: 'dist' }]
  }),
  cleanup({ comments: 'none' }),
  sourceMaps()
]

// Minify and compress output when in production
if (isProductionBuild) {
  plugins = [...plugins, terser(), gzip()]
}

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
