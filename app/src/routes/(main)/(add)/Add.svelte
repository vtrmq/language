<script lang="ts">
  import { Input } from "$lib/components";
  let name = $state('');
  let amount = $state();

  async function handleSave(e) {
    e.preventDefault();
    try {
      const res = await fetch(`/api/expenses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, amount: Number(amount) })
      });

      const data = await res.json();
      if (data.error.length !== 0) {
        throw new Error("No puede tener campo vacio");
      } else {
        name = "";
        amount = "";
      }
    } catch (err) {
      console.log(err);
    }

    //const res = await fetch('api/expenses');
    //expenses = await res.json();
    //console.log($state.snapshot(expenses))
  }
</script>

<h1>Add expenses</h1>
<form onsubmit={handleSave}>
  <Input bind:value={name} placeholder="Name" />
  <Input type="number" bind:value={amount} placeholder="Amount" />
  <button type="submit">Save</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
