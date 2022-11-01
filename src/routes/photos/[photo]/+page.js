import { fetchPhotoFeed } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const slug = params.photo;

	const photoFeed = await fetchPhotoFeed();
	const requestedPhoto = photoFeed.find((d) => d.slug === slug);

	if (!requestedPhoto) {
		throw error(404, 'Photo Not Found!');
	}

	return {
		requestedPhoto
	};
}
