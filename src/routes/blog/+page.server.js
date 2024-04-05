import { groupArticlesByYear } from '$lib/utils/index.js';
import { groupArticlesByCategory } from '$lib/utils/index.js';

export const load = async (params) => {
	const { fetch, url } = params;
	const articleRes = await fetch(`${url.origin}/api/articles.json`);
	const articles = await articleRes.json();

	const articleTagsRes = await fetch(`${url.origin}/api/articletags.json`);
	const articleTagData = await articleTagsRes.json();

	const articlesGroupedCategory = groupArticlesByCategory(articles)
	return { articles, articleTagData, articlesGroupedCategory };
};
