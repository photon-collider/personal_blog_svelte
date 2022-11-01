<script>
	export let data;
	import FrontPageSection from '$lib/components/FrontPageSection.svelte';
	import ArticleList from '$lib/components/ArticleList.svelte';
	import photoFeed from '$lib/data/photofeed.json';
	import PhotoGrid from '$lib/components/PhotoGrid.svelte';
	let numArticlesToShow = 3;

	let w = 0;
	let numPhotosToShow = 6;

	$: outerWidth = 0;
	$: numPhotosToShow = outerWidth > 768 ? 8 : 6;

	let recentArticles = data.articles.slice(0, numArticlesToShow);
	$: recentPhotos = data.photoFeed.slice(0, numPhotosToShow);
</script>

<svelte:window bind:outerWidth />

<div class="front-page-items">
	<!--
	<section class="latest-articles container-md">
		<h2 class="mb-6">Recent Blog</h2>
		<ArticleList articleList={recentArticles} />

		<div>
			<a class="nav-button" href="/blog/">See More</a>
		</div>
	</section>
	-->

	<FrontPageSection hrefViewAll="/blog/" title="Blog Posts">
		<ArticleList articleList={recentArticles} />
	</FrontPageSection>

	<!--
	<section class="recent-photos container-md">
		<h2 class="mb-8">My Photography</h2>

		<div class="mt-8">
			<a class="nav-button" href="/photos/">See More</a>
		</div>
	</section>

	-->

	<FrontPageSection hrefViewAll="/photos/" title="Photography">
		<PhotoGrid photoGridItems={recentPhotos} />
	</FrontPageSection>
</div>
