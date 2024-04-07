<script>
	import { getReadableDate } from '$lib/utils';
	export let title;
	export let description;
	export let date;
	import BioPic from '../BioPic.svelte';
</script>

<div class="mx-auto mb-[3rem] max-w-[var(--max-width-writing)]">
	<h1 class="mb-[1rem] text-xl">{title}</h1>
	<p class="mb-[1rem] text-lg font-semibold leading-[1.2] tracking-tighter text-dark">
		{description}
	</p>

	<div class="flex flex-row items-center gap-2">
		<BioPic imgClass="w-[48px] rounded-md" wrapperClass="" />
		<div>
			<address class="text-md not-italic text-darkest">Bryan Anthonio</address>
			<time class="text-base text-dark">{getReadableDate(date)}</time>
		</div>
	</div>
</div>
