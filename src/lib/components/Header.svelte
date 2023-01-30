<script>
	import NavItem from './NavItem.svelte';
	import { page } from '$app/stores';
	import { each } from 'svelte/internal';
	import { navHeaderItems } from '$lib/config';
	import NavItemGroup from './NavItemGroup.svelte';

	$: headerLinks = navHeaderItems.map((item) => ({
		...item,
		active: $page.url.pathname.startsWith(item.href)
	}));
</script>

<header>
	<div class="page-container">
		<nav>
			<div class="container-md flex flex-row justify-between items-center my-8">
				<div class="nav-item text-gray-800">
					<a href="/">Home</a>
				</div>

				<div>
					<NavItemGroup items={headerLinks} />
				</div>
			</div>
		</nav>
	</div>
</header>

<style lang="postcss">
	.navbar {
		@apply flex flex-row justify-between items-center;
		@apply my-8;
	}
</style>
