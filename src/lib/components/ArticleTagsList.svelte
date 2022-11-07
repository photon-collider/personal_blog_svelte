<script>
	export let tags;
</script>

<div class="tags-container">
	<span class="tag-label">TAGS:</span>

	<div class="tags">
		{#each tags as tag}
			<div class="tag-container"><a class="tag" href="/blog/tag/{tag}">{tag}</a></div>
		{/each}
	</div>
</div>
