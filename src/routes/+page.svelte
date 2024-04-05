<script>
	import HeroBanner from '$lib/components/HeroBanner.svelte';
	import BioPic from '$lib/components/BioPic.svelte';
</script>

<svelte:head>
	<title>Bryan Anthonio</title>
	<meta
		data-key="description"
		name="description"
		content="Web developer, photographer, and blogger. Welcome to my digital garden!"
	/>
</svelte:head>

<div class="relative mx-auto max-w-[720px]">
	<h1 class="text-[2rem] font-normal tracking-wide">
		Hi! I’m <span class="font-bold">Bryan</span>.
	</h1>

	<BioPic wrapperClass="absolute left-[-120px] top-[-5%]" imgClass="rounded-full w-[96px]" />

	<p class="mt-3 max-w-[526px] text-[1.125rem]">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>

	<h2 class="text-[1.5rem]">What I’m Doing Now</h2>

	<h2 class="text-[1.5rem]">Recent Blog Posts</h2>
</div>
