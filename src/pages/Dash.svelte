<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import Track from "../lib/Track.svelte";
  import JamEntry from "./JAMEntry.svelte";
  import { onMount } from "svelte";
  import { usePlayer } from "../player.svelte";
  import Sheet from "../components/Sheet.svelte";
  import { masterServices } from "../services.svelte";

  let { jamInfo = { create: true }, showJAM = $bindable(false) } = $props();
  let showSong = $state(false);

  let searchRes = $state({ loading: false } as {
    loading: boolean;
    query: string;
    songs: {
      total: number;
      results: {
        id: string;
        primaryArtists: string;
        title: string;
        language: string;
        subtitle: string;
        image: string;
        perma_url: string;
        more_info: {
          encrypted_media_url: string;
          music: string;
          album: string;
          artistMap: {
            primary_artists: { name: string }[];
          };
        };
      }[];
    };
  });

  onMount(() => {
    const now = Date.now();
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("cache-search-")) {
        const value = JSON.parse(localStorage.getItem(key));
        if (value.expiry < now) {
          localStorage.removeItem(key);
        }
      }
    });
  });

  async function fetchWithCustomCache(
    id: string,
    func: () => any,
    cacheDuration: number
  ) {
    const now = Date.now();
    const key = `cache-${id}`;

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
    const data = await func();

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

  let searchText: string = $state("");
  let showClearText: boolean = $state(false);
  let inputValue = $state("");

  const throttleFunc = (func: (...args: any[]) => any, delay: number = 500) => {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: any[]) => {
      if (!timeout) {
        timeout = setTimeout(() => {
          func(...args);
          timeout = null;
        }, delay);
      }
    };
  };

  const handleSearch = () => {
    let query = searchText;

    // exit if query is empty, less than 3 characters or is the current result
    if (
      !query ||
      query.length < 3 ||
      (searchRes.query && query == searchRes.query)
    )
      return;

    searchRes.loading = true;

    fetchWithCustomCache(
      `search-${query}`,
      () => {
        return masterServices.search.songs(query);
      },
      60 * 60 * 1000
    ).then((data) => {
      data.results = data.results.map((song: { image: string }) => {
        song.image = song.image.replace("http://", "https://");
        return song;
      });
      searchRes.query = query;
      searchRes.songs = data;
      searchRes.loading = false;
    });
  };

  const handleThrottledSearch = throttleFunc(handleSearch, 1000);
</script>

<svelte:head>
  <meta property="theme-color" content="#000" />
  <title>Dashboard - Carter</title>
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
        class="h-[1.3em] max-w-[5%] {searchRes.loading
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

          target.value = target.value.replace(/[^a-zA-Z0-9 '-]/g, "");
          searchText = target.value.trim();

          if (searchText == "") {
            return;
          }

          showClearText = target.value.length > 2;

          handleThrottledSearch();
        }}
      />

      {#if showClearText}
        <button
          class="p-0 m-0 h-[75%] max-w-[5%] bg-transparent"
          aria-label="clear search text"
          transition:fade={{ duration: 100 }}
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
    class="items-center justify-center space-y-0 max-h-[93dvh] h-[93dvh] overflow-y-scroll pb-[13dvh] rounded-t-xl bg-transparent no-scrollbar w-full {searchRes.loading
      ? 'animate-pulse'
      : ''}"
  >
    {#if searchRes.songs}
      <h2
        class="text-white font-medium w-[100dvw] text-[9px] font-mono mt-2 px-2 select-none"
      >
        {#if searchRes.loading}
          <span class="animate-pulse">Loading(proxy -> server). </span>
        {:else}
          showing {searchRes.songs.results.length} result/s
          {#if searchRes.songs.total > 10}
            <span class="text-[8px] text-white/80"
              >—out of {searchRes.songs.total}</span
            >
          {/if}
        {/if}
        <span class="text-[8px] text-white/80 bg-white/5 p-0.5 rounded-sm"
          >Powered by JioSaavn</span
        >
      </h2>
      {#each searchRes.songs.results || [] as song (song.id)}
        <Track
          {song}
          playing={usePlayer.info.meta.id == song.id}
          onPlay={() => {
            const mediaURLs = usePlayer.helpers.decryptURL(
              song.more_info.encrypted_media_url
            );
            if (mediaURLs.length == 0) {
              console.error("no media url found for song");
              return;
            }
            const highestQURL = mediaURLs.at(-1)?.url;
            usePlayer.playback.play(
              {
                id: song.id,
                title: song.title,
                img: song.image.replace("http://", "https://"),
                artist: song.more_info.artistMap.primary_artists[0].name || "",
                album: song.more_info.album || "",
              },
              highestQURL
            );
          }}
          onAddToQueue={() => {
            const mediaURLs = usePlayer.helpers.decryptURL(
              song.more_info.encrypted_media_url
            );
            if (mediaURLs.length == 0) {
              console.error("no media url found for song");
              return;
            }
            const highestQURL = mediaURLs.at(-1)?.url;
            usePlayer.playback.appendQueue(
              {
                id: song.id,
                title: song.title,
                img: song.image.replace("http://", "https://"),
                artist: song.more_info.artistMap.primary_artists[0].name || "",
                album: song.more_info.album || "",
              },
              highestQURL
            );
          }}
        />
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
  </div>
  <div
    class="absolute h-[15dvh] bottom-[0dvh] w-screen bg-gradient-to-b from-black/0 to-[40%] to-black"
  ></div>
  <div
    transition:fly={{ duration: 500, y: 100 }}
    class="absolute h-[8dvh] w-screen bottom-[5dvh] flex flex-col items-center"
  >
    <div
      class="h-full w-[95dvw] bg-white/5 text-white rounded-md backdrop-brightness-[50%] backdrop-blur-lg flex flex-row items-center px-[0.5dvh] pt-[0.5dvh] border-t-[1px] border-white/5 overflow-hidden"
    >
      <div
        class="h-[2px] inset-0 w-full bg-white/5 absolute top-0 rounded-full overflow-hidden"
        transition:fade={{ duration: 250 }}
      >
        {#if usePlayer.info.fetch != 0}
          <div
            class="h-full bg-white/20 absolute"
            style="width: {usePlayer.info.fetch}%;"
          ></div>
        {/if}
        <div
          class="h-full bg-red-900 absolute z-10"
          style="width: {(usePlayer.info.t / usePlayer.info.dur) * 100}%;"
        ></div>
      </div>

      {#if !showSong}
        <img
          src={usePlayer.info.meta.img}
          alt="song thumbnail"
          id="player-thumbnail"
          class="h-[6dvh] aspect-square rounded-md col-span-2 text-xs"
          style="view-transition-name: player-thumbnail;"
        />
      {/if}
      <div class="grid grid-cols-10">
        {#if !showSong}
          <button
            class="p-0 m-0 col-span-8 pl-2"
            onclick={() => {
              if (!document.startViewTransition) showSong = true;
              else document.startViewTransition(() => (showSong = true));
            }}
          >
            <p
              class="font-medium text-md text-left truncate"
              style="view-transition-name: player-title;"
            >
              {@html usePlayer.info.meta.title}
              <span
                class="font-normal text-sm text-zinc-200 block"
                style="view-transition-name: player-artist"
                >{@html usePlayer.info.meta.artist}</span
              >
            </p></button
          >
        {/if}

        <button
          onclick={() => (showJAM = true)}
          aria-label="start jam session"
          class="p-0 m-0 col-span-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-full"
          >
            <path
              fill-rule="evenodd"
              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          class="p-0 m-0 col-span-1"
          onclick={() => {
            if (usePlayer.info.playing) usePlayer.playback.pause();
            else usePlayer.playback.resume();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-full mr-[1ch]"
          >
            {#if usePlayer.info.playing}
              <path
                transition:fade={{ duration: 150 }}
                fill-rule="evenodd"
                d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                clip-rule="evenodd"
              />
            {:else}
              <path
                transition:fade={{ duration: 150 }}
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clip-rule="evenodd"
              />
            {/if}
          </svg></button
        >
      </div>
    </div>
  </div>
  <Sheet bind:visible={showSong}>
    {#snippet title()}
      <h1
        class="text-white truncate max-w-[80%]"
        style="view-transition-name: player-title;"
      >
        {@html usePlayer.info.meta.title}
      </h1>
    {/snippet}
    {#snippet body()}
      <div class="overflow-y-scroll">
        <div class="flex flex-col items-center justify-center">
          <img
            src={usePlayer.info.meta.img}
            alt="song thumbnail"
            class="w-[50dvw] rounded-md shadow-black shadow-xl"
            style="view-transition-name: player-thumbnail;"
          />
          <p
            class="text-white mt-[5dvh]"
            style="view-transition-name: player-artist"
          >
            by <b>{@html usePlayer.info.meta.artist}</b>
          </p>
          <p class="text-zinc-500 italic">
            @{usePlayer.info.t}s for id:{usePlayer.info.meta.id}
          </p>
        </div>
        {#if usePlayer.info.meta.lyrics}
          <div
            class="bg-white/5 text-white w-[95dvw] h-fit p-2 rounded-t-md overflow-hidden"
          >
            <h3 class="text-xl">
              Lyrics <span
                class="text-[8px] text-white/80 bg-white/5 p-0.5 rounded-sm"
                >Powered by LRCLIB</span
              >
            </h3>
            <ul class="max-h-full px-2 text-md space-y-2">
              {#each usePlayer.info.meta.lyrics.content as block}
                <li
                  class={usePlayer.info.t >= block.time
                    ? "text-white"
                    : "text-zinc-500"}
                >
                  <button
                    class="m-0 p-0 text-left"
                    onclick={() => {
                      usePlayer.info.audioElm.currentTime = block.time;
                    }}>{block.text}</button
                  >
                </li>
              {:else}
                <li class="text-zinc-500">
                  Currently not available. You can help add/improve lyrics
                  through <a
                    class="text-blue-400 after:content-['_↗']"
                    href="https://lrclib.net/"
                    target="_blank">LRCLIB</a
                  >
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/snippet}
  </Sheet>

  <JamEntry bind:visible={showJAM} info={jamInfo} />
</div>
