<script>
	import ArticleBio from './ArticleBio.svelte';
	import ArticleTagsList from './ArticleTagsList.svelte';
	export let tags;
</script>

<aside class="container-md py-12">
	<ArticleBio />
	<ArticleTagsList {tags} />
</aside>
