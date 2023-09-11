(function(){"use strict";var e={3837:function(e,n,t){var r=t(9963),o=t(2262),i=t(6154),a=t(2346),c=t(9876),u=t(5476),l=t(8549),s=t(2954),d=t(2387),f=t(6391),p=t(2389),h=t(6252);function m(e,n){const t=(0,h.up)("router-view");return(0,h.wg)(),(0,h.j4)(t)}var b=t(3744);const v={},g=(0,b.Z)(v,[["render",m]]);var y=g,P=t(2201);const O=[{path:"/:catchAll(.*)",redirect:"/"},{path:"/",name:"home",component:()=>Promise.all([t.e(658),t.e(633),t.e(954),t.e(295),t.e(541)]).then(t.bind(t,8541))},{path:"/login",name:"login",component:()=>Promise.all([t.e(658),t.e(661)]).then(t.bind(t,9661))},{path:"/dashboard",component:()=>Promise.all([t.e(658),t.e(633),t.e(139)]).then(t.bind(t,2139)),children:[{path:"products",component:()=>Promise.all([t.e(658),t.e(633),t.e(968),t.e(974)]).then(t.bind(t,5974))},{path:"orders",component:()=>Promise.all([t.e(658),t.e(633),t.e(968),t.e(846)]).then(t.bind(t,1846))},{path:"coupons",component:()=>Promise.all([t.e(658),t.e(633),t.e(968),t.e(241)]).then(t.bind(t,7241))}]},{path:"/user",component:()=>Promise.all([t.e(658),t.e(633),t.e(954),t.e(657)]).then(t.bind(t,657)),children:[{path:"cart",component:()=>Promise.all([t.e(658),t.e(633),t.e(968),t.e(346),t.e(959)]).then(t.bind(t,2959))},{path:"product/:productId",component:()=>Promise.all([t.e(658),t.e(295),t.e(851)]).then(t.bind(t,3851))},{path:"checkout/:orderId",component:()=>Promise.all([t.e(658),t.e(605)]).then(t.bind(t,2605))},{path:"products",component:()=>Promise.all([t.e(658),t.e(40)]).then(t.bind(t,3040))},{path:"orderform",component:()=>Promise.all([t.e(658),t.e(633),t.e(968),t.e(346),t.e(422)]).then(t.bind(t,7422))},{path:"ordercomplete",name:"orderComplete",component:()=>t.e(542).then(t.bind(t,7542))},{path:"ordersearch",component:()=>Promise.all([t.e(658),t.e(123)]).then(t.bind(t,1123))},{path:"about",component:()=>Promise.all([t.e(658),t.e(471)]).then(t.bind(t,3471))}]}],w=(0,P.p7)({history:(0,P.r5)(),routes:O});var j=w;function k(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function E(e){const n=new Date(1e3*e);return n.toLocaleDateString()}Object.keys(d.ZP).forEach((e=>{(0,s.aH)(e,d.ZP[e])})),(0,s.jQ)({generateMessage:(0,f.NC)({zh_TW:p}),validateOnInput:!0}),(0,f.i_)("zh_TW");const C=(0,c.WB)(),x=(0,r.ri)(y);x.config.globalProperties.$filters={currency:k,date:E},C.use((({store:e})=>{e.router=(0,o.Xl)(j)})),x.use(C),x.use(a.Z,i.Z),x.use(l.z2),x.component("LoadingOverlay",u.Z),x.component("Form",s.l0),x.component("Field",s.gN),x.component("ErrorMessage",s.Bc),x.use(j),x.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{40:"251189a3",123:"ae579835",139:"b0c2e60b",241:"a1c1b6de",295:"fea6583c",346:"59ddb6b5",422:"a8cffc74",471:"adb330bf",541:"d318c0a8",542:"353908ea",605:"5e9ab5ee",633:"63b07d9e",657:"e4332912",658:"d5303637",661:"a7cb7cf2",846:"e146b958",851:"2dfd3e08",954:"8e3ffe59",959:"7e890018",968:"f1152fe1",974:"77303548"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{40:"1162b235",295:"895c797a"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="online-shop:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=r),e[r]=[o];var f=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/online-shop/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode&&i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),c=t.p+a;if(n(a,c))return o();e(r,c,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={40:1,295:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],c=r[1],u=r[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var s=u(t)}for(n&&n(r);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3837)}));r=t.O(r)})();
//# sourceMappingURL=app.e2bd6046.js.map