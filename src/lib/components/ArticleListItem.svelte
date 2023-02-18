<script>
	export let date;
	export let title;
	export let description;
	export let slug;
	import { getReadableDate } from '$lib/utils';
</script>

<div class="flex flex-col pb-8">
	<time class="text-xs text-stone-800/80 dark:text-stone-200/80 md:text-sm">
		{getReadableDate(date)}
	</time>

	<a
		class="my-0.5 inline-block text-xl font-bold text-stone-800 dark:text-stone-100 hover:underline  md:text-2xl"
		href="/blog/{slug}"
	>
		{title}
	</a>

	{#if description}
		<p class="my-0 text-sm font-normal prose prose-stone dark:prose-invert md:text-base">
			{description}
		</p>
	{/if}
</div>
