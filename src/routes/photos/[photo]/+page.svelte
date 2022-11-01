<script>
	import PhotoGalleryPage from '$lib/components/PhotoGalleryPage.svelte';
	export let data;
	const requestedPhoto = data.requestedPhoto;
</script>

<PhotoGalleryPage
	imageCopyrightText=""
	imageBucket={requestedPhoto.imgBucket}
	imageName={requestedPhoto.imgName}
	caption={requestedPhoto.caption}
/>
