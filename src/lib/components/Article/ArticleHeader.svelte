<script>
	import { getReadableDate } from '$lib/utils';
	export let title;
	export let description;
	export let date;
	export let dateUpdated;
	export let tags;
	import Tag from '../Tag.svelte';
</script>

<div class="article-header mx-auto max-w-[var(--max-width-writing)]">
	<h1>{title}</h1>
	<p class="subtitle text-size-1 font-semibold leading-[1.1] text-dark">
		{description}
	</p>

	{#if date}
		<p class="publish-time mb-2">
			<b class="">Published:</b> <time>{getReadableDate(date)}</time>
		</p>
	{/if}

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
				<Tag {tag} classesToAdd="mr-1" />
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
		padding-bottom: var(--spacing-3-rem);
	}

	.publish-time {
		color: var(--dark-color);
	}
</style>
