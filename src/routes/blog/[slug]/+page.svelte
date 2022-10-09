<script>
	export let data;
	import { getReadableDate } from '$lib/utils';

	let title = data.articleInfo.title;
	let description = data.articleInfo.description;
	let content = data.articleContent;
	let date = data.articleInfo.date;
</script>

<article>
	<div class="container-md article-header">
		<h1>{title}</h1>
		<p class="article-description">
			{description}
		</p>
		<p>{getReadableDate(date)}</p>
	</div>

	<article class="article-body">
		<svelte:component this={content} />
	</article>
</article>
