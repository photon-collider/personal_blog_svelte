<script>
	import HeroBanner from '$lib/components/HeroBanner.svelte';
	import { siteDescription } from '$lib/config';
</script>

<svelte:head>
	<title>Bryan Anthonio</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<HeroBanner />
