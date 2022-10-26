import { DateTime } from 'luxon';
import katex from 'katex';

// TODO: add try-catch in case no posts match a given tag
// An {#if posts.length} block with an {:else} should do the trick
export const fetchMarkdownArticles = async (sorted = true) => {
	const allArticleFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterableArticleFiles = Object.entries(allArticleFiles);
	console.log('here');
	console.log(allArticleFiles);
	const allArticles = await Promise.all(
		iterableArticleFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const articlePath = path.slice(11, -3);

			return {
				meta: metadata,
				path: articlePath
			};
		})
	);

	if (sorted) {
		const sortedArticles = allArticles.sort((a, b) => {
			return new Date(b.meta.date) - new Date(a.meta.date);
		});

		return sortedArticles;
	}

	return allArticles;
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
