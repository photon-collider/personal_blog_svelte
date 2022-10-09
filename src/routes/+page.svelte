<script>
	export let data;
	import ArticleList from '$lib/components/ArticleList.svelte';
	let numArticlesToShow = 3;
	let recentArticles = data.articles.slice(0, numArticlesToShow);
</script>

<div class="front-page-items">
	<section class="latest-articles container-md">
		<h2 class="mb-6">Recent Blog Posts</h2>
		<ArticleList articleList={recentArticles} />

		<div>
			<a class="nav-button" href="/blog/">See More</a>
		</div>
	</section>

	<section class="recent-photos container-md">
		<h2 class="mb-8">My Photography</h2>

		<div class="mt-8">
			<a class="nav-button" href="/photos/">See More</a>
		</div>
	</section>
</div>
