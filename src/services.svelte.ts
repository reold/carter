export const dataFetch = async (
  endpoint: string,
  body: BodyInit | null = null
) => {
  let resp = await fetch(
    endpoint,
    body ? { body, method: "POST" } : { method: "GET" }
  );
  let data = await resp.json();

  if (resp.status != 200) throw Error("something went wrong");

  return data;
};

export const helpers = {
  cookieExtractor: (cookieHeader: string, cookie: string): string | null => {
    if (!cookieHeader) return null;

    // Handle multiple cookies with same name
    const cookies = cookieHeader.split(/,(?=\s*\w+=)/);

    const target = cookies
      .reverse() // Get last occurrence
      .find((c) => c.trim().startsWith(`${cookie}=`));

    return target?.split(";")[0]?.split("=")[1]?.trim() || null;
  },
};

export const masterServices = {
  proxy:
    (import.meta.env.DEV
      ? "http://localhost:3000/"
      : // "https://vercel-cors-anywhere-6k64bb3kj-reolds-projects.vercel.app/"
        //"https://vercel-cors-anywhere-k6txcvnye-reolds-projects.vercel.app/"
        "https://vercel-cors-anywhere-one.vercel.app/") + "api?url=",
  host: "",
  headers: {
    Host: "www.saavn.com",
    Accept: "*/*",
    "User-Agent": "Saavn (iPhone)",
    "Accept-Language": "en-IN;q=1.0, ml-IN;q=0.9, hi-IN;q=0.8",
    "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8",
    Connection: "keep-alive",
    Cookie:
      "ssid=did_v1_79D9162F-4F77-4B42-8D86-5EC214467860.1741341828.67317; _pl=iphoneapp-",
    // "ssid=did_v1_79D9162F-4F77-4B42-8D86-5EC214467860.1741341828.673173; _pl=iphoneapp-",
  },

  search: {
    songs: async (query: string) => {
      let data = await dataFetch(
        `${masterServices.host}${encodeURIComponent(
          `?p=1&q=${query}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=30&__call=search.getResults`
        )}`,
        JSON.stringify({ headers: masterServices.headers, method: "GET" })
      );

      return data;
    },
  },

  auth: {
    validateEmail: async (email: string) => {
      let data = await dataFetch(
        `${masterServices.host}${encodeURIComponent(
          `?_format=json&ctx=iphoneapp&api_version=4&__call=user.isRegisteredEmail&email=${email}`
        )}`,
        JSON.stringify({ headers: masterServices.headers, method: "GET" })
      );

      return data.status;
    },
    requestOTP: async (email: string, password: string) => {
      let data = await dataFetch(
        `${masterServices.host}${encodeURIComponent(
          `?app_version=9.16.1&v=1003&device_type=iPhone_15&_marker=false&_format=json&ctx=iphoneapp&api_version=4&dolby_support=true&is_jio_user=false&r_device=false&network_type=WIFI&network_subtype=wifi&cc=91&__call=user.login`
        )}`,

        JSON.stringify({
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            ...masterServices.headers,
          },
          method: "POST",
          body: new URLSearchParams({
            username: email,
            password: password,
            user_exist: "True",
          }).toString(),
        })
      );

      return data.status && data.status == "success";
    },
    validateOTP: async (email: string, otp: string) => {
      let resp = await fetch(
        `${masterServices.host}${encodeURIComponent(
          `?app_version=9.16.1&v=1003&device_type=iPhone_15&_marker=false&_format=json&ctx=iphoneapp&api_version=4&dolby_support=true&is_jio_user=false&r_device=false&network_type=WIFI&network_subtype=wifi&cc=91&__call=user.validateOTP`
        )}`,
        {
          method: "POST",
          body: JSON.stringify({
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              ...masterServices.headers,
            },
            method: "POST",
            body: new URLSearchParams({
              username: email,
              otp: otp,
            }).toString(),
          }),
        }
      );

      let data = await resp.json();
      let sessionToken = helpers.cookieExtractor(
        resp.headers.get("x-sscookies") as string,
        "I"
      );

      // let data2 = await dataFetch(
      //   `${masterServices.host}${encodeURIComponent(
      //     `?app_version=9.16.1&v=1003&device_type=iPhone_15&_marker=false&_format=json&ctx=iphoneapp&api_version=4&dolby_support=true&is_jio_user=false&r_device=false&network_type=WIFI&network_subtype=wifi&cc=91&__call=user.validateOTP`
      //   )}`,

      //   JSON.stringify({
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded",
      //       ...masterServices.headers,
      //     },
      //     method: "POST",
      //     body: new URLSearchParams({
      //       username: email,
      //       otp: otp,
      //     }).toString(),
      //   })
      // );

      return {
        ...data,
        sessionToken: sessionToken ? decodeURIComponent(sessionToken) : null,
      };
    },
  },
};

masterServices.host = `${masterServices.proxy}${encodeURIComponent(
  "https://www.jiosaavn.com/api.php"
)}`;

const _roomServices = {
  host: import.meta.env.DEV
    ? "http://localhost:8000"
    : "https://carter-65v1.onrender.com",
  api: { room: "" },

  createRoom: async (id: string, username: string, roomName: string) => {
    let data = await dataFetch(
      `${_roomServices.api.room}/new?id=${id}&username=${username}&room_name=${roomName}`
    );

    return data;
  },

  joinRoom: async (id: string, roomId: string, username: string) => {
    let data = await dataFetch(
      `${_roomServices.api.room}/join?id=${id}&room_id=${roomId}&username=${username}`
    );
    return data;
  },

  infoRoom: async (roomId: string) => {
    let data = await dataFetch(
      `${_roomServices.api.room}/info?room_id=${roomId}`
    );
    return data;
  },

  listenRoom: async (
    id: string,
    onmessage: (ev: MessageEvent) => void,
    onerror: (ev: Event) => void
  ) => {
    const source = new EventSource(`${_roomServices.api.room}/listen?id=${id}`);
    source.onmessage = onmessage;
    source.onerror = onerror;
  },

  broadcastRoom: async (id: string, roomId: string, msg: string) => {
    let data = await dataFetch(
      `${_roomServices.api.room}/broadcast?id=${id}&room_id=${roomId}&msg=${msg}`
    );
    return data;
  },
};

_roomServices.api.room = `${_roomServices.host}/room`;

export type RoomServices = typeof _roomServices;
export const roomServices: RoomServices = _roomServices;
