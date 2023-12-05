<div class="hero-banner-bg">
	<div>
		<p class="text-size-1 font-bold text-darkest sm:text-size-2">Hi, my name is</p>
		<h1 class="indent-[-0.05em] text-size-4 sm:text-size-5 lg:text-size-6">Bryan Anthonio 👋🏾</h1>

		<p
			class="mb-6 indent-[-0.1em] font-mono text-size-3 tracking-tighter text-dark sm:text-size-4 lg:text-size-5"
		>
			I'm a software developer
		</p>

		<p class="mb-4 text-size-3 text-dark">Welcome to my digital garden 🌱</p>

		<nav>
			<ul class="text-size-2 text-dark">
				<li class="w-fit">
					<a href="/about" class=" rounded-sm p-2 hover:bg-primary hover:text-primaryActive">
						Learn about me
					</a>
				</li>
				<li class="mt-3 w-fit hover:text-darkest">
					<a class="rounded-sm p-2 hover:bg-primary hover:text-primaryActive" href="/blog"
						>Read my blog</a
					>
				</li>
				<li class="mt-3 w-fit hover:text-darkest">
					<a class="rounded-sm p-2 hover:bg-primary hover:text-primaryActive" href="/projects"
						>View my projects</a
					>
				</li>
			</ul>
		</nav>
	</div>
</div>

<style>
	ul {
		position: relative;
	}
	ul li::before {
		content: '→';
		position: absolute;
		left: 0px;
		color: var(--primary-color);
		transition: left 0.3s ease; /* Transition for smooth animation */
		font-weight: bold;
	}
	ul li:hover::before {
		left: 24px; /* New position on hover */
	}

	li {
		padding-left: 48px;
	}
</style>
