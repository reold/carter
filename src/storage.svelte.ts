// Storage module that handles OPFS and Caches
import { useOPFS } from "reold-opfs/opfs";
import opfsWorker from "reold-opfs/opfsWorker?worker";
import { writable, get } from "svelte/store";
import type { TrackT } from "./player.svelte";

// initialize reold-opfs
useOPFS.setDebug(true);
useOPFS.setWorker(new opfsWorker());

const CONFIG_VERSION = 0;

export const opfs = $state({
  root: {} as FileSystemDirectoryHandle,
  app: {} as FileSystemDirectoryHandle,
  config: {} as FileSystemFileHandle,
});

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
  library: { playlists: any[] };
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

      console.info(existingConfig);
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

    config.subscribe(() => {
      useOPFS.write("reold-app-ammp/config.json", JSON.stringify(get(config)));
    });
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
    create: (
      title: string,
      description: string | null = null,
      tracks: TrackT[]
    ) => {
      const playlists = get(config).library.playlists;
      const newPlaylist = {
        id: crypto.randomUUID(),
        title,
        description,
        tracks,
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
    update: (id: string, title: string, description: string | null = null) => {
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
  },
};
