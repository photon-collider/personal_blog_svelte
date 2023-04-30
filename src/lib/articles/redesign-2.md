---
title: 'Redesign: Version 2.0'
date: 2022-11-06
tags: ['site-update']
description: Documenting my first ever redesign of my personal website
---

<script>
    import ArticleImage from '$lib/components/ArticleImage.svelte'
</script>

It’s been a long time since I posted here. A lot has happened in that time, some of which I’ll write about in future blog posts. During my hiatus, I’ve been working on this website redesign which I’m finally presenting today!

I designed my very own minimalist theme for this site. In doing this, I took the time to rebuild this site using [Sveltekit](https://kit.svelte.dev/). When I first deployed this website, I used the static site generator [Eleventy](https://www.11ty.dev/).

My decision to pivot to using a different framework came about earlier this year when I learned how to use [React](https://reactjs.org/) for some front-end work at my job. I enjoyed the experience of setting up components to handle state logic so much that I opted to pursue rebuilding my website using a front-end framework.

I could have continued using React as my front-end framework of choice, especially given that it has a very mature ecosystem. Instead, I opted to learn [Svelte](https://svelte.dev/) out of curiosity. It hasn’t been too hard for me to learn the basics. I’ve even had some fun learning the ins and outs of this framework.

Here are some screenshots of the new design I’ve implemented alongside those of the original design. These are some notable design changes I’ve made:

- Switch to a grayscale color theme for most links, buttons, and text to simplify the visual design
- Simplified blog post list layout by removing divider lines and other meta data (time to read, tags) for each blog post to cut down on visual clutter
- No social media links as I don't use instagram or twitter anymore
- Moved blog post tags to the bottom of each blog post
- Added a short personal bio at the bottom of each blog post

## New Layout

### Front page

<ArticleImage imgBucket="article_images/p9_redesign_2" imgName="new-home.png" alt="New design of the home page"/>

### Blog page

<ArticleImage imgBucket="article_images/p9_redesign_2" imgName="new-blog.png" alt="New design of the blog page"/>

### Photos page

<ArticleImage imgBucket="article_images/p9_redesign_2" imgName="new-photos.png" alt="New design of the photos page"/>

### About page

<ArticleImage imgBucket="article_images/p9_redesign_2" imgName="new-about.png" alt="New design of the about me page"/>

### Blog Post Page

<ArticleImage imgBucket="article_images/p9_redesign_2" imgName="new-post.png" alt="New design of the blog post layout"/>

## Old Layout

### Front page

<ArticleImage imgBucket="article_images/p9_redesign_2" imgName="old-home.png" alt="Old design of the home page"/>

### Blog page

<ArticleImage imgBucket="article_images/p9_redesign_2" imgName="old-blog.png" alt="Old design of the blog page"/>

### Photos page

<ArticleImage imgBucket="article_images/p9_redesign_2" imgName="old-photos.png" alt="Old design of the photos page"/>

### About Page

<ArticleImage imgBucket="article_images/p9_redesign_2" imgName="old-about.png" alt="Old design of the about me page"/>

### Blog Post Page

<ArticleImage imgBucket="article_images/p9_redesign_2" imgName="old-post.png" alt="Old design of the blog post layout"/>

## Items on My Wishlist

These are some features that are in my roadmap for a future site update:

- ~~displaying a list of all tags on my blog page~~
- ~~implement a button to make it possible to switch to dark mode~~
- RSS feed for my photo gallery
- add tags to photos contained within the [photo gallery](/photos)
- restyling equations and code blocks in blog posts to make these look more visually appealing
- adding a table of contents section for longer articles
- implement a better way to include photosets into my photo gallery

I'll cross items off this list as I get these done.
