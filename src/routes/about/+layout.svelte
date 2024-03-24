<script>
	import ArticleHeader from '$lib/components/Article/ArticleHeader.svelte';
	import ArticleBodyText from '$lib/components/Article/ArticleBodyText.svelte';
</script>

<ArticleHeader title="About Me" description="A brief introduction about me and how to reach out." />

<main>
	<ArticleBodyText>
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
		<slot />
	</ArticleBodyText>
</main>
