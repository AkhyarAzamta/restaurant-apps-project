if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,d)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const s=e=>c(e,o),f={module:{uri:o},exports:r,require:s};i[o]=Promise.all(n.map((e=>f[e]||s(e)))).then((e=>(d(...e),r)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"bundle.js",revision:"3de19bc2feb718187d1d21925c4ee340"},{url:"bundle.js.LICENSE.txt",revision:"1f15f353aa83a347d5e2cc30fdc23f78"},{url:"favicon.ico",revision:"5f75fa5444d244c5684658500ef52c0b"},{url:"icons/128x128.png",revision:"7f4770048a152cba9cbd3887a5cd0a8a"},{url:"icons/144x144.png",revision:"2958723bd3d1b42d635c67b71605083a"},{url:"icons/152x152.png",revision:"2038c98405b529838418a01d5df7b181"},{url:"icons/192x192.png",revision:"3cba3bcedf09ec4cd3148fdfcf71adc9"},{url:"icons/384x384.png",revision:"71c31ddd7d7d64a6f0d5e33a4b6e18f1"},{url:"icons/512x512.png",revision:"d86bb4bab39a5083f33e919dcd07586f"},{url:"icons/72x72.png",revision:"bbef789b31b4a45f17bd913cfc1474e9"},{url:"icons/96x96.png",revision:"38b494db78ab3ff8a1d548da6a600189"},{url:"images/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/logo.png",revision:"0ce3e660619c6aa9c371fb1ba5dcfd6f"},{url:"index.html",revision:"2226643a4bb06dad88281f84c6635e5d"},{url:"manifest.json",revision:"60fbd526c8b8d46e90fc20d9f6d236e8"}],{})}));