<script>
	export let href;
	export let active;
	export let leftMargin = true;
</script>

<a
	class="text-base md:text-lg text-gray-800 dark:text-gray-200 my-4 
		{active && 'underline underline-offset-8 decoration-gray-400'} 
		{leftMargin ? 'ml-3 md:ml-5' : 'mr-3 md:mr-5'} "
	{href}
>
	<slot />
</a>
