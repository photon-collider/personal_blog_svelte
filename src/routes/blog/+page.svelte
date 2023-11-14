<script>
	import BlogPostsView from '../../lib/components/BlogPostsView.svelte';
	export let data;
	const { articleTagData, articlesGroupedYear } = data;
</script>

<svelte:head>
	<title>Blog | Bryan Anthonio</title>
</svelte:head>

<div>
	<h1>Blog Posts</h1>

	<BlogPostsView {articlesGroupedYear} {articleTagData} />
</div>
