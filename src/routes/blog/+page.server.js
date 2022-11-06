export const load = async (params) => {
	const { fetch, url } = params;
	const articleRes = await fetch(`${url.origin}/api/articles.json`);
	const articles = await articleRes.json();

	return { articles };
};
