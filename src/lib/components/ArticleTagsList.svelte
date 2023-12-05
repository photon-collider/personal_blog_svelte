<script>
	export let tags;
	export let titleTop = false;
	import Tag from './Tag.svelte';
</script>

<div class="mt-8 flex {titleTop ? 'flex-col' : 'flex-row'}">
	<span class="font-bold text-stone-800 dark:text-stone-200 {titleTop ? 'mb-3' : 'mr-3'} text-base"
		>TAGS{titleTop ? '' : ':'}</span
	>
	<div class="flex flex-row flex-wrap gap-2">
		{#each tags as tag}
			<Tag {tag} />
		{/each}
	</div>
</div>
