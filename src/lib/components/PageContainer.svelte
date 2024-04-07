<script>
	export let classesToAdd = '';
</script>

<div class={`mx-auto max-w-[720px] ${classesToAdd}`}>
	<slot />
</div>
