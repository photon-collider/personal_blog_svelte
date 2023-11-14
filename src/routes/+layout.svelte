<script>
	import { preloadCode } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import '$lib/styles/base.css';
	import '$lib/styles/prism.css';
	import { siteDescription } from '$lib/config';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import { onMount } from 'svelte';
	import { navHeaderItems } from '$lib/config';

	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	onMount(() => {
		const preloadedRoutes = navHeaderItems.map((item) => item.href);
		preloadCode(...preloadedRoutes);
	});
</script>

<svelte:head>
	<meta data-key="description" name="description" content={siteDescription} />
	<meta name="author" content="Bryan Anthonio" />
</svelte:head>

<div class="content">
	<PageContainer>
		<Header />
		{#key data.path}
			<div in:fade|global={transitionIn} out:fade|global={transitionOut} tabindex="-1">
				<slot />
			</div>
		{/key}
	</PageContainer>
</div>

<Footer />

<style>
	.content {
		flex: 1 0 auto;
		padding: 20px;
	}
</style>
