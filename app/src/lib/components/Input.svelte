<script lang="ts">
  let { type = "text", name = 'a',  placeholder = '', value = $bindable() } = $props();
</script>

<div class="wr-input">
  <div class="wr-placeholder"><span class="placeholder">{placeholder}</span></div>
  <input {type} bind:value {name} />
</div>

<style>
  .wr-input {
    display: flex;
    flex-direction: column;
  }
  .wr-placeholder {
    text-align: left;
  }
  .placeholder {
  }
  input {
    padding: 0.5em;
    outline: none;
    border-radius: 6px;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.2em;
  }
</style>
