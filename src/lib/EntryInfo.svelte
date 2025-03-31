<script lang="ts">
  import Sheet from "../components/Sheet.svelte";
  let { visible = $bindable(false) } = $props();
</script>

<Sheet bind:visible
  >{#snippet title()}
    <h1
      class="w-full text-center place-content-center text-2xl font-black text-black dark:text-white"
    >
      Carter Manager
    </h1>
  {/snippet}
  {#snippet body()}
    <div>
      <p class="text-lg text-black dark:text-white">
        A mobile-first music player built for delivering quality sound.
      </p>
      <p
        class="text-black/80 dark:text-white/50 text-sm max-h-[65dvh] overflow-y-scroll"
      >
        Carter, formerly known as Cartier Manager, began as a passion project by
        <strong>@reold</strong> to create a truly free alternative to music
        management. The inspiration came from the frustration sparked by
        Spotify's "free tier" limitations, motivating the development of a
        seamless and unrestricted solution.<br /><br />
        This app combines cutting-edge technologies to deliver a smooth and reliable
        experience. The frontend is powered by <strong>Svelte 5</strong>, while
        the backend utilizes the robust capabilities of
        <strong>FastAPI</strong>. Designed to operate cost-free, Carter
        leverages <strong>PWA</strong>, <strong>Redis</strong>,
        <strong>WebSockets</strong>, <strong>SSE</strong>, and
        <strong>serverless functions</strong>
        to ensure performance, scalability, and reliability. The user interface draws
        inspiration from Apple's <strong>iOS design principles</strong> and
        Google's <strong>Material Design</strong>, providing an elegant and
        intuitive experience while maintaining a balance between aesthetics and
        functionality.<br /><br />For developer contact, project source code and
        service status information
      </p>
      <div class="flex flex-row items-center justify-evenly mt-[1ch]">
        <button
          class="bg-white/70 dark:bg-black/10 text-blue-600 dark:text-blue-500 font-medium rounded-md"
          onclick={() => {
            window.open("https://github.com/reold");
          }}
          ><svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="size-[1em] inline mr-[1ch] fill-black dark:fill-white"
            ><title>GitHub</title><path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            /></svg
          >@reold</button
        >
        <button
          class="bg-white/70 dark:bg-black/10 text-blue-600 dark:text-blue-500 font-medium rounded-md"
          onclick={() => {
            window.open("https://github.com/reold/carter");
          }}
          ><svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="size-[1em] inline mr-[1ch] fill-black dark:fill-white"
            ><title>GitHub</title><path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            /></svg
          >source</button
        >
        <button
          class="bg-white/70 dark:bg-black/10 text-blue-600 dark:text-blue-500 font-medium rounded-md"
          onclick={() => {
            window.open("https://app.pulsetic.com/status/yQJXLGOs");
          }}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="size-[1em] fill-none stroke-black dark:stroke-white stroke-[2px] inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          status</button
        >
      </div>
    </div>
  {/snippet}</Sheet
>
