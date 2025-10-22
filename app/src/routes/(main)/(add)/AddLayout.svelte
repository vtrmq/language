<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<a href="/">Home</a>
<div class="wrapper">
	{@render children()}
</div>
