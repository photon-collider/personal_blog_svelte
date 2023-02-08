<script>
	import ArticleList from '$lib/components/ArticleList.svelte';
	import ArticleTagsList from '$lib/components/ArticleTagsList.svelte';
	export let data;
	const { articles, articleTagData } = data;
	const articleTags = Object.keys(articleTagData);
</script>

<svelte:head>
	<title>Blog | Bryan Anthonio</title>
</svelte:head>

<section class="container-md">
	<h1>Blog Posts</h1>

	<div class="flex flex-col">
		<ArticleList articleList={articles} />
		<div class="mb-8">
			<ArticleTagsList tags={articleTags} titleTop={true} />
		</div>
	</div>
</section>
