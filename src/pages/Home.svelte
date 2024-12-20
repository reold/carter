<script lang="ts">
  import Entry from "../lib/Entry.svelte";
  import EntryInfo from "../lib/EntryInfo.svelte";

  let visible = $state(false);
  let infoVisible = $state(false);
</script>

<svelte:head>
  <meta property="theme-color" content="#7e22ce" />
  <title>Carter: Get Started</title>
</svelte:head>
<main
  class="w-screen h-[100dvh] bg-gradient-to-b from-purple-700 via-pink-700 to-purple-950 text-white overflow-y-clip flex flex-col items-center justify-center px-5"
>
  <h1
    class="text-[5em] font-black bg-clip-text bg-gradient-to-b from-black to-pink-700 text-transparent"
  >
    Carter.
  </h1>
  <p class="mt-[0ch] text-center">
    Blazingly performant, light-weight, feature loaded music application for all
    your needs.
  </p>
  <div class="flex flex-row space-x-2">
    <button
      class="bg-green-400 text-black rounded-md mt-[5ch] font-semibold"
      onclick={() => (visible = true)}>install</button
    >
    <button
      class="bg-zinc-500/50 text-blue-300 rounded-md mt-[5ch] font-semibold"
      onclick={() => (infoVisible = true)}>read more</button
    >
  </div>
  <p class="font-mono text-xs text-center absolute bottom-1 text-zinc-500">
    Built with Svelte5 by @reold. Performance is key.
  </p>
  <Entry bind:visible></Entry>
  <EntryInfo bind:visible={infoVisible}></EntryInfo>
</main>
