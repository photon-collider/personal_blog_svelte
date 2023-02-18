<script>
	import { navFooterItems } from '$lib/config';
	import NavItemGroup from './NavItemGroup.svelte';
	import { DateTime } from 'luxon';
	let currentYear = DateTime.now().year;
</script>

<footer class="flex flex-col justify-center bg-stone-200 dark:bg-stone-900">
	<nav class="container-md py-4">
		<NavItemGroup items={navFooterItems} leftMargin={false} />
	</nav>

	<div
		class="container-md py-4 text-sm text-stone-800 dark:text-stone-200 md:text-base"
		id="copyright"
	>
		© 2020-{currentYear}, Bryan Anthonio. All rights reserved. Built using
		<a class="text-stone-800 dark:text-stone-200 underline font-bold" href="https://kit.svelte.dev/"
			>SvelteKit</a
		>. Hosted on
		<a class="text-stone-800 dark:text-stone-200 underline font-bold" href="https://www.netlify.com"
			>Netlify</a
		>.
	</div>
</footer>
