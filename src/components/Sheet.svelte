<script lang="ts">
  import { tweened } from "svelte/motion";
  import { fade, slide } from "svelte/transition";

  let { visible = $bindable(false), title, body } = $props();

  const touch = $state({
    held: false,
    originY: 0,
  });

  const yOffset = tweened(0);
  const opacity = tweened(1);

  yOffset.subscribe((offset) => {
    opacity.set(((10000 + offset) / 10000) * 1, { duration: 10 });
  });

  const handleTouchStart = (e: TouchEvent) => {
    touch.held = true;
    touch.originY = e.touches[0].clientY;
  };

  const handleMove = (e: TouchEvent) => {
    if (!touch.held) return;

    const dY = touch.originY - e.touches[0].clientY;

    if (dY < 0) {
      yOffset.set(dY, { duration: 0 });
    }
  };

  const handleTouchEnd = async (e: TouchEvent) => {
    touch.held = false;

    if (-$yOffset > document.body.clientHeight / 3) {
      visible = false;
    }
    yOffset.set(0, { duration: 0 });
  };
</script>

{#if visible}
  <div
    class="w-screen h-screen absolute top-0 overflow-y-clip"
    style="opacity: {$opacity};"
  >
    <div
      class="w-full h-full backdrop-brightness-50 relative top-0"
      in:fade={{ duration: 300 }}
      out:fade={{ duration: 500 }}
    ></div>
    <div
      class="bg-zinc-900 w-full h-[95vh] absolute rounded-t-[1em] overflow-clip"
      style="bottom: {$yOffset}px"
      in:slide={{ duration: 250 }}
      out:slide={{ duration: 100 }}
    >
      <div
        class="mt-[1vh] w-full h-[5px] flex flex-col items-center justify-center"
      >
        <div class="bg-zinc-500 w-[15%] h-full rounded-full"></div>
      </div>
      <div
        class="w-full flex flex-row justify-center h-[10%] relative"
        ontouchstart={handleTouchStart}
        ontouchmove={handleMove}
        ontouchend={handleTouchEnd}
      >
        <!-- <button class="">close</button> -->

        <h1 class="w-full text-center place-content-center text-2xl font-black">
          {@render title()}
        </h1>
        <button
          onclick={() => (visible = false)}
          class="-top-[calc(1vh+5px)] absolute right-[1ch]"
          aria-label="close sheet"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="size-6 fill-white"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="p-2 h-[50%] flex flex-col items-center justify-around">
        {@render body()}
      </div>
    </div>
  </div>
{/if}
