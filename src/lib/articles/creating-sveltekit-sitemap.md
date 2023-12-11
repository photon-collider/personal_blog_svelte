---
title: Creating a Sitemap in SvelteKit
tags: ['svelte', 'sveltekit']
description: How to create a sitemap in SvelteKit for search engine optimization (SEO).
date: 2023-12-11
---

<script>
    import Aside from '$lib/components/Aside.svelte'
</script>

A well-structured sitemap can be a game changer for search engine optimization (SEO). If you’ve built your blog using [SvelteKit](https://kit.svelte.dev), you may wonder how to create one using this framework. While the [official documentation](https://kit.svelte.dev/docs/seo#manual-setup-sitemaps) briefly introduces sitemap generation, it doesn't provide some key details. In this post, I will describe how to generate a sitemap for a blog site. 

## What is a Sitemap?

A sitemap is a map to all the pages, videos, and other content on your website. Sitemaps are beneficial for SEO because web crawlers use them to efficiently identify and index content on websites. [Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) recommends generating one if you meet one othese criteria:
- Your website has 500+ pages.
- Your website is new and hasn't been indexed.
- Your website contains a lot of rich media content, such as video and images, or is featured in Google News.

Even if none of these match your use case, providing a sitemap can get your website indexed faster, especially if you [submit it to the Google Search Console](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#addsitemap). 

## Steps to Generate a Sitemap
### Prerequisites

In this tutorial, I'll assume you have a basic understanding of how [routing](https://kit.svelte.dev/docs/routing)  works in SvelteKit. 

### Create the Sitemap Route

First, let's create the route `/sitemap.xml`. We can do this by making a new directory at the path `routes/sitemap.xml/` in your project's `src/` folder. 

In this directory, create a `+server.js` file. Here, we'll define a server-side action to generate the sitemap. This can be done by implementing the `GET` function shown below:

```javascript
// src/routes/sitemap.xml/+server.js
import fs from 'fs';
import path from 'path';
export const prerender = true // needed only if using SvelteKit's static adapter

export async function GET() {
    const navHeaderLinks = ["/", "/blog", "/about", "/projects"]
	const blogPostLinks = getBlogPostLinks()
	const linkItems = [...navHeaderLinks, ...blogPostLinks]
	const sitemap = generateSitemap(linkItems);
	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml' },
	})
}
```

The `navHeaderLinks` and `blogPostLinks` represent arrays of strings, where each string corresponds to an internal link on the website. 

In this example, the `navHeaderLinks` array corresponds to links that appear in the navigation menu. These include the home, blog, about, and projects pages. 

The `blogPostLinks` array contains internal links for blog posts. For instance, if there's a blog post at the route `/blog/blog-post-example`, the `blogPostLinks` array will contain the string `"/blog/blog-post-example"`. Because the routes for blog posts are typically generated dynamically, we'll gather these separately.

<Aside>
<p style='margin-bottom: 0px;'>
If you're using <a href="https://kit.svelte.dev/docs/adapter-static">SvelteKit as a static site generator</a>, include the expression <code> export const prerender = true</code>.
</p>
</Aside>

### Gather Blog Post Links

To gather the blog post links, we need the Node functions `fs.readdirSync` and `path`. These will be used to read the directory containing the blog posts. 

Let's assume that the directory `src/lib/posts` contains markdown files for each post and that the names of these markdown files correspond to the blog post slugs. We can leverage the `getBlogPostLinks` function defined below to extract the slugs for each of the blog posts:

```javascript
// src/routes/sitemap.xml/+server.js

function getBlogPostLinks(){
	const postsDirectory = path.join(process.cwd(), 'src/lib/posts');
	const filenames = fs.readdirSync(postsDirectory);
	const blogPostLinks = filenames.map(file => {
		const slug = file.replace(/\.md$/, '');
		return `/blog/${slug}`
	});
	return blogPostLinks
}
```

### Generate Sitemap Contents

Finally, let's define a function to generate the sitemap using the gathered links. While there are [three different sitemap formats](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) to chose from, we'll focus on creating a XML sitemap. The function below does this:

```javascript
// src/routes/sitemap.xml/+server.js

function generateSitemap(linkItems) {
    const siteURL = 'https://example-domain-name.com'
	const sitemapEntries = linkItems.map(link => `<url><loc>${siteURL}${link}</loc></url>`.trim()).join('');

	let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> ${sitemapEntries}
	</urlset>`;

	sitemap = sitemap.replace(/\n/g, '') //remove newline characters
	return sitemap;
}
```

<Aside>
<p style='margin-bottom: 0px;'>
	 You can also add <code>priority</code> and <code>changefreq</code> values to each URL declaration. But, Google says <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#additional-notes-about-xml-sitemaps">it ignores these</a>. </p>
</Aside>


This function assumes that the website is hosted at the domain given by `siteURL`. Now, if you navigate to the route `/sitemap.xml`, you should see the contents of the sitemap. 

## Conclusion

In summary, generating a sitemap is a key part of SEO. This guide has outlined how to create one for a SvelteKit-based blog site. By following this process, you will set the stage to improve your site's online visibility.