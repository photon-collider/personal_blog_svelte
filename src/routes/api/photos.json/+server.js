import { fetchPhotoFeed } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
	const photoFeed = await fetchPhotoFeed();
	return json(photoFeed);
};
