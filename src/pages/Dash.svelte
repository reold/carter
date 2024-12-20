<script lang="ts">
  import { blur } from "svelte/transition";
  import Track from "../lib/Track.svelte";
  import JamEntry from "./JAMEntry.svelte";
  import { onMount } from "svelte";

  const proxy =
    "https://vercel-cors-anywhere-kl6pfodtk-reolds-projects.vercel.app/api?url=";

  const server = `${proxy}https://www.jiosaavn.com/api.php`;

  const searchAPI = `${server}`;

  let { jamInfo = { create: true }, showJAM = $bindable(false) } = $props();

  let loading = $state(false);
  let searchRes = $state(
    {} as {
      songs: {
        total: number;
        results: {
          id: string;
          primaryArtists: string;
          title: string;
          language: string;
          subtitle: string;
          image?: string;
          perma_url: string;
        }[];
      };
    }
  );

  onMount(() => {
    const now = Date.now();
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("search-cache-")) {
        const value = JSON.parse(localStorage.getItem(key));
        if (value.expiry < now) {
          localStorage.removeItem(key);
        }
      }
    });
  });

  async function fetchWithCustomCache(url: string, cacheDuration: number) {
    const now = Date.now();
    const key = `search-cache-${url}`;

    // Check if a cached response exists and is still valid
    if (localStorage.getItem(key)) {
      const cached = JSON.parse(localStorage.getItem(key));
      if (cached) {
        if (now < cached.expiry) {
          return cached.data;
        } else {
          localStorage.removeItem(key);
        }
      }
    }

    // Fetch fresh data
    const response = await fetch(url);
    const data = await response.json();

    // Store the data in cache with an expiry
    localStorage.setItem(
      key,
      JSON.stringify({
        data,
        expiry: now + cacheDuration,
      })
    );

    return data;
  }
  let searchQueue: string[] = $state([]);
  let showClearText: boolean = $state(false);
  let inputValue = $state("");

  const handleSearch = () => {
    let query = searchQueue.at(-1);
    if (!query || query.length < 3) return;

    searchQueue = [];

    // remove non-alphanumeric characters
    query = query.replace(/[^0-9a-zA-Z' ]+/g, "");
    if (query == "") return;

    const apiURL = `${searchAPI}${encodeURIComponent(
      `?p=1&q=${query}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=20&__call=search.getResults`
    )}`;
    loading = true;

    fetchWithCustomCache(apiURL, 5 * 60 * 1000)
      // fetch(apiURL)
      // .then((resp) => resp.json())
      .then((data) => {
        searchRes.songs = data;
        setTimeout(() => {
          loading = false;
          if (searchQueue.length > 0) handleSearch();
        }, 750);
      });
  };
</script>

<svelte:head>
  <meta property="theme-color" content="#000" />
  <title>Carter: Search</title>
</svelte:head>
<div class="w-[100dwv] h-[100dvh] bg-black">
  <div class="p-2 pb-1 text-white h-[7dvh]">
    <div
      class="relative w-full bg-white/5 rounded-md flex flex-row items-center justify-center space-x-[0.2ch] text-[16px] h-full px-[1ch]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-[1.3em] max-w-[5%] {loading
          ? 'animate-pulse text-purple-500 stroke-2'
          : 'text-zinc-500'}"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        bind:value={inputValue}
        type="text"
        class="bg-transparent ring-0 focus:outline-none rounded-md py-0 h-full {showClearText
          ? 'w-[90%]'
          : 'w-[95%]'}"
        placeholder="find songs & playlists"
        onkeyup={(e: KeyboardEvent) => {
          const target = e.target as HTMLInputElement;
          if (e.key == "Enter") {
            target.blur();
            return;
          }

          if (!e.code.startsWith("Key") && e.key != "Backspace") return;

          showClearText = target.value.length > 2;

          searchQueue = [...searchQueue, target.value];
          if (!loading) {
            handleSearch();
          }
        }}
      />

      {#if showClearText}
        <button
          class="p-0 m-0 h-[75%] max-w-[5%] bg-transparent"
          aria-label="clear search text"
          transition:blur={{ duration: 100 }}
          onclick={() => (inputValue = "")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-[1.3em] text-zinc-500"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
              clip-rule="evenodd"
            />
          </svg></button
        >
      {/if}
    </div>
  </div>
  <div
    class="items-center justify-center space-y-0 max-h-[93dvh] h-[93dvh] overflow-y-scroll pb-[2dvh] rounded-t-xl bg-transparent no-scrollbar w-full"
  >
    {#if searchRes.songs}
      <h2
        class="text-white font-medium w-[100dvw] text-[9px] font-mono mt-2 px-2 select-none"
      >
        {#if loading}
          <span class="animate-pulse">Loading(proxy -> server). </span>
        {:else}
          limiting to {searchRes.songs.results.length}
          {#if searchRes.songs.total > 10}
            <span class="text-[8px] text-white/80"
              >—out of {searchRes.songs.total} results</span
            >
          {/if}
        {/if}
        <span class="text-[8px] text-white/80 bg-white/5 p-0.5 rounded-sm"
          >Powered by JioSaavn</span
        >
      </h2>
      {#each searchRes.songs.results || [] as song (song.id)}
        <Track {song} {loading} />
      {/each}
    {:else}
      <div class="px-2">
        <h1
          class="text-white font-semibold text-center mt-[1em] mb-2 text-xl border-b-[1px] border-white/10"
        >
          🎶 Search for Music!
        </h1>
        <p class="text-white/80 text-sm">
          Find for your favorite songs, playlists, artists and more by utilizing
          the search bar on the top!
        </p>
      </div>
    {/if}
    <button
      class="absolute bottom-[2dvh] right-[2dvw] text-purple-500 bg-white/5 backdrop-blur-lg backdrop-brightness-50 rounded-md"
      aria-label="start jam session"
      onclick={() => (showJAM = true)}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-[2em]"
      >
        <path
          fill-rule="evenodd"
          d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>

  <JamEntry bind:visible={showJAM} info={jamInfo} />
</div>
