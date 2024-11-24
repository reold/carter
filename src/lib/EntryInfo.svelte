<script lang="ts">
  import Sheet from "../components/Sheet.svelte";
  let { visible = $bindable(false) } = $props();
</script>

<Sheet bind:visible
  >{#snippet title()}
    Carter Manager
  {/snippet}
  {#snippet body()}
    <div>
      <p class="text-lg">
        A mobile-first music player built from the ground up to serve quality
        music.
      </p>
      <p class="text-zinc-500 text-sm">
        Carter, formerly called Cartier Manager, was a small project started by
        @reold. After Spotify released their new free tier "limits", a burning
        irritation grew fast to develop a free alternative.
      </p>
      <p>Funfact: Diya SS is a kannapi</p>
    </div>
  {/snippet}</Sheet
>
