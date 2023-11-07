<script>
	import ArticleBio from './ArticleBio.svelte';
	import ArticleTagsList from '../ArticleTagsList.svelte';
	export let tags;
</script>

<aside class="footer writing">
	<ArticleBio />
	<ArticleTagsList {tags} />
</aside>

<style>
	.footer {
		max-width: var(--max-width-writing);
		margin-left: auto;
		margin-right: auto;
		margin-top: var(--spacing-xl);
		margin-bottom: var(--spacing-xl);
	}
</style>
