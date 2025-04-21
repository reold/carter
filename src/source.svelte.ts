import crypto from "node-forge";

import { dataFetch, PROXY_URL } from "./services.svelte";
import type { TrackT } from "./player.svelte";

const enum AudioQuality {
  Q12 = "12kbps",
  Q48 = "48kbps",
  Q96 = "96kbps",
  Q160 = "160kbps",
  Q320 = "320kbps",
}

const BaseSource = {
  host: "" as string,
  headers: {},
  query: async (query: string) => {},
  getDownloadableURL: async (track: {}) => {},
  getStreamURL: async (track: {}) => {},
  helpers: {},
};

// JioSaavn as Source
const JioSaavnSource = Object.create(BaseSource);

JioSaavnSource.host = `${PROXY_URL}${encodeURIComponent(
  "https://www.jiosaavn.com/api.php"
)}`;

JioSaavnSource.headers = {
  Host: "www.saavn.com",
  Accept: "*/*",
  "User-Agent": "Saavn (iPhone)",
  "Accept-Language": "en-IN;q=1.0, ml-IN;q=0.9, hi-IN;q=0.8",
  "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8",
  Connection: "keep-alive",
  Cookie: {
    ssid: "did_v1_79D9162F-4F77-4B42-8D86-5EC214467860.1741341828.67317",
    _pl: "iphoneapp-",
  },
  // "ssid=did_v1_79D9162F-4F77-4B42-8D86-5EC214467860.1741341828.67317; _pl=iphoneapp-",
  // "ssid=did_v1_79D9162F-4F77-4B42-8D86-5EC214467860.1741341828.673173; _pl=iphoneapp-",
};

JioSaavnSource.helpers.decryptURL = (
  encryptedMediaUrl: string
): { quality: string; url: string }[] => {
  if (!encryptedMediaUrl) return [];

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
  return [
    { quality: AudioQuality.Q12, url: decryptedLink.replace("_96", "_12") },
    { quality: AudioQuality.Q48, url: decryptedLink.replace("_96", "_48") },
    { quality: AudioQuality.Q96, url: decryptedLink },
    { quality: AudioQuality.Q160, url: decryptedLink.replace("_96", "_160") },
    { quality: AudioQuality.Q320, url: decryptedLink.replace("_96", "_320") },
  ];
};

JioSaavnSource.helpers.fetchLibrary = async (sessionToken: string) => {
  const authenticatedHeaders = {
    ...JioSaavnSource.headers,
    // Cookie: {
    //   ...JioSaavnSource.headers.Cookie,
    //   I: "KiSvQ51qyvPP3%2BlNFw8bNzBeraxfl%2FsgPYea5FJuOfoiGxtz4HzvNkh7s0XL2KeO0SvzriK%2F%2FvJu%2B0TeJLbnx2HP8fFR6TdJVFXfkt4DLmMaVdwF1r9O9wuHIhZUzcgGa4qKL9e1eQdNNRsyHkFK1oPdf3AV9E17HA12%2BZMnC1bZJNwiQo2%2BoFqg%2F%2FLVlN6MBiukz01eGRqW2uthbZXLufT%2FnIkDeelVQ%2FJHE0m4OVIUtBdqsSazT6rBuLgWLdNaDghnjdsgtRJvqwIj2zQsova0gmeWC79w6ZCoNGlGfjiOZqxOh3zbAp9iDfXQRTsxAecoxBsHPEoMJUQBoZ1PKA%3D%3D",
    //   network: "google",
    //   BH: "BEOD17852H0008%3A1743643586",
    //   did: "did_v1_79D9162F-4F77-4B42-8D86-5EC214467860",
    //   CH: "G03%2CA07%2CO00%2CL03",
    //   B: "dd4caaf111e74cc6c121bd5f81c9905c",
    //   CT: "MTk3MDYzODc0NQ==",
    // },
    Cookie: `ssid=did_v1_79D9162F-4F77-4B42-8D86-5EC214467860.1741341828.673173; _pl=iphoneapp-; I=${decodeURIComponent(
      "SLCIdaC3Pwa5slQDrYdXuNljlkFgcTbQMkQY5netgFwiGxtz4HzvNkh7s0XL2KeO0SvzriK//vJu+0TeJLbnx2HP8fFR6TdJVFXfkt4DLmMaVdwF1r9O9wuHIhZUzcgGa4qKL9e1eQdNNRsyHkFK1oPdf3AV9E17HA12+ZMnC1bZJNwiQo2+oMowyPQv80EwNAhd7qIZkKCW2uthbZXLufT/nIkDeelVQ/JHE0m4OVIUtBdqsSazT6rBuLgWLdNaDghnjdsgtRJvqwIj2zQsova0gmeWC79w6ZCoNGlGfjiOZqxOh3zbAp9iDfXQRTsxn181HjE4AvH9HuuKZlFwCQ=="
    )};`,
    "User-Agent": "Saavn/9.16.1 (iPhone; iOS 18.4; Scale/3.00)",
    // Cookie: `I=${encodeURIComponent(sessionToken)};`,
  };

  // console.info("sending with headers", authenticatedHeaders);

  let data = await dataFetch(
    `${PROXY_URL}${encodeURIComponent(
      `https://wwww.saavn.com/api.php?_marker=false&_format=json&api_version=4&cc=91&__call=library.getAll&move_artist_pref=true`
    )}`,
    JSON.stringify({ headers: authenticatedHeaders, method: "GET" })
  );

  return data;
};

JioSaavnSource.helpers.toTrackT = async (
  track
): Promise<TrackT | undefined> => {
  const mediaURLs = await JioSaavnSource.getDownloadableURLs(track);

  if (mediaURLs.length == 0) {
    console.error("no media url found for track");
    return;
  }

  const highestQURL = mediaURLs.at(-1)?.url;
  return {
    meta: {
      id: track.id,
      title: track.title,
      img: track.image.replace("http://", "https://"),
      artist: track.more_info.artistMap.primary_artists[0].name || "",
      album: track.more_info.album || "",
    },
    url: highestQURL,
  };
};

JioSaavnSource.query = async (query: string) => {
  let data = await dataFetch(
    `${JioSaavnSource.host}${encodeURIComponent(
      `?p=1&q=${query}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=30&__call=search.getResults`
    )}`,
    JSON.stringify({ headers: JioSaavnSource.headers, method: "GET" })
  );

  return data;
};

JioSaavnSource.getDownloadableURLs = async (
  track: any
): Promise<{ quality: string; url: string }[]> => {
  const mediaURLs = JioSaavnSource.helpers.decryptURL(
    track.more_info.encrypted_media_url
  );

  return mediaURLs;
};

export { JioSaavnSource };
