<script>
	import Button from './Button.svelte';
	export let title;
	export let hrefViewAll;
</script>

<section class="container-md mb-16 flex flex-col">
	<h2 class="mb-6">{title}</h2>
	<slot />
	<div class="flex ">
		<a
			href={hrefViewAll}
			class="nav-button rounded border-2 border-stone-700 dark:border-stone-300 hover:scale-[1.1] hover:shadow-md transition duration-150 ease-out hover:ease-in"
		>
			<Button>View All</Button>
		</a>
	</div>
</section>
