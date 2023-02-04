<script>
	export let tags;
</script>

<div class="mt-10 flex flex-row">
	<span class="font-bold text-gray-600">TAGS:</span>
	<div class="flex flex-row flex-wrap">
		{#each tags as tag}
			<div class="mb-3">
				<a class="ml-3 px-2 py-1 text-gray-600 bg-gray-100 inline rounded" href="/blog/tag/{tag}"
					>{tag}</a
				>
			</div>
		{/each}
	</div>
</div>
