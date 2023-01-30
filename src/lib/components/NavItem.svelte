<script>
	export let href;
	export let active;
</script>

<li>
	<a
		class="text-base md:text-lg text-gray-800 my-4 ml-3 md:ml-5 {active &&
			' underline underline-offset-8'}"
		{href}
	>
		<slot />
	</a>
</li>
