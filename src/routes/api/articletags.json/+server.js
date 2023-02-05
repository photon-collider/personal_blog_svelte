import { fetchArticles } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
	const allArticles = await fetchArticles();

	let tagData = {};

	for (const articleData of allArticles) {
		const articleTags = articleData.tags;

		for (const tag of articleTags) {
			if (tag in tagData) {
				tagData[tag].count += 1;
				tagData[tag].articles.push(articleData);
			} else {
				tagData[tag] = { count: 1, articles: [articleData] };
			}
		}
	}

	return json(tagData);
};
