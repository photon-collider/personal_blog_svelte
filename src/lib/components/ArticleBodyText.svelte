<section class="container-md text-gray-600 pb-12 article-text-dark-mode">
	<slot />
</section>

<style lang="postcss">
	section :global(a) {
		@apply text-blue-600 hover:text-blue-800 font-bold underline;
	}

	section :global(h2) {
		@apply mt-8 mb-5;
	}

	section :global(h3) {
		@apply mt-3 mb-1;
	}

	section :global(p) {
		@apply font-normal text-base;
		@apply leading-8 mb-5;
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
