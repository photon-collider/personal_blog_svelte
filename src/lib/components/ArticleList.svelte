<script>
	export let articleList;
	import { getReadableDate } from '$lib/utils';
	import { loop_guard } from 'svelte/internal';
	import ArticleListItem from './ArticleListItem.svelte';

	let numArticles = articleList.length;
</script>

<ul class="articlelist">
	{#each articleList as article, articleID}
		<ArticleListItem
			path={article.path}
			title={article.meta.title}
			description={article.meta.description}
			date={article.meta.date}
			isLastArticle={articleID === numArticles - 1}
		/>
	{/each}
</ul>
