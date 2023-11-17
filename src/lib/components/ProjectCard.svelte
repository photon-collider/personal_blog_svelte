<script>
	import SecondaryButton from './Buttons/SecondaryButton.svelte';

	export let title;

	export let githubLink;
	export let articleLink;
	export let demoLink;
</script>

<div class="rounded bg-white p-4 shadow-sm">
	<div>
		<a href={demoLink || githubLink} class="bg-primary">
			<h2
				class="my-0 mb-3 w-fit font-mono text-size-1 decoration-primary decoration-2 hover:underline"
			>
				{title}
			</h2>
		</a>
	</div>
	<div class="mb-3 text-dark">
		<slot />
	</div>

	<div class="flex gap-2">
		{#if articleLink}
			<a href={articleLink}>
				<SecondaryButton>Article</SecondaryButton>
			</a>
		{/if}

		{#if githubLink}
			<a href={githubLink}>
				<SecondaryButton>Source</SecondaryButton>
			</a>
		{/if}
		{#if demoLink}
			<a href={demoLink}>
				<SecondaryButton>Source</SecondaryButton>
			</a>
		{/if}
	</div>
</div>
