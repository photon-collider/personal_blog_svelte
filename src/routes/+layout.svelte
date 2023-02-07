<script>
	import { preloadCode } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import '$lib/styles/base.css';
	import '$lib/styles/prism.css';
	import { siteDescription } from '$lib/config';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
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

<div>
	<div class="content bg-stone-50 dark:bg-stone-900">
		<Header />
		{#key data.path}
			<main in:fade={transitionIn} out:fade={transitionOut} tabindex="-1">
				<slot />
			</main>
		{/key}
	</div>
	<Footer />
</div>
