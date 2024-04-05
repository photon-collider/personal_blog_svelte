<script>
	import { preloadCode } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import '$lib/styles/base.css';
	import '$lib/styles/prism.css';
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
	<meta name="author" content="Bryan Anthonio" />
	<script defer data-domain="bryananthonio.com" src="https://plausible.io/js/script.js"></script>
</svelte:head>

<div class="content px-3 sm:px-5 xl:px-0">
	<div class="border-b border-light shadow-sm">
		<PageContainer>
			<Header />
		</PageContainer>
	</div>

	<PageContainer classesToAdd={'my-[120px]'}>
		{#key data.path}
			<div in:fade|global={transitionIn} out:fade|global={transitionOut} tabindex="-1">
				<slot />
			</div>
		{/key}
	</PageContainer>
</div>
<div class="px-3 sm:px-5 xl:px-0">
	<Footer />
</div>

<style>
	.content {
		flex: 1 0 auto;
	}
</style>
