<script>
	import ArticleBodyText from '$lib/components/ArticleBodyText.svelte';
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import ArticleFooter from '../../../lib/components/ArticleFooter.svelte';

	export let data;
	const { title, date, description, dateUpdated, tags } = data.meta;
</script>

<svelte:head>
	<title>{title} | Bryan Anthonio</title>
</svelte:head>

<article>
	<ArticleHeader {title} {description} {date} {dateUpdated} />

	<ArticleBodyText>
		{@html data.articleContent}
	</ArticleBodyText>

	<ArticleFooter {tags} />
</article>
