<script lang="ts">
  import Home from "./pages/Home.svelte";
  import Dash from "./pages/Dash.svelte";
  import type { Component } from "svelte";

  const routing: { [key: string]: { component: Component } } = {
    home: { component: Home },
    dashboard: { component: Dash },
  };

  let route = $state(routing.home);
  let props = $state({});

  const setHashRouting = () => {
    const routeParams = window.location.hash.slice(1);

    if (!routing[routeParams]) {
      if (routeParams.startsWith("join")) {
        props = {
          jamInfo: { create: false, roomId: routeParams.substring(4) },
          showJAM: true,
        };
        route = routing.dashboard;
      }
      return;
    }
    route = routing[routeParams];
  };

  $effect(setHashRouting);
  window.addEventListener("hashchange", setHashRouting);
</script>

<route.component {...props} />
