if(!self.define){let e,f={};const i=(i,c)=>(i=new URL(i+".js",c).href,f[i]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=f,document.head.appendChild(e)}else e=i,importScripts(i),f()})).then((()=>{let e=f[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(f[d])return;let r={};const s=e=>i(e,d),o={module:{uri:d},exports:r,require:s};f[d]=Promise.all(c.map((e=>o[e]||s(e)))).then((e=>(n(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"0.bundle.js",revision:"0957605c8b172632f2c205331f3613ff"},{url:"1.bundle.js",revision:"3ccb5d3909de3703cb0a516bec4bbc2b"},{url:"3.bundle.js",revision:"362eda52921626092f86ad3ab3f8a897"},{url:"4.bundle.js",revision:"0088a248f8ade4bb5887341a69a36a11"},{url:"5.bundle.js",revision:"bbda798467d3ec8e6387f18ee3b27f9a"},{url:"bundle.js",revision:"3d2833c85681f0d6b1238ba289934819"},{url:"favicon.png",revision:"adc8ad4052e989c276441f28bef54226"},{url:"icon_128x128.fd285775e5dca4ae1c5105869ebe4ed9.png",revision:"fd285775e5dca4ae1c5105869ebe4ed9"},{url:"icon_144x144.d2c1b5ee4b622496450da5b1b4bf59cf.png",revision:"d2c1b5ee4b622496450da5b1b4bf59cf"},{url:"icon_192x192.7933fd5f03c5c0af4b10f85335210468.png",revision:"7933fd5f03c5c0af4b10f85335210468"},{url:"icon_256x256.b625862106fa4b3f6f93a56e8f042017.png",revision:"b625862106fa4b3f6f93a56e8f042017"},{url:"icon_384x384.8ab643cc5b45a3e895f06b1e93e62058.png",revision:"8ab643cc5b45a3e895f06b1e93e62058"},{url:"icon_512x512.52ed99c2d579db4e63fef74d7d3dddb5.png",revision:"52ed99c2d579db4e63fef74d7d3dddb5"},{url:"icon_96x96.7351e2037056931fb654ce98e00fb4c3.png",revision:"7351e2037056931fb654ce98e00fb4c3"},{url:"images/favicon.png",revision:"adc8ad4052e989c276441f28bef54226"},{url:"images/icons/marker-solid.svg",revision:"5fac866bdfaa2fc80570896fd313bc2c"},{url:"images/icons/road-solid.svg",revision:"18356b052a758d7047ec46f5e12d9d03"},{url:"images/icons/star-solid.svg",revision:"e9fcbae036718d127f5648116a0c74f2"},{url:"images/no-connection.png",revision:"753326086c35c9475f0d45455fff247e"},{url:"images/placeholder.svg",revision:"8182b36190963a080a3dc12acf9f2f0f"},{url:"images/restoku-logo.png",revision:"5f2eafcaf6c1801d37e12e738e630c48"},{url:"index.html",revision:"874e80363c38faea91d45e0464df1d77"},{url:"manifest.0965320ffe11c9d3503a92f7bbe7ef9f.json",revision:"0965320ffe11c9d3503a92f7bbe7ef9f"}],{})}));