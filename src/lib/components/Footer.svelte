<script>
	import { navFooterItems } from '$lib/config';
	import NavItemGroup from './NavItemGroup.svelte';
	import { DateTime } from 'luxon';
	import PageContainer from './PageContainer.svelte';
	let currentYear = DateTime.now().year;
</script>

<footer class="border-t border-light bg-lightest text-darkest">
	<PageContainer classesToAdd="mt-6">
		<div class="flex flex-row gap-[200px]">
			<div class="">
				<div class="mb-3 text-base font-semibold uppercase text-medium">Contact</div>
				<a
					class="text-md font-semibold decoration-primary hover:underline"
					href="mailto:hey@bryananthonio.com">hey@bryananthonio</a
				>
				<div class="mt-2 flex gap-2">
					<a href="http://twitter.com/beanthonio" class="block fill-none stroke-dark">
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="css-i6dzq1"
							><path
								d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
							/></svg
						>
					</a>
					<a href="https://instagram.com/photon.collider" class="fill-none stroke-dark">
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="css-i6dzq1"
							><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path
								d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
							/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg
						>
					</a>
				</div>
			</div>

			<div>
				<div class="mb-3 text-base font-semibold uppercase text-medium">Navigation</div>
				<nav class="flex flex-col justify-items-end gap-2">
					<a
						href="/about"
						class="align-baseline text-base font-semibold uppercase tracking-wider text-darkest"
						>About</a
					>
					<a href="/now" class="text-base font-semibold uppercase tracking-wider text-darkest"
						>Now</a
					>
					<a href="/blog" class="text-base font-semibold uppercase tracking-wider text-darkest"
						>Blog</a
					>
					<a href="/reading" class="text-base font-semibold uppercase tracking-wider text-darkest"
						>Reading</a
					>
				</nav>
			</div>
		</div>

		<div class="mb-4 mt-5 py-2 text-base" id="copyright">
			© 2020-{currentYear}, Bryan Anthonio. All rights reserved.
		</div>
	</PageContainer>
</footer>

<style>
	footer {
		width: 100%;
		height: 200px;
		flex-shrink: 0;
	}
</style>
