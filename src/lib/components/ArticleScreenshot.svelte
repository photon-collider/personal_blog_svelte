<script>
	import { imgHostRootURL } from '$lib/config';

	export let imageBucket;
	export let imageName;

	let imageBucketURL = `${imgHostRootURL}/${imageBucket}`;
	let imageURL = `${imageBucketURL}/${imageName}.png`;

	export let altText = '';
	export let caption;

	if (!altText) {
		altText = caption;
	}
</script>

<figure class="container mx-auto py-8">
	<img alt={altText} src={imageURL} class="mx-auto max-h-[560px]" />

	{#if caption}
		<figcaption
			class="px-0 pt-2 text-center text-sm font-light italic text-stone-800 dark:text-stone-100 md:text-base"
		>
			{caption}
			<slot name="caption" />
		</figcaption>
	{/if}
</figure>

<style>
</style>
