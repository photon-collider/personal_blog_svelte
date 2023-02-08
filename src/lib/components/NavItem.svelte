<script>
	export let href;
	export let active;
	export let leftMargin = true;
</script>

<a
	class="my-4 text-base text-stone-800 dark:text-stone-200 md:text-lg underline-offset-8 decoration-2
		{active && 'underline decoration-stone-500/80 dark:decoration-stone-400/80'} 
		{leftMargin ? 'ml-3 md:ml-5' : 'mr-3 md:mr-5'} "
	{href}
>
	<slot />
</a>
