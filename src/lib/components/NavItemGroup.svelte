<script>
    import NavItem from "./NavItem.svelte";
	export let items;
</script>

<ul class="flex flex-row">
    {#each items as { href, title, active }}
        <NavItem {href} {active}}>{title}</NavItem>
    {/each}
</ul>


