<script>
	export let date;
	export let title;
	export let description;
	export let slug;
	import { getReadableDate } from '$lib/utils';
</script>

<!-- 
<li class="articlelist-item {!isLastArticle ? 'articlelist-item-divider' : ''}">

-->
<div class="articlelist-item">
	<time class="articlelist-item-date">
		{getReadableDate(date)}
	</time>

	<a class="articlelist-item-link" href="/blog/{slug}">
		{title}
	</a>

	{#if description}
		<p class="articlelist-item-description">
			{description}
		</p>
	{/if}
</div>
