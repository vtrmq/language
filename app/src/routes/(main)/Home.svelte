<script lang="ts">
  import { load } from "./home.ts";
  let expenses = $state([]);
  let viewMain = $state(false);

  (async () => {
    let res = await load();
    expenses = res.data;
  })();

  async function handleDelete(id) {
    try {
      const res = await fetch(`/api/expenses/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!res.ok) throw new Error("Error al eliminar el gasto");

      const data = await res.json();
      expenses = data;
      console.log("Gasto eliminado:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  }

  /*
  onMount( async ()=>{
    const res = await fetch('api/expenses');
    expenses = await res.json();
  });
  */

</script>

<main>
  <div class="container-expenses">
    {#each expenses as expense, index}
      <div class="row-expense">
        <p>{expense.name} {expense.amount}</p>
        <button onclick={()=>handleDelete(expense.id)} aria-label="Button">
          <svg class="svg-delete" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    {/each}
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .svg-delete {
    width: 20px;
  }
  .container-expenses {
    display: flex;
    flex-direction: column;
    margin: 2em auto 4em;
    gap: 0.5em;
    width: 100%;
    max-width: 400px;
  }
  .row-expense {
    display: flex;
    justify-content: space-between;
  }
  .read-the-docs {
    color: #888;
  }
</style>
