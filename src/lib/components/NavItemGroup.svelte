<script>
	import NavItem from './NavItem.svelte';
	export let items;
	export let leftMargin = false;
</script>

<ul class="flex flex-row gap-3 sm:gap-4">
	{#each items as { href, title, active }}
		<li>
			<NavItem {href} {active} {leftMargin}>{title}</NavItem>
		</li>
	{/each}
</ul>
