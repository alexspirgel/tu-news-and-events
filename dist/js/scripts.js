!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){const o=[{selector:".header",observerOptions:{root:null,rootMargin:"0px",threshold:[.24,.26]},ratioIsInViewport:e=>e>.25,ratioIsOutsideViewport:e=>e<.25},{selector:".wysiwyg__paragraph",observerOptions:{root:null,rootMargin:"20px",threshold:[0,.01]},ratioIsInViewport:e=>e>0,ratioIsOutsideViewport:e=>0===e},{selector:".wysiwyg__drop-cap",observerOptions:{root:null,rootMargin:"10px",threshold:[0,.01]},ratioIsInViewport:e=>e>0,ratioIsOutsideViewport:e=>0===e},{selector:".wysiwyg__link",observerOptions:{root:null,rootMargin:"10px",threshold:[0,.01]},ratioIsInViewport:e=>e>0,ratioIsOutsideViewport:e=>0===e}],r=(e,t)=>{for(entryProperty in e){const o=e[entryProperty];t.ratioIsInViewport(o.intersectionRatio)&&n(o.target),t.ratioIsOutsideViewport(o.intersectionRatio)&&i(o.target)}},n=e=>{e.classList.add("entered-viewport"),e.classList.add("in-viewport"),e.classList.remove("outside-viewport")},i=e=>{e.classList.add("outside-viewport"),e.classList.remove("in-viewport")};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".article"),t=document.querySelector(".info-bar"),n=document.querySelector(".info-bar__progress-bar");let i=window.scrollY,s=!1;const a=o=>{const r=e.getBoundingClientRect(),i=o+r.top,s=o+r.bottom-window.innerHeight;if(o>i&&o<s){let e=(o-i)/(.95*s-i);e=Math.round(1e4*e)/100,n.style.width=e+"%",t.classList.add("show")}else t.classList.remove("show")};a(i);document.addEventListener("scroll",e=>{i=window.scrollY,s||(window.requestAnimationFrame(()=>{a(i),s=!1}),s=!0)});const l=document.querySelector(".header__title"),c=l.textContent.split(" ");c.unshift("");const u=c.reduce((e,t)=>e+'<span class="header__title-word">'+t+"</span> ");l.innerHTML=u;const d=document.querySelectorAll(".js-viewport-transition");for(const e of d){let t;for(const r of o)if(e.matches(r.selector)){t=r;break}if(t){const o=new IntersectionObserver(r,t.observerOptions);o.ratioIsInViewport=t.ratioIsInViewport,o.ratioIsOutsideViewport=t.ratioIsOutsideViewport,o.observe(e)}}})}]);