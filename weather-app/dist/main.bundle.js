(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),d=t.n(c),l=new URL(t(880),t.b),s=new URL(t(937),t.b),u=a()(o()),m=d()(l),p=d()(s);u.push([e.id,`body{\n    margin: 0;\n    overflow: auto;\n    background-image: url(${m});\n    background-size: cover;\n    color: white;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\na{\n    text-decoration: none;\n    color: white;\n    font-size: 1.4rem;\n}\n\n#container{\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 5em;\n    margin: 1rem;\n}\n\n#current-temperature{\n    font-size: 5rem;\n    background-color: rgba(0,0,0,0.8);\n    border-radius: 10rem;\n    border: 0.5rem solid rgba(0,0,0,0.6);\n}\n\n#current-condition{\n    background-color: rgba(0,0,0,0.8);\n    border-radius: 10rem;\n    padding: 1rem;\n    border: 0.5rem solid rgba(0,0,0,0.6);\n}\n\n#current-data-container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 1rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n\n#current-details-weather-container{\n    font-size: 1.5rem;\n    background-color: rgba(0,0,0,0.3);\n    padding: 3rem;\n    border-radius: 5rem;\n    text-align: right;\n    height: 28rem;\n    width: auto;\n    border: 0.5rem solid rgba(0,0,0,0.3);\n}\n\n#wind-img, #wind-dir-img{\n    height: 4rem;\n    width: 6rem;\n    filter: brightness(0) invert(1);\n}\n\n#humidity-img, #feels-like-img, #location-img{\n    height: 5rem;\n    width: 5rem;\n    filter: brightness(0) invert(1);\n}\n\n#uv-img {\n    height: 6rem;\n    width: 6rem;\n    filter: brightness(0) invert(1);\n}\n\n#current-details-weather-container div{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n#location-div{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n#current-location-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 2.1rem;\n    width: 28rem;\n    height: 22rem;\n    background-color: rgba(0,0,0,0.3);\n    padding: 2.5rem;\n    border-radius: 5rem;\n    border: 0.5rem solid rgba(0,0,0,0.3);\n}\n\n#date{\n    font-size: 2rem;\n}\n\n\n#current-temperature-container{\n    font-size: 3rem;\n    background-color: rgba(0,0,0,0.5);\n    border-radius: 25rem;\n    padding: 7rem 15rem;\n    text-align: center;\n    border: 0.5rem solid rgba(0,0,0,0.3);\n}\n\n#forecast-data-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-left: 6rem;\n}\n\n#forecast-weather-container{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 0.5rem solid rgba(0,0,0,0.3);\n}\n\n#forecast-date{\n    font-size: 2rem;\n}\n\n#hourly-weather-container{\n    display: flex;\n    flex-direction: row;\n    gap: 3rem;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.3);\n    border-radius: 1rem;\n    border: 0.5rem solid rgba(0,0,0,0.3);\n}\n\n#hourly{\n    padding: 1rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n\n#forecast-day{\n    text-align: justify;\n}\n\n#forecast-weather-container{\n  display: flex;\n  gap: 10rem;\n  background-color: rgba(0,0,0,0.3);\n  padding: 1rem;\n  border-radius: 1rem;\n  text-align: center;\n}\n\ninput[type=text] {\n    width: 180px;\n    box-sizing: border-box;\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    font-size: 16px;\n    background-color: white;\n    background-image: url(${p});\n    background-size: 1.3rem;\n    background-position: 10px 10px; \n    background-repeat: no-repeat;\n    padding: 12px 20px 12px 40px;\n    transition: width 0.4s ease-in-out;\n  }\n  \n  input[type=text]:focus {\n    width: 15%;\n  }\n\n  input[type=submit]{\n    padding: 0.4rem;\n    border-radius: 1rem;\n    margin: 0.4rem;\n    background-color: rgba(0,0,0,0.8);\n    color: white;\n  }\n\n  input[type=submit]:hover{\n    background-color: rgba(0,0,0,0.8);\n    color: black;\n  }\n\n  #footer{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n::-webkit-scrollbar-track\n{\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n\tbackground-color: #a5b8b0;\n    border-radius: 1rem;\n}\n\n::-webkit-scrollbar\n{\n\twidth: 10px;\n\tbackground-color: #F5F5F5;\n    border-radius: 1rem;\n}\n\n::-webkit-scrollbar-thumb\n{\n\tbackground-color: #707e78;\n\tborder: 2px solid rgb(85, 85, 85);\n    border-radius: 1rem;\n}\n\n@media only screen and (max-width: 1000px) {\n    #current-data-container{\n        flex-direction: column;\n        gap: 1.4em;\n    }\n    #current-details-weather-container{\n        text-align: center;\n        height: auto;\n    }\n    #forecast-data-container{\n        margin-left: 0;\n    }\n    #forecast-weather-container{\n        flex-direction: column;\n    }\n    #forecast-day{\n        text-align: center;\n    }\n    #current-temperature-container{\n        border-radius: 3rem;\n        padding: 2.5rem 4.5rem;\n    }\n    #current-location-container{\n        width: fit-content;\n        padding: 1rem;\n    }\n    #date{\n        font-size: 1.5rem;\n    }\n    \n}\n`,""]);const h=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var m=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),l=0;l<i.length;l++){var s=t(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},937:(e,n,t)=>{e.exports=t.p+"f264e08ce57ddfa0aad0.png"},880:(e,n,t)=>{e.exports=t.p+"60ec4d9859e8ec7775d7.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r={};(()=>{t.d(r,{aU:()=>D,U2:()=>z,kW:()=>M});var e=t(379),n=t.n(e),o=t(795),i=t.n(o),a=t(569),c=t.n(a),d=t(565),l=t.n(d),s=t(216),u=t.n(s),m=t(589),p=t.n(m),h=t(426),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g=t.p+"9aa37fc9e4180b05d59c.png",b=t.p+"728abaaab7e9e66cf530.png",y=t.p+"36adc40d3d0580f6c183.png",v=t.p+"3cd2c3dbfc76c6d3ffec.png",x=t.p+"8283e02e2c0d77958720.png",w=t.p+"a405c2668c55f74c09be.png";function C(e,n){console.log(e);const t=document.createElement("div");t.id="current-details-weather-container";const r=document.createElement("div"),o=e[1].icon;r.style.backgroundImage=`url(${o})`,r.id="current-temperature-container";const i=document.createElement("h3");i.id="current-temperature",i.textContent=e[1].temperature+"°";const a=document.createElement("h3");a.id="current-condition",a.textContent=e[1].condition;const c=document.createElement("div");c.id="feels-like-div";const d=document.createElement("img");d.src=v,d.id="feels-like-img";const l=document.createElement("h3");l.id="feels-like",l.textContent=e[1].feelslike+"°",c.appendChild(d),c.appendChild(l);const s=document.createElement("div");s.id="humidity-div";const u=document.createElement("img");u.src=y,u.id="humidity-img";const m=document.createElement("h3");m.id="humidity",m.textContent=e[1].humidity+"%",s.appendChild(u),s.appendChild(m);const p=document.createElement("div");p.id="wind-div";const h=document.createElement("img");h.src=g,h.id="wind-img";const f=document.createElement("h3");f.id="wind-speed",f.textContent=e[1].windSp+" km/h",p.appendChild(h),p.appendChild(f);const w=document.createElement("div");w.id="wind-dir-div";const C=document.createElement("img");C.src=b,C.id="wind-dir-img";const E=document.createElement("h3");E.id="wind-direction",E.textContent=e[1].windDir,w.appendChild(C),w.appendChild(E);const k=document.createElement("div");k.id="uv-div";const T=document.createElement("img");T.src=x,T.id="uv-img";const S=document.createElement("h3");S.id="uv",S.textContent=e[1].uv,k.appendChild(T),k.appendChild(S),r.appendChild(i),r.appendChild(a),t.appendChild(c),t.appendChild(s),t.appendChild(p),t.appendChild(w),t.appendChild(k),n.appendChild(r),n.appendChild(t)}function E(e,n,t,r){return{minTemp:e,maxTemp:n,rain:t,humidity:r}}let k=[],T=[],S=[];async function _(e){const n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=baa070e815f843288da152813232111&q=${e}&days=3&aqi=yes`,{mode:"cors"}),t=await n.json();console.log(t),k.push([t.location.name,t.location.region]),function(e){const n=e.temp_c,t=e.uv,r=e.wind_kph,o=e.wind_dir,i=e.condition.text,a=e.feelslike_c,c=e.humidity,d=e.is_day,l=e.condition.icon;k.push(function(e,n,t,r,o,i,a,c,d){return{temperature:e,uv:n,windSp:t,windDir:r,condition:o,feelslike:i,humidity:a,date:c,icon:d}}(n,t,r,o,i,a,c,d,l))}(t.current),function(e){for(let n=0;n<e.forecastday.length;n++){let t=e.forecastday[n].day.mintemp_c,r=e.forecastday[n].day.maxtemp_c,o=e.forecastday[n].day.daily_chance_of_rain,i=e.forecastday[n].day.avghumidity;T.push(E(t,r,o,i))}}(t.forecast),function(e){const n=(new Date).toLocaleTimeString(),t=parseInt(n.substring(0,2));for(let n=t;n<e.forecastday[0].hour.length;n++){let t={},r=e.forecastday[0].hour[n].chance_of_rain;t.rain=r;let o=e.forecastday[0].hour[n].temp_c;t.temperature=o,t.time=n,S.push(t)}const r=t+1;console.log(r);for(let n=0;n<r;n++){let t={},r=e.forecastday[1].hour[n].chance_of_rain;t.rain=r;let o=e.forecastday[1].hour[n].temp_c;t.temperature=o,t.time=n,S.push(t)}}(t.forecast),function(e,n){const t=document.createElement("div");t.id="current-location-container";const r=document.createElement("div");r.id="location-div";const o=document.createElement("img");o.src=w,o.id="location-img";const i=document.createElement("h2");i.id="location",i.textContent=e[0][0]+", "+e[0][1],r.appendChild(o),r.appendChild(i);const a=document.createElement("h3");a.id="date",a.textContent=(new Date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t.appendChild(r),t.appendChild(a),n.appendChild(t)}(k,D),C(k,D),function(e,n){console.log(e);const t=document.createElement("div");t.id="forecast-weather-container";const r=new Date;let o={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};o=o[new Date(r.setDate(r.getDate()+2)).getDay()];let i=["Today","Tomorrow",o];for(let n=0;n<e.length;n++){const r=document.createElement("div");r.id="forecast-day";const o=document.createElement("h3");o.id="forecast-date",o.textContent=i[n];const a=document.createElement("h3");a.id="minimum-temperature",a.textContent="Min: "+e[n].minTemp+"°";const c=document.createElement("h3");c.id="maximum-temperature",c.textContent="Max: "+e[n].maxTemp+"°";const d=document.createElement("h3");d.id="rain",d.textContent="Rain: "+e[n].rain+"%";const l=document.createElement("h3");l.id="humidity",l.textContent="Humidity: "+e[n].humidity+"%",r.appendChild(o),r.appendChild(a),r.appendChild(c),r.appendChild(d),t.appendChild(r)}n.appendChild(t)}(T,M),function(e,n){console.log(e);const t=document.createElement("div");t.id="hourly-weather-container";for(let n=0;n<e.length;n++){const r=document.createElement("div");r.id="hourly";const o=document.createElement("h3");o.id="time",o.textContent=e[n].time+":00";const i=document.createElement("h3");i.id="rain",i.textContent="Rain: "+e[n].rain+"%";const a=document.createElement("h3");a.id="temperature",a.textContent=e[n].temperature+"°",r.appendChild(o),r.appendChild(i),r.appendChild(a),t.appendChild(r)}n.appendChild(t)}(S,z)}_("Perth");const j=document.getElementById("container"),I=document.createElement("div");I.appendChild(function(){const e=document.createElement("form");e.id="location-form";const n=document.createElement("input");n.type="text",n.id="location-input",n.placeholder="Enter a location";const t=document.createElement("input");return t.type="submit",t.id="location-submit",t.value="Submit",e.appendChild(n),e.appendChild(t),e}()),j.appendChild(I);const D=document.createElement("div");D.id="current-data-container",j.appendChild(D);const M=document.createElement("div");M.id="forecast-data-container",j.appendChild(M);const z=document.createElement("div");z.id="current-hour-data-container",j.appendChild(z);const U=document.createElement("div");U.id="footer";const L=document.createElement("a");function N(e){let n=document.getElementById(e),t=n.lastElementChild;for(;t;)n.removeChild(t),t=n.lastElementChild}L.id="me",L.textContent="Made by: Nathan Eden",L.href="https://github.com/NEDEN249",U.appendChild(L),j.appendChild(U),document.getElementById("location-form").addEventListener("submit",(e=>{e.preventDefault(),T=[],k=[],S=[];const n=document.getElementById("location-input");_(n.value),n.value="",N("current-data-container"),N("forecast-data-container"),N("current-hour-data-container"),C(S)}))})()})();