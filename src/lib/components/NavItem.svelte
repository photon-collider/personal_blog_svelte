<script>
	export let href;
	export let active;
	export let leftMargin = true;
</script>

<a
	class="my-4 text-base text-gray-800 dark:text-gray-200 md:text-lg 
		{active && 'underline decoration-gray-400 underline-offset-8'} 
		{leftMargin ? 'ml-3 md:ml-5' : 'mr-3 md:mr-5'} "
	{href}
>
	<slot />
</a>
