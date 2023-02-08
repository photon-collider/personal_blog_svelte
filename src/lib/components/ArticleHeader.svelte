<script>
	import { getReadableDate } from '$lib/utils';
	export let title;
	export let description;
	export let date;
	export let dateUpdated;
</script>

<div class="container-md mb-8 prose prose-stone dark:prose-invert prose-lg">
	<h1>{title}</h1>
	<p class="my-2 py-0 text-xl font-semibold md:text-2xl">
		{description}
	</p>

	<p class="prose-base mt-0 pt-0"><b>Published</b> {getReadableDate(date)}</p>
	{#if dateUpdated}
		<p>
			<b>Updated</b>
			{getReadableDate(dateUpdated)}
		</p>
	{/if}
</div>
