<script>
	import ArticleBodyText from '$lib/components/Article/ArticleBodyText.svelte';
	import BioPic from '$lib/components/BioPic.svelte';
	import Grid2ColContainer from '$lib/components/Grid2ColContainer.svelte';
</script>

<h1 class="mb-5">About Me</h1>

<main>
	<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
		<div>
			<p class="text-size-2 text-dark">
				Hello there, I'm <strong>Bryan Anthonio</strong>. <br /> Welcome to my corner of the internet.
				👋🏾
			</p>
		</div>
		<div class="">
			<img
				class="max-w-[150px] rounded-full"
				loading="lazy"
				src="/images/bio_pic.jpg"
				alt="Portrait of Bryan Anthonio"
			/>
		</div>
	</div>

	<ArticleBodyText>
		<slot />
	</ArticleBodyText>
</main>

<style>
	figcaption {
		letter-spacing: var(--letter-spacing-body-text);
	}
</style>
