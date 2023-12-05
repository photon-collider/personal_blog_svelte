<script>
	export let classesToAdd;
</script>

<div class={`grid lg:grid-cols-[auto_20rem] ${classesToAdd}`}><slot /></div>
