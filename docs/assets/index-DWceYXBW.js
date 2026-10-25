(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const hm="modulepreload",dm=function(n){return"/reptrack/"+n},Tl={},Ah=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(t.map(d=>{if(d=dm(d),d in Tl)return;Tl[d]=!0;const f=d.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":hm,f||(g.as="script"),g.crossOrigin="",g.href=d,u&&g.setAttribute("nonce",u),document.head.appendChild(g),f)return new Promise((A,C)=>{g.addEventListener("load",A),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};function fm(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:a}=n;let c,u;const d=async(m=!0)=>{await u};async function f(){if("serviceWorker"in navigator){if(c=await Ah(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/reptrack/sw.js",{scope:"/reptrack/",type:"classic"})).catch(m=>{a==null||a(m)}),!c)return;c.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),c.addEventListener("installed",m=>{m.isUpdate||r==null||r()}),c.register({immediate:e}).then(m=>{i?i("/reptrack/sw.js",m):s==null||s(m)}).catch(m=>{a==null||a(m)})}}return u=f(),d}const pm=()=>{};var bl={};/**
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
 */const Sh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},mm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let g=(c&15)<<2|d>>6,A=d&63;u||(A=64,a||(g=64)),r.push(t[f],t[m],t[g],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Sh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new gm;const g=i<<2|c>>4;if(r.push(g),d!==64){const A=c<<4&240|d>>2;if(r.push(A),m!==64){const C=d<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _m=function(n){const e=Sh(n);return Rh.encodeByteArray(e,!0)},zs=function(n){return _m(n).replace(/\./g,"")},Ch=function(n){try{return Rh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ym(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vm=()=>ym().__FIREBASE_DEFAULTS__,Em=()=>{if(typeof process>"u"||typeof bl>"u")return;const n=bl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ch(n[1]);return e&&JSON.parse(e)},Ei=()=>{try{return pm()||vm()||Em()||wm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ph=n=>{var e,t;return(t=(e=Ei())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Im=n=>{const e=Ph(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},xh=()=>{var n;return(n=Ei())===null||n===void 0?void 0:n.config},kh=n=>{var e;return(e=Ei())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Tm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Hn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function bm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[zs(JSON.stringify(t)),zs(JSON.stringify(a)),""].join(".")}const Pr={};function Am(){const n={prod:[],emulator:[]};for(const e of Object.keys(Pr))Pr[e]?n.emulator.push(e):n.prod.push(e);return n}function Sm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Al=!1;function Nh(n,e){if(typeof window>"u"||typeof document>"u"||!Hn(window.location.host)||Pr[n]===e||Pr[n]||Al)return;Pr[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Am().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Al=!0,a()},g}function f(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=Sm(r),A=t("text"),C=document.getElementById(A)||document.createElement("span"),D=t("learnmore"),k=document.getElementById(D)||document.createElement("a"),V=t("preprendIcon"),F=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const q=g.element;c(q),f(k,D);const J=d();u(F,V),q.append(F,C,k,J),document.body.appendChild(q)}i?(C.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Cm(){var n;const e=(n=Ei())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function km(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dm(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Nm(){return!Cm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vm(){try{return typeof indexedDB=="object"}catch{return!1}}function Lm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Om="FirebaseError";class Tt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Om,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qr.prototype.create)}}class Qr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Mm(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Tt(s,c,r)}}function Mm(n,e){return n.replace(Fm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Fm=/\{\$([^}]+)}/g;function Um(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Sl(i)&&Sl(a)){if(!gn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Sl(n){return n!==null&&typeof n=="object"}/**
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
 */function Jr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ir(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Tr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Bm(n,e){const t=new $m(n,e);return t.subscribe.bind(t)}class $m{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=wo),s.error===void 0&&(s.error=wo),s.complete===void 0&&(s.complete=wo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function wo(){}/**
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
 */function me(n){return n&&n._delegate?n._delegate:n}class _n{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const an="[DEFAULT]";/**
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
 */class qm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Tm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hm(e))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=an){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=an){return this.instances.has(e)}getOptions(e=an){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=an){return this.component?this.component.multipleInstances?e:an:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wm(n){return n===an?void 0:n}function Hm(n){return n.instantiationMode==="EAGER"}/**
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
 */class zm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Gm={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Km=G.INFO,Qm={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Jm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Qm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wa{constructor(e){this.name=e,this._logLevel=Km,this._logHandler=Jm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Ym=(n,e)=>e.some(t=>n instanceof t);let Rl,Cl;function Xm(){return Rl||(Rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zm(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vh=new WeakMap,Fo=new WeakMap,Lh=new WeakMap,Io=new WeakMap,Ia=new WeakMap;function eg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Ut(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Vh.set(t,n)}).catch(()=>{}),Ia.set(e,n),e}function tg(n){if(Fo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Fo.set(n,e)}let Uo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Lh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ut(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ng(n){Uo=n(Uo)}function rg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(To(this),e,...t);return Lh.set(r,e.sort?e.sort():[e]),Ut(r)}:Zm().includes(n)?function(...e){return n.apply(To(this),e),Ut(Vh.get(this))}:function(...e){return Ut(n.apply(To(this),e))}}function sg(n){return typeof n=="function"?rg(n):(n instanceof IDBTransaction&&tg(n),Ym(n,Xm())?new Proxy(n,Uo):n)}function Ut(n){if(n instanceof IDBRequest)return eg(n);if(Io.has(n))return Io.get(n);const e=sg(n);return e!==n&&(Io.set(n,e),Ia.set(e,n)),e}const To=n=>Ia.get(n);function ig(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Ut(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ut(a.result),u.oldVersion,u.newVersion,Ut(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const og=["get","getKey","getAll","getAllKeys","count"],ag=["put","add","delete","clear"],bo=new Map;function Pl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bo.get(e))return bo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ag.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||og.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return bo.set(e,i),i}ng(n=>({...n,get:(e,t,r)=>Pl(e,t)||n.get(e,t,r),has:(e,t)=>!!Pl(e,t)||n.has(e,t)}));/**
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
 */class cg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bo="@firebase/app",xl="0.13.2";/**
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
 */const yt=new wa("@firebase/app"),ug="@firebase/app-compat",hg="@firebase/analytics-compat",dg="@firebase/analytics",fg="@firebase/app-check-compat",pg="@firebase/app-check",mg="@firebase/auth",gg="@firebase/auth-compat",_g="@firebase/database",yg="@firebase/data-connect",vg="@firebase/database-compat",Eg="@firebase/functions",wg="@firebase/functions-compat",Ig="@firebase/installations",Tg="@firebase/installations-compat",bg="@firebase/messaging",Ag="@firebase/messaging-compat",Sg="@firebase/performance",Rg="@firebase/performance-compat",Cg="@firebase/remote-config",Pg="@firebase/remote-config-compat",xg="@firebase/storage",kg="@firebase/storage-compat",Dg="@firebase/firestore",Ng="@firebase/ai",Vg="@firebase/firestore-compat",Lg="firebase",Og="11.10.0";/**
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
 */const $o="[DEFAULT]",Mg={[Bo]:"fire-core",[ug]:"fire-core-compat",[dg]:"fire-analytics",[hg]:"fire-analytics-compat",[pg]:"fire-app-check",[fg]:"fire-app-check-compat",[mg]:"fire-auth",[gg]:"fire-auth-compat",[_g]:"fire-rtdb",[yg]:"fire-data-connect",[vg]:"fire-rtdb-compat",[Eg]:"fire-fn",[wg]:"fire-fn-compat",[Ig]:"fire-iid",[Tg]:"fire-iid-compat",[bg]:"fire-fcm",[Ag]:"fire-fcm-compat",[Sg]:"fire-perf",[Rg]:"fire-perf-compat",[Cg]:"fire-rc",[Pg]:"fire-rc-compat",[xg]:"fire-gcs",[kg]:"fire-gcs-compat",[Dg]:"fire-fst",[Vg]:"fire-fst-compat",[Ng]:"fire-vertex","fire-js":"fire-js",[Lg]:"fire-js-all"};/**
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
 */const Gs=new Map,Fg=new Map,jo=new Map;function kl(n,e){try{n.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Un(n){const e=n.name;if(jo.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;jo.set(e,n);for(const t of Gs.values())kl(t,n);for(const t of Fg.values())kl(t,n);return!0}function Ta(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ug={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new Qr("app","Firebase",Ug);/**
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
 */class Bg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=Og;function Oh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$o,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(t||(t=xh()),!t)throw Bt.create("no-options");const i=Gs.get(s);if(i){if(gn(t,i.options)&&gn(r,i.config))return i;throw Bt.create("duplicate-app",{appName:s})}const a=new zm(s);for(const u of jo.values())a.addComponent(u);const c=new Bg(t,r,a);return Gs.set(s,c),c}function Mh(n=$o){const e=Gs.get(n);if(!e&&n===$o&&xh())return Oh();if(!e)throw Bt.create("no-app",{appName:n});return e}function $t(n,e,t){var r;let s=(r=Mg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(c.join(" "));return}Un(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $g="firebase-heartbeat-database",jg=1,Fr="firebase-heartbeat-store";let Ao=null;function Fh(){return Ao||(Ao=ig($g,jg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Fr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Bt.create("idb-open",{originalErrorMessage:n.message})})),Ao}async function qg(n){try{const t=(await Fh()).transaction(Fr),r=await t.objectStore(Fr).get(Uh(n));return await t.done,r}catch(e){if(e instanceof Tt)yt.warn(e.message);else{const t=Bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(t.message)}}}async function Dl(n,e){try{const r=(await Fh()).transaction(Fr,"readwrite");await r.objectStore(Fr).put(e,Uh(n)),await r.done}catch(t){if(t instanceof Tt)yt.warn(t.message);else{const r=Bt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yt.warn(r.message)}}}function Uh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wg=1024,Hg=30;class zg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Hg){const a=Qg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nl(),{heartbeatsToSend:r,unsentEntries:s}=Gg(this._heartbeatsCache.heartbeats),i=zs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return yt.warn(t),""}}}function Nl(){return new Date().toISOString().substring(0,10)}function Gg(n,e=Wg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Vl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Vl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Kg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vm()?Lm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vl(n){return zs(JSON.stringify({version:2,heartbeats:n})).length}function Qg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Jg(n){Un(new _n("platform-logger",e=>new cg(e),"PRIVATE")),Un(new _n("heartbeat",e=>new zg(e),"PRIVATE")),$t(Bo,xl,n),$t(Bo,xl,"esm2017"),$t("fire-js","")}Jg("");function ba(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Bh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yg=Bh,$h=new Qr("auth","Firebase",Bh());/**
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
 */const Ks=new wa("@firebase/auth");function Xg(n,...e){Ks.logLevel<=G.WARN&&Ks.warn(`Auth (${zn}): ${n}`,...e)}function Ls(n,...e){Ks.logLevel<=G.ERROR&&Ks.error(`Auth (${zn}): ${n}`,...e)}/**
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
 */function Ke(n,...e){throw Aa(n,...e)}function et(n,...e){return Aa(n,...e)}function jh(n,e,t){const r=Object.assign(Object.assign({},Yg()),{[e]:t});return new Qr("auth","Firebase",r).create(e,{appName:n.name})}function mt(n){return jh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Aa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return $h.create(n,...e)}function B(n,e,...t){if(!n)throw Aa(e,...t)}function ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ls(e),new Error(e)}function vt(n,e){n||ft(e)}/**
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
 */function qo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zg(){return Ll()==="http:"||Ll()==="https:"}function Ll(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function e_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zg()||xm()||"connection"in navigator)?navigator.onLine:!0}function t_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Yr{constructor(e,t){this.shortDelay=e,this.longDelay=t,vt(t>e,"Short delay should be less than long delay!"),this.isMobile=Rm()||km()}get(){return e_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sa(n,e){vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class qh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const n_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const r_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],s_=new Yr(3e4,6e4);function bt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function At(n,e,t,r,s={}){return Wh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Jr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Pm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Hn(n.emulatorConfig.host)&&(d.credentials="include"),qh.fetch()(await Hh(n,n.config.apiHost,t,c),d)})}async function Wh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},n_),e);try{const s=new o_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Rs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Rs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Rs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw jh(n,f,d);Ke(n,f)}}catch(s){if(s instanceof Tt)throw s;Ke(n,"network-request-failed",{message:String(s)})}}async function Xr(n,e,t,r,s={}){const i=await At(n,e,t,r,s);return"mfaPendingCredential"in i&&Ke(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Hh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Sa(n.config,s):`${n.config.apiScheme}://${s}`;return r_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function i_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class o_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),s_.get())})}}function Rs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=et(n,e,r);return s.customData._tokenResponse=t,s}function Ol(n){return n!==void 0&&n.enterprise!==void 0}class a_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return i_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function c_(n,e){return At(n,"GET","/v2/recaptchaConfig",bt(n,e))}/**
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
 */async function l_(n,e){return At(n,"POST","/v1/accounts:delete",e)}async function Qs(n,e){return At(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function xr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u_(n,e=!1){const t=me(n),r=await t.getIdToken(e),s=Ra(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xr(So(s.auth_time)),issuedAtTime:xr(So(s.iat)),expirationTime:xr(So(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function So(n){return Number(n)*1e3}function Ra(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ch(t);return s?JSON.parse(s):(Ls("Failed to decode base64 JWT payload"),null)}catch(s){return Ls("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ml(n){const e=Ra(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ur(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Tt&&h_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function h_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class d_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Js(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ur(n,Qs(t,{idToken:r}));B(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zh(i.providerUserInfo):[],c=p_(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=u?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Wo(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function f_(n){const e=me(n);await Js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zh(n){return n.map(e=>{var{providerId:t}=e,r=ba(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function m_(n,e){const t=await Wh(n,{},async()=>{const r=Jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Hh(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Hn(n.emulatorConfig.host)&&(u.credentials="include"),qh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function g_(n,e){return At(n,"POST","/v2/accounts:revokeToken",bt(n,e))}/**
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
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ml(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=Ml(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await m_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Vn;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
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
 */function Dt(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ge{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=ba(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ur(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return u_(this,e)}reload(){return f_(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ge(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(mt(this.auth));const e=await this.getIdToken();return await Ur(this,l_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,A=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:J,isAnonymous:Be,providerData:le,stsTokenManager:w}=t;B(q&&w,e,"internal-error");const _=Vn.fromJSON(this.name,w);B(typeof q=="string",e,"internal-error"),Dt(m,e.name),Dt(g,e.name),B(typeof J=="boolean",e,"internal-error"),B(typeof Be=="boolean",e,"internal-error"),Dt(A,e.name),Dt(C,e.name),Dt(D,e.name),Dt(k,e.name),Dt(V,e.name),Dt(F,e.name);const v=new Ge({uid:q,auth:e,email:g,emailVerified:J,displayName:m,isAnonymous:Be,photoURL:C,phoneNumber:A,tenantId:D,stsTokenManager:_,createdAt:V,lastLoginAt:F});return le&&Array.isArray(le)&&(v.providerData=le.map(E=>Object.assign({},E))),k&&(v._redirectEventId=k),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Vn;s.updateFromServerResponse(t);const i=new Ge({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Js(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Vn;c.updateFromIdToken(r);const u=new Ge({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Fl=new Map;function pt(n){vt(n instanceof Function,"Expected a class definition");let e=Fl.get(n);return e?(vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fl.set(n,e),e)}/**
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
 */class Gh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gh.type="NONE";const Ul=Gh;/**
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
 */function Os(n,e,t){return`firebase:${n}:${e}:${t}`}class Ln{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Os(this.userKey,s.apiKey,i),this.fullPersistenceKey=Os("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qs(this.auth,{idToken:e}).catch(()=>{});return t?Ge._fromGetAccountInfoResponse(this.auth,t,e):null}return Ge._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ln(pt(Ul),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||pt(Ul);const a=Os(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){let m;if(typeof f=="string"){const g=await Qs(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Ge._fromGetAccountInfoResponse(e,g,f)}else m=Ge._fromJSON(e,f);d!==i&&(c=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ln(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Ln(i,e,r))}}/**
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
 */function Bl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zh(e))return"Blackberry";if(ed(e))return"Webos";if(Qh(e))return"Safari";if((e.includes("chrome/")||Jh(e))&&!e.includes("edge/"))return"Chrome";if(Xh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kh(n=Pe()){return/firefox\//i.test(n)}function Qh(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jh(n=Pe()){return/crios\//i.test(n)}function Yh(n=Pe()){return/iemobile/i.test(n)}function Xh(n=Pe()){return/android/i.test(n)}function Zh(n=Pe()){return/blackberry/i.test(n)}function ed(n=Pe()){return/webos/i.test(n)}function Ca(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function __(n=Pe()){var e;return Ca(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function y_(){return Dm()&&document.documentMode===10}function td(n=Pe()){return Ca(n)||Xh(n)||ed(n)||Zh(n)||/windows phone/i.test(n)||Yh(n)}/**
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
 */function nd(n,e=[]){let t;switch(n){case"Browser":t=Bl(Pe());break;case"Worker":t=`${Bl(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zn}/${r}`}/**
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
 */class v_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function E_(n,e={}){return At(n,"GET","/v2/passwordPolicy",bt(n,e))}/**
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
 */const w_=6;class I_{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:w_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class T_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $l(this),this.idTokenSubscription=new $l(this),this.beforeStateQueue=new v_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ln.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qs(this,{idToken:e}),r=await Ge._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Js(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(mt(this));const t=e?me(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await E_(this),t=new I_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await g_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await Ln.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Xg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xt(n){return me(n)}class $l{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bm(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function b_(n){wi=n}function rd(n){return wi.loadJS(n)}function A_(){return wi.recaptchaEnterpriseScript}function S_(){return wi.gapiScript}function R_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class C_{constructor(){this.enterprise=new P_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class P_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const x_="recaptcha-enterprise",sd="NO_RECAPTCHA";class k_{constructor(e){this.type=x_,this.auth=Xt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{c_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new a_(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Ol(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(sd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new C_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Ol(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=A_();u.length!==0&&(u+=c),rd(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function jl(n,e,t,r=!1,s=!1){const i=new k_(n);let a;if(s)a=sd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ys(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await jl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await jl(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function D_(n,e){const t=Ta(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(gn(i,e??{}))return s;Ke(s,"already-initialized")}return t.initialize({options:e})}function N_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function V_(n,e,t){const r=Xt(n);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=id(e),{host:a,port:c}=L_(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(gn(d,r.config.emulator)&&gn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Hn(a)?(Dh(`${i}//${a}${u}`),Nh("Auth",!0)):O_()}function id(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function L_(n){const e=id(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ql(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:ql(a)}}}function ql(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function O_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Pa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function M_(n,e){return At(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function F_(n,e){return Xr(n,"POST","/v1/accounts:signInWithPassword",bt(n,e))}async function U_(n,e){return At(n,"POST","/v1/accounts:sendOobCode",bt(n,e))}async function B_(n,e){return U_(n,e)}/**
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
 */async function $_(n,e){return Xr(n,"POST","/v1/accounts:signInWithEmailLink",bt(n,e))}async function j_(n,e){return Xr(n,"POST","/v1/accounts:signInWithEmailLink",bt(n,e))}/**
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
 */class Br extends Pa{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Br(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Br(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ys(e,t,"signInWithPassword",F_);case"emailLink":return $_(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ys(e,r,"signUpPassword",M_);case"emailLink":return j_(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function On(n,e){return Xr(n,"POST","/v1/accounts:signInWithIdp",bt(n,e))}/**
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
 */const q_="http://localhost";class yn extends Pa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=ba(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new yn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return On(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,On(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,On(e,t)}buildRequest(){const e={requestUri:q_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jr(t)}return e}}/**
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
 */function W_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function H_(n){const e=Ir(Tr(n)).link,t=e?Ir(Tr(e)).deep_link_id:null,r=Ir(Tr(n)).deep_link_id;return(r?Ir(Tr(r)).link:null)||r||t||e||n}class xa{constructor(e){var t,r,s,i,a,c;const u=Ir(Tr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=W_((s=u.mode)!==null&&s!==void 0?s:null);B(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=H_(e);try{return new xa(t)}catch{return null}}}/**
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
 */class Gn{constructor(){this.providerId=Gn.PROVIDER_ID}static credential(e,t){return Br._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=xa.parseLink(t);return B(r,"argument-error"),Br._fromEmailAndCode(e,r.code,r.tenantId)}}Gn.PROVIDER_ID="password";Gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zr extends od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vt extends Zr{constructor(){super("facebook.com")}static credential(e){return yn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
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
 */class Lt extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Lt.credential(t,r)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
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
 */class Ot extends Zr{constructor(){super("github.com")}static credential(e){return yn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
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
 */class Mt extends Zr{constructor(){super("twitter.com")}static credential(e,t){return yn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Mt.credential(t,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */async function z_(n,e){return Xr(n,"POST","/v1/accounts:signUp",bt(n,e))}/**
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
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ge._fromIdTokenResponse(e,r,s),a=Wl(r);return new vn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Wl(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Wl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Xs extends Tt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Xs(e,t,r,s)}}function ad(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xs._fromErrorAndOperation(n,i,e,r):i})}async function G_(n,e,t=!1){const r=await Ur(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",r)}/**
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
 */async function K_(n,e,t=!1){const{auth:r}=n;if(je(r.app))return Promise.reject(mt(r));const s="reauthenticate";try{const i=await Ur(n,ad(r,s,e,n),t);B(i.idToken,r,"internal-error");const a=Ra(i.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),vn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
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
 */async function cd(n,e,t=!1){if(je(n.app))return Promise.reject(mt(n));const r="signIn",s=await ad(n,r,e),i=await vn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Q_(n,e){return cd(Xt(n),e)}/**
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
 */async function ld(n){const e=Xt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function J_(n,e,t){const r=Xt(n);await Ys(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",B_)}async function Y_(n,e,t){if(je(n.app))return Promise.reject(mt(n));const r=Xt(n),a=await Ys(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",z_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ld(n),u}),c=await vn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function X_(n,e,t){return je(n.app)?Promise.reject(mt(n)):Q_(me(n),Gn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ld(n),r})}function Z_(n,e,t,r){return me(n).onIdTokenChanged(e,t,r)}function ey(n,e,t){return me(n).beforeAuthStateChanged(e,t)}function ty(n,e,t,r){return me(n).onAuthStateChanged(e,t,r)}function ny(n){return me(n).signOut()}const Zs="__sak";/**
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
 */class ud{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ry=1e3,sy=10;class hd extends ud{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);y_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ry)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hd.type="LOCAL";const iy=hd;/**
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
 */class dd extends ud{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dd.type="SESSION";const fd=dd;/**
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
 */function oy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ii(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await oy(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ii.receivers=[];/**
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
 */function ka(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ay{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=ka("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function tt(){return window}function cy(n){tt().location.href=n}/**
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
 */function pd(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function ly(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function hy(){return pd()?self:null}/**
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
 */const md="firebaseLocalStorageDb",dy=1,ei="firebaseLocalStorage",gd="fbase_key";class es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ti(n,e){return n.transaction([ei],e?"readwrite":"readonly").objectStore(ei)}function fy(){const n=indexedDB.deleteDatabase(md);return new es(n).toPromise()}function Ho(){const n=indexedDB.open(md,dy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ei,{keyPath:gd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ei)?e(r):(r.close(),await fy(),e(await Ho()))})})}async function Hl(n,e,t){const r=Ti(n,!0).put({[gd]:e,value:t});return new es(r).toPromise()}async function py(n,e){const t=Ti(n,!1).get(e),r=await new es(t).toPromise();return r===void 0?null:r.value}function zl(n,e){const t=Ti(n,!0).delete(e);return new es(t).toPromise()}const my=800,gy=3;class _d{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ho(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>gy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ii._getInstance(hy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ly(),!this.activeServiceWorker)return;this.sender=new ay(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ho();return await Hl(e,Zs,"1"),await zl(e,Zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>py(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ti(s,!1).getAll();return new es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),my)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_d.type="LOCAL";const _y=_d;new Yr(3e4,6e4);/**
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
 */function yy(n,e){return e?pt(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Da extends Pa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return On(e,this._buildIdpRequest())}_linkToIdToken(e,t){return On(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return On(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vy(n){return cd(n.auth,new Da(n),n.bypassAuthState)}function Ey(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),K_(t,new Da(n),n.bypassAuthState)}async function wy(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),G_(t,new Da(n),n.bypassAuthState)}/**
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
 */class yd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vy;case"linkViaPopup":case"linkViaRedirect":return wy;case"reauthViaPopup":case"reauthViaRedirect":return Ey;default:Ke(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Iy=new Yr(2e3,1e4);class Dn extends yd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Iy.get())};e()}}Dn.currentPopupAction=null;/**
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
 */const Ty="pendingRedirect",Ms=new Map;class by extends yd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ms.get(this.auth._key());if(!e){try{const r=await Ay(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ms.set(this.auth._key(),e)}return this.bypassAuthState||Ms.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ay(n,e){const t=Cy(e),r=Ry(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Sy(n,e){Ms.set(n._key(),e)}function Ry(n){return pt(n._redirectPersistence)}function Cy(n){return Os(Ty,n.config.apiKey,n.name)}async function Py(n,e,t=!1){if(je(n.app))return Promise.reject(mt(n));const r=Xt(n),s=yy(r,e),a=await new by(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const xy=600*1e3;class ky{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!vd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(et(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gl(e))}saveEventToCache(e){this.cachedEventUids.add(Gl(e)),this.lastProcessedEventTime=Date.now()}}function Gl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vd(n);default:return!1}}/**
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
 */async function Ny(n,e={}){return At(n,"GET","/v1/projects",e)}/**
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
 */const Vy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ly=/^https?/;async function Oy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ny(n);for(const t of e)try{if(My(t))return}catch{}Ke(n,"unauthorized-domain")}function My(n){const e=qo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ly.test(t))return!1;if(Vy.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Fy=new Yr(3e4,6e4);function Kl(){const n=tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Uy(n){return new Promise((e,t)=>{var r,s,i;function a(){Kl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kl(),t(et(n,"network-request-failed"))},timeout:Fy.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)a();else{const c=R_("iframefcb");return tt()[c]=()=>{gapi.load?a():t(et(n,"network-request-failed"))},rd(`${S_()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Fs=null,e})}let Fs=null;function By(n){return Fs=Fs||Uy(n),Fs}/**
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
 */const $y=new Yr(5e3,15e3),jy="__/auth/iframe",qy="emulator/auth/iframe",Wy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zy(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Sa(e,qy):`https://${n.config.authDomain}/${jy}`,r={apiKey:e.apiKey,appName:n.name,v:zn},s=Hy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Jr(r).slice(1)}`}async function Gy(n){const e=await By(n),t=tt().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:zy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=et(n,"network-request-failed"),c=tt().setTimeout(()=>{i(a)},$y.get());function u(){tt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Ky={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qy=500,Jy=600,Yy="_blank",Xy="http://localhost";class Ql{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zy(n,e,t,r=Qy,s=Jy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ky),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Pe().toLowerCase();t&&(c=Jh(d)?Yy:t),Kh(d)&&(e=e||Xy,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,C])=>`${g}${A}=${C},`,"");if(__(d)&&c!=="_self")return ev(e||"",c),new Ql(null);const m=window.open(e||"",c,f);B(m,n,"popup-blocked");try{m.focus()}catch{}return new Ql(m)}function ev(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const tv="__/auth/handler",nv="emulator/auth/handler",rv=encodeURIComponent("fac");async function Jl(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:zn,eventId:s};if(e instanceof od){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Um(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Zr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${rv}=${encodeURIComponent(u)}`:"";return`${sv(n)}?${Jr(c).slice(1)}${d}`}function sv({config:n}){return n.emulator?Sa(n,nv):`https://${n.authDomain}/${tv}`}/**
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
 */const Ro="webStorageSupport";class iv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fd,this._completeRedirectFn=Py,this._overrideRedirectResult=Sy}async _openPopup(e,t,r,s){var i;vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Jl(e,t,r,qo(),s);return Zy(e,a,ka())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Jl(e,t,r,qo(),s);return cy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Gy(e),r=new ky(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ro,{type:Ro},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ro];a!==void 0&&t(!!a),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Oy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return td()||Qh()||Ca()}}const ov=iv;var Yl="@firebase/auth",Xl="1.10.8";/**
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
 */class av{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lv(n){Un(new _n("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nd(n)},d=new T_(r,s,i,u);return N_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Un(new _n("auth-internal",e=>{const t=Xt(e.getProvider("auth").getImmediate());return(r=>new av(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(Yl,Xl,cv(n)),$t(Yl,Xl,"esm2017")}/**
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
 */const uv=300,hv=kh("authIdTokenMaxAge")||uv;let Zl=null;const dv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>hv)return;const s=t==null?void 0:t.token;Zl!==s&&(Zl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fv(n=Mh()){const e=Ta(n,"auth");if(e.isInitialized())return e.getImmediate();const t=D_(n,{popupRedirectResolver:ov,persistence:[_y,iy,fd]}),r=kh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=dv(i.toString());ey(t,a,()=>a(t.currentUser)),Z_(t,c=>a(c))}}const s=Ph("auth");return s&&V_(t,`http://${s}`),t}function pv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}b_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=et("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",pv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lv("Browser");var mv="firebase",gv="11.10.0";/**
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
 */$t(mv,gv,"app");var eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jt,Ed;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function v(){}v.prototype=_.prototype,w.D=_.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(E,I,b){for(var y=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)y[ct-2]=arguments[ct];return _.prototype[I].apply(E,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,v){v||(v=0);var E=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)E[I]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(I=0;16>I;++I)E[I]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=w.g[0],v=w.g[1],I=w.g[2];var b=w.g[3],y=_+(b^v&(I^b))+E[0]+3614090360&4294967295;_=v+(y<<7&4294967295|y>>>25),y=b+(I^_&(v^I))+E[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(v^b&(_^v))+E[2]+606105819&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(_^I&(b^_))+E[3]+3250441966&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(b^v&(I^b))+E[4]+4118548399&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(I^_&(v^I))+E[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(v^b&(_^v))+E[6]+2821735955&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(_^I&(b^_))+E[7]+4249261313&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(b^v&(I^b))+E[8]+1770035416&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(I^_&(v^I))+E[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(v^b&(_^v))+E[10]+4294925233&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(_^I&(b^_))+E[11]+2304563134&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(b^v&(I^b))+E[12]+1804603682&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(I^_&(v^I))+E[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(v^b&(_^v))+E[14]+2792965006&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(_^I&(b^_))+E[15]+1236535329&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(I^b&(v^I))+E[1]+4129170786&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(_^v))+E[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(b^_))+E[11]+643717713&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(I^b))+E[0]+3921069994&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^b&(v^I))+E[5]+3593408605&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(_^v))+E[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(b^_))+E[15]+3634488961&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(I^b))+E[4]+3889429448&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^b&(v^I))+E[9]+568446438&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(_^v))+E[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(b^_))+E[3]+4107603335&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(I^b))+E[8]+1163531501&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^b&(v^I))+E[13]+2850285829&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(_^v))+E[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(b^_))+E[7]+1735328473&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(I^b))+E[12]+2368359562&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(v^I^b)+E[5]+4294588738&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^I)+E[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^v)+E[11]+1839030562&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^_)+E[14]+4259657740&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^b)+E[1]+2763975236&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^I)+E[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^v)+E[7]+4139469664&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^_)+E[10]+3200236656&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^b)+E[13]+681279174&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^I)+E[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^v)+E[3]+3572445317&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^_)+E[6]+76029189&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^b)+E[9]+3654602809&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^I)+E[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^v)+E[15]+530742520&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^_)+E[2]+3299628645&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(I^(v|~b))+E[0]+4096336452&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~I))+E[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~v))+E[14]+2878612391&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~_))+E[5]+4237533241&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~b))+E[12]+1700485571&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~I))+E[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~v))+E[10]+4293915773&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~_))+E[1]+2240044497&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~b))+E[8]+1873313359&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~I))+E[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~v))+E[6]+2734768916&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~_))+E[13]+1309151649&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~b))+E[4]+4149444226&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~I))+E[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~v))+E[2]+718787259&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~_))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var v=_-this.blockSize,E=this.B,I=this.h,b=0;b<_;){if(I==0)for(;b<=v;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<_;)if(E[I++]=w.charCodeAt(b++),I==this.blockSize){s(this,E),I=0;break}}else for(;b<_;)if(E[I++]=w[b++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var v=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=v&255,v/=256;for(this.u(w),w=Array(16),_=v=0;4>_;++_)for(var E=0;32>E;E+=8)w[v++]=this.g[_]>>>E&255;return w};function i(w,_){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=_(w)}function a(w,_){this.h=_;for(var v=[],E=!0,I=w.length-1;0<=I;I--){var b=w[I]|0;E&&b==_||(v[I]=b,E=!1)}this.g=v}var c={};function u(w){return-128<=w&&128>w?i(w,function(_){return new a([_|0],0>_?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return k(d(-w));for(var _=[],v=1,E=0;w>=v;E++)_[E]=w/v|0,v*=4294967296;return new a(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return k(f(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(_,8)),E=m,I=0;I<w.length;I+=8){var b=Math.min(8,w.length-I),y=parseInt(w.substring(I,I+b),_);8>b?(b=d(Math.pow(_,b)),E=E.j(b).add(d(y))):(E=E.j(v),E=E.add(d(y)))}return E}var m=u(0),g=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-k(this).m();for(var w=0,_=1,v=0;v<this.g.length;v++){var E=this.i(v);w+=(0<=E?E:4294967296+E)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(D(this))return"-"+k(this).toString(w);for(var _=d(Math.pow(w,6)),v=this,E="";;){var I=J(v,_).g;v=V(v,I.j(_));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=I,C(v))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function D(w){return w.h==-1}n.l=function(w){return w=V(this,w),D(w)?-1:C(w)?0:1};function k(w){for(var _=w.g.length,v=[],E=0;E<_;E++)v[E]=~w.g[E];return new a(v,~w.h).add(g)}n.abs=function(){return D(this)?k(this):this},n.add=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0,I=0;I<=_;I++){var b=E+(this.i(I)&65535)+(w.i(I)&65535),y=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);E=y>>>16,b&=65535,y&=65535,v[I]=y<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function V(w,_){return w.add(k(_))}n.j=function(w){if(C(this)||C(w))return m;if(D(this))return D(w)?k(this).j(k(w)):k(k(this).j(w));if(D(w))return k(this.j(k(w)));if(0>this.l(A)&&0>w.l(A))return d(this.m()*w.m());for(var _=this.g.length+w.g.length,v=[],E=0;E<2*_;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<w.g.length;I++){var b=this.i(E)>>>16,y=this.i(E)&65535,ct=w.i(I)>>>16,sr=w.i(I)&65535;v[2*E+2*I]+=y*sr,F(v,2*E+2*I),v[2*E+2*I+1]+=b*sr,F(v,2*E+2*I+1),v[2*E+2*I+1]+=y*ct,F(v,2*E+2*I+1),v[2*E+2*I+2]+=b*ct,F(v,2*E+2*I+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new a(v,0)};function F(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function q(w,_){this.g=w,this.h=_}function J(w,_){if(C(_))throw Error("division by zero");if(C(w))return new q(m,m);if(D(w))return _=J(k(w),_),new q(k(_.g),k(_.h));if(D(_))return _=J(w,k(_)),new q(k(_.g),_.h);if(30<w.g.length){if(D(w)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,E=_;0>=E.l(w);)v=Be(v),E=Be(E);var I=le(v,1),b=le(E,1);for(E=le(E,2),v=le(v,2);!C(E);){var y=b.add(E);0>=y.l(w)&&(I=I.add(v),b=y),E=le(E,1),v=le(v,1)}return _=V(w,I.j(_)),new q(I,_)}for(I=m;0<=w.l(_);){for(v=Math.max(1,Math.floor(w.m()/_.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(v),y=b.j(_);D(y)||0<y.l(w);)v-=E,b=d(v),y=b.j(_);C(b)&&(b=g),I=I.add(b),w=V(w,y)}return new q(I,w)}n.A=function(w){return J(this,w).h},n.and=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)&w.i(E);return new a(v,this.h&w.h)},n.or=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)|w.i(E);return new a(v,this.h|w.h)},n.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)^w.i(E);return new a(v,this.h^w.h)};function Be(w){for(var _=w.g.length+1,v=[],E=0;E<_;E++)v[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(v,w.h)}function le(w,_){var v=_>>5;_%=32;for(var E=w.g.length-v,I=[],b=0;b<E;b++)I[b]=0<_?w.i(b+v)>>>_|w.i(b+v+1)<<32-_:w.i(b+v);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ed=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,jt=a}).apply(typeof eu<"u"?eu:typeof self<"u"?self:typeof window<"u"?window:{});var Cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wd,br,Id,Us,zo,Td,bd,Ad;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cs=="object"&&Cs];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in h))break e;h=h[T]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,p=!1,T={next:function(){if(!p&&h<o.length){var S=h++;return{value:l(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function m(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),o.apply(l,T)}}return function(){return o.apply(l,arguments)}}function g(o,l,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function A(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,T,S){for(var N=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)N[Z-2]=arguments[Z];return l.prototype[T].apply(p,N)}}function D(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function k(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const T=o.length||0,S=p.length||0;o.length=T+S;for(let N=0;N<S;N++)o[T+N]=p[N]}else o.push(p)}}class V{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function J(o){return J[" "](o),o}J[" "]=function(){};var Be=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function le(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function w(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function _(o){const l={};for(const h in o)l[h]=o[h];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(h in p)o[h]=p[h];for(let S=0;S<v.length;S++)h=v[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function b(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Ji;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class ct{constructor(){this.h=this.g=null}add(l,h){const p=sr.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var sr=new V(()=>new xp,o=>o.reset());class xp{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ir,or=!1,Ji=new ct,Tc=()=>{const o=c.Promise.resolve(void 0);ir=()=>{o.then(kp)}};var kp=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){b(h)}var l=sr;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}or=!1};function Ct(){this.s=this.s,this.C=this.C}Ct.prototype.s=!1,Ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Dp=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o})();function ar(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Be){e:{try{J(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Np[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ar.aa.h.call(this)}}C(ar,Ie);var Np={2:"touch",3:"pen",4:"mouse"};ar.prototype.h=function(){ar.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var cs="closure_listenable_"+(1e6*Math.random()|0),Vp=0;function Lp(o,l,h,p,T){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=T,this.key=++Vp,this.da=this.fa=!1}function ls(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function us(o){this.src=o,this.g={},this.h=0}us.prototype.add=function(o,l,h,p,T){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var N=Xi(o,l,p,T);return-1<N?(l=o[N],h||(l.fa=!1)):(l=new Lp(l,this.src,S,!!p,T),l.fa=h,o.push(l)),l};function Yi(o,l){var h=l.type;if(h in o.g){var p=o.g[h],T=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=T)&&Array.prototype.splice.call(p,T,1),S&&(ls(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Xi(o,l,h,p){for(var T=0;T<o.length;++T){var S=o[T];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return T}return-1}var Zi="closure_lm_"+(1e6*Math.random()|0),eo={};function bc(o,l,h,p,T){if(Array.isArray(l)){for(var S=0;S<l.length;S++)bc(o,l[S],h,p,T);return null}return h=Rc(h),o&&o[cs]?o.K(l,h,d(p)?!!p.capture:!1,T):Op(o,l,h,!1,p,T)}function Op(o,l,h,p,T,S){if(!l)throw Error("Invalid event type");var N=d(T)?!!T.capture:!!T,Z=no(o);if(Z||(o[Zi]=Z=new us(o)),h=Z.add(l,h,p,N,S),h.proxy)return h;if(p=Mp(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Dp||(T=N),T===void 0&&(T=!1),o.addEventListener(l.toString(),p,T);else if(o.attachEvent)o.attachEvent(Sc(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Mp(){function o(h){return l.call(o.src,o.listener,h)}const l=Fp;return o}function Ac(o,l,h,p,T){if(Array.isArray(l))for(var S=0;S<l.length;S++)Ac(o,l[S],h,p,T);else p=d(p)?!!p.capture:!!p,h=Rc(h),o&&o[cs]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],h=Xi(S,h,p,T),-1<h&&(ls(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=no(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Xi(l,h,p,T)),(h=-1<o?l[o]:null)&&to(h))}function to(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[cs])Yi(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(Sc(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=no(l))?(Yi(h,o),h.h==0&&(h.src=null,l[Zi]=null)):ls(o)}}}function Sc(o){return o in eo?eo[o]:eo[o]="on"+o}function Fp(o,l){if(o.da)o=!0;else{l=new ar(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&to(o),o=h.call(p,l)}return o}function no(o){return o=o[Zi],o instanceof us?o:null}var ro="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rc(o){return typeof o=="function"?o:(o[ro]||(o[ro]=function(l){return o.handleEvent(l)}),o[ro])}function Te(){Ct.call(this),this.i=new us(this),this.M=this,this.F=null}C(Te,Ct),Te.prototype[cs]=!0,Te.prototype.removeEventListener=function(o,l,h,p){Ac(this,o,l,h,p)};function xe(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var T=l;l=new Ie(p,o),E(l,T)}if(T=!0,h)for(var S=h.length-1;0<=S;S--){var N=l.g=h[S];T=hs(N,p,!0,l)&&T}if(N=l.g=o,T=hs(N,p,!0,l)&&T,T=hs(N,p,!1,l)&&T,h)for(S=0;S<h.length;S++)N=l.g=h[S],T=hs(N,p,!1,l)&&T}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)ls(h[p]);delete o.g[l],o.h--}}this.F=null},Te.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Te.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function hs(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,S=0;S<l.length;++S){var N=l[S];if(N&&!N.da&&N.capture==h){var Z=N.listener,_e=N.ha||N.src;N.fa&&Yi(o.i,N),T=Z.call(_e,p)!==!1&&T}}return T&&!p.defaultPrevented}function Cc(o,l,h){if(typeof o=="function")h&&(o=g(o,h));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Pc(o){o.g=Cc(()=>{o.g=null,o.i&&(o.i=!1,Pc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Up extends Ct{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Pc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cr(o){Ct.call(this),this.h=o,this.g={}}C(cr,Ct);var xc=[];function kc(o){le(o.g,function(l,h){this.g.hasOwnProperty(h)&&to(l)},o),o.g={}}cr.prototype.N=function(){cr.aa.N.call(this),kc(this)},cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var so=c.JSON.stringify,Bp=c.JSON.parse,$p=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function io(){}io.prototype.h=null;function Dc(o){return o.h||(o.h=o.i())}function Nc(){}var lr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oo(){Ie.call(this,"d")}C(oo,Ie);function ao(){Ie.call(this,"c")}C(ao,Ie);var tn={},Vc=null;function ds(){return Vc=Vc||new Te}tn.La="serverreachability";function Lc(o){Ie.call(this,tn.La,o)}C(Lc,Ie);function ur(o){const l=ds();xe(l,new Lc(l))}tn.STAT_EVENT="statevent";function Oc(o,l){Ie.call(this,tn.STAT_EVENT,o),this.stat=l}C(Oc,Ie);function ke(o){const l=ds();xe(l,new Oc(l,o))}tn.Ma="timingevent";function Mc(o,l){Ie.call(this,tn.Ma,o),this.size=l}C(Mc,Ie);function hr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function dr(){this.g=!0}dr.prototype.xa=function(){this.g=!1};function jp(o,l,h,p,T,S){o.info(function(){if(o.g)if(S)for(var N="",Z=S.split("&"),_e=0;_e<Z.length;_e++){var Y=Z[_e].split("=");if(1<Y.length){var be=Y[0];Y=Y[1];var Ae=be.split("_");N=2<=Ae.length&&Ae[1]=="type"?N+(be+"="+Y+"&"):N+(be+"=redacted&")}}else N=null;else N=S;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+l+`
`+h+`
`+N})}function qp(o,l,h,p,T,S,N){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+l+`
`+h+`
`+S+" "+N})}function bn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Hp(o,h)+(p?" "+p:"")})}function Wp(o,l){o.info(function(){return"TIMEOUT: "+l})}dr.prototype.info=function(){};function Hp(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var S=T[0];if(S!="noop"&&S!="stop"&&S!="close")for(var N=1;N<T.length;N++)T[N]=""}}}}return so(h)}catch{return l}}var fs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},co;function ps(){}C(ps,io),ps.prototype.g=function(){return new XMLHttpRequest},ps.prototype.i=function(){return{}},co=new ps;function Pt(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new cr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uc}function Uc(){this.i=null,this.g="",this.h=!1}var Bc={},lo={};function uo(o,l,h){o.L=1,o.v=ys(lt(l)),o.m=h,o.P=!0,$c(o,null)}function $c(o,l){o.F=Date.now(),ms(o),o.A=lt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),tl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Uc,o.g=vl(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Up(g(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(xc[0]=T.toString()),T=xc);for(var S=0;S<T.length;S++){var N=bc(h,T[S],p||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),ur(),jp(o.i,o.u,o.A,o.l,o.R,o.m)}Pt.prototype.ca=function(o){o=o.target;const l=this.M;l&&ut(o)==3?l.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=ut(this.g);var l=this.g.Ba();const Rn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||cl(this.g)))){this.J||Ae!=4||l==7||(l==8||0>=Rn?ur(3):ur(2)),ho(this);var h=this.g.Z();this.X=h;t:if(jc(this)){var p=cl(this.g);o="";var T=p.length,S=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),fr(this);var N="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(S&&l==T-1)});p.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,qp(this.i,this.u,this.A,this.l,this.R,Ae,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,_e=this.g;if((Z=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Z)){var Y=Z;break t}}Y=null}if(h=Y)bn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fo(this,h);else{this.o=!1,this.s=3,ke(12),nn(this),fr(this);break e}}if(this.P){h=!0;let He;for(;!this.J&&this.C<N.length;)if(He=zp(this,N),He==lo){Ae==4&&(this.s=4,ke(14),h=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==Bc){this.s=4,ke(15),bn(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else bn(this.i,this.l,He,null),fo(this,He);if(jc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||N.length!=0||this.h.h||(this.s=1,ke(16),h=!1),this.o=this.o&&h,!h)bn(this.i,this.l,N,"[Invalid Chunked Response]"),nn(this),fr(this);else if(0<N.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),vo(be),be.M=!0,ke(11))}}else bn(this.i,this.l,N,null),fo(this,N);Ae==4&&nn(this),this.o&&!this.J&&(Ae==4?ml(this.j,this):(this.o=!1,ms(this)))}else lm(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),nn(this),fr(this)}}}catch{}finally{}};function jc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function zp(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?lo:(h=Number(l.substring(h,p)),isNaN(h)?Bc:(p+=1,p+h>l.length?lo:(l=l.slice(p,p+h),o.C=p+h,l)))}Pt.prototype.cancel=function(){this.J=!0,nn(this)};function ms(o){o.S=Date.now()+o.I,qc(o,o.I)}function qc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=hr(g(o.ba,o),l)}function ho(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Pt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Wp(this.i,this.A),this.L!=2&&(ur(),ke(17)),nn(this),this.s=2,fr(this)):qc(this,this.S-o)};function fr(o){o.j.G==0||o.J||ml(o.j,o)}function nn(o){ho(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,kc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function fo(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||po(h.h,o))){if(!o.K&&po(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)bs(h),Is(h);else break e;yo(h),ke(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=hr(g(h.Za,h),6e3));if(1>=zc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else sn(h,11)}else if((o.K||h.g==o)&&bs(h),!F(l))for(T=h.Da.g.parse(l),l=0;l<T.length;l++){let Y=T[l];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const be=Y[3];be!=null&&(h.la=be,h.j.info("VER="+h.la));const Ae=Y[4];Ae!=null&&(h.Aa=Ae,h.j.info("SVER="+h.Aa));const Rn=Y[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(p=1.5*Rn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const He=o.g;if(He){const Ss=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ss){var S=p.h;S.g||Ss.indexOf("spdy")==-1&&Ss.indexOf("quic")==-1&&Ss.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(mo(S,S.h),S.h=null))}if(p.D){const Eo=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;Eo&&(p.ya=Eo,te(p.I,p.D,Eo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var N=o;if(p.qa=yl(p,p.J?p.ia:null,p.W),N.K){Gc(p.h,N);var Z=N,_e=p.L;_e&&(Z.I=_e),Z.B&&(ho(Z),ms(Z)),p.g=N}else fl(p);0<h.i.length&&Ts(h)}else Y[0]!="stop"&&Y[0]!="close"||sn(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?sn(h,7):_o(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}ur(4)}catch{}}var Gp=class{constructor(o,l){this.g=o,this.map=l}};function Wc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function zc(o){return o.h?1:o.g?o.g.size:0}function po(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function mo(o,l){o.g?o.g.add(l):o.h=l}function Gc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Wc.prototype.cancel=function(){if(this.i=Kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Kc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return D(o.i)}function Kp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function Qp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function Qc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Qp(o),p=Kp(o),T=p.length,S=0;S<T;S++)l.call(void 0,p[S],h&&h[S],o)}var Jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jp(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),T=null;if(0<=p){var S=o[h].substring(0,p);T=o[h].substring(p+1)}else S=o[h];l(S,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function rn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof rn){this.h=o.h,gs(this,o.j),this.o=o.o,this.g=o.g,_s(this,o.s),this.l=o.l;var l=o.i,h=new gr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Yc(this,h),this.m=o.m}else o&&(l=String(o).match(Jc))?(this.h=!1,gs(this,l[1]||"",!0),this.o=pr(l[2]||""),this.g=pr(l[3]||"",!0),_s(this,l[4]),this.l=pr(l[5]||"",!0),Yc(this,l[6]||"",!0),this.m=pr(l[7]||"")):(this.h=!1,this.i=new gr(null,this.h))}rn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(mr(l,Xc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(mr(l,Xc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(mr(h,h.charAt(0)=="/"?Zp:Xp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",mr(h,tm)),o.join("")};function lt(o){return new rn(o)}function gs(o,l,h){o.j=h?pr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function _s(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Yc(o,l,h){l instanceof gr?(o.i=l,nm(o.i,o.h)):(h||(l=mr(l,em)),o.i=new gr(l,o.h))}function te(o,l,h){o.i.set(l,h)}function ys(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function pr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function mr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Yp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Yp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xc=/[#\/\?@]/g,Xp=/[#\?:]/g,Zp=/[#\?]/g,em=/[#\?@]/g,tm=/#/g;function gr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function xt(o){o.g||(o.g=new Map,o.h=0,o.i&&Jp(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=gr.prototype,n.add=function(o,l){xt(this),this.i=null,o=An(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Zc(o,l){xt(o),l=An(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function el(o,l){return xt(o),l=An(o,l),o.g.has(l)}n.forEach=function(o,l){xt(this),this.g.forEach(function(h,p){h.forEach(function(T){o.call(l,T,p,this)},this)},this)},n.na=function(){xt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const T=o[p];for(let S=0;S<T.length;S++)h.push(l[p])}return h},n.V=function(o){xt(this);let l=[];if(typeof o=="string")el(this,o)&&(l=l.concat(this.g.get(An(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return xt(this),this.i=null,o=An(this,o),el(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function tl(o,l,h){Zc(o,l),0<h.length&&(o.i=null,o.g.set(An(o,l),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const S=encodeURIComponent(String(p)),N=this.V(p);for(p=0;p<N.length;p++){var T=S;N[p]!==""&&(T+="="+encodeURIComponent(String(N[p]))),o.push(T)}}return this.i=o.join("&")};function An(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function nm(o,l){l&&!o.j&&(xt(o),o.i=null,o.g.forEach(function(h,p){var T=p.toLowerCase();p!=T&&(Zc(this,p),tl(this,T,h))},o)),o.j=l}function rm(o,l){const h=new dr;if(c.Image){const p=new Image;p.onload=A(kt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=A(kt,h,"TestLoadImage: error",!1,l,p),p.onabort=A(kt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=A(kt,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function sm(o,l){const h=new dr,p=new AbortController,T=setTimeout(()=>{p.abort(),kt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(T),S.ok?kt(h,"TestPingServer: ok",!0,l):kt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),kt(h,"TestPingServer: error",!1,l)})}function kt(o,l,h,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(h)}catch{}}function im(){this.g=new $p}function om(o,l,h){const p=h||"";try{Qc(o,function(T,S){let N=T;d(T)&&(N=so(T)),l.push(p+S+"="+encodeURIComponent(N))})}catch(T){throw l.push(p+"type="+encodeURIComponent("_badmap")),T}}function vs(o){this.l=o.Ub||null,this.j=o.eb||!1}C(vs,io),vs.prototype.g=function(){return new Es(this.l,this.j)},vs.prototype.i=(function(o){return function(){return o}})({});function Es(o,l){Te.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Es,Te),n=Es.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,yr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_r(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function nl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?_r(this):yr(this),this.readyState==3&&nl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,_r(this))},n.Qa=function(o){this.g&&(this.response=o,_r(this))},n.ga=function(){this.g&&_r(this)};function _r(o){o.readyState=4,o.l=null,o.j=null,o.v=null,yr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function yr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function rl(o){let l="";return le(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function go(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=rl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,l,h))}function ie(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ie,Te);var am=/^https?$/i,cm=["POST","PUT"];n=ie.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():co.g(),this.v=this.o?Dc(this.o):Dc(co),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){sl(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)h.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),T=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(cm,l,void 0))||p||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of h)this.g.setRequestHeader(S,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{al(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){sl(this,S)}};function sl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,il(o),ws(o)}function il(o){o.A||(o.A=!0,xe(o,"complete"),xe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,xe(this,"complete"),xe(this,"abort"),ws(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ws(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ol(this):this.bb())},n.bb=function(){ol(this)};function ol(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ut(o)!=4||o.Z()!=2)){if(o.u&&ut(o)==4)Cc(o.Ea,0,o);else if(xe(o,"readystatechange"),ut(o)==4){o.h=!1;try{const N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=N===0){var T=String(o.D).match(Jc)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),p=!am.test(T?T.toLowerCase():"")}h=p}if(h)xe(o,"complete"),xe(o,"success");else{o.m=6;try{var S=2<ut(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",il(o)}}finally{ws(o)}}}}function ws(o,l){if(o.g){al(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||xe(o,"ready");try{h.onreadystatechange=p}catch{}}}function al(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ut(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Bp(l)}};function cl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function lm(o){const l={};o=(o.g&&2<=ut(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(F(o[p]))continue;var h=I(o[p]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[T]||[];l[T]=S,S.push(h)}w(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function ll(o){this.Aa=0,this.i=[],this.j=new dr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vr("baseRetryDelayMs",5e3,o),this.cb=vr("retryDelaySeedMs",1e4,o),this.Wa=vr("forwardChannelMaxRetries",2,o),this.wa=vr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Wc(o&&o.concurrentRequestLimit),this.Da=new im,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ll.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){ke(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=yl(this,null,this.W),Ts(this)};function _o(o){if(ul(o),o.G==3){var l=o.U++,h=lt(o.I);if(te(h,"SID",o.K),te(h,"RID",l),te(h,"TYPE","terminate"),Er(o,h),l=new Pt(o,o.j,l),l.L=2,l.v=ys(lt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=vl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ms(l)}_l(o)}function Is(o){o.g&&(vo(o),o.g.cancel(),o.g=null)}function ul(o){Is(o),o.u&&(c.clearTimeout(o.u),o.u=null),bs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ts(o){if(!Hc(o.h)&&!o.s){o.s=!0;var l=o.Ga;ir||Tc(),or||(ir(),or=!0),Ji.add(l,o),o.B=0}}function um(o,l){return zc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=hr(g(o.Ga,o,l),gl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new Pt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=_(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(T.H=S,S=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=dl(this,T,l),h=lt(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),Er(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(rl(S)))+"&"+l:this.m&&go(h,this.m,S)),mo(this.h,T),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",l),te(h,"SID","null"),T.T=!0,uo(T,h,null)):uo(T,h,l),this.G=2}}else this.G==3&&(o?hl(this,o):this.i.length==0||Hc(this.h)||hl(this))};function hl(o,l){var h;l?h=l.l:h=o.U++;const p=lt(o.I);te(p,"SID",o.K),te(p,"RID",h),te(p,"AID",o.T),Er(o,p),o.m&&o.o&&go(p,o.m,o.o),h=new Pt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=dl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),mo(o.h,h),uo(h,p,l)}function Er(o,l){o.H&&le(o.H,function(h,p){te(l,p,h)}),o.l&&Qc({},function(h,p){te(l,p,h)})}function dl(o,l,h){h=Math.min(o.i.length,h);var p=o.l?g(o.l.Na,o.l,o):null;e:{var T=o.i;let S=-1;for(;;){const N=["count="+h];S==-1?0<h?(S=T[0].g,N.push("ofs="+S)):S=0:N.push("ofs="+S);let Z=!0;for(let _e=0;_e<h;_e++){let Y=T[_e].g;const be=T[_e].map;if(Y-=S,0>Y)S=Math.max(0,T[_e].g-100),Z=!1;else try{om(be,N,"req"+Y+"_")}catch{p&&p(be)}}if(Z){p=N.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function fl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;ir||Tc(),or||(ir(),or=!0),Ji.add(l,o),o.v=0}}function yo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=hr(g(o.Fa,o),gl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=hr(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Is(this),pl(this))};function vo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function pl(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=lt(o.qa);te(l,"RID","rpc"),te(l,"SID",o.K),te(l,"AID",o.T),te(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(l,"TO",o.ja),te(l,"TYPE","xmlhttp"),Er(o,l),o.m&&o.o&&go(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ys(lt(l)),h.m=null,h.P=!0,$c(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Is(this),yo(this),ke(19))};function bs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ml(o,l){var h=null;if(o.g==l){bs(o),vo(o),o.g=null;var p=2}else if(po(o.h,l))h=l.D,Gc(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var T=o.B;p=ds(),xe(p,new Mc(p,h)),Ts(o)}else fl(o);else if(T=l.s,T==3||T==0&&0<l.X||!(p==1&&um(o,l)||p==2&&yo(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),T){case 1:sn(o,5);break;case 4:sn(o,10);break;case 3:sn(o,6);break;default:sn(o,2)}}}function gl(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function sn(o,l){if(o.j.info("Error code "+l),l==2){var h=g(o.fb,o),p=o.Xa;const T=!p;p=new rn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||gs(p,"https"),ys(p),T?rm(p.toString(),h):sm(p.toString(),h)}else ke(2);o.G=0,o.l&&o.l.sa(l),_l(o),ul(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function _l(o){if(o.G=0,o.ka=[],o.l){const l=Kc(o.h);(l.length!=0||o.i.length!=0)&&(k(o.ka,l),k(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function yl(o,l,h){var p=h instanceof rn?lt(h):new rn(h);if(p.g!="")l&&(p.g=l+"."+p.g),_s(p,p.s);else{var T=c.location;p=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var S=new rn(null);p&&gs(S,p),l&&(S.g=l),T&&_s(S,T),h&&(S.l=h),p=S}return h=o.D,l=o.ya,h&&l&&te(p,h,l),te(p,"VER",o.la),Er(o,p),p}function vl(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ie(new vs({eb:h})):new ie(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}n=El.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function As(){}As.prototype.g=function(o,l){return new Le(o,l)};function Le(o,l){Te.call(this),this.g=new ll(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!F(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Sn(this)}C(Le,Te),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){_o(this.g)},Le.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=so(o),o=h);l.i.push(new Gp(l.Ya++,o)),l.G==3&&Ts(l)},Le.prototype.N=function(){this.g.l=null,delete this.j,_o(this.g),delete this.g,Le.aa.N.call(this)};function wl(o){oo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(wl,oo);function Il(){ao.call(this),this.status=1}C(Il,ao);function Sn(o){this.g=o}C(Sn,El),Sn.prototype.ua=function(){xe(this.g,"a")},Sn.prototype.ta=function(o){xe(this.g,new wl(o))},Sn.prototype.sa=function(o){xe(this.g,new Il)},Sn.prototype.ra=function(){xe(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,Ad=function(){return new As},bd=function(){return ds()},Td=tn,zo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fs.NO_ERROR=0,fs.TIMEOUT=8,fs.HTTP_ERROR=6,Us=fs,Fc.COMPLETE="complete",Id=Fc,Nc.EventType=lr,lr.OPEN="a",lr.CLOSE="b",lr.ERROR="c",lr.MESSAGE="d",Te.prototype.listen=Te.prototype.K,br=Nc,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,wd=ie}).apply(typeof Cs<"u"?Cs:typeof self<"u"?self:typeof window<"u"?window:{});const tu="@firebase/firestore",nu="4.8.0";/**
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
 */let Kn="11.10.0";/**
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
 */const En=new wa("@firebase/firestore");function Cn(){return En.logLevel}function O(n,...e){if(En.logLevel<=G.DEBUG){const t=e.map(Na);En.debug(`Firestore (${Kn}): ${n}`,...t)}}function Et(n,...e){if(En.logLevel<=G.ERROR){const t=e.map(Na);En.error(`Firestore (${Kn}): ${n}`,...t)}}function Wt(n,...e){if(En.logLevel<=G.WARN){const t=e.map(Na);En.warn(`Firestore (${Kn}): ${n}`,...t)}}function Na(n){if(typeof n=="string")return n;try{/**
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
 */function $(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Sd(n,r,t)}function Sd(n,e,t){let r=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Et(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Sd(e,s,r)}function W(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Rd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _v{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Re.UNAUTHENTICATED)))}shutdown(){}}class yv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class vv{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Rd(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class Ev{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ev(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Re.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ru{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ru(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ru(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Tv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Cd(){return new TextEncoder}/**
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
 */class Va{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Tv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function Go(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return H(r,s);{const i=Cd(),a=bv(i.encode(su(n,t)),i.encode(su(e,t)));return a!==0?a:H(r,s)}}t+=r>65535?2:1}return H(n.length,e.length)}function su(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function bv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return H(n[t],e[t]);return H(n.length,e.length)}function Bn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const iu="__name__";class Xe{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xe?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Xe.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return H(e.length,t.length)}static compareSegments(e,t){const r=Xe.isNumericId(e),s=Xe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Xe.extractNumericId(e).compare(Xe.extractNumericId(t)):Go(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jt.fromString(e.substring(4,e.length-2))}}class ee extends Xe{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const Av=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends Xe{construct(e,t,r){return new ve(e,t,r)}static isValidIdentifier(e){return Av.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===iu}static keyField(){return new ve([iu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
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
 */function Pd(n,e,t){if(!t)throw new L(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sv(n,e,t,r){if(e===!0&&r===!0)throw new L(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ou(n){if(!U.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function au(n){if(U.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function Ve(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bi(n);throw new L(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function ts(n,e){if(!xd(n))throw new L(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new L(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const cu=-62135596800,lu=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*lu);return new ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cu)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lu}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ts(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:fe("string",ne._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */const $r=-1;function Rv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new Ht(s,U.empty(),e)}function Cv(n){return new Ht(n.readTime,n.key,$r)}class Ht{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ht(j.min(),U.empty(),$r)}static max(){return new Ht(j.max(),U.empty(),$r)}}function Pv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
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
 */const xv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Qn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==xv)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,r)=>{t(e)}))}static reject(e){return new x(((t,r)=>{r(e)}))}static waitFor(e){return new x(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next((s=>s?x.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new x(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((f=>{a[d]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,t){return new x(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Dv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ai{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ai.ue=-1;/**
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
 */const La=-1;function Si(n){return n==null}function ti(n){return n===0&&1/n==-1/0}function Nv(n){return typeof n=="number"&&Number.isInteger(n)&&!ti(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const kd="";function Vv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=uu(e)),e=Lv(n.get(t),e);return uu(e)}function Lv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case kd:t+="";break;default:t+=i}}return t}function uu(n){return n+kd+""}/**
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
 */function hu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class se{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ps(this.root,e,this.comparator,!0)}}class Ps{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new du(this.data.getIterator())}getIteratorFrom(e){return new du(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class du{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Me{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Me([])}unionWith(e){let t=new pe(ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Nd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nd("Invalid base64 string: "+i):i}})(e);return new we(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const Ov=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=Ov.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gt(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
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
 */const Vd="server_timestamp",Ld="__type__",Od="__previous_value__",Md="__local_write_time__";function Oa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ld])===null||t===void 0?void 0:t.stringValue)===Vd}function Ri(n){const e=n.mapValue.fields[Od];return Oa(e)?Ri(e):e}function jr(n){const e=zt(n.mapValue.fields[Md].timestampValue);return new ne(e.seconds,e.nanos)}/**
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
 */class Mv{constructor(e,t,r,s,i,a,c,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const ni="(default)";class qr{constructor(e,t){this.projectId=e,this.database=t||ni}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database===ni}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fd="__type__",Fv="__max__",xs={mapValue:{}},Ud="__vector__",ri="value";function Kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oa(n)?4:Bv(n)?9007199254740991:Uv(n)?10:11:$(28295,{value:n})}function at(n,e){if(n===e)return!0;const t=Kt(n);if(t!==Kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jr(n).isEqual(jr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=zt(s.timestampValue),c=zt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Gt(s.bytesValue).isEqual(Gt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ue(s.doubleValue),c=ue(i.doubleValue);return a===c?ti(a)===ti(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Bn(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(hu(a)!==hu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!at(a[u],c[u])))return!1;return!0})(n,e);default:return $(52216,{left:n})}}function Wr(n,e){return(n.values||[]).find((t=>at(t,e)))!==void 0}function $n(n,e){if(n===e)return 0;const t=Kt(n),r=Kt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=ue(i.integerValue||i.doubleValue),u=ue(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return fu(n.timestampValue,e.timestampValue);case 4:return fu(jr(n),jr(e));case 5:return Go(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Gt(i),u=Gt(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=H(c[d],u[d]);if(f!==0)return f}return H(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=H(ue(i.latitude),ue(a.latitude));return c!==0?c:H(ue(i.longitude),ue(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return pu(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,u,d,f;const m=i.fields||{},g=a.fields||{},A=(c=m[ri])===null||c===void 0?void 0:c.arrayValue,C=(u=g[ri])===null||u===void 0?void 0:u.arrayValue,D=H(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:pu(A,C)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===xs.mapValue&&a===xs.mapValue)return 0;if(i===xs.mapValue)return 1;if(a===xs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=Go(u[m],f[m]);if(g!==0)return g;const A=$n(c[u[m]],d[f[m]]);if(A!==0)return A}return H(u.length,f.length)})(n.mapValue,e.mapValue);default:throw $(23264,{le:t})}}function fu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=zt(n),r=zt(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function pu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=$n(t[s],r[s]);if(i)return i}return H(t.length,r.length)}function jn(n){return Ko(n)}function Ko(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=zt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Gt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ko(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ko(t.fields[a])}`;return s+"}"})(n.mapValue):$(61005,{value:n})}function Bs(n){switch(Kt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ri(n);return e?16+Bs(e):16;case 5:return 2*n.stringValue.length;case 6:return Gt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Bs(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Zt(r.fields,((i,a)=>{s+=i.length+Bs(a)})),s})(n.mapValue);default:throw $(13486,{value:n})}}function mu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Qo(n){return!!n&&"integerValue"in n}function Ma(n){return!!n&&"arrayValue"in n}function gu(n){return!!n&&"nullValue"in n}function _u(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $s(n){return!!n&&"mapValue"in n}function Uv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fd])===null||t===void 0?void 0:t.stringValue)===Ud}function kr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=kr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=kr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Bv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Fv}/**
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
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!$s(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(t)}setAll(e){let t=ve.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=kr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());$s(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];$s(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Zt(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ne(kr(this.value))}}function Bd(n){const e=[];return Zt(n.fields,((t,r)=>{const s=new ve([t]);if($s(r)){const i=Bd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Me(e)}/**
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
 */class si{constructor(e,t){this.position=e,this.inclusive=t}}function yu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=$n(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hr{constructor(e,t="asc"){this.field=e,this.dir=t}}function $v(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $d{}class de extends $d{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new qv(e,t,r):t==="array-contains"?new zv(e,r):t==="in"?new Gv(e,r):t==="not-in"?new Kv(e,r):t==="array-contains-any"?new Qv(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Wv(e,r):new Hv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($n(t,this.value)):t!==null&&Kt(this.value)===Kt(t)&&this.matchesComparison($n(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends $d{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Qe(e,t)}matches(e){return jd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function jd(n){return n.op==="and"}function qd(n){return jv(n)&&jd(n)}function jv(n){for(const e of n.filters)if(e instanceof Qe)return!1;return!0}function Jo(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+jn(n.value);if(qd(n))return n.filters.map((e=>Jo(e))).join(",");{const e=n.filters.map((t=>Jo(t))).join(",");return`${n.op}(${e})`}}function Wd(n,e){return n instanceof de?(function(r,s){return s instanceof de&&r.op===s.op&&r.field.isEqual(s.field)&&at(r.value,s.value)})(n,e):n instanceof Qe?(function(r,s){return s instanceof Qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Wd(a,s.filters[c])),!0):!1})(n,e):void $(19439)}function Hd(n){return n instanceof de?(function(t){return`${t.field.canonicalString()} ${t.op} ${jn(t.value)}`})(n):n instanceof Qe?(function(t){return t.op.toString()+" {"+t.getFilters().map(Hd).join(" ,")+"}"})(n):"Filter"}class qv extends de{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Wv extends de{constructor(e,t){super(e,"in",t),this.keys=zd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Hv extends de{constructor(e,t){super(e,"not-in",t),this.keys=zd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>U.fromName(r.referenceValue)))}class zv extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ma(t)&&Wr(t.arrayValue,this.value)}}class Gv extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wr(this.value.arrayValue,t)}}class Kv extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wr(this.value.arrayValue,t)}}class Qv extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ma(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Wr(this.value.arrayValue,r)))}}/**
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
 */class Jv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function Eu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Jv(n,e,t,r,s,i,a)}function Fa(n){const e=W(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Jo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Si(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>jn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>jn(r))).join(",")),e.Pe=t}return e.Pe}function Ua(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$v(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vu(n.startAt,e.startAt)&&vu(n.endAt,e.endAt)}function Yo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Yn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Yv(n,e,t,r,s,i,a,c){return new Yn(n,e,t,r,s,i,a,c)}function Ci(n){return new Yn(n)}function wu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gd(n){return n.collectionGroup!==null}function Dr(n){const e=W(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pe(ve.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Hr(i,r))})),t.has(ve.keyField().canonicalString())||e.Te.push(new Hr(ve.keyField(),r))}return e.Te}function nt(n){const e=W(n);return e.Ie||(e.Ie=Xv(e,Dr(n))),e.Ie}function Xv(n,e){if(n.limitType==="F")return Eu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Hr(s.field,i)}));const t=n.endAt?new si(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new si(n.startAt.position,n.startAt.inclusive):null;return Eu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Xo(n,e){const t=n.filters.concat([e]);return new Yn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ii(n,e,t){return new Yn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Pi(n,e){return Ua(nt(n),nt(e))&&n.limitType===e.limitType}function Kd(n){return`${Fa(nt(n))}|lt:${n.limitType}`}function Pn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Hd(s))).join(", ")}]`),Si(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>jn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>jn(s))).join(",")),`Target(${r})`})(nt(n))}; limitType=${n.limitType})`}function xi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Dr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const d=yu(a,c,u);return a.inclusive?d<=0:d<0})(r.startAt,Dr(r),s)||r.endAt&&!(function(a,c,u){const d=yu(a,c,u);return a.inclusive?d>=0:d>0})(r.endAt,Dr(r),s))})(n,e)}function Zv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qd(n){return(e,t)=>{let r=!1;for(const s of Dr(n)){const i=eE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eE(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?$n(u,d):$(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
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
 */class In{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zt(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Dd(this.inner)}size(){return this.innerSize}}/**
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
 */const tE=new se(U.comparator);function wt(){return tE}const Jd=new se(U.comparator);function Ar(...n){let e=Jd;for(const t of n)e=e.insert(t.key,t);return e}function Yd(n){let e=Jd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function cn(){return Nr()}function Xd(){return Nr()}function Nr(){return new In((n=>n.toString()),((n,e)=>n.isEqual(e)))}const nE=new se(U.comparator),rE=new pe(U.comparator);function K(...n){let e=rE;for(const t of n)e=e.add(t);return e}const sE=new pe(H);function iE(){return sE}/**
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
 */function Ba(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ti(e)?"-0":e}}function Zd(n){return{integerValue:""+n}}function oE(n,e){return Nv(e)?Zd(e):Ba(n,e)}/**
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
 */class ki{constructor(){this._=void 0}}function aE(n,e,t){return n instanceof oi?(function(s,i){const a={fields:{[Ld]:{stringValue:Vd},[Md]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oa(i)&&(i=Ri(i)),i&&(a.fields[Od]=i),{mapValue:a}})(t,e):n instanceof zr?tf(n,e):n instanceof Gr?nf(n,e):(function(s,i){const a=ef(s,i),c=Iu(a)+Iu(s.Ee);return Qo(a)&&Qo(s.Ee)?Zd(c):Ba(s.serializer,c)})(n,e)}function cE(n,e,t){return n instanceof zr?tf(n,e):n instanceof Gr?nf(n,e):t}function ef(n,e){return n instanceof ai?(function(r){return Qo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class oi extends ki{}class zr extends ki{constructor(e){super(),this.elements=e}}function tf(n,e){const t=rf(e);for(const r of n.elements)t.some((s=>at(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Gr extends ki{constructor(e){super(),this.elements=e}}function nf(n,e){let t=rf(e);for(const r of n.elements)t=t.filter((s=>!at(s,r)));return{arrayValue:{values:t}}}class ai extends ki{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Iu(n){return ue(n.integerValue||n.doubleValue)}function rf(n){return Ma(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function lE(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof zr&&s instanceof zr||r instanceof Gr&&s instanceof Gr?Bn(r.elements,s.elements,at):r instanceof ai&&s instanceof ai?at(r.Ee,s.Ee):r instanceof oi&&s instanceof oi})(n.transform,e.transform)}class uE{constructor(e,t){this.version=e,this.transformResults=t}}class We{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new We}static exists(e){return new We(void 0,e)}static updateTime(e){return new We(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function js(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Di{}function sf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new $a(n.key,We.none()):new ns(n.key,n.data,We.none());{const t=n.data,r=Ne.empty();let s=new pe(ve.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new en(n.key,r,new Me(s.toArray()),We.none())}}function hE(n,e,t){n instanceof ns?(function(s,i,a){const c=s.value.clone(),u=bu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof en?(function(s,i,a){if(!js(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=bu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(of(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Vr(n,e,t,r){return n instanceof ns?(function(i,a,c,u){if(!js(i.precondition,a))return c;const d=i.value.clone(),f=Au(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof en?(function(i,a,c,u){if(!js(i.precondition,a))return c;const d=Au(i.fieldTransforms,u,a),f=a.data;return f.setAll(of(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(n,e,t,r):(function(i,a,c){return js(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function dE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ef(r.transform,s||null);i!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,i))}return t||null}function Tu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bn(r,s,((i,a)=>lE(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ns extends Di{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class en extends Di{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function of(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function bu(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,cE(a,c,t[s]))}return r}function Au(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,aE(i,a,e))}return r}class $a extends Di{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fE extends Di{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pE{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Vr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Vr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xd();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=sf(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(j.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&Bn(this.mutations,e.mutations,((t,r)=>Tu(t,r)))&&Bn(this.baseMutations,e.baseMutations,((t,r)=>Tu(t,r)))}}class ja{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return nE})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ja(e,t,r,s)}}/**
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
 */class mE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,Q;function _E(n){switch(n){case P.OK:return $(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function af(n){if(n===void 0)return Et("GRPC error has no .code"),P.UNKNOWN;switch(n){case he.OK:return P.OK;case he.CANCELLED:return P.CANCELLED;case he.UNKNOWN:return P.UNKNOWN;case he.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case he.INTERNAL:return P.INTERNAL;case he.UNAVAILABLE:return P.UNAVAILABLE;case he.UNAUTHENTICATED:return P.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case he.NOT_FOUND:return P.NOT_FOUND;case he.ALREADY_EXISTS:return P.ALREADY_EXISTS;case he.PERMISSION_DENIED:return P.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case he.ABORTED:return P.ABORTED;case he.OUT_OF_RANGE:return P.OUT_OF_RANGE;case he.UNIMPLEMENTED:return P.UNIMPLEMENTED;case he.DATA_LOSS:return P.DATA_LOSS;default:return $(39323,{code:n})}}(Q=he||(he={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const yE=new jt([4294967295,4294967295],0);function Su(n){const e=Cd().encode(n),t=new Ed;return t.update(e),new Uint8Array(t.digest())}function Ru(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jt([t,r],0),new jt([s,i],0)]}class qa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Sr(`Invalid padding: ${t}`);if(r<0)throw new Sr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Sr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=jt.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(jt.fromNumber(r)));return s.compare(yE)===1&&(s=new jt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Su(e),[r,s]=Ru(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new qa(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=Su(e),[r,s]=Ru(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ni{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,rs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ni(j.min(),s,new se(H),wt(),K())}}class rs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new rs(r,t,K(),K(),K())}}/**
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
 */class qs{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class cf{constructor(e,t){this.targetId=e,this.De=t}}class lf{constructor(e,t,r=we.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Cu{constructor(){this.ve=0,this.Ce=Pu(),this.Fe=we.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=K(),t=K(),r=K();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$(38017,{changeType:i})}})),new rs(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Pu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class vE{constructor(e){this.We=e,this.Ge=new Map,this.ze=wt(),this.je=ks(),this.Je=ks(),this.He=new se(H)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:$(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Yo(i))if(r===0){const a=new U(i.path);this.Xe(t,a,Ce.newNoDocument(a,j.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Gt(r).toUint8Array()}catch(u){if(u instanceof Nd)return Wt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new qa(a,s,i)}catch(u){return Wt(u instanceof Sr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Yo(c.target)){const u=new U(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Ce.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=K();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ni(e,t,this.He,this.ze,r);return this.ze=wt(),this.je=ks(),this.Je=ks(),this.He=new se(H),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Cu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new pe(H),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new pe(H),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Cu),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ks(){return new se(U.comparator)}function Pu(){return new se(U.comparator)}const EE={asc:"ASCENDING",desc:"DESCENDING"},wE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IE={and:"AND",or:"OR"};class TE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zo(n,e){return n.useProto3Json||Si(e)?e:{value:e}}function ci(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bE(n,e){return ci(n,e.toTimestamp())}function rt(n){return X(!!n,49232),j.fromTimestamp((function(t){const r=zt(t);return new ne(r.seconds,r.nanos)})(n))}function Wa(n,e){return ea(n,e).canonicalString()}function ea(n,e){const t=(function(s){return new ee(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function hf(n){const e=ee.fromString(n);return X(gf(e),10190,{key:e.toString()}),e}function ta(n,e){return Wa(n.databaseId,e.path)}function Co(n,e){const t=hf(e);if(t.get(1)!==n.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(ff(t))}function df(n,e){return Wa(n.databaseId,e)}function AE(n){const e=hf(n);return e.length===4?ee.emptyPath():ff(e)}function na(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ff(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function xu(n,e,t){return{name:ta(n,e),fields:t.value.mapValue.fields}}function SE(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:$(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,f){return d.useProto3Json?(X(f===void 0||typeof f=="string",58123),we.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),we.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const f=d.code===void 0?P.UNKNOWN:af(d.code);return new L(f,d.message||"")})(a);t=new lf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Co(n,r.document.name),i=rt(r.document.updateTime),a=r.document.createTime?rt(r.document.createTime):j.min(),c=new Ne({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new qs(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Co(n,r.document),i=r.readTime?rt(r.readTime):j.min(),a=Ce.newNoDocument(s,i),c=r.removedTargetIds||[];t=new qs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Co(n,r.document),i=r.removedTargetIds||[];t=new qs([],i,s,null)}else{if(!("filter"in e))return $(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new gE(s,i),c=r.targetId;t=new cf(c,a)}}return t}function RE(n,e){let t;if(e instanceof ns)t={update:xu(n,e.key,e.value)};else if(e instanceof $a)t={delete:ta(n,e.key)};else if(e instanceof en)t={update:xu(n,e.key,e.data),updateMask:OE(e.fieldMask)};else{if(!(e instanceof fE))return $(16599,{Rt:e.type});t={verify:ta(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof oi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof zr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Gr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ai)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw $(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:bE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)})(n,e.precondition)),t}function CE(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?rt(s.updateTime):rt(i);return a.isEqual(j.min())&&(a=rt(i)),new uE(a,s.transformResults||[])})(t,e)))):[]}function PE(n,e){return{documents:[df(n,e.path)]}}function xE(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=df(n,s);const i=(function(d){if(d.length!==0)return mf(Qe.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((f=>(function(g){return{field:xn(g.field),direction:NE(g.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Zo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:s}}function kE(n){let e=AE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(m){const g=pf(m);return g instanceof Qe&&qd(g)?g.getFilters():[g]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((g=>(function(C){return new Hr(kn(C.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(m){let g;return g=typeof m=="object"?m.value:m,Si(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(m){const g=!!m.before,A=m.values||[];return new si(A,g)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const g=!m.before,A=m.values||[];return new si(A,g)})(t.endAt)),Yv(e,s,a,i,c,"F",u,d)}function DE(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=kn(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kn(t.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kn(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=kn(t.unaryFilter.field);return de.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}})(n):n.fieldFilter!==void 0?(function(t){return de.create(kn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Qe.create(t.compositeFilter.filters.map((r=>pf(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}})(t.compositeFilter.op))})(n):$(30097,{filter:n})}function NE(n){return EE[n]}function VE(n){return wE[n]}function LE(n){return IE[n]}function xn(n){return{fieldPath:n.canonicalString()}}function kn(n){return ve.fromServerFormat(n.fieldPath)}function mf(n){return n instanceof de?(function(t){if(t.op==="=="){if(_u(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NAN"}};if(gu(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_u(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NAN"}};if(gu(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xn(t.field),op:VE(t.op),value:t.value}}})(n):n instanceof Qe?(function(t){const r=t.getFilters().map((s=>mf(s)));return r.length===1?r[0]:{compositeFilter:{op:LE(t.op),filters:r}}})(n):$(54877,{filter:n})}function OE(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function gf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ft{constructor(e,t,r,s,i=j.min(),a=j.min(),c=we.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ME{constructor(e){this.gt=e}}function FE(n){const e=kE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ii(e,e.limit,"L"):e}/**
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
 */class UE{constructor(){this.Dn=new BE}addToCollectionParentIndex(e,t){return this.Dn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(Ht.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class BE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new pe(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pe(ee.comparator)).toArray()}}/**
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
 */const ku={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_f=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(_f,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
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
 */class qn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new qn(0)}static ur(){return new qn(-1)}}/**
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
 */const Du="LruGarbageCollector",$E=1048576;function Nu([n,e],[t,r]){const s=H(n,t);return s===0?H(e,r):s}class jE{constructor(e){this.Tr=e,this.buffer=new pe(Nu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Nu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){O(Du,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Jn(t)?O(Du,"Ignoring IndexedDB error during garbage collection: ",t):await Qn(t)}await this.Rr(3e5)}))}}class WE{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Ai.ue);const r=new jE(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(ku)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ku):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(r=m,c=Date.now(),this.removeTargets(e,r,t)))).next((m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((m=>(d=Date.now(),Cn()<=G.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function HE(n,e){return new WE(n,e)}/**
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
 */class zE{constructor(){this.changes=new In((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class KE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Vr(r.mutation,s,Me.empty(),ne.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,K()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=K()){const s=cn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Ar();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=cn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,K())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=wt();const a=Nr(),c=(function(){return Nr()})();return t.forEach(((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof en)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Vr(f.mutation,d,f.mutation.getFieldMask(),ne.now())):a.set(d.key,Me.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,f)=>a.set(d,f))),t.forEach(((d,f)=>{var m;return c.set(d,new GE(f,(m=a.get(d))!==null&&m!==void 0?m:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=Nr();let s=new se(((a,c)=>a-c)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||Me.empty();f=c.applyToLocalView(d,f),r.set(u,f);const m=(s.get(c.batchId)||K()).add(u);s=s.insert(c.batchId,m)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,m=Xd();f.forEach((g=>{if(!i.has(g)){const A=sf(t.get(g),r.get(g));A!==null&&m.set(g,A),i=i.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return x.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):x.resolve(cn());let c=$r,u=i;return a.next((d=>x.forEach(d,((f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{u=u.insert(f,g)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,K()))).next((f=>({batchId:c,changes:Yd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((r=>{let s=Ar();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ar();return this.indexManager.getCollectionParents(e,i).next((c=>x.forEach(c,(u=>{const d=(function(m,g){return new Yn(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((f=>{f.forEach(((m,g)=>{a=a.insert(m,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ce.newInvalidDocument(f)))}));let c=Ar();return a.forEach(((u,d)=>{const f=i.get(u);f!==void 0&&Vr(f.mutation,d,Me.empty(),ne.now()),xi(t,d)&&(c=c.insert(u,d))})),c}))}}/**
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
 */class QE{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return x.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:rt(s.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:FE(s.bundledQuery),readTime:rt(s.readTime)}})(t)),x.resolve()}}/**
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
 */class JE{constructor(){this.overlays=new se(U.comparator),this.kr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=cn();return x.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),x.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const s=cn(),i=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=cn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=cn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,f)=>c.set(d,f))),!(c.size()>=s)););return x.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new mE(t,r));let i=this.kr.get(t);i===void 0&&(i=K(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class YE{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
 */class Ha{constructor(){this.qr=new pe(ge.Qr),this.$r=new pe(ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new ge(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new U(new ee([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new U(new ee([])),r=new ge(t,e),s=new ge(t,e+1);let i=K();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new ge(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return U.comparator(e.key,t.key)||H(e.Hr,t.Hr)}static Ur(e,t){return H(e.Hr,t.Hr)||U.comparator(e.key,t.key)}}/**
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
 */class XE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new pe(ge.Qr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new pE(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?La:this.er-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(H);return t.forEach((s=>{const i=new ge(s,0),a=new ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),x.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const a=new ge(new U(i),0);let c=new pe(H);return this.Yr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Hr)),!0)}),a),x.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){X(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return x.forEach(t.mutations,(s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new ge(t,0),s=this.Yr.firstAfterOrEqual(r);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ZE{constructor(e){this.ni=e,this.docs=(function(){return new se(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=wt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ce.newInvalidDocument(s))})),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=wt();const a=t.path,c=new U(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Pv(Cv(f),r)<=0||(s.has(f.key)||xi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$(9500)}ri(e,t){return x.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new ew(this)}getSize(e){return x.resolve(this.size)}}class ew extends zE{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),x.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class tw{constructor(e){this.persistence=e,this.ii=new In((t=>Fa(t)),Ua),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.si=0,this.oi=new Ha,this.targetCount=0,this._i=qn.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),x.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new qn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.hr(t),x.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),x.waitFor(i).next((()=>s))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.oi.containsKey(t))}}/**
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
 */class yf{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ai(0),this.ci=!1,this.ci=!0,this.li=new YE,this.referenceDelegate=e(this),this.hi=new tw(this),this.indexManager=new UE,this.remoteDocumentCache=(function(s){return new ZE(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new ME(t),this.Ti=new QE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new JE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new XE(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new nw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return x.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class nw extends kv{constructor(e){super(),this.currentSequenceNumber=e}}class za{constructor(e){this.persistence=e,this.Ai=new Ha,this.Ri=null}static Vi(e){return new za(e)}get mi(){if(this.Ri)return this.Ri;throw $(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.mi,(r=>{const s=U.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,j.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return x.or([()=>x.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class li{constructor(e,t){this.persistence=e,this.gi=new In((r=>Vv(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=HE(this,t)}static Vi(e,t){return new li(e,t)}Ii(){}di(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return x.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?x.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,j.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),x.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Bs(e.data.value)),t}Sr(e,t,r){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ga{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ga(e,t.fromCache,r,s)}}/**
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
 */class rw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Nm()?8:Dv(Pe())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new rw;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Cn()<=G.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Pn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Cn()<=G.DEBUG&&O("QueryEngine","Query:",Pn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Cn()<=G.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Pn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):x.resolve())}ps(e,t){if(wu(t))return x.resolve(null);let r=nt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ii(t,null,"F"),r=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=K(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.bs(t,c);return this.Ds(t,d,a,u.readTime)?this.ps(e,ii(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ys(e,t,r,s){return wu(t)||s.isEqual(j.min())?x.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?x.resolve(null):(Cn()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pn(t)),this.vs(e,a,t,Rv(s,$r)).next((c=>c)))}))}bs(e,t){let r=new pe(Qd(e));return t.forEach(((s,i)=>{xi(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Cn()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Pn(t)),this.gs.getDocumentsMatchingQuery(e,t,Ht.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Ka="LocalStore",iw=3e8;class ow{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new se(H),this.Ms=new In((i=>Fa(i)),Ua),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KE(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function aw(n,e,t,r){return new ow(n,e,t,r)}async function vf(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=K();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function cw(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,f){const m=d.batch,g=m.keys();let A=x.resolve();return g.forEach((C=>{A=A.next((()=>f.getEntry(u,C))).next((D=>{const k=d.docVersions.get(C);X(k!==null,48541),D.version.compareTo(k)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))}))})),A.next((()=>c.mutationQueue.removeMutationBatch(u,m)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=K();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Ef(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function lw(n,e){const t=W(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((f,m)=>{const g=s.get(m);if(!g)return;c.push(t.hi.removeMatchingKeys(i,f.removedDocuments,m).next((()=>t.hi.addMatchingKeys(i,f.addedDocuments,m))));let A=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(we.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(m,A),(function(D,k,V){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=iw?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(g,A,f)&&c.push(t.hi.updateTargetData(i,A))}));let u=wt(),d=K();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(uw(i,a,e.documentUpdates).next((f=>{u=f.Ls,d=f.ks}))),!r.isEqual(j.min())){const f=t.hi.getLastRemoteSnapshotVersion(i).next((m=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return x.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function uw(n,e,t){let r=K(),s=K();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=wt();return t.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):O(Ka,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Ls:a,ks:s}}))}function hw(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=La),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function dw(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,x.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new Ft(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function ra(n,e,t){const r=W(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Jn(a))throw a;O(Ka,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Vu(n,e,t){const r=W(n);let s=j.min(),i=K();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,f){const m=W(u),g=m.Ms.get(f);return g!==void 0?x.resolve(m.Fs.get(g)):m.hi.getTargetData(d,f)})(r,a,nt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:j.min(),t?i:K()))).next((c=>(fw(r,Zv(e),c),{documents:c,qs:i})))))}function fw(n,e,t){let r=n.xs.get(e)||j.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Lu{constructor(){this.activeTargetIds=iE()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pw{constructor(){this.Fo=new Lu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Lu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mw{xo(e){}shutdown(){}}/**
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
 */const Ou="ConnectivityMonitor";class Mu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){O(Ou,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){O(Ou,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ds=null;function sa(){return Ds===null?Ds=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ds++,"0x"+Ds.toString(16)}/**
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
 */const Po="RestConnection",gw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _w{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ni?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=sa(),c=this.Go(e,t.toUriEncodedString());O(Po,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:d}=new URL(c),f=Hn(d);return this.jo(e,c,u,r,f).then((m=>(O(Po,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw Wt(Po,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Kn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=gw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class yw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Se="WebChannelConnection";class vw extends _w{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=sa();return new Promise(((c,u)=>{const d=new wd;d.setWithCredentials(!0),d.listenOnce(Id.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Us.NO_ERROR:const m=d.getResponseJson();O(Se,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Us.TIMEOUT:O(Se,`RPC '${e}' ${a} timed out`),u(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case Us.HTTP_ERROR:const g=d.getStatus();if(O(Se,`RPC '${e}' ${a} failed with status:`,g,"response text:",d.getResponseText()),g>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const D=(function(V){const F=V.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(F)>=0?F:P.UNKNOWN})(C.status);u(new L(D,C.message))}else u(new L(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new L(P.UNAVAILABLE,"Connection failed."));break;default:$(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{O(Se,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);O(Se,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",f,r,15)}))}P_(e,t,r){const s=sa(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ad(),c=bd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");O(Se,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.T_(m);let g=!1,A=!1;const C=new yw({Ho:k=>{A?O(Se,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(O(Se,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),O(Se,`RPC '${e}' stream ${s} sending:`,k),m.send(k))},Yo:()=>m.close()}),D=(k,V,F)=>{k.listen(V,(q=>{try{F(q)}catch(J){setTimeout((()=>{throw J}),0)}}))};return D(m,br.EventType.OPEN,(()=>{A||(O(Se,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),D(m,br.EventType.CLOSE,(()=>{A||(A=!0,O(Se,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(m))})),D(m,br.EventType.ERROR,(k=>{A||(A=!0,Wt(Se,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),C.__(new L(P.UNAVAILABLE,"The operation could not be completed")))})),D(m,br.EventType.MESSAGE,(k=>{var V;if(!A){const F=k.data[0];X(!!F,16349);const q=F,J=(q==null?void 0:q.error)||((V=q[0])===null||V===void 0?void 0:V.error);if(J){O(Se,`RPC '${e}' stream ${s} received error:`,J);const Be=J.status;let le=(function(v){const E=he[v];if(E!==void 0)return af(E)})(Be),w=J.message;le===void 0&&(le=P.INTERNAL,w="Unknown error status: "+Be+" with message "+J.message),A=!0,C.__(new L(le,w)),m.close()}else O(Se,`RPC '${e}' stream ${s} received:`,F),C.a_(F)}})),D(c,Td.STAT_EVENT,(k=>{k.stat===zo.PROXY?O(Se,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===zo.NOPROXY&&O(Se,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function xo(){return typeof document<"u"?document:null}/**
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
 */function Vi(n){return new TE(n,!0)}/**
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
 */class wf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Fu="PersistentStream";class If{constructor(e,t,r,s,i,a,c,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new wf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Et(t.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new L(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return O(Fu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(O(Fu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ew extends If{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=SE(this.serializer,e),r=(function(i){if(!("targetChange"in i))return j.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?rt(a.readTime):j.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=na(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=Yo(u)?{documents:PE(i,u)}:{query:xE(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=uf(i,a.resumeToken);const d=Zo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(j.min())>0){c.readTime=ci(i,a.snapshotVersion.toTimestamp());const d=Zo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const r=DE(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=na(this.serializer),t.removeTarget=e,this.k_(t)}}class ww extends If{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=CE(e.writeResults,e.commitTime),r=rt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=na(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>RE(this.serializer,r)))};this.k_(t)}}/**
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
 */class Iw{}class Tw extends Iw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,ea(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(P.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,ea(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(P.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class bw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Et(t),this._a=!1):O("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const wn="RemoteStore";class Aw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Tn(this)&&(O(wn,"Restarting streams for network reachability change."),await(async function(u){const d=W(u);d.Ia.add(4),await ss(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Li(d)})(this))}))})),this.Aa=new bw(r,s)}}async function Li(n){if(Tn(n))for(const e of n.da)await e(!0)}async function ss(n){for(const e of n.da)await e(!1)}function Tf(n,e){const t=W(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Xa(t)?Ya(t):Xn(t).x_()&&Ja(t,e))}function Qa(n,e){const t=W(n),r=Xn(t);t.Ta.delete(e),r.x_()&&bf(t,e),t.Ta.size===0&&(r.x_()?r.B_():Tn(t)&&t.Aa.set("Unknown"))}function Ja(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xn(n).H_(e)}function bf(n,e){n.Ra.$e(e),Xn(n).Y_(e)}function Ya(n){n.Ra=new vE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Xn(n).start(),n.Aa.aa()}function Xa(n){return Tn(n)&&!Xn(n).M_()&&n.Ta.size>0}function Tn(n){return W(n).Ia.size===0}function Af(n){n.Ra=void 0}async function Sw(n){n.Aa.set("Online")}async function Rw(n){n.Ta.forEach(((e,t)=>{Ja(n,e)}))}async function Cw(n,e){Af(n),Xa(n)?(n.Aa.la(e),Ya(n)):n.Aa.set("Unknown")}async function Pw(n,e,t){if(n.Aa.set("Online"),e instanceof lf&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){O(wn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ui(n,r)}else if(e instanceof qs?n.Ra.Ye(e):e instanceof cf?n.Ra.it(e):n.Ra.et(e),!t.isEqual(j.min()))try{const r=await Ef(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ta.get(d);f&&i.Ta.set(d,f.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const f=i.Ta.get(u);if(!f)return;i.Ta.set(u,f.withResumeToken(we.EMPTY_BYTE_STRING,f.snapshotVersion)),bf(i,u);const m=new Ft(f.target,u,d,f.sequenceNumber);Ja(i,m)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){O(wn,"Failed to raise snapshot:",r),await ui(n,r)}}async function ui(n,e,t){if(!Jn(e))throw e;n.Ia.add(1),await ss(n),n.Aa.set("Offline"),t||(t=()=>Ef(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(wn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Li(n)}))}function Sf(n,e){return e().catch((t=>ui(n,t,e)))}async function Oi(n){const e=W(n),t=Qt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:La;for(;xw(e);)try{const s=await hw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,kw(e,s)}catch(s){await ui(e,s)}Rf(e)&&Cf(e)}function xw(n){return Tn(n)&&n.Pa.length<10}function kw(n,e){n.Pa.push(e);const t=Qt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Rf(n){return Tn(n)&&!Qt(n).M_()&&n.Pa.length>0}function Cf(n){Qt(n).start()}async function Dw(n){Qt(n).na()}async function Nw(n){const e=Qt(n);for(const t of n.Pa)e.X_(t.mutations)}async function Vw(n,e,t){const r=n.Pa.shift(),s=ja.from(r,e,t);await Sf(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Oi(n)}async function Lw(n,e){e&&Qt(n).Z_&&await(async function(r,s){if((function(a){return _E(a)&&a!==P.ABORTED})(s.code)){const i=r.Pa.shift();Qt(r).N_(),await Sf(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Oi(r)}})(n,e),Rf(n)&&Cf(n)}async function Uu(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),O(wn,"RemoteStore received new credentials");const r=Tn(t);t.Ia.add(3),await ss(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Li(t)}async function Ow(n,e){const t=W(n);e?(t.Ia.delete(2),await Li(t)):e||(t.Ia.add(2),await ss(t),t.Aa.set("Unknown"))}function Xn(n){return n.Va||(n.Va=(function(t,r,s){const i=W(t);return i.ia(),new Ew(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Sw.bind(null,n),e_:Rw.bind(null,n),n_:Cw.bind(null,n),J_:Pw.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Xa(n)?Ya(n):n.Aa.set("Unknown")):(await n.Va.stop(),Af(n))}))),n.Va}function Qt(n){return n.ma||(n.ma=(function(t,r,s){const i=W(t);return i.ia(),new ww(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Dw.bind(null,n),n_:Lw.bind(null,n),ea:Nw.bind(null,n),ta:Vw.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Oi(n)):(await n.ma.stop(),n.Pa.length>0&&(O(wn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Za{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Za(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ec(n,e){if(Et("AsyncQueue",`${e}: ${n}`),Jn(n))return new L(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Mn{static emptySet(e){return new Mn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=Ar(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Mn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Bu{constructor(){this.fa=new se(U.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):$(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Wn{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Wn(e,t,Mn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Mw{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Fw{constructor(){this.queries=$u(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=W(t),i=s.queries;s.queries=$u(),i.forEach(((a,c)=>{for(const u of c.wa)u.onError(r)}))})(this,new L(P.ABORTED,"Firestore shutting down"))}}function $u(){return new In((n=>Kd(n)),Pi)}async function tc(n,e){const t=W(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new Mw,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ec(a,`Initialization of query '${Pn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&rc(t)}async function nc(n,e){const t=W(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Uw(n,e){const t=W(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&rc(t)}function Bw(n,e,t){const r=W(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function rc(n){n.Da.forEach((e=>{e.next()}))}var ia,ju;(ju=ia||(ia={})).Fa="default",ju.Cache="cache";class sc{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ia.Cache}}/**
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
 */class Pf{constructor(e){this.key=e}}class xf{constructor(e){this.key=e}}class $w{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=K(),this.mutatedKeys=K(),this.Xa=Qd(e),this.eu=new Mn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Bu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,m)=>{const g=s.get(f),A=xi(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let k=!1;g&&A?g.data.isEqual(A.data)?C!==D&&(r.track({type:3,doc:A}),k=!0):this.iu(g,A)||(r.track({type:2,doc:A}),k=!0,(u&&this.Xa(A,u)>0||d&&this.Xa(A,d)<0)&&(c=!0)):!g&&A?(r.track({type:0,doc:A}),k=!0):g&&!A&&(r.track({type:1,doc:g}),k=!0,(u||d)&&(c=!0)),k&&(A?(a=a.add(A),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((f,m)=>(function(A,C){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{At:k})}};return D(A)-D(C)})(f.type,m.type)||this.Xa(f.doc,m.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new Wn(this.query,e.eu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Bu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=K(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new xf(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Pf(r))})),t}uu(e){this.Ha=e.qs,this.Za=K();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Wn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ic="SyncEngine";class jw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class qw{constructor(e){this.key=e,this.lu=!1}}class Ww{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new In((c=>Kd(c)),Pi),this.Tu=new Map,this.Iu=new Set,this.du=new se(U.comparator),this.Eu=new Map,this.Au=new Ha,this.Ru={},this.Vu=new Map,this.mu=qn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Hw(n,e,t=!0){const r=Of(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await kf(r,e,t,!0),s}async function zw(n,e){const t=Of(n);await kf(t,e,!0,!1)}async function kf(n,e,t,r){const s=await dw(n.localStore,nt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Gw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Tf(n.remoteStore,s),c}async function Gw(n,e,t,r,s){n.gu=(m,g,A)=>(async function(D,k,V,F){let q=k.view.nu(V);q.Ds&&(q=await Vu(D.localStore,k.query,!1).then((({documents:w})=>k.view.nu(w,q))));const J=F&&F.targetChanges.get(k.targetId),Be=F&&F.targetMismatches.get(k.targetId)!=null,le=k.view.applyChanges(q,D.isPrimaryClient,J,Be);return Wu(D,k.targetId,le._u),le.snapshot})(n,m,g,A);const i=await Vu(n.localStore,e,!0),a=new $w(e,i.qs),c=a.nu(i.documents),u=rs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Wu(n,t,d._u);const f=new jw(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function Kw(n,e,t){const r=W(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!Pi(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ra(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Qa(r.remoteStore,s.targetId),oa(r,s.targetId)})).catch(Qn)):(oa(r,s.targetId),await ra(r.localStore,s.targetId,!0))}async function Qw(n,e){const t=W(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Qa(t.remoteStore,r.targetId))}async function Jw(n,e,t){const r=rI(n);try{const s=await(function(a,c){const u=W(a),d=ne.now(),f=c.reduce(((A,C)=>A.add(C.key)),K());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let C=wt(),D=K();return u.Os.getEntries(A,f).next((k=>{C=k,C.forEach(((V,F)=>{F.isValidDocument()||(D=D.add(V))}))})).next((()=>u.localDocuments.getOverlayedDocuments(A,C))).next((k=>{m=k;const V=[];for(const F of c){const q=dE(F,m.get(F.key).overlayedDocument);q!=null&&V.push(new en(F.key,q,Bd(q.value.mapValue),We.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,V,c)})).next((k=>{g=k;const V=k.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(A,k.batchId,V)}))})).then((()=>({batchId:g.batchId,changes:Yd(m)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new se(H)),d=d.insert(c,u),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,t),await is(r,s.changes),await Oi(r.remoteStore)}catch(s){const i=ec(s,"Failed to persist write");t.reject(i)}}async function Df(n,e){const t=W(n);try{const r=await lw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?X(a.lu,14607):s.removedDocuments.size>0&&(X(a.lu,42227),a.lu=!1))})),await is(t,r,e)}catch(r){await Qn(r)}}function qu(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=W(a);u.onlineState=c;let d=!1;u.queries.forEach(((f,m)=>{for(const g of m.wa)g.va(c)&&(d=!0)})),d&&rc(u)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Yw(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new se(U.comparator);a=a.insert(i,Ce.newNoDocument(i,j.min()));const c=K().add(i),u=new Ni(j.min(),new Map,new se(H),a,c);await Df(r,u),r.du=r.du.remove(i),r.Eu.delete(e),oc(r)}else await ra(r.localStore,e,!1).then((()=>oa(r,e,t))).catch(Qn)}async function Xw(n,e){const t=W(n),r=e.batch.batchId;try{const s=await cw(t.localStore,e);Vf(t,r,null),Nf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await is(t,s)}catch(s){await Qn(s)}}async function Zw(n,e,t){const r=W(n);try{const s=await(function(a,c){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next((m=>(X(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>u.localDocuments.getDocuments(d,f)))}))})(r.localStore,e);Vf(r,e,t),Nf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await is(r,s)}catch(s){await Qn(s)}}function Nf(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Vf(n,e,t){const r=W(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function oa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Lf(n,r)}))}function Lf(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Qa(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),oc(n))}function Wu(n,e,t){for(const r of t)r instanceof Pf?(n.Au.addReference(r.key,e),eI(n,r)):r instanceof xf?(O(ic,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Lf(n,r.key)):$(19791,{yu:r})}function eI(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(O(ic,"New document in limbo: "+t),n.Iu.add(r),oc(n))}function oc(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new U(ee.fromString(e)),r=n.mu.next();n.Eu.set(r,new qw(t)),n.du=n.du.insert(t,r),Tf(n.remoteStore,new Ft(nt(Ci(t.path)),r,"TargetPurposeLimboResolution",Ai.ue))}}async function is(n,e,t){const r=W(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,u)=>{a.push(r.gu(u,e,t).then((d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Ga.Es(u.targetId,d);i.push(m)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(u,d){const f=W(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>x.forEach(d,(g=>x.forEach(g.Is,(A=>f.persistence.referenceDelegate.addReference(m,g.targetId,A))).next((()=>x.forEach(g.ds,(A=>f.persistence.referenceDelegate.removeReference(m,g.targetId,A)))))))))}catch(m){if(!Jn(m))throw m;O(Ka,"Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const A=f.Fs.get(g),C=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,D)}}})(r.localStore,i))}async function tI(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){O(ic,"User change. New user:",e.toKey());const r=await vf(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((u=>{u.reject(new L(P.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await is(t,r.Bs)}}function nI(n,e){const t=W(n),r=t.Eu.get(e);if(r&&r.lu)return K().add(r.key);{let s=K();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Of(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Df.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yw.bind(null,e),e.hu.J_=Uw.bind(null,e.eventManager),e.hu.pu=Bw.bind(null,e.eventManager),e}function rI(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Zw.bind(null,e),e}class hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vi(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return aw(this.persistence,new sw,e.initialUser,this.serializer)}Du(e){return new yf(za.Vi,this.serializer)}bu(e){return new pw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hi.provider={build:()=>new hi};class sI extends hi{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){X(this.persistence.referenceDelegate instanceof li,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qE(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new yf((r=>li.Vi(r,t)),this.serializer)}}class aa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tI.bind(null,this.syncEngine),await Ow(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Fw})()}createDatastore(e){const t=Vi(e.databaseInfo.databaseId),r=(function(i){return new vw(i)})(e.databaseInfo);return(function(i,a,c,u){return new Tw(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new Aw(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>qu(this.syncEngine,t,0)),(function(){return Mu.C()?new Mu:new mw})())}createSyncEngine(e,t){return(function(s,i,a,c,u,d,f){const m=new Ww(s,i,a,c,u,d);return f&&(m.fu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=W(s);O(wn,"RemoteStore shutting down."),i.Ia.add(5),await ss(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}aa.provider={build:()=>new aa};/**
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
 */class ac{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Et("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Jt="FirestoreClient";class iI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Re.UNAUTHENTICATED,this.clientId=Va.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{O(Jt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(O(Jt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ec(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ko(n,e){n.asyncQueue.verifyOperationInProgress(),O(Jt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await vf(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Wt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{O("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Wt("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Hu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await oI(n);O(Jt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Uu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Uu(e.remoteStore,s))),n._onlineComponents=e}async function oI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(Jt,"Using user provided OfflineComponentProvider");try{await ko(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Wt("Error using user provided cache. Falling back to memory cache: "+t),await ko(n,new hi)}}else O(Jt,"Using default OfflineComponentProvider"),await ko(n,new sI(void 0));return n._offlineComponents}async function Mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(Jt,"Using user provided OnlineComponentProvider"),await Hu(n,n._uninitializedComponentsProvider._online)):(O(Jt,"Using default OnlineComponentProvider"),await Hu(n,new aa))),n._onlineComponents}function aI(n){return Mf(n).then((e=>e.syncEngine))}async function di(n){const e=await Mf(n),t=e.eventManager;return t.onListen=Hw.bind(null,e.syncEngine),t.onUnlisten=Kw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Qw.bind(null,e.syncEngine),t}function cI(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const f=new ac({next:g=>{f.Ou(),a.enqueueAndForget((()=>nc(i,m)));const A=g.docs.has(c);!A&&g.fromCache?d.reject(new L(P.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?d.reject(new L(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new sc(Ci(c.path),f,{includeMetadataChanges:!0,ka:!0});return tc(i,m)})(await di(n),n.asyncQueue,e,t,r))),r.promise}function lI(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const f=new ac({next:g=>{f.Ou(),a.enqueueAndForget((()=>nc(i,m))),g.fromCache&&u.source==="server"?d.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new sc(c,f,{includeMetadataChanges:!0,ka:!0});return tc(i,m)})(await di(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Ff(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const zu=new Map;/**
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
 */const Uf="firestore.googleapis.com",Gu=!0;class Ku{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uf,this.ssl=Gu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Gu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_f;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$E)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ff((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new _v;switch(r.type){case"firstParty":return new wv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=zu.get(t);r&&(O("ComponentProvider","Removing Datastore"),zu.delete(t),r.terminate())})(this),Promise.resolve()}}function uI(n,e,t,r={}){var s;n=Ve(n,Mi);const i=Hn(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(Dh(`https://${u}`),Nh("Firestore",!0)),a.host!==Uf&&a.host!==u&&Wt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:r});if(!gn(d,c)&&(n._setSettings(d),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Re.MOCK_USER;else{f=bm(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Re(g)}n._authCredentials=new yv(new Rd(f,m))}}/**
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
 */class St{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new St(this.firestore,e,this._query)}}class ce{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}toJSON(){return{type:ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ts(t,ce._jsonSchema))return new ce(e,r||null,new U(ee.fromString(t.referencePath)))}}ce._jsonSchemaVersion="firestore/documentReference/1.0",ce._jsonSchema={type:fe("string",ce._jsonSchemaVersion),referencePath:fe("string")};class qt extends St{constructor(e,t,r){super(e,t,Ci(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new U(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function st(n,e,...t){if(n=me(n),Pd("collection","path",e),n instanceof Mi){const r=ee.fromString(e,...t);return au(r),new qt(n,null,r)}{if(!(n instanceof ce||n instanceof qt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return au(r),new qt(n.firestore,null,r)}}function Fe(n,e,...t){if(n=me(n),arguments.length===1&&(e=Va.newId()),Pd("doc","path",e),n instanceof Mi){const r=ee.fromString(e,...t);return ou(r),new ce(n,null,new U(r))}{if(!(n instanceof ce||n instanceof qt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return ou(r),new ce(n.firestore,n instanceof qt?n.converter:null,new U(r))}}/**
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
 */const Qu="AsyncQueue";class Ju{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new wf(this,"async_queue_retry"),this.oc=()=>{const r=xo();r&&O(Qu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=xo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=xo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new gt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Jn(e))throw e;O(Qu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Et("INTERNAL UNHANDLED ERROR: ",Yu(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Za.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&$(47125,{hc:Yu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Yu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Xu(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class It extends Mi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ju,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ju(e),this._firestoreClient=void 0,await e}}}function hI(n,e){const t=typeof n=="object"?n:Mh(),r=typeof n=="string"?n:ni,s=Ta(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Im("firestore");i&&uI(s,...i)}return s}function Fi(n){if(n._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||dI(n),n._firestoreClient}function dI(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,u,d,f){return new Mv(c,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ff(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new iI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qe(we.fromBase64String(e))}catch(t){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qe(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ts(e,qe._jsonSchema))return qe.fromBase64String(e.bytes)}}qe._jsonSchemaVersion="firestore/bytes/1.0",qe._jsonSchema={type:fe("string",qe._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class Ui{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cc{constructor(e){this._methodName=e}}/**
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
 */class it{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:it._jsonSchemaVersion}}static fromJSON(e){if(ts(e,it._jsonSchema))return new it(e.latitude,e.longitude)}}it._jsonSchemaVersion="firestore/geoPoint/1.0",it._jsonSchema={type:fe("string",it._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class ot{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ot._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ts(e,ot._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ot(e.vectorValues);throw new L(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ot._jsonSchemaVersion="firestore/vectorValue/1.0",ot._jsonSchema={type:fe("string",ot._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const fI=/^__.*__$/;class pI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new en(e,this.data,this.fieldMask,t,this.fieldTransforms):new ns(e,this.data,t,this.fieldTransforms)}}class Bf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new en(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $f(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{Ec:n})}}class lc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new lc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return fi(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if($f(this.Ec)&&fI.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class mI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Vi(e)}Dc(e,t,r,s=!1){return new lc({Ec:e,methodName:t,bc:r,path:ve.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bi(n){const e=n._freezeSettings(),t=Vi(n._databaseId);return new mI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function jf(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);uc("Data must be an object, but it was:",a,r);const c=qf(r,a);let u,d;if(i.merge)u=new Me(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=ca(e,m,t);if(!a.contains(g))throw new L(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Hf(f,g)||f.push(g)}u=new Me(f),d=a.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,d=a.fieldTransforms;return new pI(new Ne(c),u,d)}class $i extends cc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $i}}function gI(n,e,t,r){const s=n.Dc(1,e,t);uc("Data must be an object, but it was:",s,r);const i=[],a=Ne.empty();Zt(r,((u,d)=>{const f=hc(e,u,t);d=me(d);const m=s.gc(f);if(d instanceof $i)i.push(f);else{const g=os(d,m);g!=null&&(i.push(f),a.set(f,g))}}));const c=new Me(i);return new Bf(a,c,s.fieldTransforms)}function _I(n,e,t,r,s,i){const a=n.Dc(1,e,t),c=[ca(e,r,t)],u=[s];if(i.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(ca(e,i[g])),u.push(i[g+1]);const d=[],f=Ne.empty();for(let g=c.length-1;g>=0;--g)if(!Hf(d,c[g])){const A=c[g];let C=u[g];C=me(C);const D=a.gc(A);if(C instanceof $i)d.push(A);else{const k=os(C,D);k!=null&&(d.push(A),f.set(A,k))}}const m=new Me(d);return new Bf(f,m,a.fieldTransforms)}function yI(n,e,t,r=!1){return os(t,n.Dc(r?4:3,e))}function os(n,e){if(Wf(n=me(n)))return uc("Unsupported field value:",e,n),qf(n,e);if(n instanceof cc)return(function(r,s){if(!$f(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=os(c,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ne.fromDate(r);return{timestampValue:ci(s.serializer,i)}}if(r instanceof ne){const i=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ci(s.serializer,i)}}if(r instanceof it)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qe)return{bytesValue:uf(s.serializer,r._byteString)};if(r instanceof ce){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ot)return(function(a,c){return{mapValue:{fields:{[Fd]:{stringValue:Ud},[ri]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Ba(c.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${bi(r)}`)})(n,e)}function qf(n,e){const t={};return Dd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zt(n,((r,s)=>{const i=os(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Wf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof it||n instanceof qe||n instanceof ce||n instanceof cc||n instanceof ot)}function uc(n,e,t){if(!Wf(t)||!xd(t)){const r=bi(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function ca(n,e,t){if((e=me(e))instanceof Ui)return e._internalPath;if(typeof e=="string")return hc(n,e);throw fi("Field path arguments must be of type string or ",n,!1,void 0,t)}const vI=new RegExp("[~\\*/\\[\\]]");function hc(n,e,t){if(e.search(vI)>=0)throw fi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ui(...e.split("."))._internalPath}catch{throw fi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new L(P.INVALID_ARGUMENT,c+n+u)}function Hf(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class zf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ji("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class EI extends zf{data(){return super.data()}}function ji(n,e){return typeof e=="string"?hc(n,e):e instanceof Ui?e._internalPath:e._delegate._internalPath}/**
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
 */function Gf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dc{}class fc extends dc{}function Kr(n,e,...t){let r=[];e instanceof dc&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof pc)).length,c=i.filter((u=>u instanceof qi)).length;if(a>1||a>0&&c>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class qi extends fc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new qi(e,t,r)}_apply(e){const t=this._parse(e);return Qf(e._query,t),new St(e.firestore,e.converter,Xo(e._query,t))}_parse(e){const t=Bi(e.firestore);return(function(i,a,c,u,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){th(m,f);const C=[];for(const D of m)C.push(eh(u,i,D));g={arrayValue:{values:C}}}else g=eh(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||th(m,f),g=yI(c,a,m,f==="in"||f==="not-in");return de.create(d,f,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Kf(n,e,t){const r=e,s=ji("where",n);return qi._create(s,r,t)}class pc extends dc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Qf(a,u),a=Xo(a,u)})(e._query,t),new St(e.firestore,e.converter,Xo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mc extends fc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new mc(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hr(i,a)})(e._query,this._field,this._direction);return new St(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Yn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function la(n,e="asc"){const t=e,r=ji("orderBy",n);return mc._create(r,t)}class gc extends fc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new gc(e,t,r)}_apply(e){return new St(e.firestore,e.converter,ii(e._query,this._limit,this._limitType))}}function Zu(n){return gc._create("limit",n,"F")}function eh(n,e,t){if(typeof(t=me(t))=="string"){if(t==="")throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gd(e)&&t.indexOf("/")!==-1)throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!U.isDocumentKey(r))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mu(n,new U(r))}if(t instanceof ce)return mu(n,t._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bi(t)}.`)}function th(n,e){if(!Array.isArray(n)||n.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qf(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class wI{convertValue(e,t="none"){switch(Kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zt(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ri].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>ue(a.doubleValue)));return new ot(i)}convertGeoPoint(e){return new it(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ri(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(jr(e));default:return null}}convertTimestamp(e){const t=zt(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);X(gf(r),9688,{name:e});const s=new qr(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||Et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Jf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fn extends zf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ji("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=fn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}fn._jsonSchemaVersion="firestore/documentSnapshot/1.0",fn._jsonSchema={type:fe("string",fn._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Ws extends fn{data(e={}){return super.data(e)}}class pn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Rr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ws(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new Ws(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Rr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Ws(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Rr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:II(c.type),doc:u,oldIndex:d,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=pn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Va.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function II(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}/**
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
 */function Yf(n){n=Ve(n,ce);const e=Ve(n.firestore,It);return cI(Fi(e),n._key).then((t=>Xf(e,n,t)))}pn._jsonSchemaVersion="firestore/querySnapshot/1.0",pn._jsonSchema={type:fe("string",pn._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};class _c extends wI{constructor(e){super(),this.firestore=e}convertBytes(e){return new qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,t)}}function ua(n){n=Ve(n,St);const e=Ve(n.firestore,It),t=Fi(e),r=new _c(e);return Gf(n._query),lI(t,n._query).then((s=>new pn(e,r,n,s)))}function Rt(n,e,t){n=Ve(n,ce);const r=Ve(n.firestore,It),s=Jf(n.converter,e,t);return zi(r,[jf(Bi(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,We.none())])}function Zn(n,e,t,...r){n=Ve(n,ce);const s=Ve(n.firestore,It),i=Bi(s);let a;return a=typeof(e=me(e))=="string"||e instanceof Ui?_I(i,"updateDoc",n._key,e,t,r):gI(i,"updateDoc",n._key,e),zi(s,[a.toMutation(n._key,We.exists(!0))])}function Wi(n){return zi(Ve(n.firestore,It),[new $a(n._key,We.none())])}function Hi(n,e){const t=Ve(n.firestore,It),r=Fe(n),s=Jf(n.converter,e);return zi(t,[jf(Bi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,We.exists(!1))]).then((()=>r))}function Do(n,...e){var t,r,s;n=me(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Xu(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Xu(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,d,f;if(n instanceof ce)d=Ve(n.firestore,It),f=Ci(n._key.path),u={next:m=>{e[a]&&e[a](Xf(d,n,m))},error:e[a+1],complete:e[a+2]};else{const m=Ve(n,St);d=Ve(m.firestore,It),f=m._query;const g=new _c(d);u={next:A=>{e[a]&&e[a](new pn(d,g,m,A))},error:e[a+1],complete:e[a+2]},Gf(n._query)}return(function(g,A,C,D){const k=new ac(D),V=new sc(A,k,C);return g.asyncQueue.enqueueAndForget((async()=>tc(await di(g),V))),()=>{k.Ou(),g.asyncQueue.enqueueAndForget((async()=>nc(await di(g),V)))}})(Fi(d),f,c,u)}function zi(n,e){return(function(r,s){const i=new gt;return r.asyncQueue.enqueueAndForget((async()=>Jw(await aI(r),s,i))),i.promise})(Fi(n),e)}function Xf(n,e,t){const r=t.docs.get(e._key),s=new _c(n);return new fn(n,s,e._key,r,new Rr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Kn=s})(zn),Un(new _n("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new It(new vv(r.getProvider("auth-internal")),new Iv(a,r.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(d.options.projectId,f)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),$t(tu,nu,e),$t(tu,nu,"esm2017")})();const TI={apiKey:"AIzaSyCHuTKvBK0R6poomtYMVtbqiamKbsoHX6o",authDomain:"md-reptrack.firebaseapp.com",projectId:"md-reptrack",storageBucket:"md-reptrack.firebasestorage.app",messagingSenderId:"196897655189",appId:"1:196897655189:web:22859f09e3ce8db015ce9c",measurementId:"G-W271BRRRDE"},Zf=Oh(TI),wr=fv(Zf),Ee=hI(Zf),er="ul-cardio-v1",Ze=10,ha=3,bI=8,AI=5,SI=12,ep={barbell:{inc:.5,step:.5},machine:{inc:.5,step:.5},dumbbell:{inc:.5,step:.5},heavy:{inc:5,step:2.5},bw:{inc:0,step:0}},ln=10,pi=.5;function RI(n){const e=Number(n);if(e>=ln){const t=Math.floor((e-ln)/pi+1e-9);return ln+t*pi}return Math.max(1,Math.floor(e+1e-9))}function CI(n,e){const t=Number(n);return e>0?t<ln-1?t+1:t<ln?ln:t+pi:t<=ln?Math.max(0,t-1):t-pi}function PI(n){return Math.round(Number(n)*2)/2}function tp(n,e,t=1){if(n.equip==="dumbbell")return CI(e,t);const r=ep[n.equip]||{},s=t>0?r.inc??r.step:r.step;let i=Math.max(0,Number(e)+t*(s||0));return(n.equip==="machine"||n.equip==="barbell")&&(i=PI(i)),i}const oe=(n,e,t,r={})=>({name:n,start:e,equip:t,...r}),un=(n,e)=>({name:n,minutes:e,cardio:!0}),hn="Incline Walk",np="Intervals (Bike/Rower)",xI=[hn,np],rp={upperA:{label:"Upper A",items:[oe("Bench Press",35,"barbell"),oe("Chest-Supported Row",35,"machine"),oe("Overhead Press",17.5,"barbell"),oe("Lat Pulldown",35,"machine"),oe("Dumbbell Curl",10,"dumbbell",{each:!0,repsFirst:!0,superset:"Tricep Pushdown"}),oe("Tricep Pushdown",15,"machine",{repsFirst:!0,superset:"Dumbbell Curl"}),un(hn,30)]},lowerA:{label:"Lower A",items:[oe("Hack Squat",50,"heavy"),oe("Dumbbell Romanian Deadlift",16,"dumbbell",{each:!0,repsFirst:!0}),oe("Leg Curl",25,"machine"),oe("Dumbbell Reverse Lunge",8,"dumbbell",{each:!0,repsFirst:!0,note:"each leg"}),oe("Standing Calf Raise",40,"machine"),un(hn,30)]},upperB:{label:"Upper B",items:[oe("Incline Dumbbell Press",14,"dumbbell",{each:!0,repsFirst:!0}),oe("Seated Cable Row",30,"machine"),oe("Seated Dumbbell Shoulder Press",12,"dumbbell",{each:!0,repsFirst:!0}),oe("Close-Grip Lat Pulldown",35,"machine"),oe("Lateral Raise",6,"dumbbell",{each:!0,repsFirst:!0,superset:"Face Pull"}),oe("Face Pull",14,"machine",{repsFirst:!0,superset:"Lateral Raise"}),un(hn,30)]},lowerB:{label:"Lower B",items:[oe("Barbell Hip Thrust",50,"barbell"),oe("Leg Press",60,"heavy"),oe("Leg Extension",30,"machine"),oe("Leg Curl",25,"machine"),oe("Standing Calf Raise",40,"machine"),un(hn,30)]},cardio:{label:"Cardio",items:[]},rest:{label:"Rest",items:[]}},sp=["rest","upperA","lowerA","cardio","upperB","lowerB","cardio"];function mi(n){const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)}function kI(n){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function ip(n){return sp[mi(n).getDay()]}function DI(n){const e=mi(n),t=e.getDay();return e.setDate(e.getDate()+(t===0?1:1-t)),kI(e)}function NI(n,e){const t=Math.round((mi(e)-mi(n))/864e5);return Math.max(1,Math.floor(t/7)+1)}function VI(n,e){const t=rp[n];if(n==="cardio"){const i=e>=4?[un(np,20),un(hn,25)]:[un(hn,45)];return{key:n,label:t.label,items:i,note:e>=4?"Intervals: 1 min hard, 2 min easy":""}}let r=0;const s=t.items.map((i,a)=>{if(i.cardio)return i;r++;const c=e>bI&&r<=2?ha+1:ha,u=!!i.superset&&t.items.findIndex(d=>d.name===i.superset)>a;return{...i,sets:c,supersetFirst:u}});return{key:n,label:t.label,items:s,note:""}}function LI(n,e){return e?Math.floor(n/e+1e-9)*e:n}function op(n,e,t,r){const s={};return n.forEach(i=>{if(i.program!==er||i.exercise!==e)return;const a=r(i);!a||a>=t||(s[a]||(s[a]={dateId:a,weight:i.weight,reps:[],targetSets:i.targetSets||ha,targetReps:i.targetReps||Ze}),s[a].reps.push(Number(i.reps)||0))}),Object.values(s).sort((i,a)=>i.dateId<a.dateId?1:-1)}function OI(n,e,t,r,s=3){const i=op(n,e,t,r);if(!i.length)return null;const a=i[0].dateId,c=n.filter(u=>u.program===er&&u.exercise===e&&r(u)===a).sort((u,d)=>(u.setIndex??0)-(d.setIndex??0)).slice(0,s);return c.length?{dateId:a,weight:c[0].weight,reps:c.map(u=>Number(u.reps)||0)}:null}function nh(n){const e=n.targetReps||Ze;return n.reps.length>=n.targetSets&&n.reps.every(t=>t>=e)}function MI(n,e){var u;if(n.equip==="bw")return{weight:"BW",reps:Ze,reason:"bw"};if(e.length===0)return{weight:n.start,reps:Ze,reason:"start"};const t=e[0],r=Number(t.weight),s=n.repsFirst&&t.targetReps||Ze,i=((u=ep[n.equip])==null?void 0:u.step)||0;if(nh(t))return n.repsFirst&&s<SI?{weight:r,reps:s+1,reason:"reps"}:{weight:tp(n,r,1),reps:Ze,reason:"up"};const a=e.slice(0,3);return a.length===3&&a.every(d=>Number(d.weight)===r&&(d.targetReps||Ze)===t.targetReps&&!nh(d))?{weight:n.equip==="dumbbell"?RI(r*.9):LI(r*.9,i),reps:Ze,reason:"deload"}:{weight:r,reps:s,reason:"same"}}function FI(n,e,t){return tp(n,e,t)}function UI(n,e=Ze){return n==null?e:n<=AI?null:Math.min(n,e)-1}const Cr=["Bench Press","Omni Row","Incline DB Press","Lateral Raise","Tricep Pushdown","Hack Squat","Romanian Deadlift","Bulgarian Split Squat","Standing Calf Raise","Overhead Press","Heavy Pulldowns","Face Pull","Hammer Curls","EZ Bar Curls","Trap Bar Deadlift","Leg Press","Leg Extension","Leg Curl"],mn=["Bike/row conditioning","Running",...xI],BI={1:["Planks","Super man (YWT)","Child pose/Back Stretch","Upward/Downward","Bridge","V1","Lungeattack1","Sky1","lunge knee 1","lunge knee deeper hold 1","hold foot 1","V2","Lungeattack2","Sky2","lunge knee 2","lunge knee deeper hold 2","hold foot 2","Pigeon 52"],2:["PR Static Hold Left Right","PR Dynamic Left Right","PR Dynamic knee/foot up 10 reps each","PR Dynamic push up using feet","PR Dynamic Stretch 2 each","Warriors 1 (30s each L/R)","Warriors 2 (30s each L/R)","Warriors 3 (30s each L/R)","Warriors 4","Warriors 5","Labada yoga squat + hands up","Necks/Arms","Standing back stretch","Wall sits","Monkey","Bear","Crab","Frog"]},rh=["#00E676","#3B82F6","#F59E0B","#EF4444","#A855F7","#EC4899","#06B6D4","#F97316","#8B5CF6","#14B8A6","#F43F5E","#10B981","#6366F1","#84CC16","#D946EF"],R={currentUser:null,unsubscribes:[],chartInstance:null,chartModule:null,availableExercises:[...Cr],workoutsCache:[],bodyweightCache:[],sessionsCache:{},todayBWDocId:null,allWorkoutsCache:[],chartDefaultApplied:!1},ap={"lateral raises":"Lateral Raise","leg extensions":"Leg Extension","tricep pushdowns":"Tricep Pushdown","standing calf raises":"Standing Calf Raise"},$I={...ap};function Ue(n){if(n==null||n==="")return n??"";const e=String(n).trim();return $I[e.toLowerCase()]??e}function Je(n){return Ue(n).toLowerCase()}function Lr(n,e){const t=Je(e);return n.filter(r=>r.exercise&&Je(r.exercise)===t)}function cp(n){const e=new Map;for(const t of n){if(!t.exercise)continue;const r=Ue(t.exercise),s=Je(r);e.has(s)||e.set(s,r)}return[...e.values()].sort()}function lp(n,e=[]){const t={};let r=0;for(const a of n){if(!a.exercise)continue;const c=Ue(a.exercise);if(c===a.exercise)continue;r+=1;const u=`${a.exercise} → ${c}`;t[u]=(t[u]||0)+1}let s=0;const i={};for(const a of e){const c=Ue(a);if(c===a)continue;s+=1;const u=`${a} → ${c}`;i[u]=(i[u]||0)+1}return{workoutUpdates:r,listUpdates:s,workoutRenames:t,listRenames:i,needsUpdate:r>0||s>0}}function up(n){const e=[],t=new Set;for(const r of n){const s=Ue(r),i=Je(s);t.has(i)||(t.add(i),e.push(s))}return e}function ae(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ye(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function sh(n,e=Date.now()){return Math.max(0,Math.ceil((n-e)/1e3))}function da(n){const e=[],t={};return n.forEach(r=>{if(r.type!=="workout"||!r.program||r.setIndex==null||!r.timestamp){e.push(r);return}const s=Ue(r.exercise),i=`${Ye(r.timestamp.toDate())}|${s}`;t[i]||(t[i]={type:"set-group",key:i,exercise:s,sets:[]},e.push(t[i])),t[i].sets.push(r)}),Object.values(t).forEach(r=>r.sets.sort((s,i)=>s.setIndex-i.setIndex)),e}function ih(n,e,t="Saving..."){n&&(e?(n.dataset.originalHtml||(n.dataset.originalHtml=n.innerHTML),n.disabled=!0,n.innerHTML=`<span class="inline-block w-4 h-4 border-2 border-bg/20 border-t-bg rounded-full animate-spin mr-2 align-middle"></span>${t}`):(n.disabled=!1,n.dataset.originalHtml&&(n.innerHTML=n.dataset.originalHtml,delete n.dataset.originalHtml)))}function re(n,e=!1){const t=document.createElement("div");t.className=`fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full text-sm font-bold shadow-2xl z-[100] animate-fade-in ${e?"bg-red-500 text-white":"bg-accent text-on-accent"}`,t.textContent=n,document.body.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transition="opacity 0.3s ease",setTimeout(()=>t.remove(),300)},3e3)}typeof window<"u"&&(window.showToast=re);const oh=document.getElementById("auth-screen"),Ns=document.getElementById("auth-email"),No=document.getElementById("auth-password"),fa=document.getElementById("login-btn"),pa=document.getElementById("register-btn"),dn=document.getElementById("forgot-password-btn"),ah=document.getElementById("auth-loading"),gi=document.getElementById("auth-error");function on(n){gi.textContent=n,gi.classList.remove("hidden")}function Vo(n,e){const t=(n==null?void 0:n.code)||"";return t.includes("referer")||t.includes("blocked")?"This site URL is not allowed for Firebase. Add it to your API key HTTP referrers in Google Cloud Console.":t==="auth/network-request-failed"?"Network error reaching Firebase. Check connection and API key restrictions.":t==="auth/invalid-email"?"Enter a valid email address.":t==="auth/user-not-found"||t==="auth/wrong-password"||t==="auth/invalid-credential"?"Invalid email or password.":t==="auth/email-already-in-use"?"An account with this email already exists.":t==="auth/weak-password"?"Password must be at least 6 characters.":t==="auth/too-many-requests"?"Too many attempts. Try again later.":e}function Nt(n){n?(ah.classList.remove("hidden"),fa.disabled=!0,pa.disabled=!0,dn&&(dn.disabled=!0),gi.classList.add("hidden")):(ah.classList.add("hidden"),fa.disabled=!1,pa.disabled=!1,dn&&(dn.disabled=!1))}function jI(n){fa.addEventListener("click",async()=>{const e=Ns.value.trim(),t=No.value;if(!e||!t){on("Enter email and password");return}Nt(!0);try{await X_(wr,e,t)}catch(r){console.error("Login failed:",r),on(Vo(r,"Invalid credentials.")),Nt(!1)}}),pa.addEventListener("click",async()=>{const e=Ns.value.trim(),t=No.value;if(!e||!t){on("Enter email and password");return}if(t.length<6){on("Min 6 characters");return}Nt(!0);try{await Y_(wr,e,t)}catch(r){console.error("Registration failed:",r),on(Vo(r,"Registration failed.")),Nt(!1)}}),dn==null||dn.addEventListener("click",async()=>{const e=Ns.value.trim();if(!e){on("Enter your email above, then tap Forgot password");return}Nt(!0);try{await J_(wr,e),re("Password reset email sent"),gi.classList.add("hidden")}catch(t){on(Vo(t,"Could not send reset email."))}finally{Nt(!1)}}),ty(wr,e=>{if(e){R.currentUser=e,oh.classList.add("opacity-0","pointer-events-none"),document.getElementById("user-email").textContent=e.email.split("@")[0],document.getElementById("user-info").classList.remove("hidden"),Ns.value="",No.value="",Nt(!1);const t=new Date,r=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;document.getElementById("input-date").value=r,n(e)}else R.currentUser=null,R.chartDefaultApplied=!1,oh.classList.remove("opacity-0","pointer-events-none"),document.getElementById("user-info").classList.add("hidden"),Nt(!1),R.unsubscribes.forEach(t=>t()),R.unsubscribes=[]}),document.getElementById("logout-btn").addEventListener("click",()=>ny(wr))}function hp({title:n="Confirm",message:e,confirmLabel:t="Confirm",danger:r=!0}={}){const s=document.getElementById("confirm-modal"),i=document.getElementById("confirm-modal-title"),a=document.getElementById("confirm-modal-message"),c=document.getElementById("confirm-modal-confirm"),u=document.getElementById("confirm-modal-cancel");return!s||!i||!a||!c||!u?Promise.resolve(window.confirm(e||n)):(i.textContent=n,a.textContent=e||"",c.textContent=t,c.className=r?"flex-1 p-3 rounded-xl text-sm font-bold bg-red-500/90 text-white hover:bg-red-500 transition":"flex-1 p-3 rounded-xl text-sm font-bold bg-accent text-on-accent hover:opacity-90 transition",s.classList.remove("hidden"),new Promise(d=>{const f=C=>{s.classList.add("hidden"),c.removeEventListener("click",m),u.removeEventListener("click",g),s.removeEventListener("click",A),d(C)},m=()=>f(!0),g=()=>f(!1),A=C=>{C.target===s&&f(!1)};c.addEventListener("click",m),u.addEventListener("click",g),s.addEventListener("click",A)}))}const tr=()=>Fe(Ee,"users",R.currentUser.uid,"settings","exercises");async function qI(){if(!R.currentUser)return;const n=tr(),e=await Yf(n);if(e.exists()){const t=e.data();if(t.listVersion!==2){const r=Cr.map(a=>a.toLowerCase());let s=(t.list||[]).filter(a=>!r.includes(a.toLowerCase()));const i=new Set(r);s=s.filter(a=>{const c=a.toLowerCase();return i.has(c)?!1:(i.add(c),!0)}),R.availableExercises=[...Cr,...s]}else{const r=t.list||[],s=up(r),i=new Set(s.map(c=>Je(c))),a=Cr.filter(c=>!i.has(Je(c)));R.availableExercises=[...s,...a]}}else R.availableExercises=[...Cr];await Rt(n,{list:R.availableExercises,listVersion:2},{merge:!0}),nr()}async function WI(n){if(!n)return;const e=n.trim(),t=e.toLowerCase();if(n=ap[t]??e.charAt(0).toUpperCase()+e.slice(1),!R.availableExercises.some(s=>Je(s)===Je(n))){R.availableExercises.push(n),nr(),await Rt(tr(),{list:R.availableExercises},{merge:!0});const s=document.getElementById("input-exercise");s.value=n,s.dispatchEvent(new Event("change"))}}async function HI(n){R.availableExercises=R.availableExercises.filter(e=>e!==n),nr(),await Rt(tr(),{list:R.availableExercises},{merge:!0}),Yt()}function nr(){const n=document.getElementById("input-exercise"),e=n.value;n.innerHTML='<option value="" disabled selected>Select Exercise</option>',R.availableExercises.forEach(t=>{const r=document.createElement("option");r.value=t,r.textContent=t,n.appendChild(r)}),R.availableExercises.includes(e)&&(n.value=e)}const Lo=document.getElementById("exercise-modal"),ch=document.getElementById("manage-exercise-list");async function lh(n,e){const t=n+e;if(t<0||t>=R.availableExercises.length)return;const r=R.availableExercises[n];R.availableExercises[n]=R.availableExercises[t],R.availableExercises[t]=r,Yt(),nr(),await Rt(tr(),{list:R.availableExercises},{merge:!0})}async function zI(n,e){let t=Ue(e.trim());const r=R.availableExercises.find(s=>Je(s)===Je(t));r&&(t=r);try{re("Updating records...");const s=st(Ee,"users",R.currentUser.uid,"workouts"),i=Kr(s,Kf("exercise","==",n)),a=await ua(i),c=[];a.forEach(f=>c.push(Zn(Fe(Ee,"users",R.currentUser.uid,"workouts",f.id),{exercise:t}))),await Promise.all(c);const u=R.availableExercises.indexOf(n);u>-1?R.availableExercises.includes(t)&&t!==n?R.availableExercises.splice(u,1):R.availableExercises[u]=t:R.availableExercises.includes(t)||R.availableExercises.push(t),await Rt(tr(),{list:R.availableExercises},{merge:!0}),nr(),Yt(),re(`Merged/Renamed to "${t}"`);const d=document.getElementById("input-exercise");(d.value===n||d.value===t)&&(d.value=t,d.dispatchEvent(new Event("change")))}catch{re("Error updating records",!0),Yt()}}function uh(n){const e=Object.entries(n).map(([t,r])=>`${t} (${r})`);return e.length?e.join(`
`):"None"}function ma(){const n=document.getElementById("exercise-sync-preview"),e=document.getElementById("exercise-sync-btn");if(!n||!e)return;const t=lp(R.workoutsCache,R.availableExercises);if(!t.needsUpdate){n.textContent="All logged exercises and your list already use program names.",e.disabled=!0,e.classList.add("opacity-50","cursor-not-allowed");return}e.disabled=!1,e.classList.remove("opacity-50","cursor-not-allowed");const r=[];t.workoutUpdates&&r.push(`${t.workoutUpdates} workout log(s)`),t.listUpdates&&r.push(`${t.listUpdates} list entry(ies)`),n.textContent=`Will update ${r.join(" and ")} to match Today's Plan names.`,n.dataset.detail=[t.workoutUpdates?`Workouts:
${uh(t.workoutRenames)}`:"",t.listUpdates?`Exercise list:
${uh(t.listRenames)}`:""].filter(Boolean).join(`

`)}async function GI(){var r,s;const n=lp(R.workoutsCache,R.availableExercises);if(!n.needsUpdate)return re("Exercise names are already up to date"),ma(),n;const e=((r=document.getElementById("exercise-sync-preview"))==null?void 0:r.dataset.detail)||"";if(!await hp({title:"Update exercise names?",message:`${((s=document.getElementById("exercise-sync-preview"))==null?void 0:s.textContent)||""}${e?`

${e}`:""}

This updates your Firestore data. Safe to run again.`,confirmLabel:"Update names",danger:!1}))return n;try{re("Updating exercise names...");const i=st(Ee,"users",R.currentUser.uid,"workouts"),a=[];let c=0;return R.workoutsCache.forEach(u=>{if(!u.id||!u.exercise)return;const d=Ue(u.exercise);d!==u.exercise&&(c+=1,a.push(Zn(Fe(i,u.id),{exercise:d})))}),await Promise.all(a),R.availableExercises=up(R.availableExercises),await Rt(tr(),{list:R.availableExercises,listVersion:2},{merge:!0}),nr(),Yt(),ma(),re(`Updated ${c} workout log(s)`),{...n,updatedWorkouts:c}}catch{throw re("Error updating exercise names",!0),new Error("migration failed")}}function Yt(){ch.innerHTML="",R.availableExercises.forEach((n,e)=>{const t=document.createElement("div");t.className="flex justify-between items-center py-3 border-b border-line-soft last:border-0";const r=document.createElement("div");r.className="flex-1 min-w-0 mr-2";const s=document.createElement("span");s.className="text-sm text-fg2 block w-full",s.textContent=n,r.appendChild(s);const i=document.createElement("div");i.className="flex gap-3 items-center shrink-0";const a=document.createElement("button");a.innerHTML='<i class="fa-solid fa-arrow-up"></i>',a.className=`text-faint hover:text-fg transition ${e===0?"opacity-30 cursor-not-allowed":""}`,a.onclick=()=>{e>0&&lh(e,-1)};const c=document.createElement("button");c.innerHTML='<i class="fa-solid fa-arrow-down"></i>',c.className=`text-faint hover:text-fg transition ${e===R.availableExercises.length-1?"opacity-30 cursor-not-allowed":""}`,c.onclick=()=>{e<R.availableExercises.length-1&&lh(e,1)};const u=document.createElement("button");u.innerHTML='<i class="fa-solid fa-pen text-[10px]"></i>',u.className="w-6 h-6 rounded-full bg-input text-fg hover:bg-raised transition flex items-center justify-center ml-2";const d=document.createElement("button");d.innerHTML='<i class="fa-solid fa-times"></i>',d.className="text-red-500/70 hover:text-red-400 transition ml-1",d.onclick=()=>HI(n),u.onclick=()=>{a.style.display="none",c.style.display="none",d.style.display="none";const f=document.createElement("input");f.type="text",f.value=n,f.className="w-full bg-input text-fg text-sm p-2 rounded-lg focus:outline-none",r.replaceChild(f,s),f.focus(),u.innerHTML='<i class="fa-solid fa-check text-accent"></i>';const m=async()=>{f.value&&f.value!==n?await zI(n,f.value):Yt()};u.onclick=m,f.onkeydown=g=>{g.key==="Enter"&&m()}},i.append(a,c,u,d),t.append(r,i),ch.appendChild(t)})}function KI(){var n;document.getElementById("open-manager-btn").addEventListener("click",()=>{Lo.classList.remove("hidden"),Yt(),ma()}),(n=document.getElementById("exercise-sync-btn"))==null||n.addEventListener("click",()=>GI()),document.getElementById("close-modal-btn").addEventListener("click",()=>Lo.classList.add("hidden")),document.getElementById("add-exercise-btn").addEventListener("click",()=>{const e=document.getElementById("new-exercise-input");e.value&&(WI(e.value),e.value="",Yt(),Lo.classList.add("hidden"))})}function hh(){const n=document.getElementById("input-date"),e=document.getElementById("date-warning-banner"),t=document.getElementById("date-warning-text");if(!n||!e||!t)return;const r=Ye(),s=n.value;if(!s||s===r){e.classList.add("hidden");return}const[i,a,c]=s.split("-").map(Number),d=new Date(i,a-1,c).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric"}),f=s<r;t.textContent=f?`Logging to a past date: ${d}`:`Logging to a future date: ${d}`,e.classList.remove("hidden")}function QI(){var s;const n=document.getElementById("input-reps");for(let i=1;i<=30;i++){const a=document.createElement("option");a.value=i,a.textContent=i,n.appendChild(a)}document.getElementById("input-exercise").addEventListener("change",i=>{const a=i.target.value;if(!a)return;const c=mn.includes(a),u=document.getElementById("container-sets"),d=document.getElementById("container-weight"),f=document.getElementById("container-reps"),m=document.getElementById("label-weight"),g=document.getElementById("bw-hint");c?(u.style.display="none",f.style.display="none",d.classList.replace("col-span-1","col-span-3"),m.textContent="Minutes",document.getElementById("input-weight").placeholder="e.g. 30",document.getElementById("input-reps").removeAttribute("required"),g==null||g.classList.add("hidden")):(u.style.display="block",f.style.display="block",d.classList.replace("col-span-3","col-span-1"),m.textContent="Load (kg/BW)",document.getElementById("input-weight").placeholder="kg / BW",document.getElementById("input-reps").setAttribute("required","true"),g==null||g.classList.remove("hidden"));const A=Lr(R.workoutsCache,a)[0];A?(c||(document.getElementById("input-set-count").value=A.setCount||1,document.getElementById("input-reps").value=A.reps||""),document.getElementById("input-weight").value=A.weight):(c||(document.getElementById("input-set-count").value=1,document.getElementById("input-reps").value=""),document.getElementById("input-weight").value="");const C=document.getElementById("log-advice-1rm"),D=Lr(R.workoutsCache,a);if(c)C.textContent="";else{let V=0;D.forEach(F=>{if(F.weight!=="BW"&&!isNaN(parseFloat(F.weight))){const q=parseFloat(F.weight)*(1+F.reps/30);q>V&&(V=q)}}),C.textContent=V>0?`~1RM: ${Math.round(V)} kg`:""}const k=document.getElementById("log-recent-history");k.innerHTML="",D.slice(0,3).forEach(V=>{const F=V.timestamp?V.timestamp.toDate():new Date,q=`${F.getFullYear()}-${String(F.getMonth()+1).padStart(2,"0")}-${String(F.getDate()).padStart(2,"0")}`,J=document.createElement("div");J.className="text-[10px] text-subtle font-mono tracking-wide",mn.includes(V.exercise)?J.textContent=`${q} — ${V.weight} mins`:J.textContent=`${q} — ${V.setCount||1} sets of ${V.weight==="BW"?"BW":`${V.weight}kg`} × ${V.reps}`,k.appendChild(J)})}),document.getElementById("input-weight").addEventListener("blur",i=>{const a=i.target.value.trim().toUpperCase();if(a==="BW"){i.target.value="BW";return}a&&!isNaN(a)&&(i.target.value=parseFloat(a).toFixed(1))}),(s=document.getElementById("bw-chip"))==null||s.addEventListener("click",()=>{const i=document.getElementById("input-weight");i.value="BW",i.focus()});const t=document.getElementById("input-date");t&&!t.value&&(t.value=Ye()),t==null||t.addEventListener("change",hh),hh();const r=document.getElementById("log-submit-btn");document.getElementById("log-form").addEventListener("submit",async i=>{if(i.preventDefault(),!R.currentUser)return;const a=Ue(document.getElementById("input-exercise").value),c=document.getElementById("input-weight").value,u=document.getElementById("input-reps").value,d=document.getElementById("input-set-count").value;if(!a){re("Select an exercise",!0);return}const f=mn.includes(a);let m=c.trim().toUpperCase()==="BW"&&!f?"BW":parseFloat(parseFloat(c).toFixed(1));if(m!=="BW"&&isNaN(m)){re(f?"Enter valid minutes":"Invalid weight",!0);return}document.getElementById("input-weight").value=m==="BW"?"BW":m.toFixed(1),ih(r,!0,"Saving...");try{const g=document.getElementById("input-date"),[A,C,D]=g.value.split("-").map(Number),k=new Date(A,C-1,D,12,0,0);await Hi(st(Ee,"users",R.currentUser.uid,"workouts"),{exercise:a,weight:m,reps:f?0:parseInt(u),setCount:f?1:parseInt(d),timestamp:k,dateStr:k.toLocaleDateString()});const V=f?`Logged: ${a} (${m} mins)`:`Logged: ${a} (${d>1?`${d} Sets`:"Set"} - ${m==="BW"?"BW":`${m}kg`} x ${u})`;re(V+(g.value===Ye()?"":` on ${k.toLocaleDateString()}`)),f||(document.getElementById("input-set-count").value="1",document.getElementById("input-reps").value=""),document.getElementById("input-exercise").value="",document.getElementById("log-advice-1rm").textContent="",document.getElementById("log-recent-history").innerHTML=""}catch{re("Error saving workout",!0)}finally{ih(r,!1)}})}const ht=document.getElementById("btn-save-bw"),Oe=document.getElementById("input-bodyweight"),Or=document.getElementById("input-date"),dh=document.getElementById("bw-status-label"),fh=document.getElementById("last-bw-display");function Hs({statusText:n,valueText:e}){dh&&(dh.textContent=n),fh&&(fh.textContent=e)}async function dp(){if(!R.currentUser)return;const n=ht.querySelector("i"),[e,t,r]=Or.value.split("-").map(Number),s=new Date(e,t-1,r).toLocaleDateString(),a=Or.value===Ye();try{const c=await ua(Kr(st(Ee,"users",R.currentUser.uid,"bodyweight"),Kf("dateStr","==",s),Zu(1)));if(!c.empty)R.todayBWDocId=c.docs[0].id,Oe.value=c.docs[0].data().weight,Hs({statusText:a?"Logged today":"Logged this session",valueText:`${Oe.value} kg`}),Oe.disabled=!0,n.className="fa-solid fa-pen text-muted",ht.title="Edit body weight";else{R.todayBWDocId=null,Oe.disabled=!1,n.className="fa-solid fa-check",ht.title="Save body weight";const u=await ua(Kr(st(Ee,"users",R.currentUser.uid,"bodyweight"),la("timestamp","desc"),Zu(1)));u.empty?(Hs({statusText:a?"Not logged today":"Not logged this session",valueText:"—"}),Oe.value=""):(Oe.value=u.docs[0].data().weight,Hs({statusText:a?"Last recorded":"Not logged this session",valueText:`${Oe.value} kg`}))}}catch{}}function JI(){Or.addEventListener("change",dp),ht.addEventListener("click",async()=>{const n=ht.querySelector("i");if(R.todayBWDocId&&Oe.disabled){Oe.disabled=!1,Oe.focus(),n.className="fa-solid fa-check",ht.title="Save body weight";return}let e=parseFloat(Oe.value);if(e<0||!e||!R.currentUser)return;e=parseFloat(e.toFixed(1));const[t,r,s]=Or.value.split("-").map(Number),i=new Date(t,r-1,s,12,0,0),a=Or.value===Ye();ht.disabled=!0;try{if(R.todayBWDocId)await Zn(Fe(Ee,"users",R.currentUser.uid,"bodyweight",R.todayBWDocId),{weight:e});else{const c=await Hi(st(Ee,"users",R.currentUser.uid,"bodyweight"),{weight:e,timestamp:i,dateStr:i.toLocaleDateString()});R.todayBWDocId=c.id}Hs({statusText:a?"Logged today":"Logged this session",valueText:`${e} kg`}),Oe.disabled=!0,n.className="fa-solid fa-pen text-muted",ht.title="Edit body weight",re(`Saved: ${e}kg`)}catch{re("Error saving",!0)}finally{Oe.disabled||(ht.disabled=!1)}})}let ph=!1;function $e(n,e=1){return`rgba(${getComputedStyle(document.documentElement).getPropertyValue(`--c-${n}`).trim().split(/\s+/).join(", ")}, ${e})`}function fp(n){return n===0?$e("accent"):rh[n%rh.length]}function YI(n){return n.plugins.legend.labels.color=$e("muted"),Object.assign(n.plugins.tooltip,{backgroundColor:$e("surface"),titleColor:$e("fg"),bodyColor:$e("fg3"),borderColor:$e("ring")}),n.scales.y.grid.color=$e("line-soft"),n.scales.x.ticks={...n.scales.x.ticks,color:$e("subtle")},n.scales.y.ticks={...n.scales.y.ticks,color:$e("subtle")},n}function pp(){const n=R.chartInstance;n&&(YI(n.options),n.data.datasets.forEach((e,t)=>{e.borderColor=e.label==="Body Weight"?$e("faint"):fp(t)}),n.update())}function XI(){const n=R.chartModule,e=document.getElementById("progressChart").getContext("2d");n.defaults.color=$e("subtle"),n.defaults.font.family="Inter",R.chartInstance=new n(e,{type:"line",data:{labels:[],datasets:[]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{boxWidth:8,font:{size:10}}},tooltip:{mode:"index",intersect:!1,borderWidth:1}},scales:{y:{border:{display:!1},grid:{drawBorder:!1}},x:{border:{display:!1},grid:{display:!1}}}}}),pp()}function ZI(){ph||(ph=!0,document.getElementById("chart-exercise-select").addEventListener("change",n=>yc(n.target.value)))}async function eT(){if(!R.chartModule){const n=await Ah(()=>import("./auto-eE5P6S0m.js"),[]);R.chartModule=n.default}if(!R.chartInstance&&(XI(),ZI(),R.allWorkoutsCache.length)){const n=document.getElementById("chart-exercise-select");yc(n.value||"All")}return R.chartInstance}function tT(n){R.allWorkoutsCache=n;const e=cp(n),t=document.getElementById("chart-exercise-select"),r=t.value;t.innerHTML='<option value="All">Overview</option><option value="Body Weight">Body Weight</option>',e.forEach(i=>{const a=document.createElement("option");a.value=i,a.textContent=i,t.appendChild(a)});const s=r&&r!=="All"&&r!=="Body Weight"?Ue(r):r;r&&(r==="All"||r==="Body Weight"||e.includes(s))?t.value=s===r?r:s:!R.chartDefaultApplied&&n.length>0?(t.value=Ue(n[0].exercise),R.chartDefaultApplied=!0):t.value="All",yc(t.value)}function yc(n){if(!R.chartInstance)return;const e=document.getElementById("chart-empty-state"),t=n==="All"?[...R.allWorkoutsCache,...R.bodyweightCache]:n==="Body Weight"?R.bodyweightCache:Lr(R.allWorkoutsCache,n);if(t.length===0){R.chartInstance.data.labels=[],R.chartInstance.data.datasets=[],R.chartInstance.update(),e==null||e.classList.remove("hidden"),["stat-est-1rm","stat-max-weight","stat-total-volume","stat-total-reps"].forEach(a=>document.getElementById(a).textContent="-");return}e==null||e.classList.add("hidden");const r=new Map;t.forEach(a=>{a.timestamp&&r.set(a.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"}),a.timestamp.toDate())});const s=Array.from(r.keys()).sort((a,c)=>r.get(a)-r.get(c)),i=[];if(n!=="Body Weight"&&(n==="All"?cp(R.allWorkoutsCache):[Ue(n)]).forEach((c,u)=>{const d={};Lr(R.allWorkoutsCache,c).filter(f=>f.timestamp).forEach(f=>{const m=f.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"}),g=f.weight==="BW"?null:parseFloat(f.weight);g!==null&&(!d[m]||g>d[m])&&(d[m]=g)}),i.push({label:c,data:s.map(f=>d[f]||null),borderColor:fp(u),borderWidth:2,tension:.4,pointRadius:0,pointHoverRadius:4,spanGaps:!0})}),n==="All"||n==="Body Weight"){const a={};R.bodyweightCache.forEach(c=>{c.timestamp&&(a[c.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"})]=c.weight)}),i.push({label:"Body Weight",data:s.map(c=>a[c]||null),borderColor:$e("faint"),borderDash:[5,5],borderWidth:2,tension:.4,pointRadius:0,spanGaps:!0})}if(R.chartInstance.data.labels=s,R.chartInstance.data.datasets=i,R.chartInstance.update(),n==="All"||n==="Body Weight")["stat-est-1rm","stat-max-weight","stat-total-volume","stat-total-reps"].forEach(a=>document.getElementById(a).textContent="-"),document.querySelector("#stat-max-weight").previousElementSibling.textContent="Peak Load",n==="Body Weight"&&i[0].data.filter(a=>a).length&&(document.getElementById("stat-max-weight").textContent=`${i[0].data.filter(a=>a).pop()}kg`,document.querySelector("#stat-max-weight").previousElementSibling.textContent="Current Weight");else{let a=0,c=0,u=0,d=0;const f=mn.includes(n);Lr(R.allWorkoutsCache,n).forEach(m=>{const g=m.weight==="BW"?0:parseFloat(m.weight),A=m.reps||0,C=m.setCount||1;if(g>a&&(a=g),!f&&m.weight!=="BW"){const D=g*(1+A/30);D>c&&(c=D),u+=g*A*C,d+=A*C}}),f?(document.querySelector("#stat-max-weight").previousElementSibling.textContent="Longest Time",document.getElementById("stat-max-weight").textContent=`${a} mins`,["stat-est-1rm","stat-total-volume","stat-total-reps"].forEach(m=>document.getElementById(m).textContent="-")):(document.querySelector("#stat-max-weight").previousElementSibling.textContent="Peak Load",document.getElementById("stat-est-1rm").textContent=`${Math.round(c)}kg`,document.getElementById("stat-max-weight").textContent=`${a}kg`,document.getElementById("stat-total-volume").textContent=u>1e3?`${(u/1e3).toFixed(1)}k`:u,document.getElementById("stat-total-reps").textContent=d)}}function Gi(){const n=document.getElementById("input-date");return n!=null&&n.value?n.value:Ye()}function mp(){const n=document.getElementById("today-session-name");if(!n)return;const e=Gi();n.value=R.sessionsCache[e]||"",n.placeholder="Name this session..."}async function vc(n,e){if(!R.currentUser)return;const t=e.trim(),r=Fe(Ee,"users",R.currentUser.uid,"sessions",n);t&&t!==n?(await Rt(r,{name:t,dateId:n},{merge:!0}),R.sessionsCache[n]=t):(await Wi(r),delete R.sessionsCache[n])}function gp(n,e,t=!1){n.querySelector(".edit-log-btn").addEventListener("click",()=>{const r=mn.includes(e.exercise),s=e.weight==="BW"?"BW":e.weight;if(e.type==="workout"){const i=ae(e.id);n.innerHTML=`
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
      `}n.querySelector(".cancel-btn").addEventListener("click",()=>{t?wc(R.workoutsCache):Mr()}),n.querySelector(".delete-btn").addEventListener("click",async()=>{const i=e.type==="workout"?e.exercise:"this body weight entry";await hp({title:"Delete log?",message:`Delete ${i}? This cannot be undone.`,confirmLabel:"Delete",danger:!0})&&wT(e.id,e.type==="workout"?"workouts":"bodyweight")}),n.querySelector(".save-btn").addEventListener("click",async()=>{try{let i={};if(e.type==="bodyweight"){const a=parseFloat(document.getElementById(`edit-bw-${e.id}`).value);if(isNaN(a)||a<0)throw new Error;i={weight:parseFloat(a.toFixed(1))}}else if(r){const a=parseFloat(document.getElementById(`edit-mins-${e.id}`).value);if(isNaN(a)||a<0)throw new Error;i={weight:parseFloat(a.toFixed(1))}}else{const a=parseInt(document.getElementById(`edit-sets-${e.id}`).value),c=parseInt(document.getElementById(`edit-reps-${e.id}`).value),u=document.getElementById(`edit-weight-${e.id}`).value.trim().toUpperCase(),d=u==="BW"?"BW":parseFloat(parseFloat(u).toFixed(1));if(isNaN(a)||a<1||isNaN(c)||c<0||d!=="BW"&&(isNaN(d)||d<0))throw new Error;i={setCount:a,reps:c,weight:d}}await Zn(Fe(Ee,"users",R.currentUser.uid,e.type==="workout"?"workouts":"bodyweight",e.id),i),re("Updated successfully")}catch{re("Invalid values",!0)}})})}function mh(n){const e=document.createElement("div");if(e.className="flex justify-between items-center py-3 border-b border-line-soft last:border-0 group transition-colors",n.type==="workout"){const t=mn.includes(n.exercise),r=n.weight==="BW"?"BW":`${n.weight}kg`;e.innerHTML=`
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
    `);return gp(e,n,!1),e}function gh(n){const e=document.createElement("div");e.className="flex justify-between items-center py-3 border-b border-line-soft last:border-0 group";const t=mn.includes(n.exercise);return n.weight==="BW"||`${n.weight}`,e.innerHTML=`
    <div class="flex-1">
      <div class="font-semibold text-fg2 text-sm">${ae(n.exercise)} <span class="text-[9px] text-subtle font-normal ml-1">${(n.setCount||1)>1?ae(`${n.setCount} SETS`):""}</span></div>
      <div class="text-xs text-subtle mt-0.5">${t?`${ae(n.weight)} mins`:`${ae(n.weight==="BW"?"BW":`${n.weight}kg`)} × ${ae(n.reps)}`}</div>
    </div>
    <div class="flex items-center gap-1">
      <button class="edit-log-btn text-faint hover:text-accent transition p-2"><i class="fa-solid fa-pen"></i></button>
    </div>
  `,gp(e,n,!0),e}const Vs=new Set;function nT(n){const e=[...new Set(n.map(r=>r.weight))],t=r=>r==="BW"?"BW":`${r}kg`;return e.length===1?`${t(e[0])} × ${n.map(r=>r.reps).join(" · ")}`:n.map(r=>`${t(r.weight)}×${r.reps}`).join(", ")}function Ec(n,e){const t=document.createElement("div");t.className="border-b border-line-soft last:border-0";const r=Vs.has(n.key),s=n.sets.reduce((a,c)=>a+(c.weight==="BW"?0:c.weight*c.reps),0),i=document.createElement("button");if(i.type="button",i.className="w-full flex justify-between items-center py-3 text-left",i.innerHTML=`
    <div class="flex-1">
      <div class="font-semibold text-fg2 text-sm">${ae(n.exercise)} <span class="text-[9px] text-subtle font-normal ml-1">${ae(`${n.sets.length} ${n.sets.length===1?"SET":"SETS"}`)}</span></div>
      <div class="text-xs text-subtle mt-0.5">${ae(nT(n.sets))}</div>
    </div>
    <div class="flex items-center gap-3">
      <div class="text-xs font-mono text-faint">${s?s.toFixed(0):"-"}</div>
      <span class="text-faint p-2"><i class="fa-solid fa-chevron-down text-xs transition-transform ${r?"rotate-180":""}"></i></span>
    </div>
  `,i.addEventListener("click",()=>{Vs.has(n.key)?Vs.delete(n.key):Vs.add(n.key),t.replaceWith(Ec(n,e))}),t.appendChild(i),r){const a=document.createElement("div");a.className="ml-3 pl-3 border-l border-raised mb-2",n.sets.forEach(c=>a.appendChild(e(c))),t.appendChild(a)}return t}function rT(n){const e=document.getElementById("history-list");if(n.length===0){e.innerHTML='<div class="text-center text-subtle mt-10 text-sm">No history yet.</div>';return}const t={};n.forEach(r=>{const s=r.timestamp?r.timestamp.toDate():new Date,i=Ye(s);t[i]||(t[i]=[]),t[i].push(r)}),e.innerHTML="",Object.keys(t).sort().reverse().forEach(r=>{const i=(t[r][0].timestamp?t[r][0].timestamp.toDate():new Date).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric"}),a=R.sessionsCache[r]||"",c=a||i,u=document.createElement("div");u.className="mb-8";const d=document.createElement("div");d.className="flex justify-between items-end border-b border-line pb-2 mb-2";const f=document.createElement("div"),m=document.createElement("span");m.className="text-[10px] text-accent uppercase tracking-widest font-semibold",m.textContent=i,f.appendChild(m);const g=document.createElement("div");g.className="flex items-center gap-2 group cursor-pointer mt-1";const A=document.createElement("span");A.className="text-fg text-lg font-bold",A.textContent=c;const C=document.createElement("i");C.className="fa-solid fa-pen text-fainter text-[10px] opacity-0 group-hover:opacity-100 transition ml-2",g.append(A,C),g.addEventListener("click",()=>{const V=document.createElement("input");V.type="text",V.value=a,V.placeholder="Name this session...",V.className="bg-transparent text-fg text-lg font-bold focus:outline-none border-b border-ring w-full max-w-[200px]",f.replaceChild(V,g),V.focus();let F=!1;const q=async()=>{if(F)return;F=!0;const J=V.value.trim();try{J!==a&&(await vc(r,J),re("Session renamed"))}catch{re("Error saving session name",!0)}finally{F=!1,Mr()}};V.addEventListener("blur",q),V.addEventListener("keydown",J=>{J.key==="Enter"&&V.blur()})}),f.appendChild(g),d.appendChild(f);const D=document.createElement("span");D.className="text-[10px] text-subtle font-mono",D.textContent=`${da(t[r]).length} logs`,d.appendChild(D),u.appendChild(d);const k=document.createElement("div");da(t[r]).forEach(V=>{k.appendChild(V.type==="set-group"?Ec(V,mh):mh(V))}),u.appendChild(k),e.appendChild(u)})}function wc(n){const e=document.getElementById("today-list"),t=Gi(),r=n.filter(s=>s.timestamp?Ye(s.timestamp.toDate())===t:!1);if(r.length===0){e.innerHTML='<div class="text-faint text-xs tracking-wide">No logs for this session yet.</div>';return}e.innerHTML="",da(r).forEach(s=>{e.appendChild(s.type==="set-group"?Ec(s,gh):gh(s))})}const sT=6;function iT(){const n=document.getElementById("recent-exercise-chips");if(!n)return;const e=new Set,t=[];for(const s of R.workoutsCache){const i=Ue(s.exercise);if(!i)continue;const a=Je(i);if(!e.has(a)&&(e.add(a),t.push(i),t.length>=sT))break}if(t.length===0){n.innerHTML="",n.classList.add("hidden");return}n.classList.remove("hidden"),n.innerHTML="";const r=document.createElement("span");r.className="text-[9px] text-faint uppercase tracking-widest mr-1",r.textContent="Recent",n.appendChild(r),t.forEach(s=>{const i=document.createElement("button");i.type="button",i.className="text-[10px] font-semibold px-3 py-1 rounded-full bg-input text-fg3 hover:text-fg hover:bg-line border border-raised transition",i.textContent=s,i.addEventListener("click",()=>{const a=document.getElementById("input-exercise");a&&[...a.options].some(c=>c.value===s)&&(a.value=s,a.dispatchEvent(new Event("change")))}),n.appendChild(i)})}const oT=90,aT=["S","M","T","W","T","F","S"];let ze=null,Nn=null;const ga={},Oo=new Set,_a=()=>Fe(Ee,"users",R.currentUser.uid,"settings","program"),Fn=()=>st(Ee,"users",R.currentUser.uid,"workouts"),Ki=n=>n.timestamp?Ye(n.timestamp.toDate()):null;async function cT(){if(R.currentUser){ze||(ze=DI(Ye()),_t());try{const n=await Yf(_a()),e=n.exists()?n.data().startDate:null;if(e){e!==ze&&(ze=e,_t());return}await Rt(_a(),{startDate:ze},{merge:!0})}catch{_t()}}}function lT(n){if((Nn==null?void 0:Nn.dateId)===n)return Nn.dayKey;const e=R.workoutsCache.find(t=>t.program===er&&Ki(t)===n);return e!=null&&e.programDay?e.programDay:ip(n)}function _h(n,e){if(n==="BW")return"BW";const t=Number(n);return`${Number.isInteger(t)?t:t.toFixed(1)}kg${e?" ea":""}`}function rr(n,e){return R.workoutsCache.filter(t=>t.program===er&&t.exercise===e&&Ki(t)===n)}function uT(n,e){const t=rr(e,n.name),r=MI(n,op(R.workoutsCache,n.name,e,Ki));if(t.length)return{...r,weight:t[0].weight,reps:t[0].targetReps||r.reps};const s=`${e}|${n.name}`;return s in ga?{...r,weight:ga[s]}:r}function _i(n,e){const[t,r,s]=n.split("-").map(Number);return new Date(t,r-1,s,12,0,e)}async function _p(n,e){if(!R.sessionsCache[n])try{await vc(n,e)}catch{}}function hT(){var n;(n=document.querySelector(`.timer-btn[data-time="${oT}"]`))==null||n.click()}async function Ic(n,e){if(!Oo.has(n)){Oo.add(n);try{await e()}catch{re("Error saving",!0)}finally{Oo.delete(n)}}}function dT(n,e,t,r,s,i){const a=rr(s,e.name).find(u=>u.setIndex===r),c=UI(a?a.reps:null,i.reps);Ic(`${s}|${e.name}|${r}`,async()=>{a?c==null?await Wi(Fe(Fn(),a.id)):await Zn(Fe(Fn(),a.id),{reps:c}):(await Hi(Fn(),{exercise:e.name,weight:i.weight,reps:c,setCount:1,timestamp:_i(s,t),dateStr:_i(s,0).toLocaleDateString(),program:er,programDay:n.key,setIndex:r,targetSets:e.sets,targetReps:i.reps}),e.supersetFirst||hT(),_p(s,n.label))})}function fT(n,e,t,r){const s=rr(r,e.name)[0];Ic(`${r}|${e.name}`,async()=>{if(s){await Wi(Fe(Fn(),s.id));return}await Hi(Fn(),{exercise:e.name,weight:e.minutes,reps:0,setCount:1,timestamp:_i(r,t),dateStr:_i(r,0).toLocaleDateString(),program:er,programDay:n.key}),_p(r,n.label)})}function yh(n,e,t,r){const s=FI(n,t,r);ga[`${e}|${n.name}`]=s;const i=rr(e,n.name);i.length?Ic(`${e}|${n.name}|weight`,()=>Promise.all(i.map(a=>Zn(Fe(Fn(),a.id),{weight:s})))):_t()}const pT={start:{text:"Start weight",cls:"text-subtle"},up:{text:"Weight up",cls:"text-accent"},reps:{text:"+1 rep",cls:"text-accent"},same:{text:"Same as last time",cls:"text-subtle"},deload:{text:"Deload -10%",cls:"text-warn"},bw:{text:"",cls:""}};function z(n,e,t){const r=document.createElement(n);return e&&(r.className=e),t!=null&&(r.textContent=t),r}function yp(n,e,t){const r=z("button");r.type="button",r.setAttribute("aria-label",t);const s="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition active:scale-95 select-none";return n==null?r.className=`${s} bg-input border border-raised text-faint`:n>=e?(r.className=`${s} bg-accent text-on-accent`,r.innerHTML='<i class="fa-solid fa-check"></i>'):(r.className=`${s} bg-amber-500/20 border border-amber-500/50 text-warn`,r.textContent=n),r}function mT(n,e,t,r,s){const i=z("div","py-4 border-b border-line-soft last:border-0"),a=uT(e,s),c=rr(s,e.name),u=z("div","flex justify-between items-start gap-3"),d=z("div","min-w-0");d.append(z("div","text-sm font-semibold text-fg2",`${r}. ${e.name}`));const f=z("div","text-[10px] mt-1 flex flex-wrap gap-x-2");f.append(z("span","text-muted font-mono",`${e.sets} × ${a.reps}${e.note?` (${e.note})`:""}`));const m=pT[a.reason];if(m!=null&&m.text&&f.append(z("span",m.cls,m.text)),e.superset){const D=e.supersetFirst?`No rest, go to ${e.superset}`:`Superset w/ ${e.superset}`;f.append(z("span","text-info",D))}d.append(f),u.append(d);const g=z("div","flex flex-col items-end shrink-0 gap-1.5");if(a.weight!=="BW"){const D=z("div","flex items-center gap-1"),k=z("button","w-8 h-8 rounded-full bg-input text-muted hover:text-fg text-xs");k.type="button",k.innerHTML='<i class="fa-solid fa-minus"></i>',k.setAttribute("aria-label",`Lower ${e.name} weight`),k.onclick=()=>yh(e,s,a.weight,-1);const V=z("button","w-8 h-8 rounded-full bg-input text-muted hover:text-fg text-xs");V.type="button",V.innerHTML='<i class="fa-solid fa-plus"></i>',V.setAttribute("aria-label",`Raise ${e.name} weight`),V.onclick=()=>yh(e,s,a.weight,1),D.append(k,z("span","text-sm font-bold text-fg w-[4.5rem] text-center",_h(a.weight,e.each)),V),g.append(D)}else g.append(z("span","text-sm font-bold text-fg","BW"));const A=OI(R.workoutsCache,e.name,s,Ki,3);if(A){const D=z("div","text-right max-w-[5.5rem]");D.append(z("div","text-[9px] uppercase tracking-widest text-faint font-semibold","Last")),A.weight!=="BW"&&D.append(z("div","text-[10px] text-subtle font-mono leading-tight",_h(A.weight,e.each))),D.append(z("div","text-[10px] text-muted font-mono leading-tight",A.reps.join(" · "))),g.append(D)}u.append(g),i.append(u);const C=z("div","flex gap-3 mt-3");for(let D=0;D<e.sets;D++){const k=c.find(F=>F.setIndex===D),V=yp(k?k.reps:null,a.reps,`${e.name} set ${D+1}`);V.onclick=()=>dT(n,e,t,D,s,a),C.append(V)}return i.append(C),{row:i,done:c.filter(D=>D.setIndex<e.sets).length,total:e.sets}}function gT(n,e,t,r){const s=z("div","py-4 border-b border-line-soft last:border-0 flex justify-between items-center gap-3"),i=z("div");i.append(z("div","text-sm font-semibold text-fg2",e.name)),i.append(z("div","text-[10px] text-muted font-mono mt-1",`${e.minutes} min`));const a=rr(r,e.name).length>0,c=yp(a?1:null,1,`${e.name} done`);return c.onclick=()=>fT(n,e,t,r),s.append(i,c),{row:s,done:a?1:0,total:1}}function _T(n,e,t){const r=z("div","grid grid-cols-7 gap-1 mb-4"),s=ip(e);sp.forEach((i,a)=>{const c=(a+6)%7,u=z("button","",null);u.type="button",u.style.order=String(c);const d=i===t,f=i===s;u.className=`flex flex-col items-center py-1.5 rounded-xl text-[9px] font-semibold uppercase tracking-wide transition ${d?"bg-fg text-bg":f?"bg-input text-fg":"bg-surface text-subtle hover:text-fg"}`,u.append(z("span","text-[11px]",aT[a])),u.append(z("span","opacity-70 normal-case",rp[i].label.replace("Upper ","Up ").replace("Lower ","Lo "))),u.onclick=()=>{Nn={dateId:e,dayKey:i},_t()},r.append(u)}),n.append(r)}function yT(n){const e=z("div","flex items-center justify-between gap-2 mb-4 text-[10px] text-subtle");e.append(z("span","uppercase tracking-widest font-semibold","Program start"));const t=z("input","bg-input text-fg text-xs rounded-full px-3 py-1 focus:outline-none");t.type="date",t.value=ze,t.onchange=async()=>{if(t.value){ze=t.value,_t();try{await Rt(_a(),{startDate:ze},{merge:!0})}catch{re("Error saving start date",!0)}}},e.append(t),n.append(e)}let ya=!1;function _t(){const n=document.getElementById("plan-body"),e=document.getElementById("plan-title"),t=document.getElementById("plan-week");if(!n||!e||!t)return;if(!R.currentUser){n.innerHTML=`<div class="text-center py-6 text-subtle text-sm">Sign in to see today's plan.</div>`,e.textContent="—",t.textContent="Week —";return}if(!ze)return;const r=Gi(),s=lT(r),i=NI(ze,r),a=r<ze,c=VI(s,i);if(e.textContent=c.label,t.textContent=a?"Not started":`Week ${i}`,n.innerHTML="",_T(n,r,s),ya&&yT(n),s==="rest"){n.append(z("div","text-center py-6 text-subtle text-sm","Rest day. Recover, eat, sleep.")),n.append(z("div","text-center text-[10px] text-faint","Missed a day? Pick it above."));return}const u=z("div","flex justify-between items-center text-[10px] uppercase tracking-widest font-semibold mb-1");n.append(u),c.note&&n.append(z("div","text-[10px] text-info mb-1",c.note));const d=z("div");let f=0,m=0,g=0;c.items.forEach((C,D)=>{const k=C.cardio?gT(c,C,D,r):mT(c,C,D,++g,r);f+=k.done,m+=k.total,d.append(k.row)}),n.append(d);const A=m>0&&f>=m;u.append(z("span",A?"text-accent":"text-subtle",A?"Session complete":`${f} / ${m} done`)),u.append(z("span","text-faint normal-case tracking-normal","Tap = done. Tap again = fewer reps."))}function vT(){var n,e;(n=document.getElementById("plan-week"))==null||n.addEventListener("click",t=>{t.stopPropagation(),ya=!ya,_t()}),(e=document.getElementById("input-date"))==null||e.addEventListener("change",()=>{Nn=null,_t()})}function ET(){R.currentUser&&(R.unsubscribes.forEach(n=>n()),R.unsubscribes=[],R.unsubscribes.push(Do(Kr(st(Ee,"users",R.currentUser.uid,"workouts"),la("timestamp","desc")),n=>{R.workoutsCache=n.docs.map(e=>({id:e.id,type:"workout",...e.data()})),Mr(),wc(R.workoutsCache),_t(),iT(),tT(R.workoutsCache),document.getElementById("input-exercise").value&&document.getElementById("input-exercise").dispatchEvent(new Event("change"))})),R.unsubscribes.push(Do(Kr(st(Ee,"users",R.currentUser.uid,"bodyweight"),la("timestamp","desc")),n=>{R.bodyweightCache=n.docs.map(e=>({id:e.id,type:"bodyweight",...e.data()})),Mr()})),R.unsubscribes.push(Do(st(Ee,"users",R.currentUser.uid,"sessions"),n=>{R.sessionsCache={},n.forEach(e=>{R.sessionsCache[e.id]=e.data().name}),mp(),Mr()})))}function Mr(){const n=[...R.workoutsCache,...R.bodyweightCache].sort((e,t)=>{var r,s;return(((r=t.timestamp)==null?void 0:r.toDate())||new Date)-(((s=e.timestamp)==null?void 0:s.toDate())||new Date)});rT(n)}async function wT(n,e){try{await Wi(Fe(Ee,"users",R.currentUser.uid,e,n)),re("Deleted")}catch{re("Error",!0)}}function IT(){const n=document.getElementById("today-session-name"),e=document.getElementById("input-date"),t=async()=>{if(R.currentUser)try{await vc(Gi(),n.value)}catch{re("Error saving session name",!0)}};n.addEventListener("change",t),n.addEventListener("blur",t),e==null||e.addEventListener("change",()=>{mp(),wc(R.workoutsCache)})}let Mo=null,dt=null,yi=!1;function vp(){const n=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);return n?(Mo||(Mo=new n),Mo):null}function TT(n,e=Date.now()){return Math.max(0,(n-e)/1e3)}function Ep(n){n.state==="suspended"&&n.resume();const e=n.createBuffer(1,1,n.sampleRate),t=n.createBufferSource();t.buffer=e,t.connect(n.destination),t.start(0);try{t.stop(0)}catch{}}function wp(n,e){const t=n.createOscillator(),r=n.createGain();return t.type="sine",t.frequency.setValueAtTime(880,e),r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.12,e+.02),r.gain.linearRampToValueAtTime(0,e+.16),t.connect(r),r.connect(n.destination),t.start(e),t.stop(e+.17),t}function bT(){const n=vp();n&&(Ep(n),wp(n,n.currentTime))}function AT(n){yi=!1,dt==null||dt(),dt=null;const e=vp();if(!e)return;Ep(e);const t=TT(n),r=e.currentTime+t,s=wp(e,r);let i=!1;dt=()=>{if(!i){i=!0;try{s.stop(0)}catch{}}},s.onended=()=>{i||(yi=!0)}}function Ip(){dt==null||dt(),dt=null,yi=!1}function ST(){yi||bT(),Ip()}function RT(){document.querySelectorAll(".nav-link").forEach(s=>{s.addEventListener("click",async()=>{document.querySelectorAll(".nav-link").forEach(i=>i.classList.remove("active")),s.classList.add("active"),document.querySelectorAll(".view-section").forEach(i=>{i.classList.add("hidden"),i.classList.remove("animate-fade-in"),i.id===s.dataset.target&&(i.classList.remove("hidden"),i.classList.add("animate-fade-in"))}),s.dataset.target==="view-progress"&&(await eT(),R.chartInstance&&R.chartInstance.resize())})});let n=null,e=0;function t(){const s=document.getElementById("timer-display"),i=document.getElementById("timer-cancel"),a=sh(e);if(a<=0){s.textContent="00:00",s.className="text-xl font-mono text-muted",i.classList.add("hidden");return}s.textContent=`${Math.floor(a/60).toString().padStart(2,"0")}:${(a%60).toString().padStart(2,"0")}`,s.className=`text-xl font-mono text-accent ${a<=5?"animate-pulse":""}`,i.classList.remove("hidden")}function r(){var i;const s=sh(e);t(),s<=0&&(clearInterval(n),n=null,e=0,(i=navigator.vibrate)==null||i.call(navigator,[200,100,200]),ST())}document.querySelectorAll(".timer-btn").forEach(s=>s.addEventListener("click",i=>{clearInterval(n);const a=parseInt(i.currentTarget.dataset.time,10);e=Date.now()+a*1e3,AT(e),t(),n=setInterval(r,250)})),document.getElementById("timer-cancel").addEventListener("click",()=>{clearInterval(n),n=null,e=0,Ip(),t()}),document.addEventListener("visibilitychange",()=>{n&&document.visibilityState==="visible"&&r()})}const vh="reptrack-collapse-";function CT(){document.querySelectorAll(".collapsible-section").forEach(n=>{const e=n.dataset.collapsible,t=n.querySelector(".collapsible-header"),r=n.querySelector(".collapsible-body");if(!e||!t||!r)return;const s=localStorage.getItem(`${vh}${e}`),i=s===null?n.dataset.defaultExpanded!=="false":s==="true";Eh(t,r,i),t.addEventListener("click",()=>{const a=t.getAttribute("aria-expanded")!=="true";Eh(t,r,a),localStorage.setItem(`${vh}${e}`,String(a))})})}function Eh(n,e,t){n.setAttribute("aria-expanded",String(t)),e.classList.toggle("hidden",!t)}const PT="reptrack-theme",vi={dark:{label:"Dark",meta:"#000000",swatch:["#0a0a0a","#00E676"]},stone:{label:"Stone",meta:"#E9E6DF",swatch:["#F4F2ED","#3D6B4A"]},japandi:{label:"Japandi",meta:"#EFE9E1",swatch:["#F8F4EE","#9A5B3F"]}};function Tp(){const n=document.documentElement.dataset.theme;return vi[n]?n:"dark"}function bp(n){var t;const e=vi[n]?n:"dark";e==="dark"?delete document.documentElement.dataset.theme:document.documentElement.dataset.theme=e,(t=document.querySelector('meta[name="theme-color"]'))==null||t.setAttribute("content",vi[e].meta),pp(),xT()}function xT(){const n=document.getElementById("theme-menu");if(!n)return;const e=Tp();n.innerHTML="",Object.entries(vi).forEach(([t,r])=>{const s=document.createElement("button");s.type="button",s.setAttribute("role","menuitemradio"),s.setAttribute("aria-checked",String(t===e)),s.dataset.theme=t,s.className=`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left transition ${t===e?"bg-input text-fg font-semibold":"text-fg2 hover:bg-input"}`;const i=document.createElement("span");i.className="w-5 h-5 rounded-full border border-ring/50 shrink-0 flex items-center justify-center",i.style.background=r.swatch[0];const a=document.createElement("span");a.className="w-2 h-2 rounded-full",a.style.background=r.swatch[1],i.append(a);const c=document.createElement("span");if(c.className="flex-1",c.textContent=r.label,s.append(i,c),t===e){const u=document.createElement("i");u.className="fa-solid fa-check text-accent text-xs",s.append(u)}s.addEventListener("click",()=>{bp(t),va(!1);try{localStorage.setItem(PT,t)}catch{}}),n.append(s)})}function va(n){var e,t;(e=document.getElementById("theme-menu"))==null||e.classList.toggle("hidden",!n),(t=document.getElementById("theme-toggle"))==null||t.setAttribute("aria-expanded",String(n))}function kT(){bp(Tp());const n=document.getElementById("theme-toggle");n==null||n.addEventListener("click",e=>{e.stopPropagation(),va(document.getElementById("theme-menu").classList.contains("hidden"))}),document.addEventListener("click",e=>{e.target.closest("#theme-menu")||va(!1)})}const DT=5,NT=60,wh="flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full bg-fg text-bg shadow-sm transition-all",Ih="flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full text-subtle hover:text-fg transition-all",VT="flex-timer-btn flex-1 bg-fg text-bg text-xs py-2.5 rounded-full transition-colors font-semibold",LT="flex-timer-btn flex-1 bg-input hover:bg-raised text-muted text-xs py-2.5 rounded-full transition-colors font-medium",M={routine:1,seconds:0,index:-1,phase:null,endsAt:0,done:new Set,tick:null,wakeLock:null},Th=n=>`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`,Ap=()=>BI[M.routine],Sp=()=>Math.max(0,Math.ceil((M.endsAt-Date.now())/1e3));async function Qi(n){try{n&&!M.wakeLock&&navigator.wakeLock?(M.wakeLock=await navigator.wakeLock.request("screen"),M.wakeLock.addEventListener("release",()=>M.wakeLock=null)):!n&&M.wakeLock&&(await M.wakeLock.release(),M.wakeLock=null)}catch{}}function Ea(n,e,t){M.phase=n,M.index=e,M.endsAt=Date.now()+t*1e3,clearInterval(M.tick),M.tick=setInterval(OT,250),as()}function OT(){var n;if(Sp()>0){Pp();return}if(M.phase==="work"){if(M.done.add(M.index),(n=navigator.vibrate)==null||n.call(navigator,[200,100,200]),M.index+1>=Ap().length){MT();return}Ea("gap",M.index+1,DT)}else M.phase==="gap"&&Ea("work",M.index,M.seconds)}function Rp(n){M.seconds||(M.seconds=NT);for(const e of[...M.done])e>=n&&M.done.delete(e);Qi(!0),Ea("work",n,M.seconds)}function MT(){clearInterval(M.tick),M.phase="done",M.index=-1,Qi(!1),as()}function Cp(){clearInterval(M.tick),M.phase=null,M.index=-1,M.done.clear(),Qi(!1),as()}function Pp(){const n=Sp(),e=document.getElementById("flex-row-timer");e&&(e.textContent=M.phase==="gap"?`Next in ${n}`:Th(n));const t=document.getElementById("flex-timer-display");(M.phase==="work"||M.phase==="gap")&&(t.textContent=M.phase==="gap"?`00:0${n}`:Th(n),t.className=`text-3xl font-mono font-light ${M.phase==="work"?"text-accent":"text-subtle"} ${M.phase==="work"&&n<=5?"animate-pulse":""}`)}function as(){var i,a;const n=M.phase==="work"||M.phase==="gap",e=Ap();document.getElementById("btn-flex-set-1").className=M.routine===1?wh:Ih,document.getElementById("btn-flex-set-2").className=M.routine===2?wh:Ih,document.getElementById("flex-set-title").textContent=`Routine ${M.routine}`,document.querySelectorAll(".flex-timer-btn").forEach(c=>{c.className=Number(c.dataset.time)===M.seconds?VT:LT}),document.getElementById("flex-timer-cancel").classList.toggle("hidden",!n);const t=document.getElementById("flex-timer-status"),r=document.getElementById("flex-timer-display");n?(t.textContent=M.phase==="gap"?`Get ready: ${e[M.index]}`:`${M.index+1} / ${e.length} · ${e[M.index]}`,t.className="text-[10px] text-accent font-medium mt-0.5 truncate max-w-[12rem]"):M.phase==="done"?(t.textContent="Routine complete",t.className="text-[10px] text-accent font-semibold mt-0.5",r.textContent="00:00",r.className="text-3xl font-mono text-muted font-light"):(t.textContent="Pick a time, or tap an exercise",t.className="text-[10px] text-subtle mt-0.5",r.textContent="00:00",r.className="text-3xl font-mono text-muted font-light");const s=document.getElementById("flex-list");s.innerHTML="",e.forEach((c,u)=>{const d=n&&u===M.index,f=M.done.has(u),m=document.createElement("button");m.type="button",m.className=`w-full flex items-center gap-4 py-3 px-2 -mx-2 text-left border-b last:border-0 transition-colors ${d?`rounded-xl border-transparent ${M.phase==="work"?"bg-accent/10":"bg-input"}`:"border-line-soft"}`,m.setAttribute("aria-label",`Start timer from ${c}`);const g=document.createElement("span");g.className=`text-[10px] font-mono w-4 shrink-0 ${d?"text-accent":"text-faint"}`,g.textContent=u+1;const A=document.createElement("span");if(A.className=`flex-1 min-w-0 text-sm font-medium ${d?"text-fg":f?"text-faint line-through decoration-1":"text-fg2"}`,A.textContent=c,m.append(g,A),d){const C=document.createElement("span");C.id="flex-row-timer",C.className=`shrink-0 font-semibold ${M.phase==="work"?"font-mono text-sm text-accent":"text-xs text-subtle"}`,m.append(C)}else if(f){const C=document.createElement("i");C.className="fa-solid fa-check shrink-0 text-accent text-xs",m.append(C)}m.addEventListener("click",()=>Rp(u)),s.appendChild(m)}),n&&(Pp(),(a=(i=document.getElementById("flex-row-timer"))==null?void 0:i.closest("button"))==null||a.scrollIntoView({block:"nearest",behavior:"smooth"}))}function bh(n){M.routine!==n&&(Cp(),M.routine=n,as())}function FT(){document.getElementById("btn-flex-set-1").addEventListener("click",()=>bh(1)),document.getElementById("btn-flex-set-2").addEventListener("click",()=>bh(2)),document.querySelectorAll(".flex-timer-btn").forEach(n=>n.addEventListener("click",()=>{M.seconds=Number(n.dataset.time),Rp(0)})),document.getElementById("flex-timer-cancel").addEventListener("click",Cp),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(M.phase==="work"||M.phase==="gap")&&Qi(!0)}),as()}jI(()=>{ET(),qI(),dp(),cT()});KI();QI();JI();RT();IT();CT();vT();kT();FT();fm({immediate:!0});
