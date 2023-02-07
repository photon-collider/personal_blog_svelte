<!--
<section class="container-md article-text-dark-mode pb-12 text-gray-600">
-->
<section class="container-md pb-12 prose prose-stone dark:prose-invert">
	<slot />
</section>

<style lang="postcss">
	section :global(a) {
		@apply font-bold text-blue-600 underline hover:text-blue-800;
	}

	section :global(h2) {
		@apply mt-8 mb-5;
	}

	section :global(h3) {
		@apply mt-3 mb-1;
	}

	section :global(p) {
		@apply text-base font-normal;
		@apply mb-5 leading-8;
	}

	section :global(ol) {
		list-style: decimal;
		@apply mb-5 px-8;
		@apply text-base md:text-lg;
	}

	section :global(ul) {
		list-style: circle;
		@apply mb-5 px-8;
		@apply text-base;
	}

	section :global(li) {
		@apply mb-2;
	}
</style>
