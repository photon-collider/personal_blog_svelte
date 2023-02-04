<script>
	import { imgHostRootURL } from '$lib/config';
	export let imgNamePostfix = '-box';
	export let imgBucket;
	export let imgName;
	export let imgFormat = 'jpeg';
	export let imgCaption = '';
	export let imgHref = '';
</script>

{#if imgHref}
	<div class="photogrid-item">
		<a href={imgHref}>
			<img
				src="{imgHostRootURL}/{imgBucket}/{imgName}{imgNamePostfix}.{imgFormat}"
				alt={imgCaption}
				loading="lazy"
				class="rounded"
			/>
		</a>
	</div>
{:else}
	<div class="photogrid-item">
		<img
			src="{imgHostRootURL}/{imgBucket}/{imgName}{imgNamePostfix}.{imgFormat}"
			alt={imgCaption}
			loading="lazy"
			class="rounded"
		/>
	</div>
{/if}

<style lang="postcss">
	.photogrid-item {
		@apply hover:shadow-xl;
		@apply hover:scale-[1.05];
		@apply transition duration-150 ease-out hover:ease-in;
	}
</style>
