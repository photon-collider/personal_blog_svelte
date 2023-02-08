<script>
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

	if (!altText) {
		altText = caption;
	}

</script>

<figure class="container mx-auto max-w-max py-8">
	<img
		srcset="{largeImageURL}  1425w,  {mediumImageURL} 1125w, {smallImageURL} 750w"
		alt={altText}
		src={smallImageURL}
		sizes="(max-width: 48rem) 100vw, 72rem"
		loading="lazy"
	/>

	{#if caption}
		<figcaption class="px-0 pt-2 text-sm font-light italic text-stone-800 dark:text-stone-100 md:text-base">
			{caption}
			<slot name="caption" />
		</figcaption>
	{/if}
</figure>

<style>
	img {
		display: block;
		width: 100%;
		height: auto;
		max-width: 100%;
	}
</style>
