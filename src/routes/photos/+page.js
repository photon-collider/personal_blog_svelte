export async function load({ fetch }) {
	const responsePhotos = await fetch('/api/photos.json');
	const photoFeed = responsePhotos.json();
	return { photoFeed };
}
