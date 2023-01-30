<script>
	export let href;
</script>

<li>
	<a class="nav-item" {href}>
		<slot />
	</a>
</li>

<style lang="postcss">
	.nav-item {
		@apply text-base md:text-lg;
		@apply text-gray-800/70;
	}
</style>
