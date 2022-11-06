import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	try {
		const articlesRes = await fetch('/api/articles.json');
		const articles = await articlesRes.json();

		const responsePhotos = await fetch('/api/photos.json');
		const photoFeed = responsePhotos.json();

		return { articles, photoFeed };
	} catch (err) {
		throw error(500, err);
	}
}
