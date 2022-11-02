export async function load({ fetch }) {
	const responsePhotos = await fetch('/api/photos');
	const photoFeed = responsePhotos.json();
	return { photoFeed };
}
