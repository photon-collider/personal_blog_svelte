<script>
	export let articleList;
	import ArticleListItem from './ArticleListItem.svelte';

	let numArticles = articleList.length;
</script>

<div class="flex flex-col gap-3">
	{#each articleList as article}
		<ArticleListItem
			slug={article.slug}
			title={article.title}
			description={article.description}
			date={article.date}
		/>
	{/each}
</div>
