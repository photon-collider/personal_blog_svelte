<script>
	export let maxWidth = 150;
	export let maxHeight = 150;
	export let wrapperClass = 'flex justify-center mb-8 md:mb-0 w-full';
	export let imgClass = 'rounded-full';
</script>

<figure class={wrapperClass}>
	<img
		class={imgClass}
		loading="lazy"
		src="/images/bio_pic.jpg"
		alt="Portrait of Bryan Anthonio"
		style="max-width: {maxWidth}px; max-height:{maxHeight}px;"
	/>
</figure>

<style>
</style>
