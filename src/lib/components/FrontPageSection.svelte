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
