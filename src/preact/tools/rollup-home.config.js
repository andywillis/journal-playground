import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import importUrl from 'postcss-import-url';
import nesting from 'postcss-nesting';
import cssimport from 'postcss-import';
import gzipPlugin from 'rollup-plugin-gzip';
import { babel } from '@rollup/plugin-babel';

export default {

	input: './tools/compile-home.jsx',

	output: {
		file: './tools/temp/extract-html.js',
		format: 'es'
	},

	plugins: [

		resolve({
			extensions: [ '.js', '.jsx' ]
		}),

		json(),

		babel({
			plugins: [
				[ '@babel/plugin-transform-react-jsx', {
					pragma: 'h',
					pragmaFrag: 'Fragment'
				}],
				[ 'babel-plugin-jsx-pragmatic', {
					module: 'preact',
					import: 'h',
					export: 'h'
				}]
			],
			extensions: [ '.jsx', '.js' ]
		}),

		postcss({

			extract: 'journal.css',

			modules: {
				generateScopedName: '[local]_[hash:base64:5]'
			},

			plugins: [
				cssimport(),
				importUrl(),
				nesting()
			]

		}),

		gzipPlugin({
			filter: /\.(css)$/
		})
	
	]

};
