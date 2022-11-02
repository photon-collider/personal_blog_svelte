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
			/>
		</a>
	</div>
{:else}
	<div class="photogrid-item">
		<img
			src="{imgHostRootURL}/{imgBucket}/{imgName}{imgNamePostfix}.{imgFormat}"
			alt={imgCaption}
			loading="lazy"
		/>
	</div>
{/if}
