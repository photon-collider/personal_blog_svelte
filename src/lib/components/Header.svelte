<script>
	import NavItem from './NavItem.svelte';
	import { page } from '$app/stores';
	import { each } from 'svelte/internal';
	import { navHeaderItems } from '$lib/config';
	import NavItemGroup from './NavItemGroup.svelte';

	$: atHome = $page.url.pathname === '/';

	$: headerLinks = navHeaderItems.map((item) => ({
		...item,
		active: $page.url.pathname.startsWith(item.href)
	}));
</script>

<header>
	<div class="page-container">
		<nav>
			<div class="container-md flex flex-row justify-between items-center my-8">
				<NavItem leftMargin={false} href="/" active={atHome}>Home</NavItem>
				<div>
					<NavItemGroup items={headerLinks} />
				</div>
			</div>
		</nav>
	</div>
</header>
