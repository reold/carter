export const host = import.meta.env.DEV
  ? "http://localhost:8000"
  : "https://carter-65v1.onrender.com";
export const api = { rooms: `${host}/room` };

export const roomServices = {
  commonFetch: async (endpoint: string) => {
    let resp = await fetch(`${api.rooms}${endpoint}`);
    let data = await resp.json();

    if (resp.status != 200) throw Error("something went wrong");

    return data;
  },

  createRoom: async (id: string, username: string, roomName: string) => {
    let data = await roomServices.commonFetch(
      `/new?id=${id}&username=${username}&room_name=${roomName}`
    );

    return data;
  },

  joinRoom: async (id: string, roomId: string, username: string) => {
    let data = await roomServices.commonFetch(
      `/join?id=${id}&room_id=${roomId}&username=${username}`
    );
    return data;
  },

  infoRoom: async (roomId: string) => {
    let data = await roomServices.commonFetch(`/info?room_id=${roomId}`);
    return data;
  },

  listenRoom: async (
    id: string,
    onmessage: (ev: MessageEvent) => void,
    onerror: (ev: Event) => void
  ) => {
    const source = new EventSource(`${api.rooms}/listen?id=${id}`);
    source.onmessage = onmessage;
    source.onerror = onerror;
  },

  broadcastRoom: async (id: string, roomId: string, msg: string) => {
    let data = await roomServices.commonFetch(
      `/broadcast?id=${id}&room_id=${roomId}&msg=${msg}`
    );
    return data;
  },
};
