import{j as Oe,k as Ye,l as Xe,m as Fe,n as Qe,o as We,d as Ne,q as Ze,p as ke,i as J,s as o,c as i,h as e,g as q,r as re,u as P,a as f,v as ze,b,t as _,e as z,w as Ge,x as me,y as Re,z as Ke,A as et,f as ye,B as $,C as tt,D as at,E as rt,F as je,G as st,$ as it,H as ot,I as De,J as nt,K as lt,L as Ie}from"./index-Ctp0eYd6.js";import{i as Z}from"./if-BfNyryUN.js";import{e as Be,i as Ve,g as ct,f as dt}from"./ssh-oCeLAnmO.js";import{h as ut}from"./svelte-head-Dtwm1Zmz.js";import{s as ve,h as mt,S as Je}from"./Sheet-BcFvMIC_.js";import{b as Ce}from"./input-CKsvqtC7.js";import{r as xe,b as vt,m as ht}from"./services.svelte-CbZ9fTbk.js";function he(c,a,h,m,v){var A=c,g="",u;Oe(()=>{g!==(g=a()??"")&&(u!==void 0&&(We(u),u=void 0),g!==""&&(u=Ye(()=>{var d=g+"",w=Xe(d);Fe(Qe(w),w.lastChild),A.before(w)})))})}function pt(c){return c<.5?4*c*c*c:.5*Math.pow(2*c-2,3)+1}var ft=(c,a,h)=>{a.held=!0,a.originX=c.touches[0].clientX,b(h,!0)},bt=(c,a,h)=>{a.held&&(c.touches[0].clientX-a.originX<-50?b(h,!0):b(h,!1))},gt=(c,a,h)=>{a.held=!1,b(h,!1)},wt=(c,a,h)=>{a()||h.onPlay()},xt=(c,a)=>{window.open(a.song.perma_url)},_t=_('<div class="flex items-center text-black dark:text-white min-h-[7dvh] w-[40%] space-x-2"><button class="bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full" aria-label="add song to queue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[1.2em]"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd"></path></svg></button> <button class="bg-black/5 dark:bg-white/5 text-blue-600 dark:text-blue-500 rounded-full" aria-label="visit source link"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg></button></div>'),yt=_('<div><button><img alt="cover art" class="max-h-[7dvh]" loading="lazy"></button> <div class="flex flex-col overflow-x-hidden -space-y-1 justify-center w-full"><h2><!></h2> <span class="font-base text-[0.7em] text-black/80 dark:text-white/80 pl-2 truncate max-w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[0.7em] inline"><path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"></path></svg> <!></span></div> <!></div>');function kt(c,a){Ze(a,!0);const h=ke(a,"playing",3,!1);let m=J({held:!1,originX:0}),v=z(!1),A=z(!1);var g=yt();g.__touchstart=[ft,m,v],g.__touchmove=[bt,m,A],g.__touchend=[gt,m,v];var u=i(g);u.__click=[wt,h,a];var d=i(u),w=o(u,2),n=i(w),L=i(n);he(L,()=>a.song.title);var pe=o(n,2),y=o(i(pe),2);he(y,()=>a.song.subtitle);var I=o(w,2);{var W=H=>{var j=_t(),p=i(j);p.__click=function(...B){var R;(R=a.onAddToQueue)==null||R.apply(this,B)};var M=o(p,2);M.__click=[xt,a],P(3,j,()=>Ge,()=>({axis:"x",duration:100,easing:pt})),f(H,j)};Z(I,H=>{e(A)&&H(W)})}q(()=>{re(g,`w-full h-[10dvh] pl-2 min-h-[7dvh] ring-zinc-500 text-black dark:text-white overflow-hidden flex flex-row space-x-2 border-b-[1px] border-black/5 dark:border-white/5 py-2 select-none transition-colors duration-100 ${(e(v)?"bg-black/5 dark:bg-white/5":"bg-transparent")??""}`),re(u,`p-0 m-0 max-w-[20%] my-auto transition-transform duration-200 rounded-[0.5em] overflow-hidden ${(e(v)?"scale-105":"")??""}`),ve(d,"src",a.song.image),re(n,`font-medium text-base max-w-full truncate ${(h()?"text-violet-600 dark:text-violet-500":"")??""}`)}),mt(d),P(3,g,()=>me,()=>({duration:500})),f(c,g),ze()}Ne(["touchstart","touchmove","touchend","click"]);var At=_('<h1 class="text-white select-none"> <span class="bg-yellow-500 text-black rounded-lg p-0.5 text-xs ml-1">beta</span></h1>'),Lt=_('<span class="truncate w-[75dvw] inline-block text-xs whitespace-nowrap"> </span>'),St=(c,a,h,m)=>{a().create?h():m()},Ct=_(`<p class="text-zinc-100 text-sm select-none">JAM Sessions let you and your friends enjoy music together, no matter
        where you are in the world. <span class=" text-zinc-500">Your client ID is unique to your browser. If you switch browsers,
          you'll need to start a new session, as your previous one cannot be
          resumed.</span></p> <div class="flex flex-col space-y-2 w-[95dvw] mt-[5dvh]"><p class="text-red-500 text-xs"> </p> <div class="text-white flex flex-row items-center bg-white/5 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-[1.2em] ml-2"><path fill-rule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clip-rule="evenodd"></path></svg> <input type="text" name="username" id="username" placeholder="Username" class="bg-transparent ring-0 focus:outline-none w-full py-1 pr-2"></div> <input type="text" name="room title" id="room title" placeholder="Session Name, e.g., Varun's Party Music" class="bg-white/5 ring-0 focus:outline-none rounded-md py-1 px-2 text-white"> <p class="text-zinc-500 flex flex-row items-center space-x-2 h-[2ch] overflow-hidden"><span class="text-xs">client-id:</span> <!></p> <button class="text-white bg-purple-500 rounded-md font-bold select-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-[1em] inline"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path></svg> </button></div>`,1),Mt=(c,a)=>a(),Et=_('<p class="text-xs ml-auto"> </p>'),Tt=_('<div><p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-[0.8em] inline -mr-1"><path fill-rule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clip-rule="evenodd"></path></svg> </p> <p class="px-2 text-white -mt-[0.2em] text-base"> </p> <!></div>'),qt=(c,a)=>{c.key=="Enter"&&a()},$t=(c,a)=>a(),It=_('<div class="w-[95dvw] h-[80dvh] max-h-[80dvh] overflow-y-scroll overflow-x-hidden text-white ring-1 ring-white/5 my-2 rounded-t-md"><div class="sticky top-0 flex flex-row border-b-[0px] bg-gradient-to-b from-zinc-900 to-zinc-900/50 border-zinc-500/25 w-[95dvw] h-[5dvh]"><h1 class="text-xl text-white font-semibold w-[80%] text-center place-content-center"> </h1> <button aria-label="copy session invite link" class="w-[20%] flex flex-col items-center justify-center rounded-md overflow-hidden p-0 m-0 max-h-[3em] select-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-violet-500 aspect-square p-[0.1em] h-[2em] inline-block"><path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd"></path></svg></button></div> <!></div> <div class="text-white flex flex-row items-center bg-white/5 rounded-md w-[95dvw]"><input type="text" name="message" id="message" placeholder="send a message" class="bg-transparent ring-0 focus:outline-none w-full py-1 pl-2"> <button class="p-0 m-0 select-none" aria-label="send message"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-[1.2em] mr-2"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"></path></svg></button></div>',1);function jt(c,a){Ze(a,!0);let h=ke(a,"visible",15,!1),m=ke(a,"info",19,()=>({create:!0})),v=z(""),A=z(""),g=je(async()=>await pe(`${e(v)}-${navigator.userAgent}`)),u=z(""),d=z(""),w=z(void 0);Re(()=>{m().create||(n.id=m().roomId,b(u,"loading room information"),xe.infoRoom(n.id).then(p=>{p.success?b(u,J(p.room_name)):(b(d,`error: ${p.fault}`),b(u,"room doesn't exist"))}))});let n=J({connected:!1,activity:"",id:"",name:"",messages:[]});Ke(()=>{n.messages,e(w)&&e(w).scrollTo({top:e(w).scrollHeight||0,behavior:"smooth"})});let L=z("");async function pe(p){const M=new TextEncoder().encode(p),B=await crypto.subtle.digest("SHA-256",M);return Array.from(new Uint8Array(B)).map(fe=>fe.toString(16).padStart(2,"0")).join("")}const y=()=>{xe.listenRoom(e(A),p=>{const M=JSON.parse(p.data);switch(M.type){case"msg":n.messages=[...n.messages,{username:M.username,content:M.content,time:M.time}],n.activity=`(${M.activity.filter(B=>B.active==!0).length}/${M.activity.length})`;break;case"conn":n.messages=[...n.messages,{username:"server",content:M.info,time:String(Date.now()/1e3)}];break}},p=>{n.messages=[...n.messages,{username:"server",content:"connection lost, retrying (browser-initiated)",time:String(Date.now()/1e3)}],console.error(p)})},I=async()=>{if(b(v,J(e(v).trim())),e(v).length<4){b(d,"username must be more than 3 characters in length");return}e(u).length==0&&b(u,`${e(v)}'s Music Session`),b(A,J(await e(g))),xe.createRoom(e(A),e(v),e(u)).then(p=>{p.success?(n.id=p.room_id,n.name=e(u),n.connected=!0,y()):b(d,`error: ${p.fault}`)}).catch(p=>{n.messages=[...n.messages,{username:"server",content:"unable to create room",time:String(Date.now()/1e3)}],console.error(p)})},W=async()=>{if(b(v,J(e(v).trim())),e(v).length<4){b(d,"username must be more than 3 characters in length");return}b(A,J(await e(g))),xe.joinRoom(e(A),n.id,e(v)).then(p=>{p.success?(n.name=p.room_name,n.connected=!0,y()):b(d,`error: ${p.fault}`)}).catch(p=>{n.messages=[...n.messages,{username:"server",content:"unable to join room",time:String(Date.now()/1e3)}],console.error(p)})},H=async()=>{if(e(L).length==0)return;const p=e(L);b(L,""),await xe.broadcastRoom(await e(g),n.id,p)},j=()=>{navigator.clipboard.writeText(`${window.location.host+window.location.pathname}#join${n.id}`),n.messages=[...n.messages,{username:"carter",content:"invite link copied to clipboard",time:String(Date.now()/1e3)}]};Je(c,{get visible(){return h()},set visible(B){h(B)},title:B=>{var R=At(),U=i(R);q(()=>$(U,`${(m().create?"":"Join ")??""}JAM Session`)),f(B,R)},body:B=>{var R=et(),U=ye(R);{var fe=G=>{var O=Ct(),se=o(ye(O),2),Y=i(se),ie=i(Y),ce=o(Y,2),be=o(i(ce),2),K=o(ce,2),de=o(K,2),oe=o(i(de),2);tt(oe,()=>e(g),S=>{var te=rt("computing");f(S,te)},(S,te)=>{var F=Lt(),ne=i(F,!0);at(F),q(()=>$(ne,`${e(te)}`)),f(S,F)});var ee=o(de,2);ee.__click=[St,m,I,W];var X=o(i(ee));q(()=>{$(ie,e(d)),K.disabled=!m().create,ve(ee,"aria-label",`${(m().create?"create":"join")??""} jam session`),$(X,` ${(m().create?"create":"join")??""}`)}),Ce(be,()=>e(v),S=>b(v,S)),Ce(K,()=>e(u),S=>b(u,S)),f(G,O)},Me=G=>{var O=It(),se=ye(O),Y=i(se),ie=i(Y),ce=i(ie),be=o(ie,2);be.__click=[Mt,j];var K=o(Y,2);Be(K,17,()=>n.messages,Ve,(X,S,te)=>{var F=Tt(),ne=i(F);const Ee=je(()=>`${(["server","carter"].includes(e(S).username)?"text-red-400":"text-purple-400")??""} text-lg font-medium px-0.5 rounded-r-md inline-block max-w-[95%] truncate`);var Ae=o(i(ne)),ge=o(ne,2),Le=i(ge),Te=o(ge,2);{var r=s=>{var x=Et(),C=i(x);q(()=>$(C,new Date(Number(e(S).time)*1e3).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit",hour12:!0}))),f(s,x)};Z(Te,s=>{e(S).time&&s(r)})}q(()=>{re(F,`${(e(S).username==e(v)?"ml-auto rounded-br-none mr-1":"rounded-bl-none ml-1")??""} ${(te-1!==-1&&n.messages[te-1].username===e(S).username?"mt-[0.25em]":"mt-[0.5em]")??""} rounded-lg p-1 bg-white/5 flex flex-col items-start justify-center w-fit min-w-[20dvw] max-w-[80dvw]`),re(ne,e(Ee)),$(Ae,` ${e(S).username??""}`),$(Le,e(S).content)}),f(X,F)}),vt(se,X=>b(w,X),()=>e(w));var de=o(se,2),oe=i(de);oe.__keyup=[qt,H];var ee=o(oe,2);ee.__click=[$t,H],q(()=>$(ce,`${n.activity??""}
            ${n.name??""}`)),Ce(oe,()=>e(L),X=>b(L,X)),f(G,O)};Z(U,G=>{n.connected?G(Me,!1):G(fe)})}f(B,R)},$$slots:{title:!0,body:!0}}),ze()}Ne(["click","keyup"]);var Bt=dt;const _e=ct(Bt),t=J({init:!1,queue:[],qi:0,playing:!1,fetch:0,t:0,dur:0,audioElm:new Audio,meta:{id:"",title:"Nothing playing",img:"",artist:"",album:"",lyrics:{type:"plain",content:[],id:0}}}),l={get info(){return t},meta:{init:()=>{"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",()=>{l.playback.resume()}),navigator.mediaSession.setActionHandler("pause",()=>{l.playback.pause()}),navigator.mediaSession.setActionHandler("seekbackward",()=>{t.audioElm.currentTime-=10}),navigator.mediaSession.setActionHandler("seekforward",()=>{t.audioElm.currentTime+=10}),navigator.mediaSession.setActionHandler("previoustrack",l.playback.previous),navigator.mediaSession.setActionHandler("nexttrack",l.playback.next),navigator.mediaSession.setActionHandler("stop",()=>{t.audioElm.pause(),l.info.playing=!1}))},sync:()=>{"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.meta.title,artist:t.meta.artist,album:t.meta.album,artwork:[{src:t.meta.img,sizes:"150x150",type:"image/png"}]}))}},playback:{play:async(c,a)=>{t.init===!1&&(t.init=!0,l.meta.init()),t.queue=[...t.queue,{url:a,meta:c}],t.qi=t.queue.length-1,a=a.replace("http://","https://"),t.meta={...t.meta,...c},t.audioElm.load(),t.audioElm.pause(),t.audioElm.src=a,t.audioElm.controls=!0,t.fetch=0,t.dur=0,t.t=0,t.audioElm.onloadedmetadata=()=>{t.dur=t.audioElm.duration,l.playback.loadLyrics()},t.audioElm.play().catch(h=>console.error("Playback failed:",h)),t.audioElm.currentTime=0,t.audioElm.ontimeupdate=()=>{t.t=t.audioElm.currentTime},t.audioElm.onprogress=()=>{const h=t.audioElm.buffered,m=t.audioElm.duration;if(h.length>0&&m>0){const v=h.end(h.length-1);t.fetch=v/m*100}},t.audioElm.onended=()=>{l.playback.next()},l.info.playing=!0,l.meta.sync()},appendQueue:async(c,a)=>{a=a.replace("http://","https://"),t.queue=[...t.queue,{url:a,meta:c}]},loadLyrics:()=>{const c=t.meta.title?t.meta.title.trim().toLowerCase():"",a=t.meta.album?t.meta.album.trim().toLowerCase():"",h=t.meta.artist?t.meta.artist.trim().toLowerCase():"";fetch(`https://lrclib.net/api/search?track_name=${encodeURIComponent(t.meta.title)}`).then(m=>m.json()).then(m=>{if(!Array.isArray(m)||m.length===0){console.warn("No lyrics found.");return}const v=m.filter(d=>d.syncedLyrics&&d.syncedLyrics.trim()!=="");if(v.length===0){console.warn("No candidates with synced lyrics found.");return}const A=v.filter(d=>{const w=(d.title||d.name||d.trackName||"").trim().toLowerCase(),n=(d.album||d.albumName||"").trim().toLowerCase();let L="";return d.artist?L=d.artist.trim().toLowerCase():d.artistName?L=d.artistName.trim().toLowerCase():d.artistMap&&d.artistMap.primary_artists&&d.artistMap.primary_artists.length&&(L=d.artistMap.primary_artists[0].name.trim().toLowerCase()),w===c&&n===a&&L===h});let g;A.length>0?g=A.reduce((d,w)=>Math.abs(w.duration-t.dur)<Math.abs(d.duration-t.dur)?w:d):g=v.map(y=>{let I=Math.abs(y.duration-t.dur)*1;const W=(y.title||y.name||y.trackName||"").trim().toLowerCase(),H=(y.album||y.albumName||"").trim().toLowerCase();let j="";return y.artist?j=y.artist.trim().toLowerCase():y.artistName?j=y.artistName.trim().toLowerCase():y.artistMap&&y.artistMap.primary_artists&&y.artistMap.primary_artists.length&&(j=y.artistMap.primary_artists[0].name.trim().toLowerCase()),a&&H!==a&&(I+=20),h&&j!==h&&(I+=20),c&&W!==c&&(I+=20),{candidate:y,score:I}}).reduce((y,I)=>I.score<y.score?I:y).candidate;const u=g.syncedLyrics.split(`
`).map(d=>{const w=/^\[(\d{2}):(\d{2}\.\d{2})\]\s*(.*)$/.exec(d);if(w){const n=parseInt(w[1],10),L=parseFloat(w[2]);return{time:n*60+L,text:w[3]}}return{time:0,text:d}}).filter(d=>d.text&&d.text.trim()!=="");t.meta.lyrics={type:"synced",content:u,id:g.id}}).catch(m=>console.error("Lyrics fetch failed:",m))},pause:()=>{t.audioElm.pause(),l.info.playing=!1},resume:()=>{t.audioElm.play().catch(c=>console.error("Resume failed:",c)),l.info.playing=!0},next:()=>{t.qi<t.queue.length-1&&(t.qi++,l.playback.play(t.queue[t.qi].meta,t.queue[t.qi].url))},previous:()=>{t.qi>0&&(t.qi--,l.playback.play(t.queue[t.qi].meta,t.queue[t.qi].url))}},helpers:{decryptURL:c=>{if(!c)return[];const a="38346591",h="00000000",m=_e.util.decode64(c),v=_e.cipher.createDecipher("DES-ECB",_e.util.createBuffer(a));v.start({iv:_e.util.createBuffer(h)}),v.update(_e.util.createBuffer(m)),v.finish();const A=v.output.getBytes();return[{quality:"12kbps",url:A.replace("_96","_12")},{quality:"48kbps",url:A.replace("_96","_48")},{quality:"96kbps",url:A},{quality:"160kbps",url:A.replace("_96","_160")},{quality:"320kbps",url:A.replace("_96","_320")}]}}};var Nt=_('<meta property="theme-color" content="#000">'),Zt=(c,a)=>b(a,""),zt=_('<button class="p-0 m-0 h-[75%] max-w-[5%] bg-transparent" aria-label="clear search text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-[1.3em] text-zinc-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd"></path></svg></button>'),Ht=_('<span class="animate-pulse">Loading(proxy -> server).</span>'),Rt=_('<span class="text-[8px] text-black/80 dark:text-white/80"> </span>'),Dt=_(" <!>",1),Vt=_('<h2 class="text-black dark:text-white font-medium w-[100dvw] text-[9px] font-mono mt-2 px-2 select-none"><!> <span class="text-[8px] text-black/80 dark:text-white/80 bg-black/5 dark:bg-white/5 p-0.5 rounded-sm">Powered by JioSaavn</span></h2> <!>',1),Jt=_("<span>Carter is connected with <b> </b> </span>"),Pt=_('<div class="px-2"><h1 class="text-black dark:text-white font-semibold text-center mt-[1em] mb-2 text-xl border-b-[1px] border-black/10 dark:border-white/10">🎶 Search for Music!</h1> <p class="text-black/80 dark:text-white/80 text-sm">Find for your favorite songs, playlists, artists and more! <!></p></div>'),Ut=_('<div class="h-full bg-black/20 dark:bg-white/20 absolute"></div>'),Ot=_('<img alt="song thumbnail" id="player-thumbnail" class="h-[6dvh] aspect-square rounded-md col-span-2 text-xs" style="view-transition-name: player-thumbnail;">'),Yt=(c,a)=>{document.startViewTransition?document.startViewTransition(()=>b(a,!0)):b(a,!0)},Xt=_('<button class="p-0 m-0 col-span-8 pl-2"><p class="font-medium text-md text-left truncate" style="view-transition-name: player-title;"><!> <span class="font-normal text-sm text-black/80 dark:text-white/80 block" style="view-transition-name: player-artist"><!></span></p></button>'),Ft=De('<path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd"></path>'),Qt=De('<path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd"></path>'),Wt=_('<h1 class="text-black dark:text-white truncate max-w-[80%]" style="view-transition-name: player-title;"><!></h1>'),Gt=_('<li><button class="m-0 p-0 text-left text-current"> </button></li>'),Kt=_(`<li class="dark:text-white/50 text-black/80">Currently not available. You can help add/improve lyrics
                  through <a class="dark:text-blue-400 text-blue-600 after:content-['_↗']" href="https://lrclib.net/" target="_blank">LRCLIB</a></li>`),ea=_('<div class="bg-black/5 dark:bg-white/5 text-black dark:text-white w-[95dvw] h-fit p-2 rounded-t-md overflow-hidden"><h3 class="text-xl">Lyrics <span class="text-[8px] text-black/80 dark:text-white/80 bg-black/5 dark:bg-white/5 p-0.5 rounded-sm">Powered by LRCLIB</span></h3> <ul class="max-h-full px-2 text-md space-y-2"></ul></div>'),ta=_('<div class="overflow-y-scroll"><div class="flex flex-col items-center justify-center"><img alt="song thumbnail" class="w-[50dvw] rounded-md shadow-white dark:shadow-black shadow-xl" style="view-transition-name: player-thumbnail;"> <p class="text-black dark:text-white mt-[5dvh]" style="view-transition-name: player-artist">by <b><!></b></p> <p class="text-black/50 dark:text-white/50 italic"> </p></div> <!></div>'),aa=_('<div class="w-[100dwv] h-[100dvh] bg-white dark:bg-black"><div class="p-2 pb-1 text-black dark:text-white h-[7dvh]"><div class="relative w-full bg-black/5 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 rounded-md flex flex-row items-center justify-center space-x-[0.2ch] text-[16px] h-full px-[1ch]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg> <input type="text" placeholder="find songs &amp; playlists"> <!></div></div> <div><!></div> <div class="absolute h-[15dvh] bottom-[0dvh] w-screen bg-gradient-to-b from-white/0 dark:from-black/0 to-[40%] to-white dark:to-black"></div> <div class="absolute h-[8dvh] w-screen bottom-[10dvh] flex flex-col items-center"><div class="h-full w-[95dvw] bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-md backdrop-brightness-[80%] dark:backdrop-brightness-[20%] backdrop-blur-lg flex flex-row items-center px-[0.5dvh] pt-[0.5dvh] border-t-[1px] border-white/5 dark:border-white/5 overflow-hidden"><div class="h-[2px] inset-0 w-full bg-black/5 dark:bg-white/5 absolute top-0 rounded-full overflow-hidden"><!> <div class="h-full bg-red-500 dark:bg-red-900 absolute z-10"></div></div> <!> <div class="grid grid-cols-10"><!> <button class="p-0 m-0 col-span-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-full mr-[1ch]"><!></svg></button> <button class="p-0 m-0 col-span-1 disabled:text-black/25 dark:disabled:text-white/25" aria-label="next song"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-full mr-[1ch]"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd"></path></svg></button></div></div></div> <div class="absolute h-[8dvh] w-screen bottom-[1dvh] flex flex-col items-center"><div class="h-full w-[95dvw] bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-md backdrop-brightness-[80%] dark:backdrop-brightness-[20%] backdrop-blur-lg flex flex-row items-center justify-center px-[0.5dvh] pt-[0.5dvh] border-t-[1px] border-white/5 dark:border-white/5 overflow-hidden"><button class="rounded-md w-full text-violet-600 dark:text-violet-500 font-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[1.2em] inline"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd"></path></svg> Search</button><button class="rounded-md w-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[1.2em] inline"><path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path></svg> Library</button></div></div> <!> <!></div>');function da(c,a){Ze(a,!0);const h=st(),m=()=>nt(lt,"$config",h);let v=ke(a,"jamInfo",19,()=>({create:!0})),A=ke(a,"showJAM",15,!1),g=z(!1),u=J({loading:!1});Re(()=>{const r=Date.now();Object.keys(localStorage).forEach(s=>{s.startsWith("cache-search-")&&JSON.parse(localStorage.getItem(s)).expiry<r&&localStorage.removeItem(s)})});async function d(r,s,x){const C=Date.now(),E=`cache-${r}`;if(localStorage.getItem(E)){const D=JSON.parse(localStorage.getItem(E));if(D){if(C<D.expiry)return D.data;localStorage.removeItem(E)}}const N=await s();return localStorage.setItem(E,JSON.stringify({data:N,expiry:C+x})),N}let w=z(""),n=z(!1),L=z("");const I=((r,s=500)=>{let x=null;return(...C)=>{x||(x=setTimeout(()=>{r(...C),x=null},s))}})(()=>{let r=e(w);!r||r.length<3||u.query&&r==u.query||(u.loading=!0,d(`search-${r}`,()=>ht.search.songs(r),60*60*1e3).then(s=>{s.results=s.results.map(x=>(x.image=x.image.replace("http://","https://"),x)),u.query=r,u.songs=s,u.loading=!1}))},1e3);var W=aa();ut(r=>{var s=Nt();it.title="Dashboard - Carter",f(r,s)});var H=i(W),j=i(H),p=i(j),M=o(p,2);M.__keyup=r=>{const s=r.target;if(r.key=="Enter"){s.blur();return}s.value=s.value.replace(/[^a-zA-Z0-9 '-]/g,""),b(w,J(s.value.trim())),e(w)!=""&&(b(n,s.value.length>2),I())};var B=o(M,2);{var R=r=>{var s=zt();s.__click=[Zt,L],P(3,s,()=>me,()=>({duration:100})),f(r,s)};Z(B,r=>{e(n)&&r(R)})}var U=o(H,2),fe=i(U);{var Me=r=>{var s=Vt(),x=ye(s),C=i(x);{var E=T=>{var k=Ht();f(T,k)},N=T=>{var k=Dt(),ae=ye(k),Q=o(ae);{var le=V=>{var ue=Rt(),Se=i(ue);q(()=>$(Se,`—out of ${u.songs.total??""}`)),f(V,ue)};Z(Q,V=>{u.songs.total>10&&V(le)})}q(()=>$(ae,`showing ${u.songs.results.length??""} result${(u.songs.results.length>1?"s":"")??""} `)),f(T,k)};Z(C,T=>{u.loading?T(E):T(N,!1)})}var D=o(x,2);Be(D,17,()=>u.songs.results||[],T=>T.id,(T,k)=>{var ae=je(()=>l.info.meta.id==e(k).id);kt(T,{get song(){return e(k)},get playing(){return e(ae)},onPlay:()=>{var V;const Q=l.helpers.decryptURL(e(k).more_info.encrypted_media_url);if(Q.length==0){console.error("no media url found for song");return}const le=(V=Q.at(-1))==null?void 0:V.url;l.playback.play({id:e(k).id,title:e(k).title,img:e(k).image.replace("http://","https://"),artist:e(k).more_info.artistMap.primary_artists[0].name||"",album:e(k).more_info.album||""},le)},onAddToQueue:()=>{var V;const Q=l.helpers.decryptURL(e(k).more_info.encrypted_media_url);if(Q.length==0){console.error("no media url found for song");return}const le=(V=Q.at(-1))==null?void 0:V.url;l.playback.appendQueue({id:e(k).id,title:e(k).title,img:e(k).image.replace("http://","https://"),artist:e(k).more_info.artistMap.primary_artists[0].name||"",album:e(k).more_info.album||""},le)}})}),f(r,s)},G=r=>{var s=Pt(),x=o(i(s),2),C=o(i(x));{var E=N=>{var D=Jt(),T=o(i(D)),k=i(T),ae=o(T);q(()=>{$(k,`${m().connections.jiosaavn.data.meta.firstname??""}'s`),$(ae,`(${m().connections.jiosaavn.data.meta.username??""}) JioSaavn
              Account`)}),f(N,D)};Z(C,N=>{m().connections.jiosaavn.active&&N(E)})}f(r,s)};Z(fe,r=>{u.songs?r(Me):r(G,!1)})}var O=o(U,4),se=i(O),Y=i(se),ie=i(Y);{var ce=r=>{var s=Ut();q(()=>ve(s,"style",`width: ${l.info.fetch??""}%;`)),f(r,s)};Z(ie,r=>{l.info.fetch!=0&&r(ce)})}var be=o(ie,2),K=o(Y,2);{var de=r=>{var s=Ot();q(()=>ve(s,"src",l.info.meta.img)),f(r,s)};Z(K,r=>{e(g)||r(de)})}var oe=o(K,2),ee=i(oe);{var X=r=>{var s=Xt();s.__click=[Yt,g];var x=i(s),C=i(x);he(C,()=>l.info.meta.title);var E=o(C,2),N=i(E);he(N,()=>l.info.meta.artist),f(r,s)};Z(ee,r=>{e(g)||r(X)})}var S=o(ee,2);S.__click=()=>{l.info.playing?l.playback.pause():l.playback.resume()};var te=i(S),F=i(te);{var ne=r=>{var s=Ft();P(3,s,()=>me,()=>({duration:150})),f(r,s)},Ee=r=>{var s=Qt();P(3,s,()=>me,()=>({duration:150})),f(r,s)};Z(F,r=>{l.info.playing?r(ne):r(Ee,!1)})}var Ae=o(S,2);Ae.__click=()=>{l.playback.next()};var ge=o(O,2),Le=o(ge,2);Je(Le,{get visible(){return e(g)},set visible(x){b(g,J(x))},title:x=>{var C=Wt(),E=i(C);he(E,()=>l.info.meta.title),f(x,C)},body:x=>{var C=ta(),E=i(C),N=i(E),D=o(N,2),T=o(i(D)),k=i(T);he(k,()=>l.info.meta.artist);var ae=o(D,2),Q=i(ae),le=o(E,2);{var V=ue=>{var Se=ea(),Pe=o(i(Se),2);Be(Pe,21,()=>l.info.meta.lyrics.content,Ve,(qe,we)=>{var $e=Gt(),He=i($e);He.__click=()=>{l.info.audioElm.currentTime=e(we).time};var Ue=i(He);q(()=>{re($e,l.info.t>=e(we).time?"text-black dark:text-white":"text-black/80 dark:text-white/50"),$(Ue,e(we).text)}),f(qe,$e)},qe=>{var we=Kt();f(qe,we)}),f(ue,Se)};Z(le,ue=>{l.info.meta.lyrics&&ue(V)})}q(()=>{ve(N,"src",l.info.meta.img),$(Q,`@${l.info.t??""}s for id:${l.info.meta.id??""}`)}),f(x,C)},$$slots:{title:!0,body:!0}});var Te=o(Le,2);jt(Te,{get info(){return v()},get visible(){return A()},set visible(r){A(r)}}),q(()=>{ot(p,`h-[1.3em] max-w-[5%] ${(u.loading?"animate-pulse text-purple-600 dark:text-purple-500 stroke-2":"text-zinc-500")??""}`),re(M,`bg-transparent ring-0 focus:outline-none rounded-md py-0 h-full ${(e(n)?"w-[90%]":"w-[95%]")??""}`),re(U,`items-center justify-center space-y-0 max-h-[93dvh] h-[93dvh] overflow-y-scroll pb-[13dvh] rounded-t-xl bg-transparent no-scrollbar w-full ${(u.loading?"animate-pulse":"")??""}`),ve(be,"style",`width: ${l.info.t/l.info.dur*100}%;`),Ae.disabled=l.info.queue.length-1<=l.info.qi}),Ce(M,()=>e(L),r=>b(L,r)),P(3,j,()=>Ie,()=>({duration:500,y:-100})),P(3,U,()=>me,()=>({duration:1e3})),P(3,Y,()=>me,()=>({duration:250})),P(3,O,()=>Ie,()=>({duration:250,y:100})),P(3,ge,()=>Ie,()=>({duration:500,y:100})),f(c,W),ze()}Ne(["keyup","click"]);export{da as default};
