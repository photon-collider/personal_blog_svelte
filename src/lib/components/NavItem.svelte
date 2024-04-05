<script>
	export let href;
	export let active;
</script>

<a
	class="flex h-full flex-col justify-center border-b-4 text-[0.875rem] font-bold uppercase tracking-wider text-darkest {active
		? 'border-primary opacity-100'
		: 'border-lightest opacity-[65%]'}"
	{href}
>
	<slot />
</a>
