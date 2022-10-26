<script>
	export let date;
	export let title;
	export let description;
	export let path;
	export let isLastArticle = false;
	import { getReadableDate } from '$lib/utils';
</script>

<!-- 
<li class="articlelist-item {!isLastArticle ? 'articlelist-item-divider' : ''}">

-->
<li class="articlelist-item">
	<div class="articlelist-item-header">
		<time class="articlelist-item-date">
			{getReadableDate(date)}
		</time>
	</div>
	<div>
		<h3 class="articlelist-item-link">
			<a href={path}>
				{#if title}
					{title}
				{:else}
					<code>{path}</code>
				{/if}
			</a>
		</h3>
	</div>

	{#if description}
		<p class="articlelist-item-description">
			{description}
		</p>
	{/if}
</li>
