if(!self.define){let e,i={};const s=(s,o)=>(s=new URL(s+".js",o).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const l=e=>s(e,r),f={module:{uri:r},exports:n,require:l};i[r]=Promise.all(o.map((e=>f[e]||l(e)))).then((e=>(a(...e),n)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-c2777e5e.js",revision:null},{url:"assets/index-ca68d5c3.css",revision:null},{url:"index.html",revision:"21779aeffb9d835d1e82428662081d96"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"390cd3b0769f2912c6a4b9be20e2792b"},{url:"apple-touch-icon.png",revision:"4e85113e9f2c1d93bd9b93f575711a96"},{url:"maskable_icon.png",revision:"4a056543db9f4776d23101568f58a6eb"},{url:"background.jpg",revision:"39a39a5c1c19af3ae06372b7b7304349"},{url:"logo192.png",revision:"34f4c46816dd08fa3345294068e73f6d"},{url:"logo256.png",revision:"19e3fdb67eb4df5ad03271bf858c5635"},{url:"logo384.png",revision:"01ef3902b61c9cc01036ebb1f423c694"},{url:"logo512.png",revision:"cd8656e078b91a07a7228e692dea4fe9"},{url:"fonts/GeosansLight-Oblique.ttf",revision:"6ed20daa398ea5cd99fa46fc017bd701"},{url:"fonts/GeosansLight.ttf",revision:"36e6a06a4146af2f966ffcf021751724"},{url:"coleta seletiva/eletronic.jpg",revision:"db9b1a9560ae197fa9dbab3e6fe358c1"},{url:"coleta seletiva/glass.jpg",revision:"7ea3da0f386e9a0fde49a385abbb8a6f"},{url:"coleta seletiva/metal.jpg",revision:"2cfb7d70ab7e181915abd5e6db818ea8"},{url:"coleta seletiva/paper.jpg",revision:"7fd8cfe191e775ffd5f2e6221e538502"},{url:"coleta seletiva/plastic.jpg",revision:"52d3ba4c365dd201cd842b0bb106ee32"},{url:"manifest.webmanifest",revision:"429685e36f2d756b7caae44ddf565fcb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
