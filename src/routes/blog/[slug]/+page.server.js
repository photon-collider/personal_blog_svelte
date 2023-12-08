import { error } from '@sveltejs/kit';
import path from 'path';
import { siteURL } from '$lib/config.js';

export async function load({ params }) {
	try {
		const article = await import(`../../../lib/articles/${params.slug}.md`);

		const canonicalURL = path.join(siteURL, 'blog', params.slug)
		return {
			meta: { ...article.metadata, slug: params.slug },
			articleContent: article.default.render().html,
			canonicalURL
		};
	} catch (err) {
		throw error(404, 'Page Not Found!');
	}
}
