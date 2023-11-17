<script>
	import Grid2ColContainer from './Grid2ColContainer.svelte';
	import ArticleList from './ArticleList.svelte';
	import ArticleTagsList from './ArticleTagsList.svelte';
	export let articleTagData;
	export let articlesGroupedYear;

	const articleTags = Object.keys(articleTagData);
	const articleYears = Object.keys(articlesGroupedYear).reverse();
</script>

<Grid2ColContainer classesToAdd="lg:gap-7">
	<main>
		{#each articleYears as year}
			<div class="mb-7">
				<h2 class="mb-3">{year}</h2>
				<ArticleList articleList={articlesGroupedYear[year]} />
			</div>
		{/each}
	</main>
	<aside>
		<div class="rounded border border-light p-3 shadow-sm lg:mt-[var(--spacing-6-rem)]">
			<ArticleTagsList tags={articleTags} titleTop={true} />
		</div>
	</aside>
</Grid2ColContainer>
