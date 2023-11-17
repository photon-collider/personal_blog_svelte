<script>
	export let href;
	export let active;
</script>

<a class="text-darkest" {href}>
	<div class="py-3 {active && 'border-b-4 border-primary '} ">
		<slot />
	</div>
</a>
