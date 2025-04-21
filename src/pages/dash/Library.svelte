<script lang="ts">
  import { onMount } from "svelte";
  import { config, useLibrary } from "../../storage.svelte";
  import { JioSaavnSource } from "../../source.svelte";
  import { dataFetch, PROXY_URL } from "../../services.svelte";
  import { usePlayer, type TrackT } from "../../player.svelte";
  import { ViewInfo, TabEnum } from "../../store.svelte";

  let library = $state({
    jiosaavn: {
      show: true,
    },
    carter: {
      show: true,
      playlists: [] as {
        id: string;
        title: string;
        description: string;
        tracks: TrackT[];
      }[],
    },
  });
  let sessionToken = $config.connections.jiosaavn.data.token;

  onMount(async () => {
    if (!$config.connections.jiosaavn.active) {
      library.jiosaavn.show = false;
    } else {
      await dataFetch(
        `${PROXY_URL}${encodeURIComponent("https://stats.jiosaavn.com/stats.php?ctx=iphoneapp")}`,
        JSON.stringify({
          headers: {
            Cookie: `ssid=did_v1_79D9162F-4F77-4B42-8D86-5EC214467860.1741341828.673173; _pl=iphoneapp-; I=SLCIdaC3Pwa5slQDrYdXuNljlkFgcTbQMkQY5netgFwiGxtz4HzvNkh7s0XL2KeO0SvzriK//vJu+0TeJLbnx2HP8fFR6TdJVFXfkt4DLmMaVdwF1r9O9wuHIhZUzcgGa4qKL9e1eQdNNRsyHkFK1oPdf3AV9E17HA12+ZMnC1bZJNwiQo2+oMowyPQv80EwNAhd7qIZkKCW2uthbZXLufT/nIkDeelVQ/JHE0m4OVIUtBdqsSazT6rBuLgWLdNaDghnjdsgtRJvqwIj2zQsova0gmeWC79w6ZCoNGlGfjiOZqxOh3zbAp9iDfXQRTsxn181HjE4AvH9HuuKZlFwCQ==;`,
            // Cookie: `I=${encodeURIComponent(sessionToken)}; SG=m; network=google;`,
            "User-Agent": "Saavn/9.16.1 (iPhone; iOS 18.4; Scale/3.00)",
          },
        })
      );

      const data = await JioSaavnSource.helpers.fetchLibrary(sessionToken);
    }
  });

  $effect(() => {
    library.carter.playlists = useLibrary.playlist.getAll();
    $ViewInfo.tab;
  });

  const handlePlay = (playlist) => {
    playlist.tracks.forEach((track, ti) => {
      if (ti == 0) {
        usePlayer.playback.play(track.meta, track.url);
      } else {
        usePlayer.playback.appendQueue(track.meta, track.url);
      }
    });
    // usePlayer.playback.appendQueue(...playlist.)
  };
</script>

<div
  class="text-black dark:text-white"
  style="display: {$ViewInfo.tab == TabEnum.library ? 'block' : 'none'};"
>
  <h1 class="px-2 pt-2 text-2xl font-semibold">Your Library</h1>
  <div class="flex flex-col items-center justify-center space-y-5">
    <div class="relative w-full">
      <!-- Scrollable button container -->
      <div
        class="flex flex-row items-center w-full overflow-x-scroll overflow-y-hidden p-[2ch] space-x-2 py-1 no-scrollbar actions-list"
      >
        <button
          class="bg-gradient-to-br from-fuchsia-500 to-rose-500 rounded-md font-bold whitespace-nowrap text-white text-sm"
          onclick={() => {
            $ViewInfo.sheets.jam = true;
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-[1.25em] inline"
          >
            <path
              fill-rule="evenodd"
              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              clip-rule="evenodd"
            />
          </svg>
          JAM
        </button>
        <button
          class="bg-gradient-to-b from-blue-400 to-blue-800 rounded-md font-bold text-white text-sm whitespace-nowrap"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-[1.25em] inline"
          >
            <path
              fill-rule="evenodd"
              d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
              clip-rule="evenodd"
            />
          </svg>
          JioSaavn
        </button>
        <button
          class="bg-gradient-to-b from-blue-400 to-blue-800 rounded-md font-bold whitespace-nowrap text-white text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-[1.25em] inline"
          >
            <path
              fill-rule="evenodd"
              d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
              clip-rule="evenodd"
            />
          </svg>
          Spotify
        </button><button
          class="bg-gradient-to-b from-gray-600 to-gray-900 rounded-md font-bold whitespace-nowrap text-white text-sm"
        >
          link DUMMY
        </button><button
          class="bg-gradient-to-b from-gray-600 to-gray-900 rounded-md font-bold whitespace-nowrap text-white text-sm"
        >
          Settings
        </button>
      </div>

      <!-- Left gradient -->
      <div
        class="pointer-events-none absolute top-0 left-0 h-full w-[4ch] bg-gradient-to-r dark:from-black/50 to-transparent"
      ></div>

      <!-- Right gradient -->
      <div
        class="pointer-events-none absolute top-0 right-0 h-full w-[4ch] bg-gradient-to-l dark:from-black/100 to-transparent"
      ></div>
    </div>

    <!-- {#if !library.jiosaavn.show}
      <div class="w-screen">
        <p class="text-xl font-medium">JioSaavn</p>
        <div
          class="flex flex-row items-center justify-around overflow-x-scroll space-x-2"
        >
          {#each [{ title: "Liked" }, { title: "Summer Festival" }, { title: "Lighten Moods" }, { title: "Romantic Hits" }, { title: "AR RAHMAN's Classics" }] as playlist}
            <div class="min-w-[15ch] ring-1 ring-black">{playlist.title}</div>
          {/each}
        </div>
      </div>
    {/if} -->
    <div class="w-full bg-black/5 dark:bg-white/5 pt-2">
      <p class="text-lg font-medium px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-[1.25em] inline"
        >
          <path
            fill-rule="evenodd"
            d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg> Playlists
      </p>
      <div class="overflow-y-scroll max-h-[60dvh]">
        <ul class="flex flex-col">
          {#each library.carter.playlists as playlist}
            <li class="border-black/50 dark:border-white/50 border-b-[1px]">
              <button
                class="h-full w-full p-2 flex flex-row items-center space-x-2 text-left"
                onclick={() => handlePlay(playlist)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-[1.5rem] stroke-violet-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
                <div class="flex flex-col">
                  <p class="text-lg font-medium">
                    {@html playlist.title}
                  </p>
                  <p class="text-sm">
                    {#if playlist.tracks.length == 0}
                      empty
                    {:else}
                      {playlist.tracks.length} song{playlist.tracks.length > 1
                        ? "s"
                        : ""}
                    {/if}<span class="text-black/50 dark:text-white/50">
                      {` / ${playlist.id}`}</span
                    >
                  </p>
                </div>
              </button>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
