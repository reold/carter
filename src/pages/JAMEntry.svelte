<script lang="ts">
  import { roomServices } from "../services.svelte";
  import Sheet from "../components/Sheet.svelte";
  import { onMount } from "svelte";

  let { visible = $bindable(false), info = { create: true } } = $props();
  let username = $state("");
  let clientId = $derived.by(async () => {
    return await sha256(`${username}-${navigator.userAgent}`);
  });
  let sessionName = $state("");
  let formWarning = $state("");

  onMount(() => {
    if (!info.create) {
      room.id = info.roomId;
      sessionName = "loading room information";
      roomServices.infoRoom(room.id).then((data) => {
        if (data["success"]) sessionName = data["room_name"];
        else {
          formWarning = `error: ${data["fault"]}`;
          sessionName = "room doesn't exist";
        }
      });
    }
  });

  let room = $state({
    connected: false,
    id: "",
    name: "",
    messages: [] as { username: string; content: string }[],
  });

  //   room = {
  //     connected: true,
  //     id: "1234",
  //     name: "Wassup",
  //     messages: [],
  //   };

  let messageContent = $state("");

  async function sha256(source: string) {
    const msgBuffer = new TextEncoder().encode(source); // Encode source as bytes
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer); // Hash the source
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convert to byte array
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""); // Convert bytes to hex
    return hashHex;
  }

  const handleCreate = async () => {
    username = username.trim();
    if (username.length < 4) {
      formWarning = "username must be more than 3 characters in length";
      return;
    }
    if (sessionName.length == 0) {
      sessionName = `${username}'s Music Session`;
    }

    const id = await clientId;
    roomServices
      .createRoom(id, username, sessionName)
      .then((data) => {
        if (data["success"]) {
          room.id = data["room_id"];
          room.name = sessionName;
          room.connected = true;
          roomServices.listenRoom(
            id,
            (e) => {
              const data = JSON.parse(e.data);

              switch (data["type"]) {
                case "msg":
                  room.messages = [
                    ...room.messages,
                    { username: data["username"], content: data["content"] },
                  ];
                  break;
                case "conn":
                  room.messages = [
                    ...room.messages,
                    { username: "server", content: data["info"] },
                  ];
                  break;
                  ``;
              }
            },
            (e) => {
              console.error(e);
            }
          );
        } else {
          formWarning = `error: ${data["fault"]}`;
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleJoin = async () => {
    username = username.trim();
    if (username.length < 4) {
      formWarning = "username must be more than 3 characters in length";
      return;
    }

    const id = await clientId;
    roomServices
      .joinRoom(id, room.id, username)
      .then((data) => {
        if (data["success"]) {
          room.name = data["room_name"];
          room.connected = true;
          roomServices.listenRoom(
            id,
            (e) => {
              const data = JSON.parse(e.data);

              switch (data["type"]) {
                case "msg":
                  room.messages = [
                    ...room.messages,
                    { username: data["username"], content: data["content"] },
                  ];
                  break;
                case "conn":
                  room.messages = [
                    ...room.messages,
                    { username: "server", content: data["info"] },
                  ];
                  break;
                  ``;
              }
            },
            (e) => {
              console.error(e);
            }
          );
        } else {
          formWarning = `error: ${data["fault"]}`;
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleSendMessage = async () => {
    if (messageContent.length == 0) return;

    const msg = messageContent;
    messageContent = "";

    await roomServices.broadcastRoom(await clientId, room.id, msg);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(
      `https://reold.github.io/carter#join${room.id}`
    );
    room.messages = [
      ...room.messages,
      { username: "carter", content: "invite link copied to clipboard" },
    ];
  };
</script>

<Sheet bind:visible>
  {#snippet title()}
    <h1 class="text-white select-none">
      {!info.create ? "Join " : ""}JAM Session<span
        class="bg-yellow-500 text-black rounded-lg p-0.5 text-xs ml-1"
        >beta</span
      >
    </h1>{/snippet}
  {#snippet body()}
    {#if !room.connected}
      <p class="text-zinc-100 text-sm select-none">
        JAM Sessions let you and your friends enjoy music together, no matter
        where you are in the world. <span class=" text-zinc-500">
          Your client ID is unique to your browser. If you switch browsers,
          you'll need to start a new session, as your previous one cannot be
          resumed.
        </span>
      </p>
      <div class="flex flex-col space-y-2 w-[95dvw] mt-[5dvh]">
        <p class="text-red-500 text-xs">
          {formWarning}
        </p>
        <div
          class="text-white flex flex-row items-center bg-white/5 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-[1.2em] ml-2"
          >
            <path
              fill-rule="evenodd"
              d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
              clip-rule="evenodd"
            />
          </svg>

          <input
            type="text"
            name="username"
            id="username"
            bind:value={username}
            placeholder="Username"
            class="bg-transparent ring-0 focus:outline-none w-full py-1 pr-2"
          />
        </div>
        <input
          type="text"
          name="room title"
          id="room title"
          bind:value={sessionName}
          disabled={!info.create}
          placeholder="Session Name, eg: Diya's Party Music"
          class="bg-white/5 ring-0 focus:outline-none rounded-md py-1 px-2 text-white"
        />
        <p
          class="text-zinc-500 flex flex-row items-center space-x-2 h-[2ch] overflow-hidden"
        >
          <span class="text-xs">client-id: </span>
          {#await clientId}
            computing
          {:then userAgentSHA}
            <span
              class="truncate w-[75dvw] inline-block text-xs whitespace-nowrap"
              >{`${userAgentSHA}`}</span
            >
          {/await}
        </p>
        <button
          class="text-white bg-purple-500 rounded-md font-bold select-none"
          onclick={() => {
            if (info.create) {
              handleCreate();
            } else {
              handleJoin();
            }
          }}
          aria-label="{info.create ? 'create' : 'join'} jam session"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-[1em] inline"
          >
            <path
              fill-rule="evenodd"
              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              clip-rule="evenodd"
            />
          </svg>
          {info.create ? "create" : "join"}</button
        >
      </div>
    {:else}
      <div
        class="flex flex-row items-center justify-center bg-white/5 w-full rounded-md overflow-hidden"
      >
        <h1 class="text-xl text-white font-semibold w-[80%] text-center">
          {room.name}
        </h1>

        <button
          aria-label="copy session invite link"
          class="w-[20%] flex flex-col items-center justify-center bg-white/5 py-0 m-0 h-[2em] select-none"
          onclick={() => handleShare()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="text-violet-500 aspect-square py-[5px] inline-block rounded-md"
          >
            <path
              fill-rule="evenodd"
              d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
              clip-rule="evenodd"
            />
          </svg></button
        >
      </div>
      <div
        class="w-[95dvw] h-[80dvh] max-h-[80dvh] overflow-y-scroll overflow-x-hidden text-white ring-1 ring-white/5 my-2 rounded-t-md space-y-[2px]"
      >
        {#each room.messages as msg}
          <div class="bg-white/5 flex flex-row items-center">
            <p
              class="bg-white/10 text-white text-lg font-semibold px-0.5 min-w-[10ch] rounded-r-md inline-block truncate"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-[0.8em] inline"
              >
                <path
                  fill-rule="evenodd"
                  d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              {msg.username}
            </p>
            <p class="inline-block pl-2 max-w-[]">{msg.content}</p>
          </div>
        {/each}
      </div>
      <div
        class="text-white flex flex-row items-center bg-white/5 rounded-md w-[95dvw]"
      >
        <input
          type="text"
          name="message"
          id="message"
          placeholder="send a message"
          bind:value={messageContent}
          class="bg-transparent ring-0 focus:outline-none w-full py-1 pl-2"
          onkeyup={(e: KeyboardEvent) => {
            if (e.key == "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button
          class="p-0 m-0 select-none"
          aria-label="send message"
          onclick={() => handleSendMessage()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-[1.2em] mr-2"
          >
            <path
              d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
            />
          </svg>
        </button>
      </div>
    {/if}
  {/snippet}
</Sheet>
