import{d as nt,A as lt,p as vt,i as G,s as d,c as i,h as a,g as J,I as X,O as q,a as p,C as it,b as M,t as f,e as P,a6 as ht,R as K,J as pt,f as H,T as at,P as ft,M as rt,V as F,L as ot,r as O,au as mt,E as $,z as gt,S as xt}from"./index-BeKHx9ud.js";import{i as I}from"./if-BkquEPI6.js";import{e as bt}from"./ssh-C06cbW1L.js";import{s as Y,h as wt}from"./Sheet-KAd2esFT.js";import{b as _t}from"./input-BIeTWTVF.js";import{h as st,J as N,u as W}from"./Dash-BQZi87kL.js";import"./svelte-head-oFqHE33R.js";import"./services.svelte-D800ANci.js";function kt(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}var yt=(n,e,l)=>{e.held=!0,e.originX=n.touches[0].clientX,M(l,!0)},St=(n,e,l)=>{e.held&&(n.touches[0].clientX-e.originX<-50?M(l,!0):M(l,!1))},Mt=(n,e,l)=>{e.held=!1,M(l,!1)},Lt=(n,e,l)=>{e()||l.onPlay()},zt=(n,e,l)=>{e()||l.onPlay()},Ct=f('<div class="flex items-center text-black dark:text-white min-h-[7dvh] w-[40%] space-x-2"><button class="bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full" aria-label="add track to queue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[1.2em]"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd"></path></svg></button> <button class="bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full" aria-label="visit source link"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path></svg></button></div>'),jt=f('<div><button><img alt="cover art" class="max-h-[7dvh]" loading="lazy"></button> <button class="flex flex-col overflow-x-hidden -space-y-1 justify-center w-full text-left p-0"><h2><!></h2> <span class="font-base text-[0.7em] text-black/80 dark:text-white/80 pl-2 truncate max-w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[0.7em] inline"><path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"></path></svg> <!></span></button> <!></div>');function At(n,e){lt(e,!0);const l=vt(e,"playing",3,!1);let v=G({held:!1,originX:0}),g=P(!1),s=P(!1);var h=jt();h.__touchstart=[yt,v,g],h.__touchmove=[St,v,s],h.__touchend=[Mt,v,g];var x=i(h);x.__click=[Lt,l,e];var C=i(x),T=d(x,2);T.__click=[zt,l,e];var Z=i(T),tt=i(Z);st(tt,()=>e.track.title,!1,!1);var D=d(Z,2),U=d(i(D),2);st(U,()=>e.track.subtitle,!1,!1);var R=d(T,2);{var B=j=>{var b=Ct(),Q=i(b);Q.__click=function(...w){var L;(L=e.onAddToQueue)==null||L.apply(this,w)};var E=d(Q,2);E.__click=function(...w){var L;(L=e.onMoreActions)==null||L.apply(this,w)},q(3,b,()=>ht,()=>({axis:"x",duration:100,easing:kt})),p(j,b)};I(R,j=>{a(s)&&j(B)})}J(()=>{X(h,`w-full h-[10dvh] pl-2 min-h-[7dvh] ring-zinc-500 text-black dark:text-white overflow-hidden flex flex-row space-x-2 border-b-[1px] border-black/5 dark:border-white/5 py-2 select-none transition-colors duration-100 ${(a(g)?"bg-black/5 dark:bg-white/5":"bg-transparent")??""}`),X(x,`p-0 m-0 max-w-[20%] my-auto transition-transform duration-200 rounded-[0.5em] overflow-hidden ${(a(g)?"scale-105":"")??""}`),Y(C,"src",e.track.image),X(Z,`font-medium text-base max-w-full truncate ${(l()?"text-violet-600 dark:text-violet-500":"")??""}`)}),wt(C),q(3,h,()=>K,()=>({duration:500})),p(n,h),it()}nt(["touchstart","touchmove","touchend","click"]);var It=(n,e)=>M(e,""),Tt=f('<button class="p-0 m-0 h-[75%] max-w-[5%] bg-transparent" aria-label="clear search text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-[1.3em] text-zinc-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd"></path></svg></button>'),Zt=f('<span class="animate-pulse">Loading(proxy -> server).</span>'),Rt=f('<span class="text-[8px] text-black/80 dark:text-white/80"> </span>'),Vt=f(" <!>",1),Jt=f('<h2 class="text-black dark:text-white font-medium w-[100dvw] text-[9px] font-mono mt-2 px-2 select-none"><!> <span class="text-[8px] text-black/80 dark:text-white/80 bg-black/5 dark:bg-white/5 p-0.5 rounded-sm">Powered by JioSaavn</span></h2> <!>',1),Xt=f("<span>Carter is connected with <b> </b> </span>"),qt=f('<div class="px-2"><h1 class="text-black dark:text-white font-semibold text-center mt-[1em] mb-2 text-xl border-b-[1px] border-black/10 dark:border-white/10">🎶 Search for Music!</h1> <p class="text-black/80 dark:text-white/80 text-sm">Find for your favorite songs, playlists, artists and more! <!></p></div>'),Pt=f('<div class="p-2 pb-1 text-black dark:text-white h-[7dvh]"><div class="relative w-full bg-black/5 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 rounded-md flex flex-row items-center justify-center space-x-[0.2ch] text-[16px] h-full px-[1ch]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg> <input type="text" placeholder="find songs &amp; playlists"> <!></div></div> <div><!></div>',1);function Ft(n,e){lt(e,!0);const l=pt(),v=()=>rt(F,"$ViewInfo",l),g=()=>rt(mt,"$config",l);let s=G({loading:!1}),h=P(""),x=P(!1),C=P("");const T=(t,r=500)=>{let c=null;return(..._)=>{c||(c=setTimeout(()=>{t(..._),c=null},r))}};async function Z(t,r,c){const _=Date.now(),k=`cache-${t}`;if(localStorage.getItem(k)){const S=JSON.parse(localStorage.getItem(k));if(S){if(_<S.expiry)return S.data;localStorage.removeItem(k)}}const y=await r();return localStorage.setItem(k,JSON.stringify({data:y,expiry:_+c})),y}const D=T(()=>{let t=a(h);!t||t.length<3||s.query&&t==s.query||(s.loading=!0,Z(`search-${t}`,()=>N.query(t),60*60*1e3).then(r=>{r.results=r.results.map(c=>(c.image=c.image.replace("http://","https://"),c)),s.query=t,s.songs=r,s.loading=!1}))},1e3);var U=Pt(),R=H(U),B=i(R),j=i(B),b=d(j,2);b.__keyup=t=>{const r=t.target;if(t.key=="Enter"){r.blur();return}r.value=r.value.replace(/[^a-zA-Z0-9 '-]/g,""),M(h,G(r.value.trim())),a(h)!=""&&(M(x,r.value.length>2),D())};var Q=d(b,2);{var E=t=>{var r=Tt();r.__click=[It,C],q(3,r,()=>K,()=>({duration:100})),p(t,r)};I(Q,t=>{a(x)&&t(E)})}var w=d(R,2),L=i(w);{var ct=t=>{var r=Jt(),c=H(r),_=i(c);{var k=u=>{var o=Zt();p(u,o)},y=u=>{var o=Vt(),A=H(o),z=d(A);{var V=m=>{var et=Rt(),ut=i(et);J(()=>$(ut,`—out of ${s.songs.total??""}`)),p(m,et)};I(z,m=>{s.songs.total>10&&m(V)})}J(()=>$(A,`showing ${s.songs.results.length??""} result${(s.songs.results.length>1?"s":"")??""} `)),p(u,o)};I(_,u=>{s.loading?u(k):u(y,!1)})}var S=d(c,2);bt(S,17,()=>s.songs.results||[],u=>u.id,(u,o)=>{var A=gt(()=>W.info.meta.id==a(o).id);At(u,{get track(){return a(o)},get playing(){return a(A)},onPlay:async()=>{var m;const z=await N.getDownloadableURLs(a(o));if(z.length==0){console.error("no media url found for track");return}const V=(m=z.at(-1))==null?void 0:m.url;W.playback.play({id:a(o).id,title:a(o).title,img:a(o).image.replace("http://","https://"),artist:a(o).more_info.artistMap.primary_artists[0].name||"",album:a(o).more_info.album||""},V)},onAddToQueue:async()=>{var m;const z=await N.getDownloadableURLs(a(o));if(z.length==0){console.error("no media url found for track");return}const V=(m=z.at(-1))==null?void 0:m.url;W.playback.appendQueue({id:a(o).id,title:a(o).title,img:a(o).image.replace("http://","https://"),artist:a(o).more_info.artistMap.primary_artists[0].name||"",album:a(o).more_info.album||""},V)},onMoreActions:()=>{ot(F,O(v).sheets.moreActions=!0,O(v)),ot(F,O(v).select.track=a(o),O(v))}})}),p(t,r)},dt=t=>{var r=qt(),c=d(i(r),2),_=d(i(c));{var k=y=>{var S=Xt(),u=d(i(S)),o=i(u),A=d(u);J(()=>{$(o,`${g().connections.jiosaavn.data.meta.firstname??""}'s`),$(A,`(${g().connections.jiosaavn.data.meta.username??""}) JioSaavn
            Account.`)}),p(y,S)};I(_,y=>{g().connections.jiosaavn.active&&y(k)})}p(t,r)};I(L,t=>{s.songs?t(ct):t(dt,!1)})}J(()=>{Y(R,"style",`display: ${(v().tab==at.search?"block":"none")??""};`),ft(j,`h-[1.3em] max-w-[5%] ${(s.loading?"animate-pulse text-purple-600 dark:text-purple-500 stroke-2":"text-zinc-500")??""}`),X(b,`bg-transparent ring-0 focus:outline-none rounded-md py-0 h-full placeholder:text-black/50 dark:placeholder:text-white/50 ${(a(x)?"w-[90%]":"w-[95%]")??""}`),X(w,`items-center justify-center space-y-0 max-h-[93dvh] h-[93dvh] overflow-y-scroll pb-[20dvh] rounded-t-xl bg-transparent no-scrollbar w-full ${(s.loading?"animate-pulse":"")??""}`),Y(w,"style",`display: ${(v().tab==at.search?"block":"none")??""};`)}),_t(b,()=>a(C),t=>M(C,t)),q(3,B,()=>xt,()=>({duration:500,y:-100})),q(3,w,()=>K,()=>({duration:1e3})),p(n,U),it()}nt(["keyup","click"]);export{Ft as default};
