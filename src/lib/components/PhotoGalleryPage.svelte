<script>
	import { fade } from 'svelte/transition';
	import ArticlePhoto from './ArticlePhoto.svelte';
	
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

	<ArticlePhoto {altText} {imageName} {imageBucket} {caption} imageCopyrightText=""></ArticlePhoto>

	<div class="mx-auto my-6 flex w-1/12 flex-row items-center justify-center">
		<div>
			{#if idx !== 0}
				<a class="font-medium text-stone-800 dark:text-stone-200" href={prevImgURL}>prev</a>
			{/if}
		</div>

		{#if idx !== 0 && idx !== endIdx}
			<div class="mx-2 text-stone-800 dark:text-stone-200">/</div>
		{/if}

		{#if idx !== endIdx}
			<div>
				<a class="font-medium text-stone-800 dark:text-stone-200" href={nextImgURL}>next</a>
			</div>
		{/if}
	</div>
</div>
