//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import autoprefixer from 'autoprefixer';

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
		mdsvex(mdsvex_config),
		vitePreprocess(),
	],

	entries: ['*', 'blog/*', 'blog/tag/*', '/photos/*', '/api/articles.json', '/api/photos.json']
};

export default config;
