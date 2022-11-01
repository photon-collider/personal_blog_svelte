export async function load({ fetch }) {
	const response = await fetch('/api/articles');
	const articles = await response.json();

	const responsePhotos = await fetch('/api/photos');
	const photoFeed = responsePhotos.json();

	return { articles, photoFeed };
}
