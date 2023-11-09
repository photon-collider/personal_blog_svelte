<script>
	import { imgHostRootURL } from '$lib/config';

	import Figure from './Images/Figure.svelte';
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

<Figure {caption}>
	<img alt={altText} src={imageURL} class="mx-auto block max-h-[640px]" />
</Figure>
