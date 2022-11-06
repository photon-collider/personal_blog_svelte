<script>
	import { imgHostRootURL } from '$lib/config';
	export let imgBucket;
	export let imgName;
	export let alt;
</script>

<img src="{imgHostRootURL}/{imgBucket}/{imgName}" {alt} loading="lazy" />
