!function(t){var e={};function o(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e){const o=[{selector:".header",observerOptions:{root:null,rootMargin:"0px",threshold:[.24,.26]},ratioIsInViewport:t=>t>.25,ratioIsOutsideViewport:t=>t<.25},{selector:".wysiwyg__paragraph",observerOptions:{root:null,rootMargin:"20px",threshold:[0,.01]},ratioIsInViewport:t=>t>0,ratioIsOutsideViewport:t=>0===t},{selector:".wysiwyg__drop-cap",observerOptions:{root:null,rootMargin:"10px",threshold:[0,.01]},ratioIsInViewport:t=>t>0,ratioIsOutsideViewport:t=>0===t},{selector:".wysiwyg__link",observerOptions:{root:null,rootMargin:"10px",threshold:[0,.01]},ratioIsInViewport:t=>t>0,ratioIsOutsideViewport:t=>0===t},{selector:".img-caption",observerOptions:{root:null,rootMargin:"10px",threshold:[0,.01]},ratioIsInViewport:t=>t>0,ratioIsOutsideViewport:t=>0===t},{selector:".teaser-block-card",observerOptions:{root:null,rootMargin:"20px",threshold:[0,.01]},ratioIsInViewport:t=>t>0,ratioIsOutsideViewport:t=>0===t},{selector:".video__player",observerOptions:{root:null,rootMargin:"0px",threshold:[.7,.4]},ratioIsInViewport:t=>t>.7,ratioIsOutsideViewport:t=>t<.4}],r=(t,e)=>{for(entryProperty in t){const o=t[entryProperty];e.ratioIsInViewport(o.intersectionRatio)&&(i(o.target),o.target.classList.contains("video__player")&&o.target.readyState>2&&o.target.play()),e.ratioIsOutsideViewport(o.intersectionRatio)&&(n(o.target),o.target.classList.contains("video__player")&&o.target.pause())}},i=t=>{t.classList.add("entered-viewport"),t.classList.add("in-viewport"),t.classList.remove("outside-viewport")},n=t=>{t.classList.add("outside-viewport"),t.classList.remove("in-viewport")};document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".article"),e=document.querySelector(".info-bar"),i=(document.querySelector(".video__player"),document.querySelector(".info-bar__progress-bar"));let n=window.scrollY,s=!1;const a=o=>{const r=t.getBoundingClientRect(),n=o+r.top,s=o+r.bottom-window.innerHeight;if(o>n&&o<s){let t=(o-n)/(.95*s-n);t=Math.round(1e4*t)/100,i.style.width=t+"%",e.classList.add("show")}else e.classList.remove("show")};a(n);document.addEventListener("scroll",t=>{n=window.scrollY,s||(window.requestAnimationFrame(()=>{a(n),s=!1}),s=!0)});const l=document.querySelector(".header__title"),c=l.textContent.split(" ");c.unshift("");const d=c.reduce((t,e)=>t+'<span class="header__title-word">'+e+"</span> ");l.innerHTML=d;const p=document.querySelectorAll(".js-viewport-transition");for(const t of p){let e;for(const r of o)if(t.matches(r.selector)){e=r;break}if(e){const o=new IntersectionObserver(r,e.observerOptions);o.ratioIsInViewport=e.ratioIsInViewport,o.ratioIsOutsideViewport=e.ratioIsOutsideViewport,o.observe(t)}}})}]);