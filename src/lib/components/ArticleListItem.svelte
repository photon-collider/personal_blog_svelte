<script>
	export let date;
	export let title;
	export let description;
	export let slug;
	import { getReadableDate } from '$lib/utils';
</script>

<div class="flex flex-col pb-8">
	<time class="text-gray-600/90 dark:text-gray-400/90 text-xs md:text-sm">
		{getReadableDate(date)}
	</time>

	<a
		class="text-gray-600/90 dark:text-gray-400/90 my-0.5 hover:underline inline-block text-xl md:text-2xl font-bold"
		href="/blog/{slug}"
	>
		{title}
	</a>

	{#if description}
		<p class="text-sm md:text-base text-gray-600 dark:text-gray-400 my-0 font-normal">
			{description}
		</p>
	{/if}
</div>
