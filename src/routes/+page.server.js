import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	try {
		const articlesRes = await fetch('/api/articles.json');
		const articles = await articlesRes.json();

		return { articles };
	} catch (err) {
		throw error(500, err);
	}
}
