<script>
	export let tags;
	export let titleTop = false;
</script>

<div class="mt-8 flex {titleTop ? 'flex-col' : 'flex-row'}">
	<span class="font-bold text-gray-600 dark:text-gray-400 {titleTop ? 'mb-4' : 'mr-3'} text-base"
		>TAGS{titleTop ? '' : ':'}</span
	>
	<div class="flex flex-row flex-wrap">
		{#each tags as tag}
			<div class="mb-3">
				<a
					class="mr-3 inline rounded border bg-gray-100 px-2 py-1 text-sm text-gray-600 hover:border-solid hover:border-slate-900 dark:border-slate-400/0 dark:bg-gray-800 dark:text-gray-300 hover:dark:border-slate-500"
					href="/blog/tag/{tag}">{tag}</a
				>
			</div>
		{/each}
	</div>
</div>
