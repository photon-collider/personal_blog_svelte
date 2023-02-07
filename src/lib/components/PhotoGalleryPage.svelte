<script>
	import { fade } from 'svelte/transition';

	//source URL for image file host
	export let imageHostRoot = 'https://banthonio.nyc3.digitaloceanspaces.com';
	//sub folder within stored images
	export let imageBucket;

	export let imageCopyrightText = 'copyright-bryan-anthonio_com-';
	export let imageName;

	let fullImageName = `${imageCopyrightText}${imageName}`;

	let imageBucketURL = `${imageHostRoot}/${imageBucket}`;

	let largeImageURL = `${imageBucketURL}/${fullImageName}-lg.jpeg`;
	let mediumImageURL = `${imageBucketURL}/${fullImageName}-md.jpeg`;
	let smallImageURL = `${imageBucketURL}/${fullImageName}-sm.jpeg`;

	export let altText = '';
	export let caption;
	export let idx;
	export let endIdx;
	export let prevImgURL;
	export let nextImgURL;
	const duration = 200;
</script>

<div class="container mx-auto max-w-max py-8">
	<figure>
		<img
			srcset="{largeImageURL}  1425w,  {mediumImageURL} 1125w, {smallImageURL} 750w"
			alt={altText}
			src={smallImageURL}
			sizes="(max-width: 48rem) 100vw, 72rem"
			loading="lazy"
			class="shadow-lg"
		/>

		<figcaption
			class="px-5 pt-2 text-sm font-light italic text-gray-700/80 dark:text-gray-300 md:px-0 md:text-base"
		>
			{caption}
			<slot name="caption" />
		</figcaption>
	</figure>

	<div class="mx-auto my-6 flex w-1/12 flex-row items-center justify-center">
		<div>
			{#if idx !== 0}
				<a class="font-medium text-gray-600/80 dark:text-gray-400/80" href={prevImgURL}>prev</a>
			{/if}
		</div>

		{#if idx !== 0 && idx !== endIdx}
			<div class="mx-2">/</div>
		{/if}

		{#if idx !== endIdx}
			<div>
				<a class="font-medium text-gray-600/80 dark:text-gray-400/80" href={nextImgURL}>next</a>
			</div>
		{/if}
	</div>
</div>
