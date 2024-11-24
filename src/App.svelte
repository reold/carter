<script lang="ts">
  import Entry from "./lib/Entry.svelte";
  import EntryInfo from "./lib/EntryInfo.svelte";

  let visible = $state(false);
  let infoVisible = $state(false);
</script>

<main
  class="w-screen h-screen bg-zinc-800 text-white overflow-y-clip flex flex-col items-center justify-center px-5"
  style="user-select: none;"
>
  <h1 class="text-5xl font-black">Carter</h1>
  <p class="mt-[1ch] text-center">
    Blazingly performant, light-weight, feature loaded music application for all
    your needs.
  </p>
  <div class="flex flex-row space-x-2">
    <button
      class="bg-green-400 text-black rounded-md mt-[5ch]"
      onclick={() => (visible = true)}>install</button
    >
    <button
      class="bg-blue-400 text-black rounded-md mt-[5ch]"
      onclick={() => (infoVisible = true)}>read more</button
    >
  </div>
  <p class="font-mono text-xs text-center absolute bottom-1">
    Built with Svelte5 by @reold. Performance is key.
  </p>
  <Entry bind:visible></Entry>
  <EntryInfo bind:visible={infoVisible}></EntryInfo>
</main>
