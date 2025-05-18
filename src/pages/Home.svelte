<script lang="ts">
  import Entry from "../lib/Entry.svelte";
  import EntryInfoExp from "../lib/EntryInfoEXP.svelte";
  import SvaraLogo from "../lib/SvaraLogo.svelte";

  let visible = $state(false);
  let mainEle: HTMLElement;
</script>

<svelte:head>
  <meta name="theme-color" content="#000" />
  <!-- content={visible || infoVisible ? "#4d0a26" : "#be185d"} -->

  <title>Get Started - Svara</title>
</svelte:head>
<main class="w-screen h-[100dvh] overflow-y-scroll" bind:this={mainEle}>
  <div
    class="w-screen h-[100dvh] bg-linear-to-b from-white to-purple-700 dark:from-black dark:to-purple-900 text-white overflow-y-clip flex flex-col items-center justify-center px-5"
  >
    <div class="flex flex-row items-center justify-center space-x-2">
      <SvaraLogo class="h-[5em] aspect-square -mb-[1ch]" />
      <h1
        class="text-[5em] font-black bg-clip-text bg-linear-to-b from-black to:violet-200 dark:from-violet-200 dark:to-black from-60% to-90% text-transparent"
      >
        Svara.
      </h1>
    </div>
    <h2 class="-mt-[1ch] text-center text-black dark:text-white">
      Blazingly performant, light-weight, feature loaded music application for
      all your needs.
    </h2>
    <div class="flex flex-row space-x-2 mt-[1ch]">
      <button
        class="bg-green-400 text-black rounded-md mt-[5ch] font-semibold"
        onclick={() => (visible = true)}>install</button
      >
      <button
        class="bg-black/50 dark:bg-black/50 text-blue-400 dark:text-blue-400 rounded-md mt-[5ch] font-semibold"
        onclick={() => {
          mainEle.scrollTo({
            behavior: "smooth",
            top: mainEle.clientHeight,
          });
        }}>read more</button
      >
    </div>
    <p
      class="font-mono w-full text-sm text-center absolute bottom-0 text-zinc-100 backdrop-blur-xs"
      style="text-shadow: 1px 1px 0px rgba(0,0,0,1);"
    >
      Built by <a
        href="https://github.com/reold"
        target="_blank"
        class="after:content-['_↗'] dark:text-blue-400 text-blue-600 font-black bg-black/50"
        >@reold</a
      >. <i>Performance is key.</i>
    </p>
    <Entry bind:visible></Entry>
  </div>
  <EntryInfoExp />
</main>
