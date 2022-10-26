<script>
	export let data;
	import ArticleBodyText from '$lib/components/ArticleBodyText.svelte';
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';

	let title = data.articleInfo.title;
	let description = data.articleInfo.description;
	let content = data.articleContent;
	let date = data.articleInfo.date;
	let dateUpdated = data.articleInfo.date_updated;
</script>

<article>
	<ArticleHeader {title} {description} {date} {dateUpdated} />

	<ArticleBodyText>
		<svelte:component this={content} />
	</ArticleBodyText>
</article>
