<script lang="ts">
  import Sheet from "../components/Sheet.svelte";
  let { visible = $bindable(false) } = $props();
</script>

<Sheet bind:visible
  >{#snippet title()}
    Link your Account
  {/snippet}
  {#snippet body()}
    <p>
      Connect your music profiles to get your recommendations and listings.
      Supported platforms include Spotify, JioSaavn.
    </p>
    <div class="flex flex-col space-y-2 px-[2ch]">
      <input type="text" placeholder="Spotify Profile URL" />
      <input type="text" placeholder="JioSaavn Profile URL" />
    </div>
    <button
      class="bg-blue-400 rounded-md text-white"
      onclick={() => {
        visible = false;
      }}>continue</button
    >{/snippet}</Sheet
>
