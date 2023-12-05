<script>
	export let date;
	export let title;
	export let slug;
	import { getShortDate } from '$lib/utils';
</script>

<a href="/blog/{slug}">
	<div class="group flex flex-row gap-2 rounded-sm py-1 hover:bg-primary md:mx-n2 md:px-2">
		<div class="block text-size-1 tracking-[-0.015em] text-darkest group-hover:text-primaryActive">
			{title}
		</div>

		<time
			class="ml-auto block self-center whitespace-nowrap font-mono text-size-0 text-dark group-hover:text-primaryActive"
		>
			{getShortDate(date)}
		</time>
	</div>
</a>
