// Storage module that handles OPFS and Caches
import { useOPFS } from "reold-opfs/opfs";
import opfsWorker from "reold-opfs/opfsWorker?worker";
import { writable, get } from "svelte/store";
import type { TrackT } from "./player.svelte";

// initialize reold-opfs
import.meta.env.DEV ? useOPFS.setDebug(true) : null;
useOPFS.setWorker(new opfsWorker());

const CONFIG_VERSION = 0;

export const opfs = $state({
  root: {} as FileSystemDirectoryHandle,
  app: {} as FileSystemDirectoryHandle,
  config: {} as FileSystemFileHandle,
  configDebounce: 0,
});

enum DownloadStatus {
  NONE,
  PARTIAL,
  COMPLETE,
  ERROR,
}

export let config = writable({
  version: CONFIG_VERSION,
  connections: {
    jiosaavn: {
      active: false,
      data: {
        meta: undefined,
        token: "",
      },
    },
  },

  library: {
    playlists: [],
  },
} as {
  version: number;
  connections: {
    jiosaavn: {
      active: boolean;
      data: {
        meta?: {
          username: string;
          uid: string;
          email: string;
          status: string;
          firstname: string;
          lastname: string;
        };
        token: string;
      };
    };
  };
  library: {
    playlists: {
      id: string;
      title: string;
      description: string;
      tracks: TrackT[];
      download: DownloadStatus;
    }[];
  };
});

export const useStorage = {
  init: async () => {
    opfs.root = await navigator.storage.getDirectory();
    opfs.app = await opfs.root.getDirectoryHandle("reold-app-ammp", {
      create: true,
    });
    opfs.config = await opfs.app.getFileHandle("config.json", {
      create: true,
    });

    const configFile = await opfs.config.getFile();
    let nukeConfigFile = false;

    if (configFile.size > 0) {
      const existingConfig = JSON.parse(await configFile.text());

      if (existingConfig && existingConfig.version < CONFIG_VERSION) {
        console.warn(
          `Configuration version mismatch: Expected ${CONFIG_VERSION}, got ${existingConfig.version}; Proceeding to rewrite`
        );
        nukeConfigFile = true;
      } else {
        // use existing config information
        config.set(JSON.parse(await configFile.text()));
      }
    } else nukeConfigFile = true;

    // create new config information
    if (nukeConfigFile) {
      await useOPFS.write(
        "reold-app-ammp/config.json",
        JSON.stringify(get(config))
      );
    }

    const syncConfig = () => {
      if (Date.now() - opfs.configDebounce < 10) return;

      opfs.configDebounce = Date.now();
      setTimeout(async () => {
        await useOPFS.write(
          "reold-app-ammp/config.json",
          JSON.stringify(get(config))
        );
      }, 10);
    };

    config.subscribe(syncConfig);
  },
};

export const useLibrary = {
  // download: {
  //   playlist: async (playlist: any) => {
  //     const fileHandle = await opfs.app.getFileHandle(
  //       `playlists/${playlist.title}.json`,
  //       { create: true }
  //     );
  //     const writable = await fileHandle.createWritable();
  //     await writable.write(JSON.stringify(playlist));
  //     await writable.close();
  //   },
  //   delete: async (playlist: any) => {},
  // },
  playlist: {
    getAll: () => {
      const playlists = get(config).library.playlists;

      return playlists;
    },

    create: (title: string, description: string = "", tracks: TrackT[]) => {
      const playlists = get(config).library.playlists;
      const newPlaylist = {
        id: crypto.randomUUID(),
        title,
        description,
        tracks,
        download: DownloadStatus.NONE,
      };
      config.update((prev) => ({
        ...prev,
        library: {
          ...prev.library,
          playlists: [...playlists, newPlaylist],
        },
      }));

      return newPlaylist;
    },
    delete: (id: string) => {
      const playlists = get(config).library.playlists;
      config.update((prev) => ({
        ...prev,
        library: {
          ...prev.library,
          playlists: playlists.filter((playlist) => playlist.id !== id),
        },
      }));
    },
    update: (id: string, title: string, description: string = "") => {
      const playlists = get(config).library.playlists;
      config.update((prev) => ({
        ...prev,
        library: {
          ...prev.library,
          playlists: playlists.map((playlist) =>
            playlist.id === id ? { ...playlist, title, description } : playlist
          ),
        },
      }));
    },
    add: (id: string, track: TrackT) => {
      const playlists = get(config).library.playlists;
      config.update((prev) => ({
        ...prev,
        library: {
          ...prev.library,
          playlists: playlists.map((playlist) =>
            playlist.id === id
              ? { ...playlist, tracks: [...playlist.tracks, track] }
              : playlist
          ),
        },
      }));
    },
    remove: (id: string, trackId: string) => {
      const playlists = get(config).library.playlists;
      config.update((prev) => ({
        ...prev,
        library: {
          ...prev.library,
          playlists: playlists.map((playlist) =>
            playlist.id === id
              ? {
                  ...playlist,
                  tracks: playlist.tracks.filter(
                    (track) => track.meta.id !== trackId
                  ),
                }
              : playlist
          ),
        },
      }));
    },
  },
};
