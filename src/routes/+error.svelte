<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1>{$page.status}</h1>

	{#if $page.error.message !== null}
		<p class="subhead">{$page.error.message}</p>
	{/if}

	<p><strong>Sorry!</strong> Maybe try one of these links?</p>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</div>
