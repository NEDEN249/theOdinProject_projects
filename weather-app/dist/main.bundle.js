(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),l=new URL(t(880),t.b),s=new URL(t(87),t.b),u=i()(o()),p=d()(l),m=d()(s);u.push([e.id,`body{\n    margin: 0;\n    overflow: auto;\n    background-image: url(${p});\n    background-size: cover;\n    color: white;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n#container{\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 5em;\n}\n\n#current-data-container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 1rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n\n#current-details-weather-container{\n    font-size: 1.5rem;\n    background-color: rgba(0,0,0,0.5);\n    padding: 3rem;\n    border-radius: 5rem;\n    text-align: right;\n}\n\n#current-location-container{\n    font-size: 1.5rem;\n    background-color: rgba(0,0,0,0.5);\n    padding: 3rem;\n    border-radius: 5rem;\n}\n\n#current-temperature-container{\n    font-size: 3rem;\n    background-color: rgba(0,0,0,0.5);\n    padding: 6rem 11rem;\n    border-radius: 25rem;\n    text-align: center;\n}\n\n#forecast-data-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-left: 6rem;\n}\n\n#forecast-weather-container{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#forecast-date{\n    font-size: 2rem;\n}\n\n#current-hour-data-container{\n\n}\n\n#hourly-weather-container{\n    display: flex;\n    flex-direction: row;\n    gap: 3rem;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.5);\n    border-radius: 1rem;\n}\n\n#hourly{\n    padding: 1rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n\n#forecast-day{\n    text-align: justify;\n}\n\n#forecast-weather-container{\n  display: flex;\n  gap: 10rem;\n  background-color: rgba(0,0,0,0.5);\n  padding: 1rem;\n  border-radius: 1rem;\n  text-align: center;\n}\n\n#hourly{\n}\n\ninput[type=text] {\n    width: 180px;\n    box-sizing: border-box;\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    font-size: 16px;\n    background-color: white;\n    background-image: url(${m});\n    background-size: 1.3rem;\n    background-position: 10px 10px; \n    background-repeat: no-repeat;\n    padding: 12px 20px 12px 40px;\n    transition: width 0.4s ease-in-out;\n  }\n  \n  input[type=text]:focus {\n    width: 15%;\n  }\n\n  input[type=submit]{\n    padding: 0.4rem;\n    border-radius: 1rem;\n    margin: 0.4rem;\n    background-color: rgba(0,0,0,0.8);\n    color: white;\n  }\n\n  input[type=submit]:hover{\n    background-color: rgba(0,0,0,0.8);\n    color: black;\n  }\n::-webkit-scrollbar-track\n{\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n\tbackground-color: #a5b8b0;\n    border-radius: 1rem;\n}\n\n::-webkit-scrollbar\n{\n\twidth: 10px;\n\tbackground-color: #F5F5F5;\n    border-radius: 1rem;\n}\n\n::-webkit-scrollbar-thumb\n{\n\tbackground-color: #707e78;\n\tborder: 2px solid rgb(85, 85, 85);\n    border-radius: 1rem;\n}\n\n@media only screen and (max-width: 600px) {\n    #current-data-container{\n        flex-direction: column;\n        gap: 1.4em;\n    }\n    #current-details-weather-container{\n        text-align: center;\n    }\n    #forecast-data-container{\n        margin-left: 0;\n    }\n    #forecast-weather-container{\n        flex-direction: column;\n    }\n    #forecast-day{\n        text-align: center;\n    }\n\n}\n`,""]);const f=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},880:(e,n,t)=>{e.exports=t.p+"60ec4d9859e8ec7775d7.jpg"},87:(e,n,t)=>{e.exports=t.p+"f264e08ce57ddfa0aad0.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r={};(()=>{t.d(r,{aU:()=>k,U2:()=>S,kW:()=>T});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),c=t.n(i),d=t(565),l=t.n(d),s=t(216),u=t.n(s),p=t(589),m=t.n(p),f=t(426),h={};function g(e,n){console.log(e);const t=document.createElement("div");t.id="current-details-weather-container";const r=document.createElement("div");r.id="current-temperature-container";const o=document.createElement("h3");o.id="temperature",o.textContent=e[1].temperature+"°";const a=document.createElement("h3");a.id="condition",a.textContent=e[1].condition;const i=document.createElement("h3");i.id="feels-like",i.textContent="Feels like: "+e[1].feelslike+"°";const c=document.createElement("h3");c.id="humidity",c.textContent="Humidity: "+e[1].humidity+"%";const d=document.createElement("h3");d.id="wind-speed",d.textContent="Wind speed: "+e[1].windSp+" km/h";const l=document.createElement("h3");l.id="wind-direction",l.textContent="Wind direction: "+e[1].windDir;const s=document.createElement("h3");s.id="uv",s.textContent="UV Index: "+e[1].uv,r.appendChild(o),r.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(d),t.appendChild(l),t.appendChild(s),n.appendChild(r),n.appendChild(t)}function y(e,n,t,r){return{minTemp:e,maxTemp:n,rain:t,humidity:r}}h.styleTagTransform=m(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;let b=[],v=[],x=[];async function w(e){const n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=baa070e815f843288da152813232111&q=${e}&days=3&aqi=yes`,{mode:"cors"}),t=await n.json();console.log(t),b.push([t.location.name,t.location.region]),function(e){const n=e.temp_c,t=e.uv,r=e.wind_kph,o=e.wind_dir,a=e.condition.text,i=e.feelslike_c,c=e.humidity,d=e.is_day;b.push(function(e,n,t,r,o,a,i,c){return{temperature:e,uv:n,windSp:t,windDir:r,condition:o,feelslike:a,humidity:i,date:c}}(n,t,r,o,a,i,c,d))}(t.current),function(e){for(let n=0;n<e.forecastday.length;n++){let t=e.forecastday[n].day.mintemp_c,r=e.forecastday[n].day.maxtemp_c,o=e.forecastday[n].day.daily_chance_of_rain,a=e.forecastday[n].day.avghumidity;v.push(y(t,r,o,a))}}(t.forecast),function(e){const n=(new Date).toLocaleTimeString(),t=parseInt(n.substring(0,2));for(let n=t;n<e.forecastday[0].hour.length;n++){let t={},r=e.forecastday[0].hour[n].chance_of_rain;t.rain=r;let o=e.forecastday[0].hour[n].temp_c;t.temperature=o,t.time=n,x.push(t)}const r=t+1;console.log(r);for(let n=0;n<r;n++){let t={},r=e.forecastday[1].hour[n].chance_of_rain;t.rain=r;let o=e.forecastday[1].hour[n].temp_c;t.temperature=o,t.time=n,x.push(t)}}(t.forecast),console.log("below is the shit"),console.log(t.forecast),function(e,n){const t=document.createElement("div");t.id="current-location-container";const r=document.createElement("h2");r.id="location",r.textContent=e[0][0]+", "+e[0][1];const o=document.createElement("h3");o.id="date",o.textContent=(new Date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t.appendChild(r),t.appendChild(o),n.appendChild(t)}(b,k),g(b,k),function(e,n){console.log(e);const t=document.createElement("div");t.id="forecast-weather-container";const r=new Date;let o={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};o=o[new Date(r.setDate(r.getDate()+2)).getDay()];let a=["Today","Tomorrow",o];for(let n=0;n<e.length;n++){const r=document.createElement("div");r.id="forecast-day";const o=document.createElement("h3");o.id="forecast-date",o.textContent=a[n];const i=document.createElement("h3");i.id="minimum-temperature",i.textContent="Min: "+e[n].minTemp+"°";const c=document.createElement("h3");c.id="maximum-temperature",c.textContent="Max: "+e[n].maxTemp+"°";const d=document.createElement("h3");d.id="rain",d.textContent="Rain: "+e[n].rain+"%";const l=document.createElement("h3");l.id="humidity",l.textContent="Humidity: "+e[n].humidity+"%",r.appendChild(o),r.appendChild(i),r.appendChild(c),r.appendChild(d),r.appendChild(l),t.appendChild(r)}n.appendChild(t)}(v,T),function(e,n){console.log(e);const t=document.createElement("div");t.id="hourly-weather-container";for(let n=0;n<e.length;n++){const r=document.createElement("div");r.id="hourly";const o=document.createElement("h3");o.id="time",o.textContent=e[n].time+":00";const a=document.createElement("h3");a.id="rain",a.textContent="Rain: "+e[n].rain+"%";const i=document.createElement("h3");i.id="temperature",i.textContent=e[n].temperature+"°",r.appendChild(o),r.appendChild(a),r.appendChild(i),t.appendChild(r)}n.appendChild(t)}(x,S)}w("Perth");const C=document.getElementById("container"),E=document.createElement("div");E.appendChild(function(){const e=document.createElement("form");e.id="location-form";const n=document.createElement("input");n.type="text",n.id="location-input",n.placeholder="Enter a location";const t=document.createElement("input");return t.type="submit",t.id="location-submit",t.value="Submit",e.appendChild(n),e.appendChild(t),e}()),C.appendChild(E);const k=document.createElement("div");k.id="current-data-container",C.appendChild(k);const T=document.createElement("div");T.id="forecast-data-container",C.appendChild(T);const S=document.createElement("div");function _(e){let n=document.getElementById(e),t=n.lastElementChild;for(;t;)n.removeChild(t),t=n.lastElementChild}S.id="current-hour-data-container",C.appendChild(S),document.getElementById("location-form").addEventListener("submit",(e=>{e.preventDefault(),v=[],b=[],x=[];const n=document.getElementById("location-input");w(n.value),n.value="",_("current-data-container"),_("forecast-data-container"),_("current-hour-data-container"),g(x)}))})()})();