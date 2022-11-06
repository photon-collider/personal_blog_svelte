<script>
	export let tags;
</script>

<div class="tags-container">
	<span class="tag-label">TAGS:</span>

	<ul class="tags">
		{#each tags as tag}
			<li><a class="tag" href="/blog/tag/{tag}">{tag}</a></li>
		{/each}
	</ul>
</div>
