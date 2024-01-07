<script>
	import BioPic from '../BioPic.svelte';
</script>

<div
	class="text-sm mx-auto mt-6 flex max-w-[--max-width-writing] flex-col-reverse gap-3 rounded bg-white p-4 text-size-1 leading-[--line-height-body-text] text-dark shadow-sm sm:flex-row-reverse lg:mx-0"
>
	<div class="flex-col items-center">
		<p class="mb-2">
			Hello and thanks for stopping by! I'm Bryan Anthonio. On this blog, I explore technology,
			programming, photography, and the valuable life lessons I've gathered.
		</p>
		<p>
			Got any thoughts or comments? Send me a note at <a
				class="underline decoration-1 underline-offset-1"
				href="mailto:hey@bryananthonio.com">hey@bryananthonio.com</a
			>.
		</p>
	</div>
	<BioPic />
</div>
