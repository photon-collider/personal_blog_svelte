<script>
	export let date;
	export let title;
	export let slug;
	import { getShortDate } from '$lib/utils';
</script>

<a
	href="/blog/{slug}"
	class="group block w-fit max-w-[720px] rounded-sm px-3 py-1 hover:bg-primary hover:text-dark"
>
	<div class="flex flex-row gap-[16px]">
		<time
			class="block self-center self-baseline whitespace-nowrap font-mono text-[0.875rem] uppercase text-dark opacity-70 group-hover:text-primaryActive group-hover:opacity-100"
		>
			{getShortDate(date)}
		</time>
		<div
			class="block self-baseline text-[1.125rem] tracking-[-0.015em] text-darkest group-hover:text-primaryActive"
		>
			{title}
		</div>
	</div>
</a>
