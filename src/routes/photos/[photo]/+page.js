import { fetchPhotoFeed } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const slug = params.photo;

	const photoFeed = await fetchPhotoFeed();
	const idx = photoFeed.findIndex((d) => d.slug === slug);
	const requestedPhoto = photoFeed[idx];

	const endIdx = photoFeed.length - 1;

	let nextImgURL;
	let prevImgURL;

	if (!requestedPhoto) {
		console.log(idx);
		console.log(requestedPhoto);
		throw error(404, 'Photo Not Found!');
	}

	if (idx !== 0) {
		console.log(photoFeed);
		console.log(idx);
		prevImgURL = photoFeed[idx - 1].slug;
	}

	if (idx !== endIdx) {
		nextImgURL = photoFeed[idx + 1].slug;
	}

	return {
		idx,
		endIdx,
		prevImgURL,
		nextImgURL,
		requestedPhoto
	};
}
