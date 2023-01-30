<script>
	import {navFooterItems} from '$lib/config'
	import NavItemGroup from './NavItemGroup.svelte';
	import { DateTime } from 'luxon';
	let currentYear = DateTime.now().year;
	
	import { onDestroy } from 'svelte';

</script>

<footer class="bg-gray-100">
	<nav class="container-md footer-nav py-4">

		<NavItemGroup items={navFooterItems}/>
		<!--
		<ul class="footer-links">
			<NavItemFooter href="/blog/">Blog</NavItemFooter>
			<NavItemFooter href="/photos/">Photos</NavItemFooter>
			<NavItemFooter href="/about/">About</NavItemFooter>
			<NavItemFooter href="/api/blog-rss.xml">RSS</NavItemFooter>
		</ul>
		-->

	</nav>

	<div class="container-md py-4" id="copyright">
		© 2020-{currentYear}, Bryan Anthonio. All rights reserved. Built using
		<a href="https://kit.svelte.dev/">SvelteKit</a>. Hosted on
		<a href="https://www.netlify.com">Netlify</a>.
	</div>
</footer>

<style lang="postcss">
	.nav-item {
		@apply text-base md:text-lg;
		@apply text-gray-800/70;
	}

	.footer-nav {
		@apply flex flex-row justify-between;
	}

	.footer-links {
		@apply flex flex-row flex-wrap;
	}

	.footer-links a {
		@apply mr-3;
	}
</style>
