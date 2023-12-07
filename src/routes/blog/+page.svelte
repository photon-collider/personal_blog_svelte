<script>
	import BlogPostsView from '../../lib/components/BlogPostsView.svelte';
	export let data;
	const { articleTagData, articlesGroupedYear } = data;
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

<div>
	<h1 class="mb-5">Blog Posts</h1>
	<p class="text-size-2 text-dark">
		Topics include technology, photography, web development learnings, and musings on life and
		career
	</p>
	<BlogPostsView {articlesGroupedYear} {articleTagData} />
</div>
