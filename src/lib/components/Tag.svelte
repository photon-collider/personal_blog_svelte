<script>
	export let tag;
	export let classesToAdd;
</script>

<a
	class={`inline rounded-full border border-light bg-white px-2 py-1 font-mono text-size-0 text-dark hover:border-lightest hover:bg-primary hover:text-primaryActive ${classesToAdd}`}
	href="/blog/tag/{tag}">{tag}</a
>
