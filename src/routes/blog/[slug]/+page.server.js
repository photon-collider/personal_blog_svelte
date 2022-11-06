import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const article = await import(`../../../lib/articles/${params.slug}.md`);

		return {
			meta: { ...article.metadata, slug: params.slug },
			articleContent: article.default.render().html
		};
	} catch (err) {
		throw error(404, 'Page Not Found!');
	}
}
