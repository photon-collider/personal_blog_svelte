<script>
	import ArticleHeader from './Article/ArticleHeader.svelte';
	import ArticleBodyText from './Article/ArticleBodyText.svelte';
	import Grid2ColContainer from './Grid2ColContainer.svelte';
	import ArticleBio from './Article/ArticleBio.svelte';
	export let data;
	const { title, date, description, dateUpdated, tags, renderEqs } = data.meta;
</script>

<svelte:head>
	<title>{title}</title>

	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta data-key="description" name="description" content={description} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<link rel="canonical" href={data.canonicalURL} />

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

	<Grid2ColContainer classesToAdd="gap-3">
		<div>
			<ArticleBodyText>
				{@html data.articleContent}
			</ArticleBodyText>
			<ArticleBio />
		</div>

		<aside class="mx-auto flex max-w-[var(--max-width-writing)] flex-col gap-4 lg:mx-0" />
	</Grid2ColContainer>
</article>
