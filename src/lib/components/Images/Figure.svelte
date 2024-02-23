<script>
	export let caption;
</script>

<figure class="my-5">
	<slot />

	{#if caption}
		<figcaption class="text-dark">
			{caption}
		</figcaption>
	{/if}
</figure>
