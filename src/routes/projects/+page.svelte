<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>Bryan Anthonio | Projects</title>
	<meta
		data-key="description"
		name="description"
		content="A collection of my web development side projects."
	/>
</svelte:head>

<main>
	<h1 class="mb-5">Projects</h1>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
		<ProjectCard
			title="bryananthonio.com"
			githubLink="https://github.com/photon-collider/personal_blog_svelte"
			articleLink="blog/redesign-3">The source code for my personal website.</ProjectCard
		>
	</div>
</main>
