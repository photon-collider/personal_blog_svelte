<script>
	import { fade } from 'svelte/transition';
	export let data;
	import '$lib/styles/base.css';
	import '$lib/styles/prism.css';
	//import '$lib/styles/katex.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };
</script>

<div>
	<Header />

	{#key data.currentRoute}
		<main in:fade={transitionIn} out:fade={transitionOut}>
			<slot />
		</main>
	{/key}

	<Footer />
</div>
