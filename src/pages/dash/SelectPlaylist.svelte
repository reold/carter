<script lang="ts">
  import { onMount } from "svelte";
  import { JioSaavnSource } from "../../source.svelte";
  import { useLibrary } from "../../storage.svelte";
  import type { TrackT } from "../../player.svelte";
  import { ViewInfo } from "../../store.svelte";

  let searchText = $state("");
  let playlists = $state(
    [] as {
      id: string;
      title: string;
      description: string;
      tracks: TrackT[];
      // additional
      selected: boolean;
    }[]
  );

  let filteredPlaylists = $derived.by(() => {
    return playlists.filter((playlist) => {
      return playlist.title
        .toLowerCase()
        .includes(searchText.trim().toLowerCase());
    });
  });
  let canCreatePlaylist = $derived(filteredPlaylists.length == 0);

  onMount(() => {
    playlists = useLibrary.playlist.getAll().map((playlist) => {
      let selected = false;
      if (
        playlist.tracks.length > 0 &&
        playlist.tracks.find(
          (track) => track.meta.id == $ViewInfo.select.track.id
        )
      )
        selected = true;
      return { ...playlist, selected };
    });
  });

  const handleCreatePlaylist = async () => {
    searchText = searchText.trim();
    const asTrackT = await JioSaavnSource.helpers.toTrackT(
      $ViewInfo.select.track
    );
    useLibrary.playlist.create(searchText, "", [asTrackT]);
    $ViewInfo.sheets.selectPlaylist = false;
    $ViewInfo.sheets.moreActions = false;
  };

  const handleClose = (e) => {
    filteredPlaylists.forEach(async (playlist) => {
      const inPlaylist = playlist.tracks.find((track) => {
        return track.meta.id == $ViewInfo.select.track.id;
      });

      // ignore if no changes were made
      if (
        (playlist.selected && inPlaylist) ||
        (!playlist.selected && !inPlaylist)
      ) {
        return;
      }

      if (playlist.selected && !inPlaylist) {
        const asTrackT = await JioSaavnSource.helpers.toTrackT(
          $ViewInfo.select.track
        );
        useLibrary.playlist.add(playlist.id, asTrackT);
      } else if (!playlist.selected && inPlaylist) {
        useLibrary.playlist.remove(playlist.id, $ViewInfo.select.track.id);
      }
    });

    $ViewInfo.sheets.selectPlaylist = false;
    $ViewInfo.sheets.moreActions = false;
  };
</script>

<button
  class="absolute top-0 w-full h-[25dvh]"
  onclick={handleClose}
  aria-label="close sheet"
></button>
<div
  class="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50dvh] w-[95dvw] px-2 bg-gray-200 dark:bg-zinc-900 rounded-lg text-md text-black dark:text-white"
>
  <p class="w-full text-center text-lg font-medium mb-[1ch] py-1">
    Select playlist
  </p>
  <div class="flex flex-row items-center justify-around space-x-2">
    <div class="w-full max-w-120 relative">
      <input
        type="text"
        autocomplete="off"
        spellcheck="false"
        id="playlist-name-input"
        class="p-0.5 px-2 pt-3 w-full text-[16px] text-black dark:text-white bg-transparent rounded-lg ring-1 ring-black/50 dark:ring-white/50 invalid:ring-red-600 dark:invalid:ring-red-500 dark:focus:ring-blue-500 focus:outline-hidden focus:ring-blue-600 peer appearance-none"
        placeholder=" "
        bind:value={searchText}
      />
      <label
        for="playlist-name-input"
        class="absolute text-sm text-black/75 dark:text-white/75 duration-300 transform -translate-y-4 scale-[85%] px-1.5 top-2 z-10 origin-[0] bg-gray-200 dark:bg-zinc-900 peer-focus:px-1.5 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[85%] peer-focus:-translate-y-4 peer-focus:rtl:translate-x-1/4 peer-focus:rtl:left-auto start-1"
        >playlist name</label
      >
    </div>
    <button
      class="bg-blue-500 dark:bg-blue-400 text-white dark:text-black rounded-md disabled:bg-black/50 dark:disabled:bg-white/50"
      disabled={!canCreatePlaylist}
      onclick={handleCreatePlaylist}>create</button
    >
  </div>
  <ul class="mt-[1ch] space-y-1 overflow-y-scroll flex-col-reverse">
    {#if !canCreatePlaylist}
      {#each filteredPlaylists as playlist}
        <li
          class="flex flex-row space-x-1 border-b-1 border-black/20 dark:border-white/20 py-2"
        >
          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full p-1 px-2"
              for="ripple-on"
            >
              <input
                id="ripple-on"
                type="checkbox"
                bind:checked={playlist.selected}
                class="peer relative h-[1.25em] aspect-square cursor-pointer appearance-none rounded-sm border border-gray-300 shadow-sm transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white/50 before:opacity-0 before:transition-opacity checked:border-black/20 dark:checked:bg-violet-600 checked:bg-violet-500 checked:before:bg-transparent hover:before:opacity-5"
              />
              <span
                class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <p class="w-full truncate">{playlist.title}</p>
        </li>
      {:else}
        <li>
          <p>
            You haven't created any playlists yet. <span class="text-white/50"
              >Start by creating a playlist to organize and access your songs
              effortlessly.</span
            >
          </p>
        </li>
      {/each}
    {:else}
      <li>
        <p>
          Create {#if searchText.length > 0}<i>"{@html searchText}"</i>
          {/if} playlist with
          <i>"{@html $ViewInfo.select.track.title}"</i>
        </p>
      </li>
    {/if}
  </ul>
</div>

<button
  class="absolute bottom-0 w-full h-[25dvh]"
  onclick={handleClose}
  aria-label="close sheet"
></button>
