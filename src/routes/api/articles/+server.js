import { fetchMarkdownArticles } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allArticles = await fetchMarkdownArticles();
	return json(allArticles);
};
