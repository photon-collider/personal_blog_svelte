import { error } from '@sveltejs/kit';
import { siteURL } from '$lib/config.js';

export async function load({ params }) {
	try {
		const article = await import(`../../../lib/articles/${params.slug}.md`);
		const canonicalURL = `${siteURL}/blog/${params.slug}`

		return {
			meta: { ...article.metadata, slug: params.slug },
			articleContent: article.default.render().html,
			canonicalURL
		};
	} catch (err) {
		error(404, 'Page Not Found!');
	}
}
