import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

export default {
    input: './src/index.js', 
    output: {
        file: 'public/bundle.js',
        format: 'iife',
        sourcemap: true,
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime' 
        }
    },
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
        }),
        external(),
        resolve({
            extensions: ['.jsx', '.js', '.tsx', '.ts'],
        }),
        babel({
            babelHelpers: 'inline',
            exclude: 'node_modules/**',
            presets: [
                ['@babel/preset-env', { modules: false }],
                ['@babel/preset-react', { runtime: 'automatic' }]
            ],
            plugins: ['@babel/plugin-proposal-optional-chaining'],
        }),
        commonjs(),
        image(),
        scss({
            processor: () => postcss([autoprefixer()]),
            output: 'dist/main.css',
            outputStyle: 'compressed',
            failOnError: true,
            includePaths: ['src/styles', 'src/styles/tokens', 'src/components/Button'],
            data: `/* Build: ${Date.now()} */\n`,
        }),
        terser(),
    ],
    external: ['react', 'react-dom']
};