<script>
	import { getReadableDate } from '$lib/utils';
	export let title;
	export let description;
	export let date;
	export let dateUpdated;
</script>

<div class="container-md mb-8">
	<h1>{title}</h1>
	<p class="my-4 text-xl font-semibold prose prose-stone dark:prose-invert md:text-2xl">
		{description}
	</p>

	<p class="prose prose-stone dark:prose-invert"><b>Published</b> {getReadableDate(date)}</p>
	{#if dateUpdated}
		<p class="prose prose-stone dark:prose-invert">
			<b>Updated</b>
			{getReadableDate(dateUpdated)}
		</p>
	{/if}
</div>
