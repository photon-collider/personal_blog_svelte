import { fetchPhotoFeed } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const slug = params.photo;
		const photoFeed = await fetchPhotoFeed();
		const idx = photoFeed.findIndex((d) => d.slug === slug);
		const requestedPhoto = photoFeed[idx];

		const endIdx = photoFeed.length - 1;

		let nextImgURL;
		let prevImgURL;

		if (idx !== 0) {
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
	} catch (err) {
		throw error(404, 'Photo Not Found!');
	}
}
