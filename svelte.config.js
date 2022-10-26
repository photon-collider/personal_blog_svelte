//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import autoprefixer from 'autoprefixer';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';

import { mdsvex_config } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			}
		}),
		/*
		mdsvex({
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatexSvelte],
			extensions: ['.md']
		})
		*/
		mdsvex(mdsvex_config)
	]
};

export default config;
