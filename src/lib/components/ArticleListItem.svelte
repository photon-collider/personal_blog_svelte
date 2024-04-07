<script>
	export let date;
	export let title;
	export let slug;
	import { getShortDate } from '$lib/utils';
</script>

<a href="/blog/{slug}" class="group block w-fit max-w-[720px] hover:text-dark">
	<div class="relative">
		<time
			class="absolute bottom-[2px] left-[-124px] block whitespace-nowrap font-mono text-base uppercase text-dark opacity-80 group-hover:text-primaryActive group-hover:opacity-100"
		>
			{getShortDate(date)}
		</time>

		<div
			class="relative block rounded-sm text-md tracking-[-0.015em] text-darkest decoration-primary decoration-2 group-hover:text-primaryActive group-hover:underline"
		>
			{title}
		</div>
	</div>
</a>
