<script>
	import NavItem from './NavItem.svelte';
	import PhotoGridItem from './PhotoGridItem.svelte';
	export let photoGridItems;
	export let imgRootPath;
</script>

<div class="photogrid">
	{#each photoGridItems as item}
		<PhotoGridItem imgBucket={item.imgBucket} imgName={item.imgName} imgCaption={item.caption} />
	{/each}
</div>
