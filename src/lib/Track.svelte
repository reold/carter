<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  const {
    track,
    playing = false,
    onPlay,
    onAddToQueue,
    onMoreActions,
  } = $props();

  let touch = $state({
    held: false,
    originX: 0,
    originY: 0,
  });

  let focused = $state(false);

  let showActions = $state(false);
</script>

<div
  transition:fade={{ duration: 500 }}
  class="w-full h-[10dvh] pl-2 min-h-[7dvh] ring-zinc-500 text-black dark:text-white overflow-hidden flex flex-row space-x-2 border-b-[1px] border-black/5 dark:border-white/5 py-2 select-none transition-colors duration-100 {focused
    ? 'bg-black/5 dark:bg-white/5'
    : 'bg-transparent'}"
  ontouchstart={(e) => {
    touch.held = true;
    touch.originX = e.touches[0].clientX;
    touch.originY = e.touches[0].clientY;
    focused = true;
  }}
  ontouchmove={(e) => {
    if (touch.held) {
      const dX = e.touches[0].clientX - touch.originX;
      const dY = e.touches[0].clientY - touch.originY;

      if (Math.abs(dY) > 50) {
        touch.held = false;
        focused = false;
      } else if (dX < -50) {
        showActions = true;
      } else {
        showActions = false;
      }
    }
  }}
  ontouchend={(e) => {
    touch.held = false;
    focused = false;
  }}
>
  <button
    class="p-0 m-0 max-w-[20%] my-auto transition-transform duration-200 rounded-[0.5em] overflow-hidden {focused
      ? 'scale-105'
      : ''}"
    onclick={() => {
      if (!playing) {
        onPlay();
      }
    }}
  >
    <img
      src={track.image}
      alt="cover art"
      class="max-h-[7dvh]"
      loading="lazy"
    />
  </button>
  <button
    class="flex flex-col overflow-x-hidden -space-y-1 justify-center w-full text-left p-0"
    onclick={() => {
      if (!playing) {
        onPlay();
      }
    }}
  >
    <h2
      class="font-medium text-base max-w-full truncate {playing
        ? 'text-violet-600 dark:text-violet-500'
        : ''}"
    >
      {@html track.title}
    </h2>
    <span
      class="font-base text-[0.7em] text-black/80 dark:text-white/80 pl-2 truncate max-w-full"
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
      {@html track.subtitle}</span
    >
  </button>
  {#if showActions}
    <div
      class="flex items-center text-black dark:text-white min-h-[7dvh] w-[40%] space-x-2"
      transition:slide={{ axis: "x", duration: 100, easing: cubicInOut }}
    >
      <button
        class="bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full"
        aria-label="add track to queue"
        onclick={onAddToQueue}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-[1.2em]"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        class="bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full"
        aria-label="visit source link"
        onclick={onMoreActions}
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
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />

          <!-- <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          /> -->
        </svg>
      </button>
    </div>
  {/if}
</div>
