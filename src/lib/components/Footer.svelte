<script>
	import { DateTime } from 'luxon';
	let currentYear = DateTime.now().year;
</script>

<footer class="bg-gray-100">
	<nav class="container-md footer-item footer-nav">
		<div class="footer-links">
			<a href="/blog/" class="underline-effect nav-item">Blog</a>

			<a href="/photos/" class="underline-effect nav-item">Photos</a>

			<a href="/feed/feed.xml" class="underline-effect nav-item">RSS</a>
		</div>
	</nav>

	<div class="footer-item container-md" id="copyright">
		© 2020-{currentYear}, Bryan Anthonio. All rights reserved. Built using
		<a href="https://kit.svelte.dev/">SvelteKit</a>. Hosted on
		<a href="https://www.netlify.com">Netlify</a>.
	</div>
</footer>
