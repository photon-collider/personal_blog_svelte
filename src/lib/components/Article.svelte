<script>
	import ArticleHeader from './Article/ArticleHeader.svelte';
	import ArticleBodyText from './Article/ArticleBodyText.svelte';
	import Grid2ColContainer from './Grid2ColContainer.svelte';
	import ArticleBio from './Article/ArticleBio.svelte';
	export let data;
	const { title, date, description, dateUpdated, tags, renderEqs, og_img_url } = data.meta;
	import { twitterHandle } from '$lib/config';
</script>

<svelte:head>
	<title>{title}</title>

	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />

	<meta data-key="description" name="description" content={description} />
	<meta property="og:description" content={description} />
	<link rel="canonical" href={data.canonicalURL} />

	<!-- Twitter metadata -->
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={twitterHandle} />

	{#if og_img_url}
		<meta property="og:image" content={og_img_url} />
		<meta name="twitter:image" content={og_img_url} />
	{/if}

	{#if renderEqs}
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css"
			integrity="sha384-Juol1FqnotbkyZUT5Z7gUPjQ9gzlwCENvUZTpQBAPxtusdwFLRy382PSDx5UUJ4/"
			crossorigin="anonymous"
		/>
	{/if}
</svelte:head>

<article>
	<ArticleHeader {title} {description} {date} {dateUpdated} {tags} />

	<ArticleBodyText>
		{@html data.articleContent}
	</ArticleBodyText>
	<ArticleBio />
</article>
