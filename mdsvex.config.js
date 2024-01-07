import math from 'remark-math';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';

import katex from 'katex';
import { visit } from 'unist-util-visit';

const correct_hast_tree = () => (tree) => {
	visit(tree, 'text', (node) => {
		if (node.value.trim().startsWith('<')) {
			node.type = 'raw';
		}
	});
};

const katex_blocks = () => (tree) => {
	visit(tree, 'code', (node) => {
		if (node.lang === 'math') {
			const str = katex.renderToString(node.value, {
				displayMode: false,
				leqno: false,
				fleqn: false,
				throwOnError: true,
				errorColor: '#cc0000',
				strict: 'warn',
				output: 'htmlAndMathml',
				trust: false,
				macros: { '\\f': '#1f(#2)' }
			});

			node.type = 'raw';
			node.value = '<div class="equation">{@html `' + str + '`}</div>';
		}
	});
};

export const mdsvex_config = {
	remarkPlugins: [math, katex_blocks],
	rehypePlugins: [correct_hast_tree, rehypeKatexSvelte, rehypeSlug, rehypeAutolinkHeadings],
	extensions: ['.md']
};
