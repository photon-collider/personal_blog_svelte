<script>
	import ArticleList from '$lib/components/ArticleList.svelte';
	export let data;
	const { articles } = data;
</script>

<svelte:head>
	<title>Blog | Bryan Anthonio</title>
</svelte:head>

<section class="latest-articles container-md">
	<h1 class="mb-6">Blog Posts</h1>
	<ArticleList articleList={articles} />
</section>
