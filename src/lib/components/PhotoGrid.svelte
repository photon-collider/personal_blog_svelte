<script>
	import PhotoGridItem from './PhotoGridItem.svelte';
	export let photoGridItems;
</script>

<div class="mb-8 grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-5">
	{#each photoGridItems as item, idx}
		<PhotoGridItem
			imgBucket={item.imgBucket}
			imgName={item.imgName}
			imgCaption={item.caption}
			imgHref={'/photos/' + item.slug}
		/>
	{/each}
</div>
