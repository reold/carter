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
