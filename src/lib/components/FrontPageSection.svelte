<script>
	export let title;
	export let hrefViewAll;
</script>

<section class="container-md flex flex-col mb-10 pb-10">
	<div class="flex flex-col">
		<div class="">
			<h2 class="text-center">{title}</h2>
		</div>
	</div>

	<div>
		<slot />
		<div class="flex justify-center">
			<button>
				<a class="nav-button" href={hrefViewAll}>View All</a>
			</button>
		</div>
	</div>
</section>
