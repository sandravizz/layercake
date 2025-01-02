<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let path;

	$: isServiceWorker = $page.url.pathname === '/service-worker.js';

	let segment = '';

	$: if (!isServiceWorker) {
		path = $page.url.pathname;
		// type = path.split('/')[1];
		segment = `/${path.replace('/', '')}`;
		// segment = `/${path.replace('/', '').replace(/\$/, '')}`;
		// slug = path.replace(/\/$/, '').split('/').pop();
	}

	// let basePath = '/';
	let open = false;

	let nav;

	const slimName = d => d.split(' (')[0];

	function loadPage() {
		open = false;
		goto(this.value || '/');
	}

	function toggleOpen() {
		// if the menu is closing, scroll back to the top *after* it
		// shuts. otherwise, scroll back to the top immediately
		// (just in case the user reopened before it happened).
		// The reason we don't just do it when the menu opens is
		// that the scrollbar visibly flashes
		if (open) {
			setTimeout(() => {
				if (!open) {
					nav.scrollTop = 0;
				}
			}, 350);
		} else {
			nav.scrollTop = 0;
		}
		open = !open;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="{open ? 'open' : 'closed'} mousecatcher"
	on:click={() => (open = false)}
	on:keypress={() => (open = false)}
></div>
<div class="container">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<span
		class="menu-link {open ? 'menu-open' : 'menu-closed'}"
		on:click={toggleOpen}
		on:keypress={toggleOpen}>{open ? 'Close' : 'Menu'}</span
	>
	<a href="/" class="logo">Sandravizz</a>
</div>

<nav bind:this={nav}>
	<ul class="primary">
		<li>
			<a
				id="github-link"
				target="_blank"
				rel="noreferrer"
				href="https://github.com/sandravizz"
			/>
		</li>
	</ul>
</nav>

<style>
	.mousecatcher {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: black;
		pointer-events: none;
		opacity: 0;
		/*transition: opacity 0.4s;*/
		z-index: 3;
	}

	.mousecatcher.open {
		pointer-events: all;
		opacity: 0.3;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.container {
		position: fixed;
		width: 100%;
		height: 2.5em;
		background-color: #fff;
		color: #000;
		border-bottom: 1px solid rgb(170, 30, 30, 0.1);
		font-family: 'SignPainter', Helvetica, sans-serif;
		z-index: 12;
	}

	nav {
		position: fixed;
		width: 14em;
		height: calc(100vh - 2.5em);
		top: 2.5em;
		font-family: 'SignPainter', Helvetica, sans-serif;
		background-color: white;
		transform: translate(-100%, 0);
		transition: transform 0.2s cubic-bezier(0.17, 0.67, 0.24, 0.99);
		border-right: 1px solid #eee;
		z-index: 12;
		padding: 1em;
		user-select: none;
	}

	.open {
		transform: translate(0, 0);
		transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.24, 0.99);
		overflow-y: auto;
	}

	.menu-link {
		display: inline;
		position: absolute;
		top: 50%;
		left: 1rem;
		transform: translate(0, -50%);
		font-size: 25px;
		line-height: 1;
		color: #000;
		cursor: pointer;
		/*font-weight: 500;*/
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
	}
	.menu-link.menu-open {
		color: #999;
	}
	.menu-link:hover {
		text-decoration: underline;
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -45%);
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		line-height: 1;
		text-decoration: none;
		font-weight: bold;
		color: #000;
		font-size: 25px;
	}

	ul {
		display: block;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.primary {
		margin: 0 0 0.5em 0;
	}

	.primary li {
		position: relative;
		display: block;
	}

	/**/

	.primary li a {
		display: block;
		font-size: 25px;
		/*font-weight: 500;*/
		padding: 0 0 0.75em 0;
		text-decoration: none;
		line-height: 1;
	}

	.primary a:hover,
	.logo:hover {
		text-decoration: underline;
	}

	#github-link {
		width: 22px;
		height: 2px;
		background: url(/github-logo.svg);
		background-repeat: no-repeat;
		position: relative;
		top: 4px;
	}

	#github-link:hover:after {
		content: ' ';
		position: absolute;
		width: 20px;
		bottom: -3px;
		border-top: 1px solid #000;
	}

	@media (max-width: 645px) {
		a#github-link {
			width: 100% !important;
		}
	}
	@media (min-width: 645px) {
		.mousecatcher,
		.menu-link {
			display: none;
		}

		.container {
			height: 3.5em;
		}

		nav {
			width: 100%;
			height: 3.5em;
			padding: 0 1.5em 0 0;
			transform: none;
			transition: none;
			height: 0;
		}

		.primary {
			position: fixed;
			top: 1rem;
			right: 1.5rem;
			margin: 0;
		}

		.primary li {
			display: inline-block;
			position: relative;
			padding: 0 1em;
		}

		.primary li:last-child::after {
			content: '';
		}
		.primary li::after {
			position: absolute;
			top: -2px;
			right: -3px;
			content: '|';
			font-size: 25px;
		}

		.primary li:last-child::after {
			content: '';
		}

		.logo {
			position: absolute;
			top: 1rem;
			left: 1.5rem;
			text-decoration: none;
			/*font-size: 1.5em;*/
			/*font-weight: 700;*/
			transform: none;
		}

	}
</style>
