<script>
	import ArticleList from '$lib/components/ArticleList.svelte';
	export let data;
	const tag = data.tag;
	const articles = data.articles;
</script>

<section class="container-md">
	<h1>Posts tagged: {tag}</h1>

	<ArticleList articleList={articles} />
</section>
