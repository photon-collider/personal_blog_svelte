<script>
	export let href;
	export let active;
	export let leftMargin = true;
</script>

<a class="text-darkest" {href}>
	<div class="py-2 {active && 'border-b-4 border-primary '} ">
		<slot />
	</div>
</a>
