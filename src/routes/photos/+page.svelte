<script>
	import PhotoGrid from '$lib/components/PhotoGrid.svelte';

	export let data;
</script>

<section class="container-md">
	<h1>Photos</h1>
	<PhotoGrid photoGridItems={data.photoFeed} />
</section>
