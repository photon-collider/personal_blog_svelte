<script>
	export let href;
	export let active;
</script>

<a
	class="flex h-full flex-col justify-center border-b-4 text-[1rem] font-semibold uppercase tracking-wider text-darkest {active
		? 'border-primary'
		: 'border-lightest'}"
	{href}
>
	<slot />
</a>
