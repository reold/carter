import{j as Oe,k as Xe,l as Qe,m as We,n as Ye,o as Ge,q as Ke,r as et,u as tt,v as at,S as rt,d as Ie,w as Ze,p as be,i as Z,s as i,c as n,h as a,g as A,x as W,y as le,a as p,z as qe,b as h,t as x,e as z,A as st,B as _e,C as ot,D as C,E as nt,f as xe,F as it,G as lt,H as ct,I as Re,$ as dt,J as ut,K as He,L as vt}from"./index-Cr94MMBN.js";import{i as L}from"./if-boKicdoq.js";import{o as Je,e as Be,i as Fe,g as mt,f as ht}from"./ssh-C4DV9kL6.js";import{h as pt}from"./svelte-head-6wlHQps1.js";import{s as ve,h as ft,S as Ue}from"./Sheet-DOE3jaH-.js";import{b as Me}from"./input-CQn7RiSr.js";function me(t,e,o,u,c){var f=t,k="",g;Oe(()=>{k!==(k=e()??"")&&(g!==void 0&&(Ge(g),g=void 0),k!==""&&(g=Xe(()=>{var w=k+"",j=Qe(w);We(Ye(j),j.lastChild),f.before(j)})))})}function Te(t,e){return t===e||(t==null?void 0:t[rt])===e}function wt(t={},e,o,u){return Ke(()=>{var c,f;return et(()=>{c=f,f=[],tt(()=>{t!==o(...f)&&(e(t,...f),c&&Te(o(...c),t)&&e(null,...c))})}),()=>{at(()=>{f&&Te(o(...f),t)&&e(null,...f)})}}),t}function gt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}var _t=(t,e,o)=>{e.held=!0,e.originX=t.touches[0].clientX,h(o,!0)},xt=(t,e,o)=>{e.held&&(t.touches[0].clientX-e.originX<-50?h(o,!0):h(o,!1))},bt=(t,e,o)=>{e.held=!1,h(o,!1)},yt=(t,e,o)=>{e()||o.onPlay()},kt=(t,e)=>{window.open(e.song.perma_url)},$t=x('<div class="flex items-center text-white min-h-[7dvh] w-[40%] space-x-2"><button class="bg-white/5 text-white rounded-full" aria-label="add song to queue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[1.2em]"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd"></path></svg></button> <button class="bg-white/5 text-blue-300 rounded-full" aria-label="visit source link"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg></button></div>'),St=x('<div><button><img alt="cover art" class="max-h-[7dvh]" loading="lazy"></button> <div class="flex flex-col overflow-x-hidden -space-y-1 justify-center w-full"><h2><!></h2> <span class="font-base text-[0.7em] text-white/80 pl-2 truncate max-w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[0.7em] inline"><path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"></path></svg> <!></span></div> <!></div>');function Mt(t,e){Ze(e,!0);const o=be(e,"playing",3,!1);let u=Z({held:!1,originX:0}),c=z(!1),f=z(!1);var k=St();k.__touchstart=[_t,u,c],k.__touchmove=[xt,u,f],k.__touchend=[bt,u,c];var g=n(k);g.__click=[yt,o,e];var w=n(g),j=i(g,2),l=n(j),R=n(l);me(R,()=>e.song.title);var Y=i(l,2),he=i(n(Y),2);me(he,()=>e.song.subtitle);var ye=i(j,2);{var pe=T=>{var N=$t(),v=n(N);v.__click=function(...S){var B;(B=e.onAddToQueue)==null||B.apply(this,S)};var M=i(v,2);M.__click=[kt,e],le(3,N,()=>st,()=>({axis:"x",duration:100,easing:gt})),p(T,N)};L(ye,T=>{a(f)&&T(pe)})}A(()=>{W(k,`w-full h-[10dvh] pl-2 min-h-[7dvh] ring-zinc-500 text-white overflow-hidden flex flex-row space-x-2 border-b-[1px] border-white/5 py-2 select-none transition-colors duration-100 ${(a(c)?"bg-white/5":"bg-transparent")??""}`),W(g,`p-0 m-0 max-w-[20%] my-auto transition-transform duration-200 rounded-[0.5em] overflow-hidden ${(a(c)?"scale-105":"")??""}`),ve(w,"src",e.song.image),W(l,`font-medium text-base max-w-full truncate ${(o()?"text-violet-500":"")??""}`)}),ft(w),le(3,k,()=>_e,()=>({duration:500})),p(t,k),qe()}Ie(["touchstart","touchmove","touchend","click"]);const jt="https://carter-65v1.onrender.com",Ve={rooms:`${jt}/room`},P={commonFetch:async t=>{let e=await fetch(`${Ve.rooms}${t}`),o=await e.json();if(e.status!=200)throw Error("something went wrong");return o},createRoom:async(t,e,o)=>await P.commonFetch(`/new?id=${t}&username=${e}&room_name=${o}`),joinRoom:async(t,e,o)=>await P.commonFetch(`/join?id=${t}&room_id=${e}&username=${o}`),infoRoom:async t=>await P.commonFetch(`/info?room_id=${t}`),listenRoom:async(t,e,o)=>{const u=new EventSource(`${Ve.rooms}/listen?id=${t}`);u.onmessage=e,u.onerror=o},broadcastRoom:async(t,e,o)=>await P.commonFetch(`/broadcast?id=${t}&room_id=${e}&msg=${o}`)};var At=x('<h1 class="text-white select-none"> <span class="bg-yellow-500 text-black rounded-lg p-0.5 text-xs ml-1">beta</span></h1>'),Et=x('<span class="truncate w-[75dvw] inline-block text-xs whitespace-nowrap"> </span>'),Lt=(t,e,o,u)=>{e().create?o():u()},Ct=x(`<p class="text-zinc-100 text-sm select-none">JAM Sessions let you and your friends enjoy music together, no matter
        where you are in the world. <span class=" text-zinc-500">Your client ID is unique to your browser. If you switch browsers,
          you'll need to start a new session, as your previous one cannot be
          resumed.</span></p> <div class="flex flex-col space-y-2 w-[95dvw] mt-[5dvh]"><p class="text-red-500 text-xs"> </p> <div class="text-white flex flex-row items-center bg-white/5 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-[1.2em] ml-2"><path fill-rule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clip-rule="evenodd"></path></svg> <input type="text" name="username" id="username" placeholder="Username" class="bg-transparent ring-0 focus:outline-none w-full py-1 pr-2"></div> <input type="text" name="room title" id="room title" placeholder="Session Name, e.g., Varun's Party Music" class="bg-white/5 ring-0 focus:outline-none rounded-md py-1 px-2 text-white"> <p class="text-zinc-500 flex flex-row items-center space-x-2 h-[2ch] overflow-hidden"><span class="text-xs">client-id:</span> <!></p> <button class="text-white bg-purple-500 rounded-md font-bold select-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-[1em] inline"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path></svg> </button></div>`,1),zt=(t,e)=>e(),Rt=x('<p class="text-xs ml-auto"> </p>'),Bt=x('<div><p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-[0.8em] inline -mr-1"><path fill-rule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clip-rule="evenodd"></path></svg> </p> <p class="px-2 text-white -mt-[0.2em] text-base"> </p> <!></div>'),It=(t,e)=>{t.key=="Enter"&&e()},Zt=(t,e)=>e(),qt=x('<div class="w-[95dvw] h-[80dvh] max-h-[80dvh] overflow-y-scroll overflow-x-hidden text-white ring-1 ring-white/5 my-2 rounded-t-md"><div class="sticky top-0 flex flex-row border-b-[0px] bg-gradient-to-b from-zinc-900 to-zinc-900/50 border-zinc-500/25 w-[95dvw] h-[5dvh]"><h1 class="text-xl text-white font-semibold w-[80%] text-center place-content-center"> </h1> <button aria-label="copy session invite link" class="w-[20%] flex flex-col items-center justify-center rounded-md overflow-hidden p-0 m-0 max-h-[3em] select-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-violet-500 aspect-square p-[0.1em] h-[2em] inline-block"><path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd"></path></svg></button></div> <!></div> <div class="text-white flex flex-row items-center bg-white/5 rounded-md w-[95dvw]"><input type="text" name="message" id="message" placeholder="send a message" class="bg-transparent ring-0 focus:outline-none w-full py-1 pl-2"> <button class="p-0 m-0 select-none" aria-label="send message"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-[1.2em] mr-2"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"></path></svg></button></div>',1);function Dt(t,e){Ze(e,!0);let o=be(e,"visible",15,!1),u=be(e,"info",19,()=>({create:!0})),c=z(""),f=z(""),k=Re(async()=>await Y(`${a(c)}-${navigator.userAgent}`)),g=z(""),w=z(""),j=z(void 0);Je(()=>{u().create||(l.id=u().roomId,h(g,"loading room information"),P.infoRoom(l.id).then(v=>{v.success?h(g,Z(v.room_name)):(h(w,`error: ${v.fault}`),h(g,"room doesn't exist"))}))});let l=Z({connected:!1,activity:"",id:"",name:"",messages:[]});ot(()=>{l.messages,a(j)&&a(j).scrollTo({top:a(j).scrollHeight||0,behavior:"smooth"})});let R=z("");async function Y(v){const M=new TextEncoder().encode(v),S=await crypto.subtle.digest("SHA-256",M);return Array.from(new Uint8Array(S)).map(G=>G.toString(16).padStart(2,"0")).join("")}const he=()=>{P.listenRoom(a(f),v=>{const M=JSON.parse(v.data);switch(M.type){case"msg":l.messages=[...l.messages,{username:M.username,content:M.content,time:M.time}],l.activity=`(${M.activity.filter(S=>S.active==!0).length}/${M.activity.length})`;break;case"conn":l.messages=[...l.messages,{username:"server",content:M.info,time:String(Date.now()/1e3)}];break}},v=>{l.messages=[...l.messages,{username:"server",content:"connection lost, retrying (browser-initiated)",time:String(Date.now()/1e3)}],console.error(v)})},ye=async()=>{if(h(c,Z(a(c).trim())),a(c).length<4){h(w,"username must be more than 3 characters in length");return}a(g).length==0&&h(g,`${a(c)}'s Music Session`),h(f,Z(await a(k))),P.createRoom(a(f),a(c),a(g)).then(v=>{v.success?(l.id=v.room_id,l.name=a(g),l.connected=!0,he()):h(w,`error: ${v.fault}`)}).catch(v=>{l.messages=[...l.messages,{username:"server",content:"unable to create room",time:String(Date.now()/1e3)}],console.error(v)})},pe=async()=>{if(h(c,Z(a(c).trim())),a(c).length<4){h(w,"username must be more than 3 characters in length");return}h(f,Z(await a(k))),P.joinRoom(a(f),l.id,a(c)).then(v=>{v.success?(l.name=v.room_name,l.connected=!0,he()):h(w,`error: ${v.fault}`)}).catch(v=>{l.messages=[...l.messages,{username:"server",content:"unable to join room",time:String(Date.now()/1e3)}],console.error(v)})},T=async()=>{if(a(R).length==0)return;const v=a(R);h(R,""),await P.broadcastRoom(await a(k),l.id,v)},N=()=>{navigator.clipboard.writeText(`${window.location.host+window.location.pathname}#join${l.id}`),l.messages=[...l.messages,{username:"carter",content:"invite link copied to clipboard",time:String(Date.now()/1e3)}]};Ue(t,{get visible(){return o()},set visible(S){o(S)},title:S=>{var B=At(),ce=n(B);A(()=>C(ce,`${(u().create?"":"Join ")??""}JAM Session`)),p(S,B)},body:S=>{var B=nt(),ce=xe(B);{var G=O=>{var K=Ct(),V=i(xe(K),2),ee=n(V),X=n(ee),te=i(ee,2),fe=i(n(te),2),ae=i(te,2),re=i(ae,2),se=i(n(re),2);it(se,()=>a(k),$=>{var H=ct("computing");p($,H)},($,H)=>{var D=Et(),ne=n(D,!0);lt(D),A(()=>C(ne,`${a(H)}`)),p($,D)});var oe=i(re,2);oe.__click=[Lt,u,ye,pe];var q=i(n(oe));A(()=>{C(X,a(w)),ae.disabled=!u().create,ve(oe,"aria-label",`${(u().create?"create":"join")??""} jam session`),C(q,` ${(u().create?"create":"join")??""}`)}),Me(fe,()=>a(c),$=>h(c,$)),Me(ae,()=>a(g),$=>h(g,$)),p(O,K)},je=O=>{var K=qt(),V=xe(K),ee=n(V),X=n(ee),te=n(X),fe=i(X,2);fe.__click=[zt,N];var ae=i(ee,2);Be(ae,17,()=>l.messages,Fe,(q,$,H)=>{var D=Bt(),ne=n(D);const Ae=Re(()=>`${(["server","carter"].includes(a($).username)?"text-red-400":"text-purple-400")??""} text-lg font-medium px-0.5 rounded-r-md inline-block max-w-[95%] truncate`);var Ee=i(n(ne)),ke=i(ne,2),$e=n(ke),Le=i(ke,2);{var r=s=>{var _=Rt(),b=n(_);A(()=>C(b,new Date(Number(a($).time)*1e3).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit",hour12:!0}))),p(s,_)};L(Le,s=>{a($).time&&s(r)})}A(()=>{W(D,`${(a($).username==a(c)?"ml-auto rounded-br-none mr-1":"rounded-bl-none ml-1")??""} ${(H-1!==-1&&l.messages[H-1].username===a($).username?"mt-[0.25em]":"mt-[0.5em]")??""} rounded-lg p-1 bg-white/5 flex flex-col items-start justify-center w-fit min-w-[20dvw] max-w-[80dvw]`),W(ne,a(Ae)),C(Ee,` ${a($).username??""}`),C($e,a($).content)}),p(q,D)}),wt(V,q=>h(j,q),()=>a(j));var re=i(V,2),se=n(re);se.__keyup=[It,T];var oe=i(se,2);oe.__click=[Zt,T],A(()=>C(te,`${l.activity??""}
            ${l.name??""}`)),Me(se,()=>a(R),q=>h(R,q)),p(O,K)};L(ce,O=>{l.connected?O(je,!1):O(G)})}p(S,B)},$$slots:{title:!0,body:!0}}),qe()}Ie(["click","keyup"]);var Tt=ht;const ge=mt(Tt),d=Z({queue:[],qi:0,playing:!1,fetch:0,t:0,dur:0,audioElm:new Audio,meta:{id:"",title:"Nothing playing",img:"",artist:"",album:"",lyrics:{type:"plain",content:[],id:0}}}),m={get info(){return d},playback:{play:async(t,e)=>{e=e.replace("http://","https://"),d.meta={...d.meta,...t},d.audioElm.load(),d.audioElm.pause(),d.audioElm.src=e,d.audioElm.controls=!0,d.fetch=0,d.dur=0,d.t=0,d.audioElm.onloadedmetadata=()=>{d.dur=d.audioElm.duration,m.playback.loadLyrics()},d.audioElm.play().catch(o=>console.error("Playback failed:",o)),d.audioElm.currentTime=0,d.audioElm.ontimeupdate=()=>{d.t=d.audioElm.currentTime},d.audioElm.onprogress=()=>{const o=d.audioElm.buffered,u=d.audioElm.duration;if(o.length>0&&u>0){const c=o.end(o.length-1);d.fetch=c/u*100}},m.info.playing=!0},appendQueue:async(t,e)=>{e=e.replace("http://","https://"),d.queue=[...d.queue,{url:e,meta:t}]},loadLyrics:()=>{fetch(`https://lrclib.net/api/get?track_name=${d.meta.title}&album_name=${d.meta.album}&duration=${d.dur}&artist_name=${d.meta.artist}`).then(t=>t.json()).then(t=>{t.syncedLyrics&&(d.meta.lyrics={type:"synced",content:t.syncedLyrics.split(`
`).map(e=>{const o=/^\[(\d{2}):(\d{2}\.\d{2})\]\s*(.*)$/.exec(e);if(o){const u=parseInt(o[1]),c=parseFloat(o[2]);return{time:u*60+c,text:o[3]}}return{time:0,text:e}}).filter(e=>e.text),id:t.id})}).catch(t=>console.error("Lyrics fetch failed:",t))},pause:()=>{d.audioElm.pause(),m.info.playing=!1},resume:()=>{d.audioElm.play().catch(t=>console.error("Resume failed:",t)),m.info.playing=!0}},helpers:{decryptURL:t=>{if(!t)return[];const e="38346591",o="00000000",u=ge.util.decode64(t),c=ge.cipher.createDecipher("DES-ECB",ge.util.createBuffer(e));c.start({iv:ge.util.createBuffer(o)}),c.update(ge.util.createBuffer(u)),c.finish();const f=c.output.getBytes();return[{quality:"12kbps",url:f.replace("_96","_12")},{quality:"48kbps",url:f.replace("_96","_48")},{quality:"96kbps",url:f},{quality:"160kbps",url:f.replace("_96","_160")},{quality:"320kbps",url:f.replace("_96","_320")}]}}};var Vt=x('<meta property="theme-color" content="#000">'),Ht=(t,e)=>h(e,""),Jt=x('<button class="p-0 m-0 h-[75%] max-w-[5%] bg-transparent" aria-label="clear search text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-[1.3em] text-zinc-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd"></path></svg></button>'),Ft=x('<span class="animate-pulse">Loading(proxy -> server).</span>'),Ut=x('<span class="text-[8px] text-white/80"> </span>'),Pt=x(" <!>",1),Nt=x('<h2 class="text-white font-medium w-[100dvw] text-[9px] font-mono mt-2 px-2 select-none"><!> <span class="text-[8px] text-white/80 bg-white/5 p-0.5 rounded-sm">Powered by JioSaavn</span></h2> <!>',1),Ot=x(`<div class="px-2"><h1 class="text-white font-semibold text-center mt-[1em] mb-2 text-xl border-b-[1px] border-white/10">🎶 Search for Music!</h1> <p class="text-white/80 text-sm">Find for your favorite songs, playlists, artists and more by utilizing
          the search bar on the top!</p></div>`),Xt=x('<div class="h-full bg-white/20 absolute"></div>'),Qt=x('<img alt="song thumbnail" id="player-thumbnail" class="h-[6dvh] aspect-square rounded-md col-span-2 text-xs" style="view-transition-name: player-thumbnail;">'),Wt=(t,e)=>{document.startViewTransition?document.startViewTransition(()=>h(e,!0)):h(e,!0)},Yt=x('<button class="p-0 m-0 col-span-8 pl-2"><p class="font-medium text-md text-left truncate" style="view-transition-name: player-title;"><!> <span class="font-normal text-sm text-zinc-200 block" style="view-transition-name: player-artist"><!></span></p></button>'),Gt=(t,e)=>e(!0),Kt=He('<path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd"></path>'),ea=He('<path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd"></path>'),ta=x('<h1 class="text-white truncate max-w-[80%]" style="view-transition-name: player-title;"><!></h1>'),aa=x('<li><button class="m-0 p-0 text-left"> </button></li>'),ra=x(`<li class="text-zinc-500">Currently not available. You can help add/improve lyrics
                  through <a class="text-blue-400 after:content-['↟']" href="https://lrclib.net/" target="_blank">LRCLIB</a></li>`),sa=x('<div class="bg-white/5 text-white w-[95dvw] h-fit p-2 rounded-t-md overflow-hidden"><h3 class="text-xl">Lyrics <span class="text-[8px] text-white/80 bg-white/5 p-0.5 rounded-sm">Powered by LRCLIB</span></h3> <ul class="max-h-full px-2 text-sm space-y-2"></ul></div>'),oa=x('<div class="overflow-y-scroll"><div class="flex flex-col items-center justify-center"><img alt="song thumbnail" class="w-[50dvw] rounded-md shadow-black shadow-xl" style="view-transition-name: player-thumbnail;"> <p class="text-white mt-[5dvh]" style="view-transition-name: player-artist">by <b><!></b></p> <p class="text-zinc-500 italic"> </p></div> <!></div>'),na=x('<div class="w-[100dwv] h-[100dvh] bg-black"><div class="p-2 pb-1 text-white h-[7dvh]"><div class="relative w-full bg-white/5 rounded-md flex flex-row items-center justify-center space-x-[0.2ch] text-[16px] h-full px-[1ch]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg> <input type="text" placeholder="find songs &amp; playlists"> <!></div></div> <div><!></div> <div class="absolute h-[15dvh] bottom-[0dvh] w-screen bg-gradient-to-b from-black/0 to-[40%] to-black"></div> <div class="absolute h-[8dvh] w-screen bottom-[5dvh] flex flex-col items-center"><div class="h-full w-[95dvw] bg-white/5 text-white rounded-md backdrop-brightness-[50%] backdrop-blur-lg flex flex-row items-center px-[0.5dvh] pt-[0.5dvh] border-t-[1px] border-white/5 overflow-hidden"><div class="h-[2px] inset-0 w-full bg-white/5 absolute top-0 rounded-full overflow-hidden"><!> <div class="h-full bg-red-900 absolute z-10"></div></div> <!> <div class="grid grid-cols-10"><!> <button aria-label="start jam session" class="p-0 m-0 col-span-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-full"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path></svg></button> <button class="p-0 m-0 col-span-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-full mr-[1ch]"><!></svg></button></div></div></div> <!> <!></div>');function ma(t,e){Ze(e,!0);const c="https://vercel-cors-anywhere-kl6pfodtk-reolds-projects.vercel.app/api?url=https://www.jiosaavn.com/api.php";let f=be(e,"jamInfo",19,()=>({create:!0})),k=be(e,"showJAM",15,!1),g=z(!1),w=Z({loading:!1});Je(()=>{const r=Date.now();Object.keys(localStorage).forEach(s=>{s.startsWith("search-cache-")&&JSON.parse(localStorage.getItem(s)).expiry<r&&localStorage.removeItem(s)})});async function j(r,s){const _=Date.now(),b=`search-cache-${r}`;if(localStorage.getItem(b)){const Q=JSON.parse(localStorage.getItem(b));if(Q){if(_<Q.expiry)return Q.data;localStorage.removeItem(b)}}const F=await(await fetch(r)).json();return localStorage.setItem(b,JSON.stringify({data:F,expiry:_+s})),F}let l=z(""),R=z(!1),Y=z("");const pe=((r,s=500)=>{let _=null;return(...b)=>{_||(_=setTimeout(()=>{r(...b),_=null},s))}})(()=>{let r=a(l);if(!r||r.length<3||w.query&&r==w.query)return;const s=`${c}${encodeURIComponent(`?p=1&q=${r}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=30&__call=search.getResults`)}`;w.loading=!0,j(s,60*60*1e3).then(_=>{_.results=_.results.map(b=>(b.image=b.image.replace("http://","https://"),b)),w.query=r,w.songs=_,w.loading=!1})},1e3);var T=na();pt(r=>{var s=Vt();dt.title="Dashboard - Carter",p(r,s)});var N=n(T),v=n(N),M=n(v),S=i(M,2);S.__keyup=r=>{const s=r.target;if(r.key=="Enter"){s.blur();return}s.value=s.value.replace(/[^a-zA-Z0-9 '-]/g,""),h(l,Z(s.value.trim())),a(l)!=""&&(h(R,s.value.length>2),pe())};var B=i(S,2);{var ce=r=>{var s=Jt();s.__click=[Ht,Y],le(3,s,()=>_e,()=>({duration:100})),p(r,s)};L(B,r=>{a(R)&&r(ce)})}var G=i(N,2),je=n(G);{var O=r=>{var s=Nt(),_=xe(s),b=n(_);{var J=E=>{var y=Ft();p(E,y)},F=E=>{var y=Pt(),de=xe(y),U=i(de);{var ie=I=>{var ue=Ut(),Se=n(ue);A(()=>C(Se,`—out of ${w.songs.total??""}`)),p(I,ue)};L(U,I=>{w.songs.total>10&&I(ie)})}A(()=>C(de,`showing ${w.songs.results.length??""} result/s `)),p(E,y)};L(b,E=>{w.loading?E(J):E(F,!1)})}var Q=i(_,2);Be(Q,17,()=>w.songs.results||[],E=>E.id,(E,y)=>{var de=Re(()=>m.info.meta.id==a(y).id);Mt(E,{get song(){return a(y)},get playing(){return a(de)},onPlay:()=>{var I;const U=m.helpers.decryptURL(a(y).more_info.encrypted_media_url);if(U.length==0){console.error("no media url found for song");return}const ie=(I=U.at(-1))==null?void 0:I.url;console.log(a(y)),m.playback.play({id:a(y).id,title:a(y).title,img:a(y).image.replace("http://","https://"),artist:a(y).more_info.artistMap.primary_artists[0].name||"",album:a(y).more_info.album||""},ie)},onAddToQueue:()=>{var I;const U=m.helpers.decryptURL(a(y).more_info.encrypted_media_url);if(U.length==0){console.error("no media url found for song");return}const ie=(I=U.at(-1))==null?void 0:I.url;m.playback.appendQueue({id:a(y).id,title:a(y).title,img:a(y).image.replace("http://","https://"),artist:a(y).more_info.artistMap.primary_artists[0].name||"",album:a(y).more_info.album||""},ie)}})}),p(r,s)},K=r=>{var s=Ot();p(r,s)};L(je,r=>{w.songs?r(O):r(K,!1)})}var V=i(G,4),ee=n(V),X=n(ee),te=n(X);{var fe=r=>{var s=Xt();A(()=>ve(s,"style",`width: ${m.info.fetch??""}%;`)),p(r,s)};L(te,r=>{m.info.fetch!=0&&r(fe)})}var ae=i(te,2),re=i(X,2);{var se=r=>{var s=Qt();A(()=>ve(s,"src",m.info.meta.img)),p(r,s)};L(re,r=>{a(g)||r(se)})}var oe=i(re,2),q=n(oe);{var $=r=>{var s=Yt();s.__click=[Wt,g];var _=n(s),b=n(_);me(b,()=>m.info.meta.title);var J=i(b,2),F=n(J);me(F,()=>m.info.meta.artist),p(r,s)};L(q,r=>{a(g)||r($)})}var H=i(q,2);H.__click=[Gt,k];var D=i(H,2);D.__click=()=>{m.info.playing?m.playback.pause():m.playback.resume()};var ne=n(D),Ae=n(ne);{var Ee=r=>{var s=Kt();le(3,s,()=>_e,()=>({duration:150})),p(r,s)},ke=r=>{var s=ea();le(3,s,()=>_e,()=>({duration:150})),p(r,s)};L(Ae,r=>{m.info.playing?r(Ee):r(ke,!1)})}var $e=i(V,2);Ue($e,{get visible(){return a(g)},set visible(_){h(g,Z(_))},title:_=>{var b=ta(),J=n(b);me(J,()=>m.info.meta.title),p(_,b)},body:_=>{var b=oa(),J=n(b),F=n(J),Q=i(F,2),E=i(n(Q)),y=n(E);me(y,()=>m.info.meta.artist);var de=i(Q,2),U=n(de),ie=i(J,2);{var I=ue=>{var Se=sa(),Pe=i(n(Se),2);Be(Pe,21,()=>m.info.meta.lyrics.content,Fe,(Ce,we)=>{var ze=aa(),De=n(ze);De.__click=()=>{m.info.audioElm.currentTime=a(we).time};var Ne=n(De);A(()=>{W(ze,m.info.t>=a(we).time?"text-white":"text-zinc-500"),C(Ne,a(we).text)}),p(Ce,ze)},Ce=>{var we=ra();p(Ce,we)}),p(ue,Se)};L(ie,ue=>{m.info.meta.lyrics&&ue(I)})}A(()=>{ve(F,"src",m.info.meta.img),C(U,`@${m.info.t??""}s for id:${m.info.meta.id??""}`)}),p(_,b)},$$slots:{title:!0,body:!0}});var Le=i($e,2);Dt(Le,{get info(){return f()},get visible(){return k()},set visible(r){k(r)}}),A(()=>{ut(M,`h-[1.3em] max-w-[5%] ${(w.loading?"animate-pulse text-purple-500 stroke-2":"text-zinc-500")??""}`),W(S,`bg-transparent ring-0 focus:outline-none rounded-md py-0 h-full ${(a(R)?"w-[90%]":"w-[95%]")??""}`),W(G,`items-center justify-center space-y-0 max-h-[93dvh] h-[93dvh] overflow-y-scroll pb-[13dvh] rounded-t-xl bg-transparent no-scrollbar w-full ${(w.loading?"animate-pulse":"")??""}`),ve(ae,"style",`width: ${m.info.t/m.info.dur*100}%;`)}),Me(S,()=>a(Y),r=>h(Y,r)),le(3,X,()=>_e,()=>({duration:250})),le(3,V,()=>vt,()=>({duration:500,y:100})),p(t,T),qe()}Ie(["keyup","click"]);export{ma as default};
