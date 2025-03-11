import{ai as K,C as E,u as L,aj as I,h as r,af as R,ak as V,al as W,I as $,am as B,w as D,a as h,z as G,t as w,s as f,an as m,c as g,b as v,ao as k}from"./index-Cr94MMBN.js";import{i as x}from"./if-boKicdoq.js";import{b as P}from"./input-CQn7RiSr.js";function H(p=!1){const s=R,t=s.l.u;if(!t)return;let i=()=>W(s.s);if(p){let l=0,a={};const _=$(()=>{let y=!1;const u=s.s;for(const d in u)u[d]!==a[d]&&(a[d]=u[d],y=!0);return y&&l++,l});i=()=>r(_)}t.b.length&&K(()=>{O(s,i),I(t.b)}),E(()=>{const l=L(()=>t.m.map(V));return()=>{for(const a of l)typeof a=="function"&&a()}}),t.a.length&&E(()=>{O(s,i),I(t.a)})}function O(p,s){if(p.l.s)for(const t of p.l.s)r(t);s()}B();var J=w(`<div class="relative"><input type="email" id="email" required placeholder=" " class="peer w-full px-4 py-2 border border-gray-300 dark:border-gray-600
                 rounded-lg outline-none focus:border-blue-500
                 transition-colors bg-transparent text-gray-900 dark:text-white"> <label for="email" class="absolute left-2 top-2 text-gray-500 dark:text-gray-400
                 transform transition-all duration-200
                 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                 peer-focus:-translate-y-4 peer-focus:scale-75 -translate-y-4 scale-75
                 bg-white dark:bg-gray-800 px-2 origin-[0]">Email</label> <button type="button" class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg
                 hover:bg-blue-700 transition-colors dark:bg-blue-500
                 dark:hover:bg-blue-600">Continue</button></div>`),M=w(`<div class="relative"><input type="password" id="password" required placeholder=" " class="peer w-full px-4 py-2 border border-gray-300 dark:border-gray-600
                 rounded-lg outline-none focus:border-blue-500
                 transition-colors bg-transparent text-gray-900 dark:text-white"> <label for="password" class="absolute left-2 top-2 text-gray-500 dark:text-gray-400
                 transform transition-all duration-200
                 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                 peer-focus:-translate-y-4 peer-focus:scale-75 -translate-y-4 scale-75
                 bg-white dark:bg-gray-800 px-2 origin-[0]">Password</label> <button type="button" class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg
                 hover:bg-blue-700 transition-colors dark:bg-blue-500
                 dark:hover:bg-blue-600">Verify Password</button></div>`),N=w(`<div class="relative"><input type="text" id="otp" required placeholder=" " class="peer w-full px-4 py-2 border border-gray-300 dark:border-gray-600
                 rounded-lg outline-none focus:border-blue-500
                 transition-colors bg-transparent text-gray-900 dark:text-white"> <label for="otp" class="absolute left-2 top-2 text-gray-500 dark:text-gray-400
                 transform transition-all duration-200
                 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                 peer-focus:-translate-y-4 peer-focus:scale-75 -translate-y-4 scale-75
                 bg-white dark:bg-gray-800 px-2 origin-[0]">OTP</label> <button type="button" class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg
                 hover:bg-blue-700 transition-colors dark:bg-blue-500
                 dark:hover:bg-blue-600">Login</button></div>`),Q=w('<div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"><form class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-6"><!> <!> <!></form></div>');function Z(p,s){D(s,!1);let t=m(""),i=m(""),l=m(""),a=m("email");function _(e){console.info("waiting for a response"),fetch(`https://www.saavn.com/api.php?app_version=9.16.1&v=1003&device_type=iPhone_15&_marker=false&_format=json&ctx=iphoneapp&api_version=4&dolby_support=false&is_jio_user=false&r_device=false&network_type=WIFI&network_subtype=wifi&cc=91&__call=user.isRegisteredEmail&tz=Asia/Kolkata&email=${e}`).then(o=>o.json()).then(o=>{console.log(o),d()})}function y(e){d()}function u(e){console.log("OTP submitted: ",e)}function d(){r(a)==="email"?v(a,"password"):r(a)==="password"&&v(a,"otp")}H();var j=Q(),T=g(j),S=g(T);{var z=e=>{var o=J(),n=g(o),c=f(n,4);P(n,()=>r(t),b=>v(t,b)),k("click",c,()=>_(r(t))),h(e,o)};x(S,e=>{r(a)==="email"&&e(z)})}var q=f(S,2);{var C=e=>{var o=M(),n=g(o),c=f(n,4);P(n,()=>r(i),b=>v(i,b)),k("click",c,()=>y(r(i))),h(e,o)};x(q,e=>{r(a)==="password"&&e(C)})}var A=f(q,2);{var F=e=>{var o=N(),n=g(o),c=f(n,4);P(n,()=>r(l),b=>v(l,b)),k("click",c,()=>u(r(l))),h(e,o)};x(A,e=>{r(a)==="otp"&&e(F)})}h(p,j),G()}export{Z as default};
