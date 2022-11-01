<script>
	import PhotoGrid from '$lib/components/PhotoGrid.svelte';
	import photoFeed from '$lib/data/photofeed.json';
</script>

<section class="container-md">
	<h1>Photos</h1>
	<PhotoGrid photoGridItems={photoFeed} />
</section>
