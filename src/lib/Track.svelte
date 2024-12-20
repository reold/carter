<script lang="ts">
  import { fade, slide, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import crypto from "node-forge";

  const { song, loading } = $props();

  let touch = $state({
    held: false,
    originX: 0,
  });

  let focused = $state(false);

  let showTools = $state(false);

  export const createDownloadLinks = (encryptedMediaUrl: string) => {
    if (!encryptedMediaUrl) return [];

    const qualities = [
      { id: "_12", bitrate: "12kbps" },
      { id: "_48", bitrate: "48kbps" },
      { id: "_96", bitrate: "96kbps" },
      { id: "_160", bitrate: "160kbps" },
      { id: "_320", bitrate: "320kbps" },
    ];

    const key = "38346591";
    const iv = "00000000";

    const encrypted = crypto.util.decode64(encryptedMediaUrl);
    const decipher = crypto.cipher.createDecipher(
      "DES-ECB",
      crypto.util.createBuffer(key)
    );
    decipher.start({ iv: crypto.util.createBuffer(iv) });
    decipher.update(crypto.util.createBuffer(encrypted));
    decipher.finish();
    const decryptedLink = decipher.output.getBytes();

    return qualities.map((quality) => ({
      quality: quality.bitrate,
      url: decryptedLink.replace("_96", quality.id),
    }));
  };

  const handlePlay = async () => {
    const encryptedURL = song["more_info"]["encrypted_media_url"];
    const mediaURLs = await createDownloadLinks(encryptedURL);

    if (!mediaURLs || mediaURLs.length == 0) return;

    const selectURL = mediaURLs.at(-1)["url"];

    fetch(selectURL)
      .then((resp) => resp.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const audio = new Audio();
        audio.src = blobUrl;
        audio.controls = true;
        document.body.appendChild(audio);

        audio.play();
      });
  };
</script>

<div
  transition:fade={{ duration: 500 }}
  class="w-full h-[10dvh] pl-2 min-h-[7dvh] ring-zinc-500 text-white overflow-hidden flex flex-row space-x-2 border-b-[1px] border-white/5 py-2 select-none transition-colors duration-100 {focused
    ? 'bg-white/5'
    : 'bg-transparent'} {loading ? 'animate-pulse' : ''}"
  ontouchstart={(e) => {
    touch.held = true;
    touch.originX = e.touches[0].clientX;
    focused = true;
  }}
  ontouchmove={(e) => {
    if (touch.held) {
      const dX = e.touches[0].clientX - touch.originX;
      if (dX < -50) {
        showTools = true;
      } else {
        showTools = false;
      }
    }
  }}
  ontouchend={(e) => {
    touch.held = false;
    focused = false;
  }}
>
  <img
    src={song.image}
    alt="cover art"
    class="max-w-[20%] max-h-[7dvh] my-auto rounded-[0.5em] shadow-purple-950/50 shadow-sm transition-transform duration-200 {focused ||
    showTools
      ? 'scale-105'
      : ''}"
    loading="lazy"
    ondblclick={() => {
      handlePlay();
    }}
  />
  <div class="flex flex-col overflow-x-hidden -space-y-1 justify-center w-full">
    <h2 class="font-medium text-md max-w-full truncate">
      {@html song.title}
    </h2>
    <span class="font-base text-[0.7em] text-white/80 pl-2 truncate max-w-full"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-[0.7em] inline"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
        />
      </svg>
      {@html song.subtitle}</span
    >
  </div>
  {#if showTools}
    <div
      class="flex items-center text-white min-h-[7dvh] w-[20%]"
      transition:slide={{ axis: "x", duration: 100, easing: cubicInOut }}
    >
      <button
        class="bg-white/5 text-blue-300 rounded-full"
        aria-label="visit source link"
        onclick={() => {
          window.open(song.perma_url);
        }}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-[1.2em]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      </button>
    </div>
  {/if}
</div>
