<script>
	export let tags;
	export let titleTop = false;
</script>

<div class="mt-8 flex {titleTop ? 'flex-col' :'flex-row'}">
	<span class="font-bold text-gray-600 dark:text-gray-400 {titleTop ? "mb-4" : "mr-3"} text-base">TAGS{titleTop ? "" : ":"}</span>
	<div class="flex flex-row flex-wrap">
		{#each tags as tag}
			<div class="mb-3">
				<a
					class="mr-3 px-2 py-1 text-gray-600 dark:text-gray-300 text-sm bg-gray-100 dark:bg-gray-800 inline rounded hover:border-slate-900 hover:border-solid border hover:dark:border-slate-500 dark:border-slate-400/0"
					href="/blog/tag/{tag}">{tag}</a
				>
			</div>
		{/each}
	</div>
</div>
