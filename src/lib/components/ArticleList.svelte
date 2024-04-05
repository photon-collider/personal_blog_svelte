<script>
	export let articleList;
	console.log({ articleList });
	import ArticleListItem from './ArticleListItem.svelte';
</script>

<div class="ml-[-124px] flex flex-col gap-1">
	{#each articleList as article}
		<ArticleListItem
			slug={article.slug}
			title={article.title}
			description={article.description}
			date={article.date}
		/>
	{/each}
</div>
