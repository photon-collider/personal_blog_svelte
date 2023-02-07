<script>
	export let date;
	export let title;
	export let description;
	export let slug;
	import { getReadableDate } from '$lib/utils';
</script>

<div class="flex flex-col pb-8">
	<time class="text-xs prose prose-stone dark:prose-invert md:text-sm">
		{getReadableDate(date)}
	</time>

	<a
		class="my-0.5 inline-block text-xl font-bold prose prose-stone dark:prose-invert hover:underline  md:text-2xl"
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
