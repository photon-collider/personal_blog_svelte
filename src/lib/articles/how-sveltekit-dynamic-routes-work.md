---
title: How Slug-Based Dynamic Routing Works in Sveltekit
tags: ['svelte', 'sveltekit']
category: 'swe'
description: How to set up your SvelteKit project to handle routing for dynamic routes of varying complexity.
date: 2023-03-08
---


When I started learning SvelteKit I was confused by how this framework handles dynamic routing. I'm referring to instances where you link to a blog post with a slug at a URL given as `/blog/[postSlug]` where `[postSlug]` is the slug that corresponds with a given blog post. Some websites, such as those [created using WordPress](https://wordpress.com/support/permalinks-and-slugs/), also include the dates in the URL slugs such that they appear something like `/blog/[year]/[month]/[day]/[postSlug]`. In this post, I'll write about how to handle these dynamic routes when using SvelteKit.

## Prerequisites

In this post, I'll assume you know the basics of [Svelte](https://svelte.dev/). Otherwise, the [official tutorial](https://svelte.dev/tutorial/basics) is a good place to learn the fundamentals. Regarding SvelteKit, I'll assume you understand how loading data works using `+page.js` files [as described here](https://kit.svelte.dev/docs/load). However, I will go over these concepts very briefly.

## Sveltekit  Routing Basics

SvelteKit uses a file-based routing system. In other words, routes are created based on the structure of the directory in the `src/routes/` folder within your project. As a simple example, creating the content for the route `/about` for an "About Me" page would require creating this directory structure in your project:


```fs
src/ 
└── routes/ 
	└── about/ 
		└── +page.svelte
```

The markup for the "About Me" page would live inside the `+page.svelte` component  like so:

```svelte
// +page.svelte
<h1>About Me</h1>
<p>Hello, world!</p>
```

Upon navigating to the route `/about`, you will see the rendered markup defined in this component.

Now, what if you wanted to define a page at the route `/blog` containing a list of your blog posts? You would need to create the directory `src/routes/blog` that contains the files `+page.js` and `+page.svelte`.  

```fs
src/ 
└── routes/ 
	├── about/ 
	│ └── +page.svelte 
	└── blog/ 
		├── +page.js 
		└── +page.svelte
```

The `page.js` file will contain a load function that you can use to fetch a list of blog posts. This function passes its output to the `data` prop inside the corresponding `+page.svelte` component. Here's an example of how this works:

```javascript
// assuming you have a fetchPosts function defined in lib/utils.js
import {fetchPosts} from '$lib/utils'

// src/blog/+page.js
export async function load(){
	const posts = fetchPosts()
	return {posts}
}
```

```html
// src/blog/+page.svelte
<script>
	export let data;
</script>

<h1>Blog Posts</h1>
<ul>
	{#each data.posts as post}
		<li><a href={post.url}>{post.title}</a></li>
	{/each}
</ul>
```

As an aside, if your load function should run on the server side rather than on the client side, you should rename `+page.js`  to  `+page.server.js`. The [official SvelteKit documentation](https://kit.svelte.dev/docs/load) provides more info on this.

## Simple Dynamic Routes

If you have blog posts defined at the routes `/blog/hello-world`, `/blog/second-post`, and `/blog/third-post`, it would be cumbersome to have to create the directories `src/routes/blog/hello-world`,  `src/routes/blog/second-post` and `src/routes/blog/third-post`, respectively and create corresponding `+page.svelte` and `+page.js` files for each of these routes. 

Fortunately, you don't have to do that in SvelteKit! In this case, you'll instead need to create the directory `src/blog/[slug]`:

```fs
src/ 
└── routes/ 
	└── blog/ 
		├── +page.js 
		├── +page.svelte 
		└── [slug]/
			├── +page.js 
			└── +page.svelte
```

Here, `[slug]` will be a parameter used to handle the logic needed for each route mentioned earlier. Using this design, when accessing the route `/blog/hello-world` the params object for the load function defined in `[slug]/+page.js` will have a corresponding `slug` property:

```json
{
	slug:"hello-world"
}
```

You can access this property in the load function to fetch the appropriate blog post based on the `slug` and pass it to the corresponding `+page.svelte` this way:

```javascript
// [slug]/+page.js
export async function load({params}){
	const postData = getPost(params.slug)
	return {postData}
}
```


## Handling More Complex Dynamic Routes

Now, what what about the route `/blog/[year]/[month]/[day]/[postSlug]`? You can of course create the nested folder structure `src/routes/blog/[year]/[month]/[day]/[post]`. 

```
src/ 
└── routes/ 
	└── blog/ 
		└── [year]/ 
			└── [month]/ 
				└── [day]/ 
					└── [post]/ 
						├── +page.js 
						└── +page.svelte
```

Accessing the route `/blog/2023/01/01/hello-world`, the load function defined in `[post]/+page.js` directory will have access to the params objects with these properties:

```json
{
	"year": "2023",
	"month": "01",
	"day": "01",
	"post": "hello-world"
}
```

But this might be cumbersome if you don't intend to load any content in routes such as `/blog/[year]` or `/blog/[year]/[month]`. 

The key insight on how to do this more elegantly is defined [here in the official documentation](https://kit.svelte.dev/docs/load#using-url-data-params). If you want to keep the year slug but condense the others, you could instead create the following directory structure:

```
src/ 
└── routes/ 
	└── blog/ 
		└── [year]/ 
			└── [...postSlug]
				├── +page.js 
				└── +page.svelte
```

In this instance, accessing the route `/blog/2023/01/01/hello-world` the `params` object obtained by the `[...postSlug]/+page.js` would contain the following: 

```json
{
	"year": "2023",
	"postSlug": "01/01/hello-world
}
```

Alternatively, you could capture the date separately from the post's title slug with this directory structure:

```fs
src/ 
└── routes/ 
	└── blog/ 
		└── [...date]/ 
			└── [titleSlug]
				├── +page.js 
				└── +page.svelte
```

The `params` object accessible in the load function at `[titleSlug]/+page.js` now looks like

```json
{
	"date": "2023/01/01",
	"titleSlug": "hello-world"
}
```

Better yet, you can create the folder `src/routes/blog/[...postSlug]`. 

```
src/ 
└── routes/ 
	└── blog/ 
		└── [...postSlug]/ 
			├── +page.js 
			└── +page.svelte
```

When accessing the route `/blog/2023/01/01/hello-world`, the `params` object in the load function defined `[..postSlug]/page.js` will look like

```json
{
	"postSlug": "2023/01/01/hello-world"
}
```

From here, you could extract the year, month, day, and post slugs in the load function like so:

``` javascript
export async load({params}){
	const postSlug = params.postSlug

	[year, month, day, post] = postSlug.split("/")

	//add code here to determine what content to fetch based on slug info
}
```

One important thing I didn't cover here is how to ensure that slugs have the correct types. For instance, the year slug should always be a number. You may want to direct the user to an `Error 404` page if this happens. SvelteKit allows you to define a custom `match` function, [as shown here](https://kit.svelte.dev/docs/advanced-routing#matching), for handling these edge cases. 
