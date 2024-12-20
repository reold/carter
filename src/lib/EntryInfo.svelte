<script lang="ts">
  import Sheet from "../components/Sheet.svelte";
  let { visible = $bindable(false) } = $props();
</script>

<Sheet bind:visible
  >{#snippet title()}
    <h1 class="w-full text-center place-content-center text-2xl font-black">
      Carter Manager
    </h1>
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
      <button
        class="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text text-center w-full h-[50px]"
        ondblclick={(e) => {
          e.target.innerText = "Funfact: Diya is a kannapi";
        }}
        aria-label="easter egg that when interacted with, shows some secret text"
      >
      </button>
    </div>
  {/snippet}</Sheet
>
