<script>
	export let caption;
</script>

<figure>
	<slot />

	{#if caption}
		<figcaption class="text-center text-dark">
			{caption}
		</figcaption>
	{/if}
</figure>
