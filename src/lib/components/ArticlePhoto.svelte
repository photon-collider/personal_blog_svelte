<script>
	import { fade } from 'svelte/transition';
	import { imgHostRootURL } from '$lib/config';
	//sub folder within stored images
	export let imageBucket;

	export let imageCopyrightText = 'copyright-bryan-anthonio_com-';
	export let imageName;

	let fullImageName = `${imageCopyrightText}${imageName}`;

	let imageBucketURL = `${imgHostRootURL}/${imageBucket}`;

	let largeImageURL = `${imageBucketURL}/${fullImageName}-lg.jpeg`;
	let mediumImageURL = `${imageBucketURL}/${fullImageName}-md.jpeg`;
	let smallImageURL = `${imageBucketURL}/${fullImageName}-sm.jpeg`;

	export let altText = '';
	export let caption;

	//set to false if this is a portrait or vertical image
	export let isLandscape = true;

	const duration = 200;
</script>

<div class="photo-container">
	<img
		srcset="{largeImageURL}  1425w,  {mediumImageURL} 1125w, {smallImageURL} 750w"
		alt={altText}
		src={smallImageURL}
		sizes="(max-width: 48rem) 100vw, 72rem"
		loading="lazy"
	/>

	<div class="photo-caption">
		{caption}
		<slot name="caption" />
	</div>
</div>

<style>
	.photo-container {
		@apply container mx-auto py-8;
		max-width: max-content;
	}

	.photo-container > img {
		@apply shadow-lg;
	}

	.photopage-container {
		@apply container mx-auto py-8;
		max-width: max-content;
	}
</style>
