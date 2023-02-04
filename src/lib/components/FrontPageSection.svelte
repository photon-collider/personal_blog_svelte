<script>
	export let title;
	export let hrefViewAll;
</script>

<section class="container-md flex flex-col mb-16">
	<h2 class="mb-6">{title}</h2>
	<div class="">
		<slot />
		<div class="flex ">
			<a href={hrefViewAll} class="nav-button">
				<button> View All </button>
			</a>
		</div>
	</div>
</section>

<style lang="postcss">
	.nav-button {
		@apply bg-transparent text-gray-600/80;
		@apply px-2.5 py-1 font-medium;
		@apply rounded border-2 border-gray-600/80;
		@apply hover:shadow-md hover:scale-[1.1];
		@apply transition duration-150 ease-out hover:ease-in;
		@apply text-sm md:text-lg;
	}
</style>
