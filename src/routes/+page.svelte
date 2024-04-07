<script>
	export let data;
	import BioPic from '$lib/components/BioPic.svelte';
	import ArticleList from '$lib/components/ArticleList.svelte';
	let recent_articles = data.articles.slice(0, 5);
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
	<BioPic wrapperClass="absolute left-[-140px] top-[2%]" imgClass="rounded-lg w-[96px]" />

	<h1 class="text-xl font-normal tracking-wide">
		Hi! I’m <span class="font-semibold">Bryan</span>.
	</h1>

	<p class="mt-3 text-md">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>

	<h2 class="text-lg">What I’m Doing Now</h2>

	<div class="writing">
		<ul>
			<li>Learning UI Design</li>
			<li>Exploring AI tools and their applications</li>
		</ul>
	</div>

	<h2 class="text-lg">Recent Blog Posts</h2>
	<ArticleList articleList={recent_articles} />
</div>
