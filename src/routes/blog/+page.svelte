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

<section class="latest-articles container-md">
	<h1 class="mb-6">Blog Posts</h1>
	<ArticleTagsList tags={articleTags} />

	<ArticleList articleList={articles} />
</section>
