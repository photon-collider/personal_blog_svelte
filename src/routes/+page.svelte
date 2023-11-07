<script>
	export let data;
	import FrontPageSection from '$lib/components/FrontPageSection.svelte';
	import ArticleList from '$lib/components/ArticleList.svelte';
	import { numArticlesToShow } from '$lib/config';
	import HeroBanner from '$lib/components/HeroBanner.svelte';

	let w = 0;

	$: outerWidth = 0;
	$: numPhotosToShow = outerWidth > 768 ? 8 : 6;

	let recentArticles = data.articles.slice(0, numArticlesToShow);
</script>

<svelte:window bind:outerWidth />

<svelte:head>
	<title>Bryan Anthonio</title>
</svelte:head>

<HeroBanner />
<section>
	<FrontPageSection hrefViewAll="/blog/" title="Recent Blog Posts">
		<ArticleList articleList={recentArticles} />
	</FrontPageSection>
</section>
