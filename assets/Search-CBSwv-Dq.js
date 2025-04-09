import{d as ot,A as st,p as dt,i as W,s as d,c as i,h as a,g as V,I as X,P as q,a as v,C as nt,b as S,t as p,e as J,a5 as ut,R as G,K as ht,f as O,$ as vt,S as pt,M as et,r as $,N as at,at as ft,E as D,z as mt,T as gt}from"./index-C2GpeuSa.js";import{i as I}from"./if-CwEwfd59.js";import{e as xt}from"./ssh-B88m-mjE.js";import{h as bt}from"./svelte-head-CxAFkQ0-.js";import{b as wt}from"./input-BeEGXlPU.js";import{h as rt,J as E,u as F,V as K}from"./Dash-Dyi5-M5d.js";import{s as _t,h as kt}from"./Sheet-iL9jY6d7.js";import"./services.svelte-BefdHT7D.js";function yt(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}var St=(n,e,l)=>{e.held=!0,e.originX=n.touches[0].clientX,S(l,!0)},Mt=(n,e,l)=>{e.held&&(n.touches[0].clientX-e.originX<-50?S(l,!0):S(l,!1))},Ct=(n,e,l)=>{e.held=!1,S(l,!1)},Lt=(n,e,l)=>{e()||l.onPlay()},zt=(n,e,l)=>{e()||l.onPlay()},jt=p('<div class="flex items-center text-black dark:text-white min-h-[7dvh] w-[40%] space-x-2"><button class="bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full" aria-label="add track to queue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[1.2em]"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd"></path></svg></button> <button class="bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full" aria-label="visit source link"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path></svg></button></div>'),At=p('<div><button><img alt="cover art" class="max-h-[7dvh]" loading="lazy"></button> <button class="flex flex-col overflow-x-hidden -space-y-1 justify-center w-full text-left p-0"><h2><!></h2> <span class="font-base text-[0.7em] text-black/80 dark:text-white/80 pl-2 truncate max-w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[0.7em] inline"><path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"></path></svg> <!></span></button> <!></div>');function It(n,e){st(e,!0);const l=dt(e,"playing",3,!1);let f=W({held:!1,originX:0}),g=J(!1),s=J(!1);var h=At();h.__touchstart=[St,f,g],h.__touchmove=[Mt,f,s],h.__touchend=[Ct,f,g];var x=i(h);x.__click=[Lt,l,e];var z=i(x),Z=d(x,2);Z.__click=[zt,l,e];var R=i(Z),Y=i(R);rt(Y,()=>e.track.title,!1,!1);var H=d(R,2),P=d(i(H),2);rt(P,()=>e.track.subtitle,!1,!1);var U=d(Z,2);{var B=j=>{var b=jt(),Q=i(b);Q.__click=function(...M){var C;(C=e.onAddToQueue)==null||C.apply(this,M)};var N=d(Q,2);N.__click=function(...M){var C;(C=e.onMoreActions)==null||C.apply(this,M)},q(3,b,()=>ut,()=>({axis:"x",duration:100,easing:yt})),v(j,b)};I(U,j=>{a(s)&&j(B)})}V(()=>{X(h,`w-full h-[10dvh] pl-2 min-h-[7dvh] ring-zinc-500 text-black dark:text-white overflow-hidden flex flex-row space-x-2 border-b-[1px] border-black/5 dark:border-white/5 py-2 select-none transition-colors duration-100 ${(a(g)?"bg-black/5 dark:bg-white/5":"bg-transparent")??""}`),X(x,`p-0 m-0 max-w-[20%] my-auto transition-transform duration-200 rounded-[0.5em] overflow-hidden ${(a(g)?"scale-105":"")??""}`),_t(z,"src",e.track.image),X(R,`font-medium text-base max-w-full truncate ${(l()?"text-violet-600 dark:text-violet-500":"")??""}`)}),kt(z),q(3,h,()=>G,()=>({duration:500})),v(n,h),nt()}ot(["touchstart","touchmove","touchend","click"]);var Zt=(n,e)=>S(e,""),Rt=p('<button class="p-0 m-0 h-[75%] max-w-[5%] bg-transparent" aria-label="clear search text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-[1.3em] text-zinc-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd"></path></svg></button>'),Tt=p('<span class="animate-pulse">Loading(proxy -> server).</span>'),Vt=p('<span class="text-[8px] text-black/80 dark:text-white/80"> </span>'),Xt=p(" <!>",1),qt=p('<h2 class="text-black dark:text-white font-medium w-[100dvw] text-[9px] font-mono mt-2 px-2 select-none"><!> <span class="text-[8px] text-black/80 dark:text-white/80 bg-black/5 dark:bg-white/5 p-0.5 rounded-sm">Powered by JioSaavn</span></h2> <!>',1),Jt=p("<span>Carter is connected with <b> </b> </span>"),Pt=p('<div class="px-2"><h1 class="text-black dark:text-white font-semibold text-center mt-[1em] mb-2 text-xl border-b-[1px] border-black/10 dark:border-white/10">🎶 Search for Music!</h1> <p class="text-black/80 dark:text-white/80 text-sm">Find for your favorite songs, playlists, artists and more! <!></p></div>'),Ut=p('<div class="p-2 pb-1 text-black dark:text-white h-[7dvh]"><div class="relative w-full bg-black/5 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 rounded-md flex flex-row items-center justify-center space-x-[0.2ch] text-[16px] h-full px-[1ch]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg> <input type="text" placeholder="find songs &amp; playlists"> <!></div></div> <div><!></div>',1);function Ft(n,e){st(e,!0);const l=ht(),f=()=>at(K,"$ViewInfo",l),g=()=>at(ft,"$config",l);let s=W({loading:!1}),h=J(""),x=J(!1),z=J("");const Z=(t,r=500)=>{let c=null;return(...w)=>{c||(c=setTimeout(()=>{t(...w),c=null},r))}};async function R(t,r,c){const w=Date.now(),_=`cache-${t}`;if(localStorage.getItem(_)){const y=JSON.parse(localStorage.getItem(_));if(y){if(w<y.expiry)return y.data;localStorage.removeItem(_)}}const k=await r();return localStorage.setItem(_,JSON.stringify({data:k,expiry:w+c})),k}const H=Z(()=>{let t=a(h);!t||t.length<3||s.query&&t==s.query||(s.loading=!0,R(`search-${t}`,()=>E.query(t),60*60*1e3).then(r=>{r.results=r.results.map(c=>(c.image=c.image.replace("http://","https://"),c)),s.query=t,s.songs=r,s.loading=!1}))},1e3);var P=Ut();bt(t=>{vt.title="Search - Carter"});var U=O(P),B=i(U),j=i(B),b=d(j,2);b.__keyup=t=>{const r=t.target;if(t.key=="Enter"){r.blur();return}r.value=r.value.replace(/[^a-zA-Z0-9 '-]/g,""),S(h,W(r.value.trim())),a(h)!=""&&(S(x,r.value.length>2),H())};var Q=d(b,2);{var N=t=>{var r=Rt();r.__click=[Zt,z],q(3,r,()=>G,()=>({duration:100})),v(t,r)};I(Q,t=>{a(x)&&t(N)})}var M=d(U,2),C=i(M);{var lt=t=>{var r=qt(),c=O(r),w=i(c);{var _=u=>{var o=Tt();v(u,o)},k=u=>{var o=Xt(),A=O(o),L=d(A);{var T=m=>{var tt=Vt(),ct=i(tt);V(()=>D(ct,`—out of ${s.songs.total??""}`)),v(m,tt)};I(L,m=>{s.songs.total>10&&m(T)})}V(()=>D(A,`showing ${s.songs.results.length??""} result${(s.songs.results.length>1?"s":"")??""} `)),v(u,o)};I(w,u=>{s.loading?u(_):u(k,!1)})}var y=d(c,2);xt(y,17,()=>s.songs.results||[],u=>u.id,(u,o)=>{var A=mt(()=>F.info.meta.id==a(o).id);It(u,{get track(){return a(o)},get playing(){return a(A)},onPlay:async()=>{var m;const L=await E.getDownloadableURLs(a(o));if(L.length==0){console.error("no media url found for track");return}const T=(m=L.at(-1))==null?void 0:m.url;F.playback.play({id:a(o).id,title:a(o).title,img:a(o).image.replace("http://","https://"),artist:a(o).more_info.artistMap.primary_artists[0].name||"",album:a(o).more_info.album||""},T)},onAddToQueue:async()=>{var m;const L=await E.getDownloadableURLs(a(o));if(L.length==0){console.error("no media url found for track");return}const T=(m=L.at(-1))==null?void 0:m.url;F.playback.appendQueue({id:a(o).id,title:a(o).title,img:a(o).image.replace("http://","https://"),artist:a(o).more_info.artistMap.primary_artists[0].name||"",album:a(o).more_info.album||""},T)},onMoreActions:()=>{et(K,$(f).sheets.moreActions=!0,$(f)),et(K,$(f).select.track=a(o),$(f))}})}),v(t,r)},it=t=>{var r=Pt(),c=d(i(r),2),w=d(i(c));{var _=k=>{var y=Jt(),u=d(i(y)),o=i(u),A=d(u);V(()=>{D(o,`${g().connections.jiosaavn.data.meta.firstname??""}'s`),D(A,`(${g().connections.jiosaavn.data.meta.username??""}) JioSaavn
            Account.`)}),v(k,y)};I(w,k=>{g().connections.jiosaavn.active&&k(_)})}v(t,r)};I(C,t=>{s.songs?t(lt):t(it,!1)})}V(()=>{pt(j,`h-[1.3em] max-w-[5%] ${(s.loading?"animate-pulse text-purple-600 dark:text-purple-500 stroke-2":"text-zinc-500")??""}`),X(b,`bg-transparent ring-0 focus:outline-none rounded-md py-0 h-full placeholder:text-black/50 dark:placeholder:text-white/50 ${(a(x)?"w-[90%]":"w-[95%]")??""}`),X(M,`items-center justify-center space-y-0 max-h-[93dvh] h-[93dvh] overflow-y-scroll pb-[20dvh] rounded-t-xl bg-transparent no-scrollbar w-full ${(s.loading?"animate-pulse":"")??""}`)}),wt(b,()=>a(z),t=>S(z,t)),q(3,B,()=>gt,()=>({duration:500,y:-100})),q(3,M,()=>G,()=>({duration:1e3})),v(n,P),nt()}ot(["keyup","click"]);export{Ft as default};
