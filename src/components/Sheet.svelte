<script lang="ts">
  import { tweened } from "svelte/motion";
  import { fade, slide } from "svelte/transition";

  let { visible = $bindable(false), title, body } = $props();

  const touch = $state({
    held: false,
    originY: 0,
  });

  const yOffset = tweened(0);

  function isInsideScrollableDiv(target: HTMLElement) {
    let currentElement = target;

    while (currentElement.id !== "collapse-sheet") {
      const overflowY = window.getComputedStyle(currentElement).overflowY;
      const isScrollable =
        (overflowY === "auto" || overflowY === "scroll") &&
        currentElement.scrollHeight > currentElement.clientHeight;

      if (isScrollable && currentElement.scrollTop > 0) {
        return true;
      }

      currentElement = currentElement.parentElement as HTMLElement;
    }

    return false;
  }

  const handleTouchStart = (e: TouchEvent) => {
    if (isInsideScrollableDiv(e.target)) return;
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
      yOffset.set(0, { duration: 0 });
    } else {
      await yOffset.set(0, { duration: 50 });
    }
  };
</script>

{#if visible}
  <div
    class="w-screen h-[100dvh] absolute top-0 overflow-y-clip"
    id="collapse-sheet"
  >
    <div
      class="w-full h-full backdrop-brightness-[40%] relative top-0"
      in:fade={{ duration: 300 }}
      out:fade={{ duration: 500 }}
    ></div>
    <div
      ontouchstart={handleTouchStart}
      ontouchmove={handleMove}
      ontouchend={handleTouchEnd}
      class="bg-zinc-900/85 backdrop-blur-lg w-full h-[95dvh] absolute rounded-t-[1em] overflow-clip"
      style="bottom: 0px; transform: translateY({-$yOffset}px);"
      in:slide={{ duration: 250 }}
      out:slide={{ duration: 250 }}
    >
      <div
        class="mt-[1dvh] w-full h-[5px] flex flex-col items-center justify-center"
      >
        <div class="bg-zinc-500 w-[5ch] h-full rounded-full"></div>
      </div>
      <div
        class="w-full flex flex-row justify-center h-[7.5%] mt-[5%] relative border-b-[1px] border-zinc-500/25 text-2xl font-black"
      >
        <!-- <button class="">close</button> -->

        {@render title()}

        <button
          onclick={() => (visible = false)}
          class="-top-[calc(1dvh+5px)] absolute right-[1ch]"
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
      <div class="px-2 pt-4 h-[87.5%] flex flex-col items-center justify-start">
        {@render body()}
      </div>
    </div>
  </div>
{/if}
