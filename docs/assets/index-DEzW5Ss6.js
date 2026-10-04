(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Tp="modulepreload",bp=function(n){return"/reptrack/"+n},al={},rh=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(t.map(d=>{if(d=bp(d),d in al)return;al[d]=!0;const f=d.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Tp,f||(g.as="script"),g.crossOrigin="",g.href=d,u&&g.setAttribute("nonce",u),document.head.appendChild(g),f)return new Promise((w,R)=>{g.addEventListener("load",w),g.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};function Ap(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:a}=n;let c,u;const d=async(m=!0)=>{await u};async function f(){if("serviceWorker"in navigator){if(c=await rh(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/reptrack/sw.js",{scope:"/reptrack/",type:"classic"})).catch(m=>{a==null||a(m)}),!c)return;c.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),c.addEventListener("installed",m=>{m.isUpdate||r==null||r()}),c.register({immediate:e}).then(m=>{i?i("/reptrack/sw.js",m):s==null||s(m)}).catch(m=>{a==null||a(m)})}}return u=f(),d}const Sp=()=>{};var cl={};/**
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
 */const sh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Rp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let g=(c&15)<<2|d>>6,w=d&63;u||(w=64,a||(g=64)),r.push(t[f],t[m],t[g],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new Cp;const g=i<<2|c>>4;if(r.push(g),d!==64){const w=c<<4&240|d>>2;if(r.push(w),m!==64){const R=d<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pp=function(n){const e=sh(n);return ih.encodeByteArray(e,!0)},Fs=function(n){return Pp(n).replace(/\./g,"")},oh=function(n){try{return ih.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xp=()=>kp().__FIREBASE_DEFAULTS__,Dp=()=>{if(typeof process>"u"||typeof cl>"u")return;const n=cl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Np=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&oh(n[1]);return e&&JSON.parse(e)},li=()=>{try{return Sp()||xp()||Dp()||Np()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ah=n=>{var e,t;return(t=(e=li())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Vp=n=>{const e=ah(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ch=()=>{var n;return(n=li())===null||n===void 0?void 0:n.config},lh=n=>{var e;return(e=li())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Lp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Un(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function uh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Op(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fs(JSON.stringify(t)),Fs(JSON.stringify(a)),""].join(".")}const vr={};function Mp(){const n={prod:[],emulator:[]};for(const e of Object.keys(vr))vr[e]?n.emulator.push(e):n.prod.push(e);return n}function Fp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ll=!1;function hh(n,e){if(typeof window>"u"||typeof document>"u"||!Un(window.location.host)||vr[n]===e||vr[n]||ll)return;vr[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Mp().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,w){g.setAttribute("width","24"),g.setAttribute("id",w),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{ll=!0,a()},g}function f(g,w){g.setAttribute("id",w),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=Fp(r),w=t("text"),R=document.getElementById(w)||document.createElement("span"),D=t("learnmore"),x=document.getElementById(D)||document.createElement("a"),V=t("preprendIcon"),M=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;c(j),f(x,D);const K=d();u(M,V),j.append(M,R,x,K),document.body.appendChild(j)}i?(R.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Up(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Bp(){var n;const e=(n=li())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $p(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wp(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hp(){return!Bp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zp(){try{return typeof indexedDB=="object"}catch{return!1}}function Gp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Kp="FirebaseError";class _t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Kp,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fr.prototype.create)}}class Fr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Qp(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new _t(s,c,r)}}function Qp(n,e){return n.replace(Jp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Jp=/\{\$([^}]+)}/g;function Yp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ul(i)&&ul(a)){if(!cn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ul(n){return n!==null&&typeof n=="object"}/**
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
 */function Ur(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Xp(n,e){const t=new Zp(n,e);return t.subscribe.bind(t)}class Zp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");em(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ao),s.error===void 0&&(s.error=ao),s.complete===void 0&&(s.complete=ao);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function em(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ao(){}/**
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
 */function pe(n){return n&&n._delegate?n._delegate:n}class ln{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class tm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Lp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rm(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nm(n){return n===Zt?void 0:n}function rm(n){return n.instantiationMode==="EAGER"}/**
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
 */class sm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const im={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},om=H.INFO,am={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},cm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=am[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sa{constructor(e){this.name=e,this._logLevel=om,this._logHandler=cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?im[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const lm=(n,e)=>e.some(t=>n instanceof t);let hl,dl;function um(){return hl||(hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hm(){return dl||(dl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dh=new WeakMap,bo=new WeakMap,fh=new WeakMap,co=new WeakMap,ia=new WeakMap;function dm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Dt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&dh.set(t,n)}).catch(()=>{}),ia.set(e,n),e}function fm(n){if(bo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});bo.set(n,e)}let Ao={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return bo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pm(n){Ao=n(Ao)}function mm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(lo(this),e,...t);return fh.set(r,e.sort?e.sort():[e]),Dt(r)}:hm().includes(n)?function(...e){return n.apply(lo(this),e),Dt(dh.get(this))}:function(...e){return Dt(n.apply(lo(this),e))}}function gm(n){return typeof n=="function"?mm(n):(n instanceof IDBTransaction&&fm(n),lm(n,um())?new Proxy(n,Ao):n)}function Dt(n){if(n instanceof IDBRequest)return dm(n);if(co.has(n))return co.get(n);const e=gm(n);return e!==n&&(co.set(n,e),ia.set(e,n)),e}const lo=n=>ia.get(n);function _m(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Dt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Dt(a.result),u.oldVersion,u.newVersion,Dt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const ym=["get","getKey","getAll","getAllKeys","count"],vm=["put","add","delete","clear"],uo=new Map;function fl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(uo.get(e))return uo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=vm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ym.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return uo.set(e,i),i}pm(n=>({...n,get:(e,t,r)=>fl(e,t)||n.get(e,t,r),has:(e,t)=>!!fl(e,t)||n.has(e,t)}));/**
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
 */class Em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function wm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const So="@firebase/app",pl="0.13.2";/**
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
 */const dt=new sa("@firebase/app"),Im="@firebase/app-compat",Tm="@firebase/analytics-compat",bm="@firebase/analytics",Am="@firebase/app-check-compat",Sm="@firebase/app-check",Rm="@firebase/auth",Cm="@firebase/auth-compat",Pm="@firebase/database",km="@firebase/data-connect",xm="@firebase/database-compat",Dm="@firebase/functions",Nm="@firebase/functions-compat",Vm="@firebase/installations",Lm="@firebase/installations-compat",Om="@firebase/messaging",Mm="@firebase/messaging-compat",Fm="@firebase/performance",Um="@firebase/performance-compat",Bm="@firebase/remote-config",$m="@firebase/remote-config-compat",jm="@firebase/storage",qm="@firebase/storage-compat",Wm="@firebase/firestore",Hm="@firebase/ai",zm="@firebase/firestore-compat",Gm="firebase",Km="11.10.0";/**
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
 */const Ro="[DEFAULT]",Qm={[So]:"fire-core",[Im]:"fire-core-compat",[bm]:"fire-analytics",[Tm]:"fire-analytics-compat",[Sm]:"fire-app-check",[Am]:"fire-app-check-compat",[Rm]:"fire-auth",[Cm]:"fire-auth-compat",[Pm]:"fire-rtdb",[km]:"fire-data-connect",[xm]:"fire-rtdb-compat",[Dm]:"fire-fn",[Nm]:"fire-fn-compat",[Vm]:"fire-iid",[Lm]:"fire-iid-compat",[Om]:"fire-fcm",[Mm]:"fire-fcm-compat",[Fm]:"fire-perf",[Um]:"fire-perf-compat",[Bm]:"fire-rc",[$m]:"fire-rc-compat",[jm]:"fire-gcs",[qm]:"fire-gcs-compat",[Wm]:"fire-fst",[zm]:"fire-fst-compat",[Hm]:"fire-vertex","fire-js":"fire-js",[Gm]:"fire-js-all"};/**
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
 */const Us=new Map,Jm=new Map,Co=new Map;function ml(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nn(n){const e=n.name;if(Co.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;Co.set(e,n);for(const t of Us.values())ml(t,n);for(const t of Jm.values())ml(t,n);return!0}function oa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ue(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ym={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new Fr("app","Firebase",Ym);/**
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
 */class Xm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const Bn=Km;function ph(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ro,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});if(t||(t=ch()),!t)throw Nt.create("no-options");const i=Us.get(s);if(i){if(cn(t,i.options)&&cn(r,i.config))return i;throw Nt.create("duplicate-app",{appName:s})}const a=new sm(s);for(const u of Co.values())a.addComponent(u);const c=new Xm(t,r,a);return Us.set(s,c),c}function mh(n=Ro){const e=Us.get(n);if(!e&&n===Ro&&ch())return ph();if(!e)throw Nt.create("no-app",{appName:n});return e}function Vt(n,e,t){var r;let s=(r=Qm[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(c.join(" "));return}Nn(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Zm="firebase-heartbeat-database",eg=1,Rr="firebase-heartbeat-store";let ho=null;function gh(){return ho||(ho=_m(Zm,eg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Rr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nt.create("idb-open",{originalErrorMessage:n.message})})),ho}async function tg(n){try{const t=(await gh()).transaction(Rr),r=await t.objectStore(Rr).get(_h(n));return await t.done,r}catch(e){if(e instanceof _t)dt.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function gl(n,e){try{const r=(await gh()).transaction(Rr,"readwrite");await r.objectStore(Rr).put(e,_h(n)),await r.done}catch(t){if(t instanceof _t)dt.warn(t.message);else{const r=Nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(r.message)}}}function _h(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ng=1024,rg=30;class sg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new og(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_l();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>rg){const a=ag(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_l(),{heartbeatsToSend:r,unsentEntries:s}=ig(this._heartbeatsCache.heartbeats),i=Fs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return dt.warn(t),""}}}function _l(){return new Date().toISOString().substring(0,10)}function ig(n,e=ng){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),yl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),yl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class og{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zp()?Gp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yl(n){return Fs(JSON.stringify({version:2,heartbeats:n})).length}function ag(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function cg(n){Nn(new ln("platform-logger",e=>new Em(e),"PRIVATE")),Nn(new ln("heartbeat",e=>new sg(e),"PRIVATE")),Vt(So,pl,n),Vt(So,pl,"esm2017"),Vt("fire-js","")}cg("");function aa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function yh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lg=yh,vh=new Fr("auth","Firebase",yh());/**
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
 */const Bs=new sa("@firebase/auth");function ug(n,...e){Bs.logLevel<=H.WARN&&Bs.warn(`Auth (${Bn}): ${n}`,...e)}function Rs(n,...e){Bs.logLevel<=H.ERROR&&Bs.error(`Auth (${Bn}): ${n}`,...e)}/**
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
 */function ze(n,...e){throw ca(n,...e)}function Je(n,...e){return ca(n,...e)}function Eh(n,e,t){const r=Object.assign(Object.assign({},lg()),{[e]:t});return new Fr("auth","Firebase",r).create(e,{appName:n.name})}function lt(n){return Eh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ca(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return vh.create(n,...e)}function U(n,e,...t){if(!n)throw ca(e,...t)}function at(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rs(e),new Error(e)}function ft(n,e){n||at(e)}/**
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
 */function Po(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hg(){return vl()==="http:"||vl()==="https:"}function vl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function dg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hg()||jp()||"connection"in navigator)?navigator.onLine:!0}function fg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Br{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=Up()||qp()}get(){return dg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function la(n,e){ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gg=new Br(3e4,6e4);function yt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function vt(n,e,t,r,s={}){return Ih(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ur(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return $p()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Un(n.emulatorConfig.host)&&(d.credentials="include"),wh.fetch()(await Th(n,n.config.apiHost,t,c),d)})}async function Ih(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pg),e);try{const s=new yg(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw vs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw vs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw vs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Eh(n,f,d);ze(n,f)}}catch(s){if(s instanceof _t)throw s;ze(n,"network-request-failed",{message:String(s)})}}async function $r(n,e,t,r,s={}){const i=await vt(n,e,t,r,s);return"mfaPendingCredential"in i&&ze(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Th(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?la(n.config,s):`${n.config.apiScheme}://${s}`;return mg.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function _g(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),gg.get())})}}function vs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Je(n,e,r);return s.customData._tokenResponse=t,s}function El(n){return n!==void 0&&n.enterprise!==void 0}class vg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _g(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Eg(n,e){return vt(n,"GET","/v2/recaptchaConfig",yt(n,e))}/**
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
 */async function wg(n,e){return vt(n,"POST","/v1/accounts:delete",e)}async function $s(n,e){return vt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Er(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ig(n,e=!1){const t=pe(n),r=await t.getIdToken(e),s=ua(r);U(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Er(fo(s.auth_time)),issuedAtTime:Er(fo(s.iat)),expirationTime:Er(fo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fo(n){return Number(n)*1e3}function ua(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Rs("JWT malformed, contained fewer than 3 sections"),null;try{const s=oh(t);return s?JSON.parse(s):(Rs("Failed to decode base64 JWT payload"),null)}catch(s){return Rs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wl(n){const e=ua(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _t&&Tg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Tg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class bg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ko{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function js(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Cr(n,$s(t,{idToken:r}));U(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bh(i.providerUserInfo):[],c=Sg(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=u?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ko(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Ag(n){const e=pe(n);await js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sg(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bh(n){return n.map(e=>{var{providerId:t}=e,r=aa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Rg(n,e){const t=await Ih(n,{},async()=>{const r=Ur({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Th(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Un(n.emulatorConfig.host)&&(u.credentials="include"),wh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Cg(n,e){return vt(n,"POST","/v2/accounts:revokeToken",yt(n,e))}/**
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
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=wl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Rg(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Cn;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
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
 */function At(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class He{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=aa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ko(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Cr(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ig(this,e)}reload(){return Ag(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(lt(this.auth));const e=await this.getIdToken();return await Cr(this,wg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:K,isAnonymous:Me,providerData:ae,stsTokenManager:I}=t;U(j&&I,e,"internal-error");const _=Cn.fromJSON(this.name,I);U(typeof j=="string",e,"internal-error"),At(m,e.name),At(g,e.name),U(typeof K=="boolean",e,"internal-error"),U(typeof Me=="boolean",e,"internal-error"),At(w,e.name),At(R,e.name),At(D,e.name),At(x,e.name),At(V,e.name),At(M,e.name);const v=new He({uid:j,auth:e,email:g,emailVerified:K,displayName:m,isAnonymous:Me,photoURL:R,phoneNumber:w,tenantId:D,stsTokenManager:_,createdAt:V,lastLoginAt:M});return ae&&Array.isArray(ae)&&(v.providerData=ae.map(E=>Object.assign({},E))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Cn;s.updateFromServerResponse(t);const i=new He({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await js(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Cn;c.updateFromIdToken(r);const u=new He({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ko(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Il=new Map;function ct(n){ft(n instanceof Function,"Expected a class definition");let e=Il.get(n);return e?(ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Il.set(n,e),e)}/**
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
 */class Ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ah.type="NONE";const Tl=Ah;/**
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
 */function Cs(n,e,t){return`firebase:${n}:${e}:${t}`}class Pn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Cs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Cs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $s(this.auth,{idToken:e}).catch(()=>{});return t?He._fromGetAccountInfoResponse(this.auth,t,e):null}return He._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Pn(ct(Tl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||ct(Tl);const a=Cs(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){let m;if(typeof f=="string"){const g=await $s(e,{idToken:f}).catch(()=>{});if(!g)break;m=await He._fromGetAccountInfoResponse(e,g,f)}else m=He._fromJSON(e,f);d!==i&&(c=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Pn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Pn(i,e,r))}}/**
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
 */function bl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ph(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xh(e))return"Blackberry";if(Dh(e))return"Webos";if(Rh(e))return"Safari";if((e.includes("chrome/")||Ch(e))&&!e.includes("edge/"))return"Chrome";if(kh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sh(n=Ce()){return/firefox\//i.test(n)}function Rh(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ch(n=Ce()){return/crios\//i.test(n)}function Ph(n=Ce()){return/iemobile/i.test(n)}function kh(n=Ce()){return/android/i.test(n)}function xh(n=Ce()){return/blackberry/i.test(n)}function Dh(n=Ce()){return/webos/i.test(n)}function ha(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pg(n=Ce()){var e;return ha(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kg(){return Wp()&&document.documentMode===10}function Nh(n=Ce()){return ha(n)||kh(n)||Dh(n)||xh(n)||/windows phone/i.test(n)||Ph(n)}/**
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
 */function Vh(n,e=[]){let t;switch(n){case"Browser":t=bl(Ce());break;case"Worker":t=`${bl(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Bn}/${r}`}/**
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
 */class xg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Dg(n,e={}){return vt(n,"GET","/v2/passwordPolicy",yt(n,e))}/**
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
 */const Ng=6;class Vg{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Ng,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Lg{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Al(this),this.idTokenSubscription=new Al(this),this.beforeStateQueue=new xg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ct(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $s(this,{idToken:e}),r=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ue(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await js(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(lt(this));const t=e?pe(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dg(this),t=new Vg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ct(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ug(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Wt(n){return pe(n)}class Al{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xp(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ui={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Og(n){ui=n}function Lh(n){return ui.loadJS(n)}function Mg(){return ui.recaptchaEnterpriseScript}function Fg(){return ui.gapiScript}function Ug(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Bg{constructor(){this.enterprise=new $g}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $g{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jg="recaptcha-enterprise",Oh="NO_RECAPTCHA";class qg{constructor(e){this.type=jg,this.auth=Wt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Eg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new vg(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;El(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Oh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bg().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&El(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Mg();u.length!==0&&(u+=c),Lh(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Sl(n,e,t,r=!1,s=!1){const i=new qg(n);let a;if(s)a=Oh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function qs(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Sl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Sl(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function Wg(n,e){const t=oa(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(cn(i,e??{}))return s;ze(s,"already-initialized")}return t.initialize({options:e})}function Hg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zg(n,e,t){const r=Wt(n);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Mh(e),{host:a,port:c}=Gg(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(cn(d,r.config.emulator)&&cn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Un(a)?(uh(`${i}//${a}${u}`),hh("Auth",!0)):Kg()}function Mh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gg(n){const e=Mh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Rl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Rl(a)}}}function Rl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class da{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,t){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}async function Qg(n,e){return vt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Jg(n,e){return $r(n,"POST","/v1/accounts:signInWithPassword",yt(n,e))}async function Yg(n,e){return vt(n,"POST","/v1/accounts:sendOobCode",yt(n,e))}async function Xg(n,e){return Yg(n,e)}/**
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
 */async function Zg(n,e){return $r(n,"POST","/v1/accounts:signInWithEmailLink",yt(n,e))}async function e_(n,e){return $r(n,"POST","/v1/accounts:signInWithEmailLink",yt(n,e))}/**
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
 */class Pr extends da{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Pr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Pr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qs(e,t,"signInWithPassword",Jg);case"emailLink":return Zg(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qs(e,r,"signUpPassword",Qg);case"emailLink":return e_(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function kn(n,e){return $r(n,"POST","/v1/accounts:signInWithIdp",yt(n,e))}/**
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
 */const t_="http://localhost";class un extends da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=aa(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new un(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kn(e,t)}buildRequest(){const e={requestUri:t_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ur(t)}return e}}/**
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
 */function n_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r_(n){const e=dr(fr(n)).link,t=e?dr(fr(e)).deep_link_id:null,r=dr(fr(n)).deep_link_id;return(r?dr(fr(r)).link:null)||r||t||e||n}class fa{constructor(e){var t,r,s,i,a,c;const u=dr(fr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=n_((s=u.mode)!==null&&s!==void 0?s:null);U(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=r_(e);try{return new fa(t)}catch{return null}}}/**
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
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(e,t){return Pr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=fa.parseLink(t);return U(r,"argument-error"),Pr._fromEmailAndCode(e,r.code,r.tenantId)}}$n.PROVIDER_ID="password";$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Fh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends Fh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends jr{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class Ct extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return un._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ct.credential(t,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
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
 */class Pt extends jr{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
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
 */class kt extends jr{constructor(){super("twitter.com")}static credential(e,t){return un._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return kt.credential(t,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */async function s_(n,e){return $r(n,"POST","/v1/accounts:signUp",yt(n,e))}/**
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
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await He._fromIdTokenResponse(e,r,s),a=Cl(r);return new hn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Cl(r);return new hn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Cl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ws extends _t{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ws.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ws(e,t,r,s)}}function Uh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ws._fromErrorAndOperation(n,i,e,r):i})}async function i_(n,e,t=!1){const r=await Cr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hn._forOperation(n,"link",r)}/**
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
 */async function o_(n,e,t=!1){const{auth:r}=n;if(Ue(r.app))return Promise.reject(lt(r));const s="reauthenticate";try{const i=await Cr(n,Uh(r,s,e,n),t);U(i.idToken,r,"internal-error");const a=ua(i.idToken);U(a,r,"internal-error");const{sub:c}=a;return U(n.uid===c,r,"user-mismatch"),hn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),i}}/**
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
 */async function Bh(n,e,t=!1){if(Ue(n.app))return Promise.reject(lt(n));const r="signIn",s=await Uh(n,r,e),i=await hn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function a_(n,e){return Bh(Wt(n),e)}/**
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
 */async function $h(n){const e=Wt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function c_(n,e,t){const r=Wt(n);await qs(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Xg)}async function l_(n,e,t){if(Ue(n.app))return Promise.reject(lt(n));const r=Wt(n),a=await qs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",s_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&$h(n),u}),c=await hn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function u_(n,e,t){return Ue(n.app)?Promise.reject(lt(n)):a_(pe(n),$n.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$h(n),r})}function h_(n,e,t,r){return pe(n).onIdTokenChanged(e,t,r)}function d_(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}function f_(n,e,t,r){return pe(n).onAuthStateChanged(e,t,r)}function p_(n){return pe(n).signOut()}const Hs="__sak";/**
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
 */class jh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hs,"1"),this.storage.removeItem(Hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const m_=1e3,g_=10;class qh extends jh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);kg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,g_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},m_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qh.type="LOCAL";const __=qh;/**
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
 */class Wh extends jh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wh.type="SESSION";const Hh=Wh;/**
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
 */function y_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class hi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new hi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await y_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hi.receivers=[];/**
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
 */function pa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class v_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=pa("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ye(){return window}function E_(n){Ye().location.href=n}/**
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
 */function zh(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function w_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function T_(){return zh()?self:null}/**
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
 */const Gh="firebaseLocalStorageDb",b_=1,zs="firebaseLocalStorage",Kh="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function di(n,e){return n.transaction([zs],e?"readwrite":"readonly").objectStore(zs)}function A_(){const n=indexedDB.deleteDatabase(Gh);return new qr(n).toPromise()}function xo(){const n=indexedDB.open(Gh,b_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(zs,{keyPath:Kh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(zs)?e(r):(r.close(),await A_(),e(await xo()))})})}async function Pl(n,e,t){const r=di(n,!0).put({[Kh]:e,value:t});return new qr(r).toPromise()}async function S_(n,e){const t=di(n,!1).get(e),r=await new qr(t).toPromise();return r===void 0?null:r.value}function kl(n,e){const t=di(n,!0).delete(e);return new qr(t).toPromise()}const R_=800,C_=3;class Qh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>C_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hi._getInstance(T_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await w_(),!this.activeServiceWorker)return;this.sender=new v_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||I_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xo();return await Pl(e,Hs,"1"),await kl(e,Hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>S_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=di(s,!1).getAll();return new qr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qh.type="LOCAL";const P_=Qh;new Br(3e4,6e4);/**
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
 */function k_(n,e){return e?ct(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ma extends da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function x_(n){return Bh(n.auth,new ma(n),n.bypassAuthState)}function D_(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),o_(t,new ma(n),n.bypassAuthState)}async function N_(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),i_(t,new ma(n),n.bypassAuthState)}/**
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
 */class Jh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x_;case"linkViaPopup":case"linkViaRedirect":return N_;case"reauthViaPopup":case"reauthViaRedirect":return D_;default:ze(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const V_=new Br(2e3,1e4);class Sn extends Jh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,V_.get())};e()}}Sn.currentPopupAction=null;/**
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
 */const L_="pendingRedirect",Ps=new Map;class O_ extends Jh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ps.get(this.auth._key());if(!e){try{const r=await M_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ps.set(this.auth._key(),e)}return this.bypassAuthState||Ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M_(n,e){const t=B_(e),r=U_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function F_(n,e){Ps.set(n._key(),e)}function U_(n){return ct(n._redirectPersistence)}function B_(n){return Cs(L_,n.config.apiKey,n.name)}async function $_(n,e,t=!1){if(Ue(n.app))return Promise.reject(lt(n));const r=Wt(n),s=k_(r,e),a=await new O_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const j_=600*1e3;class q_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Yh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Je(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j_&&this.cachedEventUids.clear(),this.cachedEventUids.has(xl(e))}saveEventToCache(e){this.cachedEventUids.add(xl(e)),this.lastProcessedEventTime=Date.now()}}function xl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function W_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yh(n);default:return!1}}/**
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
 */async function H_(n,e={}){return vt(n,"GET","/v1/projects",e)}/**
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
 */const z_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,G_=/^https?/;async function K_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await H_(n);for(const t of e)try{if(Q_(t))return}catch{}ze(n,"unauthorized-domain")}function Q_(n){const e=Po(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!G_.test(t))return!1;if(z_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const J_=new Br(3e4,6e4);function Dl(){const n=Ye().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Y_(n){return new Promise((e,t)=>{var r,s,i;function a(){Dl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dl(),t(Je(n,"network-request-failed"))},timeout:J_.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)a();else{const c=Ug("iframefcb");return Ye()[c]=()=>{gapi.load?a():t(Je(n,"network-request-failed"))},Lh(`${Fg()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ks=null,e})}let ks=null;function X_(n){return ks=ks||Y_(n),ks}/**
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
 */const Z_=new Br(5e3,15e3),ey="__/auth/iframe",ty="emulator/auth/iframe",ny={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ry=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sy(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?la(e,ty):`https://${n.config.authDomain}/${ey}`,r={apiKey:e.apiKey,appName:n.name,v:Bn},s=ry.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ur(r).slice(1)}`}async function iy(n){const e=await X_(n),t=Ye().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:sy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ny,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Je(n,"network-request-failed"),c=Ye().setTimeout(()=>{i(a)},Z_.get());function u(){Ye().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const oy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ay=500,cy=600,ly="_blank",uy="http://localhost";class Nl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hy(n,e,t,r=ay,s=cy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},oy),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Ce().toLowerCase();t&&(c=Ch(d)?ly:t),Sh(d)&&(e=e||uy,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[w,R])=>`${g}${w}=${R},`,"");if(Pg(d)&&c!=="_self")return dy(e||"",c),new Nl(null);const m=window.open(e||"",c,f);U(m,n,"popup-blocked");try{m.focus()}catch{}return new Nl(m)}function dy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const fy="__/auth/handler",py="emulator/auth/handler",my=encodeURIComponent("fac");async function Vl(n,e,t,r,s,i){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Bn,eventId:s};if(e instanceof Fh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Yp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof jr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${my}=${encodeURIComponent(u)}`:"";return`${gy(n)}?${Ur(c).slice(1)}${d}`}function gy({config:n}){return n.emulator?la(n,py):`https://${n.authDomain}/${fy}`}/**
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
 */const po="webStorageSupport";class _y{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hh,this._completeRedirectFn=$_,this._overrideRedirectResult=F_}async _openPopup(e,t,r,s){var i;ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Vl(e,t,r,Po(),s);return hy(e,a,pa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Vl(e,t,r,Po(),s);return E_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await iy(e),r=new q_(e);return t.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(po,{type:po},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[po];a!==void 0&&t(!!a),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=K_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nh()||Rh()||ha()}}const yy=_y;var Ll="@firebase/auth",Ol="1.10.8";/**
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
 */class vy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ey(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wy(n){Nn(new ln("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vh(n)},d=new Lg(r,s,i,u);return Hg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new ln("auth-internal",e=>{const t=Wt(e.getProvider("auth").getImmediate());return(r=>new vy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Ll,Ol,Ey(n)),Vt(Ll,Ol,"esm2017")}/**
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
 */const Iy=300,Ty=lh("authIdTokenMaxAge")||Iy;let Ml=null;const by=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ty)return;const s=t==null?void 0:t.token;Ml!==s&&(Ml=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ay(n=mh()){const e=oa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Wg(n,{popupRedirectResolver:yy,persistence:[P_,__,Hh]}),r=lh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=by(i.toString());d_(t,a,()=>a(t.currentUser)),h_(t,c=>a(c))}}const s=ah("auth");return s&&zg(t,`http://${s}`),t}function Sy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Og({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Je("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Sy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wy("Browser");var Ry="firebase",Cy="11.10.0";/**
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
 */Vt(Ry,Cy,"app");var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lt,Xh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function v(){}v.prototype=_.prototype,I.D=_.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(E,T,A){for(var y=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)y[rt-2]=arguments[rt];return _.prototype[T].apply(E,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,v){v||(v=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(T=0;16>T;++T)E[T]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=I.g[0],v=I.g[1],T=I.g[2];var A=I.g[3],y=_+(A^v&(T^A))+E[0]+3614090360&4294967295;_=v+(y<<7&4294967295|y>>>25),y=A+(T^_&(v^T))+E[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(v^A&(_^v))+E[2]+606105819&4294967295,T=A+(y<<17&4294967295|y>>>15),y=v+(_^T&(A^_))+E[3]+3250441966&4294967295,v=T+(y<<22&4294967295|y>>>10),y=_+(A^v&(T^A))+E[4]+4118548399&4294967295,_=v+(y<<7&4294967295|y>>>25),y=A+(T^_&(v^T))+E[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(v^A&(_^v))+E[6]+2821735955&4294967295,T=A+(y<<17&4294967295|y>>>15),y=v+(_^T&(A^_))+E[7]+4249261313&4294967295,v=T+(y<<22&4294967295|y>>>10),y=_+(A^v&(T^A))+E[8]+1770035416&4294967295,_=v+(y<<7&4294967295|y>>>25),y=A+(T^_&(v^T))+E[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(v^A&(_^v))+E[10]+4294925233&4294967295,T=A+(y<<17&4294967295|y>>>15),y=v+(_^T&(A^_))+E[11]+2304563134&4294967295,v=T+(y<<22&4294967295|y>>>10),y=_+(A^v&(T^A))+E[12]+1804603682&4294967295,_=v+(y<<7&4294967295|y>>>25),y=A+(T^_&(v^T))+E[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(v^A&(_^v))+E[14]+2792965006&4294967295,T=A+(y<<17&4294967295|y>>>15),y=v+(_^T&(A^_))+E[15]+1236535329&4294967295,v=T+(y<<22&4294967295|y>>>10),y=_+(T^A&(v^T))+E[1]+4129170786&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^T&(_^v))+E[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^v&(A^_))+E[11]+643717713&4294967295,T=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(T^A))+E[0]+3921069994&4294967295,v=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(v^T))+E[5]+3593408605&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^T&(_^v))+E[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^v&(A^_))+E[15]+3634488961&4294967295,T=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(T^A))+E[4]+3889429448&4294967295,v=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(v^T))+E[9]+568446438&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^T&(_^v))+E[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^v&(A^_))+E[3]+4107603335&4294967295,T=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(T^A))+E[8]+1163531501&4294967295,v=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(v^T))+E[13]+2850285829&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^T&(_^v))+E[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^v&(A^_))+E[7]+1735328473&4294967295,T=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(T^A))+E[12]+2368359562&4294967295,v=T+(y<<20&4294967295|y>>>12),y=_+(v^T^A)+E[5]+4294588738&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^T)+E[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^v)+E[11]+1839030562&4294967295,T=A+(y<<16&4294967295|y>>>16),y=v+(T^A^_)+E[14]+4259657740&4294967295,v=T+(y<<23&4294967295|y>>>9),y=_+(v^T^A)+E[1]+2763975236&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^T)+E[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^v)+E[7]+4139469664&4294967295,T=A+(y<<16&4294967295|y>>>16),y=v+(T^A^_)+E[10]+3200236656&4294967295,v=T+(y<<23&4294967295|y>>>9),y=_+(v^T^A)+E[13]+681279174&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^T)+E[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^v)+E[3]+3572445317&4294967295,T=A+(y<<16&4294967295|y>>>16),y=v+(T^A^_)+E[6]+76029189&4294967295,v=T+(y<<23&4294967295|y>>>9),y=_+(v^T^A)+E[9]+3654602809&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^T)+E[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^v)+E[15]+530742520&4294967295,T=A+(y<<16&4294967295|y>>>16),y=v+(T^A^_)+E[2]+3299628645&4294967295,v=T+(y<<23&4294967295|y>>>9),y=_+(T^(v|~A))+E[0]+4096336452&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~T))+E[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~v))+E[14]+2878612391&4294967295,T=A+(y<<15&4294967295|y>>>17),y=v+(A^(T|~_))+E[5]+4237533241&4294967295,v=T+(y<<21&4294967295|y>>>11),y=_+(T^(v|~A))+E[12]+1700485571&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~T))+E[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~v))+E[10]+4293915773&4294967295,T=A+(y<<15&4294967295|y>>>17),y=v+(A^(T|~_))+E[1]+2240044497&4294967295,v=T+(y<<21&4294967295|y>>>11),y=_+(T^(v|~A))+E[8]+1873313359&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~T))+E[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~v))+E[6]+2734768916&4294967295,T=A+(y<<15&4294967295|y>>>17),y=v+(A^(T|~_))+E[13]+1309151649&4294967295,v=T+(y<<21&4294967295|y>>>11),y=_+(T^(v|~A))+E[4]+4149444226&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~T))+E[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~v))+E[2]+718787259&4294967295,T=A+(y<<15&4294967295|y>>>17),y=v+(A^(T|~_))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var v=_-this.blockSize,E=this.B,T=this.h,A=0;A<_;){if(T==0)for(;A<=v;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(E[T++]=I.charCodeAt(A++),T==this.blockSize){s(this,E),T=0;break}}else for(;A<_;)if(E[T++]=I[A++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var v=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=v&255,v/=256;for(this.u(I),I=Array(16),_=v=0;4>_;++_)for(var E=0;32>E;E+=8)I[v++]=this.g[_]>>>E&255;return I};function i(I,_){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=_(I)}function a(I,_){this.h=_;for(var v=[],E=!0,T=I.length-1;0<=T;T--){var A=I[T]|0;E&&A==_||(v[T]=A,E=!1)}this.g=v}var c={};function u(I){return-128<=I&&128>I?i(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return x(d(-I));for(var _=[],v=1,E=0;I>=v;E++)_[E]=I/v|0,v*=4294967296;return new a(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return x(f(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(_,8)),E=m,T=0;T<I.length;T+=8){var A=Math.min(8,I.length-T),y=parseInt(I.substring(T,T+A),_);8>A?(A=d(Math.pow(_,A)),E=E.j(A).add(d(y))):(E=E.j(v),E=E.add(d(y)))}return E}var m=u(0),g=u(1),w=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-x(this).m();for(var I=0,_=1,v=0;v<this.g.length;v++){var E=this.i(v);I+=(0<=E?E:4294967296+E)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(D(this))return"-"+x(this).toString(I);for(var _=d(Math.pow(I,6)),v=this,E="";;){var T=K(v,_).g;v=V(v,T.j(_));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=T,R(v))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function D(I){return I.h==-1}n.l=function(I){return I=V(this,I),D(I)?-1:R(I)?0:1};function x(I){for(var _=I.g.length,v=[],E=0;E<_;E++)v[E]=~I.g[E];return new a(v,~I.h).add(g)}n.abs=function(){return D(this)?x(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],E=0,T=0;T<=_;T++){var A=E+(this.i(T)&65535)+(I.i(T)&65535),y=(A>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=y>>>16,A&=65535,y&=65535,v[T]=y<<16|A}return new a(v,v[v.length-1]&-2147483648?-1:0)};function V(I,_){return I.add(x(_))}n.j=function(I){if(R(this)||R(I))return m;if(D(this))return D(I)?x(this).j(x(I)):x(x(this).j(I));if(D(I))return x(this.j(x(I)));if(0>this.l(w)&&0>I.l(w))return d(this.m()*I.m());for(var _=this.g.length+I.g.length,v=[],E=0;E<2*_;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var A=this.i(E)>>>16,y=this.i(E)&65535,rt=I.i(T)>>>16,Kn=I.i(T)&65535;v[2*E+2*T]+=y*Kn,M(v,2*E+2*T),v[2*E+2*T+1]+=A*Kn,M(v,2*E+2*T+1),v[2*E+2*T+1]+=y*rt,M(v,2*E+2*T+1),v[2*E+2*T+2]+=A*rt,M(v,2*E+2*T+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new a(v,0)};function M(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function j(I,_){this.g=I,this.h=_}function K(I,_){if(R(_))throw Error("division by zero");if(R(I))return new j(m,m);if(D(I))return _=K(x(I),_),new j(x(_.g),x(_.h));if(D(_))return _=K(I,x(_)),new j(x(_.g),_.h);if(30<I.g.length){if(D(I)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,E=_;0>=E.l(I);)v=Me(v),E=Me(E);var T=ae(v,1),A=ae(E,1);for(E=ae(E,2),v=ae(v,2);!R(E);){var y=A.add(E);0>=y.l(I)&&(T=T.add(v),A=y),E=ae(E,1),v=ae(v,1)}return _=V(I,T.j(_)),new j(T,_)}for(T=m;0<=I.l(_);){for(v=Math.max(1,Math.floor(I.m()/_.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(v),y=A.j(_);D(y)||0<y.l(I);)v-=E,A=d(v),y=A.j(_);R(A)&&(A=g),T=T.add(A),I=V(I,y)}return new j(T,I)}n.A=function(I){return K(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)&I.i(E);return new a(v,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)|I.i(E);return new a(v,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)^I.i(E);return new a(v,this.h^I.h)};function Me(I){for(var _=I.g.length+1,v=[],E=0;E<_;E++)v[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(v,I.h)}function ae(I,_){var v=_>>5;_%=32;for(var E=I.g.length-v,T=[],A=0;A<E;A++)T[A]=0<_?I.i(A+v)>>>_|I.i(A+v+1)<<32-_:I.i(A+v);return new a(T,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Xh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Lt=a}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zh,pr,ed,xs,Do,td,nd,rd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Es=="object"&&Es];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var S=h++;return{value:l(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function m(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(l,b)}}return function(){return o.apply(l,arguments)}}function g(o,l,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function w(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function R(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,S){for(var N=Array(arguments.length-2),X=2;X<arguments.length;X++)N[X-2]=arguments[X];return l.prototype[b].apply(p,N)}}function D(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function x(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,S=p.length||0;o.length=b+S;for(let N=0;N<S;N++)o[b+N]=p[N]}else o.push(p)}}class V{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var Me=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ae(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function I(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function _(o){const l={};for(const h in o)l[h]=o[h];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let S=0;S<v.length;S++)h=v[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function T(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Mi;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class rt{constructor(){this.h=this.g=null}add(l,h){const p=Kn.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Kn=new V(()=>new jf,o=>o.reset());class jf{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Qn,Jn=!1,Mi=new rt,ac=()=>{const o=c.Promise.resolve(void 0);Qn=()=>{o.then(qf)}};var qf=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){A(h)}var l=Kn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Jn=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Wf=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o})();function Yn(o,l){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Me){e:{try{K(l.nodeName);var b=!0;break e}catch{}b=!1}b||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Hf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Yn.aa.h.call(this)}}R(Yn,Ee);var Hf={2:"touch",3:"pen",4:"mouse"};Yn.prototype.h=function(){Yn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var es="closure_listenable_"+(1e6*Math.random()|0),zf=0;function Gf(o,l,h,p,b){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=b,this.key=++zf,this.da=this.fa=!1}function ts(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ns(o){this.src=o,this.g={},this.h=0}ns.prototype.add=function(o,l,h,p,b){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var N=Ui(o,l,p,b);return-1<N?(l=o[N],h||(l.fa=!1)):(l=new Gf(l,this.src,S,!!p,b),l.fa=h,o.push(l)),l};function Fi(o,l){var h=l.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=b)&&Array.prototype.splice.call(p,b,1),S&&(ts(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ui(o,l,h,p){for(var b=0;b<o.length;++b){var S=o[b];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return b}return-1}var Bi="closure_lm_"+(1e6*Math.random()|0),$i={};function cc(o,l,h,p,b){if(Array.isArray(l)){for(var S=0;S<l.length;S++)cc(o,l[S],h,p,b);return null}return h=hc(h),o&&o[es]?o.K(l,h,d(p)?!!p.capture:!1,b):Kf(o,l,h,!1,p,b)}function Kf(o,l,h,p,b,S){if(!l)throw Error("Invalid event type");var N=d(b)?!!b.capture:!!b,X=qi(o);if(X||(o[Bi]=X=new ns(o)),h=X.add(l,h,p,N,S),h.proxy)return h;if(p=Qf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Wf||(b=N),b===void 0&&(b=!1),o.addEventListener(l.toString(),p,b);else if(o.attachEvent)o.attachEvent(uc(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Qf(){function o(h){return l.call(o.src,o.listener,h)}const l=Jf;return o}function lc(o,l,h,p,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)lc(o,l[S],h,p,b);else p=d(p)?!!p.capture:!!p,h=hc(h),o&&o[es]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],h=Ui(S,h,p,b),-1<h&&(ts(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=qi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ui(l,h,p,b)),(h=-1<o?l[o]:null)&&ji(h))}function ji(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[es])Fi(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(uc(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=qi(l))?(Fi(h,o),h.h==0&&(h.src=null,l[Bi]=null)):ts(o)}}}function uc(o){return o in $i?$i[o]:$i[o]="on"+o}function Jf(o,l){if(o.da)o=!0;else{l=new Yn(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&ji(o),o=h.call(p,l)}return o}function qi(o){return o=o[Bi],o instanceof ns?o:null}var Wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function hc(o){return typeof o=="function"?o:(o[Wi]||(o[Wi]=function(l){return o.handleEvent(l)}),o[Wi])}function we(){wt.call(this),this.i=new ns(this),this.M=this,this.F=null}R(we,wt),we.prototype[es]=!0,we.prototype.removeEventListener=function(o,l,h,p){lc(this,o,l,h,p)};function Pe(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new Ee(l,o);else if(l instanceof Ee)l.target=l.target||o;else{var b=l;l=new Ee(p,o),E(l,b)}if(b=!0,h)for(var S=h.length-1;0<=S;S--){var N=l.g=h[S];b=rs(N,p,!0,l)&&b}if(N=l.g=o,b=rs(N,p,!0,l)&&b,b=rs(N,p,!1,l)&&b,h)for(S=0;S<h.length;S++)N=l.g=h[S],b=rs(N,p,!1,l)&&b}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)ts(h[p]);delete o.g[l],o.h--}}this.F=null},we.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},we.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function rs(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,S=0;S<l.length;++S){var N=l[S];if(N&&!N.da&&N.capture==h){var X=N.listener,ge=N.ha||N.src;N.fa&&Fi(o.i,N),b=X.call(ge,p)!==!1&&b}}return b&&!p.defaultPrevented}function dc(o,l,h){if(typeof o=="function")h&&(o=g(o,h));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function fc(o){o.g=dc(()=>{o.g=null,o.i&&(o.i=!1,fc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Yf extends wt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:fc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xn(o){wt.call(this),this.h=o,this.g={}}R(Xn,wt);var pc=[];function mc(o){ae(o.g,function(l,h){this.g.hasOwnProperty(h)&&ji(l)},o),o.g={}}Xn.prototype.N=function(){Xn.aa.N.call(this),mc(this)},Xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hi=c.JSON.stringify,Xf=c.JSON.parse,Zf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function zi(){}zi.prototype.h=null;function gc(o){return o.h||(o.h=o.i())}function _c(){}var Zn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gi(){Ee.call(this,"d")}R(Gi,Ee);function Ki(){Ee.call(this,"c")}R(Ki,Ee);var Kt={},yc=null;function ss(){return yc=yc||new we}Kt.La="serverreachability";function vc(o){Ee.call(this,Kt.La,o)}R(vc,Ee);function er(o){const l=ss();Pe(l,new vc(l))}Kt.STAT_EVENT="statevent";function Ec(o,l){Ee.call(this,Kt.STAT_EVENT,o),this.stat=l}R(Ec,Ee);function ke(o){const l=ss();Pe(l,new Ec(l,o))}Kt.Ma="timingevent";function wc(o,l){Ee.call(this,Kt.Ma,o),this.size=l}R(wc,Ee);function tr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function nr(){this.g=!0}nr.prototype.xa=function(){this.g=!1};function ep(o,l,h,p,b,S){o.info(function(){if(o.g)if(S)for(var N="",X=S.split("&"),ge=0;ge<X.length;ge++){var J=X[ge].split("=");if(1<J.length){var Ie=J[0];J=J[1];var Te=Ie.split("_");N=2<=Te.length&&Te[1]=="type"?N+(Ie+"="+J+"&"):N+(Ie+"=redacted&")}}else N=null;else N=S;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+h+`
`+N})}function tp(o,l,h,p,b,S,N){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+h+`
`+S+" "+N})}function yn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+rp(o,h)+(p?" "+p:"")})}function np(o,l){o.info(function(){return"TIMEOUT: "+l})}nr.prototype.info=function(){};function rp(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var N=1;N<b.length;N++)b[N]=""}}}}return Hi(h)}catch{return l}}var is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ic={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qi;function os(){}R(os,zi),os.prototype.g=function(){return new XMLHttpRequest},os.prototype.i=function(){return{}},Qi=new os;function It(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new Xn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tc}function Tc(){this.i=null,this.g="",this.h=!1}var bc={},Ji={};function Yi(o,l,h){o.L=1,o.v=us(st(l)),o.m=h,o.P=!0,Ac(o,null)}function Ac(o,l){o.F=Date.now(),as(o),o.A=st(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Uc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Tc,o.g=rl(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Yf(g(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(pc[0]=b.toString()),b=pc);for(var S=0;S<b.length;S++){var N=cc(h,b[S],p||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),er(),ep(o.i,o.u,o.A,o.l,o.R,o.m)}It.prototype.ca=function(o){o=o.target;const l=this.M;l&&it(o)==3?l.j():this.Y(o)},It.prototype.Y=function(o){try{if(o==this.g)e:{const Te=it(this.g);var l=this.g.Ba();const wn=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||zc(this.g)))){this.J||Te!=4||l==7||(l==8||0>=wn?er(3):er(2)),Xi(this);var h=this.g.Z();this.X=h;t:if(Sc(this)){var p=zc(this.g);o="";var b=p.length,S=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),rr(this);var N="";break t}this.h.i=new c.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(S&&l==b-1)});p.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,tp(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var X,ge=this.g;if((X=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(X)){var J=X;break t}}J=null}if(h=J)yn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zi(this,h);else{this.o=!1,this.s=3,ke(12),Qt(this),rr(this);break e}}if(this.P){h=!0;let We;for(;!this.J&&this.C<N.length;)if(We=sp(this,N),We==Ji){Te==4&&(this.s=4,ke(14),h=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(We==bc){this.s=4,ke(15),yn(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else yn(this.i,this.l,We,null),Zi(this,We);if(Sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||N.length!=0||this.h.h||(this.s=1,ke(16),h=!1),this.o=this.o&&h,!h)yn(this.i,this.l,N,"[Invalid Chunked Response]"),Qt(this),rr(this);else if(0<N.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),io(Ie),Ie.M=!0,ke(11))}}else yn(this.i,this.l,N,null),Zi(this,N);Te==4&&Qt(this),this.o&&!this.J&&(Te==4?Zc(this.j,this):(this.o=!1,as(this)))}else wp(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Qt(this),rr(this)}}}catch{}finally{}};function Sc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function sp(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Ji:(h=Number(l.substring(h,p)),isNaN(h)?bc:(p+=1,p+h>l.length?Ji:(l=l.slice(p,p+h),o.C=p+h,l)))}It.prototype.cancel=function(){this.J=!0,Qt(this)};function as(o){o.S=Date.now()+o.I,Rc(o,o.I)}function Rc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=tr(g(o.ba,o),l)}function Xi(o){o.B&&(c.clearTimeout(o.B),o.B=null)}It.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(np(this.i,this.A),this.L!=2&&(er(),ke(17)),Qt(this),this.s=2,rr(this)):Rc(this,this.S-o)};function rr(o){o.j.G==0||o.J||Zc(o.j,o)}function Qt(o){Xi(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,mc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Zi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||eo(h.h,o))){if(!o.K&&eo(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)gs(h),ps(h);else break e;so(h),ke(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=tr(g(h.Za,h),6e3));if(1>=kc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Yt(h,11)}else if((o.K||h.g==o)&&gs(h),!M(l))for(b=h.Da.g.parse(l),l=0;l<b.length;l++){let J=b[l];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const Ie=J[3];Ie!=null&&(h.la=Ie,h.j.info("VER="+h.la));const Te=J[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const wn=J[5];wn!=null&&typeof wn=="number"&&0<wn&&(p=1.5*wn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const We=o.g;if(We){const ys=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ys){var S=p.h;S.g||ys.indexOf("spdy")==-1&&ys.indexOf("quic")==-1&&ys.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(to(S,S.h),S.h=null))}if(p.D){const oo=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;oo&&(p.ya=oo,ee(p.I,p.D,oo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var N=o;if(p.qa=nl(p,p.J?p.ia:null,p.W),N.K){xc(p.h,N);var X=N,ge=p.L;ge&&(X.I=ge),X.B&&(Xi(X),as(X)),p.g=N}else Yc(p);0<h.i.length&&ms(h)}else J[0]!="stop"&&J[0]!="close"||Yt(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Yt(h,7):ro(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}er(4)}catch{}}var ip=class{constructor(o,l){this.g=o,this.map=l}};function Cc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function kc(o){return o.h?1:o.g?o.g.size:0}function eo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function to(o,l){o.g?o.g.add(l):o.h=l}function xc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Cc.prototype.cancel=function(){if(this.i=Dc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Dc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return D(o.i)}function op(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function ap(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function Nc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=ap(o),p=op(o),b=p.length,S=0;S<b;S++)l.call(void 0,p[S],h&&h[S],o)}var Vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cp(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var S=o[h].substring(0,p);b=o[h].substring(p+1)}else S=o[h];l(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Jt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jt){this.h=o.h,cs(this,o.j),this.o=o.o,this.g=o.g,ls(this,o.s),this.l=o.l;var l=o.i,h=new or;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Lc(this,h),this.m=o.m}else o&&(l=String(o).match(Vc))?(this.h=!1,cs(this,l[1]||"",!0),this.o=sr(l[2]||""),this.g=sr(l[3]||"",!0),ls(this,l[4]),this.l=sr(l[5]||"",!0),Lc(this,l[6]||"",!0),this.m=sr(l[7]||"")):(this.h=!1,this.i=new or(null,this.h))}Jt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(ir(l,Oc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(ir(l,Oc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ir(h,h.charAt(0)=="/"?hp:up,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ir(h,fp)),o.join("")};function st(o){return new Jt(o)}function cs(o,l,h){o.j=h?sr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ls(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Lc(o,l,h){l instanceof or?(o.i=l,pp(o.i,o.h)):(h||(l=ir(l,dp)),o.i=new or(l,o.h))}function ee(o,l,h){o.i.set(l,h)}function us(o){return ee(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function sr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ir(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,lp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function lp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Oc=/[#\/\?@]/g,up=/[#\?:]/g,hp=/[#\?]/g,dp=/[#\?@]/g,fp=/#/g;function or(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Tt(o){o.g||(o.g=new Map,o.h=0,o.i&&cp(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=or.prototype,n.add=function(o,l){Tt(this),this.i=null,o=vn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Mc(o,l){Tt(o),l=vn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Fc(o,l){return Tt(o),l=vn(o,l),o.g.has(l)}n.forEach=function(o,l){Tt(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(l,b,p,this)},this)},this)},n.na=function(){Tt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const b=o[p];for(let S=0;S<b.length;S++)h.push(l[p])}return h},n.V=function(o){Tt(this);let l=[];if(typeof o=="string")Fc(this,o)&&(l=l.concat(this.g.get(vn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return Tt(this),this.i=null,o=vn(this,o),Fc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Uc(o,l,h){Mc(o,l),0<h.length&&(o.i=null,o.g.set(vn(o,l),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const S=encodeURIComponent(String(p)),N=this.V(p);for(p=0;p<N.length;p++){var b=S;N[p]!==""&&(b+="="+encodeURIComponent(String(N[p]))),o.push(b)}}return this.i=o.join("&")};function vn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function pp(o,l){l&&!o.j&&(Tt(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(Mc(this,p),Uc(this,b,h))},o)),o.j=l}function mp(o,l){const h=new nr;if(c.Image){const p=new Image;p.onload=w(bt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=w(bt,h,"TestLoadImage: error",!1,l,p),p.onabort=w(bt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=w(bt,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function gp(o,l){const h=new nr,p=new AbortController,b=setTimeout(()=>{p.abort(),bt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(b),S.ok?bt(h,"TestPingServer: ok",!0,l):bt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),bt(h,"TestPingServer: error",!1,l)})}function bt(o,l,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function _p(){this.g=new Zf}function yp(o,l,h){const p=h||"";try{Nc(o,function(b,S){let N=b;d(b)&&(N=Hi(b)),l.push(p+S+"="+encodeURIComponent(N))})}catch(b){throw l.push(p+"type="+encodeURIComponent("_badmap")),b}}function hs(o){this.l=o.Ub||null,this.j=o.eb||!1}R(hs,zi),hs.prototype.g=function(){return new ds(this.l,this.j)},hs.prototype.i=(function(o){return function(){return o}})({});function ds(o,l){we.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ds,we),n=ds.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,cr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ar(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,cr(this)),this.g&&(this.readyState=3,cr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ar(this):cr(this),this.readyState==3&&Bc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ar(this))},n.Qa=function(o){this.g&&(this.response=o,ar(this))},n.ga=function(){this.g&&ar(this)};function ar(o){o.readyState=4,o.l=null,o.j=null,o.v=null,cr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function cr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function $c(o){let l="";return ae(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function no(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=$c(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ee(o,l,h))}function re(o){we.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(re,we);var vp=/^https?$/i,Ep=["POST","PUT"];n=re.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qi.g(),this.v=this.o?gc(this.o):gc(Qi),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){jc(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ep,l,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of h)this.g.setRequestHeader(S,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hc(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){jc(this,S)}};function jc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,qc(o),fs(o)}function qc(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fs(this,!0)),re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wc(this):this.bb())},n.bb=function(){Wc(this)};function Wc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||it(o)!=4||o.Z()!=2)){if(o.u&&it(o)==4)dc(o.Ea,0,o);else if(Pe(o,"readystatechange"),it(o)==4){o.h=!1;try{const N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=N===0){var b=String(o.D).match(Vc)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!vp.test(b?b.toLowerCase():"")}h=p}if(h)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var S=2<it(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",qc(o)}}finally{fs(o)}}}}function fs(o,l){if(o.g){Hc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Pe(o,"ready");try{h.onreadystatechange=p}catch{}}}function Hc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function it(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<it(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Xf(l)}};function zc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function wp(o){const l={};o=(o.g&&2<=it(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var h=T(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[b]||[];l[b]=S,S.push(h)}I(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function lr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Gc(o){this.Aa=0,this.i=[],this.j=new nr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=lr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=lr("baseRetryDelayMs",5e3,o),this.cb=lr("retryDelaySeedMs",1e4,o),this.Wa=lr("forwardChannelMaxRetries",2,o),this.wa=lr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Cc(o&&o.concurrentRequestLimit),this.Da=new _p,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Gc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){ke(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=nl(this,null,this.W),ms(this)};function ro(o){if(Kc(o),o.G==3){var l=o.U++,h=st(o.I);if(ee(h,"SID",o.K),ee(h,"RID",l),ee(h,"TYPE","terminate"),ur(o,h),l=new It(o,o.j,l),l.L=2,l.v=us(st(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=rl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),as(l)}tl(o)}function ps(o){o.g&&(io(o),o.g.cancel(),o.g=null)}function Kc(o){ps(o),o.u&&(c.clearTimeout(o.u),o.u=null),gs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ms(o){if(!Pc(o.h)&&!o.s){o.s=!0;var l=o.Ga;Qn||ac(),Jn||(Qn(),Jn=!0),Mi.add(l,o),o.B=0}}function Ip(o,l){return kc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=tr(g(o.Ga,o,l),el(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new It(this,this.j,o);let S=this.o;if(this.S&&(S?(S=_(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Jc(this,b,l),h=st(this.I),ee(h,"RID",o),ee(h,"CVER",22),this.D&&ee(h,"X-HTTP-Session-Id",this.D),ur(this,h),S&&(this.O?l="headers="+encodeURIComponent(String($c(S)))+"&"+l:this.m&&no(h,this.m,S)),to(this.h,b),this.Ua&&ee(h,"TYPE","init"),this.P?(ee(h,"$req",l),ee(h,"SID","null"),b.T=!0,Yi(b,h,null)):Yi(b,h,l),this.G=2}}else this.G==3&&(o?Qc(this,o):this.i.length==0||Pc(this.h)||Qc(this))};function Qc(o,l){var h;l?h=l.l:h=o.U++;const p=st(o.I);ee(p,"SID",o.K),ee(p,"RID",h),ee(p,"AID",o.T),ur(o,p),o.m&&o.o&&no(p,o.m,o.o),h=new It(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Jc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),to(o.h,h),Yi(h,p,l)}function ur(o,l){o.H&&ae(o.H,function(h,p){ee(l,p,h)}),o.l&&Nc({},function(h,p){ee(l,p,h)})}function Jc(o,l,h){h=Math.min(o.i.length,h);var p=o.l?g(o.l.Na,o.l,o):null;e:{var b=o.i;let S=-1;for(;;){const N=["count="+h];S==-1?0<h?(S=b[0].g,N.push("ofs="+S)):S=0:N.push("ofs="+S);let X=!0;for(let ge=0;ge<h;ge++){let J=b[ge].g;const Ie=b[ge].map;if(J-=S,0>J)S=Math.max(0,b[ge].g-100),X=!1;else try{yp(Ie,N,"req"+J+"_")}catch{p&&p(Ie)}}if(X){p=N.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function Yc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Qn||ac(),Jn||(Qn(),Jn=!0),Mi.add(l,o),o.v=0}}function so(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=tr(g(o.Fa,o),el(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Xc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=tr(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),ps(this),Xc(this))};function io(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Xc(o){o.g=new It(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=st(o.qa);ee(l,"RID","rpc"),ee(l,"SID",o.K),ee(l,"AID",o.T),ee(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ee(l,"TO",o.ja),ee(l,"TYPE","xmlhttp"),ur(o,l),o.m&&o.o&&no(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=us(st(l)),h.m=null,h.P=!0,Ac(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ps(this),so(this),ke(19))};function gs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Zc(o,l){var h=null;if(o.g==l){gs(o),io(o),o.g=null;var p=2}else if(eo(o.h,l))h=l.D,xc(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var b=o.B;p=ss(),Pe(p,new wc(p,h)),ms(o)}else Yc(o);else if(b=l.s,b==3||b==0&&0<l.X||!(p==1&&Ip(o,l)||p==2&&so(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),b){case 1:Yt(o,5);break;case 4:Yt(o,10);break;case 3:Yt(o,6);break;default:Yt(o,2)}}}function el(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Yt(o,l){if(o.j.info("Error code "+l),l==2){var h=g(o.fb,o),p=o.Xa;const b=!p;p=new Jt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||cs(p,"https"),us(p),b?mp(p.toString(),h):gp(p.toString(),h)}else ke(2);o.G=0,o.l&&o.l.sa(l),tl(o),Kc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function tl(o){if(o.G=0,o.ka=[],o.l){const l=Dc(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function nl(o,l,h){var p=h instanceof Jt?st(h):new Jt(h);if(p.g!="")l&&(p.g=l+"."+p.g),ls(p,p.s);else{var b=c.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var S=new Jt(null);p&&cs(S,p),l&&(S.g=l),b&&ls(S,b),h&&(S.l=h),p=S}return h=o.D,l=o.ya,h&&l&&ee(p,h,l),ee(p,"VER",o.la),ur(o,p),p}function rl(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new re(new hs({eb:h})):new re(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sl(){}n=sl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _s(){}_s.prototype.g=function(o,l){return new Ve(o,l)};function Ve(o,l){we.call(this),this.g=new Gc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!M(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!M(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new En(this)}R(Ve,we),Ve.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){ro(this.g)},Ve.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Hi(o),o=h);l.i.push(new ip(l.Ya++,o)),l.G==3&&ms(l)},Ve.prototype.N=function(){this.g.l=null,delete this.j,ro(this.g),delete this.g,Ve.aa.N.call(this)};function il(o){Gi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}R(il,Gi);function ol(){Ki.call(this),this.status=1}R(ol,Ki);function En(o){this.g=o}R(En,sl),En.prototype.ua=function(){Pe(this.g,"a")},En.prototype.ta=function(o){Pe(this.g,new il(o))},En.prototype.sa=function(o){Pe(this.g,new ol)},En.prototype.ra=function(){Pe(this.g,"b")},_s.prototype.createWebChannel=_s.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,rd=function(){return new _s},nd=function(){return ss()},td=Kt,Do={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,xs=is,Ic.COMPLETE="complete",ed=Ic,_c.EventType=Zn,Zn.OPEN="a",Zn.CLOSE="b",Zn.ERROR="c",Zn.MESSAGE="d",we.prototype.listen=we.prototype.K,pr=_c,re.prototype.listenOnce=re.prototype.L,re.prototype.getLastError=re.prototype.Ka,re.prototype.getLastErrorCode=re.prototype.Ba,re.prototype.getStatus=re.prototype.Z,re.prototype.getResponseJson=re.prototype.Oa,re.prototype.getResponseText=re.prototype.oa,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Ha,Zh=re}).apply(typeof Es<"u"?Es:typeof self<"u"?self:typeof window<"u"?window:{});const Ul="@firebase/firestore",Bl="4.8.0";/**
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
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
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
 */let jn="11.10.0";/**
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
 */const dn=new sa("@firebase/firestore");function In(){return dn.logLevel}function O(n,...e){if(dn.logLevel<=H.DEBUG){const t=e.map(ga);dn.debug(`Firestore (${jn}): ${n}`,...t)}}function pt(n,...e){if(dn.logLevel<=H.ERROR){const t=e.map(ga);dn.error(`Firestore (${jn}): ${n}`,...t)}}function Mt(n,...e){if(dn.logLevel<=H.WARN){const t=e.map(ga);dn.warn(`Firestore (${jn}): ${n}`,...t)}}function ga(n){if(typeof n=="string")return n;try{/**
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
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,sd(n,r,t)}function sd(n,e,t){let r=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw pt(r),new Error(r)}function Y(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||sd(e,s,r)}function q(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ut{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class id{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Py{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ae.UNAUTHENTICATED)))}shutdown(){}}class ky{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class xy{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ut,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ut)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new id(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string",2055,{h:e}),new Ae(e)}}class Dy{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ny{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Dy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ae.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $l{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Y(this.o===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $l(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Y(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $l(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ly(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function od(){return new TextEncoder}/**
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
 */class _a{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ly(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function W(n,e){return n<e?-1:n>e?1:0}function No(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return W(r,s);{const i=od(),a=Oy(i.encode(jl(n,t)),i.encode(jl(e,t)));return a!==0?a:W(r,s)}}t+=r>65535?2:1}return W(n.length,e.length)}function jl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Oy(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return W(n[t],e[t]);return W(n.length,e.length)}function Vn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const ql="__name__";class Ke{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ke.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ke?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ke.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return W(e.length,t.length)}static compareSegments(e,t){const r=Ke.isNumericId(e),s=Ke.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ke.extractNumericId(e).compare(Ke.extractNumericId(t)):No(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lt.fromString(e.substring(4,e.length-2))}}class Z extends Ke{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Z(t)}static emptyPath(){return new Z([])}}const My=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ye extends Ke{construct(e,t,r){return new ye(e,t,r)}static isValidIdentifier(e){return My.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ql}static keyField(){return new ye([ql])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ye(t)}static emptyPath(){return new ye([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(Z.fromString(e))}static fromName(e){return new F(Z.fromString(e).popFirst(5))}static empty(){return new F(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new Z(e.slice()))}}/**
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
 */function ad(n,e,t){if(!t)throw new L(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Fy(n,e,t,r){if(e===!0&&r===!0)throw new L(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wl(n){if(!F.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hl(n){if(F.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function cd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function Ne(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fi(n);throw new L(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function he(n,e){const t={typeString:n};return e&&(t.value=e),t}function Wr(n,e){if(!cd(n))throw new L(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new L(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const zl=-62135596800,Gl=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Gl);return new te(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<zl)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gl}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wr(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:he("string",te._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
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
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new te(0,0))}static max(){return new $(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const kr=-1;function Uy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new te(t+1,0):new te(t,r));return new Ft(s,F.empty(),e)}function By(n){return new Ft(n.readTime,n.key,kr)}class Ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ft($.min(),F.empty(),kr)}static max(){return new Ft($.max(),F.empty(),kr)}}function $y(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:W(n.largestBatchId,e.largestBatchId))}/**
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
 */const jy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function qn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==jy)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,r)=>{t(e)}))}static reject(e){return new k(((t,r)=>{r(e)}))}static waitFor(e){return new k(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next((s=>s?k.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new k(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((f=>{a[d]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,t){return new k(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Wy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Wn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class pi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}pi.ue=-1;/**
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
 */const ya=-1;function mi(n){return n==null}function Gs(n){return n===0&&1/n==-1/0}function Hy(n){return typeof n=="number"&&Number.isInteger(n)&&!Gs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ld="";function zy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Kl(e)),e=Gy(n.get(t),e);return Kl(e)}function Gy(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ld:t+="";break;default:t+=i}}return t}function Kl(n){return n+ld+""}/**
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
 */function Ql(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ht(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ud(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ne{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ws(this.root,e,this.comparator,!0)}}class ws{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??_e.RED,this.left=s??_e.EMPTY,this.right=i??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new _e(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return _e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jl(this.data.getIterator())}getIteratorFrom(e){return new Jl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class Jl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Oe{constructor(e){this.fields=e,e.sort(ye.comparator)}static empty(){return new Oe([])}unionWith(e){let t=new fe(ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class hd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hd("Invalid base64 string: "+i):i}})(e);return new ve(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const Ky=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(n){if(Y(!!n,39018),typeof n=="string"){let e=0;const t=Ky.exec(n);if(Y(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
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
 */const dd="server_timestamp",fd="__type__",pd="__previous_value__",md="__local_write_time__";function va(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[fd])===null||t===void 0?void 0:t.stringValue)===dd}function gi(n){const e=n.mapValue.fields[pd];return va(e)?gi(e):e}function xr(n){const e=Ut(n.mapValue.fields[md].timestampValue);return new te(e.seconds,e.nanos)}/**
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
 */class Qy{constructor(e,t,r,s,i,a,c,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const Ks="(default)";class Dr{constructor(e,t){this.projectId=e,this.database=t||Ks}static empty(){return new Dr("","")}get isDefaultDatabase(){return this.database===Ks}isEqual(e){return e instanceof Dr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gd="__type__",Jy="__max__",Is={mapValue:{}},_d="__vector__",Qs="value";function $t(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?va(n)?4:Xy(n)?9007199254740991:Yy(n)?10:11:B(28295,{value:n})}function nt(n,e){if(n===e)return!0;const t=$t(n);if(t!==$t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xr(n).isEqual(xr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ut(s.timestampValue),c=Ut(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Bt(s.bytesValue).isEqual(Bt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ce(s.geoPointValue.latitude)===ce(i.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ce(s.integerValue)===ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ce(s.doubleValue),c=ce(i.doubleValue);return a===c?Gs(a)===Gs(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Vn(n.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ql(a)!==Ql(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!nt(a[u],c[u])))return!1;return!0})(n,e);default:return B(52216,{left:n})}}function Nr(n,e){return(n.values||[]).find((t=>nt(t,e)))!==void 0}function Ln(n,e){if(n===e)return 0;const t=$t(n),r=$t(e);if(t!==r)return W(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=ce(i.integerValue||i.doubleValue),u=ce(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Yl(n.timestampValue,e.timestampValue);case 4:return Yl(xr(n),xr(e));case 5:return No(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Bt(i),u=Bt(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=W(c[d],u[d]);if(f!==0)return f}return W(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=W(ce(i.latitude),ce(a.latitude));return c!==0?c:W(ce(i.longitude),ce(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Xl(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,u,d,f;const m=i.fields||{},g=a.fields||{},w=(c=m[Qs])===null||c===void 0?void 0:c.arrayValue,R=(u=g[Qs])===null||u===void 0?void 0:u.arrayValue,D=W(((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Xl(w,R)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Is.mapValue&&a===Is.mapValue)return 0;if(i===Is.mapValue)return 1;if(a===Is.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=No(u[m],f[m]);if(g!==0)return g;const w=Ln(c[u[m]],d[f[m]]);if(w!==0)return w}return W(u.length,f.length)})(n.mapValue,e.mapValue);default:throw B(23264,{le:t})}}function Yl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return W(n,e);const t=Ut(n),r=Ut(e),s=W(t.seconds,r.seconds);return s!==0?s:W(t.nanos,r.nanos)}function Xl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ln(t[s],r[s]);if(i)return i}return W(t.length,r.length)}function On(n){return Vo(n)}function Vo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ut(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return F.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Vo(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Vo(t.fields[a])}`;return s+"}"})(n.mapValue):B(61005,{value:n})}function Ds(n){switch($t(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gi(n);return e?16+Ds(e):16;case 5:return 2*n.stringValue.length;case 6:return Bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ds(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ht(r.fields,((i,a)=>{s+=i.length+Ds(a)})),s})(n.mapValue);default:throw B(13486,{value:n})}}function Zl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Lo(n){return!!n&&"integerValue"in n}function Ea(n){return!!n&&"arrayValue"in n}function eu(n){return!!n&&"nullValue"in n}function tu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ns(n){return!!n&&"mapValue"in n}function Yy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[gd])===null||t===void 0?void 0:t.stringValue)===_d}function wr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ht(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=wr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Xy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Jy}/**
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
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wr(t)}setAll(e){let t=ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=wr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ns(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ht(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new De(wr(this.value))}}function yd(n){const e=[];return Ht(n.fields,((t,r)=>{const s=new ye([t]);if(Ns(r)){const i=yd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Oe(e)}/**
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
 */class Se{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Se(e,0,$.min(),$.min(),$.min(),De.empty(),0)}static newFoundDocument(e,t,r,s){return new Se(e,1,t,$.min(),r,s,0)}static newNoDocument(e,t){return new Se(e,2,t,$.min(),$.min(),De.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,$.min(),$.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Js{constructor(e,t){this.position=e,this.inclusive=t}}function nu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=Ln(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ru(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class vd{}class ue extends vd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new tv(e,t,r):t==="array-contains"?new sv(e,r):t==="in"?new iv(e,r):t==="not-in"?new ov(e,r):t==="array-contains-any"?new av(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new nv(e,r):new rv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ln(t,this.value)):t!==null&&$t(this.value)===$t(t)&&this.matchesComparison(Ln(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ge extends vd{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ge(e,t)}matches(e){return Ed(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ed(n){return n.op==="and"}function wd(n){return ev(n)&&Ed(n)}function ev(n){for(const e of n.filters)if(e instanceof Ge)return!1;return!0}function Oo(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+On(n.value);if(wd(n))return n.filters.map((e=>Oo(e))).join(",");{const e=n.filters.map((t=>Oo(t))).join(",");return`${n.op}(${e})`}}function Id(n,e){return n instanceof ue?(function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&nt(r.value,s.value)})(n,e):n instanceof Ge?(function(r,s){return s instanceof Ge&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Id(a,s.filters[c])),!0):!1})(n,e):void B(19439)}function Td(n){return n instanceof ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${On(t.value)}`})(n):n instanceof Ge?(function(t){return t.op.toString()+" {"+t.getFilters().map(Td).join(" ,")+"}"})(n):"Filter"}class tv extends ue{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class nv extends ue{constructor(e,t){super(e,"in",t),this.keys=bd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class rv extends ue{constructor(e,t){super(e,"not-in",t),this.keys=bd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function bd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>F.fromName(r.referenceValue)))}class sv extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ea(t)&&Nr(t.arrayValue,this.value)}}class iv extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nr(this.value.arrayValue,t)}}class ov extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Nr(this.value.arrayValue,t)}}class av extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ea(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Nr(this.value.arrayValue,r)))}}/**
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
 */class cv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function su(n,e=null,t=[],r=[],s=null,i=null,a=null){return new cv(n,e,t,r,s,i,a)}function wa(n){const e=q(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Oo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),mi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>On(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>On(r))).join(",")),e.Pe=t}return e.Pe}function Ia(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Zy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Id(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ru(n.startAt,e.startAt)&&ru(n.endAt,e.endAt)}function Mo(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Hn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function lv(n,e,t,r,s,i,a,c){return new Hn(n,e,t,r,s,i,a,c)}function _i(n){return new Hn(n)}function iu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ad(n){return n.collectionGroup!==null}function Ir(n){const e=q(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new fe(ye.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Vr(i,r))})),t.has(ye.keyField().canonicalString())||e.Te.push(new Vr(ye.keyField(),r))}return e.Te}function Xe(n){const e=q(n);return e.Ie||(e.Ie=uv(e,Ir(n))),e.Ie}function uv(n,e){if(n.limitType==="F")return su(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Vr(s.field,i)}));const t=n.endAt?new Js(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Js(n.startAt.position,n.startAt.inclusive):null;return su(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Fo(n,e){const t=n.filters.concat([e]);return new Hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ys(n,e,t){return new Hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yi(n,e){return Ia(Xe(n),Xe(e))&&n.limitType===e.limitType}function Sd(n){return`${wa(Xe(n))}|lt:${n.limitType}`}function Tn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Td(s))).join(", ")}]`),mi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>On(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>On(s))).join(",")),`Target(${r})`})(Xe(n))}; limitType=${n.limitType})`}function vi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Ir(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const d=nu(a,c,u);return a.inclusive?d<=0:d<0})(r.startAt,Ir(r),s)||r.endAt&&!(function(a,c,u){const d=nu(a,c,u);return a.inclusive?d>=0:d>0})(r.endAt,Ir(r),s))})(n,e)}function hv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Rd(n){return(e,t)=>{let r=!1;for(const s of Ir(n)){const i=dv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dv(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Ln(u,d):B(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
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
 */class gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ht(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return ud(this.inner)}size(){return this.innerSize}}/**
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
 */const fv=new ne(F.comparator);function mt(){return fv}const Cd=new ne(F.comparator);function mr(...n){let e=Cd;for(const t of n)e=e.insert(t.key,t);return e}function Pd(n){let e=Cd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function en(){return Tr()}function kd(){return Tr()}function Tr(){return new gn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const pv=new ne(F.comparator),mv=new fe(F.comparator);function z(...n){let e=mv;for(const t of n)e=e.add(t);return e}const gv=new fe(W);function _v(){return gv}/**
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
 */function Ta(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gs(e)?"-0":e}}function xd(n){return{integerValue:""+n}}function yv(n,e){return Hy(e)?xd(e):Ta(n,e)}/**
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
 */class Ei{constructor(){this._=void 0}}function vv(n,e,t){return n instanceof Xs?(function(s,i){const a={fields:{[fd]:{stringValue:dd},[md]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&va(i)&&(i=gi(i)),i&&(a.fields[pd]=i),{mapValue:a}})(t,e):n instanceof Lr?Nd(n,e):n instanceof Or?Vd(n,e):(function(s,i){const a=Dd(s,i),c=ou(a)+ou(s.Ee);return Lo(a)&&Lo(s.Ee)?xd(c):Ta(s.serializer,c)})(n,e)}function Ev(n,e,t){return n instanceof Lr?Nd(n,e):n instanceof Or?Vd(n,e):t}function Dd(n,e){return n instanceof Zs?(function(r){return Lo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Xs extends Ei{}class Lr extends Ei{constructor(e){super(),this.elements=e}}function Nd(n,e){const t=Ld(e);for(const r of n.elements)t.some((s=>nt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Or extends Ei{constructor(e){super(),this.elements=e}}function Vd(n,e){let t=Ld(e);for(const r of n.elements)t=t.filter((s=>!nt(s,r)));return{arrayValue:{values:t}}}class Zs extends Ei{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ou(n){return ce(n.integerValue||n.doubleValue)}function Ld(n){return Ea(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wv(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Lr&&s instanceof Lr||r instanceof Or&&s instanceof Or?Vn(r.elements,s.elements,nt):r instanceof Zs&&s instanceof Zs?nt(r.Ee,s.Ee):r instanceof Xs&&s instanceof Xs})(n.transform,e.transform)}class Iv{constructor(e,t){this.version=e,this.transformResults=t}}class $e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $e}static exists(e){return new $e(void 0,e)}static updateTime(e){return new $e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wi{}function Od(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ba(n.key,$e.none()):new Hr(n.key,n.data,$e.none());{const t=n.data,r=De.empty();let s=new fe(ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new zt(n.key,r,new Oe(s.toArray()),$e.none())}}function Tv(n,e,t){n instanceof Hr?(function(s,i,a){const c=s.value.clone(),u=cu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof zt?(function(s,i,a){if(!Vs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=cu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Md(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function br(n,e,t,r){return n instanceof Hr?(function(i,a,c,u){if(!Vs(i.precondition,a))return c;const d=i.value.clone(),f=lu(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof zt?(function(i,a,c,u){if(!Vs(i.precondition,a))return c;const d=lu(i.fieldTransforms,u,a),f=a.data;return f.setAll(Md(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(n,e,t,r):(function(i,a,c){return Vs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function bv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Dd(r.transform,s||null);i!=null&&(t===null&&(t=De.empty()),t.set(r.field,i))}return t||null}function au(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vn(r,s,((i,a)=>wv(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hr extends wi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zt extends wi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Md(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function cu(n,e,t){const r=new Map;Y(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Ev(a,c,t[s]))}return r}function lu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,vv(i,a,e))}return r}class ba extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Av extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Sv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Tv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=br(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=br(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=kd();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Od(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument($.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),z())}isEqual(e){return this.batchId===e.batchId&&Vn(this.mutations,e.mutations,((t,r)=>au(t,r)))&&Vn(this.baseMutations,e.baseMutations,((t,r)=>au(t,r)))}}class Aa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Y(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return pv})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Aa(e,t,r,s)}}/**
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
 */class Rv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Cv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var le,G;function Pv(n){switch(n){case P.OK:return B(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function Fd(n){if(n===void 0)return pt("GRPC error has no .code"),P.UNKNOWN;switch(n){case le.OK:return P.OK;case le.CANCELLED:return P.CANCELLED;case le.UNKNOWN:return P.UNKNOWN;case le.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case le.INTERNAL:return P.INTERNAL;case le.UNAVAILABLE:return P.UNAVAILABLE;case le.UNAUTHENTICATED:return P.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case le.NOT_FOUND:return P.NOT_FOUND;case le.ALREADY_EXISTS:return P.ALREADY_EXISTS;case le.PERMISSION_DENIED:return P.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case le.ABORTED:return P.ABORTED;case le.OUT_OF_RANGE:return P.OUT_OF_RANGE;case le.UNIMPLEMENTED:return P.UNIMPLEMENTED;case le.DATA_LOSS:return P.DATA_LOSS;default:return B(39323,{code:n})}}(G=le||(le={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const kv=new Lt([4294967295,4294967295],0);function uu(n){const e=od().encode(n),t=new Xh;return t.update(e),new Uint8Array(t.digest())}function hu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lt([t,r],0),new Lt([s,i],0)]}class Sa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new gr(`Invalid padding: ${t}`);if(r<0)throw new gr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new gr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Lt.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Lt.fromNumber(r)));return s.compare(kv)===1&&(s=new Lt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=uu(e),[r,s]=hu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Sa(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=uu(e),[r,s]=hu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ii{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,zr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ii($.min(),s,new ne(W),mt(),z())}}class zr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new zr(r,t,z(),z(),z())}}/**
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
 */class Ls{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Ud{constructor(e,t){this.targetId=e,this.De=t}}class Bd{constructor(e,t,r=ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class du{constructor(){this.ve=0,this.Ce=fu(),this.Fe=ve.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=z(),t=z(),r=z();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}})),new zr(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=fu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Y(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class xv{constructor(e){this.We=e,this.Ge=new Map,this.ze=mt(),this.je=Ts(),this.Je=Ts(),this.He=new ne(W)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:B(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Mo(i))if(r===0){const a=new F(i.path);this.Xe(t,a,Se.newNoDocument(a,$.min()))}else Y(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Bt(r).toUint8Array()}catch(u){if(u instanceof hd)return Mt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Sa(a,s,i)}catch(u){return Mt(u instanceof gr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Mo(c.target)){const u=new F(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Se.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=z();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ii(e,t,this.He,this.ze,r);return this.ze=mt(),this.je=Ts(),this.Je=Ts(),this.He=new ne(W),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new du,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new fe(W),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new fe(W),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new du),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ts(){return new ne(F.comparator)}function fu(){return new ne(F.comparator)}const Dv={asc:"ASCENDING",desc:"DESCENDING"},Nv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vv={and:"AND",or:"OR"};class Lv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uo(n,e){return n.useProto3Json||mi(e)?e:{value:e}}function ei(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $d(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ov(n,e){return ei(n,e.toTimestamp())}function Ze(n){return Y(!!n,49232),$.fromTimestamp((function(t){const r=Ut(t);return new te(r.seconds,r.nanos)})(n))}function Ra(n,e){return Bo(n,e).canonicalString()}function Bo(n,e){const t=(function(s){return new Z(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function jd(n){const e=Z.fromString(n);return Y(Gd(e),10190,{key:e.toString()}),e}function $o(n,e){return Ra(n.databaseId,e.path)}function mo(n,e){const t=jd(e);if(t.get(1)!==n.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(Wd(t))}function qd(n,e){return Ra(n.databaseId,e)}function Mv(n){const e=jd(n);return e.length===4?Z.emptyPath():Wd(e)}function jo(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wd(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pu(n,e,t){return{name:$o(n,e),fields:t.value.mapValue.fields}}function Fv(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,f){return d.useProto3Json?(Y(f===void 0||typeof f=="string",58123),ve.fromBase64String(f||"")):(Y(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ve.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const f=d.code===void 0?P.UNKNOWN:Fd(d.code);return new L(f,d.message||"")})(a);t=new Bd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=mo(n,r.document.name),i=Ze(r.document.updateTime),a=r.document.createTime?Ze(r.document.createTime):$.min(),c=new De({mapValue:{fields:r.document.fields}}),u=Se.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Ls(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=mo(n,r.document),i=r.readTime?Ze(r.readTime):$.min(),a=Se.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ls([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=mo(n,r.document),i=r.removedTargetIds||[];t=new Ls([],i,s,null)}else{if(!("filter"in e))return B(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Cv(s,i),c=r.targetId;t=new Ud(c,a)}}return t}function Uv(n,e){let t;if(e instanceof Hr)t={update:pu(n,e.key,e.value)};else if(e instanceof ba)t={delete:$o(n,e.key)};else if(e instanceof zt)t={update:pu(n,e.key,e.data),updateMask:Kv(e.fieldMask)};else{if(!(e instanceof Av))return B(16599,{Rt:e.type});t={verify:$o(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Xs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Or)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zs)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw B(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Ov(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)})(n,e.precondition)),t}function Bv(n,e){return n&&n.length>0?(Y(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Ze(s.updateTime):Ze(i);return a.isEqual($.min())&&(a=Ze(i)),new Iv(a,s.transformResults||[])})(t,e)))):[]}function $v(n,e){return{documents:[qd(n,e.path)]}}function jv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=qd(n,s);const i=(function(d){if(d.length!==0)return zd(Ge.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((f=>(function(g){return{field:bn(g.field),direction:Hv(g.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Uo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:s}}function qv(n){let e=Mv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Y(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(m){const g=Hd(m);return g instanceof Ge&&wd(g)?g.getFilters():[g]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((g=>(function(R){return new Vr(An(R.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(m){let g;return g=typeof m=="object"?m.value:m,mi(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(m){const g=!!m.before,w=m.values||[];return new Js(w,g)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const g=!m.before,w=m.values||[];return new Js(w,g)})(t.endAt)),lv(e,s,a,i,c,"F",u,d)}function Wv(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Hd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=An(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=An(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=An(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=An(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ue.create(An(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ge.create(t.compositeFilter.filters.map((r=>Hd(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(t.compositeFilter.op))})(n):B(30097,{filter:n})}function Hv(n){return Dv[n]}function zv(n){return Nv[n]}function Gv(n){return Vv[n]}function bn(n){return{fieldPath:n.canonicalString()}}function An(n){return ye.fromServerFormat(n.fieldPath)}function zd(n){return n instanceof ue?(function(t){if(t.op==="=="){if(tu(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NAN"}};if(eu(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tu(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NAN"}};if(eu(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(t.field),op:zv(t.op),value:t.value}}})(n):n instanceof Ge?(function(t){const r=t.getFilters().map((s=>zd(s)));return r.length===1?r[0]:{compositeFilter:{op:Gv(t.op),filters:r}}})(n):B(54877,{filter:n})}function Kv(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Gd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class xt{constructor(e,t,r,s,i=$.min(),a=$.min(),c=ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Qv{constructor(e){this.gt=e}}function Jv(n){const e=qv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ys(e,e.limit,"L"):e}/**
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
 */class Yv{constructor(){this.Dn=new Xv}addToCollectionParentIndex(e,t){return this.Dn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Ft.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Xv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new fe(Z.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new fe(Z.comparator)).toArray()}}/**
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
 */const mu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kd=41943040;class xe{static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(Kd,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);/**
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
 */class Mn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Mn(0)}static ur(){return new Mn(-1)}}/**
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
 */const gu="LruGarbageCollector",Zv=1048576;function _u([n,e],[t,r]){const s=W(n,t);return s===0?W(e,r):s}class eE{constructor(e){this.Tr=e,this.buffer=new fe(_u),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();_u(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){O(gu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wn(t)?O(gu,"Ignoring IndexedDB error during garbage collection: ",t):await qn(t)}await this.Rr(3e5)}))}}class nE{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(pi.ue);const r=new eE(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(mu)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mu):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(r=m,c=Date.now(),this.removeTargets(e,r,t)))).next((m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((m=>(d=Date.now(),In()<=H.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function rE(n,e){return new nE(n,e)}/**
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
 */class sE{constructor(){this.changes=new gn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class oE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&br(r.mutation,s,Oe.empty(),te.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,z()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=z()){const s=en();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=mr();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=en();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,z())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=mt();const a=Tr(),c=(function(){return Tr()})();return t.forEach(((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof zt)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),br(f.mutation,d,f.mutation.getFieldMask(),te.now())):a.set(d.key,Oe.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,f)=>a.set(d,f))),t.forEach(((d,f)=>{var m;return c.set(d,new iE(f,(m=a.get(d))!==null&&m!==void 0?m:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=Tr();let s=new ne(((a,c)=>a-c)),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||Oe.empty();f=c.applyToLocalView(d,f),r.set(u,f);const m=(s.get(c.batchId)||z()).add(u);s=s.insert(c.batchId,m)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,m=kd();f.forEach((g=>{if(!i.has(g)){const w=Od(t.get(g),r.get(g));w!==null&&m.set(g,w),i=i.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return k.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ad(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(en());let c=kr,u=i;return a.next((d=>k.forEach(d,((f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{u=u.insert(f,g)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,z()))).next((f=>({batchId:c,changes:Pd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next((r=>{let s=mr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=mr();return this.indexManager.getCollectionParents(e,i).next((c=>k.forEach(c,(u=>{const d=(function(m,g){return new Hn(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((f=>{f.forEach(((m,g)=>{a=a.insert(m,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Se.newInvalidDocument(f)))}));let c=mr();return a.forEach(((u,d)=>{const f=i.get(u);f!==void 0&&br(f.mutation,d,Oe.empty(),te.now()),vi(t,d)&&(c=c.insert(u,d))})),c}))}}/**
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
 */class aE{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return k.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ze(s.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Jv(s.bundledQuery),readTime:Ze(s.readTime)}})(t)),k.resolve()}}/**
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
 */class cE{constructor(){this.overlays=new ne(F.comparator),this.kr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=en();return k.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=en(),i=t.length+1,a=new F(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ne(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=en(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=en(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,f)=>c.set(d,f))),!(c.size()>=s)););return k.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Rv(t,r));let i=this.kr.get(t);i===void 0&&(i=z(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class lE{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class Ca{constructor(){this.qr=new fe(me.Qr),this.$r=new fe(me.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new me(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new me(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new F(new Z([])),r=new me(t,e),s=new me(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new F(new Z([])),r=new me(t,e),s=new me(t,e+1);let i=z();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new me(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return F.comparator(e.key,t.key)||W(e.Hr,t.Hr)}static Ur(e,t){return W(e.Hr,t.Hr)||F.comparator(e.key,t.key)}}/**
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
 */class uE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new fe(me.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Sv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new me(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?ya:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new me(t,0),s=new me(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(W);return t.forEach((s=>{const i=new me(s,0),a=new me(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new me(new F(i),0);let c=new fe(W);return this.Yr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Hr)),!0)}),a),k.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Y(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(t.mutations,(s=>{const i=new me(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new me(t,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class hE{constructor(e){this.ni=e,this.docs=(function(){return new ne(F.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Se.newInvalidDocument(t))}getEntries(e,t){let r=mt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Se.newInvalidDocument(s))})),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=mt();const a=t.path,c=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||$y(By(f),r)<=0||(s.has(f.key)||vi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ri(e,t){return k.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new dE(this)}getSize(e){return k.resolve(this.size)}}class dE extends sE{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),k.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class fE{constructor(e){this.persistence=e,this.ii=new gn((t=>wa(t)),Ia),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.si=0,this.oi=new Ca,this.targetCount=0,this._i=Mn.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),k.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Mn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.hr(t),k.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),k.waitFor(i).next((()=>s))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.oi.containsKey(t))}}/**
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
 */class Qd{constructor(e,t){this.ai={},this.overlays={},this.ui=new pi(0),this.ci=!1,this.ci=!0,this.li=new lE,this.referenceDelegate=e(this),this.hi=new fE(this),this.indexManager=new Yv,this.remoteDocumentCache=(function(s){return new hE(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Qv(t),this.Ti=new aE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new uE(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new pE(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return k.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class pE extends qy{constructor(e){super(),this.currentSequenceNumber=e}}class Pa{constructor(e){this.persistence=e,this.Ai=new Ca,this.Ri=null}static Vi(e){return new Pa(e)}get mi(){if(this.Ri)return this.Ri;throw B(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,(r=>{const s=F.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,$.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return k.or([()=>k.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ti{constructor(e,t){this.persistence=e,this.gi=new gn((r=>zy(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=rE(this,t)}static Vi(e,t){return new ti(e,t)}Ii(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return k.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?k.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,$.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ds(e.data.value)),t}Sr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ka{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=z(),s=z();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ka(e,t.fromCache,r,s)}}/**
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
 */class mE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gE{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Hp()?8:Wy(Ce())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new mE;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(In()<=H.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(In()<=H.DEBUG&&O("QueryEngine","Query:",Tn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(In()<=H.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xe(t))):k.resolve())}ps(e,t){if(iu(t))return k.resolve(null);let r=Xe(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ys(t,null,"F"),r=Xe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=z(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.bs(t,c);return this.Ds(t,d,a,u.readTime)?this.ps(e,Ys(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ys(e,t,r,s){return iu(t)||s.isEqual($.min())?k.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?k.resolve(null):(In()<=H.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Tn(t)),this.vs(e,a,t,Uy(s,kr)).next((c=>c)))}))}bs(e,t){let r=new fe(Rd(e));return t.forEach(((s,i)=>{vi(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return In()<=H.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Tn(t)),this.gs.getDocumentsMatchingQuery(e,t,Ft.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const xa="LocalStore",_E=3e8;class yE{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ne(W),this.Ms=new gn((i=>wa(i)),Ia),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oE(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function vE(n,e,t,r){return new yE(n,e,t,r)}async function Jd(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=z();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function EE(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,f){const m=d.batch,g=m.keys();let w=k.resolve();return g.forEach((R=>{w=w.next((()=>f.getEntry(u,R))).next((D=>{const x=d.docVersions.get(R);Y(x!==null,48541),D.version.compareTo(x)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))}))})),w.next((()=>c.mutationQueue.removeMutationBatch(u,m)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Yd(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function wE(n,e){const t=q(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((f,m)=>{const g=s.get(m);if(!g)return;c.push(t.hi.removeMatchingKeys(i,f.removedDocuments,m).next((()=>t.hi.addMatchingKeys(i,f.addedDocuments,m))));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(ve.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(m,w),(function(D,x,V){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=_E?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(g,w,f)&&c.push(t.hi.updateTargetData(i,w))}));let u=mt(),d=z();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(IE(i,a,e.documentUpdates).next((f=>{u=f.Ls,d=f.ks}))),!r.isEqual($.min())){const f=t.hi.getLastRemoteSnapshotVersion(i).next((m=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return k.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function IE(n,e,t){let r=z(),s=z();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=mt();return t.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual($.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):O(xa,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Ls:a,ks:s}}))}function TE(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ya),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function bE(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,k.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new xt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function qo(n,e,t){const r=q(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Wn(a))throw a;O(xa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function yu(n,e,t){const r=q(n);let s=$.min(),i=z();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,f){const m=q(u),g=m.Ms.get(f);return g!==void 0?k.resolve(m.Fs.get(g)):m.hi.getTargetData(d,f)})(r,a,Xe(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:$.min(),t?i:z()))).next((c=>(AE(r,hv(e),c),{documents:c,qs:i})))))}function AE(n,e,t){let r=n.xs.get(e)||$.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class vu{constructor(){this.activeTargetIds=_v()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SE{constructor(){this.Fo=new vu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new vu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RE{xo(e){}shutdown(){}}/**
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
 */const Eu="ConnectivityMonitor";class wu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){O(Eu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){O(Eu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bs=null;function Wo(){return bs===null?bs=(function(){return 268435456+Math.round(2147483648*Math.random())})():bs++,"0x"+bs.toString(16)}/**
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
 */const go="RestConnection",CE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class PE{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Ks?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Wo(),c=this.Go(e,t.toUriEncodedString());O(go,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:d}=new URL(c),f=Un(d);return this.jo(e,c,u,r,f).then((m=>(O(go,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw Mt(go,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+jn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=CE[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class kE{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const be="WebChannelConnection";class xE extends PE{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Wo();return new Promise(((c,u)=>{const d=new Zh;d.setWithCredentials(!0),d.listenOnce(ed.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case xs.NO_ERROR:const m=d.getResponseJson();O(be,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case xs.TIMEOUT:O(be,`RPC '${e}' ${a} timed out`),u(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case xs.HTTP_ERROR:const g=d.getStatus();if(O(be,`RPC '${e}' ${a} failed with status:`,g,"response text:",d.getResponseText()),g>0){let w=d.getResponseJson();Array.isArray(w)&&(w=w[0]);const R=w==null?void 0:w.error;if(R&&R.status&&R.message){const D=(function(V){const M=V.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(M)>=0?M:P.UNKNOWN})(R.status);u(new L(D,R.message))}else u(new L(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new L(P.UNAVAILABLE,"Connection failed."));break;default:B(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{O(be,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);O(be,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",f,r,15)}))}P_(e,t,r){const s=Wo(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=rd(),c=nd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");O(be,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.T_(m);let g=!1,w=!1;const R=new kE({Ho:x=>{w?O(be,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(g||(O(be,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),O(be,`RPC '${e}' stream ${s} sending:`,x),m.send(x))},Yo:()=>m.close()}),D=(x,V,M)=>{x.listen(V,(j=>{try{M(j)}catch(K){setTimeout((()=>{throw K}),0)}}))};return D(m,pr.EventType.OPEN,(()=>{w||(O(be,`RPC '${e}' stream ${s} transport opened.`),R.s_())})),D(m,pr.EventType.CLOSE,(()=>{w||(w=!0,O(be,`RPC '${e}' stream ${s} transport closed`),R.__(),this.I_(m))})),D(m,pr.EventType.ERROR,(x=>{w||(w=!0,Mt(be,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),R.__(new L(P.UNAVAILABLE,"The operation could not be completed")))})),D(m,pr.EventType.MESSAGE,(x=>{var V;if(!w){const M=x.data[0];Y(!!M,16349);const j=M,K=(j==null?void 0:j.error)||((V=j[0])===null||V===void 0?void 0:V.error);if(K){O(be,`RPC '${e}' stream ${s} received error:`,K);const Me=K.status;let ae=(function(v){const E=le[v];if(E!==void 0)return Fd(E)})(Me),I=K.message;ae===void 0&&(ae=P.INTERNAL,I="Unknown error status: "+Me+" with message "+K.message),w=!0,R.__(new L(ae,I)),m.close()}else O(be,`RPC '${e}' stream ${s} received:`,M),R.a_(M)}})),D(c,td.STAT_EVENT,(x=>{x.stat===Do.PROXY?O(be,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Do.NOPROXY&&O(be,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{R.o_()}),0),R}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function _o(){return typeof document<"u"?document:null}/**
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
 */function Ti(n){return new Lv(n,!0)}/**
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
 */class Xd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Iu="PersistentStream";class Zd{constructor(e,t,r,s,i,a,c,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Xd(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(pt(t.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new L(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return O(Iu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(O(Iu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class DE extends Zd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Fv(this.serializer,e),r=(function(i){if(!("targetChange"in i))return $.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?Ze(a.readTime):$.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=jo(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=Mo(u)?{documents:$v(i,u)}:{query:jv(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=$d(i,a.resumeToken);const d=Uo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){c.readTime=ei(i,a.snapshotVersion.toTimestamp());const d=Uo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const r=Wv(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=jo(this.serializer),t.removeTarget=e,this.k_(t)}}class NE extends Zd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Y(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Y(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Bv(e.writeResults,e.commitTime),r=Ze(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=jo(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Uv(this.serializer,r)))};this.k_(t)}}/**
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
 */class VE{}class LE extends VE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Bo(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(P.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Bo(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(P.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class OE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(pt(t),this._a=!1):O("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const fn="RemoteStore";class ME{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{_n(this)&&(O(fn,"Restarting streams for network reachability change."),await(async function(u){const d=q(u);d.Ia.add(4),await Gr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await bi(d)})(this))}))})),this.Aa=new OE(r,s)}}async function bi(n){if(_n(n))for(const e of n.da)await e(!0)}async function Gr(n){for(const e of n.da)await e(!1)}function ef(n,e){const t=q(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),La(t)?Va(t):zn(t).x_()&&Na(t,e))}function Da(n,e){const t=q(n),r=zn(t);t.Ta.delete(e),r.x_()&&tf(t,e),t.Ta.size===0&&(r.x_()?r.B_():_n(t)&&t.Aa.set("Unknown"))}function Na(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zn(n).H_(e)}function tf(n,e){n.Ra.$e(e),zn(n).Y_(e)}function Va(n){n.Ra=new xv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),zn(n).start(),n.Aa.aa()}function La(n){return _n(n)&&!zn(n).M_()&&n.Ta.size>0}function _n(n){return q(n).Ia.size===0}function nf(n){n.Ra=void 0}async function FE(n){n.Aa.set("Online")}async function UE(n){n.Ta.forEach(((e,t)=>{Na(n,e)}))}async function BE(n,e){nf(n),La(n)?(n.Aa.la(e),Va(n)):n.Aa.set("Unknown")}async function $E(n,e,t){if(n.Aa.set("Online"),e instanceof Bd&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){O(fn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ni(n,r)}else if(e instanceof Ls?n.Ra.Ye(e):e instanceof Ud?n.Ra.it(e):n.Ra.et(e),!t.isEqual($.min()))try{const r=await Yd(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ta.get(d);f&&i.Ta.set(d,f.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const f=i.Ta.get(u);if(!f)return;i.Ta.set(u,f.withResumeToken(ve.EMPTY_BYTE_STRING,f.snapshotVersion)),tf(i,u);const m=new xt(f.target,u,d,f.sequenceNumber);Na(i,m)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){O(fn,"Failed to raise snapshot:",r),await ni(n,r)}}async function ni(n,e,t){if(!Wn(e))throw e;n.Ia.add(1),await Gr(n),n.Aa.set("Offline"),t||(t=()=>Yd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(fn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await bi(n)}))}function rf(n,e){return e().catch((t=>ni(n,t,e)))}async function Ai(n){const e=q(n),t=jt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ya;for(;jE(e);)try{const s=await TE(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,qE(e,s)}catch(s){await ni(e,s)}sf(e)&&of(e)}function jE(n){return _n(n)&&n.Pa.length<10}function qE(n,e){n.Pa.push(e);const t=jt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function sf(n){return _n(n)&&!jt(n).M_()&&n.Pa.length>0}function of(n){jt(n).start()}async function WE(n){jt(n).na()}async function HE(n){const e=jt(n);for(const t of n.Pa)e.X_(t.mutations)}async function zE(n,e,t){const r=n.Pa.shift(),s=Aa.from(r,e,t);await rf(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ai(n)}async function GE(n,e){e&&jt(n).Z_&&await(async function(r,s){if((function(a){return Pv(a)&&a!==P.ABORTED})(s.code)){const i=r.Pa.shift();jt(r).N_(),await rf(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ai(r)}})(n,e),sf(n)&&of(n)}async function Tu(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),O(fn,"RemoteStore received new credentials");const r=_n(t);t.Ia.add(3),await Gr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await bi(t)}async function KE(n,e){const t=q(n);e?(t.Ia.delete(2),await bi(t)):e||(t.Ia.add(2),await Gr(t),t.Aa.set("Unknown"))}function zn(n){return n.Va||(n.Va=(function(t,r,s){const i=q(t);return i.ia(),new DE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:FE.bind(null,n),e_:UE.bind(null,n),n_:BE.bind(null,n),J_:$E.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),La(n)?Va(n):n.Aa.set("Unknown")):(await n.Va.stop(),nf(n))}))),n.Va}function jt(n){return n.ma||(n.ma=(function(t,r,s){const i=q(t);return i.ia(),new NE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:WE.bind(null,n),n_:GE.bind(null,n),ea:HE.bind(null,n),ta:zE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Ai(n)):(await n.ma.stop(),n.Pa.length>0&&(O(fn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Oa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Oa(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ma(n,e){if(pt("AsyncQueue",`${e}: ${n}`),Wn(n))return new L(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class xn{static emptySet(e){return new xn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=mr(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new xn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class bu{constructor(){this.fa=new ne(F.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):B(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Fn{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Fn(e,t,xn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class QE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class JE{constructor(){this.queries=Au(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=q(t),i=s.queries;s.queries=Au(),i.forEach(((a,c)=>{for(const u of c.wa)u.onError(r)}))})(this,new L(P.ABORTED,"Firestore shutting down"))}}function Au(){return new gn((n=>Sd(n)),yi)}async function Fa(n,e){const t=q(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new QE,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ma(a,`Initialization of query '${Tn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Ba(t)}async function Ua(n,e){const t=q(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function YE(n,e){const t=q(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Ba(t)}function XE(n,e,t){const r=q(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Ba(n){n.Da.forEach((e=>{e.next()}))}var Ho,Su;(Su=Ho||(Ho={})).Fa="default",Su.Cache="cache";class $a{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Fn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ho.Cache}}/**
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
 */class af{constructor(e){this.key=e}}class cf{constructor(e){this.key=e}}class ZE{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=z(),this.mutatedKeys=z(),this.Xa=Rd(e),this.eu=new xn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new bu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,m)=>{const g=s.get(f),w=vi(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),D=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let x=!1;g&&w?g.data.isEqual(w.data)?R!==D&&(r.track({type:3,doc:w}),x=!0):this.iu(g,w)||(r.track({type:2,doc:w}),x=!0,(u&&this.Xa(w,u)>0||d&&this.Xa(w,d)<0)&&(c=!0)):!g&&w?(r.track({type:0,doc:w}),x=!0):g&&!w&&(r.track({type:1,doc:g}),x=!0,(u||d)&&(c=!0)),x&&(w?(a=a.add(w),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((f,m)=>(function(w,R){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{At:x})}};return D(w)-D(R)})(f.type,m.type)||this.Xa(f.doc,m.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new Fn(this.query,e.eu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new bu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=z(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new cf(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new af(r))})),t}uu(e){this.Ha=e.qs,this.Za=z();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Fn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ja="SyncEngine";class ew{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class tw{constructor(e){this.key=e,this.lu=!1}}class nw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new gn((c=>Sd(c)),yi),this.Tu=new Map,this.Iu=new Set,this.du=new ne(F.comparator),this.Eu=new Map,this.Au=new Ca,this.Ru={},this.Vu=new Map,this.mu=Mn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rw(n,e,t=!0){const r=pf(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await lf(r,e,t,!0),s}async function sw(n,e){const t=pf(n);await lf(t,e,!0,!1)}async function lf(n,e,t,r){const s=await bE(n.localStore,Xe(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await iw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&ef(n.remoteStore,s),c}async function iw(n,e,t,r,s){n.gu=(m,g,w)=>(async function(D,x,V,M){let j=x.view.nu(V);j.Ds&&(j=await yu(D.localStore,x.query,!1).then((({documents:I})=>x.view.nu(I,j))));const K=M&&M.targetChanges.get(x.targetId),Me=M&&M.targetMismatches.get(x.targetId)!=null,ae=x.view.applyChanges(j,D.isPrimaryClient,K,Me);return Cu(D,x.targetId,ae._u),ae.snapshot})(n,m,g,w);const i=await yu(n.localStore,e,!0),a=new ZE(e,i.qs),c=a.nu(i.documents),u=zr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Cu(n,t,d._u);const f=new ew(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function ow(n,e,t){const r=q(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!yi(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qo(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Da(r.remoteStore,s.targetId),zo(r,s.targetId)})).catch(qn)):(zo(r,s.targetId),await qo(r.localStore,s.targetId,!0))}async function aw(n,e){const t=q(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Da(t.remoteStore,r.targetId))}async function cw(n,e,t){const r=mw(n);try{const s=await(function(a,c){const u=q(a),d=te.now(),f=c.reduce(((w,R)=>w.add(R.key)),z());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let R=mt(),D=z();return u.Os.getEntries(w,f).next((x=>{R=x,R.forEach(((V,M)=>{M.isValidDocument()||(D=D.add(V))}))})).next((()=>u.localDocuments.getOverlayedDocuments(w,R))).next((x=>{m=x;const V=[];for(const M of c){const j=bv(M,m.get(M.key).overlayedDocument);j!=null&&V.push(new zt(M.key,j,yd(j.value.mapValue),$e.exists(!0)))}return u.mutationQueue.addMutationBatch(w,d,V,c)})).next((x=>{g=x;const V=x.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(w,x.batchId,V)}))})).then((()=>({batchId:g.batchId,changes:Pd(m)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new ne(W)),d=d.insert(c,u),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,t),await Kr(r,s.changes),await Ai(r.remoteStore)}catch(s){const i=Ma(s,"Failed to persist write");t.reject(i)}}async function uf(n,e){const t=q(n);try{const r=await wE(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Y(a.lu,14607):s.removedDocuments.size>0&&(Y(a.lu,42227),a.lu=!1))})),await Kr(t,r,e)}catch(r){await qn(r)}}function Ru(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=q(a);u.onlineState=c;let d=!1;u.queries.forEach(((f,m)=>{for(const g of m.wa)g.va(c)&&(d=!0)})),d&&Ba(u)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lw(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new ne(F.comparator);a=a.insert(i,Se.newNoDocument(i,$.min()));const c=z().add(i),u=new Ii($.min(),new Map,new ne(W),a,c);await uf(r,u),r.du=r.du.remove(i),r.Eu.delete(e),qa(r)}else await qo(r.localStore,e,!1).then((()=>zo(r,e,t))).catch(qn)}async function uw(n,e){const t=q(n),r=e.batch.batchId;try{const s=await EE(t.localStore,e);df(t,r,null),hf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Kr(t,s)}catch(s){await qn(s)}}async function hw(n,e,t){const r=q(n);try{const s=await(function(a,c){const u=q(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next((m=>(Y(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>u.localDocuments.getDocuments(d,f)))}))})(r.localStore,e);df(r,e,t),hf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Kr(r,s)}catch(s){await qn(s)}}function hf(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function df(n,e,t){const r=q(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function zo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||ff(n,r)}))}function ff(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Da(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),qa(n))}function Cu(n,e,t){for(const r of t)r instanceof af?(n.Au.addReference(r.key,e),dw(n,r)):r instanceof cf?(O(ja,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||ff(n,r.key)):B(19791,{yu:r})}function dw(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(O(ja,"New document in limbo: "+t),n.Iu.add(r),qa(n))}function qa(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new F(Z.fromString(e)),r=n.mu.next();n.Eu.set(r,new tw(t)),n.du=n.du.insert(t,r),ef(n.remoteStore,new xt(Xe(_i(t.path)),r,"TargetPurposeLimboResolution",pi.ue))}}async function Kr(n,e,t){const r=q(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,u)=>{a.push(r.gu(u,e,t).then((d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=ka.Es(u.targetId,d);i.push(m)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(u,d){const f=q(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>k.forEach(d,(g=>k.forEach(g.Is,(w=>f.persistence.referenceDelegate.addReference(m,g.targetId,w))).next((()=>k.forEach(g.ds,(w=>f.persistence.referenceDelegate.removeReference(m,g.targetId,w)))))))))}catch(m){if(!Wn(m))throw m;O(xa,"Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const w=f.Fs.get(g),R=w.snapshotVersion,D=w.withLastLimboFreeSnapshotVersion(R);f.Fs=f.Fs.insert(g,D)}}})(r.localStore,i))}async function fw(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){O(ja,"User change. New user:",e.toKey());const r=await Jd(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((u=>{u.reject(new L(P.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Kr(t,r.Bs)}}function pw(n,e){const t=q(n),r=t.Eu.get(e);if(r&&r.lu)return z().add(r.key);{let s=z();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function pf(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=uf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lw.bind(null,e),e.hu.J_=YE.bind(null,e.eventManager),e.hu.pu=XE.bind(null,e.eventManager),e}function mw(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hw.bind(null,e),e}class ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ti(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return vE(this.persistence,new gE,e.initialUser,this.serializer)}Du(e){return new Qd(Pa.Vi,this.serializer)}bu(e){return new SE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ri.provider={build:()=>new ri};class gw extends ri{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Y(this.persistence.referenceDelegate instanceof ti,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new tE(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new Qd((r=>ti.Vi(r,t)),this.serializer)}}class Go{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ru(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fw.bind(null,this.syncEngine),await KE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new JE})()}createDatastore(e){const t=Ti(e.databaseInfo.databaseId),r=(function(i){return new xE(i)})(e.databaseInfo);return(function(i,a,c,u){return new LE(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new ME(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ru(this.syncEngine,t,0)),(function(){return wu.C()?new wu:new RE})())}createSyncEngine(e,t){return(function(s,i,a,c,u,d,f){const m=new nw(s,i,a,c,u,d);return f&&(m.fu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=q(s);O(fn,"RemoteStore shutting down."),i.Ia.add(5),await Gr(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Go.provider={build:()=>new Go};/**
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
 */class Wa{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):pt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const qt="FirestoreClient";class _w{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ae.UNAUTHENTICATED,this.clientId=_a.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{O(qt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(O(qt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ma(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function yo(n,e){n.asyncQueue.verifyOperationInProgress(),O(qt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Jd(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Mt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{O("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Mt("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Pu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yw(n);O(qt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Tu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Tu(e.remoteStore,s))),n._onlineComponents=e}async function yw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(qt,"Using user provided OfflineComponentProvider");try{await yo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Mt("Error using user provided cache. Falling back to memory cache: "+t),await yo(n,new ri)}}else O(qt,"Using default OfflineComponentProvider"),await yo(n,new gw(void 0));return n._offlineComponents}async function mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(qt,"Using user provided OnlineComponentProvider"),await Pu(n,n._uninitializedComponentsProvider._online)):(O(qt,"Using default OnlineComponentProvider"),await Pu(n,new Go))),n._onlineComponents}function vw(n){return mf(n).then((e=>e.syncEngine))}async function si(n){const e=await mf(n),t=e.eventManager;return t.onListen=rw.bind(null,e.syncEngine),t.onUnlisten=ow.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aw.bind(null,e.syncEngine),t}function Ew(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const f=new Wa({next:g=>{f.Ou(),a.enqueueAndForget((()=>Ua(i,m)));const w=g.docs.has(c);!w&&g.fromCache?d.reject(new L(P.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?d.reject(new L(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new $a(_i(c.path),f,{includeMetadataChanges:!0,ka:!0});return Fa(i,m)})(await si(n),n.asyncQueue,e,t,r))),r.promise}function ww(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const f=new Wa({next:g=>{f.Ou(),a.enqueueAndForget((()=>Ua(i,m))),g.fromCache&&u.source==="server"?d.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new $a(c,f,{includeMetadataChanges:!0,ka:!0});return Fa(i,m)})(await si(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function gf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ku=new Map;/**
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
 */const _f="firestore.googleapis.com",xu=!0;class Du{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_f,this.ssl=xu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:xu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Zv)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Fy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Si{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Du({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Du(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Py;switch(r.type){case"firstParty":return new Ny(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=ku.get(t);r&&(O("ComponentProvider","Removing Datastore"),ku.delete(t),r.terminate())})(this),Promise.resolve()}}function Iw(n,e,t,r={}){var s;n=Ne(n,Si);const i=Un(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(uh(`https://${u}`),hh("Firestore",!0)),a.host!==_f&&a.host!==u&&Mt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:r});if(!cn(d,c)&&(n._setSettings(d),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Ae.MOCK_USER;else{f=Op(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ae(g)}n._authCredentials=new ky(new id(f,m))}}/**
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
 */class Et{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Et(this.firestore,e,this._query)}}class oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oe(this.firestore,e,this._key)}toJSON(){return{type:oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Wr(t,oe._jsonSchema))return new oe(e,r||null,new F(Z.fromString(t.referencePath)))}}oe._jsonSchemaVersion="firestore/documentReference/1.0",oe._jsonSchema={type:he("string",oe._jsonSchemaVersion),referencePath:he("string")};class Ot extends Et{constructor(e,t,r){super(e,t,_i(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new oe(this.firestore,null,new F(e))}withConverter(e){return new Ot(this.firestore,e,this._path)}}function ht(n,e,...t){if(n=pe(n),ad("collection","path",e),n instanceof Si){const r=Z.fromString(e,...t);return Hl(r),new Ot(n,null,r)}{if(!(n instanceof oe||n instanceof Ot))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Hl(r),new Ot(n.firestore,null,r)}}function je(n,e,...t){if(n=pe(n),arguments.length===1&&(e=_a.newId()),ad("doc","path",e),n instanceof Si){const r=Z.fromString(e,...t);return Wl(r),new oe(n,null,new F(r))}{if(!(n instanceof oe||n instanceof Ot))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Wl(r),new oe(n.firestore,n instanceof Ot?n.converter:null,new F(r))}}/**
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
 */const Nu="AsyncQueue";class Vu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Xd(this,"async_queue_retry"),this.oc=()=>{const r=_o();r&&O(Nu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=_o();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=_o();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ut;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Wn(e))throw e;O(Nu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,pt("INTERNAL UNHANDLED ERROR: ",Lu(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Oa.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&B(47125,{hc:Lu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Lu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Ou(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class gt extends Si{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Vu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vu(e),this._firestoreClient=void 0,await e}}}function Tw(n,e){const t=typeof n=="object"?n:mh(),r=typeof n=="string"?n:Ks,s=oa(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vp("firestore");i&&Iw(s,...i)}return s}function Ri(n){if(n._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bw(n),n._firestoreClient}function bw(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,u,d,f){return new Qy(c,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,gf(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new _w(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(ve.fromBase64String(e))}catch(t){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wr(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:he("string",Be._jsonSchemaVersion),bytes:he("string")};/**
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
 */class Ci{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ha{constructor(e){this._methodName=e}}/**
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
 */class et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:et._jsonSchemaVersion}}static fromJSON(e){if(Wr(e,et._jsonSchema))return new et(e.latitude,e.longitude)}}et._jsonSchemaVersion="firestore/geoPoint/1.0",et._jsonSchema={type:he("string",et._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
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
 */class tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wr(e,tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new tt(e.vectorValues);throw new L(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tt._jsonSchemaVersion="firestore/vectorValue/1.0",tt._jsonSchema={type:he("string",tt._jsonSchemaVersion),vectorValues:he("object")};/**
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
 */const Aw=/^__.*__$/;class Sw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hr(e,this.data,t,this.fieldTransforms)}}class yf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{Ec:n})}}class za{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new za(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ii(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(vf(this.Ec)&&Aw.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Rw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ti(e)}Dc(e,t,r,s=!1){return new za({Ec:e,methodName:t,bc:r,path:ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pi(n){const e=n._freezeSettings(),t=Ti(n._databaseId);return new Rw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ef(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Ga("Data must be an object, but it was:",a,r);const c=wf(r,a);let u,d;if(i.merge)u=new Oe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=Ko(e,m,t);if(!a.contains(g))throw new L(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Tf(f,g)||f.push(g)}u=new Oe(f),d=a.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,d=a.fieldTransforms;return new Sw(new De(c),u,d)}class ki extends Ha{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ki}}function Cw(n,e,t,r){const s=n.Dc(1,e,t);Ga("Data must be an object, but it was:",s,r);const i=[],a=De.empty();Ht(r,((u,d)=>{const f=Ka(e,u,t);d=pe(d);const m=s.gc(f);if(d instanceof ki)i.push(f);else{const g=Qr(d,m);g!=null&&(i.push(f),a.set(f,g))}}));const c=new Oe(i);return new yf(a,c,s.fieldTransforms)}function Pw(n,e,t,r,s,i){const a=n.Dc(1,e,t),c=[Ko(e,r,t)],u=[s];if(i.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Ko(e,i[g])),u.push(i[g+1]);const d=[],f=De.empty();for(let g=c.length-1;g>=0;--g)if(!Tf(d,c[g])){const w=c[g];let R=u[g];R=pe(R);const D=a.gc(w);if(R instanceof ki)d.push(w);else{const x=Qr(R,D);x!=null&&(d.push(w),f.set(w,x))}}const m=new Oe(d);return new yf(f,m,a.fieldTransforms)}function kw(n,e,t,r=!1){return Qr(t,n.Dc(r?4:3,e))}function Qr(n,e){if(If(n=pe(n)))return Ga("Unsupported field value:",e,n),wf(n,e);if(n instanceof Ha)return(function(r,s){if(!vf(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=Qr(c,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=te.fromDate(r);return{timestampValue:ei(s.serializer,i)}}if(r instanceof te){const i=new te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ei(s.serializer,i)}}if(r instanceof et)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:$d(s.serializer,r._byteString)};if(r instanceof oe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ra(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tt)return(function(a,c){return{mapValue:{fields:{[gd]:{stringValue:_d},[Qs]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Ta(c.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${fi(r)}`)})(n,e)}function wf(n,e){const t={};return ud(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ht(n,((r,s)=>{const i=Qr(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function If(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof te||n instanceof et||n instanceof Be||n instanceof oe||n instanceof Ha||n instanceof tt)}function Ga(n,e,t){if(!If(t)||!cd(t)){const r=fi(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Ko(n,e,t){if((e=pe(e))instanceof Ci)return e._internalPath;if(typeof e=="string")return Ka(n,e);throw ii("Field path arguments must be of type string or ",n,!1,void 0,t)}const xw=new RegExp("[~\\*/\\[\\]]");function Ka(n,e,t){if(e.search(xw)>=0)throw ii(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ci(...e.split("."))._internalPath}catch{throw ii(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ii(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new L(P.INVALID_ARGUMENT,c+n+u)}function Tf(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class bf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dw extends bf{data(){return super.data()}}function xi(n,e){return typeof e=="string"?Ka(n,e):e instanceof Ci?e._internalPath:e._delegate._internalPath}/**
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
 */function Af(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qa{}class Ja extends Qa{}function Mr(n,e,...t){let r=[];e instanceof Qa&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof Ya)).length,c=i.filter((u=>u instanceof Di)).length;if(a>1||a>0&&c>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Di extends Ja{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Di(e,t,r)}_apply(e){const t=this._parse(e);return Rf(e._query,t),new Et(e.firestore,e.converter,Fo(e._query,t))}_parse(e){const t=Pi(e.firestore);return(function(i,a,c,u,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Uu(m,f);const R=[];for(const D of m)R.push(Fu(u,i,D));g={arrayValue:{values:R}}}else g=Fu(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Uu(m,f),g=kw(c,a,m,f==="in"||f==="not-in");return ue.create(d,f,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Sf(n,e,t){const r=e,s=xi("where",n);return Di._create(s,r,t)}class Ya extends Qa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ya(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ge.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Rf(a,u),a=Fo(a,u)})(e._query,t),new Et(e.firestore,e.converter,Fo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xa extends Ja{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xa(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vr(i,a)})(e._query,this._field,this._direction);return new Et(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Hn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Qo(n,e="asc"){const t=e,r=xi("orderBy",n);return Xa._create(r,t)}class Za extends Ja{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Za(e,t,r)}_apply(e){return new Et(e.firestore,e.converter,Ys(e._query,this._limit,this._limitType))}}function Mu(n){return Za._create("limit",n,"F")}function Fu(n,e,t){if(typeof(t=pe(t))=="string"){if(t==="")throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ad(e)&&t.indexOf("/")!==-1)throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Z.fromString(t));if(!F.isDocumentKey(r))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zl(n,new F(r))}if(t instanceof oe)return Zl(n,t._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fi(t)}.`)}function Uu(n,e){if(!Array.isArray(n)||n.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rf(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Nw{convertValue(e,t="none"){switch($t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ht(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Qs].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>ce(a.doubleValue)));return new tt(i)}convertGeoPoint(e){return new et(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=gi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(xr(e));default:return null}}convertTimestamp(e){const t=Ut(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);Y(Gd(r),9688,{name:e});const s=new Dr(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(t)||pt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Cf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class _r{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sn extends bf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Os(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(xi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=sn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",sn._jsonSchema={type:he("string",sn._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class Os extends sn{data(e={}){return super.data(e)}}class on{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new _r(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Os(this._firestore,this._userDataWriter,r.key,r,new _r(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new Os(s._firestore,s._userDataWriter,c.doc.key,c.doc,new _r(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Os(s._firestore,s._userDataWriter,c.doc.key,c.doc,new _r(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Vw(c.type),doc:u,oldIndex:d,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=on._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_a.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Vw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
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
 */function Pf(n){n=Ne(n,oe);const e=Ne(n.firestore,gt);return Ew(Ri(e),n._key).then((t=>kf(e,n,t)))}on._jsonSchemaVersion="firestore/querySnapshot/1.0",on._jsonSchema={type:he("string",on._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};class ec extends Nw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new oe(this.firestore,null,t)}}function Jo(n){n=Ne(n,Et);const e=Ne(n.firestore,gt),t=Ri(e),r=new ec(e);return Af(n._query),ww(t,n._query).then((s=>new on(e,r,n,s)))}function Gt(n,e,t){n=Ne(n,oe);const r=Ne(n.firestore,gt),s=Cf(n.converter,e,t);return Li(r,[Ef(Pi(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,$e.none())])}function Jr(n,e,t,...r){n=Ne(n,oe);const s=Ne(n.firestore,gt),i=Pi(s);let a;return a=typeof(e=pe(e))=="string"||e instanceof Ci?Pw(i,"updateDoc",n._key,e,t,r):Cw(i,"updateDoc",n._key,e),Li(s,[a.toMutation(n._key,$e.exists(!0))])}function Ni(n){return Li(Ne(n.firestore,gt),[new ba(n._key,$e.none())])}function Vi(n,e){const t=Ne(n.firestore,gt),r=je(n),s=Cf(n.converter,e);return Li(t,[Ef(Pi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,$e.exists(!1))]).then((()=>r))}function vo(n,...e){var t,r,s;n=pe(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Ou(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ou(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,d,f;if(n instanceof oe)d=Ne(n.firestore,gt),f=_i(n._key.path),u={next:m=>{e[a]&&e[a](kf(d,n,m))},error:e[a+1],complete:e[a+2]};else{const m=Ne(n,Et);d=Ne(m.firestore,gt),f=m._query;const g=new ec(d);u={next:w=>{e[a]&&e[a](new on(d,g,m,w))},error:e[a+1],complete:e[a+2]},Af(n._query)}return(function(g,w,R,D){const x=new Wa(D),V=new $a(w,x,R);return g.asyncQueue.enqueueAndForget((async()=>Fa(await si(g),V))),()=>{x.Ou(),g.asyncQueue.enqueueAndForget((async()=>Ua(await si(g),V)))}})(Ri(d),f,c,u)}function Li(n,e){return(function(r,s){const i=new ut;return r.asyncQueue.enqueueAndForget((async()=>cw(await vw(r),s,i))),i.promise})(Ri(n),e)}function kf(n,e,t){const r=t.docs.get(e._key),s=new ec(n);return new sn(n,s,e._key,r,new _r(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){jn=s})(Bn),Nn(new ln("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new gt(new xy(r.getProvider("auth-internal")),new Vy(a,r.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dr(d.options.projectId,f)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Vt(Ul,Bl,e),Vt(Ul,Bl,"esm2017")})();const Lw={apiKey:"AIzaSyCHuTKvBK0R6poomtYMVtbqiamKbsoHX6o",authDomain:"md-reptrack.firebaseapp.com",projectId:"md-reptrack",storageBucket:"md-reptrack.firebasestorage.app",messagingSenderId:"196897655189",appId:"1:196897655189:web:22859f09e3ce8db015ce9c",measurementId:"G-W271BRRRDE"},xf=ph(Lw),hr=Ay(xf),Re=Tw(xf),Yr="ul-cardio-v1",Qe=10,Yo=3,Ow=8,Mw=5,Fw=12,Df={barbell:{inc:2.5,step:2.5},machine:{inc:2.5,step:2.5},dumbbell:{inc:2,step:2},heavy:{inc:5,step:2.5},bw:{inc:0,step:0}},se=(n,e,t,r={})=>({name:n,start:e,equip:t,...r}),tn=(n,e)=>({name:n,minutes:e,cardio:!0}),nn="Incline Walk",Nf="Intervals (Bike/Rower)",Uw=[nn,Nf],Vf={upperA:{label:"Upper A",items:[se("Bench Press",35,"barbell"),se("Chest-Supported Row",35,"machine"),se("Overhead Press",17.5,"barbell"),se("Lat Pulldown",35,"machine"),se("Dumbbell Curl",10,"dumbbell",{each:!0,repsFirst:!0,superset:"Tricep Pushdown"}),se("Tricep Pushdown",15,"machine",{repsFirst:!0,superset:"Dumbbell Curl"}),tn(nn,30)]},lowerA:{label:"Lower A",items:[se("Hack Squat",50,"heavy"),se("Dumbbell Romanian Deadlift",16,"dumbbell",{each:!0,repsFirst:!0}),se("Leg Curl",25,"machine"),se("Walking Lunge","BW","bw",{note:"10 each leg"}),se("Standing Calf Raise",40,"machine"),tn(nn,30)]},upperB:{label:"Upper B",items:[se("Incline Dumbbell Press",14,"dumbbell",{each:!0,repsFirst:!0}),se("Seated Cable Row",30,"machine"),se("Seated Dumbbell Shoulder Press",12,"dumbbell",{each:!0,repsFirst:!0}),se("Close-Grip Lat Pulldown",35,"machine"),se("Lateral Raise",6,"dumbbell",{each:!0,repsFirst:!0,superset:"Face Pull"}),se("Face Pull",14,"machine",{repsFirst:!0,superset:"Lateral Raise"}),tn(nn,30)]},lowerB:{label:"Lower B",items:[se("Barbell Hip Thrust",50,"barbell"),se("Leg Press",60,"heavy"),se("Leg Extension",30,"machine"),se("Leg Curl",25,"machine"),se("Standing Calf Raise",40,"machine"),tn(nn,30)]},cardio:{label:"Cardio",items:[]},rest:{label:"Rest",items:[]}},Lf=["rest","upperA","lowerA","cardio","upperB","lowerB","cardio"];function oi(n){const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)}function Bw(n){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Of(n){return Lf[oi(n).getDay()]}function Bu(n){const e=oi(n),t=e.getDay();return e.setDate(e.getDate()+(t===0?1:1-t)),Bw(e)}function $w(n,e){const t=Math.round((oi(e)-oi(n))/864e5);return Math.max(1,Math.floor(t/7)+1)}function jw(n,e){const t=Vf[n];if(n==="cardio"){const i=e>=4?[tn(Nf,20),tn(nn,25)]:[tn(nn,45)];return{key:n,label:t.label,items:i,note:e>=4?"Intervals: 1 min hard, 2 min easy":""}}let r=0;const s=t.items.map((i,a)=>{if(i.cardio)return i;r++;const c=e>Ow&&r<=2?Yo+1:Yo,u=!!i.superset&&t.items.findIndex(d=>d.name===i.superset)>a;return{...i,sets:c,supersetFirst:u}});return{key:n,label:t.label,items:s,note:""}}function qw(n,e){return e?Math.floor(n/e+1e-9)*e:n}function Ww(n,e,t,r){const s={};return n.forEach(i=>{if(i.program!==Yr||i.exercise!==e)return;const a=r(i);!a||a>=t||(s[a]||(s[a]={dateId:a,weight:i.weight,reps:[],targetSets:i.targetSets||Yo,targetReps:i.targetReps||Qe}),s[a].reps.push(Number(i.reps)||0))}),Object.values(s).sort((i,a)=>i.dateId<a.dateId?1:-1)}function $u(n){const e=n.targetReps||Qe;return n.reps.length>=n.targetSets&&n.reps.every(t=>t>=e)}function Hw(n,e){if(n.equip==="bw")return{weight:"BW",reps:Qe,reason:"bw"};if(e.length===0)return{weight:n.start,reps:Qe,reason:"start"};const t=e[0],r=Number(t.weight),s=n.repsFirst&&t.targetReps||Qe,{inc:i,step:a}=Df[n.equip];if($u(t))return n.repsFirst&&s<Fw?{weight:r,reps:s+1,reason:"reps"}:{weight:r+i,reps:Qe,reason:"up"};const c=e.slice(0,3);return c.length===3&&c.every(d=>Number(d.weight)===r&&(d.targetReps||Qe)===t.targetReps&&!$u(d))?{weight:qw(r*.9,a),reps:Qe,reason:"deload"}:{weight:r,reps:s,reason:"same"}}function zw(n){var e;return((e=Df[n.equip])==null?void 0:e.step)||0}function Gw(n,e=Qe){return n==null?e:n<=Mw?null:Math.min(n,e)-1}const yr=["Bench Press","Omni Row","Incline DB Press","Lateral Raises","Tricep Pushdowns","Hack Squat","Romanian Deadlift","Bulgarian Split Squat","Standing Calf Raises","Overhead Press","Heavy Pulldowns","Face Pull","Hammer Curls","EZ Bar Curls","Trap Bar Deadlift","Leg Press","Leg Extensions","Leg Curl"],an=["Bike/row conditioning","Running",...Uw],Kw={1:["Planks","Super man (YWT)","Child pose/Back Stretch","Upward/Downward","Bridge","V1","Lungeattack1","Sky1","lunge knee 1","lunge knee deeper hold 1","hold foot 1","V2","Lungeattack2","Sky2","lunge knee 2","lunge knee deeper hold 2","hold foot 2","Pigeon 52"],2:["PR Static Hold Left Right","PR Dynamic Left Right","PR Dynamic knee/foot up 10 reps each","PR Dynamic push up using feet","PR Dynamic Stretch 2 each","Warriors 1 (30s each L/R)","Warriors 2 (30s each L/R)","Warriors 3 (30s each L/R)","Warriors 4","Warriors 5","Labada yoga squat + hands up","Necks/Arms","Standing back stretch","Wall sits","Monkey","Bear","Crab","Frog"]},ju=["#00E676","#3B82F6","#F59E0B","#EF4444","#A855F7","#EC4899","#06B6D4","#F97316","#8B5CF6","#14B8A6","#F43F5E","#10B981","#6366F1","#84CC16","#D946EF"],C={currentUser:null,unsubscribes:[],chartInstance:null,chartModule:null,availableExercises:[...yr],workoutsCache:[],bodyweightCache:[],sessionsCache:{},todayBWDocId:null,allWorkoutsCache:[],chartDefaultApplied:!1};function ie(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function qe(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Xo(n){const e=[],t={};return n.forEach(r=>{if(r.type!=="workout"||!r.program||r.setIndex==null||!r.timestamp){e.push(r);return}const s=`${qe(r.timestamp.toDate())}|${r.exercise}`;t[s]||(t[s]={type:"set-group",key:s,exercise:r.exercise,sets:[]},e.push(t[s])),t[s].sets.push(r)}),Object.values(t).forEach(r=>r.sets.sort((s,i)=>s.setIndex-i.setIndex)),e}function qu(n,e,t="Saving..."){n&&(e?(n.dataset.originalHtml||(n.dataset.originalHtml=n.innerHTML),n.disabled=!0,n.innerHTML=`<span class="inline-block w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2 align-middle"></span>${t}`):(n.disabled=!1,n.dataset.originalHtml&&(n.innerHTML=n.dataset.originalHtml,delete n.dataset.originalHtml)))}function de(n,e=!1){const t=document.createElement("div");t.className=`fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full text-sm font-bold shadow-2xl z-[100] animate-fade-in ${e?"bg-red-500 text-white":"bg-[#00E676] text-black"}`,t.textContent=n,document.body.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transition="opacity 0.3s ease",setTimeout(()=>t.remove(),300)},3e3)}typeof window<"u"&&(window.showToast=de);const Wu=document.getElementById("auth-screen"),As=document.getElementById("auth-email"),Eo=document.getElementById("auth-password"),Zo=document.getElementById("login-btn"),ea=document.getElementById("register-btn"),rn=document.getElementById("forgot-password-btn"),Hu=document.getElementById("auth-loading"),ai=document.getElementById("auth-error");function Xt(n){ai.textContent=n,ai.classList.remove("hidden")}function wo(n,e){const t=(n==null?void 0:n.code)||"";return t.includes("referer")||t.includes("blocked")?"This site URL is not allowed for Firebase. Add it to your API key HTTP referrers in Google Cloud Console.":t==="auth/network-request-failed"?"Network error reaching Firebase. Check connection and API key restrictions.":t==="auth/invalid-email"?"Enter a valid email address.":t==="auth/user-not-found"||t==="auth/wrong-password"||t==="auth/invalid-credential"?"Invalid email or password.":t==="auth/email-already-in-use"?"An account with this email already exists.":t==="auth/weak-password"?"Password must be at least 6 characters.":t==="auth/too-many-requests"?"Too many attempts. Try again later.":e}function St(n){n?(Hu.classList.remove("hidden"),Zo.disabled=!0,ea.disabled=!0,rn&&(rn.disabled=!0),ai.classList.add("hidden")):(Hu.classList.add("hidden"),Zo.disabled=!1,ea.disabled=!1,rn&&(rn.disabled=!1))}function Qw(n){Zo.addEventListener("click",async()=>{const e=As.value.trim(),t=Eo.value;if(!e||!t){Xt("Enter email and password");return}St(!0);try{await u_(hr,e,t)}catch(r){console.error("Login failed:",r),Xt(wo(r,"Invalid credentials.")),St(!1)}}),ea.addEventListener("click",async()=>{const e=As.value.trim(),t=Eo.value;if(!e||!t){Xt("Enter email and password");return}if(t.length<6){Xt("Min 6 characters");return}St(!0);try{await l_(hr,e,t)}catch(r){console.error("Registration failed:",r),Xt(wo(r,"Registration failed.")),St(!1)}}),rn==null||rn.addEventListener("click",async()=>{const e=As.value.trim();if(!e){Xt("Enter your email above, then tap Forgot password");return}St(!0);try{await c_(hr,e),de("Password reset email sent"),ai.classList.add("hidden")}catch(t){Xt(wo(t,"Could not send reset email."))}finally{St(!1)}}),f_(hr,e=>{if(e){C.currentUser=e,Wu.classList.add("opacity-0","pointer-events-none"),document.getElementById("user-email").textContent=e.email.split("@")[0],document.getElementById("user-info").classList.remove("hidden"),As.value="",Eo.value="",St(!1);const t=new Date,r=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;document.getElementById("input-date").value=r,n(e)}else C.currentUser=null,C.chartDefaultApplied=!1,Wu.classList.remove("opacity-0","pointer-events-none"),document.getElementById("user-info").classList.add("hidden"),St(!1),C.unsubscribes.forEach(t=>t()),C.unsubscribes=[]}),document.getElementById("logout-btn").addEventListener("click",()=>p_(hr))}const Xr=()=>je(Re,"users",C.currentUser.uid,"settings","exercises");async function Jw(){if(!C.currentUser)return;const n=Xr(),e=await Pf(n);if(e.exists()){const t=e.data();if(t.listVersion!==2){const r=yr.map(a=>a.toLowerCase());let s=(t.list||[]).filter(a=>!r.includes(a.toLowerCase()));const i=new Set(r);s=s.filter(a=>{const c=a.toLowerCase();return i.has(c)?!1:(i.add(c),!0)}),C.availableExercises=[...yr,...s]}else{const r=t.list||[],s=[],i=new Set;for(const c of r){const u=c.toLowerCase();i.has(u)||(i.add(u),s.push(c))}const a=yr.filter(c=>!i.has(c.toLowerCase()));C.availableExercises=[...s,...a]}}else C.availableExercises=[...yr];await Gt(n,{list:C.availableExercises,listVersion:2},{merge:!0}),Zr()}async function Yw(n){if(!n)return;n=n.trim(),n=n.charAt(0).toUpperCase()+n.slice(1);const e=n.toLowerCase();if(!C.availableExercises.some(r=>r.toLowerCase()===e)){C.availableExercises.push(n),Zr(),await Gt(Xr(),{list:C.availableExercises},{merge:!0});const r=document.getElementById("input-exercise");r.value=n,r.dispatchEvent(new Event("change"))}}async function Xw(n){C.availableExercises=C.availableExercises.filter(e=>e!==n),Zr(),await Gt(Xr(),{list:C.availableExercises},{merge:!0}),pn()}function Zr(){const n=document.getElementById("input-exercise"),e=n.value;n.innerHTML='<option value="" disabled selected>Select Exercise</option>',C.availableExercises.forEach(t=>{const r=document.createElement("option");r.value=t,r.textContent=t,n.appendChild(r)}),C.availableExercises.includes(e)&&(n.value=e)}const Io=document.getElementById("exercise-modal"),zu=document.getElementById("manage-exercise-list");async function Gu(n,e){const t=n+e;if(t<0||t>=C.availableExercises.length)return;const r=C.availableExercises[n];C.availableExercises[n]=C.availableExercises[t],C.availableExercises[t]=r,pn(),Zr(),await Gt(Xr(),{list:C.availableExercises},{merge:!0})}async function Zw(n,e){let t=e.trim();const r=C.availableExercises.find(s=>s.toLowerCase()===t.toLowerCase());r&&(t=r);try{de("Updating records...");const s=ht(Re,"users",C.currentUser.uid,"workouts"),i=Mr(s,Sf("exercise","==",n)),a=await Jo(i),c=[];a.forEach(f=>c.push(Jr(je(Re,"users",C.currentUser.uid,"workouts",f.id),{exercise:t}))),await Promise.all(c);const u=C.availableExercises.indexOf(n);u>-1?C.availableExercises.includes(t)&&t!==n?C.availableExercises.splice(u,1):C.availableExercises[u]=t:C.availableExercises.includes(t)||C.availableExercises.push(t),await Gt(Xr(),{list:C.availableExercises},{merge:!0}),Zr(),pn(),de(`Merged/Renamed to "${t}"`);const d=document.getElementById("input-exercise");(d.value===n||d.value===t)&&(d.value=t,d.dispatchEvent(new Event("change")))}catch{de("Error updating records",!0),pn()}}function pn(){zu.innerHTML="",C.availableExercises.forEach((n,e)=>{const t=document.createElement("div");t.className="flex justify-between items-center py-3 border-b border-[#111] last:border-0";const r=document.createElement("div");r.className="flex-1 min-w-0 mr-2";const s=document.createElement("span");s.className="text-sm text-gray-200 block w-full",s.textContent=n,r.appendChild(s);const i=document.createElement("div");i.className="flex gap-3 items-center shrink-0";const a=document.createElement("button");a.innerHTML='<i class="fa-solid fa-arrow-up"></i>',a.className=`text-gray-600 hover:text-white transition ${e===0?"opacity-30 cursor-not-allowed":""}`,a.onclick=()=>{e>0&&Gu(e,-1)};const c=document.createElement("button");c.innerHTML='<i class="fa-solid fa-arrow-down"></i>',c.className=`text-gray-600 hover:text-white transition ${e===C.availableExercises.length-1?"opacity-30 cursor-not-allowed":""}`,c.onclick=()=>{e<C.availableExercises.length-1&&Gu(e,1)};const u=document.createElement("button");u.innerHTML='<i class="fa-solid fa-pen text-[10px]"></i>',u.className="w-6 h-6 rounded-full bg-[#111] text-white hover:bg-[#222] transition flex items-center justify-center ml-2";const d=document.createElement("button");d.innerHTML='<i class="fa-solid fa-times"></i>',d.className="text-red-500/70 hover:text-red-400 transition ml-1",d.onclick=()=>Xw(n),u.onclick=()=>{a.style.display="none",c.style.display="none",d.style.display="none";const f=document.createElement("input");f.type="text",f.value=n,f.className="w-full bg-[#111] text-white text-sm p-2 rounded-lg focus:outline-none",r.replaceChild(f,s),f.focus(),u.innerHTML='<i class="fa-solid fa-check text-[#00E676]"></i>';const m=async()=>{f.value&&f.value!==n?await Zw(n,f.value):pn()};u.onclick=m,f.onkeydown=g=>{g.key==="Enter"&&m()}},i.append(a,c,u,d),t.append(r,i),zu.appendChild(t)})}function eI(){document.getElementById("open-manager-btn").addEventListener("click",()=>{Io.classList.remove("hidden"),pn()}),document.getElementById("close-modal-btn").addEventListener("click",()=>Io.classList.add("hidden")),document.getElementById("add-exercise-btn").addEventListener("click",()=>{const n=document.getElementById("new-exercise-input");n.value&&(Yw(n.value),n.value="",pn(),Io.classList.add("hidden"))})}function Ku(){const n=document.getElementById("input-date"),e=document.getElementById("date-warning-banner"),t=document.getElementById("date-warning-text");if(!n||!e||!t)return;const r=qe(),s=n.value;if(!s||s===r){e.classList.add("hidden");return}const[i,a,c]=s.split("-").map(Number),d=new Date(i,a-1,c).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric"}),f=s<r;t.textContent=f?`Logging to a past date: ${d}`:`Logging to a future date: ${d}`,e.classList.remove("hidden")}function tI(){var s;const n=document.getElementById("input-reps");for(let i=1;i<=30;i++){const a=document.createElement("option");a.value=i,a.textContent=i,n.appendChild(a)}document.getElementById("input-exercise").addEventListener("change",i=>{const a=i.target.value;if(!a)return;const c=an.includes(a),u=document.getElementById("container-sets"),d=document.getElementById("container-weight"),f=document.getElementById("container-reps"),m=document.getElementById("label-weight"),g=document.getElementById("bw-hint");c?(u.style.display="none",f.style.display="none",d.classList.replace("col-span-1","col-span-3"),m.textContent="Minutes",document.getElementById("input-weight").placeholder="e.g. 30",document.getElementById("input-reps").removeAttribute("required"),g==null||g.classList.add("hidden")):(u.style.display="block",f.style.display="block",d.classList.replace("col-span-3","col-span-1"),m.textContent="Load (kg/BW)",document.getElementById("input-weight").placeholder="kg / BW",document.getElementById("input-reps").setAttribute("required","true"),g==null||g.classList.remove("hidden"));const w=C.workoutsCache.find(V=>V.exercise===a);w?(c||(document.getElementById("input-set-count").value=w.setCount||1,document.getElementById("input-reps").value=w.reps||""),document.getElementById("input-weight").value=w.weight):(c||(document.getElementById("input-set-count").value=1,document.getElementById("input-reps").value=""),document.getElementById("input-weight").value="");const R=document.getElementById("log-advice-1rm"),D=C.workoutsCache.filter(V=>V.exercise===a);if(c)R.textContent="";else{let V=0;D.forEach(M=>{if(M.weight!=="BW"&&!isNaN(parseFloat(M.weight))){const j=parseFloat(M.weight)*(1+M.reps/30);j>V&&(V=j)}}),R.textContent=V>0?`~1RM: ${Math.round(V)} kg`:""}const x=document.getElementById("log-recent-history");x.innerHTML="",D.slice(0,3).forEach(V=>{const M=V.timestamp?V.timestamp.toDate():new Date,j=`${M.getFullYear()}-${String(M.getMonth()+1).padStart(2,"0")}-${String(M.getDate()).padStart(2,"0")}`,K=document.createElement("div");K.className="text-[10px] text-gray-500 font-mono tracking-wide",an.includes(V.exercise)?K.textContent=`${j} — ${V.weight} mins`:K.textContent=`${j} — ${V.setCount||1} sets of ${V.weight==="BW"?"BW":`${V.weight}kg`} × ${V.reps}`,x.appendChild(K)})}),document.getElementById("input-weight").addEventListener("blur",i=>{const a=i.target.value.trim().toUpperCase();if(a==="BW"){i.target.value="BW";return}a&&!isNaN(a)&&(i.target.value=parseFloat(a).toFixed(1))}),(s=document.getElementById("bw-chip"))==null||s.addEventListener("click",()=>{const i=document.getElementById("input-weight");i.value="BW",i.focus()});const t=document.getElementById("input-date");t&&!t.value&&(t.value=qe()),t==null||t.addEventListener("change",Ku),Ku();const r=document.getElementById("log-submit-btn");document.getElementById("log-form").addEventListener("submit",async i=>{if(i.preventDefault(),!C.currentUser)return;const a=document.getElementById("input-exercise").value,c=document.getElementById("input-weight").value,u=document.getElementById("input-reps").value,d=document.getElementById("input-set-count").value;if(!a){de("Select an exercise",!0);return}const f=an.includes(a);let m=c.trim().toUpperCase()==="BW"&&!f?"BW":parseFloat(parseFloat(c).toFixed(1));if(m!=="BW"&&isNaN(m)){de(f?"Enter valid minutes":"Invalid weight",!0);return}document.getElementById("input-weight").value=m==="BW"?"BW":m.toFixed(1),qu(r,!0,"Saving...");try{const g=document.getElementById("input-date"),[w,R,D]=g.value.split("-").map(Number),x=new Date(w,R-1,D,12,0,0);await Vi(ht(Re,"users",C.currentUser.uid,"workouts"),{exercise:a,weight:m,reps:f?0:parseInt(u),setCount:f?1:parseInt(d),timestamp:x,dateStr:x.toLocaleDateString()});const V=f?`Logged: ${a} (${m} mins)`:`Logged: ${a} (${d>1?`${d} Sets`:"Set"} - ${m==="BW"?"BW":`${m}kg`} x ${u})`;de(V+(g.value===qe()?"":` on ${x.toLocaleDateString()}`)),f||(document.getElementById("input-set-count").value="1",document.getElementById("input-reps").value=""),document.getElementById("input-exercise").value="",document.getElementById("log-advice-1rm").textContent="",document.getElementById("log-recent-history").innerHTML=""}catch{de("Error saving workout",!0)}finally{qu(r,!1)}})}const ot=document.getElementById("btn-save-bw"),Le=document.getElementById("input-bodyweight"),Ar=document.getElementById("input-date"),Qu=document.getElementById("bw-status-label"),Ju=document.getElementById("last-bw-display");function Ms({statusText:n,valueText:e}){Qu&&(Qu.textContent=n),Ju&&(Ju.textContent=e)}async function Mf(){if(!C.currentUser)return;const n=ot.querySelector("i"),[e,t,r]=Ar.value.split("-").map(Number),s=new Date(e,t-1,r).toLocaleDateString(),a=Ar.value===qe();try{const c=await Jo(Mr(ht(Re,"users",C.currentUser.uid,"bodyweight"),Sf("dateStr","==",s),Mu(1)));if(!c.empty)C.todayBWDocId=c.docs[0].id,Le.value=c.docs[0].data().weight,Ms({statusText:a?"Logged today":"Logged this session",valueText:`${Le.value} kg`}),Le.disabled=!0,n.className="fa-solid fa-pen text-gray-400",ot.title="Edit body weight";else{C.todayBWDocId=null,Le.disabled=!1,n.className="fa-solid fa-check",ot.title="Save body weight";const u=await Jo(Mr(ht(Re,"users",C.currentUser.uid,"bodyweight"),Qo("timestamp","desc"),Mu(1)));u.empty?(Ms({statusText:a?"Not logged today":"Not logged this session",valueText:"—"}),Le.value=""):(Le.value=u.docs[0].data().weight,Ms({statusText:a?"Last recorded":"Not logged this session",valueText:`${Le.value} kg`}))}}catch{}}function nI(){Ar.addEventListener("change",Mf),ot.addEventListener("click",async()=>{const n=ot.querySelector("i");if(C.todayBWDocId&&Le.disabled){Le.disabled=!1,Le.focus(),n.className="fa-solid fa-check",ot.title="Save body weight";return}let e=parseFloat(Le.value);if(e<0||!e||!C.currentUser)return;e=parseFloat(e.toFixed(1));const[t,r,s]=Ar.value.split("-").map(Number),i=new Date(t,r-1,s,12,0,0),a=Ar.value===qe();ot.disabled=!0;try{if(C.todayBWDocId)await Jr(je(Re,"users",C.currentUser.uid,"bodyweight",C.todayBWDocId),{weight:e});else{const c=await Vi(ht(Re,"users",C.currentUser.uid,"bodyweight"),{weight:e,timestamp:i,dateStr:i.toLocaleDateString()});C.todayBWDocId=c.id}Ms({statusText:a?"Logged today":"Logged this session",valueText:`${e} kg`}),Le.disabled=!0,n.className="fa-solid fa-pen text-gray-400",ot.title="Edit body weight",de(`Saved: ${e}kg`)}catch{de("Error saving",!0)}finally{Le.disabled||(ot.disabled=!1)}})}let Yu=!1;function rI(){const n=C.chartModule,e=document.getElementById("progressChart").getContext("2d");n.defaults.color="#6B7280",n.defaults.font.family="Inter",C.chartInstance=new n(e,{type:"line",data:{labels:[],datasets:[]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{color:"#9CA3AF",boxWidth:8,font:{size:10}}},tooltip:{mode:"index",intersect:!1,backgroundColor:"#111",titleColor:"#fff",bodyColor:"#ccc",borderColor:"#333",borderWidth:1}},scales:{y:{border:{display:!1},grid:{color:"#111",drawBorder:!1}},x:{border:{display:!1},grid:{display:!1}}}}})}function sI(){Yu||(Yu=!0,document.getElementById("chart-exercise-select").addEventListener("change",n=>tc(n.target.value)))}async function iI(){if(!C.chartModule){const n=await rh(()=>import("./auto-eE5P6S0m.js"),[]);C.chartModule=n.default}if(!C.chartInstance&&(rI(),sI(),C.allWorkoutsCache.length)){const n=document.getElementById("chart-exercise-select");tc(n.value||"All")}return C.chartInstance}function oI(n){C.allWorkoutsCache=n;const e=[...new Set(n.map(s=>s.exercise))].sort(),t=document.getElementById("chart-exercise-select"),r=t.value;t.innerHTML='<option value="All">Overview</option><option value="Body Weight">Body Weight</option>',e.forEach(s=>{const i=document.createElement("option");i.value=s,i.textContent=s,t.appendChild(i)}),r&&(r==="All"||r==="Body Weight"||e.includes(r))?t.value=r:!C.chartDefaultApplied&&n.length>0?(t.value=n[0].exercise,C.chartDefaultApplied=!0):t.value="All",tc(t.value)}function tc(n){if(!C.chartInstance)return;const e=document.getElementById("chart-empty-state"),t=n==="All"?[...C.allWorkoutsCache,...C.bodyweightCache]:n==="Body Weight"?C.bodyweightCache:C.allWorkoutsCache.filter(a=>a.exercise===n);if(t.length===0){C.chartInstance.data.labels=[],C.chartInstance.data.datasets=[],C.chartInstance.update(),e==null||e.classList.remove("hidden"),["stat-est-1rm","stat-max-weight","stat-total-volume","stat-total-reps"].forEach(a=>document.getElementById(a).textContent="-");return}e==null||e.classList.add("hidden");const r=new Map;t.forEach(a=>{a.timestamp&&r.set(a.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"}),a.timestamp.toDate())});const s=Array.from(r.keys()).sort((a,c)=>r.get(a)-r.get(c)),i=[];if(n!=="Body Weight"&&(n==="All"?[...new Set(C.allWorkoutsCache.map(c=>c.exercise))]:[n]).forEach((c,u)=>{const d={};C.allWorkoutsCache.filter(f=>f.exercise===c&&f.timestamp).forEach(f=>{const m=f.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"}),g=f.weight==="BW"?null:parseFloat(f.weight);g!==null&&(!d[m]||g>d[m])&&(d[m]=g)}),i.push({label:c,data:s.map(f=>d[f]||null),borderColor:ju[u%ju.length],borderWidth:2,tension:.4,pointRadius:0,pointHoverRadius:4,spanGaps:!0})}),n==="All"||n==="Body Weight"){const a={};C.bodyweightCache.forEach(c=>{c.timestamp&&(a[c.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"})]=c.weight)}),i.push({label:"Body Weight",data:s.map(c=>a[c]||null),borderColor:"#333",borderDash:[5,5],borderWidth:2,tension:.4,pointRadius:0,spanGaps:!0})}if(C.chartInstance.data.labels=s,C.chartInstance.data.datasets=i,C.chartInstance.update(),n==="All"||n==="Body Weight")["stat-est-1rm","stat-max-weight","stat-total-volume","stat-total-reps"].forEach(a=>document.getElementById(a).textContent="-"),document.querySelector("#stat-max-weight").previousElementSibling.textContent="Peak Load",n==="Body Weight"&&i[0].data.filter(a=>a).length&&(document.getElementById("stat-max-weight").textContent=`${i[0].data.filter(a=>a).pop()}kg`,document.querySelector("#stat-max-weight").previousElementSibling.textContent="Current Weight");else{let a=0,c=0,u=0,d=0;const f=an.includes(n);C.allWorkoutsCache.filter(m=>m.exercise===n).forEach(m=>{const g=m.weight==="BW"?0:parseFloat(m.weight),w=m.reps||0,R=m.setCount||1;if(g>a&&(a=g),!f&&m.weight!=="BW"){const D=g*(1+w/30);D>c&&(c=D),u+=g*w*R,d+=w*R}}),f?(document.querySelector("#stat-max-weight").previousElementSibling.textContent="Longest Time",document.getElementById("stat-max-weight").textContent=`${a} mins`,["stat-est-1rm","stat-total-volume","stat-total-reps"].forEach(m=>document.getElementById(m).textContent="-")):(document.querySelector("#stat-max-weight").previousElementSibling.textContent="Peak Load",document.getElementById("stat-est-1rm").textContent=`${Math.round(c)}kg`,document.getElementById("stat-max-weight").textContent=`${a}kg`,document.getElementById("stat-total-volume").textContent=u>1e3?`${(u/1e3).toFixed(1)}k`:u,document.getElementById("stat-total-reps").textContent=d)}}function aI({title:n="Confirm",message:e,confirmLabel:t="Confirm",danger:r=!0}={}){const s=document.getElementById("confirm-modal"),i=document.getElementById("confirm-modal-title"),a=document.getElementById("confirm-modal-message"),c=document.getElementById("confirm-modal-confirm"),u=document.getElementById("confirm-modal-cancel");return!s||!i||!a||!c||!u?Promise.resolve(window.confirm(e||n)):(i.textContent=n,a.textContent=e||"",c.textContent=t,c.className=r?"flex-1 p-3 rounded-xl text-sm font-bold bg-red-500/90 text-white hover:bg-red-500 transition":"flex-1 p-3 rounded-xl text-sm font-bold bg-[#00E676] text-black hover:opacity-90 transition",s.classList.remove("hidden"),new Promise(d=>{const f=R=>{s.classList.add("hidden"),c.removeEventListener("click",m),u.removeEventListener("click",g),s.removeEventListener("click",w),d(R)},m=()=>f(!0),g=()=>f(!1),w=R=>{R.target===s&&f(!1)};c.addEventListener("click",m),u.addEventListener("click",g),s.addEventListener("click",w)}))}function Oi(){const n=document.getElementById("input-date");return n!=null&&n.value?n.value:qe()}function Ff(){const n=document.getElementById("today-session-name");if(!n)return;const e=Oi();n.value=C.sessionsCache[e]||"",n.placeholder="Name this session..."}async function nc(n,e){if(!C.currentUser)return;const t=e.trim(),r=je(Re,"users",C.currentUser.uid,"sessions",n);t&&t!==n?(await Gt(r,{name:t,dateId:n},{merge:!0}),C.sessionsCache[n]=t):(await Ni(r),delete C.sessionsCache[n])}function Uf(n,e,t=!1){n.querySelector(".edit-log-btn").addEventListener("click",()=>{const r=an.includes(e.exercise),s=e.weight==="BW"?"BW":e.weight;if(e.type==="workout"){const i=ie(e.id);n.innerHTML=`
        <div class="flex flex-col gap-3 w-full animate-fade-in py-1">
          <div class="font-semibold text-[#00E676] text-sm">${ie(e.exercise)}</div>
          ${r?`
            <div class="flex items-center gap-2">
              <input type="number" id="edit-mins-${i}" value="${ie(e.weight)}" class="w-full bg-[#111] text-white p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#333]" placeholder="Minutes">
            </div>
          `:`
            <div class="flex items-center gap-2">
              <div class="flex-1">
                <label class="text-[9px] text-gray-500 uppercase px-1">Sets</label>
                <input type="number" id="edit-sets-${i}" value="${ie(e.setCount||1)}" class="w-full bg-[#111] text-white p-2.5 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#333]">
              </div>
              <div class="flex-1">
                <label class="text-[9px] text-gray-500 uppercase px-1">Load</label>
                <input type="text" id="edit-weight-${i}" value="${ie(s)}" class="w-full bg-[#111] text-white p-2.5 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#333]">
              </div>
              <div class="flex-1">
                <label class="text-[9px] text-gray-500 uppercase px-1">Reps</label>
                <input type="number" id="edit-reps-${i}" value="${ie(e.reps)}" class="w-full bg-[#111] text-white p-2.5 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#333]">
              </div>
            </div>
          `}
          <div class="flex justify-between items-center mt-1 pt-2">
            <button class="delete-btn text-red-500/80 hover:text-red-500 text-xs font-bold px-2 py-1 transition"><i class="fa-solid fa-trash-can mr-1"></i> Delete</button>
            <div class="flex gap-2">
              <button class="cancel-btn text-gray-400 text-xs font-bold px-3 py-2 rounded-lg hover:bg-[#111] transition">Cancel</button>
              <button class="save-btn bg-[#00E676] text-black text-xs font-bold px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition">Save</button>
            </div>
          </div>
        </div>
      `}else if(e.type==="bodyweight"){const i=ie(e.id);n.innerHTML=`
        <div class="flex flex-col gap-3 w-full animate-fade-in py-1">
          <div class="flex items-center gap-2 text-[#00E676]"><i class="fa-solid fa-weight-scale text-xs"></i><span class="font-semibold text-sm">Body Weight</span></div>
          <input type="number" id="edit-bw-${i}" value="${ie(e.weight)}" step="0.1" class="w-full bg-[#111] text-white p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#333]" placeholder="kg">
          <div class="flex justify-between items-center mt-1 pt-2">
            <button class="delete-btn text-red-500/80 hover:text-red-500 text-xs font-bold px-2 py-1 transition"><i class="fa-solid fa-trash-can mr-1"></i> Delete</button>
            <div class="flex gap-2">
              <button class="cancel-btn text-gray-400 text-xs font-bold px-3 py-2 rounded-lg hover:bg-[#111] transition">Cancel</button>
              <button class="save-btn bg-[#00E676] text-black text-xs font-bold px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition">Save</button>
            </div>
          </div>
        </div>
      `}n.querySelector(".cancel-btn").addEventListener("click",()=>{t?sc(C.workoutsCache):Sr()}),n.querySelector(".delete-btn").addEventListener("click",async()=>{const i=e.type==="workout"?e.exercise:"this body weight entry";await aI({title:"Delete log?",message:`Delete ${i}? This cannot be undone.`,confirmLabel:"Delete",danger:!0})&&CI(e.id,e.type==="workout"?"workouts":"bodyweight")}),n.querySelector(".save-btn").addEventListener("click",async()=>{try{let i={};if(e.type==="bodyweight"){const a=parseFloat(document.getElementById(`edit-bw-${e.id}`).value);if(isNaN(a)||a<0)throw new Error;i={weight:parseFloat(a.toFixed(1))}}else if(r){const a=parseFloat(document.getElementById(`edit-mins-${e.id}`).value);if(isNaN(a)||a<0)throw new Error;i={weight:parseFloat(a.toFixed(1))}}else{const a=parseInt(document.getElementById(`edit-sets-${e.id}`).value),c=parseInt(document.getElementById(`edit-reps-${e.id}`).value),u=document.getElementById(`edit-weight-${e.id}`).value.trim().toUpperCase(),d=u==="BW"?"BW":parseFloat(parseFloat(u).toFixed(1));if(isNaN(a)||a<1||isNaN(c)||c<0||d!=="BW"&&(isNaN(d)||d<0))throw new Error;i={setCount:a,reps:c,weight:d}}await Jr(je(Re,"users",C.currentUser.uid,e.type==="workout"?"workouts":"bodyweight",e.id),i),de("Updated successfully")}catch{de("Invalid values",!0)}})})}function Xu(n){const e=document.createElement("div");if(e.className="flex justify-between items-center py-3 border-b border-[#111] last:border-0 group transition-colors",n.type==="workout"){const t=an.includes(n.exercise),r=n.weight==="BW"?"BW":`${n.weight}kg`;e.innerHTML=`
      <div class="flex-1">
        <div class="font-semibold text-gray-200 text-sm">${ie(n.exercise)} <span class="text-[9px] text-gray-500 font-normal ml-1">${n.setCount>1?ie(`${n.setCount} SETS`):""}</span></div>
        <div class="text-xs text-gray-500 mt-0.5">${t?`${ie(n.weight)} mins`:`${ie(r)} × ${ie(n.reps)}`}</div>
      </div>
      <div class="flex items-center gap-3">
        <div class="text-xs font-mono text-gray-600">${t?'<i class="fa-solid fa-stopwatch"></i>':n.weight==="BW"?"-":(n.weight*n.reps*(n.setCount||1)).toFixed(0)}</div>
        <button class="edit-log-btn text-gray-600 hover:text-[#00E676] transition p-2"><i class="fa-solid fa-pen"></i></button>
      </div>
    `}else n.type==="bodyweight"&&(e.innerHTML=`
      <div class="flex-1 flex items-center gap-2"><i class="fa-solid fa-weight-scale text-gray-500 text-xs"></i><span class="font-semibold text-gray-200 text-sm">Body Weight</span></div>
      <div class="flex items-center gap-3">
        <div class="font-bold text-white text-sm">${ie(n.weight)}kg</div>
        <button class="edit-log-btn text-gray-600 hover:text-[#00E676] transition p-2"><i class="fa-solid fa-pen"></i></button>
      </div>
    `);return Uf(e,n,!1),e}function Zu(n){const e=document.createElement("div");e.className="flex justify-between items-center py-3 border-b border-[#111] last:border-0 group";const t=an.includes(n.exercise);return n.weight==="BW"||`${n.weight}`,e.innerHTML=`
    <div class="flex-1">
      <div class="font-semibold text-gray-200 text-sm">${ie(n.exercise)} <span class="text-[9px] text-gray-500 font-normal ml-1">${(n.setCount||1)>1?ie(`${n.setCount} SETS`):""}</span></div>
      <div class="text-xs text-gray-500 mt-0.5">${t?`${ie(n.weight)} mins`:`${ie(n.weight==="BW"?"BW":`${n.weight}kg`)} × ${ie(n.reps)}`}</div>
    </div>
    <div class="flex items-center gap-1">
      <button class="edit-log-btn text-gray-600 hover:text-[#00E676] transition p-2"><i class="fa-solid fa-pen"></i></button>
    </div>
  `,Uf(e,n,!0),e}const Ss=new Set;function cI(n){const e=[...new Set(n.map(r=>r.weight))],t=r=>r==="BW"?"BW":`${r}kg`;return e.length===1?`${t(e[0])} × ${n.map(r=>r.reps).join(" · ")}`:n.map(r=>`${t(r.weight)}×${r.reps}`).join(", ")}function rc(n,e){const t=document.createElement("div");t.className="border-b border-[#111] last:border-0";const r=Ss.has(n.key),s=n.sets.reduce((a,c)=>a+(c.weight==="BW"?0:c.weight*c.reps),0),i=document.createElement("button");if(i.type="button",i.className="w-full flex justify-between items-center py-3 text-left",i.innerHTML=`
    <div class="flex-1">
      <div class="font-semibold text-gray-200 text-sm">${ie(n.exercise)} <span class="text-[9px] text-gray-500 font-normal ml-1">${ie(`${n.sets.length} ${n.sets.length===1?"SET":"SETS"}`)}</span></div>
      <div class="text-xs text-gray-500 mt-0.5">${ie(cI(n.sets))}</div>
    </div>
    <div class="flex items-center gap-3">
      <div class="text-xs font-mono text-gray-600">${s?s.toFixed(0):"-"}</div>
      <span class="text-gray-600 p-2"><i class="fa-solid fa-chevron-down text-xs transition-transform ${r?"rotate-180":""}"></i></span>
    </div>
  `,i.addEventListener("click",()=>{Ss.has(n.key)?Ss.delete(n.key):Ss.add(n.key),t.replaceWith(rc(n,e))}),t.appendChild(i),r){const a=document.createElement("div");a.className="ml-3 pl-3 border-l border-[#222] mb-2",n.sets.forEach(c=>a.appendChild(e(c))),t.appendChild(a)}return t}function lI(n){const e=document.getElementById("history-list");if(n.length===0){e.innerHTML='<div class="text-center text-gray-500 mt-10 text-sm">No history yet.</div>';return}const t={};n.forEach(r=>{const s=r.timestamp?r.timestamp.toDate():new Date,i=qe(s);t[i]||(t[i]=[]),t[i].push(r)}),e.innerHTML="",Object.keys(t).sort().reverse().forEach(r=>{const i=(t[r][0].timestamp?t[r][0].timestamp.toDate():new Date).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric"}),a=C.sessionsCache[r]||"",c=a||i,u=document.createElement("div");u.className="mb-8";const d=document.createElement("div");d.className="flex justify-between items-end border-b border-[#1a1a1a] pb-2 mb-2";const f=document.createElement("div"),m=document.createElement("span");m.className="text-[10px] text-[#00E676] uppercase tracking-widest font-semibold",m.textContent=i,f.appendChild(m);const g=document.createElement("div");g.className="flex items-center gap-2 group cursor-pointer mt-1";const w=document.createElement("span");w.className="text-white text-lg font-bold",w.textContent=c;const R=document.createElement("i");R.className="fa-solid fa-pen text-gray-700 text-[10px] opacity-0 group-hover:opacity-100 transition ml-2",g.append(w,R),g.addEventListener("click",()=>{const V=document.createElement("input");V.type="text",V.value=a,V.placeholder="Name this session...",V.className="bg-transparent text-white text-lg font-bold focus:outline-none border-b border-[#333] w-full max-w-[200px]",f.replaceChild(V,g),V.focus();let M=!1;const j=async()=>{if(M)return;M=!0;const K=V.value.trim();try{K!==a&&(await nc(r,K),de("Session renamed"))}catch{de("Error saving session name",!0)}finally{M=!1,Sr()}};V.addEventListener("blur",j),V.addEventListener("keydown",K=>{K.key==="Enter"&&V.blur()})}),f.appendChild(g),d.appendChild(f);const D=document.createElement("span");D.className="text-[10px] text-gray-500 font-mono",D.textContent=`${Xo(t[r]).length} logs`,d.appendChild(D),u.appendChild(d);const x=document.createElement("div");Xo(t[r]).forEach(V=>{x.appendChild(V.type==="set-group"?rc(V,Xu):Xu(V))}),u.appendChild(x),e.appendChild(u)})}function sc(n){const e=document.getElementById("today-list"),t=Oi(),r=n.filter(s=>s.timestamp?qe(s.timestamp.toDate())===t:!1);if(r.length===0){e.innerHTML='<div class="text-gray-600 text-xs tracking-wide">No logs for this session yet.</div>';return}e.innerHTML="",Xo(r).forEach(s=>{e.appendChild(s.type==="set-group"?rc(s,Zu):Zu(s))})}const uI=6;function hI(){const n=document.getElementById("recent-exercise-chips");if(!n)return;const e=new Set,t=[];for(const s of C.workoutsCache){const i=s.exercise;if(!(!i||e.has(i))&&(e.add(i),t.push(i),t.length>=uI))break}if(t.length===0){n.innerHTML="",n.classList.add("hidden");return}n.classList.remove("hidden"),n.innerHTML="";const r=document.createElement("span");r.className="text-[9px] text-gray-600 uppercase tracking-widest mr-1",r.textContent="Recent",n.appendChild(r),t.forEach(s=>{const i=document.createElement("button");i.type="button",i.className="text-[10px] font-semibold px-3 py-1 rounded-full bg-[#111] text-gray-300 hover:text-white hover:bg-[#1a1a1a] border border-[#222] transition",i.textContent=s,i.addEventListener("click",()=>{const a=document.getElementById("input-exercise");a&&[...a.options].some(c=>c.value===s)&&(a.value=s,a.dispatchEvent(new Event("change")))}),n.appendChild(i)})}const dI=90,fI=["S","M","T","W","T","F","S"];let Fe=null,Rn=null;const ta={},To=new Set,na=()=>je(Re,"users",C.currentUser.uid,"settings","program"),Dn=()=>ht(Re,"users",C.currentUser.uid,"workouts"),ic=n=>n.timestamp?qe(n.timestamp.toDate()):null;async function pI(){if(C.currentUser){try{const n=await Pf(na());Fe=n.exists()?n.data().startDate:null,Fe||(Fe=Bu(qe()),await Gt(na(),{startDate:Fe},{merge:!0}))}catch{Fe=Fe||Bu(qe())}mn()}}function mI(n){if((Rn==null?void 0:Rn.dateId)===n)return Rn.dayKey;const e=C.workoutsCache.find(t=>t.program===Yr&&ic(t)===n);return e!=null&&e.programDay?e.programDay:Of(n)}function gI(n,e){if(n==="BW")return"BW";const t=Number(n);return`${Number.isInteger(t)?t:t.toFixed(1)}kg${e?" ea":""}`}function Gn(n,e){return C.workoutsCache.filter(t=>t.program===Yr&&t.exercise===e&&ic(t)===n)}function _I(n,e){const t=Gn(e,n.name),r=Hw(n,Ww(C.workoutsCache,n.name,e,ic));if(t.length)return{...r,weight:t[0].weight,reps:t[0].targetReps||r.reps};const s=`${e}|${n.name}`;return s in ta?{...r,weight:ta[s]}:r}function ci(n,e){const[t,r,s]=n.split("-").map(Number);return new Date(t,r-1,s,12,0,e)}async function Bf(n,e){if(!C.sessionsCache[n])try{await nc(n,e)}catch{}}function yI(){var n;(n=document.querySelector(`.timer-btn[data-time="${dI}"]`))==null||n.click()}async function oc(n,e){if(!To.has(n)){To.add(n);try{await e()}catch{de("Error saving",!0)}finally{To.delete(n)}}}function vI(n,e,t,r,s,i){const a=Gn(s,e.name).find(u=>u.setIndex===r),c=Gw(a?a.reps:null,i.reps);oc(`${s}|${e.name}|${r}`,async()=>{a?c==null?await Ni(je(Dn(),a.id)):await Jr(je(Dn(),a.id),{reps:c}):(await Vi(Dn(),{exercise:e.name,weight:i.weight,reps:c,setCount:1,timestamp:ci(s,t),dateStr:ci(s,0).toLocaleDateString(),program:Yr,programDay:n.key,setIndex:r,targetSets:e.sets,targetReps:i.reps}),e.supersetFirst||yI(),Bf(s,n.label))})}function EI(n,e,t,r){const s=Gn(r,e.name)[0];oc(`${r}|${e.name}`,async()=>{if(s){await Ni(je(Dn(),s.id));return}await Vi(Dn(),{exercise:e.name,weight:e.minutes,reps:0,setCount:1,timestamp:ci(r,t),dateStr:ci(r,0).toLocaleDateString(),program:Yr,programDay:n.key}),Bf(r,n.label)})}function eh(n,e,t,r){const s=zw(n),i=Math.max(0,Number(t)+r*s);ta[`${e}|${n.name}`]=i;const a=Gn(e,n.name);a.length?oc(`${e}|${n.name}|weight`,()=>Promise.all(a.map(c=>Jr(je(Dn(),c.id),{weight:i})))):mn()}const wI={start:{text:"Start weight",cls:"text-gray-500"},up:{text:"Weight up",cls:"text-[#00E676]"},reps:{text:"+1 rep",cls:"text-[#00E676]"},same:{text:"Same as last time",cls:"text-gray-500"},deload:{text:"Deload -10%",cls:"text-amber-400"},bw:{text:"",cls:""}};function Q(n,e,t){const r=document.createElement(n);return e&&(r.className=e),t!=null&&(r.textContent=t),r}function $f(n,e,t){const r=Q("button");r.type="button",r.setAttribute("aria-label",t);const s="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition active:scale-95 select-none";return n==null?r.className=`${s} bg-[#111] border border-[#222] text-gray-600`:n>=e?(r.className=`${s} bg-[#00E676] text-black`,r.innerHTML='<i class="fa-solid fa-check"></i>'):(r.className=`${s} bg-amber-500/20 border border-amber-500/50 text-amber-300`,r.textContent=n),r}function II(n,e,t,r,s){const i=Q("div","py-4 border-b border-[#111] last:border-0"),a=_I(e,s),c=Gn(s,e.name),u=Q("div","flex justify-between items-start gap-3"),d=Q("div","min-w-0");d.append(Q("div","text-sm font-semibold text-gray-100",`${r}. ${e.name}`));const f=Q("div","text-[10px] mt-1 flex flex-wrap gap-x-2");f.append(Q("span","text-gray-400 font-mono",`${e.sets} × ${a.reps}${e.note?` (${e.note})`:""}`));const m=wI[a.reason];if(m!=null&&m.text&&f.append(Q("span",m.cls,m.text)),e.superset){const w=e.supersetFirst?`No rest, go to ${e.superset}`:`Superset w/ ${e.superset}`;f.append(Q("span","text-sky-400",w))}if(d.append(f),u.append(d),a.weight!=="BW"){const w=Q("div","flex items-center gap-1 shrink-0"),R=Q("button","w-8 h-8 rounded-full bg-[#111] text-gray-400 hover:text-white text-xs");R.type="button",R.innerHTML='<i class="fa-solid fa-minus"></i>',R.setAttribute("aria-label",`Lower ${e.name} weight`),R.onclick=()=>eh(e,s,a.weight,-1);const D=Q("button","w-8 h-8 rounded-full bg-[#111] text-gray-400 hover:text-white text-xs");D.type="button",D.innerHTML='<i class="fa-solid fa-plus"></i>',D.setAttribute("aria-label",`Raise ${e.name} weight`),D.onclick=()=>eh(e,s,a.weight,1),w.append(R,Q("span","text-sm font-bold text-white w-[4.5rem] text-center",gI(a.weight,e.each)),D),u.append(w)}else u.append(Q("span","text-sm font-bold text-white shrink-0","BW"));i.append(u);const g=Q("div","flex gap-3 mt-3");for(let w=0;w<e.sets;w++){const R=c.find(x=>x.setIndex===w),D=$f(R?R.reps:null,a.reps,`${e.name} set ${w+1}`);D.onclick=()=>vI(n,e,t,w,s,a),g.append(D)}return i.append(g),{row:i,done:c.filter(w=>w.setIndex<e.sets).length,total:e.sets}}function TI(n,e,t,r){const s=Q("div","py-4 border-b border-[#111] last:border-0 flex justify-between items-center gap-3"),i=Q("div");i.append(Q("div","text-sm font-semibold text-gray-100",e.name)),i.append(Q("div","text-[10px] text-gray-400 font-mono mt-1",`${e.minutes} min`));const a=Gn(r,e.name).length>0,c=$f(a?1:null,1,`${e.name} done`);return c.onclick=()=>EI(n,e,t,r),s.append(i,c),{row:s,done:a?1:0,total:1}}function bI(n,e,t){const r=Q("div","grid grid-cols-7 gap-1 mb-4"),s=Of(e);Lf.forEach((i,a)=>{const c=(a+6)%7,u=Q("button","",null);u.type="button",u.style.order=String(c);const d=i===t,f=i===s;u.className=`flex flex-col items-center py-1.5 rounded-xl text-[9px] font-semibold uppercase tracking-wide transition ${d?"bg-white text-black":f?"bg-[#111] text-white":"bg-[#0a0a0a] text-gray-500 hover:text-white"}`,u.append(Q("span","text-[11px]",fI[a])),u.append(Q("span","opacity-70 normal-case",Vf[i].label.replace("Upper ","Up ").replace("Lower ","Lo "))),u.onclick=()=>{Rn={dateId:e,dayKey:i},mn()},r.append(u)}),n.append(r)}function AI(n){const e=Q("div","flex items-center justify-between gap-2 mb-4 text-[10px] text-gray-500");e.append(Q("span","uppercase tracking-widest font-semibold","Program start"));const t=Q("input","bg-[#111] text-white text-xs rounded-full px-3 py-1 focus:outline-none");t.type="date",t.value=Fe,t.onchange=async()=>{if(t.value){Fe=t.value,mn();try{await Gt(na(),{startDate:Fe},{merge:!0})}catch{de("Error saving start date",!0)}}},e.append(t),n.append(e)}let ra=!1;function mn(){const n=document.getElementById("plan-body"),e=document.getElementById("plan-title"),t=document.getElementById("plan-week");if(!n||!C.currentUser||!Fe)return;const r=Oi(),s=mI(r),i=$w(Fe,r),a=r<Fe,c=jw(s,i);if(e.textContent=c.label,t.textContent=a?"Not started":`Week ${i}`,n.innerHTML="",bI(n,r,s),ra&&AI(n),s==="rest"){n.append(Q("div","text-center py-6 text-gray-500 text-sm","Rest day. Recover, eat, sleep.")),n.append(Q("div","text-center text-[10px] text-gray-600","Missed a day? Pick it above."));return}const u=Q("div","flex justify-between items-center text-[10px] uppercase tracking-widest font-semibold mb-1");n.append(u),c.note&&n.append(Q("div","text-[10px] text-sky-400 mb-1",c.note));const d=Q("div");let f=0,m=0,g=0;c.items.forEach((R,D)=>{const x=R.cardio?TI(c,R,D,r):II(c,R,D,++g,r);f+=x.done,m+=x.total,d.append(x.row)}),n.append(d);const w=m>0&&f>=m;u.append(Q("span",w?"text-[#00E676]":"text-gray-500",w?"Session complete":`${f} / ${m} done`)),u.append(Q("span","text-gray-600 normal-case tracking-normal","Tap = done. Tap again = fewer reps."))}function SI(){var n,e;(n=document.getElementById("plan-week"))==null||n.addEventListener("click",t=>{t.stopPropagation(),ra=!ra,mn()}),(e=document.getElementById("input-date"))==null||e.addEventListener("change",()=>{Rn=null,mn()})}function RI(){C.currentUser&&(C.unsubscribes.forEach(n=>n()),C.unsubscribes=[],C.unsubscribes.push(vo(Mr(ht(Re,"users",C.currentUser.uid,"workouts"),Qo("timestamp","desc")),n=>{C.workoutsCache=n.docs.map(e=>({id:e.id,type:"workout",...e.data()})),Sr(),sc(C.workoutsCache),mn(),hI(),oI(C.workoutsCache),document.getElementById("input-exercise").value&&document.getElementById("input-exercise").dispatchEvent(new Event("change"))})),C.unsubscribes.push(vo(Mr(ht(Re,"users",C.currentUser.uid,"bodyweight"),Qo("timestamp","desc")),n=>{C.bodyweightCache=n.docs.map(e=>({id:e.id,type:"bodyweight",...e.data()})),Sr()})),C.unsubscribes.push(vo(ht(Re,"users",C.currentUser.uid,"sessions"),n=>{C.sessionsCache={},n.forEach(e=>{C.sessionsCache[e.id]=e.data().name}),Ff(),Sr()})))}function Sr(){const n=[...C.workoutsCache,...C.bodyweightCache].sort((e,t)=>{var r,s;return(((r=t.timestamp)==null?void 0:r.toDate())||new Date)-(((s=e.timestamp)==null?void 0:s.toDate())||new Date)});lI(n)}async function CI(n,e){try{await Ni(je(Re,"users",C.currentUser.uid,e,n)),de("Deleted")}catch{de("Error",!0)}}function PI(){const n=document.getElementById("today-session-name"),e=document.getElementById("input-date"),t=async()=>{if(C.currentUser)try{await nc(Oi(),n.value)}catch{de("Error saving session name",!0)}};n.addEventListener("change",t),n.addEventListener("blur",t),e==null||e.addEventListener("change",()=>{Ff(),sc(C.workoutsCache)})}function kI(){document.querySelectorAll(".nav-link").forEach(g=>{g.addEventListener("click",async()=>{document.querySelectorAll(".nav-link").forEach(w=>w.classList.remove("active")),g.classList.add("active"),document.querySelectorAll(".view-section").forEach(w=>{w.classList.add("hidden"),w.classList.remove("animate-fade-in"),w.id===g.dataset.target&&(w.classList.remove("hidden"),w.classList.add("animate-fade-in"))}),g.dataset.target==="view-progress"&&(await iI(),C.chartInstance&&C.chartInstance.resize())})});let n=null,e=0;function t(){const g=document.getElementById("timer-display"),w=document.getElementById("timer-cancel");if(e<=0){g.textContent="00:00",g.className="text-xl font-mono text-gray-400",w.classList.add("hidden");return}g.textContent=`${Math.floor(e/60).toString().padStart(2,"0")}:${(e%60).toString().padStart(2,"0")}`,g.className=`text-xl font-mono text-[#00E676] ${e<=5?"animate-pulse":""}`,w.classList.remove("hidden")}document.querySelectorAll(".timer-btn").forEach(g=>g.addEventListener("click",w=>{clearInterval(n),e=parseInt(w.target.dataset.time),t(),n=setInterval(()=>{var R;e--,t(),e<=0&&(clearInterval(n),(R=navigator.vibrate)==null||R.call(navigator,[200,100,200]))},1e3)})),document.getElementById("timer-cancel").addEventListener("click",()=>{clearInterval(n),e=0,t()});const r=document.getElementById("btn-flex-set-1"),s=document.getElementById("btn-flex-set-2");function i(g){r.className=g===1?"flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full bg-white text-black shadow-sm transition-all":"flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full text-gray-500 hover:text-white transition-all",s.className=g===2?"flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full bg-white text-black shadow-sm transition-all":"flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full text-gray-500 hover:text-white transition-all",document.getElementById("flex-set-title").textContent=`Routine ${g}`;const w=document.getElementById("flex-list");w.innerHTML="",Kw[g].forEach((R,D)=>{const x=document.createElement("div");x.className="flex items-center gap-4 py-3 border-b border-[#111] last:border-0";const V=document.createElement("span");V.className="text-gray-600 text-[10px] font-mono w-4",V.textContent=D+1;const M=document.createElement("span");M.className="text-sm font-medium text-gray-200",M.textContent=R,x.append(V,M),w.appendChild(x)})}r.addEventListener("click",()=>i(1)),s.addEventListener("click",()=>i(2)),i(1);let a=null,c=null,u=0,d=0;function f(){const g=document.getElementById("flex-timer-display"),w=document.getElementById("flex-timer-cancel"),R=document.getElementById("flex-timer-status");if(u<=0&&!d){g.textContent="00:00",g.className="text-3xl font-mono text-gray-400 font-light",w.classList.add("hidden"),R.classList.add("hidden");return}g.textContent=`${Math.floor(u/60).toString().padStart(2,"0")}:${(u%60).toString().padStart(2,"0")}`,g.className=`text-3xl font-mono text-white font-light ${u>0&&u<=5?"animate-pulse":""}`,w.classList.remove("hidden")}function m(g){clearInterval(a),clearTimeout(c),document.getElementById("flex-timer-status").classList.add("hidden"),d=g,u=g,f(),a=setInterval(()=>{var w;u--,f(),u<=0&&(clearInterval(a),document.getElementById("flex-timer-display").classList.remove("animate-pulse"),(w=navigator.vibrate)==null||w.call(navigator,[200,100,200]),document.getElementById("flex-timer-status").classList.remove("hidden"),c=setTimeout(()=>{d&&m(d)},5e3))},1e3)}document.querySelectorAll(".flex-timer-btn").forEach(g=>g.addEventListener("click",w=>m(parseInt(w.target.dataset.time)))),document.getElementById("flex-timer-cancel").addEventListener("click",()=>{clearInterval(a),clearTimeout(c),u=0,d=0,f(),document.getElementById("flex-timer-status").classList.add("hidden")})}const th="reptrack-collapse-";function xI(){document.querySelectorAll(".collapsible-section").forEach(n=>{const e=n.dataset.collapsible,t=n.querySelector(".collapsible-header"),r=n.querySelector(".collapsible-body");if(!e||!t||!r)return;const s=localStorage.getItem(`${th}${e}`),i=s===null?n.dataset.defaultExpanded!=="false":s==="true";nh(t,r,i),t.addEventListener("click",()=>{const a=t.getAttribute("aria-expanded")!=="true";nh(t,r,a),localStorage.setItem(`${th}${e}`,String(a))})})}function nh(n,e,t){n.setAttribute("aria-expanded",String(t)),e.classList.toggle("hidden",!t)}Qw(()=>{RI(),Jw(),Mf(),pI()});eI();tI();nI();kI();PI();xI();SI();Ap({immediate:!0});
