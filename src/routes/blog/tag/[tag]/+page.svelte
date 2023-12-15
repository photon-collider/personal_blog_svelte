<script>
	import BlogPostsView from '$lib/components/BlogPostsView.svelte';
	export let data;
	const { articlesGroupedYear, articleTagData, tag } = data;
</script>

<svelte:head>
	<title>Bryan Anthonio | Posts tagged: {tag}</title>
</svelte:head>

<div>
	<h1>Posts tagged: <span class="font-mono">{tag}</span></h1>
	<BlogPostsView {articlesGroupedYear} {articleTagData} />
</div>
