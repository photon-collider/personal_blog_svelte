<script>
	import NavItem from './NavItem.svelte';
</script>

<header>
	<div class="page-container">
		<nav>
			<div class="container-md navbar">
				<div class="nav-item" id="home">
					<a href="/">Home</a>
				</div>

				<div class="nav-right">
					<ul>
						<NavItem href="/blog">Blog</NavItem>
						<NavItem href="/photos">Photos</NavItem>
						<NavItem href="/about">About</NavItem>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</header>
