<script>
	import { prefetch } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import '$lib/styles/base.css';
	import '$lib/styles/prism.css';
	import { siteDescription } from '$lib/config';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };
</script>

<svelte:head>
	<meta data-key="description" name="description" content={siteDescription} />
	<meta name="author" content="Bryan Anthonio" />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css"
		integrity="sha384-Juol1FqnotbkyZUT5Z7gUPjQ9gzlwCENvUZTpQBAPxtusdwFLRy382PSDx5UUJ4/"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="content">
	<Header />
	{#key data.path}
		<main in:fade={transitionIn} out:fade={transitionOut} tabindex="-1">
			<slot />
		</main>
	{/key}
</div>

<Footer />
