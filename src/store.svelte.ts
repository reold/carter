import type { DataConnection } from "peerjs";
import type Peer from "peerjs";
import { writable } from "svelte/store";

export enum TabEnum {
  search = "search",
  jam = "jam",
  playlists = "playlists",
  library = "library",
  settings = "settings",
}

interface ViewT {
  sheets: {
    moreActions: boolean;
    selectPlaylist: boolean;
    track: boolean;
    jam: boolean;
  };
  select: {
    track: any;
  };
  tab: TabEnum;
}

export const ViewInfo = writable<ViewT>({
  sheets: {
    moreActions: false,
    selectPlaylist: false,
    track: false,
    jam: false,
  },
  select: {
    track: {},
  },
  tab: TabEnum.search,
});

export const P2PInfo = $state({
  peer: undefined as Peer | undefined,
  initialized: false,
  initiator: false,
  connected: false,
  connections: new Set<DataConnection>(),

  user: {
    name: "",
    id: "",
  },

  room: {
    id: undefined as string | undefined,
    name: "",
    activity: "",
    messages: [] as { username: string; content: string; time?: string }[],
  },
});
