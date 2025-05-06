<script lang="ts">
  import JamEntryExp from "./JAMEntryEXP.svelte";

  const playerInfo = $state({
    fetch: 0,
    t: 50,
    dur: 100,
  });

  let progressDrag = $state({
    initial: 0,
    current: 0,
    dragging: false,
    startX: 0,
    clientWidth: 0,
  });

  let jamType = $state("create");
  let roomUrl = $state("");

  let view = $state(false);

  $effect(() => {
    console.log("view", view);
  });
</script>

<p class="text-white">
  Welcome to experiment page. Basic backend loaded for isolated sandbox.
</p>

<select name="jam type" id="jam-type" bind:value={jamType}>
  <option value="create">create</option>
  <option value="join">join</option>
</select>
{#if jamType == "join"}
  <input type="text" placeholder="room url" bind:value={roomUrl} />
{/if}
<button onclick={() => (view = true)} class="bg-white">continue</button>
{#if view}
  <JamEntryExp
    visible={true}
    info={jamType == "join"
      ? {
          create: false,
          roomId: new URL(roomUrl).hash.split("#join")[1],
        }
      : { create: true }}
  />
{/if}
<!-- info={{ create: false, roomId: "c07a2ac0-42e1-42a6-85a9-07c48bd7ef56" }} -->
<div
  class="h-10 flex flex-col justify-center w-min -my-3"
  onpointerdown={(e) => {
    progressDrag.dragging = true;
    progressDrag.startX = e.clientX;
    progressDrag.initial = playerInfo.t / playerInfo.dur;
  }}
  onpointermove={(e) => {
    if (!progressDrag.dragging) return;

    const dx = e.clientX - progressDrag.startX;
    console.log("dragging", dx / progressDrag.clientWidth);
    console.log(dx);
    progressDrag.current = Math.min(
      Math.max(progressDrag.initial + dx / progressDrag.clientWidth, 0),
      1
    );
  }}
  onpointerup={(e) => {
    progressDrag.dragging = false;
    playerInfo.t = progressDrag.current * playerInfo.dur;
  }}
  role="progressbar"
>
  <div
    class="min-h-[5px] w-[95dvw] bg-black/5 dark:bg-white/5 rounded-full overflow-hidden relative"
    bind:clientWidth={progressDrag.clientWidth}
  >
    {#if playerInfo.fetch != 0}
      <div
        class="h-full bg-black/20 dark:bg-white/20 absolute"
        style="width: {playerInfo.fetch}%;"
      ></div>
    {/if}
    <div
      class="h-full bg-red-500 dark:bg-red-900 absolute z-10"
      style="width: {progressDrag.dragging
        ? progressDrag.current * 100
        : (playerInfo.t / playerInfo.dur) * 100}%;"
    ></div>
  </div>
</div>
