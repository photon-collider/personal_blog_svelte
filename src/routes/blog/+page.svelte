<script>
	export let data;
	import ArticleList from '$lib/components/ArticleList.svelte';
	let articles = data.articles;
</script>

<section class="latest-articles container-md">
	<h1 class="mb-6">Blog Posts</h1>
	<ArticleList articleList={articles} />

	<div>
		<a class="nav-button" href="/blog/">See More</a>
	</div>
</section>
