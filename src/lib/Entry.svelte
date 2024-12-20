<script lang="ts">
  import Sheet from "../components/Sheet.svelte";
  let { visible = $bindable(false) } = $props();
</script>

<Sheet bind:visible
  >{#snippet title()}
    <h1 class="w-full text-center place-content-center text-2xl font-black">
      Link your Account
    </h1>
  {/snippet}
  {#snippet body()}
    <p class="text-base">
      Connect your music profiles to get your recommendations and listings.
      Supported platforms include Spotify, JioSaavn.
      <span class="text-sm text-zinc-500">
        <br />This feature is in development and might not work as expected
        right now.
      </span>
    </p>

    <div class="flex flex-col space-y-2 w-[95dvw] text-black mt-[10dvh]">
      <input
        type="text"
        placeholder="Spotify Profile URL"
        class="bg-white/5 ring-0 focus:outline-none rounded-md py-1 px-2 text-white"
      />
      <input
        type="text"
        placeholder="JioSaavn Profile URL"
        class="bg-white/5 ring-0 focus:outline-none rounded-md py-1 px-2 text-white"
      />
    </div>
    <button class="bg-blue-400 rounded-md text-black w-[95dvw] mt-[5dvh]"
      >continue</button
    >
    <button
      class="bg-white/5 rounded-md text-white w-[95dvw] mt-2"
      onclick={() => {
        window.location.href = "#dashboard";
      }}>skip as a guest</button
    >{/snippet}</Sheet
>
