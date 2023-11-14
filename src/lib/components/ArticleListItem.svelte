<script>
	export let date;
	export let title;
	export let description;
	export let slug;
	import { getShortDate } from '$lib/utils';
</script>

<a href="/blog/{slug}">
	<div class=" flex flex-row gap-2 rounded py-1 hover:bg-light md:px-2">
		<div class="block text-size-1 tracking-[-0.015em] text-darkest">
			{title}
		</div>

		<time class="ml-auto block self-center whitespace-nowrap text-size-0 text-dark">
			{getShortDate(date)}
		</time>
	</div>
</a>
