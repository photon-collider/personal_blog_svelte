<script>
	export let data;
	import FrontPageSection from '$lib/components/FrontPageSection.svelte';
	import ArticleList from '$lib/components/ArticleList.svelte';
	import PhotoGrid from '$lib/components/PhotoGrid.svelte';
	import { numArticlesToShow } from '$lib/config';
	import HeroBanner from '$lib/components/HeroBanner.svelte';

	let w = 0;
	let numPhotosToShow = 6;

	$: outerWidth = 0;
	$: numPhotosToShow = outerWidth > 768 ? 8 : 6;

	let recentArticles = data.articles.slice(0, numArticlesToShow);
	$: recentPhotos = data.photoFeed.slice(0, numPhotosToShow);
</script>

<svelte:window bind:outerWidth />

<svelte:head>
	<title>Bryan Anthonio</title>
</svelte:head>

<HeroBanner />

<section class="front-page-items">
	<FrontPageSection hrefViewAll="/blog/" title="Recent Blog Posts">
		<ArticleList articleList={recentArticles} />
	</FrontPageSection>

	<FrontPageSection hrefViewAll="/photos/" title="Latest Photography">
		<PhotoGrid photoGridItems={recentPhotos} />
	</FrontPageSection>
</section>
