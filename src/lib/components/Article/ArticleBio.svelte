<script>
	import BioPic from '../BioPic.svelte';
	import { contactEmail, twitterHandle } from '$lib/config';
</script>

<div
	class="text-sm mx-auto mt-6 flex max-w-[--max-width-writing] flex-col-reverse gap-3 rounded bg-white p-4 text-size-1 leading-[--line-height-body-text] text-dark shadow-sm sm:flex-row-reverse lg:mx-0"
>
	<div class="items-cente writing flex-col">
		<p class="mb-2">
			Hello and thanks for stopping by! I'm Bryan Anthonio. On this blog, I explore technology,
			programming, photography, and the valuable life lessons I've gathered.
		</p>
		<p class="writing">Got any thoughts or comments?</p>
		<ul>
			<li>
				Email me: <a class="underline decoration-1 underline-offset-1" href="mailto:{contactEmail}"
					>{contactEmail}</a
				>.
			</li>
			<li>
				Reach out via Twitter: <a href="https://twitter.com/{twitterHandle}">{twitterHandle}</a>
			</li>
		</ul>
	</div>
	<BioPic />
</div>
