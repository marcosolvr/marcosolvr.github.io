(()=>{var e={557:()=>{var e=screen.width<1150;new Glider(document.querySelector(".js-banner-carousel"),{slideToShow:1,SlidesToScroll:1,scrollLock:!0,scrollLockDelay:50,dots:".dots",draggable:e,arrows:{prev:".js-banner-carousel-prev",next:".js-banner-carousel-next"}})},214:()=>{var e=document.querySelector(".js-header-mobile-search"),r=document.querySelector(".js-header-input-search"),o=document.querySelector(".js-header-mobile-nav"),t=document.querySelector("nav");e.addEventListener("click",(function(){r.classList.toggle("show"),r.firstElementChild.focus()})),screen.width>=1150&&(t.style.display="flex"),o.addEventListener("click",(function(){t.classList.toggle("show")}))},483:()=>{screen.width<1550&&(new Glider(document.querySelector(".js-reasons-to-buy-boxes"),{slidesToShow:5,slidesToScroll:5,draggable:!0}),new Glider(document.querySelector(".js-partner-brands"),{slidesToShow:5,slidesToScroll:5,draggable:!0}))},441:()=>{window.addEventListener("load",(function(){var e,r=document.querySelector(".modal"),o=document.querySelector(".modal-close-button");r.style.display="block",o.addEventListener("click",(function(){r.style.display="none"})),(e=navigator.userAgent||navigator.vendor||window.opera).match(/iPad/i)||e.match(/iPhone/i)||e.match(/iPod/i)?alert("iOS"):e.match(/Android/i)?alert("Android"):alert("unknown")}))},197:()=>{var e=screen.width<1150;new Glider(document.querySelector(".js-most-requested"),{slidesToShow:6,slidesToScroll:2,draggable:e,arrows:{prev:".js-most-requested-prev",next:".js-most-requested-next"}})},389:()=>{document.querySelectorAll(".js-footer-nav-dropdawn-link").forEach((function(e){e.addEventListener("click",(function(){e.parentElement.closest("div").lastElementChild.classList.toggle("show")}))}))},55:(e,r,o)=>{"use strict";o.r(r)}},r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={exports:{}};return e[t](n,n.exports,o),n.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";o(483),o(557),o(214),o(441),o(197),o(389),o(55)})()})();
//# sourceMappingURL=bundle.js.map