(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>b});var o=t(81),i=t.n(o),r=t(645),a=t.n(r),d=t(667),c=t.n(d),l=new URL(t(22),t.b),s=new URL(t(411),t.b),p=new URL(t(537),t.b),m=new URL(t(126),t.b),u=a()(i()),h=c()(l),f=c()(s),g=c()(p),v=c()(m);u.push([n.id,`@font-face {\n    font-family: catCafe;\n    src: url(${h});\n}\n\n@font-face {\n    font-family: cafeMatcha;\n    src: url(${f});\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    background: url(${g});\n    background-size: 50%;\n    margin: 0;\n    padding: 0;\n}\n\np{\n    font-family: catCafe;\n    font-size: 1.7rem;\n    margin: 0;\n    padding: 0;\n}\n\nh2{\n    font-family: cafeMatcha;\n    font-size: 3rem;\n    margin: 0;\n    padding: 0;\n}\n\n#content{\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\nnav{\n    background-color: brown;\n    width: 100%;\n}\n\n\n.nav-nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: horizontal;\n}\n\n.nav-ul{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: horizontal;\n    padding: 0;\n    font-family: cafeMatcha;\n    font-size: 1.5rem;\n    color: white;\n}\n\n#nav-li{\n    list-style: none;\n    margin: 1rem;\n}\n\n#home{\n    margin-top: 3rem;\n    padding: 1.5rem;\n    background-color: blanchedalmond;\n    border-radius: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    border: solid;\n    background: url(${g});\n    background-size: 30%;\n}\n\n.title{\n    font-family: catCafe;\n    background: brown;\n    border-radius: 5rem;\n    padding: 1.5rem;\n    color: white;\n    font-size: 5rem;\n    border: dotted;\n}\n\n#home-intro-div{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 1rem;\n    background-color: brown;\n    border-radius: 5rem;\n    color: white;\n    padding: 1.5rem;\n    max-width: 60%;\n    border: dotted;\n}\n\n#home-intro-div p{\n    max-width: fit-content;\n    text-align: center;\n}\n\n#home-opening-hours-div{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 1rem;\n    background-color: brown;\n    border-radius: 5rem;\n    color: white;\n    padding: 2rem;\n    font-size: 1.3rem;\n    border: dotted;\n}\n\n#home-opening-hours-div p{\n    margin: 1rem;\n    padding: 0.1rem;\n}\n\n#home-opening-hours-div p:hover{\n    color: blanchedalmond;\n}\n\n#home-location-div{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 1rem;\n    background-color: brown;\n    border-radius: 5rem;\n    color: white;\n    padding: 2rem;\n    font-size: 1.3rem;\n    border: dotted;\n}\n\n#menu-div{\n    margin-top: 3rem;\n    padding: 1.5rem;\n    background-color: blanchedalmond;\n    border-radius: 5rem;\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    background: url(${v}) no-repeat;\n    background-size: 150%;\n    background-repeat: repeat-y;\n}\n\n.menu-item-div{\n    color: rgb(243, 242, 242);\n    padding: 1.5rem;\n    margin: 1rem;\n    background-color: brown;\n    border-radius: 5rem;\n    color: white;\n    border: dotted;\n    text-align: center;\n}\n\n#menu-title{\n    font-family: catCafe;\n    background: brown;\n    border-radius: 5rem;\n    padding: 1.5rem;\n    color: white;\n    font-size: 5rem;\n    border: dotted;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#contact-div{\n    margin-top: 3rem;\n    border-radius: 5rem;\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    max-width: 80%;\n}\n\n#contact-details-div{\n    color: rgb(243, 242, 242);\n    padding: 1.5rem;\n    margin: 1rem;\n    background-color: brown;\n    border-radius: 5rem;\n    color: white;\n    border: dotted;\n    text-align: center;\n}\n\n#footer{\n    display: flex;\n    margin-top: auto 0;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}`,""]);const b=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],d=0;d<n.length;d++){var c=n[d],l=o.base?c[0]+o.base:c[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=i(u,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var d=t(r[a]);e[d].references--}for(var c=o(n,i),l=0;l<r.length;l++){var s=t(r[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},411:(n,e,t)=>{n.exports=t.p+"6dd7e98793f087832553.ttf"},22:(n,e,t)=>{n.exports=t.p+"7c55a17f922a55c3299e.ttf"},537:(n,e,t)=>{n.exports=t.p+"3b44a08f90b9c402538c.jpg"},126:(n,e,t)=>{n.exports=t.p+"03c585a5664de1a5981a.png"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!n;)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{function n(){const n=document.createElement("ul");n.classList.add("nav-ul"),["Home","Menu","Contact"].forEach((e=>n.appendChild(S("li","nav-li",e))));const e=document.createElement("nav");e.classList.add("nav-nav"),e.appendChild(n),E.appendChild(e)}function e(){const n=S("div","footer",null),e=S("p","footer-text","This was created by <a href='https://github.com/NEDEN249'>NEDEN249</a>");S("p","footer-text","Image by lesyaskripak on Freepik"),n.appendChild(e),E.appendChild(n)}t.d(o,{k:()=>E,d:()=>S});const i={title:"^ Koffee Cat Cafe ^",intro:"Welcome to Koffee Cat Cafe! We are a cafe that serves coffee with feline companionship. Come and vibe with us if you love cats!",location:"127 Neo Zone, Seoul, South Korea",opening_hours:["Sunday: 10am - 5pm","Monday: 8am - 8pm","Tuesday: 8am - 8pm","Wednesday: 8am - 8pm","Thursday: 10am - 10pm","Friday: 8am - 8pm","Saturday: 10am - 5pm"]},r={name:"Matcha Latte",price:"$5.00",description:"A delicious matcha latte made with the finest matcha powder and milk."},a={name:"Americano",price:"$3.00",description:"A classic americano made with the finest coffee beans."},d={name:"Hot Chocolate",price:"$4.00",description:"A classic hot chocolate made with chocolate powder and milk."},c={name:"Cake of the Day",price:"$5.00",description:"A delicious cake made by our chef. Ask a Staff Member for more details."},l="Koffee Cat Cafe",s="thisEmailIsNottPawsible@cat.com",p="123456789",m="127 Neo Zone, Seoul, South Korea";var u=t(379),h=t.n(u),f=t(795),g=t.n(f),v=t(569),b=t.n(v),y=t(565),C=t.n(y),x=t(216),w=t.n(x),k=t(589),L=t.n(k),M=t(426),T={};T.styleTagTransform=L(),T.setAttributes=C(),T.insert=b().bind(null,"head"),T.domAPI=g(),T.insertStyleElement=w(),h()(M.Z,T),M.Z&&M.Z.locals&&M.Z.locals;const E=document.getElementById("content");function S(n,e,t){const o=document.createElement(n);return e&&(o.id=e),t&&(o.innerHTML=t),o}function j(){n(),function(){const n=S("div","contact-div",null),e=S("h1","contact-title","^ Contact Us ^"),t=S("div","contact-details-div",null),o=S("p","contact-details-name",l),i=S("p","contact-details-email",s),r=S("p","contact-details-phone-number",p),a=S("p","contact-details-address",m);t.appendChild(o),t.appendChild(i),t.appendChild(r),t.appendChild(a),n.appendChild(e),n.appendChild(t),E.appendChild(n),e.classList.add("title")}(),e()}j(),document.addEventListener("click",(t=>{const o=t.target.innerText;"Home"===o?(E.innerHTML="",n(),function(){const n=S("div","home",null),e=S("h1","home-title",i.title),t=S("div","home-intro-div",null),o=S("p","home-intro",i.intro);t.appendChild(o);const r=S("div","home-opening-hours-div",null),a=S("h2","home-opening-opening-hours-title","Opening Hours");r.appendChild(a);for(let n=0;n<i.opening_hours.length;n++){const e=S("p","home-opening-hours",i.opening_hours[n]);r.appendChild(e)}const d=S("div","home-location-div",null),c=S("p","home-location",i.location),l=S("h2","home-location-title","Location");d.appendChild(l),d.appendChild(c),n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(d),E.appendChild(n),e.classList.add("title")}(),e()):"Menu"===o?(E.innerHTML="",n(),function(){const n=S("div","menu-div",null),e=S("h1","menu-title","^ Menu ^"),t=S("div","matcha-div",null),o=S("h2","matcha-name",r.name),i=S("p","matcha-price",r.price),l=S("p","matcha-description",r.description);t.appendChild(o),t.appendChild(i),t.appendChild(l);const s=S("div","americano-div",null),p=S("h2","americano-name",a.name),m=S("p","americano-price",a.price),u=S("p","americano-description",a.description);s.appendChild(p),s.appendChild(m),s.appendChild(u);const h=S("div","hot-chocolate-div",null),f=S("h2","hot-chocolate-name",d.name),g=S("p","hot-chocolate-price",d.price),v=S("p","hot-chocolate-description",d.description);h.appendChild(f),h.appendChild(g),h.appendChild(v);const b=S("div","cake-div",null),y=S("h2","cake-name",c.name),C=S("p","cake-price",c.price),x=S("p","cake-description",c.description);b.appendChild(y),b.appendChild(C),b.appendChild(x),n.appendChild(e),n.appendChild(t),n.appendChild(s),n.appendChild(h),n.appendChild(b),E.appendChild(n),b.classList.add("menu-item-div"),h.classList.add("menu-item-div"),s.classList.add("menu-item-div"),t.classList.add("menu-item-div"),e.classList.add("title")}(),e()):"Contact"===o&&(E.innerHTML="",j())}))})()})();