<script>
	import { navFooterItems } from '$lib/config';
	import NavItemGroup from './NavItemGroup.svelte';
	import { DateTime } from 'luxon';
	let currentYear = DateTime.now().year;

	import { onDestroy } from 'svelte';
</script>

<footer class="bg-stone-50 dark:bg-stone-900 flex flex-col justify-center">
	<nav class="container-md py-4">
		<NavItemGroup items={navFooterItems} leftMargin={false} />
	</nav>

	<div
		class="container-md py-4 text-sm md:text-base text-gray-800 dark:text-gray-200"
		id="copyright"
	>
		© 2020-{currentYear}, Bryan Anthonio. All rights reserved. Built using
		<a class="text-blue-800 dark:text-blue-400" href="https://kit.svelte.dev/">SvelteKit</a>. Hosted on
		<a class="text-blue-800 dark:text-blue-400" href="https://www.netlify.com">Netlify</a>.
	</div>
</footer>

