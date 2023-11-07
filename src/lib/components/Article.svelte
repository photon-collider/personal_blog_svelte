<script>
	import ArticleHeader from './Article/ArticleHeader.svelte';
	import ArticleBodyText from './Article/ArticleBodyText.svelte';
	import ArticleFooter from './Article/ArticleFooter.svelte';
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

	<ArticleBodyText>
		{@html data.articleContent}
	</ArticleBodyText>

	<ArticleFooter {tags} />
</article>
