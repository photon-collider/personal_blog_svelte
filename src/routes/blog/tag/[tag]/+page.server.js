import { groupArticlesByYear } from '$lib/utils/index.js';

export const load = async ({ fetch, url, params }) => {
	const { tag } = params;
	const articleRes = await fetch(`${url.origin}/api/articles.json`);
	const allArticles = await articleRes.json();
	const articles = allArticles.filter((article) => article.tags.includes(tag));

	const articleTagsRes = await fetch(`${url.origin}/api/articletags.json`);
	const articleTagData = await articleTagsRes.json();

	const articlesGroupedYear = groupArticlesByYear(articles)

	return { articles, articleTagData, articlesGroupedYear, tag };
};

