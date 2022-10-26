<script>
	import { getReadableDate } from '$lib/utils';
	export let title;
	export let description;
	export let date;
	export let dateUpdated;
</script>

<header class="container-md article-header">
	<h1>{title}</h1>
	<p class="article-description">
		{description}
	</p>

	<p class="article-date"><b>Published</b> {getReadableDate(date)}</p>
	{#if dateUpdated}
		<p class="article-date"><b>Updated</b> {getReadableDate(dateUpdated)}</p>
	{/if}
</header>
