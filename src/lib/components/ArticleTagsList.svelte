<script>
	export let tags;
	export let titleTop = false;
</script>

<div class="mt-8 flex {titleTop ? 'flex-col' : 'flex-row'}">
	<span class="font-bold text-stone-800 dark:text-stone-200 {titleTop ? 'mb-4' : 'mr-3'} text-base"
		>TAGS{titleTop ? '' : ':'}</span
	>
	<div class="flex flex-row flex-wrap">
		{#each tags as tag}
			<div class="mb-3">
				<a
					class="mr-3 inline rounded border bg-stone-100 border-stone-400 px-2 py-1 text-sm text-stone-700 hover:border-solid hover:border-stone-900 dark:border-stone-400/0 dark:bg-stone-700 dark:text-stone-300 hover:dark:border-stone-500"
					href="/blog/tag/{tag}">{tag}</a
				>
			</div>
		{/each}
	</div>
</div>
