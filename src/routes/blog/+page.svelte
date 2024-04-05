<script>
	import BlogPostsView from '../../lib/components/BlogPostsView.svelte';
	export let data;
	const { articlesGroupedCategory } = data;
	console.log(articlesGroupedCategory);
</script>

<svelte:head>
	<title>Blog | Bryan Anthonio</title>
	<meta
		data-key="description"
		name="description"
		content="Writings on technology, photography, web development learnings, and musings on life and
career."
	/>
</svelte:head>

<div class="mx-auto max-w-[720px]">
	<h1 class="mb-5">Blog Posts</h1>
	<BlogPostsView {articlesGroupedCategory} />
</div>
