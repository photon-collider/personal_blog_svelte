<script>
	import ArticleHeader from '$lib/components/Article/ArticleHeader.svelte';
	import ArticleBodyText from '$lib/components/Article/ArticleBodyText.svelte';
</script>

<ArticleHeader
	title="What I'm Doing Now"
	description="A brief introduction about me and how to reach out."
/>

<main>
	<ArticleBodyText>
		<slot />
	</ArticleBodyText>
</main>
