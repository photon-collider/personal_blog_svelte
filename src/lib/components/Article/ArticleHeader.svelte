<script>
	import { getReadableDate } from '$lib/utils';
	export let title;
	export let description;
	export let date;
	export let dateUpdated;
</script>

<div class="article-header">
	<h1>{title}</h1>
	<p class="subtitle">
		{description}
	</p>

	<p class="publish-time">Published <time>{getReadableDate(date)}</time></p>
	{#if dateUpdated}
		<p>
			<b>Updated</b>
			<time>{getReadableDate(dateUpdated)}</time>
		</p>
	{/if}
</div>

<style>
	h1 {
		margin-bottom: var(--spacing-md-rem);
	}
	.article-header {
		margin-bottom: var(--spacing-xl-rem);
		text-align: center;
	}

	.subtitle {
		color: var(--dark-color);
		font-weight: bold;
		font-size: var(--font-size-step-2);
		padding-bottom: var(--spacing-md-rem);
		max-width: 50ch;
		margin-left: auto;
		margin-right: auto;
	}

	.publish-time {
		color: var(--dark-color);
	}
</style>
