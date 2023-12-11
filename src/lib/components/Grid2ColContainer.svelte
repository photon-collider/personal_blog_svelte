<script>
	export let classesToAdd;
</script>

<div class={`grid grid-cols-1 lg:grid-cols-[auto_20rem] ${classesToAdd}`}><slot /></div>
