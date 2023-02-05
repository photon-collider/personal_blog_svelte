<script>
	import { getReadableDate } from '$lib/utils';
	export let title;
	export let description;
	export let date;
	export let dateUpdated;
</script>

<div class="container-md mb-8">
	<h1>{title}</h1>
	<p class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 my-4 font-semibold">
		{description}
	</p>

	<p class="text-gray-600/90 dark:text-gray-400/90"><b>Published</b> {getReadableDate(date)}</p>
	{#if dateUpdated}
		<p class="text-gray-600/90 dark:text-gray-400/90"><b>Updated</b> {getReadableDate(dateUpdated)}</p>
	{/if}
</div>
