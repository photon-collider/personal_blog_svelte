<script>
	import NavItem from './NavItem.svelte';
	export let items;
	export let leftMargin = true;
</script>

<ul class="flex flex-row">
	{#each items as { href, title, active }}
		<li>
			<NavItem {href} {active} {leftMargin}>{title}</NavItem>
		</li>
	{/each}
</ul>
