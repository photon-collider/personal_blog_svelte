export async function load({ fetch }) {
	const response = await fetch('/api/articles');
	const articles = await response.json();

	return { articles };
}
