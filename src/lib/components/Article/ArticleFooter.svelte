<script>
	import ArticleBio from './ArticleBio.svelte';
	import ArticleTagsList from '../ArticleTagsList.svelte';
	export let tags;
</script>

<div class="footer writing mx-auto my-6">
	<div class="bg-white p-4 shadow-sm">
		<ArticleBio />
	</div>

	<div />
	<ArticleTagsList {tags} />
</div>

<style>
	.footer {
		max-width: var(--max-width-writing);
	}
</style>
