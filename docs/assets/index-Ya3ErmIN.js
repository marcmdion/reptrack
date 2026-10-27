(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Sm="modulepreload",Rm=function(n){return"/reptrack/"+n},Ll={},Fh=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(t.map(d=>{if(d=Rm(d),d in Ll)return;Ll[d]=!0;const f=d.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Sm,f||(g.as="script"),g.crossOrigin="",g.href=d,u&&g.setAttribute("nonce",u),document.head.appendChild(g),f)return new Promise((T,C)=>{g.addEventListener("load",T),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};function Cm(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:a}=n;let c,u;const d=async(m=!0)=>{await u};async function f(){if("serviceWorker"in navigator){if(c=await Fh(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/reptrack/sw.js",{scope:"/reptrack/",type:"classic"})).catch(m=>{a==null||a(m)}),!c)return;c.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),c.addEventListener("installed",m=>{m.isUpdate||r==null||r()}),c.register({immediate:e}).then(m=>{i?i("/reptrack/sw.js",m):s==null||s(m)}).catch(m=>{a==null||a(m)})}}return u=f(),d}const Pm=()=>{};var Ol={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},km=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let g=(c&15)<<2|d>>6,T=d&63;u||(T=64,a||(g=64)),r.push(t[f],t[m],t[g],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Uh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):km(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new xm;const g=i<<2|c>>4;if(r.push(g),d!==64){const T=c<<4&240|d>>2;if(r.push(T),m!==64){const C=d<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dm=function(n){const e=Uh(n);return Bh.encodeByteArray(e,!0)},Xs=function(n){return Dm(n).replace(/\./g,"")},$h=function(n){try{return Bh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=()=>Nm().__FIREBASE_DEFAULTS__,Lm=()=>{if(typeof process>"u"||typeof Ol>"u")return;const n=Ol.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Om=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$h(n[1]);return e&&JSON.parse(e)},Ai=()=>{try{return Pm()||Vm()||Lm()||Om()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jh=n=>{var e,t;return(t=(e=Ai())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Mm=n=>{const e=jh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},qh=()=>{var n;return(n=Ai())===null||n===void 0?void 0:n.config},Wh=n=>{var e;return(e=Ai())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xs(JSON.stringify(t)),Xs(JSON.stringify(a)),""].join(".")}const xr={};function Bm(){const n={prod:[],emulator:[]};for(const e of Object.keys(xr))xr[e]?n.emulator.push(e):n.prod.push(e);return n}function $m(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ml=!1;function zh(n,e){if(typeof window>"u"||typeof document>"u"||!Gn(window.location.host)||xr[n]===e||xr[n]||Ml)return;xr[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Bm().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Ml=!0,a()},g}function f(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=$m(r),T=t("text"),C=document.getElementById(T)||document.createElement("span"),D=t("learnmore"),x=document.getElementById(D)||document.createElement("a"),V=t("preprendIcon"),F=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const q=g.element;c(q),f(x,D);const J=d();u(F,V),q.append(F,C,x,J),document.body.appendChild(q)}i?(C.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function qm(){var n;const e=(n=Ai())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gm(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Km(){return!qm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qm(){try{return typeof indexedDB=="object"}catch{return!1}}function Jm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="FirebaseError";class bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ym,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Xm(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new bt(s,c,r)}}function Xm(n,e){return n.replace(Zm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Zm=/\{\$([^}]+)}/g;function eg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _n(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Fl(i)&&Fl(a)){if(!_n(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Fl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function br(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ar(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function tg(n,e){const t=new ng(n,e);return t.subscribe.bind(t)}class ng{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");rg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=So),s.error===void 0&&(s.error=So),s.complete===void 0&&(s.complete=So);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function So(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n){return n&&n._delegate?n._delegate:n}class yn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Fm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(og(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ig(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ig(n){return n===cn?void 0:n}function og(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const cg={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},lg=G.INFO,ug={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},hg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ug[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=lg,this._logHandler=hg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const dg=(n,e)=>e.some(t=>n instanceof t);let Ul,Bl;function fg(){return Ul||(Ul=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pg(){return Bl||(Bl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gh=new WeakMap,zo=new WeakMap,Kh=new WeakMap,Ro=new WeakMap,Na=new WeakMap;function mg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Bt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Gh.set(t,n)}).catch(()=>{}),Na.set(e,n),e}function gg(n){if(zo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});zo.set(n,e)}let Go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _g(n){Go=n(Go)}function yg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Co(this),e,...t);return Kh.set(r,e.sort?e.sort():[e]),Bt(r)}:pg().includes(n)?function(...e){return n.apply(Co(this),e),Bt(Gh.get(this))}:function(...e){return Bt(n.apply(Co(this),e))}}function vg(n){return typeof n=="function"?yg(n):(n instanceof IDBTransaction&&gg(n),dg(n,fg())?new Proxy(n,Go):n)}function Bt(n){if(n instanceof IDBRequest)return mg(n);if(Ro.has(n))return Ro.get(n);const e=vg(n);return e!==n&&(Ro.set(n,e),Na.set(e,n)),e}const Co=n=>Na.get(n);function Eg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Bt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Bt(a.result),u.oldVersion,u.newVersion,Bt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const wg=["get","getKey","getAll","getAllKeys","count"],Ig=["put","add","delete","clear"],Po=new Map;function $l(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Po.get(e))return Po.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Ig.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wg.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Po.set(e,i),i}_g(n=>({...n,get:(e,t,r)=>$l(e,t)||n.get(e,t,r),has:(e,t)=>!!$l(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function bg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ko="@firebase/app",jl="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Da("@firebase/app"),Ag="@firebase/app-compat",Sg="@firebase/analytics-compat",Rg="@firebase/analytics",Cg="@firebase/app-check-compat",Pg="@firebase/app-check",kg="@firebase/auth",xg="@firebase/auth-compat",Dg="@firebase/database",Ng="@firebase/data-connect",Vg="@firebase/database-compat",Lg="@firebase/functions",Og="@firebase/functions-compat",Mg="@firebase/installations",Fg="@firebase/installations-compat",Ug="@firebase/messaging",Bg="@firebase/messaging-compat",$g="@firebase/performance",jg="@firebase/performance-compat",qg="@firebase/remote-config",Wg="@firebase/remote-config-compat",Hg="@firebase/storage",zg="@firebase/storage-compat",Gg="@firebase/firestore",Kg="@firebase/ai",Qg="@firebase/firestore-compat",Jg="firebase",Yg="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="[DEFAULT]",Xg={[Ko]:"fire-core",[Ag]:"fire-core-compat",[Rg]:"fire-analytics",[Sg]:"fire-analytics-compat",[Pg]:"fire-app-check",[Cg]:"fire-app-check-compat",[kg]:"fire-auth",[xg]:"fire-auth-compat",[Dg]:"fire-rtdb",[Ng]:"fire-data-connect",[Vg]:"fire-rtdb-compat",[Lg]:"fire-fn",[Og]:"fire-fn-compat",[Mg]:"fire-iid",[Fg]:"fire-iid-compat",[Ug]:"fire-fcm",[Bg]:"fire-fcm-compat",[$g]:"fire-perf",[jg]:"fire-perf-compat",[qg]:"fire-rc",[Wg]:"fire-rc-compat",[Hg]:"fire-gcs",[zg]:"fire-gcs-compat",[Gg]:"fire-fst",[Qg]:"fire-fst-compat",[Kg]:"fire-vertex","fire-js":"fire-js",[Jg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Map,Zg=new Map,Jo=new Map;function ql(n,e){try{n.container.addComponent(e)}catch(t){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $n(n){const e=n.name;if(Jo.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;Jo.set(e,n);for(const t of Zs.values())ql(t,n);for(const t of Zg.values())ql(t,n);return!0}function Va(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new es("app","Firebase",e_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=Yg;function Qh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qo,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(t||(t=qh()),!t)throw $t.create("no-options");const i=Zs.get(s);if(i){if(_n(t,i.options)&&_n(r,i.config))return i;throw $t.create("duplicate-app",{appName:s})}const a=new ag(s);for(const u of Jo.values())a.addComponent(u);const c=new t_(t,r,a);return Zs.set(s,c),c}function Jh(n=Qo){const e=Zs.get(n);if(!e&&n===Qo&&qh())return Qh();if(!e)throw $t.create("no-app",{appName:n});return e}function jt(n,e,t){var r;let s=(r=Xg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(c.join(" "));return}$n(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firebase-heartbeat-database",r_=1,$r="firebase-heartbeat-store";let ko=null;function Yh(){return ko||(ko=Eg(n_,r_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($r)}catch(t){console.warn(t)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),ko}async function s_(n){try{const t=(await Yh()).transaction($r),r=await t.objectStore($r).get(Xh(n));return await t.done,r}catch(e){if(e instanceof bt)vt.warn(e.message);else{const t=$t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(t.message)}}}async function Wl(n,e){try{const r=(await Yh()).transaction($r,"readwrite");await r.objectStore($r).put(e,Xh(n)),await r.done}catch(t){if(t instanceof bt)vt.warn(t.message);else{const r=$t.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vt.warn(r.message)}}}function Xh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=1024,o_=30;class a_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new l_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>o_){const a=u_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hl(),{heartbeatsToSend:r,unsentEntries:s}=c_(this._heartbeatsCache.heartbeats),i=Xs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return vt.warn(t),""}}}function Hl(){return new Date().toISOString().substring(0,10)}function c_(n,e=i_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),zl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class l_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qm()?Jm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await s_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zl(n){return Xs(JSON.stringify({version:2,heartbeats:n})).length}function u_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(n){$n(new yn("platform-logger",e=>new Tg(e),"PRIVATE")),$n(new yn("heartbeat",e=>new a_(e),"PRIVATE")),jt(Ko,jl,n),jt(Ko,jl,"esm2017"),jt("fire-js","")}h_("");function La(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Zh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d_=Zh,ed=new es("auth","Firebase",Zh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Da("@firebase/auth");function f_(n,...e){ei.logLevel<=G.WARN&&ei.warn(`Auth (${Kn}): ${n}`,...e)}function $s(n,...e){ei.logLevel<=G.ERROR&&ei.error(`Auth (${Kn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,...e){throw Oa(n,...e)}function nt(n,...e){return Oa(n,...e)}function td(n,e,t){const r=Object.assign(Object.assign({},d_()),{[e]:t});return new es("auth","Firebase",r).create(e,{appName:n.name})}function gt(n){return td(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ed.create(n,...e)}function B(n,e,...t){if(!n)throw Oa(e,...t)}function pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $s(e),new Error(e)}function Et(n,e){n||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function p_(){return Gl()==="http:"||Gl()==="https:"}function Gl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p_()||Hm()||"connection"in navigator)?navigator.onLine:!0}function g_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.shortDelay=e,this.longDelay=t,Et(t>e,"Short delay should be less than long delay!"),this.isMobile=jm()||zm()}get(){return m_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n,e){Et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],v_=new ns(3e4,6e4);function At(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function St(n,e,t,r,s={}){return rd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ts(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Wm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Gn(n.emulatorConfig.host)&&(d.credentials="include"),nd.fetch()(await sd(n,n.config.apiHost,t,c),d)})}async function rd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},__),e);try{const s=new w_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ds(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ds(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ds(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ds(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw td(n,f,d);Je(n,f)}}catch(s){if(s instanceof bt)throw s;Je(n,"network-request-failed",{message:String(s)})}}async function rs(n,e,t,r,s={}){const i=await St(n,e,t,r,s);return"mfaPendingCredential"in i&&Je(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function sd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Ma(n.config,s):`${n.config.apiScheme}://${s}`;return y_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function E_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class w_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),v_.get())})}}function Ds(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=nt(n,e,r);return s.customData._tokenResponse=t,s}function Kl(n){return n!==void 0&&n.enterprise!==void 0}class I_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return E_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function T_(n,e){return St(n,"GET","/v2/recaptchaConfig",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(n,e){return St(n,"POST","/v1/accounts:delete",e)}async function ti(n,e){return St(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A_(n,e=!1){const t=me(n),r=await t.getIdToken(e),s=Fa(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Dr(xo(s.auth_time)),issuedAtTime:Dr(xo(s.iat)),expirationTime:Dr(xo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xo(n){return Number(n)*1e3}function Fa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return $s("JWT malformed, contained fewer than 3 sections"),null;try{const s=$h(t);return s?JSON.parse(s):($s("Failed to decode base64 JWT payload"),null)}catch(s){return $s("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ql(n){const e=Fa(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bt&&S_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function S_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dr(this.lastLoginAt),this.creationTime=Dr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(n){var e;const t=n.auth,r=await n.getIdToken(),s=await jr(n,ti(t,{idToken:r}));B(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?id(i.providerUserInfo):[],c=P_(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=u?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Xo(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function C_(n){const e=me(n);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function id(n){return n.map(e=>{var{providerId:t}=e,r=La(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(n,e){const t=await rd(n,{},async()=>{const r=ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await sd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Gn(n.emulatorConfig.host)&&(u.credentials="include"),nd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function x_(n,e){return St(n,"POST","/v2/accounts:revokeToken",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ql(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=Ql(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await k_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Ln;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qe{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=La(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await jr(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return A_(this,e)}reload(){return C_(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(gt(this.auth));const e=await this.getIdToken();return await jr(this,b_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:J,isAnonymous:$e,providerData:le,stsTokenManager:w}=t;B(q&&w,e,"internal-error");const _=Ln.fromJSON(this.name,w);B(typeof q=="string",e,"internal-error"),Nt(m,e.name),Nt(g,e.name),B(typeof J=="boolean",e,"internal-error"),B(typeof $e=="boolean",e,"internal-error"),Nt(T,e.name),Nt(C,e.name),Nt(D,e.name),Nt(x,e.name),Nt(V,e.name),Nt(F,e.name);const v=new Qe({uid:q,auth:e,email:g,emailVerified:J,displayName:m,isAnonymous:$e,photoURL:C,phoneNumber:T,tenantId:D,stsTokenManager:_,createdAt:V,lastLoginAt:F});return le&&Array.isArray(le)&&(v.providerData=le.map(E=>Object.assign({},E))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ln;s.updateFromServerResponse(t);const i=new Qe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ni(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?id(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ln;c.updateFromIdToken(r);const u=new Qe({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Map;function mt(n){Et(n instanceof Function,"Expected a class definition");let e=Jl.get(n);return e?(Et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Jl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}od.type="NONE";const Yl=od;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n,e,t){return`firebase:${n}:${e}:${t}`}class On{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=js(this.userKey,s.apiKey,i),this.fullPersistenceKey=js("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ti(this.auth,{idToken:e}).catch(()=>{});return t?Qe._fromGetAccountInfoResponse(this.auth,t,e):null}return Qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new On(mt(Yl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||mt(Yl);const a=js(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){let m;if(typeof f=="string"){const g=await ti(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Qe._fromGetAccountInfoResponse(e,g,f)}else m=Qe._fromJSON(e,f);d!==i&&(c=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new On(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new On(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ud(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ad(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dd(e))return"Blackberry";if(fd(e))return"Webos";if(cd(e))return"Safari";if((e.includes("chrome/")||ld(e))&&!e.includes("edge/"))return"Chrome";if(hd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ad(n=Pe()){return/firefox\//i.test(n)}function cd(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ld(n=Pe()){return/crios\//i.test(n)}function ud(n=Pe()){return/iemobile/i.test(n)}function hd(n=Pe()){return/android/i.test(n)}function dd(n=Pe()){return/blackberry/i.test(n)}function fd(n=Pe()){return/webos/i.test(n)}function Ua(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function D_(n=Pe()){var e;return Ua(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function N_(){return Gm()&&document.documentMode===10}function pd(n=Pe()){return Ua(n)||hd(n)||fd(n)||dd(n)||/windows phone/i.test(n)||ud(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n,e=[]){let t;switch(n){case"Browser":t=Xl(Pe());break;case"Worker":t=`${Xl(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(n,e={}){return St(n,"GET","/v2/passwordPolicy",At(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=6;class M_{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:O_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zl(this),this.idTokenSubscription=new Zl(this),this.beforeStateQueue=new V_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ed,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await On.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ti(this,{idToken:e}),r=await Qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(qe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ni(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(gt(this));const t=e?me(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await L_(this),t=new M_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new es("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await x_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mt(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await On.create(this,[mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=md(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&f_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zt(n){return me(n)}class Zl{constructor(e){this.auth=e,this.observer=null,this.addObserver=tg(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function U_(n){Si=n}function gd(n){return Si.loadJS(n)}function B_(){return Si.recaptchaEnterpriseScript}function $_(){return Si.gapiScript}function j_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class q_{constructor(){this.enterprise=new W_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class W_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const H_="recaptcha-enterprise",_d="NO_RECAPTCHA";class z_{constructor(e){this.type=H_,this.auth=Zt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{T_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new I_(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Kl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(_d)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new q_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Kl(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=B_();u.length!==0&&(u+=c),gd(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function eu(n,e,t,r=!1,s=!1){const i=new z_(n);let a;if(s)a=_d;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ri(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await eu(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await eu(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n,e){const t=Va(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(_n(i,e??{}))return s;Je(s,"already-initialized")}return t.initialize({options:e})}function K_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(mt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Q_(n,e,t){const r=Zt(n);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=yd(e),{host:a,port:c}=J_(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(_n(d,r.config.emulator)&&_n(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Gn(a)?(Hh(`${i}//${a}${u}`),zh("Auth",!0)):Y_()}function yd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function J_(n){const e=yd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:tu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:tu(a)}}}function tu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Y_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}async function X_(n,e){return St(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(n,e){return rs(n,"POST","/v1/accounts:signInWithPassword",At(n,e))}async function ey(n,e){return St(n,"POST","/v1/accounts:sendOobCode",At(n,e))}async function ty(n,e){return ey(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(n,e){return rs(n,"POST","/v1/accounts:signInWithEmailLink",At(n,e))}async function ry(n,e){return rs(n,"POST","/v1/accounts:signInWithEmailLink",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Ba{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new qr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new qr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ri(e,t,"signInWithPassword",Z_);case"emailLink":return ny(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ri(e,r,"signUpPassword",X_);case"emailLink":return ry(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(n,e){return rs(n,"POST","/v1/accounts:signInWithIdp",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="http://localhost";class vn extends Ba{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=La(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new vn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Mn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Mn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mn(e,t)}buildRequest(){const e={requestUri:sy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ts(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oy(n){const e=br(Ar(n)).link,t=e?br(Ar(e)).deep_link_id:null,r=br(Ar(n)).deep_link_id;return(r?br(Ar(r)).link:null)||r||t||e||n}class $a{constructor(e){var t,r,s,i,a,c;const u=br(Ar(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=iy((s=u.mode)!==null&&s!==void 0?s:null);B(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=oy(e);try{return new $a(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(e,t){return qr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=$a.parseLink(t);return B(r,"argument-error"),qr._fromEmailAndCode(e,r.code,r.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends vd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends ss{constructor(){super("facebook.com")}static credential(e){return vn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ot.credential(t,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends ss{constructor(){super("github.com")}static credential(e){return vn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends ss{constructor(){super("twitter.com")}static credential(e,t){return vn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ft.credential(t,r)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ay(n,e){return rs(n,"POST","/v1/accounts:signUp",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Qe._fromIdTokenResponse(e,r,s),a=nu(r);return new En({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=nu(r);return new En({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function nu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends bt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,si.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new si(e,t,r,s)}}function Ed(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?si._fromErrorAndOperation(n,i,e,r):i})}async function cy(n,e,t=!1){const r=await jr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return En._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(n,e,t=!1){const{auth:r}=n;if(qe(r.app))return Promise.reject(gt(r));const s="reauthenticate";try{const i=await jr(n,Ed(r,s,e,n),t);B(i.idToken,r,"internal-error");const a=Fa(i.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),En._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(n,e,t=!1){if(qe(n.app))return Promise.reject(gt(n));const r="signIn",s=await Ed(n,r,e),i=await En._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function uy(n,e){return wd(Zt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(n){const e=Zt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hy(n,e,t){const r=Zt(n);await ri(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",ty)}async function dy(n,e,t){if(qe(n.app))return Promise.reject(gt(n));const r=Zt(n),a=await ri(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ay).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Id(n),u}),c=await En._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function fy(n,e,t){return qe(n.app)?Promise.reject(gt(n)):uy(me(n),Qn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Id(n),r})}function py(n,e,t,r){return me(n).onIdTokenChanged(e,t,r)}function my(n,e,t){return me(n).beforeAuthStateChanged(e,t)}function gy(n,e,t,r){return me(n).onAuthStateChanged(e,t,r)}function _y(n){return me(n).signOut()}const ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ii,"1"),this.storage.removeItem(ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=1e3,vy=10;class bd extends Td{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);N_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bd.type="LOCAL";const Ey=bd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends Td{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ad.type="SESSION";const Sd=Ad;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ri(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await wy(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ri.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=ja("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function Ty(n){rt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function by(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ay(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Sy(){return Rd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="firebaseLocalStorageDb",Ry=1,oi="firebaseLocalStorage",Pd="fbase_key";class is{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ci(n,e){return n.transaction([oi],e?"readwrite":"readonly").objectStore(oi)}function Cy(){const n=indexedDB.deleteDatabase(Cd);return new is(n).toPromise()}function Zo(){const n=indexedDB.open(Cd,Ry);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(oi,{keyPath:Pd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(oi)?e(r):(r.close(),await Cy(),e(await Zo()))})})}async function ru(n,e,t){const r=Ci(n,!0).put({[Pd]:e,value:t});return new is(r).toPromise()}async function Py(n,e){const t=Ci(n,!1).get(e),r=await new is(t).toPromise();return r===void 0?null:r.value}function su(n,e){const t=Ci(n,!0).delete(e);return new is(t).toPromise()}const ky=800,xy=3;class kd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>xy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ri._getInstance(Sy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await by(),!this.activeServiceWorker)return;this.sender=new Iy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ay()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zo();return await ru(e,ii,"1"),await su(e,ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ru(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Py(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>su(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ci(s,!1).getAll();return new is(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ky)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kd.type="LOCAL";const Dy=kd;new ns(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(n,e){return e?mt(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Ba{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vy(n){return wd(n.auth,new qa(n),n.bypassAuthState)}function Ly(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),ly(t,new qa(n),n.bypassAuthState)}async function Oy(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),cy(t,new qa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vy;case"linkViaPopup":case"linkViaRedirect":return Oy;case"reauthViaPopup":case"reauthViaRedirect":return Ly;default:Je(this.auth,"internal-error")}}resolve(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=new ns(2e3,1e4);class Nn extends xd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const e=ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,My.get())};e()}}Nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="pendingRedirect",qs=new Map;class Uy extends xd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=qs.get(this.auth._key());if(!e){try{const r=await By(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}qs.set(this.auth._key(),e)}return this.bypassAuthState||qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function By(n,e){const t=qy(e),r=jy(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function $y(n,e){qs.set(n._key(),e)}function jy(n){return mt(n._redirectPersistence)}function qy(n){return js(Fy,n.config.apiKey,n.name)}async function Wy(n,e,t=!1){if(qe(n.app))return Promise.reject(gt(n));const r=Zt(n),s=Ny(r,e),a=await new Uy(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=600*1e3;class zy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Dd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hy&&this.cachedEventUids.clear(),this.cachedEventUids.has(iu(e))}saveEventToCache(e){this.cachedEventUids.add(iu(e)),this.lastProcessedEventTime=Date.now()}}function iu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Dd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(n,e={}){return St(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jy=/^https?/;async function Yy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ky(n);for(const t of e)try{if(Xy(t))return}catch{}Je(n,"unauthorized-domain")}function Xy(n){const e=Yo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Jy.test(t))return!1;if(Qy.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new ns(3e4,6e4);function ou(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ev(n){return new Promise((e,t)=>{var r,s,i;function a(){ou(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ou(),t(nt(n,"network-request-failed"))},timeout:Zy.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)a();else{const c=j_("iframefcb");return rt()[c]=()=>{gapi.load?a():t(nt(n,"network-request-failed"))},gd(`${$_()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Ws=null,e})}let Ws=null;function tv(n){return Ws=Ws||ev(n),Ws}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new ns(5e3,15e3),rv="__/auth/iframe",sv="emulator/auth/iframe",iv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ov=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function av(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ma(e,sv):`https://${n.config.authDomain}/${rv}`,r={apiKey:e.apiKey,appName:n.name,v:Kn},s=ov.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ts(r).slice(1)}`}async function cv(n){const e=await tv(n),t=rt().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:av(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=nt(n,"network-request-failed"),c=rt().setTimeout(()=>{i(a)},nv.get());function u(){rt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uv=500,hv=600,dv="_blank",fv="http://localhost";class au{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pv(n,e,t,r=uv,s=hv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},lv),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Pe().toLowerCase();t&&(c=ld(d)?dv:t),ad(d)&&(e=e||fv,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[T,C])=>`${g}${T}=${C},`,"");if(D_(d)&&c!=="_self")return mv(e||"",c),new au(null);const m=window.open(e||"",c,f);B(m,n,"popup-blocked");try{m.focus()}catch{}return new au(m)}function mv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="__/auth/handler",_v="emulator/auth/handler",yv=encodeURIComponent("fac");async function cu(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Kn,eventId:s};if(e instanceof vd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",eg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof ss){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${yv}=${encodeURIComponent(u)}`:"";return`${vv(n)}?${ts(c).slice(1)}${d}`}function vv({config:n}){return n.emulator?Ma(n,_v):`https://${n.authDomain}/${gv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="webStorageSupport";class Ev{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sd,this._completeRedirectFn=Wy,this._overrideRedirectResult=$y}async _openPopup(e,t,r,s){var i;Et((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await cu(e,t,r,Yo(),s);return pv(e,a,ja())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await cu(e,t,r,Yo(),s);return Ty(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Et(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await cv(e),r=new zy(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Do,{type:Do},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Do];a!==void 0&&t(!!a),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pd()||cd()||Ua()}}const wv=Ev;var lu="@firebase/auth",uu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bv(n){$n(new yn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:md(n)},d=new F_(r,s,i,u);return K_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$n(new yn("auth-internal",e=>{const t=Zt(e.getProvider("auth").getImmediate());return(r=>new Iv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(lu,uu,Tv(n)),jt(lu,uu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=300,Sv=Wh("authIdTokenMaxAge")||Av;let hu=null;const Rv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Sv)return;const s=t==null?void 0:t.token;hu!==s&&(hu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cv(n=Jh()){const e=Va(n,"auth");if(e.isInitialized())return e.getImmediate();const t=G_(n,{popupRedirectResolver:wv,persistence:[Dy,Ey,Sd]}),r=Wh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Rv(i.toString());my(t,a,()=>a(t.currentUser)),py(t,c=>a(c))}}const s=jh("auth");return s&&Q_(t,`http://${s}`),t}function Pv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}U_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=nt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Pv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bv("Browser");var kv="firebase",xv="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(kv,xv,"app");var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qt,Nd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function v(){}v.prototype=_.prototype,w.D=_.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(E,I,A){for(var y=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)y[ut-2]=arguments[ut];return _.prototype[I].apply(E,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,v){v||(v=0);var E=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)E[I]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(I=0;16>I;++I)E[I]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=w.g[0],v=w.g[1],I=w.g[2];var A=w.g[3],y=_+(A^v&(I^A))+E[0]+3614090360&4294967295;_=v+(y<<7&4294967295|y>>>25),y=A+(I^_&(v^I))+E[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=I+(v^A&(_^v))+E[2]+606105819&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(_^I&(A^_))+E[3]+3250441966&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(A^v&(I^A))+E[4]+4118548399&4294967295,_=v+(y<<7&4294967295|y>>>25),y=A+(I^_&(v^I))+E[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=I+(v^A&(_^v))+E[6]+2821735955&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(_^I&(A^_))+E[7]+4249261313&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(A^v&(I^A))+E[8]+1770035416&4294967295,_=v+(y<<7&4294967295|y>>>25),y=A+(I^_&(v^I))+E[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=I+(v^A&(_^v))+E[10]+4294925233&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(_^I&(A^_))+E[11]+2304563134&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(A^v&(I^A))+E[12]+1804603682&4294967295,_=v+(y<<7&4294967295|y>>>25),y=A+(I^_&(v^I))+E[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=I+(v^A&(_^v))+E[14]+2792965006&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(_^I&(A^_))+E[15]+1236535329&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(I^A&(v^I))+E[1]+4129170786&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(_^v))+E[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(A^_))+E[11]+643717713&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(I^A))+E[0]+3921069994&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^A&(v^I))+E[5]+3593408605&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(_^v))+E[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(A^_))+E[15]+3634488961&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(I^A))+E[4]+3889429448&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^A&(v^I))+E[9]+568446438&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(_^v))+E[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(A^_))+E[3]+4107603335&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(I^A))+E[8]+1163531501&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^A&(v^I))+E[13]+2850285829&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(_^v))+E[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(A^_))+E[7]+1735328473&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(I^A))+E[12]+2368359562&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(v^I^A)+E[5]+4294588738&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^I)+E[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=I+(A^_^v)+E[11]+1839030562&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^_)+E[14]+4259657740&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^A)+E[1]+2763975236&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^I)+E[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=I+(A^_^v)+E[7]+4139469664&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^_)+E[10]+3200236656&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^A)+E[13]+681279174&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^I)+E[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=I+(A^_^v)+E[3]+3572445317&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^_)+E[6]+76029189&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^A)+E[9]+3654602809&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^I)+E[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=I+(A^_^v)+E[15]+530742520&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^_)+E[2]+3299628645&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(I^(v|~A))+E[0]+4096336452&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~I))+E[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=I+(_^(A|~v))+E[14]+2878612391&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~_))+E[5]+4237533241&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~A))+E[12]+1700485571&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~I))+E[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=I+(_^(A|~v))+E[10]+4293915773&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~_))+E[1]+2240044497&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~A))+E[8]+1873313359&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~I))+E[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=I+(_^(A|~v))+E[6]+2734768916&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~_))+E[13]+1309151649&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~A))+E[4]+4149444226&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~I))+E[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=I+(_^(A|~v))+E[2]+718787259&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~_))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var v=_-this.blockSize,E=this.B,I=this.h,A=0;A<_;){if(I==0)for(;A<=v;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<_;)if(E[I++]=w.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<_;)if(E[I++]=w[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var v=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=v&255,v/=256;for(this.u(w),w=Array(16),_=v=0;4>_;++_)for(var E=0;32>E;E+=8)w[v++]=this.g[_]>>>E&255;return w};function i(w,_){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=_(w)}function a(w,_){this.h=_;for(var v=[],E=!0,I=w.length-1;0<=I;I--){var A=w[I]|0;E&&A==_||(v[I]=A,E=!1)}this.g=v}var c={};function u(w){return-128<=w&&128>w?i(w,function(_){return new a([_|0],0>_?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return x(d(-w));for(var _=[],v=1,E=0;w>=v;E++)_[E]=w/v|0,v*=4294967296;return new a(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return x(f(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(_,8)),E=m,I=0;I<w.length;I+=8){var A=Math.min(8,w.length-I),y=parseInt(w.substring(I,I+A),_);8>A?(A=d(Math.pow(_,A)),E=E.j(A).add(d(y))):(E=E.j(v),E=E.add(d(y)))}return E}var m=u(0),g=u(1),T=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-x(this).m();for(var w=0,_=1,v=0;v<this.g.length;v++){var E=this.i(v);w+=(0<=E?E:4294967296+E)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(D(this))return"-"+x(this).toString(w);for(var _=d(Math.pow(w,6)),v=this,E="";;){var I=J(v,_).g;v=V(v,I.j(_));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=I,C(v))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function D(w){return w.h==-1}n.l=function(w){return w=V(this,w),D(w)?-1:C(w)?0:1};function x(w){for(var _=w.g.length,v=[],E=0;E<_;E++)v[E]=~w.g[E];return new a(v,~w.h).add(g)}n.abs=function(){return D(this)?x(this):this},n.add=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0,I=0;I<=_;I++){var A=E+(this.i(I)&65535)+(w.i(I)&65535),y=(A>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);E=y>>>16,A&=65535,y&=65535,v[I]=y<<16|A}return new a(v,v[v.length-1]&-2147483648?-1:0)};function V(w,_){return w.add(x(_))}n.j=function(w){if(C(this)||C(w))return m;if(D(this))return D(w)?x(this).j(x(w)):x(x(this).j(w));if(D(w))return x(this.j(x(w)));if(0>this.l(T)&&0>w.l(T))return d(this.m()*w.m());for(var _=this.g.length+w.g.length,v=[],E=0;E<2*_;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<w.g.length;I++){var A=this.i(E)>>>16,y=this.i(E)&65535,ut=w.i(I)>>>16,or=w.i(I)&65535;v[2*E+2*I]+=y*or,F(v,2*E+2*I),v[2*E+2*I+1]+=A*or,F(v,2*E+2*I+1),v[2*E+2*I+1]+=y*ut,F(v,2*E+2*I+1),v[2*E+2*I+2]+=A*ut,F(v,2*E+2*I+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new a(v,0)};function F(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function q(w,_){this.g=w,this.h=_}function J(w,_){if(C(_))throw Error("division by zero");if(C(w))return new q(m,m);if(D(w))return _=J(x(w),_),new q(x(_.g),x(_.h));if(D(_))return _=J(w,x(_)),new q(x(_.g),_.h);if(30<w.g.length){if(D(w)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,E=_;0>=E.l(w);)v=$e(v),E=$e(E);var I=le(v,1),A=le(E,1);for(E=le(E,2),v=le(v,2);!C(E);){var y=A.add(E);0>=y.l(w)&&(I=I.add(v),A=y),E=le(E,1),v=le(v,1)}return _=V(w,I.j(_)),new q(I,_)}for(I=m;0<=w.l(_);){for(v=Math.max(1,Math.floor(w.m()/_.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(v),y=A.j(_);D(y)||0<y.l(w);)v-=E,A=d(v),y=A.j(_);C(A)&&(A=g),I=I.add(A),w=V(w,y)}return new q(I,w)}n.A=function(w){return J(this,w).h},n.and=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)&w.i(E);return new a(v,this.h&w.h)},n.or=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)|w.i(E);return new a(v,this.h|w.h)},n.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)^w.i(E);return new a(v,this.h^w.h)};function $e(w){for(var _=w.g.length+1,v=[],E=0;E<_;E++)v[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(v,w.h)}function le(w,_){var v=_>>5;_%=32;for(var E=w.g.length-v,I=[],A=0;A<E;A++)I[A]=0<_?w.i(A+v)>>>_|w.i(A+v+1)<<32-_:w.i(A+v);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Nd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,qt=a}).apply(typeof du<"u"?du:typeof self<"u"?self:typeof window<"u"?window:{});var Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vd,Sr,Ld,Hs,ea,Od,Md,Fd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ns=="object"&&Ns];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var S=h++;return{value:l(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function m(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(l,b)}}return function(){return o.apply(l,arguments)}}function g(o,l,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function T(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,S){for(var N=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)N[Z-2]=arguments[Z];return l.prototype[b].apply(p,N)}}function D(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function x(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,S=p.length||0;o.length=b+S;for(let N=0;N<S;N++)o[b+N]=p[N]}else o.push(p)}}class V{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function J(o){return J[" "](o),o}J[" "]=function(){};var $e=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function le(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function w(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function _(o){const l={};for(const h in o)l[h]=o[h];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let S=0;S<v.length;S++)h=v[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function y(){var o=to;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class ut{constructor(){this.h=this.g=null}add(l,h){const p=or.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var or=new V(()=>new Hp,o=>o.reset());class Hp{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ar,cr=!1,to=new ut,Lc=()=>{const o=c.Promise.resolve(void 0);ar=()=>{o.then(zp)}};var zp=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){A(h)}var l=or;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}cr=!1};function Pt(){this.s=this.s,this.C=this.C}Pt.prototype.s=!1,Pt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Pt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Gp=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o})();function lr(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if($e){e:{try{J(l.nodeName);var b=!0;break e}catch{}b=!1}b||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Kp[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&lr.aa.h.call(this)}}C(lr,Ie);var Kp={2:"touch",3:"pen",4:"mouse"};lr.prototype.h=function(){lr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var fs="closure_listenable_"+(1e6*Math.random()|0),Qp=0;function Jp(o,l,h,p,b){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=b,this.key=++Qp,this.da=this.fa=!1}function ps(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ms(o){this.src=o,this.g={},this.h=0}ms.prototype.add=function(o,l,h,p,b){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var N=ro(o,l,p,b);return-1<N?(l=o[N],h||(l.fa=!1)):(l=new Jp(l,this.src,S,!!p,b),l.fa=h,o.push(l)),l};function no(o,l){var h=l.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=b)&&Array.prototype.splice.call(p,b,1),S&&(ps(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ro(o,l,h,p){for(var b=0;b<o.length;++b){var S=o[b];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return b}return-1}var so="closure_lm_"+(1e6*Math.random()|0),io={};function Oc(o,l,h,p,b){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Oc(o,l[S],h,p,b);return null}return h=Uc(h),o&&o[fs]?o.K(l,h,d(p)?!!p.capture:!1,b):Yp(o,l,h,!1,p,b)}function Yp(o,l,h,p,b,S){if(!l)throw Error("Invalid event type");var N=d(b)?!!b.capture:!!b,Z=ao(o);if(Z||(o[so]=Z=new ms(o)),h=Z.add(l,h,p,N,S),h.proxy)return h;if(p=Xp(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Gp||(b=N),b===void 0&&(b=!1),o.addEventListener(l.toString(),p,b);else if(o.attachEvent)o.attachEvent(Fc(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Xp(){function o(h){return l.call(o.src,o.listener,h)}const l=Zp;return o}function Mc(o,l,h,p,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)Mc(o,l[S],h,p,b);else p=d(p)?!!p.capture:!!p,h=Uc(h),o&&o[fs]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],h=ro(S,h,p,b),-1<h&&(ps(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=ao(o))&&(l=o.g[l.toString()],o=-1,l&&(o=ro(l,h,p,b)),(h=-1<o?l[o]:null)&&oo(h))}function oo(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[fs])no(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(Fc(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=ao(l))?(no(h,o),h.h==0&&(h.src=null,l[so]=null)):ps(o)}}}function Fc(o){return o in io?io[o]:io[o]="on"+o}function Zp(o,l){if(o.da)o=!0;else{l=new lr(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&oo(o),o=h.call(p,l)}return o}function ao(o){return o=o[so],o instanceof ms?o:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uc(o){return typeof o=="function"?o:(o[co]||(o[co]=function(l){return o.handleEvent(l)}),o[co])}function Te(){Pt.call(this),this.i=new ms(this),this.M=this,this.F=null}C(Te,Pt),Te.prototype[fs]=!0,Te.prototype.removeEventListener=function(o,l,h,p){Mc(this,o,l,h,p)};function ke(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var b=l;l=new Ie(p,o),E(l,b)}if(b=!0,h)for(var S=h.length-1;0<=S;S--){var N=l.g=h[S];b=gs(N,p,!0,l)&&b}if(N=l.g=o,b=gs(N,p,!0,l)&&b,b=gs(N,p,!1,l)&&b,h)for(S=0;S<h.length;S++)N=l.g=h[S],b=gs(N,p,!1,l)&&b}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)ps(h[p]);delete o.g[l],o.h--}}this.F=null},Te.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Te.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function gs(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,S=0;S<l.length;++S){var N=l[S];if(N&&!N.da&&N.capture==h){var Z=N.listener,_e=N.ha||N.src;N.fa&&no(o.i,N),b=Z.call(_e,p)!==!1&&b}}return b&&!p.defaultPrevented}function Bc(o,l,h){if(typeof o=="function")h&&(o=g(o,h));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function $c(o){o.g=Bc(()=>{o.g=null,o.i&&(o.i=!1,$c(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class em extends Pt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:$c(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ur(o){Pt.call(this),this.h=o,this.g={}}C(ur,Pt);var jc=[];function qc(o){le(o.g,function(l,h){this.g.hasOwnProperty(h)&&oo(l)},o),o.g={}}ur.prototype.N=function(){ur.aa.N.call(this),qc(this)},ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lo=c.JSON.stringify,tm=c.JSON.parse,nm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function uo(){}uo.prototype.h=null;function Wc(o){return o.h||(o.h=o.i())}function Hc(){}var hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ho(){Ie.call(this,"d")}C(ho,Ie);function fo(){Ie.call(this,"c")}C(fo,Ie);var nn={},zc=null;function _s(){return zc=zc||new Te}nn.La="serverreachability";function Gc(o){Ie.call(this,nn.La,o)}C(Gc,Ie);function dr(o){const l=_s();ke(l,new Gc(l))}nn.STAT_EVENT="statevent";function Kc(o,l){Ie.call(this,nn.STAT_EVENT,o),this.stat=l}C(Kc,Ie);function xe(o){const l=_s();ke(l,new Kc(l,o))}nn.Ma="timingevent";function Qc(o,l){Ie.call(this,nn.Ma,o),this.size=l}C(Qc,Ie);function fr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function pr(){this.g=!0}pr.prototype.xa=function(){this.g=!1};function rm(o,l,h,p,b,S){o.info(function(){if(o.g)if(S)for(var N="",Z=S.split("&"),_e=0;_e<Z.length;_e++){var Y=Z[_e].split("=");if(1<Y.length){var be=Y[0];Y=Y[1];var Ae=be.split("_");N=2<=Ae.length&&Ae[1]=="type"?N+(be+"="+Y+"&"):N+(be+"=redacted&")}}else N=null;else N=S;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+h+`
`+N})}function sm(o,l,h,p,b,S,N){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+h+`
`+S+" "+N})}function An(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+om(o,h)+(p?" "+p:"")})}function im(o,l){o.info(function(){return"TIMEOUT: "+l})}pr.prototype.info=function(){};function om(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var N=1;N<b.length;N++)b[N]=""}}}}return lo(h)}catch{return l}}var ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},po;function vs(){}C(vs,uo),vs.prototype.g=function(){return new XMLHttpRequest},vs.prototype.i=function(){return{}},po=new vs;function kt(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new ur(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yc}function Yc(){this.i=null,this.g="",this.h=!1}var Xc={},mo={};function go(o,l,h){o.L=1,o.v=Ts(ht(l)),o.m=h,o.P=!0,Zc(o,null)}function Zc(o,l){o.F=Date.now(),Es(o),o.A=ht(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),fl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Yc,o.g=xl(o.j,h?l:null,!o.m),0<o.O&&(o.M=new em(g(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(jc[0]=b.toString()),b=jc);for(var S=0;S<b.length;S++){var N=Oc(h,b[S],p||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),dr(),rm(o.i,o.u,o.A,o.l,o.R,o.m)}kt.prototype.ca=function(o){o=o.target;const l=this.M;l&&dt(o)==3?l.j():this.Y(o)},kt.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=dt(this.g);var l=this.g.Ba();const Cn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||El(this.g)))){this.J||Ae!=4||l==7||(l==8||0>=Cn?dr(3):dr(2)),_o(this);var h=this.g.Z();this.X=h;t:if(el(this)){var p=El(this.g);o="";var b=p.length,S=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rn(this),mr(this);var N="";break t}this.h.i=new c.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(S&&l==b-1)});p.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,sm(this.i,this.u,this.A,this.l,this.R,Ae,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,_e=this.g;if((Z=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Z)){var Y=Z;break t}}Y=null}if(h=Y)An(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yo(this,h);else{this.o=!1,this.s=3,xe(12),rn(this),mr(this);break e}}if(this.P){h=!0;let ze;for(;!this.J&&this.C<N.length;)if(ze=am(this,N),ze==mo){Ae==4&&(this.s=4,xe(14),h=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==Xc){this.s=4,xe(15),An(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else An(this.i,this.l,ze,null),yo(this,ze);if(el(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||N.length!=0||this.h.h||(this.s=1,xe(16),h=!1),this.o=this.o&&h,!h)An(this.i,this.l,N,"[Invalid Chunked Response]"),rn(this),mr(this);else if(0<N.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),bo(be),be.M=!0,xe(11))}}else An(this.i,this.l,N,null),yo(this,N);Ae==4&&rn(this),this.o&&!this.J&&(Ae==4?Rl(this.j,this):(this.o=!1,Es(this)))}else bm(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),rn(this),mr(this)}}}catch{}finally{}};function el(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function am(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?mo:(h=Number(l.substring(h,p)),isNaN(h)?Xc:(p+=1,p+h>l.length?mo:(l=l.slice(p,p+h),o.C=p+h,l)))}kt.prototype.cancel=function(){this.J=!0,rn(this)};function Es(o){o.S=Date.now()+o.I,tl(o,o.I)}function tl(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=fr(g(o.ba,o),l)}function _o(o){o.B&&(c.clearTimeout(o.B),o.B=null)}kt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(im(this.i,this.A),this.L!=2&&(dr(),xe(17)),rn(this),this.s=2,mr(this)):tl(this,this.S-o)};function mr(o){o.j.G==0||o.J||Rl(o.j,o)}function rn(o){_o(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,qc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function yo(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||vo(h.h,o))){if(!o.K&&vo(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ps(h),Rs(h);else break e;To(h),xe(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=fr(g(h.Za,h),6e3));if(1>=sl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else on(h,11)}else if((o.K||h.g==o)&&Ps(h),!F(l))for(b=h.Da.g.parse(l),l=0;l<b.length;l++){let Y=b[l];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const be=Y[3];be!=null&&(h.la=be,h.j.info("VER="+h.la));const Ae=Y[4];Ae!=null&&(h.Aa=Ae,h.j.info("SVER="+h.Aa));const Cn=Y[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(p=1.5*Cn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const ze=o.g;if(ze){const xs=ze.g?ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xs){var S=p.h;S.g||xs.indexOf("spdy")==-1&&xs.indexOf("quic")==-1&&xs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Eo(S,S.h),S.h=null))}if(p.D){const Ao=ze.g?ze.g.getResponseHeader("X-HTTP-Session-Id"):null;Ao&&(p.ya=Ao,te(p.I,p.D,Ao))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var N=o;if(p.qa=kl(p,p.J?p.ia:null,p.W),N.K){il(p.h,N);var Z=N,_e=p.L;_e&&(Z.I=_e),Z.B&&(_o(Z),Es(Z)),p.g=N}else Al(p);0<h.i.length&&Cs(h)}else Y[0]!="stop"&&Y[0]!="close"||on(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?on(h,7):Io(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}dr(4)}catch{}}var cm=class{constructor(o,l){this.g=o,this.map=l}};function nl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function sl(o){return o.h?1:o.g?o.g.size:0}function vo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Eo(o,l){o.g?o.g.add(l):o.h=l}function il(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}nl.prototype.cancel=function(){if(this.i=ol(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ol(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return D(o.i)}function lm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function um(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function al(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=um(o),p=lm(o),b=p.length,S=0;S<b;S++)l.call(void 0,p[S],h&&h[S],o)}var cl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hm(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var S=o[h].substring(0,p);b=o[h].substring(p+1)}else S=o[h];l(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function sn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof sn){this.h=o.h,ws(this,o.j),this.o=o.o,this.g=o.g,Is(this,o.s),this.l=o.l;var l=o.i,h=new yr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),ll(this,h),this.m=o.m}else o&&(l=String(o).match(cl))?(this.h=!1,ws(this,l[1]||"",!0),this.o=gr(l[2]||""),this.g=gr(l[3]||"",!0),Is(this,l[4]),this.l=gr(l[5]||"",!0),ll(this,l[6]||"",!0),this.m=gr(l[7]||"")):(this.h=!1,this.i=new yr(null,this.h))}sn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(_r(l,ul,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(_r(l,ul,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(_r(h,h.charAt(0)=="/"?pm:fm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",_r(h,gm)),o.join("")};function ht(o){return new sn(o)}function ws(o,l,h){o.j=h?gr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Is(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function ll(o,l,h){l instanceof yr?(o.i=l,_m(o.i,o.h)):(h||(l=_r(l,mm)),o.i=new yr(l,o.h))}function te(o,l,h){o.i.set(l,h)}function Ts(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function gr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function _r(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,dm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function dm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ul=/[#\/\?@]/g,fm=/[#\?:]/g,pm=/[#\?]/g,mm=/[#\?@]/g,gm=/#/g;function yr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function xt(o){o.g||(o.g=new Map,o.h=0,o.i&&hm(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=yr.prototype,n.add=function(o,l){xt(this),this.i=null,o=Sn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function hl(o,l){xt(o),l=Sn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function dl(o,l){return xt(o),l=Sn(o,l),o.g.has(l)}n.forEach=function(o,l){xt(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(l,b,p,this)},this)},this)},n.na=function(){xt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const b=o[p];for(let S=0;S<b.length;S++)h.push(l[p])}return h},n.V=function(o){xt(this);let l=[];if(typeof o=="string")dl(this,o)&&(l=l.concat(this.g.get(Sn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return xt(this),this.i=null,o=Sn(this,o),dl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function fl(o,l,h){hl(o,l),0<h.length&&(o.i=null,o.g.set(Sn(o,l),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const S=encodeURIComponent(String(p)),N=this.V(p);for(p=0;p<N.length;p++){var b=S;N[p]!==""&&(b+="="+encodeURIComponent(String(N[p]))),o.push(b)}}return this.i=o.join("&")};function Sn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function _m(o,l){l&&!o.j&&(xt(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(hl(this,p),fl(this,b,h))},o)),o.j=l}function ym(o,l){const h=new pr;if(c.Image){const p=new Image;p.onload=T(Dt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=T(Dt,h,"TestLoadImage: error",!1,l,p),p.onabort=T(Dt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=T(Dt,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function vm(o,l){const h=new pr,p=new AbortController,b=setTimeout(()=>{p.abort(),Dt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(b),S.ok?Dt(h,"TestPingServer: ok",!0,l):Dt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Dt(h,"TestPingServer: error",!1,l)})}function Dt(o,l,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function Em(){this.g=new nm}function wm(o,l,h){const p=h||"";try{al(o,function(b,S){let N=b;d(b)&&(N=lo(b)),l.push(p+S+"="+encodeURIComponent(N))})}catch(b){throw l.push(p+"type="+encodeURIComponent("_badmap")),b}}function bs(o){this.l=o.Ub||null,this.j=o.eb||!1}C(bs,uo),bs.prototype.g=function(){return new As(this.l,this.j)},bs.prototype.i=(function(o){return function(){return o}})({});function As(o,l){Te.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(As,Te),n=As.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Er(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Er(this)),this.g&&(this.readyState=3,Er(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function pl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?vr(this):Er(this),this.readyState==3&&pl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,vr(this))},n.Qa=function(o){this.g&&(this.response=o,vr(this))},n.ga=function(){this.g&&vr(this)};function vr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Er(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Er(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(As.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ml(o){let l="";return le(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function wo(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ml(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,l,h))}function ie(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ie,Te);var Im=/^https?$/i,Tm=["POST","PUT"];n=ie.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():po.g(),this.v=this.o?Wc(this.o):Wc(po),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){gl(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Tm,l,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of h)this.g.setRequestHeader(S,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vl(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){gl(this,S)}};function gl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,_l(o),Ss(o)}function _l(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ke(this,"complete"),ke(this,"abort"),Ss(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ss(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?yl(this):this.bb())},n.bb=function(){yl(this)};function yl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||dt(o)!=4||o.Z()!=2)){if(o.u&&dt(o)==4)Bc(o.Ea,0,o);else if(ke(o,"readystatechange"),dt(o)==4){o.h=!1;try{const N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=N===0){var b=String(o.D).match(cl)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!Im.test(b?b.toLowerCase():"")}h=p}if(h)ke(o,"complete"),ke(o,"success");else{o.m=6;try{var S=2<dt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",_l(o)}}finally{Ss(o)}}}}function Ss(o,l){if(o.g){vl(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||ke(o,"ready");try{h.onreadystatechange=p}catch{}}}function vl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function dt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),tm(l)}};function El(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bm(o){const l={};o=(o.g&&2<=dt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(F(o[p]))continue;var h=I(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[b]||[];l[b]=S,S.push(h)}w(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function wl(o){this.Aa=0,this.i=[],this.j=new pr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wr("baseRetryDelayMs",5e3,o),this.cb=wr("retryDelaySeedMs",1e4,o),this.Wa=wr("forwardChannelMaxRetries",2,o),this.wa=wr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new nl(o&&o.concurrentRequestLimit),this.Da=new Em,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=wl.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){xe(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=kl(this,null,this.W),Cs(this)};function Io(o){if(Il(o),o.G==3){var l=o.U++,h=ht(o.I);if(te(h,"SID",o.K),te(h,"RID",l),te(h,"TYPE","terminate"),Ir(o,h),l=new kt(o,o.j,l),l.L=2,l.v=Ts(ht(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=xl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Es(l)}Pl(o)}function Rs(o){o.g&&(bo(o),o.g.cancel(),o.g=null)}function Il(o){Rs(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ps(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Cs(o){if(!rl(o.h)&&!o.s){o.s=!0;var l=o.Ga;ar||Lc(),cr||(ar(),cr=!0),to.add(l,o),o.B=0}}function Am(o,l){return sl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=fr(g(o.Ga,o,l),Cl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new kt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=_(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=bl(this,b,l),h=ht(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),Ir(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(ml(S)))+"&"+l:this.m&&wo(h,this.m,S)),Eo(this.h,b),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",l),te(h,"SID","null"),b.T=!0,go(b,h,null)):go(b,h,l),this.G=2}}else this.G==3&&(o?Tl(this,o):this.i.length==0||rl(this.h)||Tl(this))};function Tl(o,l){var h;l?h=l.l:h=o.U++;const p=ht(o.I);te(p,"SID",o.K),te(p,"RID",h),te(p,"AID",o.T),Ir(o,p),o.m&&o.o&&wo(p,o.m,o.o),h=new kt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=bl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Eo(o.h,h),go(h,p,l)}function Ir(o,l){o.H&&le(o.H,function(h,p){te(l,p,h)}),o.l&&al({},function(h,p){te(l,p,h)})}function bl(o,l,h){h=Math.min(o.i.length,h);var p=o.l?g(o.l.Na,o.l,o):null;e:{var b=o.i;let S=-1;for(;;){const N=["count="+h];S==-1?0<h?(S=b[0].g,N.push("ofs="+S)):S=0:N.push("ofs="+S);let Z=!0;for(let _e=0;_e<h;_e++){let Y=b[_e].g;const be=b[_e].map;if(Y-=S,0>Y)S=Math.max(0,b[_e].g-100),Z=!1;else try{wm(be,N,"req"+Y+"_")}catch{p&&p(be)}}if(Z){p=N.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function Al(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;ar||Lc(),cr||(ar(),cr=!0),to.add(l,o),o.v=0}}function To(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=fr(g(o.Fa,o),Cl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Sl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=fr(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),Rs(this),Sl(this))};function bo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Sl(o){o.g=new kt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ht(o.qa);te(l,"RID","rpc"),te(l,"SID",o.K),te(l,"AID",o.T),te(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(l,"TO",o.ja),te(l,"TYPE","xmlhttp"),Ir(o,l),o.m&&o.o&&wo(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ts(ht(l)),h.m=null,h.P=!0,Zc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Rs(this),To(this),xe(19))};function Ps(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Rl(o,l){var h=null;if(o.g==l){Ps(o),bo(o),o.g=null;var p=2}else if(vo(o.h,l))h=l.D,il(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var b=o.B;p=_s(),ke(p,new Qc(p,h)),Cs(o)}else Al(o);else if(b=l.s,b==3||b==0&&0<l.X||!(p==1&&Am(o,l)||p==2&&To(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),b){case 1:on(o,5);break;case 4:on(o,10);break;case 3:on(o,6);break;default:on(o,2)}}}function Cl(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function on(o,l){if(o.j.info("Error code "+l),l==2){var h=g(o.fb,o),p=o.Xa;const b=!p;p=new sn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ws(p,"https"),Ts(p),b?ym(p.toString(),h):vm(p.toString(),h)}else xe(2);o.G=0,o.l&&o.l.sa(l),Pl(o),Il(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Pl(o){if(o.G=0,o.ka=[],o.l){const l=ol(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function kl(o,l,h){var p=h instanceof sn?ht(h):new sn(h);if(p.g!="")l&&(p.g=l+"."+p.g),Is(p,p.s);else{var b=c.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var S=new sn(null);p&&ws(S,p),l&&(S.g=l),b&&Is(S,b),h&&(S.l=h),p=S}return h=o.D,l=o.ya,h&&l&&te(p,h,l),te(p,"VER",o.la),Ir(o,p),p}function xl(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ie(new bs({eb:h})):new ie(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dl(){}n=Dl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ks(){}ks.prototype.g=function(o,l){return new Oe(o,l)};function Oe(o,l){Te.call(this),this.g=new wl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!F(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Rn(this)}C(Oe,Te),Oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){Io(this.g)},Oe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=lo(o),o=h);l.i.push(new cm(l.Ya++,o)),l.G==3&&Cs(l)},Oe.prototype.N=function(){this.g.l=null,delete this.j,Io(this.g),delete this.g,Oe.aa.N.call(this)};function Nl(o){ho.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(Nl,ho);function Vl(){fo.call(this),this.status=1}C(Vl,fo);function Rn(o){this.g=o}C(Rn,Dl),Rn.prototype.ua=function(){ke(this.g,"a")},Rn.prototype.ta=function(o){ke(this.g,new Nl(o))},Rn.prototype.sa=function(o){ke(this.g,new Vl)},Rn.prototype.ra=function(){ke(this.g,"b")},ks.prototype.createWebChannel=ks.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,Fd=function(){return new ks},Md=function(){return _s()},Od=nn,ea={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,Hs=ys,Jc.COMPLETE="complete",Ld=Jc,Hc.EventType=hr,hr.OPEN="a",hr.CLOSE="b",hr.ERROR="c",hr.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Sr=Hc,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,Vd=ie}).apply(typeof Ns<"u"?Ns:typeof self<"u"?self:typeof window<"u"?window:{});const fu="@firebase/firestore",pu="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Da("@firebase/firestore");function Pn(){return wn.logLevel}function O(n,...e){if(wn.logLevel<=G.DEBUG){const t=e.map(Wa);wn.debug(`Firestore (${Jn}): ${n}`,...t)}}function wt(n,...e){if(wn.logLevel<=G.ERROR){const t=e.map(Wa);wn.error(`Firestore (${Jn}): ${n}`,...t)}}function Ht(n,...e){if(wn.logLevel<=G.WARN){const t=e.map(Wa);wn.warn(`Firestore (${Jn}): ${n}`,...t)}}function Wa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ud(n,r,t)}function Ud(n,e,t){let r=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw wt(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ud(e,s,r)}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Re.UNAUTHENTICATED)))}shutdown(){}}class Nv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Vv{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _t,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _t)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Bd(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class Lv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ov{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Lv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Re.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new mu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new mu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Fv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function ta(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return H(r,s);{const i=$d(),a=Uv(i.encode(gu(n,t)),i.encode(gu(e,t)));return a!==0?a:H(r,s)}}t+=r>65535?2:1}return H(n.length,e.length)}function gu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Uv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return H(n[t],e[t]);return H(n.length,e.length)}function jn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="__name__";class et{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=et.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return H(e.length,t.length)}static compareSegments(e,t){const r=et.isNumericId(e),s=et.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?et.extractNumericId(e).compare(et.extractNumericId(t)):ta(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qt.fromString(e.substring(4,e.length-2))}}class ee extends et{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const Bv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends et{construct(e,t,r){return new ve(e,t,r)}static isValidIdentifier(e){return Bv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_u}static keyField(){return new ve([_u])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ee.fromString(e))}static fromName(e){return new U(ee.fromString(e).popFirst(5))}static empty(){return new U(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n,e,t){if(!t)throw new L(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $v(n,e,t,r){if(e===!0&&r===!0)throw new L(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yu(n){if(!U.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vu(n){if(U.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Pi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function Le(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pi(n);throw new L(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function os(n,e){if(!qd(n))throw new L(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new L(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=-62135596800,wu=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*wu);return new ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Eu)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wu}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(os(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Eu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:fe("string",ne._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new ne(0,0))}static max(){return new j(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=-1;function jv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new zt(s,U.empty(),e)}function qv(n){return new zt(n.readTime,n.key,Wr)}class zt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new zt(j.min(),U.empty(),Wr)}static max(){return new zt(j.max(),U.empty(),Wr)}}function Wv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Hv)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,r)=>{t(e)}))}static reject(e){return new k(((t,r)=>{r(e)}))}static waitFor(e){return new k(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next((s=>s?k.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new k(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((f=>{a[d]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,t){return new k(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Gv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ki.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=-1;function xi(n){return n==null}function ai(n){return n===0&&1/n==-1/0}function Kv(n){return typeof n=="number"&&Number.isInteger(n)&&!ai(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="";function Qv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Iu(e)),e=Jv(n.get(t),e);return Iu(e)}function Jv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Wd:t+="";break;default:t+=i}}return t}function Iu(n){return n+Wd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function en(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Hd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vs(this.root,e,this.comparator,!0)}}class Vs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bu(this.data.getIterator())}getIteratorFrom(e){return new bu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class bu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new pe(ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zd("Invalid base64 string: "+i):i}})(e);return new we(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const Yv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=Yv.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kt(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="server_timestamp",Kd="__type__",Qd="__previous_value__",Jd="__local_write_time__";function Ga(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Kd])===null||t===void 0?void 0:t.stringValue)===Gd}function Di(n){const e=n.mapValue.fields[Qd];return Ga(e)?Di(e):e}function Hr(n){const e=Gt(n.mapValue.fields[Jd].timestampValue);return new ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t,r,s,i,a,c,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const ci="(default)";class zr{constructor(e,t){this.projectId=e,this.database=t||ci}static empty(){return new zr("","")}get isDefaultDatabase(){return this.database===ci}isEqual(e){return e instanceof zr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="__type__",Zv="__max__",Ls={mapValue:{}},Xd="__vector__",li="value";function Qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ga(n)?4:tE(n)?9007199254740991:eE(n)?10:11:$(28295,{value:n})}function lt(n,e){if(n===e)return!0;const t=Qt(n);if(t!==Qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hr(n).isEqual(Hr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Gt(s.timestampValue),c=Gt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Kt(s.bytesValue).isEqual(Kt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ue(s.doubleValue),c=ue(i.doubleValue);return a===c?ai(a)===ai(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return jn(n.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Tu(a)!==Tu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!lt(a[u],c[u])))return!1;return!0})(n,e);default:return $(52216,{left:n})}}function Gr(n,e){return(n.values||[]).find((t=>lt(t,e)))!==void 0}function qn(n,e){if(n===e)return 0;const t=Qt(n),r=Qt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=ue(i.integerValue||i.doubleValue),u=ue(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Au(n.timestampValue,e.timestampValue);case 4:return Au(Hr(n),Hr(e));case 5:return ta(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Kt(i),u=Kt(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=H(c[d],u[d]);if(f!==0)return f}return H(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=H(ue(i.latitude),ue(a.latitude));return c!==0?c:H(ue(i.longitude),ue(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Su(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,u,d,f;const m=i.fields||{},g=a.fields||{},T=(c=m[li])===null||c===void 0?void 0:c.arrayValue,C=(u=g[li])===null||u===void 0?void 0:u.arrayValue,D=H(((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Su(T,C)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Ls.mapValue&&a===Ls.mapValue)return 0;if(i===Ls.mapValue)return 1;if(a===Ls.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=ta(u[m],f[m]);if(g!==0)return g;const T=qn(c[u[m]],d[f[m]]);if(T!==0)return T}return H(u.length,f.length)})(n.mapValue,e.mapValue);default:throw $(23264,{le:t})}}function Au(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=Gt(n),r=Gt(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function Su(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=qn(t[s],r[s]);if(i)return i}return H(t.length,r.length)}function Wn(n){return na(n)}function na(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Gt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Kt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=na(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${na(t.fields[a])}`;return s+"}"})(n.mapValue):$(61005,{value:n})}function zs(n){switch(Qt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Di(n);return e?16+zs(e):16;case 5:return 2*n.stringValue.length;case 6:return Kt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+zs(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return en(r.fields,((i,a)=>{s+=i.length+zs(a)})),s})(n.mapValue);default:throw $(13486,{value:n})}}function Ru(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ra(n){return!!n&&"integerValue"in n}function Ka(n){return!!n&&"arrayValue"in n}function Cu(n){return!!n&&"nullValue"in n}function Pu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Gs(n){return!!n&&"mapValue"in n}function eE(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yd])===null||t===void 0?void 0:t.stringValue)===Xd}function Nr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return en(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Nr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Nr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function tE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Zv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Gs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nr(t)}setAll(e){let t=ve.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Nr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Gs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Gs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){en(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ne(Nr(this.value))}}function Zd(n){const e=[];return en(n.fields,((t,r)=>{const s=new ve([t]);if(Gs(r)){const i=Zd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Fe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,j.min(),j.min(),j.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,s){return new Ce(e,1,t,j.min(),r,s,0)}static newNoDocument(e,t){return new Ce(e,2,t,j.min(),j.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,j.min(),j.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.position=e,this.inclusive=t}}function ku(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=qn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t="asc"){this.field=e,this.dir=t}}function nE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{}class de extends ef{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new sE(e,t,r):t==="array-contains"?new aE(e,r):t==="in"?new cE(e,r):t==="not-in"?new lE(e,r):t==="array-contains-any"?new uE(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new iE(e,r):new oE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qn(t,this.value)):t!==null&&Qt(this.value)===Qt(t)&&this.matchesComparison(qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ye extends ef{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ye(e,t)}matches(e){return tf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function tf(n){return n.op==="and"}function nf(n){return rE(n)&&tf(n)}function rE(n){for(const e of n.filters)if(e instanceof Ye)return!1;return!0}function sa(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+Wn(n.value);if(nf(n))return n.filters.map((e=>sa(e))).join(",");{const e=n.filters.map((t=>sa(t))).join(",");return`${n.op}(${e})`}}function rf(n,e){return n instanceof de?(function(r,s){return s instanceof de&&r.op===s.op&&r.field.isEqual(s.field)&&lt(r.value,s.value)})(n,e):n instanceof Ye?(function(r,s){return s instanceof Ye&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&rf(a,s.filters[c])),!0):!1})(n,e):void $(19439)}function sf(n){return n instanceof de?(function(t){return`${t.field.canonicalString()} ${t.op} ${Wn(t.value)}`})(n):n instanceof Ye?(function(t){return t.op.toString()+" {"+t.getFilters().map(sf).join(" ,")+"}"})(n):"Filter"}class sE extends de{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class iE extends de{constructor(e,t){super(e,"in",t),this.keys=of("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class oE extends de{constructor(e,t){super(e,"not-in",t),this.keys=of("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function of(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>U.fromName(r.referenceValue)))}class aE extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ka(t)&&Gr(t.arrayValue,this.value)}}class cE extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gr(this.value.arrayValue,t)}}class lE extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Gr(this.value.arrayValue,t)}}class uE extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ka(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Gr(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function Du(n,e=null,t=[],r=[],s=null,i=null,a=null){return new hE(n,e,t,r,s,i,a)}function Qa(n){const e=W(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>sa(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),xi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Wn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Wn(r))).join(",")),e.Pe=t}return e.Pe}function Ja(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!nE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!rf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!xu(n.startAt,e.startAt)&&xu(n.endAt,e.endAt)}function ia(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function dE(n,e,t,r,s,i,a,c){return new Zn(n,e,t,r,s,i,a,c)}function Ni(n){return new Zn(n)}function Nu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function af(n){return n.collectionGroup!==null}function Vr(n){const e=W(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pe(ve.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Kr(i,r))})),t.has(ve.keyField().canonicalString())||e.Te.push(new Kr(ve.keyField(),r))}return e.Te}function st(n){const e=W(n);return e.Ie||(e.Ie=fE(e,Vr(n))),e.Ie}function fE(n,e){if(n.limitType==="F")return Du(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Kr(s.field,i)}));const t=n.endAt?new ui(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ui(n.startAt.position,n.startAt.inclusive):null;return Du(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function oa(n,e){const t=n.filters.concat([e]);return new Zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function hi(n,e,t){return new Zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vi(n,e){return Ja(st(n),st(e))&&n.limitType===e.limitType}function cf(n){return`${Qa(st(n))}|lt:${n.limitType}`}function kn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>sf(s))).join(", ")}]`),xi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Wn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Wn(s))).join(",")),`Target(${r})`})(st(n))}; limitType=${n.limitType})`}function Li(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Vr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const d=ku(a,c,u);return a.inclusive?d<=0:d<0})(r.startAt,Vr(r),s)||r.endAt&&!(function(a,c,u){const d=ku(a,c,u);return a.inclusive?d>=0:d>0})(r.endAt,Vr(r),s))})(n,e)}function pE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lf(n){return(e,t)=>{let r=!1;for(const s of Vr(n)){const i=mE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mE(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?qn(u,d):$(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){en(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Hd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=new se(U.comparator);function It(){return gE}const uf=new se(U.comparator);function Rr(...n){let e=uf;for(const t of n)e=e.insert(t.key,t);return e}function hf(n){let e=uf;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function ln(){return Lr()}function df(){return Lr()}function Lr(){return new Tn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const _E=new se(U.comparator),yE=new pe(U.comparator);function K(...n){let e=yE;for(const t of n)e=e.add(t);return e}const vE=new pe(H);function EE(){return vE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(e)?"-0":e}}function ff(n){return{integerValue:""+n}}function wE(n,e){return Kv(e)?ff(e):Ya(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this._=void 0}}function IE(n,e,t){return n instanceof di?(function(s,i){const a={fields:{[Kd]:{stringValue:Gd},[Jd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ga(i)&&(i=Di(i)),i&&(a.fields[Qd]=i),{mapValue:a}})(t,e):n instanceof Qr?mf(n,e):n instanceof Jr?gf(n,e):(function(s,i){const a=pf(s,i),c=Vu(a)+Vu(s.Ee);return ra(a)&&ra(s.Ee)?ff(c):Ya(s.serializer,c)})(n,e)}function TE(n,e,t){return n instanceof Qr?mf(n,e):n instanceof Jr?gf(n,e):t}function pf(n,e){return n instanceof fi?(function(r){return ra(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class di extends Oi{}class Qr extends Oi{constructor(e){super(),this.elements=e}}function mf(n,e){const t=_f(e);for(const r of n.elements)t.some((s=>lt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Jr extends Oi{constructor(e){super(),this.elements=e}}function gf(n,e){let t=_f(e);for(const r of n.elements)t=t.filter((s=>!lt(s,r)));return{arrayValue:{values:t}}}class fi extends Oi{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Vu(n){return ue(n.integerValue||n.doubleValue)}function _f(n){return Ka(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function bE(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Qr&&s instanceof Qr||r instanceof Jr&&s instanceof Jr?jn(r.elements,s.elements,lt):r instanceof fi&&s instanceof fi?lt(r.Ee,s.Ee):r instanceof di&&s instanceof di})(n.transform,e.transform)}class AE{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ks(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mi{}function yf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Xa(n.key,He.none()):new as(n.key,n.data,He.none());{const t=n.data,r=Ne.empty();let s=new pe(ve.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new tn(n.key,r,new Fe(s.toArray()),He.none())}}function SE(n,e,t){n instanceof as?(function(s,i,a){const c=s.value.clone(),u=Ou(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof tn?(function(s,i,a){if(!Ks(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Ou(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(vf(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Or(n,e,t,r){return n instanceof as?(function(i,a,c,u){if(!Ks(i.precondition,a))return c;const d=i.value.clone(),f=Mu(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof tn?(function(i,a,c,u){if(!Ks(i.precondition,a))return c;const d=Mu(i.fieldTransforms,u,a),f=a.data;return f.setAll(vf(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(n,e,t,r):(function(i,a,c){return Ks(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function RE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=pf(r.transform,s||null);i!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,i))}return t||null}function Lu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&jn(r,s,((i,a)=>bE(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class as extends Mi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class tn extends Mi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Ou(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,TE(a,c,t[s]))}return r}function Mu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,IE(i,a,e))}return r}class Xa extends Mi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CE extends Mi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&SE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Or(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Or(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=df();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=yf(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(j.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&jn(this.mutations,e.mutations,((t,r)=>Lu(t,r)))&&jn(this.baseMutations,e.baseMutations,((t,r)=>Lu(t,r)))}}class Za{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return _E})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Za(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,Q;function DE(n){switch(n){case P.OK:return $(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function Ef(n){if(n===void 0)return wt("GRPC error has no .code"),P.UNKNOWN;switch(n){case he.OK:return P.OK;case he.CANCELLED:return P.CANCELLED;case he.UNKNOWN:return P.UNKNOWN;case he.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case he.INTERNAL:return P.INTERNAL;case he.UNAVAILABLE:return P.UNAVAILABLE;case he.UNAUTHENTICATED:return P.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case he.NOT_FOUND:return P.NOT_FOUND;case he.ALREADY_EXISTS:return P.ALREADY_EXISTS;case he.PERMISSION_DENIED:return P.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case he.ABORTED:return P.ABORTED;case he.OUT_OF_RANGE:return P.OUT_OF_RANGE;case he.UNIMPLEMENTED:return P.UNIMPLEMENTED;case he.DATA_LOSS:return P.DATA_LOSS;default:return $(39323,{code:n})}}(Q=he||(he={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=new qt([4294967295,4294967295],0);function Fu(n){const e=$d().encode(n),t=new Nd;return t.update(e),new Uint8Array(t.digest())}function Uu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qt([t,r],0),new qt([s,i],0)]}class ec{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Cr(`Invalid padding: ${t}`);if(r<0)throw new Cr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Cr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Cr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=qt.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(qt.fromNumber(r)));return s.compare(NE)===1&&(s=new qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Fu(e),[r,s]=Uu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ec(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=Fu(e),[r,s]=Uu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Cr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,cs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Fi(j.min(),s,new se(H),It(),K())}}class cs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new cs(r,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class wf{constructor(e,t){this.targetId=e,this.De=t}}class If{constructor(e,t,r=we.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Bu{constructor(){this.ve=0,this.Ce=$u(),this.Fe=we.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=K(),t=K(),r=K();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$(38017,{changeType:i})}})),new cs(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=$u()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class VE{constructor(e){this.We=e,this.Ge=new Map,this.ze=It(),this.je=Os(),this.Je=Os(),this.He=new se(H)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:$(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(ia(i))if(r===0){const a=new U(i.path);this.Xe(t,a,Ce.newNoDocument(a,j.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Kt(r).toUint8Array()}catch(u){if(u instanceof zd)return Ht("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ec(a,s,i)}catch(u){return Ht(u instanceof Cr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&ia(c.target)){const u=new U(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Ce.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=K();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Fi(e,t,this.He,this.ze,r);return this.ze=It(),this.je=Os(),this.Je=Os(),this.He=new se(H),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Bu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new pe(H),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new pe(H),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Bu),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Os(){return new se(U.comparator)}function $u(){return new se(U.comparator)}const LE={asc:"ASCENDING",desc:"DESCENDING"},OE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ME={and:"AND",or:"OR"};class FE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function aa(n,e){return n.useProto3Json||xi(e)?e:{value:e}}function pi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function UE(n,e){return pi(n,e.toTimestamp())}function it(n){return X(!!n,49232),j.fromTimestamp((function(t){const r=Gt(t);return new ne(r.seconds,r.nanos)})(n))}function tc(n,e){return ca(n,e).canonicalString()}function ca(n,e){const t=(function(s){return new ee(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function bf(n){const e=ee.fromString(n);return X(Pf(e),10190,{key:e.toString()}),e}function la(n,e){return tc(n.databaseId,e.path)}function No(n,e){const t=bf(e);if(t.get(1)!==n.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(Sf(t))}function Af(n,e){return tc(n.databaseId,e)}function BE(n){const e=bf(n);return e.length===4?ee.emptyPath():Sf(e)}function ua(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sf(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ju(n,e,t){return{name:la(n,e),fields:t.value.mapValue.fields}}function $E(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:$(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,f){return d.useProto3Json?(X(f===void 0||typeof f=="string",58123),we.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),we.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const f=d.code===void 0?P.UNKNOWN:Ef(d.code);return new L(f,d.message||"")})(a);t=new If(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=No(n,r.document.name),i=it(r.document.updateTime),a=r.document.createTime?it(r.document.createTime):j.min(),c=new Ne({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Qs(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=No(n,r.document),i=r.readTime?it(r.readTime):j.min(),a=Ce.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Qs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=No(n,r.document),i=r.removedTargetIds||[];t=new Qs([],i,s,null)}else{if(!("filter"in e))return $(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new xE(s,i),c=r.targetId;t=new wf(c,a)}}return t}function jE(n,e){let t;if(e instanceof as)t={update:ju(n,e.key,e.value)};else if(e instanceof Xa)t={delete:la(n,e.key)};else if(e instanceof tn)t={update:ju(n,e.key,e.data),updateMask:YE(e.fieldMask)};else{if(!(e instanceof CE))return $(16599,{Rt:e.type});t={verify:la(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof di)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Jr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fi)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw $(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:UE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)})(n,e.precondition)),t}function qE(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?it(s.updateTime):it(i);return a.isEqual(j.min())&&(a=it(i)),new AE(a,s.transformResults||[])})(t,e)))):[]}function WE(n,e){return{documents:[Af(n,e.path)]}}function HE(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Af(n,s);const i=(function(d){if(d.length!==0)return Cf(Ye.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((f=>(function(g){return{field:xn(g.field),direction:KE(g.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=aa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:s}}function zE(n){let e=BE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(m){const g=Rf(m);return g instanceof Ye&&nf(g)?g.getFilters():[g]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((g=>(function(C){return new Kr(Dn(C.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(m){let g;return g=typeof m=="object"?m.value:m,xi(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(m){const g=!!m.before,T=m.values||[];return new ui(T,g)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const g=!m.before,T=m.values||[];return new ui(T,g)})(t.endAt)),dE(e,s,a,i,c,"F",u,d)}function GE(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Dn(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Dn(t.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Dn(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dn(t.unaryFilter.field);return de.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}})(n):n.fieldFilter!==void 0?(function(t){return de.create(Dn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ye.create(t.compositeFilter.filters.map((r=>Rf(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}})(t.compositeFilter.op))})(n):$(30097,{filter:n})}function KE(n){return LE[n]}function QE(n){return OE[n]}function JE(n){return ME[n]}function xn(n){return{fieldPath:n.canonicalString()}}function Dn(n){return ve.fromServerFormat(n.fieldPath)}function Cf(n){return n instanceof de?(function(t){if(t.op==="=="){if(Pu(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NAN"}};if(Cu(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pu(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NAN"}};if(Cu(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xn(t.field),op:QE(t.op),value:t.value}}})(n):n instanceof Ye?(function(t){const r=t.getFilters().map((s=>Cf(s)));return r.length===1?r[0]:{compositeFilter:{op:JE(t.op),filters:r}}})(n):$(54877,{filter:n})}function YE(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Pf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,r,s,i=j.min(),a=j.min(),c=we.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.gt=e}}function ZE(n){const e=zE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.Dn=new tw}addToCollectionParentIndex(e,t){return this.Dn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(zt.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class tw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new pe(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pe(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kf=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(kf,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Hn(0)}static ur(){return new Hn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="LruGarbageCollector",nw=1048576;function Hu([n,e],[t,r]){const s=H(n,t);return s===0?H(e,r):s}class rw{constructor(e){this.Tr=e,this.buffer=new pe(Hu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Hu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){O(Wu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xn(t)?O(Wu,"Ignoring IndexedDB error during garbage collection: ",t):await Yn(t)}await this.Rr(3e5)}))}}class iw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(ki.ue);const r=new rw(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(qu)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qu):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(r=m,c=Date.now(),this.removeTargets(e,r,t)))).next((m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((m=>(d=Date.now(),Pn()<=G.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function ow(n,e){return new iw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this.changes=new Tn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Or(r.mutation,s,Fe.empty(),ne.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,K()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=K()){const s=ln();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Rr();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=ln();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,K())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=It();const a=Lr(),c=(function(){return Lr()})();return t.forEach(((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof tn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Or(f.mutation,d,f.mutation.getFieldMask(),ne.now())):a.set(d.key,Fe.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,f)=>a.set(d,f))),t.forEach(((d,f)=>{var m;return c.set(d,new cw(f,(m=a.get(d))!==null&&m!==void 0?m:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=Lr();let s=new se(((a,c)=>a-c)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||Fe.empty();f=c.applyToLocalView(d,f),r.set(u,f);const m=(s.get(c.batchId)||K()).add(u);s=s.insert(c.batchId,m)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,m=df();f.forEach((g=>{if(!i.has(g)){const T=yf(t.get(g),r.get(g));T!==null&&m.set(g,T),i=i.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return k.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):af(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(ln());let c=Wr,u=i;return a.next((d=>k.forEach(d,((f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{u=u.insert(f,g)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,K()))).next((f=>({batchId:c,changes:hf(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((r=>{let s=Rr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Rr();return this.indexManager.getCollectionParents(e,i).next((c=>k.forEach(c,(u=>{const d=(function(m,g){return new Zn(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((f=>{f.forEach(((m,g)=>{a=a.insert(m,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ce.newInvalidDocument(f)))}));let c=Rr();return a.forEach(((u,d)=>{const f=i.get(u);f!==void 0&&Or(f.mutation,d,Fe.empty(),ne.now()),Li(t,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return k.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:it(s.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:ZE(s.bundledQuery),readTime:it(s.readTime)}})(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.overlays=new se(U.comparator),this.kr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ln();return k.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=ln(),i=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=ln(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=ln(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,f)=>c.set(d,f))),!(c.size()>=s)););return k.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new kE(t,r));let i=this.kr.get(t);i===void 0&&(i=K(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.qr=new pe(ge.Qr),this.$r=new pe(ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new ge(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new U(new ee([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new U(new ee([])),r=new ge(t,e),s=new ge(t,e+1);let i=K();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new ge(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return U.comparator(e.key,t.key)||H(e.Hr,t.Hr)}static Ur(e,t){return H(e.Hr,t.Hr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new pe(ge.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new PE(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?za:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(H);return t.forEach((s=>{const i=new ge(s,0),a=new ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const a=new ge(new U(i),0);let c=new pe(H);return this.Yr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Hr)),!0)}),a),k.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){X(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(t.mutations,(s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new ge(t,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.ni=e,this.docs=(function(){return new se(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=It();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ce.newInvalidDocument(s))})),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=It();const a=t.path,c=new U(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Wv(qv(f),r)<=0||(s.has(f.key)||Li(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$(9500)}ri(e,t){return k.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new mw(this)}getSize(e){return k.resolve(this.size)}}class mw extends aw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),k.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.persistence=e,this.ii=new Tn((t=>Qa(t)),Ja),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.si=0,this.oi=new nc,this.targetCount=0,this._i=Hn.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),k.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Hn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.hr(t),k.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),k.waitFor(i).next((()=>s))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.ai={},this.overlays={},this.ui=new ki(0),this.ci=!1,this.ci=!0,this.li=new dw,this.referenceDelegate=e(this),this.hi=new gw(this),this.indexManager=new ew,this.remoteDocumentCache=(function(s){return new pw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new XE(t),this.Ti=new uw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new fw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new _w(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return k.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class _w extends zv{constructor(e){super(),this.currentSequenceNumber=e}}class rc{constructor(e){this.persistence=e,this.Ai=new nc,this.Ri=null}static Vi(e){return new rc(e)}get mi(){if(this.Ri)return this.Ri;throw $(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,(r=>{const s=U.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,j.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return k.or([()=>k.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class mi{constructor(e,t){this.persistence=e,this.gi=new Tn((r=>Qv(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=ow(this,t)}static Vi(e,t){return new mi(e,t)}Ii(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return k.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?k.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,j.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zs(e.data.value)),t}Sr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Km()?8:Gv(Pe())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new yw;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Pn()<=G.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(Pn()<=G.DEBUG&&O("QueryEngine","Query:",kn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Pn()<=G.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):k.resolve())}ps(e,t){if(Nu(t))return k.resolve(null);let r=st(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=hi(t,null,"F"),r=st(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=K(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.bs(t,c);return this.Ds(t,d,a,u.readTime)?this.ps(e,hi(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ys(e,t,r,s){return Nu(t)||s.isEqual(j.min())?k.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?k.resolve(null):(Pn()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),kn(t)),this.vs(e,a,t,jv(s,Wr)).next((c=>c)))}))}bs(e,t){let r=new pe(lf(e));return t.forEach(((s,i)=>{Li(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Pn()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",kn(t)),this.gs.getDocumentsMatchingQuery(e,t,zt.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="LocalStore",Ew=3e8;class ww{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new se(H),this.Ms=new Tn((i=>Qa(i)),Ja),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Iw(n,e,t,r){return new ww(n,e,t,r)}async function Df(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=K();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function Tw(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,f){const m=d.batch,g=m.keys();let T=k.resolve();return g.forEach((C=>{T=T.next((()=>f.getEntry(u,C))).next((D=>{const x=d.docVersions.get(C);X(x!==null,48541),D.version.compareTo(x)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))}))})),T.next((()=>c.mutationQueue.removeMutationBatch(u,m)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=K();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Nf(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function bw(n,e){const t=W(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((f,m)=>{const g=s.get(m);if(!g)return;c.push(t.hi.removeMatchingKeys(i,f.removedDocuments,m).next((()=>t.hi.addMatchingKeys(i,f.addedDocuments,m))));let T=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(we.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),s=s.insert(m,T),(function(D,x,V){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Ew?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(g,T,f)&&c.push(t.hi.updateTargetData(i,T))}));let u=It(),d=K();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(Aw(i,a,e.documentUpdates).next((f=>{u=f.Ls,d=f.ks}))),!r.isEqual(j.min())){const f=t.hi.getLastRemoteSnapshotVersion(i).next((m=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return k.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function Aw(n,e,t){let r=K(),s=K();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=It();return t.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):O(ic,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Ls:a,ks:s}}))}function Sw(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=za),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Rw(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,k.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new Ut(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function ha(n,e,t){const r=W(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Xn(a))throw a;O(ic,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function zu(n,e,t){const r=W(n);let s=j.min(),i=K();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,f){const m=W(u),g=m.Ms.get(f);return g!==void 0?k.resolve(m.Fs.get(g)):m.hi.getTargetData(d,f)})(r,a,st(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:j.min(),t?i:K()))).next((c=>(Cw(r,pE(e),c),{documents:c,qs:i})))))}function Cw(n,e,t){let r=n.xs.get(e)||j.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Gu{constructor(){this.activeTargetIds=EE()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pw{constructor(){this.Fo=new Gu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Gu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="ConnectivityMonitor";class Qu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){O(Ku,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){O(Ku,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms=null;function da(){return Ms===null?Ms=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ms++,"0x"+Ms.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="RestConnection",xw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Dw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ci?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=da(),c=this.Go(e,t.toUriEncodedString());O(Vo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:d}=new URL(c),f=Gn(d);return this.jo(e,c,u,r,f).then((m=>(O(Vo,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw Ht(Vo,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Jn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=xw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="WebChannelConnection";class Vw extends Dw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=da();return new Promise(((c,u)=>{const d=new Vd;d.setWithCredentials(!0),d.listenOnce(Ld.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Hs.NO_ERROR:const m=d.getResponseJson();O(Se,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Hs.TIMEOUT:O(Se,`RPC '${e}' ${a} timed out`),u(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case Hs.HTTP_ERROR:const g=d.getStatus();if(O(Se,`RPC '${e}' ${a} failed with status:`,g,"response text:",d.getResponseText()),g>0){let T=d.getResponseJson();Array.isArray(T)&&(T=T[0]);const C=T==null?void 0:T.error;if(C&&C.status&&C.message){const D=(function(V){const F=V.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(F)>=0?F:P.UNKNOWN})(C.status);u(new L(D,C.message))}else u(new L(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new L(P.UNAVAILABLE,"Connection failed."));break;default:$(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{O(Se,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);O(Se,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",f,r,15)}))}P_(e,t,r){const s=da(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Fd(),c=Md(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");O(Se,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.T_(m);let g=!1,T=!1;const C=new Nw({Ho:x=>{T?O(Se,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(g||(O(Se,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),O(Se,`RPC '${e}' stream ${s} sending:`,x),m.send(x))},Yo:()=>m.close()}),D=(x,V,F)=>{x.listen(V,(q=>{try{F(q)}catch(J){setTimeout((()=>{throw J}),0)}}))};return D(m,Sr.EventType.OPEN,(()=>{T||(O(Se,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),D(m,Sr.EventType.CLOSE,(()=>{T||(T=!0,O(Se,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(m))})),D(m,Sr.EventType.ERROR,(x=>{T||(T=!0,Ht(Se,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),C.__(new L(P.UNAVAILABLE,"The operation could not be completed")))})),D(m,Sr.EventType.MESSAGE,(x=>{var V;if(!T){const F=x.data[0];X(!!F,16349);const q=F,J=(q==null?void 0:q.error)||((V=q[0])===null||V===void 0?void 0:V.error);if(J){O(Se,`RPC '${e}' stream ${s} received error:`,J);const $e=J.status;let le=(function(v){const E=he[v];if(E!==void 0)return Ef(E)})($e),w=J.message;le===void 0&&(le=P.INTERNAL,w="Unknown error status: "+$e+" with message "+J.message),T=!0,C.__(new L(le,w)),m.close()}else O(Se,`RPC '${e}' stream ${s} received:`,F),C.a_(F)}})),D(c,Od.STAT_EVENT,(x=>{x.stat===ea.PROXY?O(Se,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===ea.NOPROXY&&O(Se,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Lo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n){return new FE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="PersistentStream";class Lf{constructor(e,t,r,s,i,a,c,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Vf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(wt(t.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new L(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return O(Ju,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(O(Ju,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Lw extends Lf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=$E(this.serializer,e),r=(function(i){if(!("targetChange"in i))return j.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?it(a.readTime):j.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=ua(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=ia(u)?{documents:WE(i,u)}:{query:HE(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Tf(i,a.resumeToken);const d=aa(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(j.min())>0){c.readTime=pi(i,a.snapshotVersion.toTimestamp());const d=aa(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const r=GE(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=ua(this.serializer),t.removeTarget=e,this.k_(t)}}class Ow extends Lf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=qE(e.writeResults,e.commitTime),r=it(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=ua(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>jE(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{}class Fw extends Mw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,ca(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(P.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,ca(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(P.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Uw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(wt(t),this._a=!1):O("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="RemoteStore";class Bw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{bn(this)&&(O(In,"Restarting streams for network reachability change."),await(async function(u){const d=W(u);d.Ia.add(4),await ls(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Bi(d)})(this))}))})),this.Aa=new Uw(r,s)}}async function Bi(n){if(bn(n))for(const e of n.da)await e(!0)}async function ls(n){for(const e of n.da)await e(!1)}function Of(n,e){const t=W(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),lc(t)?cc(t):er(t).x_()&&ac(t,e))}function oc(n,e){const t=W(n),r=er(t);t.Ta.delete(e),r.x_()&&Mf(t,e),t.Ta.size===0&&(r.x_()?r.B_():bn(t)&&t.Aa.set("Unknown"))}function ac(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}er(n).H_(e)}function Mf(n,e){n.Ra.$e(e),er(n).Y_(e)}function cc(n){n.Ra=new VE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),er(n).start(),n.Aa.aa()}function lc(n){return bn(n)&&!er(n).M_()&&n.Ta.size>0}function bn(n){return W(n).Ia.size===0}function Ff(n){n.Ra=void 0}async function $w(n){n.Aa.set("Online")}async function jw(n){n.Ta.forEach(((e,t)=>{ac(n,e)}))}async function qw(n,e){Ff(n),lc(n)?(n.Aa.la(e),cc(n)):n.Aa.set("Unknown")}async function Ww(n,e,t){if(n.Aa.set("Online"),e instanceof If&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){O(In,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gi(n,r)}else if(e instanceof Qs?n.Ra.Ye(e):e instanceof wf?n.Ra.it(e):n.Ra.et(e),!t.isEqual(j.min()))try{const r=await Nf(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ta.get(d);f&&i.Ta.set(d,f.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const f=i.Ta.get(u);if(!f)return;i.Ta.set(u,f.withResumeToken(we.EMPTY_BYTE_STRING,f.snapshotVersion)),Mf(i,u);const m=new Ut(f.target,u,d,f.sequenceNumber);ac(i,m)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){O(In,"Failed to raise snapshot:",r),await gi(n,r)}}async function gi(n,e,t){if(!Xn(e))throw e;n.Ia.add(1),await ls(n),n.Aa.set("Offline"),t||(t=()=>Nf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(In,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Bi(n)}))}function Uf(n,e){return e().catch((t=>gi(n,t,e)))}async function $i(n){const e=W(n),t=Jt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:za;for(;Hw(e);)try{const s=await Sw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,zw(e,s)}catch(s){await gi(e,s)}Bf(e)&&$f(e)}function Hw(n){return bn(n)&&n.Pa.length<10}function zw(n,e){n.Pa.push(e);const t=Jt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Bf(n){return bn(n)&&!Jt(n).M_()&&n.Pa.length>0}function $f(n){Jt(n).start()}async function Gw(n){Jt(n).na()}async function Kw(n){const e=Jt(n);for(const t of n.Pa)e.X_(t.mutations)}async function Qw(n,e,t){const r=n.Pa.shift(),s=Za.from(r,e,t);await Uf(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await $i(n)}async function Jw(n,e){e&&Jt(n).Z_&&await(async function(r,s){if((function(a){return DE(a)&&a!==P.ABORTED})(s.code)){const i=r.Pa.shift();Jt(r).N_(),await Uf(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await $i(r)}})(n,e),Bf(n)&&$f(n)}async function Yu(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),O(In,"RemoteStore received new credentials");const r=bn(t);t.Ia.add(3),await ls(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Bi(t)}async function Yw(n,e){const t=W(n);e?(t.Ia.delete(2),await Bi(t)):e||(t.Ia.add(2),await ls(t),t.Aa.set("Unknown"))}function er(n){return n.Va||(n.Va=(function(t,r,s){const i=W(t);return i.ia(),new Lw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:$w.bind(null,n),e_:jw.bind(null,n),n_:qw.bind(null,n),J_:Ww.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),lc(n)?cc(n):n.Aa.set("Unknown")):(await n.Va.stop(),Ff(n))}))),n.Va}function Jt(n){return n.ma||(n.ma=(function(t,r,s){const i=W(t);return i.ia(),new Ow(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Gw.bind(null,n),n_:Jw.bind(null,n),ea:Kw.bind(null,n),ta:Qw.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await $i(n)):(await n.ma.stop(),n.Pa.length>0&&(O(In,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new uc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hc(n,e){if(wt("AsyncQueue",`${e}: ${n}`),Xn(n))return new L(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{static emptySet(e){return new Fn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=Rr(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Fn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.fa=new se(U.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):$(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class zn{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new zn(e,t,Fn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Zw{constructor(){this.queries=Zu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=W(t),i=s.queries;s.queries=Zu(),i.forEach(((a,c)=>{for(const u of c.wa)u.onError(r)}))})(this,new L(P.ABORTED,"Firestore shutting down"))}}function Zu(){return new Tn((n=>cf(n)),Vi)}async function dc(n,e){const t=W(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new Xw,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=hc(a,`Initialization of query '${kn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&pc(t)}async function fc(n,e){const t=W(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function eI(n,e){const t=W(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&pc(t)}function tI(n,e,t){const r=W(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function pc(n){n.Da.forEach((e=>{e.next()}))}var fa,eh;(eh=fa||(fa={})).Fa="default",eh.Cache="cache";class mc{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==fa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.key=e}}class qf{constructor(e){this.key=e}}class nI{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=K(),this.mutatedKeys=K(),this.Xa=lf(e),this.eu=new Fn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Xu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,m)=>{const g=s.get(f),T=Li(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let x=!1;g&&T?g.data.isEqual(T.data)?C!==D&&(r.track({type:3,doc:T}),x=!0):this.iu(g,T)||(r.track({type:2,doc:T}),x=!0,(u&&this.Xa(T,u)>0||d&&this.Xa(T,d)<0)&&(c=!0)):!g&&T?(r.track({type:0,doc:T}),x=!0):g&&!T&&(r.track({type:1,doc:g}),x=!0,(u||d)&&(c=!0)),x&&(T?(a=a.add(T),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((f,m)=>(function(T,C){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{At:x})}};return D(T)-D(C)})(f.type,m.type)||this.Xa(f.doc,m.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new zn(this.query,e.eu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Xu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=K(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new qf(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new jf(r))})),t}uu(e){this.Ha=e.qs,this.Za=K();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return zn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const gc="SyncEngine";class rI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class sI{constructor(e){this.key=e,this.lu=!1}}class iI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Tn((c=>cf(c)),Vi),this.Tu=new Map,this.Iu=new Set,this.du=new se(U.comparator),this.Eu=new Map,this.Au=new nc,this.Ru={},this.Vu=new Map,this.mu=Hn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function oI(n,e,t=!0){const r=Qf(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Wf(r,e,t,!0),s}async function aI(n,e){const t=Qf(n);await Wf(t,e,!0,!1)}async function Wf(n,e,t,r){const s=await Rw(n.localStore,st(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await cI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Of(n.remoteStore,s),c}async function cI(n,e,t,r,s){n.gu=(m,g,T)=>(async function(D,x,V,F){let q=x.view.nu(V);q.Ds&&(q=await zu(D.localStore,x.query,!1).then((({documents:w})=>x.view.nu(w,q))));const J=F&&F.targetChanges.get(x.targetId),$e=F&&F.targetMismatches.get(x.targetId)!=null,le=x.view.applyChanges(q,D.isPrimaryClient,J,$e);return nh(D,x.targetId,le._u),le.snapshot})(n,m,g,T);const i=await zu(n.localStore,e,!0),a=new nI(e,i.qs),c=a.nu(i.documents),u=cs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);nh(n,t,d._u);const f=new rI(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function lI(n,e,t){const r=W(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!Vi(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ha(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&oc(r.remoteStore,s.targetId),pa(r,s.targetId)})).catch(Yn)):(pa(r,s.targetId),await ha(r.localStore,s.targetId,!0))}async function uI(n,e){const t=W(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),oc(t.remoteStore,r.targetId))}async function hI(n,e,t){const r=yI(n);try{const s=await(function(a,c){const u=W(a),d=ne.now(),f=c.reduce(((T,C)=>T.add(C.key)),K());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let C=It(),D=K();return u.Os.getEntries(T,f).next((x=>{C=x,C.forEach(((V,F)=>{F.isValidDocument()||(D=D.add(V))}))})).next((()=>u.localDocuments.getOverlayedDocuments(T,C))).next((x=>{m=x;const V=[];for(const F of c){const q=RE(F,m.get(F.key).overlayedDocument);q!=null&&V.push(new tn(F.key,q,Zd(q.value.mapValue),He.exists(!0)))}return u.mutationQueue.addMutationBatch(T,d,V,c)})).next((x=>{g=x;const V=x.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(T,x.batchId,V)}))})).then((()=>({batchId:g.batchId,changes:hf(m)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new se(H)),d=d.insert(c,u),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,t),await us(r,s.changes),await $i(r.remoteStore)}catch(s){const i=hc(s,"Failed to persist write");t.reject(i)}}async function Hf(n,e){const t=W(n);try{const r=await bw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?X(a.lu,14607):s.removedDocuments.size>0&&(X(a.lu,42227),a.lu=!1))})),await us(t,r,e)}catch(r){await Yn(r)}}function th(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=W(a);u.onlineState=c;let d=!1;u.queries.forEach(((f,m)=>{for(const g of m.wa)g.va(c)&&(d=!0)})),d&&pc(u)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dI(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new se(U.comparator);a=a.insert(i,Ce.newNoDocument(i,j.min()));const c=K().add(i),u=new Fi(j.min(),new Map,new se(H),a,c);await Hf(r,u),r.du=r.du.remove(i),r.Eu.delete(e),_c(r)}else await ha(r.localStore,e,!1).then((()=>pa(r,e,t))).catch(Yn)}async function fI(n,e){const t=W(n),r=e.batch.batchId;try{const s=await Tw(t.localStore,e);Gf(t,r,null),zf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await us(t,s)}catch(s){await Yn(s)}}async function pI(n,e,t){const r=W(n);try{const s=await(function(a,c){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next((m=>(X(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>u.localDocuments.getDocuments(d,f)))}))})(r.localStore,e);Gf(r,e,t),zf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await us(r,s)}catch(s){await Yn(s)}}function zf(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Gf(n,e,t){const r=W(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function pa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Kf(n,r)}))}function Kf(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(oc(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),_c(n))}function nh(n,e,t){for(const r of t)r instanceof jf?(n.Au.addReference(r.key,e),mI(n,r)):r instanceof qf?(O(gc,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Kf(n,r.key)):$(19791,{yu:r})}function mI(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(O(gc,"New document in limbo: "+t),n.Iu.add(r),_c(n))}function _c(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new U(ee.fromString(e)),r=n.mu.next();n.Eu.set(r,new sI(t)),n.du=n.du.insert(t,r),Of(n.remoteStore,new Ut(st(Ni(t.path)),r,"TargetPurposeLimboResolution",ki.ue))}}async function us(n,e,t){const r=W(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,u)=>{a.push(r.gu(u,e,t).then((d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=sc.Es(u.targetId,d);i.push(m)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(u,d){const f=W(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>k.forEach(d,(g=>k.forEach(g.Is,(T=>f.persistence.referenceDelegate.addReference(m,g.targetId,T))).next((()=>k.forEach(g.ds,(T=>f.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))))))}catch(m){if(!Xn(m))throw m;O(ic,"Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const T=f.Fs.get(g),C=T.snapshotVersion,D=T.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,D)}}})(r.localStore,i))}async function gI(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){O(gc,"User change. New user:",e.toKey());const r=await Df(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((u=>{u.reject(new L(P.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await us(t,r.Bs)}}function _I(n,e){const t=W(n),r=t.Eu.get(e);if(r&&r.lu)return K().add(r.key);{let s=K();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Qf(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_I.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dI.bind(null,e),e.hu.J_=eI.bind(null,e.eventManager),e.hu.pu=tI.bind(null,e.eventManager),e}function yI(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pI.bind(null,e),e}class _i{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ui(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Iw(this.persistence,new vw,e.initialUser,this.serializer)}Du(e){return new xf(rc.Vi,this.serializer)}bu(e){return new Pw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_i.provider={build:()=>new _i};class vI extends _i{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){X(this.persistence.referenceDelegate instanceof mi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new xf((r=>mi.Vi(r,t)),this.serializer)}}class ma{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>th(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gI.bind(null,this.syncEngine),await Yw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Zw})()}createDatastore(e){const t=Ui(e.databaseInfo.databaseId),r=(function(i){return new Vw(i)})(e.databaseInfo);return(function(i,a,c,u){return new Fw(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new Bw(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>th(this.syncEngine,t,0)),(function(){return Qu.C()?new Qu:new kw})())}createSyncEngine(e,t){return(function(s,i,a,c,u,d,f){const m=new iI(s,i,a,c,u,d);return f&&(m.fu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=W(s);O(In,"RemoteStore shutting down."),i.Ia.add(5),await ls(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ma.provider={build:()=>new ma};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="FirestoreClient";class EI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Re.UNAUTHENTICATED,this.clientId=Ha.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{O(Yt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(O(Yt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=hc(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Oo(n,e){n.asyncQueue.verifyOperationInProgress(),O(Yt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Df(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ht("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{O("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ht("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function rh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wI(n);O(Yt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Yu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Yu(e.remoteStore,s))),n._onlineComponents=e}async function wI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(Yt,"Using user provided OfflineComponentProvider");try{await Oo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ht("Error using user provided cache. Falling back to memory cache: "+t),await Oo(n,new _i)}}else O(Yt,"Using default OfflineComponentProvider"),await Oo(n,new vI(void 0));return n._offlineComponents}async function Jf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(Yt,"Using user provided OnlineComponentProvider"),await rh(n,n._uninitializedComponentsProvider._online)):(O(Yt,"Using default OnlineComponentProvider"),await rh(n,new ma))),n._onlineComponents}function II(n){return Jf(n).then((e=>e.syncEngine))}async function yi(n){const e=await Jf(n),t=e.eventManager;return t.onListen=oI.bind(null,e.syncEngine),t.onUnlisten=lI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uI.bind(null,e.syncEngine),t}function TI(n,e,t={}){const r=new _t;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const f=new yc({next:g=>{f.Ou(),a.enqueueAndForget((()=>fc(i,m)));const T=g.docs.has(c);!T&&g.fromCache?d.reject(new L(P.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&u&&u.source==="server"?d.reject(new L(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new mc(Ni(c.path),f,{includeMetadataChanges:!0,ka:!0});return dc(i,m)})(await yi(n),n.asyncQueue,e,t,r))),r.promise}function bI(n,e,t={}){const r=new _t;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const f=new yc({next:g=>{f.Ou(),a.enqueueAndForget((()=>fc(i,m))),g.fromCache&&u.source==="server"?d.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new mc(c,f,{includeMetadataChanges:!0,ka:!0});return dc(i,m)})(await yi(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="firestore.googleapis.com",ih=!0;class oh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Xf,this.ssl=ih}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ih;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nw)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$v("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ji{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Dv;switch(r.type){case"firstParty":return new Ov(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=sh.get(t);r&&(O("ComponentProvider","Removing Datastore"),sh.delete(t),r.terminate())})(this),Promise.resolve()}}function AI(n,e,t,r={}){var s;n=Le(n,ji);const i=Gn(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(Hh(`https://${u}`),zh("Firestore",!0)),a.host!==Xf&&a.host!==u&&Ht("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:r});if(!_n(d,c)&&(n._setSettings(d),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Re.MOCK_USER;else{f=Um(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Re(g)}n._authCredentials=new Nv(new Bd(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rt(this.firestore,e,this._query)}}class ce{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}toJSON(){return{type:ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(os(t,ce._jsonSchema))return new ce(e,r||null,new U(ee.fromString(t.referencePath)))}}ce._jsonSchemaVersion="firestore/documentReference/1.0",ce._jsonSchema={type:fe("string",ce._jsonSchemaVersion),referencePath:fe("string")};class Wt extends Rt{constructor(e,t,r){super(e,t,Ni(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new U(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function ot(n,e,...t){if(n=me(n),jd("collection","path",e),n instanceof ji){const r=ee.fromString(e,...t);return vu(r),new Wt(n,null,r)}{if(!(n instanceof ce||n instanceof Wt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return vu(r),new Wt(n.firestore,null,r)}}function Ue(n,e,...t){if(n=me(n),arguments.length===1&&(e=Ha.newId()),jd("doc","path",e),n instanceof ji){const r=ee.fromString(e,...t);return yu(r),new ce(n,null,new U(r))}{if(!(n instanceof ce||n instanceof Wt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return yu(r),new ce(n.firestore,n instanceof Wt?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="AsyncQueue";class ch{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Vf(this,"async_queue_retry"),this.oc=()=>{const r=Lo();r&&O(ah,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Lo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Lo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new _t;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Xn(e))throw e;O(ah,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,wt("INTERNAL UNHANDLED ERROR: ",lh(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=uc.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&$(47125,{hc:lh(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function lh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class Tt extends ji{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ch,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ch(e),this._firestoreClient=void 0,await e}}}function SI(n,e){const t=typeof n=="object"?n:Jh(),r=typeof n=="string"?n:ci,s=Va(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Mm("firestore");i&&AI(s,...i)}return s}function qi(n){if(n._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||RI(n),n._firestoreClient}function RI(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,u,d,f){return new Xv(c,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Yf(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new EI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this._byteString=e}static fromBase64String(e){try{return new We(we.fromBase64String(e))}catch(t){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new We(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:We._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(os(e,We._jsonSchema))return We.fromBase64String(e.bytes)}}We._jsonSchemaVersion="firestore/bytes/1.0",We._jsonSchema={type:fe("string",We._jsonSchemaVersion),bytes:fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:at._jsonSchemaVersion}}static fromJSON(e){if(os(e,at._jsonSchema))return new at(e.latitude,e.longitude)}}at._jsonSchemaVersion="firestore/geoPoint/1.0",at._jsonSchema={type:fe("string",at._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(os(e,ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ct(e.vectorValues);throw new L(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ct._jsonSchemaVersion="firestore/vectorValue/1.0",ct._jsonSchema={type:fe("string",ct._jsonSchemaVersion),vectorValues:fe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=/^__.*__$/;class PI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new as(e,this.data,t,this.fieldTransforms)}}class Zf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new tn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ep(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{Ec:n})}}class Ec{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ec(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return vi(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(ep(this.Ec)&&CI.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class kI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ui(e)}Dc(e,t,r,s=!1){return new Ec({Ec:e,methodName:t,bc:r,path:ve.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hi(n){const e=n._freezeSettings(),t=Ui(n._databaseId);return new kI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tp(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);wc("Data must be an object, but it was:",a,r);const c=np(r,a);let u,d;if(i.merge)u=new Fe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=ga(e,m,t);if(!a.contains(g))throw new L(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);sp(f,g)||f.push(g)}u=new Fe(f),d=a.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,d=a.fieldTransforms;return new PI(new Ne(c),u,d)}class zi extends vc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zi}}function xI(n,e,t,r){const s=n.Dc(1,e,t);wc("Data must be an object, but it was:",s,r);const i=[],a=Ne.empty();en(r,((u,d)=>{const f=Ic(e,u,t);d=me(d);const m=s.gc(f);if(d instanceof zi)i.push(f);else{const g=hs(d,m);g!=null&&(i.push(f),a.set(f,g))}}));const c=new Fe(i);return new Zf(a,c,s.fieldTransforms)}function DI(n,e,t,r,s,i){const a=n.Dc(1,e,t),c=[ga(e,r,t)],u=[s];if(i.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(ga(e,i[g])),u.push(i[g+1]);const d=[],f=Ne.empty();for(let g=c.length-1;g>=0;--g)if(!sp(d,c[g])){const T=c[g];let C=u[g];C=me(C);const D=a.gc(T);if(C instanceof zi)d.push(T);else{const x=hs(C,D);x!=null&&(d.push(T),f.set(T,x))}}const m=new Fe(d);return new Zf(f,m,a.fieldTransforms)}function NI(n,e,t,r=!1){return hs(t,n.Dc(r?4:3,e))}function hs(n,e){if(rp(n=me(n)))return wc("Unsupported field value:",e,n),np(n,e);if(n instanceof vc)return(function(r,s){if(!ep(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=hs(c,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ne.fromDate(r);return{timestampValue:pi(s.serializer,i)}}if(r instanceof ne){const i=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pi(s.serializer,i)}}if(r instanceof at)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof We)return{bytesValue:Tf(s.serializer,r._byteString)};if(r instanceof ce){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ct)return(function(a,c){return{mapValue:{fields:{[Yd]:{stringValue:Xd},[li]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Ya(c.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Pi(r)}`)})(n,e)}function np(n,e){const t={};return Hd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):en(n,((r,s)=>{const i=hs(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function rp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof at||n instanceof We||n instanceof ce||n instanceof vc||n instanceof ct)}function wc(n,e,t){if(!rp(t)||!qd(t)){const r=Pi(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function ga(n,e,t){if((e=me(e))instanceof Wi)return e._internalPath;if(typeof e=="string")return Ic(n,e);throw vi("Field path arguments must be of type string or ",n,!1,void 0,t)}const VI=new RegExp("[~\\*/\\[\\]]");function Ic(n,e,t){if(e.search(VI)>=0)throw vi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wi(...e.split("."))._internalPath}catch{throw vi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new L(P.INVALID_ARGUMENT,c+n+u)}function sp(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class LI extends ip{data(){return super.data()}}function Gi(n,e){return typeof e=="string"?Ic(n,e):e instanceof Wi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tc{}class bc extends Tc{}function Yr(n,e,...t){let r=[];e instanceof Tc&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof Ac)).length,c=i.filter((u=>u instanceof Ki)).length;if(a>1||a>0&&c>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Ki extends bc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ki(e,t,r)}_apply(e){const t=this._parse(e);return cp(e._query,t),new Rt(e.firestore,e.converter,oa(e._query,t))}_parse(e){const t=Hi(e.firestore);return(function(i,a,c,u,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){fh(m,f);const C=[];for(const D of m)C.push(dh(u,i,D));g={arrayValue:{values:C}}}else g=dh(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||fh(m,f),g=NI(c,a,m,f==="in"||f==="not-in");return de.create(d,f,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ap(n,e,t){const r=e,s=Gi("where",n);return Ki._create(s,r,t)}class Ac extends Tc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ac(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ye.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)cp(a,u),a=oa(a,u)})(e._query,t),new Rt(e.firestore,e.converter,oa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sc extends bc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Sc(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Kr(i,a)})(e._query,this._field,this._direction);return new Rt(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Zn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function _a(n,e="asc"){const t=e,r=Gi("orderBy",n);return Sc._create(r,t)}class Rc extends bc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Rc(e,t,r)}_apply(e){return new Rt(e.firestore,e.converter,hi(e._query,this._limit,this._limitType))}}function hh(n){return Rc._create("limit",n,"F")}function dh(n,e,t){if(typeof(t=me(t))=="string"){if(t==="")throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!af(e)&&t.indexOf("/")!==-1)throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!U.isDocumentKey(r))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ru(n,new U(r))}if(t instanceof ce)return Ru(n,t._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pi(t)}.`)}function fh(n,e){if(!Array.isArray(n)||n.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cp(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class OI{convertValue(e,t="none"){switch(Qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return en(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[li].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>ue(a.doubleValue)));return new ct(i)}convertGeoPoint(e){return new at(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Di(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Hr(e));default:return null}}convertTimestamp(e){const t=Gt(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);X(Pf(r),9688,{name:e});const s=new zr(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Pr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pn extends ip{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Js(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Gi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=pn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}pn._jsonSchemaVersion="firestore/documentSnapshot/1.0",pn._jsonSchema={type:fe("string",pn._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Js extends pn{data(e={}){return super.data(e)}}class mn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Pr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Js(this._firestore,this._userDataWriter,r.key,r,new Pr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new Js(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Js(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:MI(c.type),doc:u,oldIndex:d,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ha.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){n=Le(n,ce);const e=Le(n.firestore,Tt);return TI(qi(e),n._key).then((t=>hp(e,n,t)))}mn._jsonSchemaVersion="firestore/querySnapshot/1.0",mn._jsonSchema={type:fe("string",mn._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};class Cc extends OI{constructor(e){super(),this.firestore=e}convertBytes(e){return new We(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,t)}}function ya(n){n=Le(n,Rt);const e=Le(n.firestore,Tt),t=qi(e),r=new Cc(e);return op(n._query),bI(t,n._query).then((s=>new mn(e,r,n,s)))}function Ct(n,e,t){n=Le(n,ce);const r=Le(n.firestore,Tt),s=lp(n.converter,e,t);return Yi(r,[tp(Hi(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,He.none())])}function tr(n,e,t,...r){n=Le(n,ce);const s=Le(n.firestore,Tt),i=Hi(s);let a;return a=typeof(e=me(e))=="string"||e instanceof Wi?DI(i,"updateDoc",n._key,e,t,r):xI(i,"updateDoc",n._key,e),Yi(s,[a.toMutation(n._key,He.exists(!0))])}function Qi(n){return Yi(Le(n.firestore,Tt),[new Xa(n._key,He.none())])}function Ji(n,e){const t=Le(n.firestore,Tt),r=Ue(n),s=lp(n.converter,e);return Yi(t,[tp(Hi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,He.exists(!1))]).then((()=>r))}function Mo(n,...e){var t,r,s;n=me(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||uh(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(uh(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,d,f;if(n instanceof ce)d=Le(n.firestore,Tt),f=Ni(n._key.path),u={next:m=>{e[a]&&e[a](hp(d,n,m))},error:e[a+1],complete:e[a+2]};else{const m=Le(n,Rt);d=Le(m.firestore,Tt),f=m._query;const g=new Cc(d);u={next:T=>{e[a]&&e[a](new mn(d,g,m,T))},error:e[a+1],complete:e[a+2]},op(n._query)}return(function(g,T,C,D){const x=new yc(D),V=new mc(T,x,C);return g.asyncQueue.enqueueAndForget((async()=>dc(await yi(g),V))),()=>{x.Ou(),g.asyncQueue.enqueueAndForget((async()=>fc(await yi(g),V)))}})(qi(d),f,c,u)}function Yi(n,e){return(function(r,s){const i=new _t;return r.asyncQueue.enqueueAndForget((async()=>hI(await II(r),s,i))),i.promise})(qi(n),e)}function hp(n,e,t){const r=t.docs.get(e._key),s=new Cc(n);return new pn(n,s,e._key,r,new Pr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Jn=s})(Kn),$n(new yn("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Tt(new Vv(r.getProvider("auth-internal")),new Mv(a,r.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(d.options.projectId,f)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),jt(fu,pu,e),jt(fu,pu,"esm2017")})();const FI={apiKey:"AIzaSyCHuTKvBK0R6poomtYMVtbqiamKbsoHX6o",authDomain:"md-reptrack.firebaseapp.com",projectId:"md-reptrack",storageBucket:"md-reptrack.firebasestorage.app",messagingSenderId:"196897655189",appId:"1:196897655189:web:22859f09e3ce8db015ce9c",measurementId:"G-W271BRRRDE"},dp=Qh(FI),Tr=Cv(dp),Ee=SI(dp),nr="ul-cardio-v1",tt=10,va=3,UI=8,BI=5,$I=12,fp={barbell:{inc:.5,step:.5},machine:{inc:.5,step:.5},dumbbell:{inc:.5,step:.5},heavy:{inc:5,step:2.5},bw:{inc:0,step:0}},un=10,Ei=.5;function jI(n){const e=Number(n);if(e>=un){const t=Math.floor((e-un)/Ei+1e-9);return un+t*Ei}return Math.max(1,Math.floor(e+1e-9))}function qI(n,e){const t=Number(n);return e>0?t<un-1?t+1:t<un?un:t+Ei:t<=un?Math.max(0,t-1):t-Ei}function WI(n){return Math.round(Number(n)*2)/2}function pp(n,e,t=1){if(n.equip==="dumbbell")return qI(e,t);const r=fp[n.equip]||{},s=t>0?r.inc??r.step:r.step;let i=Math.max(0,Number(e)+t*(s||0));return(n.equip==="machine"||n.equip==="barbell")&&(i=WI(i)),i}const oe=(n,e,t,r={})=>({name:n,start:e,equip:t,...r}),hn=(n,e)=>({name:n,minutes:e,cardio:!0}),dn="Incline Walk",mp="Intervals (Bike/Rower)",HI=[dn,mp],gp={upperA:{label:"Upper A",items:[oe("Bench Press",35,"barbell"),oe("Chest-Supported Row",35,"machine"),oe("Overhead Press",17.5,"barbell"),oe("Lat Pulldown",35,"machine"),oe("Dumbbell Curl",10,"dumbbell",{each:!0,repsFirst:!0,superset:"Tricep Pushdown"}),oe("Tricep Pushdown",15,"machine",{repsFirst:!0,superset:"Dumbbell Curl"}),hn(dn,30)]},lowerA:{label:"Lower A",items:[oe("Hack Squat",50,"heavy"),oe("Dumbbell Romanian Deadlift",16,"dumbbell",{each:!0,repsFirst:!0}),oe("Leg Curl",25,"machine"),oe("Dumbbell Reverse Lunge",8,"dumbbell",{each:!0,repsFirst:!0,note:"each leg"}),oe("Standing Calf Raise",40,"machine"),hn(dn,30)]},upperB:{label:"Upper B",items:[oe("Incline Dumbbell Press",14,"dumbbell",{each:!0,repsFirst:!0}),oe("Seated Cable Row",30,"machine"),oe("Seated Dumbbell Shoulder Press",12,"dumbbell",{each:!0,repsFirst:!0}),oe("Close-Grip Lat Pulldown",35,"machine"),oe("Lateral Raise",6,"dumbbell",{each:!0,repsFirst:!0,superset:"Face Pull"}),oe("Face Pull",14,"machine",{repsFirst:!0,superset:"Lateral Raise"}),hn(dn,30)]},lowerB:{label:"Lower B",items:[oe("Barbell Hip Thrust",50,"barbell"),oe("Leg Press",60,"heavy"),oe("Leg Extension",30,"machine"),oe("Leg Curl",25,"machine"),oe("Standing Calf Raise",40,"machine"),hn(dn,30)]},cardio:{label:"Cardio",items:[]},rest:{label:"Rest",items:[]}},_p=["rest","upperA","lowerA","cardio","upperB","lowerB","cardio"];function wi(n){const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)}function zI(n){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function yp(n){return _p[wi(n).getDay()]}function GI(n){const e=wi(n),t=e.getDay();return e.setDate(e.getDate()+(t===0?1:1-t)),zI(e)}function KI(n,e){const t=Math.round((wi(e)-wi(n))/864e5);return Math.max(1,Math.floor(t/7)+1)}function QI(n,e){const t=gp[n];if(n==="cardio"){const i=e>=4?[hn(mp,20),hn(dn,25)]:[hn(dn,45)];return{key:n,label:t.label,items:i,note:e>=4?"Intervals: 1 min hard, 2 min easy":""}}let r=0;const s=t.items.map((i,a)=>{if(i.cardio)return i;r++;const c=e>UI&&r<=2?va+1:va,u=!!i.superset&&t.items.findIndex(d=>d.name===i.superset)>a;return{...i,sets:c,supersetFirst:u}});return{key:n,label:t.label,items:s,note:""}}function JI(n,e){return e?Math.floor(n/e+1e-9)*e:n}function vp(n,e,t,r){const s={};return n.forEach(i=>{if(i.program!==nr||i.exercise!==e)return;const a=r(i);!a||a>=t||(s[a]||(s[a]={dateId:a,weight:i.weight,reps:[],targetSets:i.targetSets||va,targetReps:i.targetReps||tt}),s[a].reps.push(Number(i.reps)||0))}),Object.values(s).sort((i,a)=>i.dateId<a.dateId?1:-1)}function YI(n,e,t,r,s=3){const i=vp(n,e,t,r);if(!i.length)return null;const a=i[0].dateId,c=n.filter(u=>u.program===nr&&u.exercise===e&&r(u)===a).sort((u,d)=>(u.setIndex??0)-(d.setIndex??0)).slice(0,s);return c.length?{dateId:a,weight:c[0].weight,reps:c.map(u=>Number(u.reps)||0)}:null}function ph(n){const e=n.targetReps||tt;return n.reps.length>=n.targetSets&&n.reps.every(t=>t>=e)}function XI(n,e){var u;if(n.equip==="bw")return{weight:"BW",reps:tt,reason:"bw"};if(e.length===0)return{weight:n.start,reps:tt,reason:"start"};const t=e[0],r=Number(t.weight),s=n.repsFirst&&t.targetReps||tt,i=((u=fp[n.equip])==null?void 0:u.step)||0;if(ph(t))return n.repsFirst&&s<$I?{weight:r,reps:s+1,reason:"reps"}:{weight:pp(n,r,1),reps:tt,reason:"up"};const a=e.slice(0,3);return a.length===3&&a.every(d=>Number(d.weight)===r&&(d.targetReps||tt)===t.targetReps&&!ph(d))?{weight:n.equip==="dumbbell"?jI(r*.9):JI(r*.9,i),reps:tt,reason:"deload"}:{weight:r,reps:s,reason:"same"}}function ZI(n,e,t){return pp(n,e,t)}function eT(n,e=tt){return n==null?e:n<=BI?null:Math.min(n,e)-1}const kr=["Bench Press","Omni Row","Incline DB Press","Lateral Raise","Tricep Pushdown","Hack Squat","Romanian Deadlift","Bulgarian Split Squat","Standing Calf Raise","Overhead Press","Heavy Pulldowns","Face Pull","Hammer Curls","EZ Bar Curls","Trap Bar Deadlift","Leg Press","Leg Extension","Leg Curl"],gn=["Bike/row conditioning","Running",...HI],tT={1:["Planks","Super man (YWT)","Child pose/Back Stretch","Upward/Downward","Bridge","V1","Lungeattack1","Sky1","lunge knee 1","lunge knee deeper hold 1","hold foot 1","V2","Lungeattack2","Sky2","lunge knee 2","lunge knee deeper hold 2","hold foot 2","Pigeon 52"],2:["PR Static Hold Left Right","PR Dynamic Left Right","PR Dynamic knee/foot up 10 reps each","PR Dynamic push up using feet","PR Dynamic Stretch 2 each","Warriors 1 (30s each L/R)","Warriors 2 (30s each L/R)","Warriors 3 (30s each L/R)","Warriors 4","Warriors 5","Labada yoga squat + hands up","Necks/Arms","Standing back stretch","Wall sits","Monkey","Bear","Crab","Frog"]},mh=["#00E676","#3B82F6","#F59E0B","#EF4444","#A855F7","#EC4899","#06B6D4","#F97316","#8B5CF6","#14B8A6","#F43F5E","#10B981","#6366F1","#84CC16","#D946EF"],R={currentUser:null,unsubscribes:[],chartInstance:null,chartModule:null,availableExercises:[...kr],workoutsCache:[],bodyweightCache:[],sessionsCache:{},todayBWDocId:null,allWorkoutsCache:[],chartDefaultApplied:!1},Ep={"lateral raises":"Lateral Raise","leg extensions":"Leg Extension","tricep pushdowns":"Tricep Pushdown","standing calf raises":"Standing Calf Raise"},nT={...Ep};function Be(n){if(n==null||n==="")return n??"";const e=String(n).trim();return nT[e.toLowerCase()]??e}function Xe(n){return Be(n).toLowerCase()}function Mr(n,e){const t=Xe(e);return n.filter(r=>r.exercise&&Xe(r.exercise)===t)}function wp(n){const e=new Map;for(const t of n){if(!t.exercise)continue;const r=Be(t.exercise),s=Xe(r);e.has(s)||e.set(s,r)}return[...e.values()].sort()}function Ip(n,e=[]){const t={};let r=0;for(const a of n){if(!a.exercise)continue;const c=Be(a.exercise);if(c===a.exercise)continue;r+=1;const u=`${a.exercise} → ${c}`;t[u]=(t[u]||0)+1}let s=0;const i={};for(const a of e){const c=Be(a);if(c===a)continue;s+=1;const u=`${a} → ${c}`;i[u]=(i[u]||0)+1}return{workoutUpdates:r,listUpdates:s,workoutRenames:t,listRenames:i,needsUpdate:r>0||s>0}}function Tp(n){const e=[],t=new Set;for(const r of n){const s=Be(r),i=Xe(s);t.has(i)||(t.add(i),e.push(s))}return e}function ae(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ze(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Fo(n,e=Date.now()){return Math.max(0,Math.ceil((n-e)/1e3))}function Ea(n){const e=[],t={};return n.forEach(r=>{if(r.type!=="workout"||!r.program||r.setIndex==null||!r.timestamp){e.push(r);return}const s=Be(r.exercise),i=`${Ze(r.timestamp.toDate())}|${s}`;t[i]||(t[i]={type:"set-group",key:i,exercise:s,sets:[]},e.push(t[i])),t[i].sets.push(r)}),Object.values(t).forEach(r=>r.sets.sort((s,i)=>s.setIndex-i.setIndex)),e}function gh(n,e,t="Saving..."){n&&(e?(n.dataset.originalHtml||(n.dataset.originalHtml=n.innerHTML),n.disabled=!0,n.innerHTML=`<span class="inline-block w-4 h-4 border-2 border-bg/20 border-t-bg rounded-full animate-spin mr-2 align-middle"></span>${t}`):(n.disabled=!1,n.dataset.originalHtml&&(n.innerHTML=n.dataset.originalHtml,delete n.dataset.originalHtml)))}function re(n,e=!1){const t=document.createElement("div");t.className=`fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full text-sm font-bold shadow-2xl z-[100] animate-fade-in ${e?"bg-red-500 text-white":"bg-accent text-on-accent"}`,t.textContent=n,document.body.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transition="opacity 0.3s ease",setTimeout(()=>t.remove(),300)},3e3)}typeof window<"u"&&(window.showToast=re);const _h=document.getElementById("auth-screen"),Fs=document.getElementById("auth-email"),Uo=document.getElementById("auth-password"),wa=document.getElementById("login-btn"),Ia=document.getElementById("register-btn"),fn=document.getElementById("forgot-password-btn"),yh=document.getElementById("auth-loading"),Ii=document.getElementById("auth-error");function an(n){Ii.textContent=n,Ii.classList.remove("hidden")}function Bo(n,e){const t=(n==null?void 0:n.code)||"";return t.includes("referer")||t.includes("blocked")?"This site URL is not allowed for Firebase. Add it to your API key HTTP referrers in Google Cloud Console.":t==="auth/network-request-failed"?"Network error reaching Firebase. Check connection and API key restrictions.":t==="auth/invalid-email"?"Enter a valid email address.":t==="auth/user-not-found"||t==="auth/wrong-password"||t==="auth/invalid-credential"?"Invalid email or password.":t==="auth/email-already-in-use"?"An account with this email already exists.":t==="auth/weak-password"?"Password must be at least 6 characters.":t==="auth/too-many-requests"?"Too many attempts. Try again later.":e}function Vt(n){n?(yh.classList.remove("hidden"),wa.disabled=!0,Ia.disabled=!0,fn&&(fn.disabled=!0),Ii.classList.add("hidden")):(yh.classList.add("hidden"),wa.disabled=!1,Ia.disabled=!1,fn&&(fn.disabled=!1))}function rT(n){wa.addEventListener("click",async()=>{const e=Fs.value.trim(),t=Uo.value;if(!e||!t){an("Enter email and password");return}Vt(!0);try{await fy(Tr,e,t)}catch(r){console.error("Login failed:",r),an(Bo(r,"Invalid credentials.")),Vt(!1)}}),Ia.addEventListener("click",async()=>{const e=Fs.value.trim(),t=Uo.value;if(!e||!t){an("Enter email and password");return}if(t.length<6){an("Min 6 characters");return}Vt(!0);try{await dy(Tr,e,t)}catch(r){console.error("Registration failed:",r),an(Bo(r,"Registration failed.")),Vt(!1)}}),fn==null||fn.addEventListener("click",async()=>{const e=Fs.value.trim();if(!e){an("Enter your email above, then tap Forgot password");return}Vt(!0);try{await hy(Tr,e),re("Password reset email sent"),Ii.classList.add("hidden")}catch(t){an(Bo(t,"Could not send reset email."))}finally{Vt(!1)}}),gy(Tr,e=>{if(e){R.currentUser=e,_h.classList.add("opacity-0","pointer-events-none"),document.getElementById("user-email").textContent=e.email.split("@")[0],document.getElementById("user-info").classList.remove("hidden"),Fs.value="",Uo.value="",Vt(!1);const t=new Date,r=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;document.getElementById("input-date").value=r,n(e)}else R.currentUser=null,R.chartDefaultApplied=!1,_h.classList.remove("opacity-0","pointer-events-none"),document.getElementById("user-info").classList.add("hidden"),Vt(!1),R.unsubscribes.forEach(t=>t()),R.unsubscribes=[]}),document.getElementById("logout-btn").addEventListener("click",()=>_y(Tr))}function bp({title:n="Confirm",message:e,confirmLabel:t="Confirm",danger:r=!0}={}){const s=document.getElementById("confirm-modal"),i=document.getElementById("confirm-modal-title"),a=document.getElementById("confirm-modal-message"),c=document.getElementById("confirm-modal-confirm"),u=document.getElementById("confirm-modal-cancel");return!s||!i||!a||!c||!u?Promise.resolve(window.confirm(e||n)):(i.textContent=n,a.textContent=e||"",c.textContent=t,c.className=r?"flex-1 p-3 rounded-xl text-sm font-bold bg-red-500/90 text-white hover:bg-red-500 transition":"flex-1 p-3 rounded-xl text-sm font-bold bg-accent text-on-accent hover:opacity-90 transition",s.classList.remove("hidden"),new Promise(d=>{const f=C=>{s.classList.add("hidden"),c.removeEventListener("click",m),u.removeEventListener("click",g),s.removeEventListener("click",T),d(C)},m=()=>f(!0),g=()=>f(!1),T=C=>{C.target===s&&f(!1)};c.addEventListener("click",m),u.addEventListener("click",g),s.addEventListener("click",T)}))}const rr=()=>Ue(Ee,"users",R.currentUser.uid,"settings","exercises");async function sT(){if(!R.currentUser)return;const n=rr(),e=await up(n);if(e.exists()){const t=e.data();if(t.listVersion!==2){const r=kr.map(a=>a.toLowerCase());let s=(t.list||[]).filter(a=>!r.includes(a.toLowerCase()));const i=new Set(r);s=s.filter(a=>{const c=a.toLowerCase();return i.has(c)?!1:(i.add(c),!0)}),R.availableExercises=[...kr,...s]}else{const r=t.list||[],s=Tp(r),i=new Set(s.map(c=>Xe(c))),a=kr.filter(c=>!i.has(Xe(c)));R.availableExercises=[...s,...a]}}else R.availableExercises=[...kr];await Ct(n,{list:R.availableExercises,listVersion:2},{merge:!0}),sr()}async function iT(n){if(!n)return;const e=n.trim(),t=e.toLowerCase();if(n=Ep[t]??e.charAt(0).toUpperCase()+e.slice(1),!R.availableExercises.some(s=>Xe(s)===Xe(n))){R.availableExercises.push(n),sr(),await Ct(rr(),{list:R.availableExercises},{merge:!0});const s=document.getElementById("input-exercise");s.value=n,s.dispatchEvent(new Event("change"))}}async function oT(n){R.availableExercises=R.availableExercises.filter(e=>e!==n),sr(),await Ct(rr(),{list:R.availableExercises},{merge:!0}),Xt()}function sr(){const n=document.getElementById("input-exercise"),e=n.value;n.innerHTML='<option value="" disabled selected>Select Exercise</option>',R.availableExercises.forEach(t=>{const r=document.createElement("option");r.value=t,r.textContent=t,n.appendChild(r)}),R.availableExercises.includes(e)&&(n.value=e)}const $o=document.getElementById("exercise-modal"),vh=document.getElementById("manage-exercise-list");async function Eh(n,e){const t=n+e;if(t<0||t>=R.availableExercises.length)return;const r=R.availableExercises[n];R.availableExercises[n]=R.availableExercises[t],R.availableExercises[t]=r,Xt(),sr(),await Ct(rr(),{list:R.availableExercises},{merge:!0})}async function aT(n,e){let t=Be(e.trim());const r=R.availableExercises.find(s=>Xe(s)===Xe(t));r&&(t=r);try{re("Updating records...");const s=ot(Ee,"users",R.currentUser.uid,"workouts"),i=Yr(s,ap("exercise","==",n)),a=await ya(i),c=[];a.forEach(f=>c.push(tr(Ue(Ee,"users",R.currentUser.uid,"workouts",f.id),{exercise:t}))),await Promise.all(c);const u=R.availableExercises.indexOf(n);u>-1?R.availableExercises.includes(t)&&t!==n?R.availableExercises.splice(u,1):R.availableExercises[u]=t:R.availableExercises.includes(t)||R.availableExercises.push(t),await Ct(rr(),{list:R.availableExercises},{merge:!0}),sr(),Xt(),re(`Merged/Renamed to "${t}"`);const d=document.getElementById("input-exercise");(d.value===n||d.value===t)&&(d.value=t,d.dispatchEvent(new Event("change")))}catch{re("Error updating records",!0),Xt()}}function wh(n){const e=Object.entries(n).map(([t,r])=>`${t} (${r})`);return e.length?e.join(`
`):"None"}function Ta(){const n=document.getElementById("exercise-sync-preview"),e=document.getElementById("exercise-sync-btn");if(!n||!e)return;const t=Ip(R.workoutsCache,R.availableExercises);if(!t.needsUpdate){n.textContent="All logged exercises and your list already use program names.",e.disabled=!0,e.classList.add("opacity-50","cursor-not-allowed");return}e.disabled=!1,e.classList.remove("opacity-50","cursor-not-allowed");const r=[];t.workoutUpdates&&r.push(`${t.workoutUpdates} workout log(s)`),t.listUpdates&&r.push(`${t.listUpdates} list entry(ies)`),n.textContent=`Will update ${r.join(" and ")} to match Today's Plan names.`,n.dataset.detail=[t.workoutUpdates?`Workouts:
${wh(t.workoutRenames)}`:"",t.listUpdates?`Exercise list:
${wh(t.listRenames)}`:""].filter(Boolean).join(`

`)}async function cT(){var r,s;const n=Ip(R.workoutsCache,R.availableExercises);if(!n.needsUpdate)return re("Exercise names are already up to date"),Ta(),n;const e=((r=document.getElementById("exercise-sync-preview"))==null?void 0:r.dataset.detail)||"";if(!await bp({title:"Update exercise names?",message:`${((s=document.getElementById("exercise-sync-preview"))==null?void 0:s.textContent)||""}${e?`

${e}`:""}

This updates your Firestore data. Safe to run again.`,confirmLabel:"Update names",danger:!1}))return n;try{re("Updating exercise names...");const i=ot(Ee,"users",R.currentUser.uid,"workouts"),a=[];let c=0;return R.workoutsCache.forEach(u=>{if(!u.id||!u.exercise)return;const d=Be(u.exercise);d!==u.exercise&&(c+=1,a.push(tr(Ue(i,u.id),{exercise:d})))}),await Promise.all(a),R.availableExercises=Tp(R.availableExercises),await Ct(rr(),{list:R.availableExercises,listVersion:2},{merge:!0}),sr(),Xt(),Ta(),re(`Updated ${c} workout log(s)`),{...n,updatedWorkouts:c}}catch{throw re("Error updating exercise names",!0),new Error("migration failed")}}function Xt(){vh.innerHTML="",R.availableExercises.forEach((n,e)=>{const t=document.createElement("div");t.className="flex justify-between items-center py-3 border-b border-line-soft last:border-0";const r=document.createElement("div");r.className="flex-1 min-w-0 mr-2";const s=document.createElement("span");s.className="text-sm text-fg2 block w-full",s.textContent=n,r.appendChild(s);const i=document.createElement("div");i.className="flex gap-3 items-center shrink-0";const a=document.createElement("button");a.innerHTML='<i class="fa-solid fa-arrow-up"></i>',a.className=`text-faint hover:text-fg transition ${e===0?"opacity-30 cursor-not-allowed":""}`,a.onclick=()=>{e>0&&Eh(e,-1)};const c=document.createElement("button");c.innerHTML='<i class="fa-solid fa-arrow-down"></i>',c.className=`text-faint hover:text-fg transition ${e===R.availableExercises.length-1?"opacity-30 cursor-not-allowed":""}`,c.onclick=()=>{e<R.availableExercises.length-1&&Eh(e,1)};const u=document.createElement("button");u.innerHTML='<i class="fa-solid fa-pen text-[10px]"></i>',u.className="w-6 h-6 rounded-full bg-input text-fg hover:bg-raised transition flex items-center justify-center ml-2";const d=document.createElement("button");d.innerHTML='<i class="fa-solid fa-times"></i>',d.className="text-red-500/70 hover:text-red-400 transition ml-1",d.onclick=()=>oT(n),u.onclick=()=>{a.style.display="none",c.style.display="none",d.style.display="none";const f=document.createElement("input");f.type="text",f.value=n,f.className="w-full bg-input text-fg text-sm p-2 rounded-lg focus:outline-none",r.replaceChild(f,s),f.focus(),u.innerHTML='<i class="fa-solid fa-check text-accent"></i>';const m=async()=>{f.value&&f.value!==n?await aT(n,f.value):Xt()};u.onclick=m,f.onkeydown=g=>{g.key==="Enter"&&m()}},i.append(a,c,u,d),t.append(r,i),vh.appendChild(t)})}function lT(){var n;document.getElementById("open-manager-btn").addEventListener("click",()=>{$o.classList.remove("hidden"),Xt(),Ta()}),(n=document.getElementById("exercise-sync-btn"))==null||n.addEventListener("click",()=>cT()),document.getElementById("close-modal-btn").addEventListener("click",()=>$o.classList.add("hidden")),document.getElementById("add-exercise-btn").addEventListener("click",()=>{const e=document.getElementById("new-exercise-input");e.value&&(iT(e.value),e.value="",Xt(),$o.classList.add("hidden"))})}function Ih(){const n=document.getElementById("input-date"),e=document.getElementById("date-warning-banner"),t=document.getElementById("date-warning-text");if(!n||!e||!t)return;const r=Ze(),s=n.value;if(!s||s===r){e.classList.add("hidden");return}const[i,a,c]=s.split("-").map(Number),d=new Date(i,a-1,c).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric"}),f=s<r;t.textContent=f?`Logging to a past date: ${d}`:`Logging to a future date: ${d}`,e.classList.remove("hidden")}function uT(){var s;const n=document.getElementById("input-reps");for(let i=1;i<=30;i++){const a=document.createElement("option");a.value=i,a.textContent=i,n.appendChild(a)}document.getElementById("input-exercise").addEventListener("change",i=>{const a=i.target.value;if(!a)return;const c=gn.includes(a),u=document.getElementById("container-sets"),d=document.getElementById("container-weight"),f=document.getElementById("container-reps"),m=document.getElementById("label-weight"),g=document.getElementById("bw-hint");c?(u.style.display="none",f.style.display="none",d.classList.replace("col-span-1","col-span-3"),m.textContent="Minutes",document.getElementById("input-weight").placeholder="e.g. 30",document.getElementById("input-reps").removeAttribute("required"),g==null||g.classList.add("hidden")):(u.style.display="block",f.style.display="block",d.classList.replace("col-span-3","col-span-1"),m.textContent="Load (kg/BW)",document.getElementById("input-weight").placeholder="kg / BW",document.getElementById("input-reps").setAttribute("required","true"),g==null||g.classList.remove("hidden"));const T=Mr(R.workoutsCache,a)[0];T?(c||(document.getElementById("input-set-count").value=T.setCount||1,document.getElementById("input-reps").value=T.reps||""),document.getElementById("input-weight").value=T.weight):(c||(document.getElementById("input-set-count").value=1,document.getElementById("input-reps").value=""),document.getElementById("input-weight").value="");const C=document.getElementById("log-advice-1rm"),D=Mr(R.workoutsCache,a);if(c)C.textContent="";else{let V=0;D.forEach(F=>{if(F.weight!=="BW"&&!isNaN(parseFloat(F.weight))){const q=parseFloat(F.weight)*(1+F.reps/30);q>V&&(V=q)}}),C.textContent=V>0?`~1RM: ${Math.round(V)} kg`:""}const x=document.getElementById("log-recent-history");x.innerHTML="",D.slice(0,3).forEach(V=>{const F=V.timestamp?V.timestamp.toDate():new Date,q=`${F.getFullYear()}-${String(F.getMonth()+1).padStart(2,"0")}-${String(F.getDate()).padStart(2,"0")}`,J=document.createElement("div");J.className="text-[10px] text-subtle font-mono tracking-wide",gn.includes(V.exercise)?J.textContent=`${q} — ${V.weight} mins`:J.textContent=`${q} — ${V.setCount||1} sets of ${V.weight==="BW"?"BW":`${V.weight}kg`} × ${V.reps}`,x.appendChild(J)})}),document.getElementById("input-weight").addEventListener("blur",i=>{const a=i.target.value.trim().toUpperCase();if(a==="BW"){i.target.value="BW";return}a&&!isNaN(a)&&(i.target.value=parseFloat(a).toFixed(1))}),(s=document.getElementById("bw-chip"))==null||s.addEventListener("click",()=>{const i=document.getElementById("input-weight");i.value="BW",i.focus()});const t=document.getElementById("input-date");t&&!t.value&&(t.value=Ze()),t==null||t.addEventListener("change",Ih),Ih();const r=document.getElementById("log-submit-btn");document.getElementById("log-form").addEventListener("submit",async i=>{if(i.preventDefault(),!R.currentUser)return;const a=Be(document.getElementById("input-exercise").value),c=document.getElementById("input-weight").value,u=document.getElementById("input-reps").value,d=document.getElementById("input-set-count").value;if(!a){re("Select an exercise",!0);return}const f=gn.includes(a);let m=c.trim().toUpperCase()==="BW"&&!f?"BW":parseFloat(parseFloat(c).toFixed(1));if(m!=="BW"&&isNaN(m)){re(f?"Enter valid minutes":"Invalid weight",!0);return}document.getElementById("input-weight").value=m==="BW"?"BW":m.toFixed(1),gh(r,!0,"Saving...");try{const g=document.getElementById("input-date"),[T,C,D]=g.value.split("-").map(Number),x=new Date(T,C-1,D,12,0,0);await Ji(ot(Ee,"users",R.currentUser.uid,"workouts"),{exercise:a,weight:m,reps:f?0:parseInt(u),setCount:f?1:parseInt(d),timestamp:x,dateStr:x.toLocaleDateString()});const V=f?`Logged: ${a} (${m} mins)`:`Logged: ${a} (${d>1?`${d} Sets`:"Set"} - ${m==="BW"?"BW":`${m}kg`} x ${u})`;re(V+(g.value===Ze()?"":` on ${x.toLocaleDateString()}`)),f||(document.getElementById("input-set-count").value="1",document.getElementById("input-reps").value=""),document.getElementById("input-exercise").value="",document.getElementById("log-advice-1rm").textContent="",document.getElementById("log-recent-history").innerHTML=""}catch{re("Error saving workout",!0)}finally{gh(r,!1)}})}const ft=document.getElementById("btn-save-bw"),Me=document.getElementById("input-bodyweight"),Fr=document.getElementById("input-date"),Th=document.getElementById("bw-status-label"),bh=document.getElementById("last-bw-display");function Ys({statusText:n,valueText:e}){Th&&(Th.textContent=n),bh&&(bh.textContent=e)}async function Ap(){if(!R.currentUser)return;const n=ft.querySelector("i"),[e,t,r]=Fr.value.split("-").map(Number),s=new Date(e,t-1,r).toLocaleDateString(),a=Fr.value===Ze();try{const c=await ya(Yr(ot(Ee,"users",R.currentUser.uid,"bodyweight"),ap("dateStr","==",s),hh(1)));if(!c.empty)R.todayBWDocId=c.docs[0].id,Me.value=c.docs[0].data().weight,Ys({statusText:a?"Logged today":"Logged this session",valueText:`${Me.value} kg`}),Me.disabled=!0,n.className="fa-solid fa-pen text-muted",ft.title="Edit body weight";else{R.todayBWDocId=null,Me.disabled=!1,n.className="fa-solid fa-check",ft.title="Save body weight";const u=await ya(Yr(ot(Ee,"users",R.currentUser.uid,"bodyweight"),_a("timestamp","desc"),hh(1)));u.empty?(Ys({statusText:a?"Not logged today":"Not logged this session",valueText:"—"}),Me.value=""):(Me.value=u.docs[0].data().weight,Ys({statusText:a?"Last recorded":"Not logged this session",valueText:`${Me.value} kg`}))}}catch{}}function hT(){Fr.addEventListener("change",Ap),ft.addEventListener("click",async()=>{const n=ft.querySelector("i");if(R.todayBWDocId&&Me.disabled){Me.disabled=!1,Me.focus(),n.className="fa-solid fa-check",ft.title="Save body weight";return}let e=parseFloat(Me.value);if(e<0||!e||!R.currentUser)return;e=parseFloat(e.toFixed(1));const[t,r,s]=Fr.value.split("-").map(Number),i=new Date(t,r-1,s,12,0,0),a=Fr.value===Ze();ft.disabled=!0;try{if(R.todayBWDocId)await tr(Ue(Ee,"users",R.currentUser.uid,"bodyweight",R.todayBWDocId),{weight:e});else{const c=await Ji(ot(Ee,"users",R.currentUser.uid,"bodyweight"),{weight:e,timestamp:i,dateStr:i.toLocaleDateString()});R.todayBWDocId=c.id}Ys({statusText:a?"Logged today":"Logged this session",valueText:`${e} kg`}),Me.disabled=!0,n.className="fa-solid fa-pen text-muted",ft.title="Edit body weight",re(`Saved: ${e}kg`)}catch{re("Error saving",!0)}finally{Me.disabled||(ft.disabled=!1)}})}let Ah=!1;function je(n,e=1){return`rgba(${getComputedStyle(document.documentElement).getPropertyValue(`--c-${n}`).trim().split(/\s+/).join(", ")}, ${e})`}function Sp(n){return n===0?je("accent"):mh[n%mh.length]}function dT(n){return n.plugins.legend.labels.color=je("muted"),Object.assign(n.plugins.tooltip,{backgroundColor:je("surface"),titleColor:je("fg"),bodyColor:je("fg3"),borderColor:je("ring")}),n.scales.y.grid.color=je("line-soft"),n.scales.x.ticks={...n.scales.x.ticks,color:je("subtle")},n.scales.y.ticks={...n.scales.y.ticks,color:je("subtle")},n}function Rp(){const n=R.chartInstance;n&&(dT(n.options),n.data.datasets.forEach((e,t)=>{e.borderColor=e.label==="Body Weight"?je("faint"):Sp(t)}),n.update())}function fT(){const n=R.chartModule,e=document.getElementById("progressChart").getContext("2d");n.defaults.color=je("subtle"),n.defaults.font.family="Inter",R.chartInstance=new n(e,{type:"line",data:{labels:[],datasets:[]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{boxWidth:8,font:{size:10}}},tooltip:{mode:"index",intersect:!1,borderWidth:1}},scales:{y:{border:{display:!1},grid:{drawBorder:!1}},x:{border:{display:!1},grid:{display:!1}}}}}),Rp()}function pT(){Ah||(Ah=!0,document.getElementById("chart-exercise-select").addEventListener("change",n=>Pc(n.target.value)))}async function mT(){if(!R.chartModule){const n=await Fh(()=>import("./auto-eE5P6S0m.js"),[]);R.chartModule=n.default}if(!R.chartInstance&&(fT(),pT(),R.allWorkoutsCache.length)){const n=document.getElementById("chart-exercise-select");Pc(n.value||"All")}return R.chartInstance}function gT(n){R.allWorkoutsCache=n;const e=wp(n),t=document.getElementById("chart-exercise-select"),r=t.value;t.innerHTML='<option value="All">Overview</option><option value="Body Weight">Body Weight</option>',e.forEach(i=>{const a=document.createElement("option");a.value=i,a.textContent=i,t.appendChild(a)});const s=r&&r!=="All"&&r!=="Body Weight"?Be(r):r;r&&(r==="All"||r==="Body Weight"||e.includes(s))?t.value=s===r?r:s:!R.chartDefaultApplied&&n.length>0?(t.value=Be(n[0].exercise),R.chartDefaultApplied=!0):t.value="All",Pc(t.value)}function Pc(n){if(!R.chartInstance)return;const e=document.getElementById("chart-empty-state"),t=n==="All"?[...R.allWorkoutsCache,...R.bodyweightCache]:n==="Body Weight"?R.bodyweightCache:Mr(R.allWorkoutsCache,n);if(t.length===0){R.chartInstance.data.labels=[],R.chartInstance.data.datasets=[],R.chartInstance.update(),e==null||e.classList.remove("hidden"),["stat-est-1rm","stat-max-weight","stat-total-volume","stat-total-reps"].forEach(a=>document.getElementById(a).textContent="-");return}e==null||e.classList.add("hidden");const r=new Map;t.forEach(a=>{a.timestamp&&r.set(a.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"}),a.timestamp.toDate())});const s=Array.from(r.keys()).sort((a,c)=>r.get(a)-r.get(c)),i=[];if(n!=="Body Weight"&&(n==="All"?wp(R.allWorkoutsCache):[Be(n)]).forEach((c,u)=>{const d={};Mr(R.allWorkoutsCache,c).filter(f=>f.timestamp).forEach(f=>{const m=f.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"}),g=f.weight==="BW"?null:parseFloat(f.weight);g!==null&&(!d[m]||g>d[m])&&(d[m]=g)}),i.push({label:c,data:s.map(f=>d[f]||null),borderColor:Sp(u),borderWidth:2,tension:.4,pointRadius:0,pointHoverRadius:4,spanGaps:!0})}),n==="All"||n==="Body Weight"){const a={};R.bodyweightCache.forEach(c=>{c.timestamp&&(a[c.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"})]=c.weight)}),i.push({label:"Body Weight",data:s.map(c=>a[c]||null),borderColor:je("faint"),borderDash:[5,5],borderWidth:2,tension:.4,pointRadius:0,spanGaps:!0})}if(R.chartInstance.data.labels=s,R.chartInstance.data.datasets=i,R.chartInstance.update(),n==="All"||n==="Body Weight")["stat-est-1rm","stat-max-weight","stat-total-volume","stat-total-reps"].forEach(a=>document.getElementById(a).textContent="-"),document.querySelector("#stat-max-weight").previousElementSibling.textContent="Peak Load",n==="Body Weight"&&i[0].data.filter(a=>a).length&&(document.getElementById("stat-max-weight").textContent=`${i[0].data.filter(a=>a).pop()}kg`,document.querySelector("#stat-max-weight").previousElementSibling.textContent="Current Weight");else{let a=0,c=0,u=0,d=0;const f=gn.includes(n);Mr(R.allWorkoutsCache,n).forEach(m=>{const g=m.weight==="BW"?0:parseFloat(m.weight),T=m.reps||0,C=m.setCount||1;if(g>a&&(a=g),!f&&m.weight!=="BW"){const D=g*(1+T/30);D>c&&(c=D),u+=g*T*C,d+=T*C}}),f?(document.querySelector("#stat-max-weight").previousElementSibling.textContent="Longest Time",document.getElementById("stat-max-weight").textContent=`${a} mins`,["stat-est-1rm","stat-total-volume","stat-total-reps"].forEach(m=>document.getElementById(m).textContent="-")):(document.querySelector("#stat-max-weight").previousElementSibling.textContent="Peak Load",document.getElementById("stat-est-1rm").textContent=`${Math.round(c)}kg`,document.getElementById("stat-max-weight").textContent=`${a}kg`,document.getElementById("stat-total-volume").textContent=u>1e3?`${(u/1e3).toFixed(1)}k`:u,document.getElementById("stat-total-reps").textContent=d)}}function Xi(){const n=document.getElementById("input-date");return n!=null&&n.value?n.value:Ze()}function Cp(){const n=document.getElementById("today-session-name");if(!n)return;const e=Xi();n.value=R.sessionsCache[e]||"",n.placeholder="Name this session..."}async function kc(n,e){if(!R.currentUser)return;const t=e.trim(),r=Ue(Ee,"users",R.currentUser.uid,"sessions",n);t&&t!==n?(await Ct(r,{name:t,dateId:n},{merge:!0}),R.sessionsCache[n]=t):(await Qi(r),delete R.sessionsCache[n])}function Pp(n,e,t=!1){n.querySelector(".edit-log-btn").addEventListener("click",()=>{const r=gn.includes(e.exercise),s=e.weight==="BW"?"BW":e.weight;if(e.type==="workout"){const i=ae(e.id);n.innerHTML=`
        <div class="flex flex-col gap-3 w-full animate-fade-in py-1">
          <div class="font-semibold text-accent text-sm">${ae(e.exercise)}</div>
          ${r?`
            <div class="flex items-center gap-2">
              <input type="number" id="edit-mins-${i}" value="${ae(e.weight)}" class="w-full bg-input text-fg p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-ring" placeholder="Minutes">
            </div>
          `:`
            <div class="flex items-center gap-2">
              <div class="flex-1">
                <label class="text-[9px] text-subtle uppercase px-1">Sets</label>
                <input type="number" id="edit-sets-${i}" value="${ae(e.setCount||1)}" class="w-full bg-input text-fg p-2.5 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-ring">
              </div>
              <div class="flex-1">
                <label class="text-[9px] text-subtle uppercase px-1">Load</label>
                <input type="text" id="edit-weight-${i}" value="${ae(s)}" class="w-full bg-input text-fg p-2.5 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-ring">
              </div>
              <div class="flex-1">
                <label class="text-[9px] text-subtle uppercase px-1">Reps</label>
                <input type="number" id="edit-reps-${i}" value="${ae(e.reps)}" class="w-full bg-input text-fg p-2.5 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-ring">
              </div>
            </div>
          `}
          <div class="flex justify-between items-center mt-1 pt-2">
            <button class="delete-btn text-red-500/80 hover:text-red-500 text-xs font-bold px-2 py-1 transition"><i class="fa-solid fa-trash-can mr-1"></i> Delete</button>
            <div class="flex gap-2">
              <button class="cancel-btn text-muted text-xs font-bold px-3 py-2 rounded-lg hover:bg-input transition">Cancel</button>
              <button class="save-btn bg-accent text-on-accent text-xs font-bold px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition">Save</button>
            </div>
          </div>
        </div>
      `}else if(e.type==="bodyweight"){const i=ae(e.id);n.innerHTML=`
        <div class="flex flex-col gap-3 w-full animate-fade-in py-1">
          <div class="flex items-center gap-2 text-accent"><i class="fa-solid fa-weight-scale text-xs"></i><span class="font-semibold text-sm">Body Weight</span></div>
          <input type="number" id="edit-bw-${i}" value="${ae(e.weight)}" step="0.1" class="w-full bg-input text-fg p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-ring" placeholder="kg">
          <div class="flex justify-between items-center mt-1 pt-2">
            <button class="delete-btn text-red-500/80 hover:text-red-500 text-xs font-bold px-2 py-1 transition"><i class="fa-solid fa-trash-can mr-1"></i> Delete</button>
            <div class="flex gap-2">
              <button class="cancel-btn text-muted text-xs font-bold px-3 py-2 rounded-lg hover:bg-input transition">Cancel</button>
              <button class="save-btn bg-accent text-on-accent text-xs font-bold px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition">Save</button>
            </div>
          </div>
        </div>
      `}n.querySelector(".cancel-btn").addEventListener("click",()=>{t?Dc(R.workoutsCache):Ur()}),n.querySelector(".delete-btn").addEventListener("click",async()=>{const i=e.type==="workout"?e.exercise:"this body weight entry";await bp({title:"Delete log?",message:`Delete ${i}? This cannot be undone.`,confirmLabel:"Delete",danger:!0})&&OT(e.id,e.type==="workout"?"workouts":"bodyweight")}),n.querySelector(".save-btn").addEventListener("click",async()=>{try{let i={};if(e.type==="bodyweight"){const a=parseFloat(document.getElementById(`edit-bw-${e.id}`).value);if(isNaN(a)||a<0)throw new Error;i={weight:parseFloat(a.toFixed(1))}}else if(r){const a=parseFloat(document.getElementById(`edit-mins-${e.id}`).value);if(isNaN(a)||a<0)throw new Error;i={weight:parseFloat(a.toFixed(1))}}else{const a=parseInt(document.getElementById(`edit-sets-${e.id}`).value),c=parseInt(document.getElementById(`edit-reps-${e.id}`).value),u=document.getElementById(`edit-weight-${e.id}`).value.trim().toUpperCase(),d=u==="BW"?"BW":parseFloat(parseFloat(u).toFixed(1));if(isNaN(a)||a<1||isNaN(c)||c<0||d!=="BW"&&(isNaN(d)||d<0))throw new Error;i={setCount:a,reps:c,weight:d}}await tr(Ue(Ee,"users",R.currentUser.uid,e.type==="workout"?"workouts":"bodyweight",e.id),i),re("Updated successfully")}catch{re("Invalid values",!0)}})})}function Sh(n){const e=document.createElement("div");if(e.className="flex justify-between items-center py-3 border-b border-line-soft last:border-0 group transition-colors",n.type==="workout"){const t=gn.includes(n.exercise),r=n.weight==="BW"?"BW":`${n.weight}kg`;e.innerHTML=`
      <div class="flex-1">
        <div class="font-semibold text-fg2 text-sm">${ae(n.exercise)} <span class="text-[9px] text-subtle font-normal ml-1">${n.setCount>1?ae(`${n.setCount} SETS`):""}</span></div>
        <div class="text-xs text-subtle mt-0.5">${t?`${ae(n.weight)} mins`:`${ae(r)} × ${ae(n.reps)}`}</div>
      </div>
      <div class="flex items-center gap-3">
        <div class="text-xs font-mono text-faint">${t?'<i class="fa-solid fa-stopwatch"></i>':n.weight==="BW"?"-":(n.weight*n.reps*(n.setCount||1)).toFixed(0)}</div>
        <button class="edit-log-btn text-faint hover:text-accent transition p-2"><i class="fa-solid fa-pen"></i></button>
      </div>
    `}else n.type==="bodyweight"&&(e.innerHTML=`
      <div class="flex-1 flex items-center gap-2"><i class="fa-solid fa-weight-scale text-subtle text-xs"></i><span class="font-semibold text-fg2 text-sm">Body Weight</span></div>
      <div class="flex items-center gap-3">
        <div class="font-bold text-fg text-sm">${ae(n.weight)}kg</div>
        <button class="edit-log-btn text-faint hover:text-accent transition p-2"><i class="fa-solid fa-pen"></i></button>
      </div>
    `);return Pp(e,n,!1),e}function Rh(n){const e=document.createElement("div");e.className="flex justify-between items-center py-3 border-b border-line-soft last:border-0 group";const t=gn.includes(n.exercise);return n.weight==="BW"||`${n.weight}`,e.innerHTML=`
    <div class="flex-1">
      <div class="font-semibold text-fg2 text-sm">${ae(n.exercise)} <span class="text-[9px] text-subtle font-normal ml-1">${(n.setCount||1)>1?ae(`${n.setCount} SETS`):""}</span></div>
      <div class="text-xs text-subtle mt-0.5">${t?`${ae(n.weight)} mins`:`${ae(n.weight==="BW"?"BW":`${n.weight}kg`)} × ${ae(n.reps)}`}</div>
    </div>
    <div class="flex items-center gap-1">
      <button class="edit-log-btn text-faint hover:text-accent transition p-2"><i class="fa-solid fa-pen"></i></button>
    </div>
  `,Pp(e,n,!0),e}const Us=new Set;function _T(n){const e=[...new Set(n.map(r=>r.weight))],t=r=>r==="BW"?"BW":`${r}kg`;return e.length===1?`${t(e[0])} × ${n.map(r=>r.reps).join(" · ")}`:n.map(r=>`${t(r.weight)}×${r.reps}`).join(", ")}function xc(n,e){const t=document.createElement("div");t.className="border-b border-line-soft last:border-0";const r=Us.has(n.key),s=n.sets.reduce((a,c)=>a+(c.weight==="BW"?0:c.weight*c.reps),0),i=document.createElement("button");if(i.type="button",i.className="w-full flex justify-between items-center py-3 text-left",i.innerHTML=`
    <div class="flex-1">
      <div class="font-semibold text-fg2 text-sm">${ae(n.exercise)} <span class="text-[9px] text-subtle font-normal ml-1">${ae(`${n.sets.length} ${n.sets.length===1?"SET":"SETS"}`)}</span></div>
      <div class="text-xs text-subtle mt-0.5">${ae(_T(n.sets))}</div>
    </div>
    <div class="flex items-center gap-3">
      <div class="text-xs font-mono text-faint">${s?s.toFixed(0):"-"}</div>
      <span class="text-faint p-2"><i class="fa-solid fa-chevron-down text-xs transition-transform ${r?"rotate-180":""}"></i></span>
    </div>
  `,i.addEventListener("click",()=>{Us.has(n.key)?Us.delete(n.key):Us.add(n.key),t.replaceWith(xc(n,e))}),t.appendChild(i),r){const a=document.createElement("div");a.className="ml-3 pl-3 border-l border-raised mb-2",n.sets.forEach(c=>a.appendChild(e(c))),t.appendChild(a)}return t}function yT(n){const e=document.getElementById("history-list");if(n.length===0){e.innerHTML='<div class="text-center text-subtle mt-10 text-sm">No history yet.</div>';return}const t={};n.forEach(r=>{const s=r.timestamp?r.timestamp.toDate():new Date,i=Ze(s);t[i]||(t[i]=[]),t[i].push(r)}),e.innerHTML="",Object.keys(t).sort().reverse().forEach(r=>{const i=(t[r][0].timestamp?t[r][0].timestamp.toDate():new Date).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric"}),a=R.sessionsCache[r]||"",c=a||i,u=document.createElement("div");u.className="mb-8";const d=document.createElement("div");d.className="flex justify-between items-end border-b border-line pb-2 mb-2";const f=document.createElement("div"),m=document.createElement("span");m.className="text-[10px] text-accent uppercase tracking-widest font-semibold",m.textContent=i,f.appendChild(m);const g=document.createElement("div");g.className="flex items-center gap-2 group cursor-pointer mt-1";const T=document.createElement("span");T.className="text-fg text-lg font-bold",T.textContent=c;const C=document.createElement("i");C.className="fa-solid fa-pen text-fainter text-[10px] opacity-0 group-hover:opacity-100 transition ml-2",g.append(T,C),g.addEventListener("click",()=>{const V=document.createElement("input");V.type="text",V.value=a,V.placeholder="Name this session...",V.className="bg-transparent text-fg text-lg font-bold focus:outline-none border-b border-ring w-full max-w-[200px]",f.replaceChild(V,g),V.focus();let F=!1;const q=async()=>{if(F)return;F=!0;const J=V.value.trim();try{J!==a&&(await kc(r,J),re("Session renamed"))}catch{re("Error saving session name",!0)}finally{F=!1,Ur()}};V.addEventListener("blur",q),V.addEventListener("keydown",J=>{J.key==="Enter"&&V.blur()})}),f.appendChild(g),d.appendChild(f);const D=document.createElement("span");D.className="text-[10px] text-subtle font-mono",D.textContent=`${Ea(t[r]).length} logs`,d.appendChild(D),u.appendChild(d);const x=document.createElement("div");Ea(t[r]).forEach(V=>{x.appendChild(V.type==="set-group"?xc(V,Sh):Sh(V))}),u.appendChild(x),e.appendChild(u)})}function Dc(n){const e=document.getElementById("today-list"),t=Xi(),r=n.filter(s=>s.timestamp?Ze(s.timestamp.toDate())===t:!1);if(r.length===0){e.innerHTML='<div class="text-faint text-xs tracking-wide">No logs for this session yet.</div>';return}e.innerHTML="",Ea(r).forEach(s=>{e.appendChild(s.type==="set-group"?xc(s,Rh):Rh(s))})}const vT=6;function ET(){const n=document.getElementById("recent-exercise-chips");if(!n)return;const e=new Set,t=[];for(const s of R.workoutsCache){const i=Be(s.exercise);if(!i)continue;const a=Xe(i);if(!e.has(a)&&(e.add(a),t.push(i),t.length>=vT))break}if(t.length===0){n.innerHTML="",n.classList.add("hidden");return}n.classList.remove("hidden"),n.innerHTML="";const r=document.createElement("span");r.className="text-[9px] text-faint uppercase tracking-widest mr-1",r.textContent="Recent",n.appendChild(r),t.forEach(s=>{const i=document.createElement("button");i.type="button",i.className="text-[10px] font-semibold px-3 py-1 rounded-full bg-input text-fg3 hover:text-fg hover:bg-line border border-raised transition",i.textContent=s,i.addEventListener("click",()=>{const a=document.getElementById("input-exercise");a&&[...a.options].some(c=>c.value===s)&&(a.value=s,a.dispatchEvent(new Event("change")))}),n.appendChild(i)})}const wT=90,IT=["S","M","T","W","T","F","S"];let Ke=null,Vn=null;const ba={},jo=new Set,Aa=()=>Ue(Ee,"users",R.currentUser.uid,"settings","program"),Un=()=>ot(Ee,"users",R.currentUser.uid,"workouts"),Zi=n=>n.timestamp?Ze(n.timestamp.toDate()):null;async function TT(){if(R.currentUser){Ke||(Ke=GI(Ze()),yt());try{const n=await up(Aa()),e=n.exists()?n.data().startDate:null;if(e){e!==Ke&&(Ke=e,yt());return}await Ct(Aa(),{startDate:Ke},{merge:!0})}catch{yt()}}}function bT(n){if((Vn==null?void 0:Vn.dateId)===n)return Vn.dayKey;const e=R.workoutsCache.find(t=>t.program===nr&&Zi(t)===n);return e!=null&&e.programDay?e.programDay:yp(n)}function Ch(n,e){if(n==="BW")return"BW";const t=Number(n);return`${Number.isInteger(t)?t:t.toFixed(1)}kg${e?" ea":""}`}function ir(n,e){return R.workoutsCache.filter(t=>t.program===nr&&t.exercise===e&&Zi(t)===n)}function AT(n,e){const t=ir(e,n.name),r=XI(n,vp(R.workoutsCache,n.name,e,Zi));if(t.length)return{...r,weight:t[0].weight,reps:t[0].targetReps||r.reps};const s=`${e}|${n.name}`;return s in ba?{...r,weight:ba[s]}:r}function Ti(n,e){const[t,r,s]=n.split("-").map(Number);return new Date(t,r-1,s,12,0,e)}async function kp(n,e){if(!R.sessionsCache[n])try{await kc(n,e)}catch{}}function ST(){var n;(n=document.querySelector(`.timer-btn[data-time="${wT}"]`))==null||n.click()}async function Nc(n,e){if(!jo.has(n)){jo.add(n);try{await e()}catch{re("Error saving",!0)}finally{jo.delete(n)}}}function RT(n,e,t,r,s,i){const a=ir(s,e.name).find(u=>u.setIndex===r),c=eT(a?a.reps:null,i.reps);Nc(`${s}|${e.name}|${r}`,async()=>{a?c==null?await Qi(Ue(Un(),a.id)):await tr(Ue(Un(),a.id),{reps:c}):(await Ji(Un(),{exercise:e.name,weight:i.weight,reps:c,setCount:1,timestamp:Ti(s,t),dateStr:Ti(s,0).toLocaleDateString(),program:nr,programDay:n.key,setIndex:r,targetSets:e.sets,targetReps:i.reps}),e.supersetFirst||ST(),kp(s,n.label))})}function CT(n,e,t,r){const s=ir(r,e.name)[0];Nc(`${r}|${e.name}`,async()=>{if(s){await Qi(Ue(Un(),s.id));return}await Ji(Un(),{exercise:e.name,weight:e.minutes,reps:0,setCount:1,timestamp:Ti(r,t),dateStr:Ti(r,0).toLocaleDateString(),program:nr,programDay:n.key}),kp(r,n.label)})}function Ph(n,e,t,r){const s=ZI(n,t,r);ba[`${e}|${n.name}`]=s;const i=ir(e,n.name);i.length?Nc(`${e}|${n.name}|weight`,()=>Promise.all(i.map(a=>tr(Ue(Un(),a.id),{weight:s})))):yt()}const PT={start:{text:"Start weight",cls:"text-subtle"},up:{text:"Weight up",cls:"text-accent"},reps:{text:"+1 rep",cls:"text-accent"},same:{text:"Same as last time",cls:"text-subtle"},deload:{text:"Deload -10%",cls:"text-warn"},bw:{text:"",cls:""}};function z(n,e,t){const r=document.createElement(n);return e&&(r.className=e),t!=null&&(r.textContent=t),r}function xp(n,e,t){const r=z("button");r.type="button",r.setAttribute("aria-label",t);const s="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition active:scale-95 select-none";return n==null?r.className=`${s} bg-input border border-raised text-faint`:n>=e?(r.className=`${s} bg-accent text-on-accent`,r.innerHTML='<i class="fa-solid fa-check"></i>'):(r.className=`${s} bg-amber-500/20 border border-amber-500/50 text-warn`,r.textContent=n),r}function kT(n,e,t,r,s){const i=z("div","py-4 border-b border-line-soft last:border-0"),a=AT(e,s),c=ir(s,e.name),u=z("div","flex justify-between items-start gap-3"),d=z("div","min-w-0");d.append(z("div","text-sm font-semibold text-fg2",`${r}. ${e.name}`));const f=z("div","text-[10px] mt-1 flex flex-wrap gap-x-2");f.append(z("span","text-muted font-mono",`${e.sets} × ${a.reps}${e.note?` (${e.note})`:""}`));const m=PT[a.reason];if(m!=null&&m.text&&f.append(z("span",m.cls,m.text)),e.superset){const D=e.supersetFirst?`No rest, go to ${e.superset}`:`Superset w/ ${e.superset}`;f.append(z("span","text-info",D))}d.append(f),u.append(d);const g=z("div","flex flex-col items-end shrink-0 gap-1.5");if(a.weight!=="BW"){const D=z("div","flex items-center gap-1"),x=z("button","w-8 h-8 rounded-full bg-input text-muted hover:text-fg text-xs");x.type="button",x.innerHTML='<i class="fa-solid fa-minus"></i>',x.setAttribute("aria-label",`Lower ${e.name} weight`),x.onclick=()=>Ph(e,s,a.weight,-1);const V=z("button","w-8 h-8 rounded-full bg-input text-muted hover:text-fg text-xs");V.type="button",V.innerHTML='<i class="fa-solid fa-plus"></i>',V.setAttribute("aria-label",`Raise ${e.name} weight`),V.onclick=()=>Ph(e,s,a.weight,1),D.append(x,z("span","text-sm font-bold text-fg w-[4.5rem] text-center",Ch(a.weight,e.each)),V),g.append(D)}else g.append(z("span","text-sm font-bold text-fg","BW"));const T=YI(R.workoutsCache,e.name,s,Zi,3);if(T){const D=z("div","text-right max-w-[5.5rem]");D.append(z("div","text-[9px] uppercase tracking-widest text-faint font-semibold","Last")),T.weight!=="BW"&&D.append(z("div","text-[10px] text-subtle font-mono leading-tight",Ch(T.weight,e.each))),D.append(z("div","text-[10px] text-muted font-mono leading-tight",T.reps.join(" · "))),g.append(D)}u.append(g),i.append(u);const C=z("div","flex gap-3 mt-3");for(let D=0;D<e.sets;D++){const x=c.find(F=>F.setIndex===D),V=xp(x?x.reps:null,a.reps,`${e.name} set ${D+1}`);V.onclick=()=>RT(n,e,t,D,s,a),C.append(V)}return i.append(C),{row:i,done:c.filter(D=>D.setIndex<e.sets).length,total:e.sets}}function xT(n,e,t,r){const s=z("div","py-4 border-b border-line-soft last:border-0 flex justify-between items-center gap-3"),i=z("div");i.append(z("div","text-sm font-semibold text-fg2",e.name)),i.append(z("div","text-[10px] text-muted font-mono mt-1",`${e.minutes} min`));const a=ir(r,e.name).length>0,c=xp(a?1:null,1,`${e.name} done`);return c.onclick=()=>CT(n,e,t,r),s.append(i,c),{row:s,done:a?1:0,total:1}}function DT(n,e,t){const r=z("div","grid grid-cols-7 gap-1 mb-4"),s=yp(e);_p.forEach((i,a)=>{const c=(a+6)%7,u=z("button","",null);u.type="button",u.style.order=String(c);const d=i===t,f=i===s;u.className=`flex flex-col items-center py-1.5 rounded-xl text-[9px] font-semibold uppercase tracking-wide transition ${d?"bg-fg text-bg":f?"bg-input text-fg":"bg-surface text-subtle hover:text-fg"}`,u.append(z("span","text-[11px]",IT[a])),u.append(z("span","opacity-70 normal-case",gp[i].label.replace("Upper ","Up ").replace("Lower ","Lo "))),u.onclick=()=>{Vn={dateId:e,dayKey:i},yt()},r.append(u)}),n.append(r)}function NT(n){const e=z("div","flex items-center justify-between gap-2 mb-4 text-[10px] text-subtle");e.append(z("span","uppercase tracking-widest font-semibold","Program start"));const t=z("input","bg-input text-fg text-xs rounded-full px-3 py-1 focus:outline-none");t.type="date",t.value=Ke,t.onchange=async()=>{if(t.value){Ke=t.value,yt();try{await Ct(Aa(),{startDate:Ke},{merge:!0})}catch{re("Error saving start date",!0)}}},e.append(t),n.append(e)}let Sa=!1;function yt(){const n=document.getElementById("plan-body"),e=document.getElementById("plan-title"),t=document.getElementById("plan-week");if(!n||!e||!t)return;if(!R.currentUser){n.innerHTML=`<div class="text-center py-6 text-subtle text-sm">Sign in to see today's plan.</div>`,e.textContent="—",t.textContent="Week —";return}if(!Ke)return;const r=Xi(),s=bT(r),i=KI(Ke,r),a=r<Ke,c=QI(s,i);if(e.textContent=c.label,t.textContent=a?"Not started":`Week ${i}`,n.innerHTML="",DT(n,r,s),Sa&&NT(n),s==="rest"){n.append(z("div","text-center py-6 text-subtle text-sm","Rest day. Recover, eat, sleep.")),n.append(z("div","text-center text-[10px] text-faint","Missed a day? Pick it above."));return}const u=z("div","flex justify-between items-center text-[10px] uppercase tracking-widest font-semibold mb-1");n.append(u),c.note&&n.append(z("div","text-[10px] text-info mb-1",c.note));const d=z("div");let f=0,m=0,g=0;c.items.forEach((C,D)=>{const x=C.cardio?xT(c,C,D,r):kT(c,C,D,++g,r);f+=x.done,m+=x.total,d.append(x.row)}),n.append(d);const T=m>0&&f>=m;u.append(z("span",T?"text-accent":"text-subtle",T?"Session complete":`${f} / ${m} done`)),u.append(z("span","text-faint normal-case tracking-normal","Tap = done. Tap again = fewer reps."))}function VT(){var n,e;(n=document.getElementById("plan-week"))==null||n.addEventListener("click",t=>{t.stopPropagation(),Sa=!Sa,yt()}),(e=document.getElementById("input-date"))==null||e.addEventListener("change",()=>{Vn=null,yt()})}function LT(){R.currentUser&&(R.unsubscribes.forEach(n=>n()),R.unsubscribes=[],R.unsubscribes.push(Mo(Yr(ot(Ee,"users",R.currentUser.uid,"workouts"),_a("timestamp","desc")),n=>{R.workoutsCache=n.docs.map(e=>({id:e.id,type:"workout",...e.data()})),Ur(),Dc(R.workoutsCache),yt(),ET(),gT(R.workoutsCache),document.getElementById("input-exercise").value&&document.getElementById("input-exercise").dispatchEvent(new Event("change"))})),R.unsubscribes.push(Mo(Yr(ot(Ee,"users",R.currentUser.uid,"bodyweight"),_a("timestamp","desc")),n=>{R.bodyweightCache=n.docs.map(e=>({id:e.id,type:"bodyweight",...e.data()})),Ur()})),R.unsubscribes.push(Mo(ot(Ee,"users",R.currentUser.uid,"sessions"),n=>{R.sessionsCache={},n.forEach(e=>{R.sessionsCache[e.id]=e.data().name}),Cp(),Ur()})))}function Ur(){const n=[...R.workoutsCache,...R.bodyweightCache].sort((e,t)=>{var r,s;return(((r=t.timestamp)==null?void 0:r.toDate())||new Date)-(((s=e.timestamp)==null?void 0:s.toDate())||new Date)});yT(n)}async function OT(n,e){try{await Qi(Ue(Ee,"users",R.currentUser.uid,e,n)),re("Deleted")}catch{re("Error",!0)}}function MT(){const n=document.getElementById("today-session-name"),e=document.getElementById("input-date"),t=async()=>{if(R.currentUser)try{await kc(Xi(),n.value)}catch{re("Error saving session name",!0)}};n.addEventListener("change",t),n.addEventListener("blur",t),e==null||e.addEventListener("change",()=>{Cp(),Dc(R.workoutsCache)})}const Dp="REST_ALARM";async function FT(n){var e,t;if(!(typeof Notification>"u"||Notification.permission!=="granted"))try{const r=await((e=navigator.serviceWorker)==null?void 0:e.ready);(t=r==null?void 0:r.active)==null||t.postMessage({type:Dp,endsAt:n,cancel:!1})}catch{}}async function qo(){var n,e;try{const t=await((n=navigator.serviceWorker)==null?void 0:n.ready);(e=t==null?void 0:t.active)==null||e.postMessage({type:Dp,cancel:!0})}catch{}}function UT(){return typeof Notification<"u"&&Notification.permission==="default"}function BT(){return typeof Notification<"u"&&Notification.permission==="granted"}async function $T(){if(typeof Notification>"u")return"unsupported";if(Notification.permission!=="default")return Notification.permission;try{return await Notification.requestPermission()}catch{return"denied"}}let Wo=null,Ve=null,Xr=!1,Zr=!1;const Vc=3,Np=.3;function Vp(n=Vc){return Array.from({length:n},(e,t)=>t*Np)}function Lp(){const n=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);return n?(Wo||(Wo=new n),Wo):null}function jT(n,e=Date.now()){return Math.max(0,(n-e)/1e3)}function Op(n){n.state==="suspended"&&n.resume();const e=n.createBuffer(1,1,n.sampleRate),t=n.createBufferSource();t.buffer=e,t.connect(n.destination),t.start(0);try{t.stop(0)}catch{}}function qT(n,e){const t=n.createOscillator(),r=n.createGain();return t.type="sine",t.frequency.setValueAtTime(880,e),r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.12,e+.02),r.gain.linearRampToValueAtTime(0,e+.16),t.connect(r),r.connect(n.destination),t.start(e),t.stop(e+.17),t}function Mp(n,e){return Vp().map(t=>qT(n,e+t))}function WT(){const n=Lp();n&&(Op(n),Mp(n,n.currentTime))}function HT(n){Zr=!0,Xr=!1,Ve==null||Ve(),Ve=null;const e=Lp();if(!e)return;Op(e);const t=jT(n),r=e.currentTime+t,s=Mp(e,r);let i=!1,a=0;Ve=()=>{if(!i){i=!0;for(const c of s)try{c.stop(0)}catch{}}};for(const c of s)c.onended=()=>{i||(a+=1,a===s.length&&(Xr=!0))}}function Ho(){!Zr&&!Ve||(Zr=!1,Ve==null||Ve(),Ve=null,Xr=!1)}function zT(){if(!Zr)return;const n=!Xr;Zr=!1,Ve==null||Ve(),Ve=null,Xr=!1,n&&WT()}const GT=880,Bs=.02,Ra=.17,kh=.12,KT=22050;let Ge=null,Br=null,Ca=!1,Pa=!1;function QT(n){const e=Vp(Vc),t=e[e.length-1]??0;return n+t+Ra}function JT(n,e,t){const r=Math.floor(t*e),s=Math.ceil(Ra*e);for(let i=0;i<s;i+=1){const a=r+i;if(a<0||a>=n.length)break;const c=i/e;let u=0;c<Bs?u=c/Bs*kh:u=kh*(1-(c-Bs)/(Ra-Bs)),n[a]+=Math.sin(2*Math.PI*GT*c)*u}}function YT(n,e=KT){const t=QT(n),r=Math.ceil(t*e),s=new Float32Array(r),i=Math.floor(n*e);for(let c=0;c<i;c+=1)s[c]=(Math.random()*2-1)*5e-5;const a=n;for(let c=0;c<Vc;c+=1)JT(s,e,a+c*Np);return XT(s,e)}function XT(n,e){const t=n.length,r=new ArrayBuffer(44+t*2),s=new DataView(r),i=(c,u)=>{for(let d=0;d<u.length;d+=1)s.setUint8(c+d,u.charCodeAt(d))};i(0,"RIFF"),s.setUint32(4,36+t*2,!0),i(8,"WAVE"),i(12,"fmt "),s.setUint32(16,16,!0),s.setUint16(20,1,!0),s.setUint16(22,1,!0),s.setUint32(24,e,!0),s.setUint32(28,e*2,!0),s.setUint16(32,2,!0),s.setUint16(34,16,!0),i(36,"data"),s.setUint32(40,t*2,!0);let a=44;for(let c=0;c<t;c+=1){const u=Math.max(-1,Math.min(1,n[c]));s.setInt16(a,u<0?u*32768:u*32767,!0),a+=2}return new Blob([r],{type:"audio/wav"})}function ZT(){Br&&(URL.revokeObjectURL(Br),Br=null)}function eb(){return Pa}async function tb(n,{onBeepsFinished:e}={}){if(Bn(),Ca=!1,Pa=!1,typeof Audio>"u"||typeof Blob>"u")return!1;const t=YT(n);Br=URL.createObjectURL(t),Ge=new Audio(Br),Ge.setAttribute("playsinline",""),Ge.volume=1,Ge.onended=()=>{Ca||(Pa=!0,e==null||e(),Bn())};try{return await Ge.play(),!0}catch{return Bn(),!1}}function Bn(){Ca=!0,Ge&&(Ge.onended=null,Ge.pause(),Ge.removeAttribute("src"),Ge.load(),Ge=null),ZT()}async function nb(){var e;if(!BT())return;const n={body:"Ready for your next set",tag:"reptrack-rest",renotify:!0};try{const t=await((e=navigator.serviceWorker)==null?void 0:e.ready);t?await t.showNotification("Rest complete",n):new Notification("Rest complete",n)}catch{}}function xh(){const n=document.getElementById("timer-notify-enable");n&&(UT()?n.classList.remove("hidden"):n.classList.add("hidden"))}function rb(){var m;document.querySelectorAll(".nav-link").forEach(g=>{g.addEventListener("click",async()=>{document.querySelectorAll(".nav-link").forEach(T=>T.classList.remove("active")),g.classList.add("active"),document.querySelectorAll(".view-section").forEach(T=>{T.classList.add("hidden"),T.classList.remove("animate-fade-in"),T.id===g.dataset.target&&(T.classList.remove("hidden"),T.classList.add("animate-fade-in"))}),g.dataset.target==="view-progress"&&(await mT(),R.chartInstance&&R.chartInstance.resize())})});let n=null,e=0,t=!1,r=null,s=!1;function i(){r!=null&&(clearTimeout(r),r=null)}function a(){i(),r=setTimeout(u,Math.max(0,e-Date.now()))}function c(){const g=document.getElementById("timer-display"),T=document.getElementById("timer-cancel"),C=Fo(e);if(C<=0){g.textContent="00:00",g.className="text-xl font-mono text-muted",t||T.classList.add("hidden");return}g.textContent=`${Math.floor(C/60).toString().padStart(2,"0")}:${(C%60).toString().padStart(2,"0")}`,g.className=`text-xl font-mono text-accent ${C<=5?"animate-pulse":""}`,T.classList.remove("hidden")}function u(){var T;if(!t||s&&Fo(e)>0)return;t=!1,s=!1,clearInterval(n),n=null,i(),e=0,qo(),Bn(),eb()?Ho():zT(),(T=navigator.vibrate)==null||T.call(navigator,[200,100,200]),nb(),c();const g=document.getElementById("timer-cancel");g==null||g.classList.add("hidden")}function d(){c(),!s&&Fo(e)<=0&&u()}async function f(g){clearInterval(n),i(),t=!1,s=!1,Bn(),Ho(),qo(),e=Date.now()+g*1e3,t=!0,await tb(g,{onBeepsFinished:()=>u()})?s=!0:(HT(e),a(),FT(e)),c(),n=setInterval(d,250)}document.querySelectorAll(".timer-btn").forEach(g=>g.addEventListener("click",T=>{const C=parseInt(T.currentTarget.dataset.time,10);f(C)})),document.getElementById("timer-cancel").addEventListener("click",()=>{t=!1,s=!1,clearInterval(n),n=null,i(),e=0,Bn(),Ho(),qo(),c()}),(m=document.getElementById("timer-notify-enable"))==null||m.addEventListener("click",async()=>{var T;const g=await $T();if(xh(),g==="granted"){const C=await((T=navigator.serviceWorker)==null?void 0:T.ready);await(C==null?void 0:C.showNotification("Rest alerts enabled",{body:"You will get a notification when rest ends if audio is blocked.",tag:"reptrack-rest-setup"}))}}),document.addEventListener("visibilitychange",()=>{t&&document.visibilityState==="visible"&&d()}),xh()}const Dh="reptrack-collapse-";function sb(){document.querySelectorAll(".collapsible-section").forEach(n=>{const e=n.dataset.collapsible,t=n.querySelector(".collapsible-header"),r=n.querySelector(".collapsible-body");if(!e||!t||!r)return;const s=localStorage.getItem(`${Dh}${e}`),i=s===null?n.dataset.defaultExpanded!=="false":s==="true";Nh(t,r,i),t.addEventListener("click",()=>{const a=t.getAttribute("aria-expanded")!=="true";Nh(t,r,a),localStorage.setItem(`${Dh}${e}`,String(a))})})}function Nh(n,e,t){n.setAttribute("aria-expanded",String(t)),e.classList.toggle("hidden",!t)}const ib="reptrack-theme",bi={dark:{label:"Dark",meta:"#000000",swatch:["#0a0a0a","#00E676"]},stone:{label:"Stone",meta:"#E9E6DF",swatch:["#F4F2ED","#3D6B4A"]},japandi:{label:"Japandi",meta:"#EFE9E1",swatch:["#F8F4EE","#9A5B3F"]}};function Fp(){const n=document.documentElement.dataset.theme;return bi[n]?n:"dark"}function Up(n){var t;const e=bi[n]?n:"dark";e==="dark"?delete document.documentElement.dataset.theme:document.documentElement.dataset.theme=e,(t=document.querySelector('meta[name="theme-color"]'))==null||t.setAttribute("content",bi[e].meta),Rp(),ob()}function ob(){const n=document.getElementById("theme-menu");if(!n)return;const e=Fp();n.innerHTML="",Object.entries(bi).forEach(([t,r])=>{const s=document.createElement("button");s.type="button",s.setAttribute("role","menuitemradio"),s.setAttribute("aria-checked",String(t===e)),s.dataset.theme=t,s.className=`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left transition ${t===e?"bg-input text-fg font-semibold":"text-fg2 hover:bg-input"}`;const i=document.createElement("span");i.className="w-5 h-5 rounded-full border border-ring/50 shrink-0 flex items-center justify-center",i.style.background=r.swatch[0];const a=document.createElement("span");a.className="w-2 h-2 rounded-full",a.style.background=r.swatch[1],i.append(a);const c=document.createElement("span");if(c.className="flex-1",c.textContent=r.label,s.append(i,c),t===e){const u=document.createElement("i");u.className="fa-solid fa-check text-accent text-xs",s.append(u)}s.addEventListener("click",()=>{Up(t),ka(!1);try{localStorage.setItem(ib,t)}catch{}}),n.append(s)})}function ka(n){var e,t;(e=document.getElementById("theme-menu"))==null||e.classList.toggle("hidden",!n),(t=document.getElementById("theme-toggle"))==null||t.setAttribute("aria-expanded",String(n))}function ab(){Up(Fp());const n=document.getElementById("theme-toggle");n==null||n.addEventListener("click",e=>{e.stopPropagation(),ka(document.getElementById("theme-menu").classList.contains("hidden"))}),document.addEventListener("click",e=>{e.target.closest("#theme-menu")||ka(!1)})}const cb=5,lb=60,Vh="flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full bg-fg text-bg shadow-sm transition-all",Lh="flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full text-subtle hover:text-fg transition-all",ub="flex-timer-btn flex-1 bg-fg text-bg text-xs py-2.5 rounded-full transition-colors font-semibold",hb="flex-timer-btn flex-1 bg-input hover:bg-raised text-muted text-xs py-2.5 rounded-full transition-colors font-medium",M={routine:1,seconds:0,index:-1,phase:null,endsAt:0,done:new Set,tick:null,wakeLock:null},Oh=n=>`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`,Bp=()=>tT[M.routine],$p=()=>Math.max(0,Math.ceil((M.endsAt-Date.now())/1e3));async function eo(n){try{n&&!M.wakeLock&&navigator.wakeLock?(M.wakeLock=await navigator.wakeLock.request("screen"),M.wakeLock.addEventListener("release",()=>M.wakeLock=null)):!n&&M.wakeLock&&(await M.wakeLock.release(),M.wakeLock=null)}catch{}}function xa(n,e,t){M.phase=n,M.index=e,M.endsAt=Date.now()+t*1e3,clearInterval(M.tick),M.tick=setInterval(db,250),ds()}function db(){var n;if($p()>0){Wp();return}if(M.phase==="work"){if(M.done.add(M.index),(n=navigator.vibrate)==null||n.call(navigator,[200,100,200]),M.index+1>=Bp().length){fb();return}xa("gap",M.index+1,cb)}else M.phase==="gap"&&xa("work",M.index,M.seconds)}function jp(n){M.seconds||(M.seconds=lb);for(const e of[...M.done])e>=n&&M.done.delete(e);eo(!0),xa("work",n,M.seconds)}function fb(){clearInterval(M.tick),M.phase="done",M.index=-1,eo(!1),ds()}function qp(){clearInterval(M.tick),M.phase=null,M.index=-1,M.done.clear(),eo(!1),ds()}function Wp(){const n=$p(),e=document.getElementById("flex-row-timer");e&&(e.textContent=M.phase==="gap"?`Next in ${n}`:Oh(n));const t=document.getElementById("flex-timer-display");(M.phase==="work"||M.phase==="gap")&&(t.textContent=M.phase==="gap"?`00:0${n}`:Oh(n),t.className=`text-3xl font-mono font-light ${M.phase==="work"?"text-accent":"text-subtle"} ${M.phase==="work"&&n<=5?"animate-pulse":""}`)}function ds(){var i,a;const n=M.phase==="work"||M.phase==="gap",e=Bp();document.getElementById("btn-flex-set-1").className=M.routine===1?Vh:Lh,document.getElementById("btn-flex-set-2").className=M.routine===2?Vh:Lh,document.getElementById("flex-set-title").textContent=`Routine ${M.routine}`,document.querySelectorAll(".flex-timer-btn").forEach(c=>{c.className=Number(c.dataset.time)===M.seconds?ub:hb}),document.getElementById("flex-timer-cancel").classList.toggle("hidden",!n);const t=document.getElementById("flex-timer-status"),r=document.getElementById("flex-timer-display");n?(t.textContent=M.phase==="gap"?`Get ready: ${e[M.index]}`:`${M.index+1} / ${e.length} · ${e[M.index]}`,t.className="text-[10px] text-accent font-medium mt-0.5 truncate max-w-[12rem]"):M.phase==="done"?(t.textContent="Routine complete",t.className="text-[10px] text-accent font-semibold mt-0.5",r.textContent="00:00",r.className="text-3xl font-mono text-muted font-light"):(t.textContent="Pick a time, or tap an exercise",t.className="text-[10px] text-subtle mt-0.5",r.textContent="00:00",r.className="text-3xl font-mono text-muted font-light");const s=document.getElementById("flex-list");s.innerHTML="",e.forEach((c,u)=>{const d=n&&u===M.index,f=M.done.has(u),m=document.createElement("button");m.type="button",m.className=`w-full flex items-center gap-4 py-3 px-2 -mx-2 text-left border-b last:border-0 transition-colors ${d?`rounded-xl border-transparent ${M.phase==="work"?"bg-accent/10":"bg-input"}`:"border-line-soft"}`,m.setAttribute("aria-label",`Start timer from ${c}`);const g=document.createElement("span");g.className=`text-[10px] font-mono w-4 shrink-0 ${d?"text-accent":"text-faint"}`,g.textContent=u+1;const T=document.createElement("span");if(T.className=`flex-1 min-w-0 text-sm font-medium ${d?"text-fg":f?"text-faint line-through decoration-1":"text-fg2"}`,T.textContent=c,m.append(g,T),d){const C=document.createElement("span");C.id="flex-row-timer",C.className=`shrink-0 font-semibold ${M.phase==="work"?"font-mono text-sm text-accent":"text-xs text-subtle"}`,m.append(C)}else if(f){const C=document.createElement("i");C.className="fa-solid fa-check shrink-0 text-accent text-xs",m.append(C)}m.addEventListener("click",()=>jp(u)),s.appendChild(m)}),n&&(Wp(),(a=(i=document.getElementById("flex-row-timer"))==null?void 0:i.closest("button"))==null||a.scrollIntoView({block:"nearest",behavior:"smooth"}))}function Mh(n){M.routine!==n&&(qp(),M.routine=n,ds())}function pb(){document.getElementById("btn-flex-set-1").addEventListener("click",()=>Mh(1)),document.getElementById("btn-flex-set-2").addEventListener("click",()=>Mh(2)),document.querySelectorAll(".flex-timer-btn").forEach(n=>n.addEventListener("click",()=>{M.seconds=Number(n.dataset.time),jp(0)})),document.getElementById("flex-timer-cancel").addEventListener("click",qp),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(M.phase==="work"||M.phase==="gap")&&eo(!0)}),ds()}rT(()=>{LT(),sT(),Ap(),TT()});lT();uT();hT();rb();MT();sb();VT();ab();pb();Cm({immediate:!0});
