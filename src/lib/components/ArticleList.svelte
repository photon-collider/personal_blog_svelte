<script>
	export let articleList;
	console.log({ articleList });
	import ArticleListItem from './ArticleListItem.svelte';
</script>

<div class="flex flex-col gap-2">
	{#each articleList as article}
		<ArticleListItem
			slug={article.slug}
			title={article.title}
			description={article.description}
			date={article.date}
		/>
	{/each}
</div>
