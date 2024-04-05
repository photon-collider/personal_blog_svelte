<script>
	import ArticleList from './ArticleList.svelte';
	export let articlesGroupedCategory;
	import { blogPostCategories } from '$lib/config';
	console.log(blogPostCategories);

	let temp = articlesGroupedCategory[blogPostCategories[0]['label']];
	console.log(blogPostCategories.length);
</script>

<main>
	{#each blogPostCategories as categoryObj}
		<div class="mb-7">
			<h2 class="mb-4 mt-[88px] border-light !text-size-1">
				{categoryObj['pretty_label']}
			</h2>
			<ArticleList articleList={articlesGroupedCategory[categoryObj['label']]} />
		</div>
	{/each}
</main>
