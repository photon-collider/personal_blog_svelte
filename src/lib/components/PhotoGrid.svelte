<script>
	import PhotoGridItem from './PhotoGridItem.svelte';
	export let photoGridItems;
</script>

<div class="grid grid-cols-3 gap-2 md:gap-5 md:grid-cols-4 mb-8">
	{#each photoGridItems as item, idx}
		<PhotoGridItem
			imgBucket={item.imgBucket}
			imgName={item.imgName}
			imgCaption={item.caption}
			imgHref={'/photos/' + item.slug}
		/>
	{/each}
</div>

