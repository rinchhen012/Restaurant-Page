!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=()=>{const e=document.getElementById("content");e.style.backgroundColor="black",e.style.height="100vh",e.style.display="flex",e.style.flexDirection="column";const t=document.createElement("div");t.style.backgroundColor="#2d4059",t.style.fontSize="30px",t.style.fontWeight="600",t.style.color="#eeeeee",t.style.height="10vh",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="space-evenly";const n=document.createElement("div");n.setAttribute("id","home"),n.innerText="Home",n.style.cursor="pointer",n.style.textShadow="2px 2px 8px black";const o=document.createElement("div");o.setAttribute("id","about"),o.innerText="About",o.style.cursor="pointer",o.style.textShadow="2px 2px 8px black";const l=document.createElement("div");return l.setAttribute("id","contact"),l.innerText="Contact",l.style.cursor="pointer",l.style.textShadow="2px 2px 8px black",e.appendChild(t),e.appendChild(bottom),t.appendChild(n),t.appendChild(o),t.appendChild(l),{bottom:bottom,home:n,about:o,contact:l}};o(),(()=>{alert("hello");const e=document.createElement("h1");e.innerText="Best Stew In Town",e.style.textAlign="center",e.style.marginTop="3rem",e.style.fontSize="55px",e.style.fontWeight="800",e.style.fontFamily="monospace",e.style.color="#eeeeee",e.style.textShadow="2px 2px 8px black";const t=document.createElement("div"),n=document.createElement("img");t.appendChild(n),n.src="mark.jpg",n.style.height="30rem",n.style.width="50rem",n.style.boxShadow="2px 2px 8px black",n.style.borderRadius="25px",n.style.display="block",n.style.margin="6rem auto auto auto";const o=document.createElement("div");o.style.backgroundColor="#ea5455",o.style.height="90vh",o.appendChild(e),o.appendChild(t)})(),o.home.addEventListener("click",()=>{}),o.about.addEventListener("click",()=>{})}]);