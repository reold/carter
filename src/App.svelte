<script lang="ts">
  import { onMount } from "svelte";
  import { useStorage } from "./storage.svelte";

  import SvaraLogo from "./lib/SvaraLogo.svelte";
  import { fade } from "svelte/transition";
  import { ViewInfo } from "./store.svelte";

  onMount(() => {
    useStorage.init();
    setHashRouting();

    window.addEventListener("hashchange", setHashRouting);
    // window.addEventListener("popstate", (ev) => console.info(ev));
  });

  const routing: { [key: string]: { component: any } } = {
    home: { component: () => import("./pages/Home.svelte") },
    dash: {
      component: () => import("./pages/dash/Dash.svelte"),
    },
    geet: {
      component: () => import("./pages/Geet.svelte"),
    },
    auth: {
      component: () => import("./pages/Auth.svelte"),
    },
    experiment: {
      component: () => import("./pages/Experiment.svelte"),
    },
  };

  let route = $state(routing.home);
  let props = $state({});

  const setHashRouting = () => {
    const routeParams = window.location.hash.slice(1);

    if (!routing[routeParams]) {
      if (routeParams.startsWith("join")) {
        props = {
          jamInfo: { create: false, roomId: routeParams.substring(4) },
        };
        $ViewInfo.sheets.jam = true;
        route = routing.dash;
      } else {
        route = routing.home;
      }
      return;
    }
    route = routing[routeParams];
  };
</script>

{#await route.component()}
  <div
    class="-z-0 h-[100dvh] w-[100dvw] absolute top-0 left-0 flex flex-col items-center justify-center px-[2.5dvw] text-black dark:text-white bg-white/50 dark:bg-black/50 backdrop-blur-sm backdrop-brightness-50"
    in:fade={{ duration: 100, delay: 100 }}
    out:fade={{ duration: 100, delay: 0 }}
  >
    <!-- 500 ms -->
    <SvaraLogo class="h-[30dvh] w-[30dvh] animate-pulse" />
    <h1 class="text-2xl font-medium text-center mt-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-[1em] mr-2 animate-spin inline"
        style="animation-duration: 750ms;"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>Loading...
    </h1>
    <p class="text-black/80 dark:text-white/50 text-center text-sm max-w-[75%]">
      Svara loads pages on-demand, so you only get what you need
    </p>
  </div>
{:then PageComponent}
  <PageComponent.default {...props} />
{/await}
