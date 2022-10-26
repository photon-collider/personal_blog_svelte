<script>
	export let href;
	import { page } from '$app/stores';

	$: isActive = $page.url.pathname.startsWith(href);
</script>

<li>
	<a class="nav-item {isActive ? 'nav-item-active' : ''}" {href}>
		<slot />
	</a>
</li>
