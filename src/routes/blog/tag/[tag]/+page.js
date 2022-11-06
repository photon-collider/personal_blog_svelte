export const load = async ({ fetch, params }) => {
	const { tag } = params;
	const response = await fetch(`/api/articles.json`);
	const allArticles = await response.json();

	const articles = allArticles.filter((article) => article.tags.includes(tag));

	return {
		tag,
		articles
	};
};
