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
		<nav class="container-md flex flex-row justify-between items-center my-8">
			<NavItem leftMargin={false} href="/" active={atHome}>Home</NavItem>
			<div class="flex flex-row">
				<NavItemGroup items={headerLinks} />
				<button on:click={() => {window.document.body.classList.toggle('dark')} } class="inline-block ml-3 p-1 rounded-full  border-slate-700 dark:border-slate-300">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 fill-stone-700 dark:fill-stone-200 stroke-stone-700 dark:stroke-stone-200">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
					  </svg>					  
				</button>
			</div>
		</nav>
	</div>
</header>
