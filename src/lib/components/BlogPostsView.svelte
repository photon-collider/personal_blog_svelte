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
		<div class="mt-[88px]">
			<h2 class="mb-4 text-md">
				{categoryObj['pretty_label']}
			</h2>
			<ArticleList articleList={articlesGroupedCategory[categoryObj['label']]} />
		</div>
	{/each}
</main>
