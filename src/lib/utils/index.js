import { DateTime } from 'luxon';
import katex from 'katex';
import slugify from 'slugify';
import photoFeed from '$lib/data/photofeed';

// TODO: add try-catch in case no posts match a given tag
// An {#if posts.length} block with an {:else} should do the trick
export const fetchArticles = async (tag = '') => {
	const allArticleFiles = import.meta.glob('$lib/articles/*.md');
	const iterableArticleFiles = Object.entries(allArticleFiles);

	const allArticles = await Promise.all(
		iterableArticleFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().slice(0, -3);

			return {
				...metadata,
				slug
			};
		})
	);

	let sortedArticles = allArticles.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

	if (tag) {
		sortedArticles = sortedArticles.filter((article) => article.tags.includes(tag));
	}

	return sortedArticles;
};

export const fetchPhotoFeed = async () => {
	return photoFeed.map((d) => ({ ...d, slug: slugify(d.title) }));
};

export const getReadableDate = (date) => {
	if (typeof date === 'string') {
		return DateTime.fromJSDate(new Date(date), { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
	}

	return DateTime.fromJSDate(date, { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
};

export const getHTMLDateString = (dateObj) => {
	return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
};

export const renderLatex = (content) => {
	return content.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
		const cleanEquation = equation.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

		return katex.renderToString(cleanEquation, { throwOnError: false });
	});
};
