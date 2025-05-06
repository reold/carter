<script lang="ts">
  import forge, { type Bytes } from "node-forge";
  import { onMount } from "svelte";
  import GeetLine from "../lib/GeetLine.svelte";

  const handleFetchChallenge = async () => {
    statusText = "fetching challenge";
    const resp = await fetch("https://lrclib.net/api/request-challenge", {
      method: "POST",
    });
    const data = await resp.json();
    challenge = {
      ...data,
    };
    statusText = "";
  };

  function verifyNonce(resultBytes: Bytes, targetBytes: Bytes) {
    if (resultBytes.length !== targetBytes.length) {
      return false;
    }

    for (let i = 0; i < resultBytes.length; i++) {
      if (resultBytes.charCodeAt(i) > targetBytes.charCodeAt(i)) {
        return false;
      } else if (resultBytes.charCodeAt(i) < targetBytes.charCodeAt(i)) {
        break;
      }
    }

    return true;
  }

  async function solveChallenge(
    prefix: string,
    targetHex: string,
    updateStatus: (text: string) => void
  ) {
    let nonce = 0;
    const targetBytes = forge.util.hexToBytes(targetHex);

    while (true) {
      const input = `${prefix}${nonce}`;
      const md = forge.md.sha256.create();
      md.update(input);
      const hashedBytes = md.digest().getBytes();

      if (verifyNonce(hashedBytes, targetBytes)) {
        updateStatus(`Nonce found: ${nonce}`);
        return nonce.toString();
      } else {
        nonce++;
      }

      // Update UI status every 1000 iterations to keep the browser responsive
      if (nonce % 1000 === 0) {
        updateStatus(
          `Checking nonce: ${Math.trunc(nonce / 1000)}k  - ${Math.trunc((nonce / 10_000_000) * 100)}%`
        );
        await new Promise((resolve) => setTimeout(resolve, 0)); // Pause briefly to avoid blocking
      }
    }
  }

  let challenge = $state({
    prefix: "kpZdEhCT04KPwdsvlctTCYY6w317Vr9j",
    target: "000000FF00000000000000000000000000000000000000000000000000000000",
  });
  let statusText = $state("");

  const handleSolveChallenge = async (e: Event) => {
    if (!(challenge.prefix.length > 0 && challenge.target.length > 0)) {
      return;
    }
    statusText = "Starting to find nonce...";
    const nonce = await solveChallenge(
      challenge.prefix,
      challenge.target,
      (text) => {
        statusText = text;
      }
    );
    statusText = `Nonce = ${nonce}`;
  };

  onMount(() => {
    const tempCSource = JSON.parse(localStorage.getItem("temp"));

    if (tempCSource) {
      cSource = tempCSource;
      console.info("using cached cSource");
    } else {
      console.info("not found in memory");
    }
  });

  let cSource: { content: string; t: number }[] = $state([]);
  let helpers = $state({
    rawLyrics: `മലര്‍കൊടി പോലെ വര്‍ണത്തുടി പോലെ 
മലര്‍കൊടി പോലെ വര്‍ണത്തുടി പോലെ
മയങ്ങൂ.... നീ എന്‍ മടി മേലെ 
മയങ്ങൂ.... നീ എന്‍ മടി മേലെ

മലര്‍കൊടി പോലെ വര്‍ണത്തുടി പോലെ 
മയങ്ങൂ.... നീ എന്‍ മടി മേലെ 
മയങ്ങൂ..... നീ എന്‍ മടി മേലെ 
അമ്പിളീ നിന്നെ പുല്‍കി അംബരം പൂകി ഞാന്‍ മേഘമായ്‌ (2)
നിറസന്ധ്യയായ്‌ ഞാന്‍ ആരോമലേ 
വിടര്‍ന്നെന്നില്‍ നീ ഒരു പൊന്‍താരമായ്‌ 
ഉറങ്ങൂ... കനവു കണ്ടുണരാനായ്‌ ഉഷസണയുമ്പോള്‍ 

മലര്‍കൊടി പോലെ വര്‍ണത്തുടി പോലെ 
മയങ്ങൂ.... നീ എന്‍ മടി മേലെ 
ആരിരോ.. ആരിരാരാരോ 

എന്റെ മടിയെന്നും നിന്റെപൂമഞ്ചം 
എന്‍മനമെന്നും നിന്‍ പൂങ്കാവനം (2)
ഈ ജന്മത്തിലും വരും ജന്മത്തിലും 
ഇനി എന്‍ ജീവന്‍ താരാട്ടായ്‌ ഒഴുകേണമേ 
മധുകണം പോലെ മഞ്ഞിന്‍മണി പോലെ 
മയങ്ങൂ... നീ ഈ ലത മേലെ 
മയങ്ങൂ.... നീ എന്‍ മടി മേലെ 
ആരിരോ.. ആരിരാരാരോ 
ആരിരോ.. ആരിരാരാരോ

കാലമറിയാതെ ഞാന്‍ അമ്മയായ്‌ 
കഥയറിയാതെ നീ പ്രതിഛായയായ് (2)
നിന്‍മനമെന്‍ ധനം നിന്‍സുഖമെന്‍ സുഖം 
ഇനി ഈ വീണ നിന്‍ രാഗമണിമാളിക 
മധുസ്വരം പോലെ 
മണിസ്വനം പോലെ 
മയങ്ങൂ... ഗാന കുടം മേലെ 
മയങ്ങൂ.... നീ എന്‍ മടി മേലെ 
അമ്പിളീ നിന്നെ പുല്‍കി അംബരം പൂകി ഞാന്‍ മേഘമായ്‌ (2)
നിറസന്ധ്യയായ്‌ ഞാന്‍ ആരോമലേ 
വിടര്‍ന്നെന്നില്‍ നീ ഒരു പൊന്‍താരമായ്‌ 
ഉറങ്ങൂ... കനവു കണ്ടുണരാനായ്‌ ഉഷസണയുമ്പോള്‍ 
മലര്‍കൊടി പോലെ വര്‍ണത്തുടി പോലെ 
മയങ്ങൂ.... നീ എന്‍ മടി മേലെ 
മയങ്ങൂ.... നീ എന്‍ മടി മേലെ
ആരിരോ.. ആരിരാരാരോ 
ആരിരോ..... ആരിരാരാരോ`,
    parseRawLyrics: () => {
      cSource = helpers.rawLyrics
        .split("\n")
        .map((line) => {
          return { content: line.trim(), t: -1 };
        })
        .filter((block) => {
          return block.content.length > 0;
        });

      localStorage.setItem("temp", JSON.stringify(cSource));
    },
  });
</script>

<svelte:head>
  <title>Geet Builder - Svara</title>
</svelte:head>

<h1 class="pl-2 bg-purple-500 font-black">Geet Builder(Standalone)</h1>
{#if cSource.length == 0}
  <textarea
    placeholder="enter raw lyrics to start with"
    bind:value={helpers.rawLyrics}
  ></textarea>
  <button class="bg-white/10 text-blue-400" onclick={helpers.parseRawLyrics}
    >continue</button
  >
{/if}
<div class="flex flex-col space-y-1 items-center bg-white/10 text-white">
  <div class="relative bg-violet-500/75 max-h-[90dvh] w-full">
    <ol class="max-h-[90dvh] overflow-scroll relative pb-[10dvh]">
      {#each cSource as block, bi}
        <GeetLine bind:block={cSource[bi]}></GeetLine>
      {/each}
    </ol>
    <div
      class="absolute bg-gradient-to-b from-black/0 to-black/100 w-full h-[10dvh] bottom-0 left-0"
    ></div>
  </div>
</div>
