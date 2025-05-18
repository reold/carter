<script lang="ts">
  import Sheet from "../components/Sheet.svelte";
  let { visible = $bindable(false) } = $props();
</script>

<Sheet bind:visible
  >{#snippet title()}
    <h1
      class="w-full text-center place-content-center text-2xl font-black text-black dark:text-white"
    >
      Install Svara
    </h1>
  {/snippet}
  {#snippet body()}
    <p class="text-base text-black dark:text-white">
      Connect your music profiles to get your recommendations and listings.

      <span class="text-sm text-black/80 dark:text-white/50">
        <br />Supported platforms include Spotify, JioSaavn. This feature is in
        development and might not work as expected right now.
      </span>
    </p>

    <!-- <div
      class="flex flex-col space-y-2 w-[95dvw] text-white dark:text-black mt-[10dvh]"
    >
      <input
        type="text"
        placeholder="Spotify Profile URL"
        class="bg-black/10 dark:bg-white/10 ring-0 focus:outline-hidden rounded-md py-1 px-2 text-black dark:text-white"
      />
      <input
        type="text"
        placeholder="JioSaavn Profile URL"
        class="bg-black/10 dark:bg-white/10 ring-0 focus:outline-hidden rounded-md py-1 px-2 text-black dark:text-white"
      />
    </div>
    <button
      class="bg-blue-500 dark:bg-blue-400 rounded-md text-white dark:text-black w-[95dvw] mt-[5dvh]"
      >continue</button
    >
    <button
      class="bg-black/10 dark:bg-white/10 rounded-md text-black dark:text-white w-[95dvw] mt-2"
      onclick={() => {
        window.location.href = "#dash";
      }}>skip as a guest</button
    > -->
    <button
      class="bg-black/10 dark:bg-white/10 rounded-md text-black dark:text-white w-[95dvw] mt-2"
      onclick={() => {
        window.location.href = "#dash";
      }}>continue as a guest</button
    >
  {/snippet}</Sheet
>
