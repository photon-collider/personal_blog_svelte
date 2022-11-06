import { fetchArticles } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
	const allArticles = await fetchArticles();
	return json(allArticles);
};
