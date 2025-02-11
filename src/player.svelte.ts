import crypto from "node-forge";

interface MetaT {
  id: string;
  title: string;
  img: string;
  artist: string;
  lyrics?: {
    type: "plain" | "synced";
    content: { time: number; text: string }[];
    id: number;
  };
}

const PlayerInfo = $state({
  queue: [] as { url: string; meta: MetaT }[],
  qi: 0,
  playing: false,
  fetch: 50,
  t: 0,
  audioElm: new Audio(),
  meta: {
    id: "",
    title: "Nothing playing",
    img: "",
    artist: "",
    lyrics: {
      type: "plain",
      content: [],
      id: 0,
    },
  } as MetaT,
});

export const usePlayer = {
  get info() {
    return PlayerInfo;
  },

  playback: {
    play: async (meta: MetaT, url: string) => {
      url = url.replace("http://", "https://");

      const resp = await fetch(url);
      const respBody = resp.body;
      const respChunks = [];
      const respLength = parseInt(resp.headers.get("Content-Length") || "0");
      let fetchedLength = 0;

      if (!respBody) {
        console.error("fetch response: song body is null");
        return;
      }

      for await (const chunk of respBody) {
        fetchedLength += chunk.byteLength;

        PlayerInfo.fetch = (fetchedLength / respLength) * 100;
        respChunks.push(chunk);
      }

      const blob = new Blob(respChunks);
      const blobUrl = URL.createObjectURL(blob);

      PlayerInfo.audioElm.pause();
      PlayerInfo.audioElm.src = blobUrl;
      PlayerInfo.audioElm.controls = true;

      PlayerInfo.audioElm.play();
      PlayerInfo.audioElm.currentTime = 0;
      PlayerInfo.audioElm.ontimeupdate = (e) => {
        PlayerInfo.t = PlayerInfo.audioElm.currentTime;
      };
      usePlayer.info.playing = true;

      PlayerInfo.meta = { ...PlayerInfo.meta, ...meta };
      usePlayer.playback.loadLyrics();
    },
    appendQueue: async (
      meta: { id: string; title: string; img: string; artist: string },
      url: string
    ) => {
      url = url.replace("http://", "https://");
      PlayerInfo.queue = [
        ...PlayerInfo.queue,
        {
          url,
          meta,
        },
      ];
    },
    loadLyrics: () => {
      fetch(`https://lrclib.net/api/search?track_name=${PlayerInfo.meta.title}`)
        .then((res) => res.json())
        .then((data) => {
          const syncedResults = data.filter(
            (item: { syncedLyrics: string | null }) => {
              return item["syncedLyrics"];
            }
          );
          if (syncedResults.length > 0) {
            let result = syncedResults[0];
            result["syncedLyrics"] = result["syncedLyrics"]
              .split("\n")
              .map((line: string) => {
                const match = /^\[(\d{2}):(\d{2}\.\d{2})\]\s*(.*)$/.exec(line);
                if (match) {
                  const minutes = parseInt(match[1]);
                  const seconds = parseFloat(match[2]);
                  const timeInSeconds = minutes * 60 + seconds;
                  const text = match[3];
                  return { time: timeInSeconds, text };
                }
              });
            PlayerInfo.meta.lyrics = {
              type: "synced",
              content: result["syncedLyrics"],
              id: result["id"],
            };
          } else {
            console.error("no synced lyrics found");
          }
        });
    },
    pause: () => {
      PlayerInfo.audioElm.pause();
      usePlayer.info.playing = false;
    },
    resume: () => {
      PlayerInfo.audioElm.play();
      usePlayer.info.playing = true;
    },
  },

  helpers: {
    decryptURL: (encryptedMediaUrl: string) => {
      if (!encryptedMediaUrl) return [];

      const qualities = [
        { id: "_12", bitrate: "12kbps" },
        { id: "_48", bitrate: "48kbps" },
        { id: "_96", bitrate: "96kbps" },
        { id: "_160", bitrate: "160kbps" },
        { id: "_320", bitrate: "320kbps" },
      ];

      const key = "38346591";
      const iv = "00000000";

      const encrypted = crypto.util.decode64(encryptedMediaUrl);
      const decipher = crypto.cipher.createDecipher(
        "DES-ECB",
        crypto.util.createBuffer(key)
      );
      decipher.start({ iv: crypto.util.createBuffer(iv) });
      decipher.update(crypto.util.createBuffer(encrypted));
      decipher.finish();
      const decryptedLink = decipher.output.getBytes();

      return qualities.map((quality) => ({
        quality: quality.bitrate,
        url: decryptedLink.replace("_96", quality.id),
      }));
    },
  },
};
