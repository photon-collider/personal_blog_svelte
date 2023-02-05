<script>
	import BioPic from './BioPic.svelte';
	const bioPicClass =
		'rounded-full hover:scale-[1.1] hover:shadow-xl dark:shadow-gray-900 mb-6 md:mb-0 transition duration-150 ease-out hover:ease-in justify-center';
</script>

<section class="flex flex-col md:flex-row-reverse my-16 container-md">
	<div class="flex justify-center">
		<a href="/about/" >
			<BioPic imgClass={bioPicClass} />
		</a>
	</div>

	<div class="text-gray-600 dark:text-gray-400 text-lg md:text-xl flex flex-col justify-center">
		<h1>Hi! I'm Bryan 👋🏾</h1>
		<p>I write about various topics including photography, data science, technology, and life.</p>
	</div>
</section>
