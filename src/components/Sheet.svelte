<script lang="ts">
  import { Spring } from "svelte/motion";
  import { fade, slide } from "svelte/transition";

  let { visible = $bindable(false), title, body } = $props();

  const touch = $state({
    held: false,
    originY: 0,
  });

  // Create a new Spring instance with initial value 0.
  // Adjust stiffness and damping as desired.
  const yOffset = new Spring(0, { stiffness: 0.15, damping: 0.8 });
  let dragDismiss = false;

  // Adjust slide transition duration based on dragDismiss flag.
  let slideDuration = $derived(dragDismiss ? 0 : 250);

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
      // Update the spring’s target based on drag distance.
      yOffset.target = dY;
    }
  };

  const handleTouchEnd = () => {
    touch.held = false;
    // If the dragged distance exceeds one-third of the viewport height...
    if (-yOffset.current > document.body.clientHeight / 3) {
      dragDismiss = true;
      // Animate the sheet off-screen by setting the target to -document.body.clientHeight.
      yOffset.target = -document.body.clientHeight;
      // Wait a bit (e.g. 300ms) for the spring animation to complete before hiding the sheet.
      setTimeout(() => {
        visible = false;
        // Reset the spring for next time and clear the dismiss flag.
        yOffset.target = 0;
        dragDismiss = false;
      }, 300);
    } else {
      // Otherwise, spring the sheet back into position.
      yOffset.target = 0;
    }
  };
</script>

{#if visible}
  <div
    class="w-screen h-[100vh] absolute top-0 overflow-y-hidden"
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
      class="bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md w-full h-[95vh] absolute rounded-t-[1em] overflow-clip"
      style="bottom: 0px; transform: translate3d(0, {-yOffset.current}px, 0); will-change: transform;"
      in:slide={{ duration: slideDuration }}
      out:slide={{ duration: slideDuration }}
    >
      <div
        class="mt-[1vh] w-full h-[5px] flex flex-col items-center justify-center"
      >
        <div
          class="bg-black/50 dark:bg-white/50 w-[5ch] h-full rounded-full"
        ></div>
      </div>
      <div
        class="w-full flex flex-row justify-center h-[7.5%] mt-[5%] relative border-b-[1px] border-black/25 dark:border-white/25 text-2xl font-black"
      >
        {@render title()}
        <button
          onclick={() => (visible = false)}
          class="-top-[calc(1vh+5px)] absolute right-[1ch]"
          aria-label="close sheet"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="size-6 dark:fill-white fill-black"
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
