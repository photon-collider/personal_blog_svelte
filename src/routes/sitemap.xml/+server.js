import { siteURL, navHeaderItems } from "$lib/config";
import fs from 'fs';
import path from 'path';

export async function GET() {

    const postsDirectory = path.join(process.cwd(), 'src/lib/articles');
    const filenames = fs.readdirSync(postsDirectory);

    const blogPostItems = filenames.map(file => {
        const slug = file.replace(/\.md$/, '');
        return { href: `/blog/${slug}` };
    });

    const linkItems = [...navHeaderItems, ...blogPostItems]

    const sitemap = generateSitemap(linkItems);

    return new Response(sitemap, {
        headers: { 'Content-Type': 'application/xml' },
    })
}

function generateSitemap(linkItems) {
    const sitemapEntries = linkItems.map(item => `
    <url><loc>${siteURL}${item.href}</loc></url>`.trim()).join('');

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapEntries} 
    </urlset>`;

    sitemap = sitemap.replace(/\n/g, '')

    return sitemap;
}