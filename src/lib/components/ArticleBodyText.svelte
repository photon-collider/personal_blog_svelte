<section class="container-md pb-12 text-stone-800 dark:text-stone-100 article-text-dark-mode">
	<slot />
</section>

<style lang="postcss">
	section :global(a) {
		@apply font-bold  hover:bg-stone-800 hover:text-stone-50 hover:no-underline underline decoration-1 transition duration-100 ease-in-out;
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

	section :global(.equation){
		@apply mb-5 text-center;
	}
</style>
