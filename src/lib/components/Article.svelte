<script>
	import ArticleHeader from './Article/ArticleHeader.svelte';
	import ArticleBodyText from './Article/ArticleBodyText.svelte';
	import ArticleBio from './Article/ArticleBio.svelte';
	import ArticleTagsList from './ArticleTagsList.svelte';
	import Grid2ColContainer from './Grid2ColContainer.svelte';
	export let data;
	const { title, date, description, dateUpdated, tags, renderEqs } = data.meta;
</script>

<svelte:head>
	<title>{title} | Bryan Anthonio</title>

	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />

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
	<ArticleHeader {title} {description} {date} {dateUpdated} />

	<Grid2ColContainer classesToAdd="gap-3">
		<ArticleBodyText>
			{@html data.articleContent}
		</ArticleBodyText>
		<aside class="mx-auto flex max-w-[var(--max-width-writing)] flex-col gap-4 lg:mx-0">
			<div class="bg-white p-4 shadow-sm">
				<ArticleBio />
			</div>

			<div class="bg-white p-4 shadow-sm">
				<ArticleTagsList {tags} titleTop={true} />
			</div>
		</aside>
	</Grid2ColContainer>
</article>
