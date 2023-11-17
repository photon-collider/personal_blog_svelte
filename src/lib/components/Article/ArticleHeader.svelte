<script>
	import { getReadableDate } from '$lib/utils';
	export let title;
	export let description;
	export let date;
	export let dateUpdated;
	export let tags;
	import Tag from '../Tag.svelte';
</script>

<div class="article-header">
	<h1>{title}</h1>
	<p class="subtitle">
		{description}
	</p>

	<p class="publish-time mb-2">
		<b class="">Published:</b> <time>{getReadableDate(date)}</time>
	</p>
	{#if dateUpdated}
		<p class="mb-2">
			<b>Updated</b>
			<time>{getReadableDate(dateUpdated)}</time>
		</p>
	{/if}

	{#if tags}
		<p>
			<b class="text-dark">Tags:</b>
			{#each tags as tag}
				<Tag {tag} />
			{/each}
		</p>
	{/if}
</div>

<style>
	h1 {
		margin-bottom: var(--spacing-3-rem);
	}
	.article-header {
		margin-bottom: var(--spacing-6-rem);
	}

	.subtitle {
		color: var(--dark-color);
		font-weight: bold;
		font-size: var(--font-size-step-2);
		padding-bottom: var(--spacing-3-rem);
		max-width: 50ch;
	}

	.publish-time {
		color: var(--dark-color);
	}
</style>
