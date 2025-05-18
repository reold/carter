<script lang="ts">
  import { fade, fly } from "svelte/transition";

  import Track from "../../lib/Track.svelte";
  import { JioSaavnSource } from "../../source.svelte";
  import { usePlayer } from "../../player.svelte";
  import { TabEnum, ViewInfo } from "../../store.svelte";

  import { config } from "../../storage.svelte";

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
        return JioSaavnSource.query(query);
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

<div
  class="p-2 pb-1 text-black dark:text-white h-[7dvh]"
  style="display: {$ViewInfo.tab == TabEnum.search ? 'block' : 'none'};"
>
  <div
    class="relative w-full bg-black/5 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 rounded-md flex flex-row items-center justify-center space-x-[0.2ch] text-[16px] h-full px-[1ch]"
    transition:fly={{ duration: 500, y: -100 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-[1.3em] max-w-[5%] {searchRes.loading
        ? 'animate-pulse text-purple-600 dark:text-purple-500 stroke-2'
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
      class="bg-transparent ring-0 focus:outline-none rounded-md py-0 h-full placeholder:text-black/50 dark:placeholder:text-white/50 {showClearText
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
  class="items-center justify-center space-y-0 max-h-[93dvh] h-[93dvh] overflow-y-scroll pb-[20dvh] rounded-t-xl bg-transparent no-scrollbar w-full {searchRes.loading
    ? 'animate-pulse'
    : ''}"
  style="display: {$ViewInfo.tab == TabEnum.search ? 'block' : 'none'};"
  transition:fade={{ duration: 1000 }}
>
  {#if searchRes.songs}
    <h2
      class="text-black dark:text-white font-medium w-dvw text-[9px] font-mono mt-2 px-2 select-none"
    >
      {#if searchRes.loading}
        <span class="animate-pulse">Loading(proxy -> server). </span>
      {:else}
        showing {searchRes.songs.results.length} result{searchRes.songs.results
          .length > 1
          ? "s"
          : ""}
        {#if searchRes.songs.total > 10}
          <span class="text-[8px] text-black/80 dark:text-white/80"
            >—out of {searchRes.songs.total}</span
          >
        {/if}
      {/if}
      <span
        class="text-[8px] text-black/80 dark:text-white/80 bg-black/5 dark:bg-white/5 p-0.5 rounded-xs"
        >Powered by JioSaavn</span
      >
    </h2>
    {#each searchRes.songs.results || [] as track (track.id)}
      <Track
        {track}
        playing={usePlayer.info.meta.id == track.id}
        onPlay={async () => {
          const mediaURLs = await JioSaavnSource.getDownloadableURLs(track);

          if (mediaURLs.length == 0) {
            console.error("no media url found for track");
            return;
          }

          const highestQURL = mediaURLs.at(-1)?.url;
          usePlayer.playback.play(
            {
              id: track.id,
              title: track.title,
              img: track.image.replace("http://", "https://"),
              artist: track.more_info.artistMap.primary_artists[0].name || "",
              album: track.more_info.album || "",
            },
            highestQURL
          );
        }}
        onAddToQueue={async () => {
          const mediaURLs = await JioSaavnSource.getDownloadableURLs(track);

          if (mediaURLs.length == 0) {
            console.error("no media url found for track");
            return;
          }
          const highestQURL = mediaURLs.at(-1)?.url;
          usePlayer.playback.appendQueue(
            {
              id: track.id,
              title: track.title,
              img: track.image.replace("http://", "https://"),
              artist: track.more_info.artistMap.primary_artists[0].name || "",
              album: track.more_info.album || "",
            },
            highestQURL
          );
        }}
        onMoreActions={() => {
          $ViewInfo.sheets.moreActions = true;
          $ViewInfo.select.track = track;
        }}
      />
    {/each}
  {:else}
    <div class="px-2">
      <h1
        class="text-black dark:text-white font-semibold text-center mt-[1em] mb-2 text-xl border-b border-black/10 dark:border-white/10"
      >
        🎶 Search for Music!
      </h1>
      <p class="text-black/80 dark:text-white/80 text-sm">
        Find for your favorite songs, playlists, artists and more!
        {#if $config.connections.jiosaavn.active}
          <span>
            Svara is connected with <b
              >{$config.connections.jiosaavn.data.meta.firstname}'s
            </b>({$config.connections.jiosaavn.data.meta.username}) JioSaavn
            Account.
          </span>
        {/if}
      </p>
    </div>
  {/if}
</div>
