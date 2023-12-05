<script>
	import { navFooterItems } from '$lib/config';
	import NavItemGroup from './NavItemGroup.svelte';
	import { DateTime } from 'luxon';
	import PageContainer from './PageContainer.svelte';
	let currentYear = DateTime.now().year;
</script>

<footer class="border-t border-light bg-lightest text-darkest">
	<PageContainer classesToAdd="mt-4">
		<nav>
			<NavItemGroup items={navFooterItems} leftMargin={false} />
		</nav>

		<div class="py-2" id="copyright">
			© 2020-{currentYear}, Bryan Anthonio. All rights reserved. <br /> Built using
			<a class="font-bold underline" href="https://kit.svelte.dev/">SvelteKit</a>. Hosted on
			<a class="font-bold underline" href="https://www.netlify.com">Netlify</a>.
		</div>
	</PageContainer>
</footer>

<style>
	footer {
		width: 100%;
		height: 200px;
		flex-shrink: 0;
	}
</style>
