<script>
	import { page } from '$app/stores';
	import { navHeaderItems } from '$lib/config';
	import NavItemGroup from './NavItemGroup.svelte';
	$: atHome = $page.url.pathname === '/';

	$: headerLinks = navHeaderItems.map((item) => ({
		...item,
		active: item.title == 'Home' ? atHome : $page.url.pathname.startsWith(item.href)
	}));

	function handleDarkModeToggle() {
		const isDark = document.documentElement.classList.contains('dark');

		isDark
			? document.documentElement.classList.remove('dark')
			: document.documentElement.classList.add('dark');

		window.localStorage.setItem('theme', isDark ? 'light' : 'dark');
	}
</script>

<header class="mb-7">
	<div class="page-container container-md my-8 flex flex-row items-center justify-between">
		<nav>
			<NavItemGroup items={headerLinks} />
		</nav>
		<button on:click={handleDarkModeToggle} class="ml-3 inline-block rounded-full">
			<div class="w-[1.5rem]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					class="fill-darkest stroke-darkest"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
					/>
				</svg>
			</div>
		</button>
	</div>
</header>
