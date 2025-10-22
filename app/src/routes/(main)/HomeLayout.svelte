<script lang="ts">
  import svelteLogo from '../../assets/svelte.svg'
  import svRouterLogo from '../../assets/sv-router.svg'
  import honoLogo from '../../assets/hono.png'
  import bunLogo from '../../assets/bunjs.png'
  import viteLogo from '/vite.svg'


	//import type { Snippet } from 'svelte';
	//let { children }: { children: Snippet } = $props();
	let { children } = $props();
</script>

<main>

  <div>
    <a href="https://bun.com/" target="_blank" rel="noreferrer">
      <img src={bunLogo} class="logo bun" alt="Bun Logo" />
    </a>
    <a href="https://hono.dev/" target="_blank" rel="noreferrer">
      <img src={honoLogo} class="logo hono" alt="Hono Logo" />
    </a>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://sv-router.vercel.app" target="_blank" rel="noreferrer">
      <img src={svRouterLogo} class="logo sv-router" alt="svRouter Logo" />
    </a>
  </div>

  <h1>Bun + Hono + Vite + Svelte + SVRouter</h1>

  <a href="/add">Add expenses</a>

  <div class="wrapper">
    {@render children()}
  </div>

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
