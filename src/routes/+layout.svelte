<script>
	import { fade } from 'svelte/transition';
	export let data;
	import '$lib/styles/base.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ArticlePhoto from '$lib/components/ArticlePhoto.svelte';
</script>

<Header />

{#key data.currentRoute}
	<main in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
		<slot />
	</main>
{/key}

<Footer />
