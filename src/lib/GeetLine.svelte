<script lang="ts">
  let { block = $bindable() } = $props();

  let editMode = $state(false);
</script>

<li
  class="text-md text-center py-2 w-full border-b border-white/10"
  onclick={() => (editMode = true)}
>
  <button class="bg-green-500/50 text-black rounded-md p-1">+</button>
  <button class="bg-green-500/50 text-black rounded-md p-1">dup</button>

  {#if editMode}
    <input
      type="text"
      placeholder="edit this line"
      class="bg-white/5 min-w-[70dvw] max-w-[80dwv] focus:outline-hidden ring-1 ring-white/20 mx-2"
      bind:value={block.content}
    />
  {:else}
    <span>{block.t != -1 ? block.t : ""}</span>{block.content}
  {/if}
  <button class="bg-red-500 rounded-md text-black p-1">delete</button>
</li>
