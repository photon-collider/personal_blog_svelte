<script>
	import { imgHostRootURL } from '$lib/config';
	import Figure from './Images/Figure.svelte';
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

<div class="my-5">
	<Figure {caption}>
		<slot>
			<img
				srcset="{largeImageURL}  1425w,  {mediumImageURL} 1125w, {smallImageURL} 750w"
				alt={altText}
				src={smallImageURL}
				sizes="(max-width: 48rem) 100vw, 72rem"
				loading="lazy"
				class="mx-auto mb-2 block rounded"
			/>
		</slot>
	</Figure>
</div>
