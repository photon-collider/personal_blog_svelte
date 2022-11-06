<script>
	import { page } from '$app/stores';
</script>

<section class="container-md">
	<h2>{$page.status}</h2>
	{console.log($page.error.message)}

	{#if $page.error.message !== null}
		<p class="subhead">{$page.error.message}</p>
	{/if}

	<p><strong>Sorry!</strong> Maybe try one of these links?</p>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</section>
