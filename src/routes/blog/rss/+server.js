import { fetchMarkdownArticles } from '$lib/utils';

const siteURL = 'https://bryananthonio.com';
const siteTitle = 'Your site title here';
const siteDescription = 'Your site description here';

export const prerender = true;

export const GET = async () => {
	const allArticles = await fetchMarkdownArticles();
	const sortedArticles = allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

	const body = render(sortedArticles);
	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	};

	return new Response(body, options);
};

const render = (articles) =>
	`<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <title>${siteTitle}</title>
            <description>${siteDescription}</description>
            <link>${siteURL}</link>
            <atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
            ${articles
							.map(
								(article) => `<item>
                    <guid isPermaLink="true">${siteURL}/blog/${article.path}</guid>
                    <title>${article.meta.title}</title>
                    <link>${siteURL}/blog/${article.path}</link>
                    <description>${article.meta.title}</description>
                    <pubDate>${new Date(article.meta.date).toUTCString()}</pubDate>
                    </item>`
							)
							.join('')}
        </channel>
    </rss>
    `;
