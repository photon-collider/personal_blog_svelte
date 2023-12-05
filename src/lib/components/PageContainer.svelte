<script>
	export let classesToAdd = '';
</script>

<div class={`mx-auto max-w-[65rem] ${classesToAdd}`}>
	<slot />
</div>
