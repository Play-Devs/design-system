import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss' 
import pkg from './package.json'

export default {
  input: './src/index.js',  
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve({
      extensions: ['.jsx', '.js'] 
    }),
    babel({
      babelHelpers: 'inline',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-optional-chaining']
    }),
    commonjs(),
    image(),
    scss({
        output: 'dist/styles.css',
        outputStyle: 'compressed',
        watch: 'src', 
        failOnError: true, 
        includePaths: ['src/styles'], 
    }),
    terser()
  ]
}