import{ah as m,O as l,ad as h,a7 as u,ai as w}from"./index-eZM8yE-X.js";function p(e,t){return e===t||(e==null?void 0:e[w])===t}function $(e={},t,a,o){return m(()=>{var s,r;return l(()=>{s=r,r=[],h(()=>{e!==a(...r)&&(t(e,...r),s&&p(a(...s),e)&&t(null,...s))})}),()=>{u(()=>{r&&p(a(...r),e)&&t(null,...r)})}}),e}const c=async(e,t=null)=>{let a=await fetch(e,t?{body:t,method:"POST"}:{method:"GET"}),o=await a.json();if(a.status!=200)throw Error("something went wrong");return o},_={cookieExtractor:(e,t)=>{var s,r;if(!e)return null;const o=e.split(/,(?=\s*\w+=)/).reverse().find(d=>d.trim().startsWith(`${t}=`));return((r=(s=o==null?void 0:o.split(";")[0])==null?void 0:s.split("=")[1])==null?void 0:r.trim())||null}},i={proxy:"https://vercel-cors-anywhere-one.vercel.app/api?url=",host:"",headers:{Host:"www.saavn.com",Accept:"*/*","User-Agent":"Saavn (iPhone)","Accept-Language":"en-IN;q=1.0, ml-IN;q=0.9, hi-IN;q=0.8","Accept-Encoding":"br;q=1.0, gzip;q=0.9, deflate;q=0.8",Connection:"keep-alive",Cookie:"ssid=did_v1_79D9162F-4F77-4B42-8D86-5EC214467860.1741341828.67317; _pl=iphoneapp-"},search:{songs:async e=>await c(`${i.host}${encodeURIComponent(`?p=1&q=${e}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=30&__call=search.getResults`)}`,JSON.stringify({headers:i.headers,method:"GET"}))},auth:{validateEmail:async e=>(await c(`${i.host}${encodeURIComponent(`?_format=json&ctx=iphoneapp&api_version=4&__call=user.isRegisteredEmail&email=${e}`)}`,JSON.stringify({headers:i.headers,method:"GET"}))).status,requestOTP:async(e,t)=>{let a=await c(`${i.host}${encodeURIComponent("?app_version=9.16.1&v=1003&device_type=iPhone_15&_marker=false&_format=json&ctx=iphoneapp&api_version=4&dolby_support=true&is_jio_user=false&r_device=false&network_type=WIFI&network_subtype=wifi&cc=91&__call=user.login")}`,JSON.stringify({headers:{"Content-Type":"application/x-www-form-urlencoded",...i.headers},method:"POST",body:new URLSearchParams({username:e,password:t,user_exist:"True"}).toString()}));return a.status&&a.status=="success"},validateOTP:async(e,t)=>{let a=await fetch(`${i.host}${encodeURIComponent("?app_version=9.16.1&v=1003&device_type=iPhone_15&_marker=false&_format=json&ctx=iphoneapp&api_version=4&dolby_support=true&is_jio_user=false&r_device=false&network_type=WIFI&network_subtype=wifi&cc=91&__call=user.validateOTP")}`,{method:"POST",body:JSON.stringify({headers:{"Content-Type":"application/x-www-form-urlencoded",...i.headers},method:"POST",body:new URLSearchParams({username:e,otp:t}).toString()})}),o=await a.json(),s=_.cookieExtractor(a.headers.get("x-sscookies"),"I");return{...o,sessionToken:s?decodeURIComponent(s):null}}}};i.host=`${i.proxy}${encodeURIComponent("https://www.jiosaavn.com/api.php")}`;const n={host:"https://carter-65v1.onrender.com",api:{room:""},createRoom:async(e,t,a)=>await c(`${n.api.room}/new?id=${e}&username=${t}&room_name=${a}`),joinRoom:async(e,t,a)=>await c(`${n.api.room}/join?id=${e}&room_id=${t}&username=${a}`),infoRoom:async e=>await c(`${n.api.room}/info?room_id=${e}`),listenRoom:async(e,t,a)=>{const o=new EventSource(`${n.api.room}/listen?id=${e}`);o.onmessage=t,o.onerror=a},broadcastRoom:async(e,t,a)=>await c(`${n.api.room}/broadcast?id=${e}&room_id=${t}&msg=${a}`)};n.api.room=`${n.host}/room`;const y=n;export{$ as b,i as m,y as r};
