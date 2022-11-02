<script>
	import PhotoGridItem from './PhotoGridItem.svelte';
	export let photoGridItems;
</script>

<div class="photogrid">
	{#each photoGridItems as item, idx}
		<PhotoGridItem
			imgBucket={item.imgBucket}
			imgName={item.imgName}
			imgCaption={item.caption}
			imgHref={'/photos/' + item.slug}
			imgIdx={idx}
		/>
	{/each}
</div>
