import { error } from '@sveltejs/kit';

export const prerender = true;

export const csr = true;

export const load = async ({ url }) => {
	try {
		const currentRoute = url.pathname;

		return {
			currentRoute
		};
	} catch (err) {
		throw error(500, err);
	}
};
