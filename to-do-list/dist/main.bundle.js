(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>u});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),d=n(667),l=n.n(d),s=new URL(n(591),n.b),p=a()(r()),c=l()(s);p.push([t.id,`@font-face {\n    font-family: moderneSans;\n    src: url(${c});\n}\n\nbody{\n    margin: 0;\n    font-family: moderneSans;\n}\n\n#container{\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(to bottom right, #C1C8E4, #84CEEB, #8860D0);\n    width: 100%;\n    height: 100vh;\n}\n\n#header-div{\n    display: flex;\n    justify-content: center;\n    border-bottom: groove 5px black;\n    background-image: linear-gradient(to right, #5680E9, #8860D0);\n    padding-left: 2rem;\n    padding-right: 2rem;\n    margin-top: 1rem;\n    width: auto;\n    align-self: center;\n    border-radius: 3rem;\n    color: white;\n}\n\n#middle-div{\n\tdisplay: flex;\n}\n\n#todo-container{\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgrid-gap: 1rem;\n\tpadding: 1rem;\n\toverflow: auto;\n\tmax-height: 80vh;\n}\n\n#todo-div{\n\tbackground-image: linear-gradient(to right, #5680E9, #5AB9EA);\n\tborder-radius: 3rem;\n\tpadding: 1rem;\n\toverflow:auto;\n\tmax-width: 20vw;\n}\n\n#todo-div p{\n\tfont-size: 1.1rem;\n\tcolor: white;\n}\n\n#add-button {\n\tfont-size: 1em;\n\tpadding: 15px 18px;\n\tcolor: black;\n\ttext-decoration: none;\n\tcursor: pointer;\n\ttransition: all 0.3s ease-out;\n\tbackground: #F4EEE0;\n\tborder-radius: 50px;\n    font-weight: bold;\n}\n\nbutton{\n    font-size: 1em;\n\tpadding: 5px 10px;\n\tcolor: black;\n\ttext-decoration: none;\n\tcursor: pointer;\n\ttransition: all 0.3s ease-out;\n\tbackground: #F4EEE0;\n\tborder-radius: 50px;\n    font-weight: bold;\n}\n\n.overlay {\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.8);\n\ttransition: opacity 500ms;\n\tvisibility: hidden;\n\topacity: 0;\n}\n.overlay:target {\n\tvisibility: visible;\n\topacity: 1;\n}\n.wrapper {\n\tmargin: 70px auto;\n\tpadding: 20px;\n\tbackground: #4F4557;\n\tborder-radius: 5px;\n\twidth: 30%;\n\tposition: relative;\n\ttransition: all 5s ease-in-out;\n}\n\n.wrapper h2 {\n\tmargin-top: 0;\n\tcolor: white;\n}\n.wrapper #close {\n\tposition: absolute;\n\ttop: 20px;\n\tright: 30px;\n\ttransition: all 200ms;\n\tfont-size: 30px;\n\tfont-weight: bold;\n\ttext-decoration: none;\n\tcolor: red;\n}\n.wrapper #close:hover {\n\tcolor: #06D85F;\n}\n.wrapper .form-content {\n\tmax-height: 30%;\n\toverflow: auto;\n}\n\n.form-container {\n\tborder-radius: 5px;\n\tbackground-color: #4F4557;\n\tpadding: 20px 0;\n}\n\nform label {\n\ttext-transform: uppercase;\n\tfont-weight: 500;\n\tletter-spacing: 3px;\n    color: white;\n}\ninput[type=text], select, textarea {\n\twidth: 100%;\n\tpadding: 12px;\n\tborder: 1px solid #ccc;\n\tborder-radius: 4px;\n\tbox-sizing: border-box;\n\tmargin-top: 6px;\n\tmargin-bottom: 16px;\n\tresize: vertical;\n}\ninput[type="submit"] {\n\tbackground-color: #413b3b;\n\tcolor: #fff;\n\tpadding: 15px 50px;\n\tborder: none;\n\tborder-radius: 50px;\n\tcursor: pointer;\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tletter-spacing: 3px;\n}\n\n#todo-div::-webkit-scrollbar {\n\tdisplay: none;\n}\n`,""]);const u=p},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var s=0;s<t.length;s++){var p=[].concat(t[s]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],d=0;d<t.length;d++){var l=t[d],s=o.base?l[0]+o.base:l[0],p=i[s]||0,c="".concat(s," ").concat(p);i[s]=p+1;var u=n(c),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=d,e.splice(d,0,{identifier:c,updater:h,references:1})}a.push(c)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var d=n(i[a]);e[d].references--}for(var l=o(t,r),s=0;s<i.length;s++){var p=n(i[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=l}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},591:(t,e,n)=>{t.exports=n.p+"49a2c9e732a9c4b8fc82.ttf"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o={};(()=>{function t(t,e,n){const o=document.createElement(t);return e&&(o.id=e),n&&(o.innerHTML=n),o}function e(e){const n=t("div","todo-div",null),o=t("p","todo-title","Task: "+e.title);n.appendChild(o);const r=t("p","todo-description","Desc: "+e.description);n.appendChild(r);const i=t("p","todo-dueDate","Due on: "+e.dueDate);n.appendChild(i);const a=t("p","todo-priority","Priority: "+e.priority);return n.appendChild(a),n}function r(t,e,n,o){return{title:t,description:e,dueDate:n,priority:o}}n.d(o,{n:()=>y});var i=n(379),a=n.n(i),d=n(795),l=n.n(d),s=n(569),p=n.n(s),c=n(565),u=n.n(c),f=n(216),h=n.n(f),m=n(589),b=n.n(m),v=n(426),g={};g.styleTagTransform=b(),g.setAttributes=u(),g.insert=p().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=h(),a()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const y=document.getElementById("container"),x=function(){const e=t("div","new-form",null);e.classList.add("overlay");const n=t("div","wrapper",null);n.classList.add("wrapper");const o=t("h1","title","Please Fill in the To-Do details"),r=t("a","close","X");r.setAttribute("href","#");const i=t("div","form-content",null);i.classList.add("form-content");const a=t("div","form-container",null);a.classList.add("form-container");const d=t("form","todo-form",null);d.setAttribute("action","");const l=t("label","title-label","Title");l.setAttribute("for","todo-title");const s=t("input","todo-title",null);s.setAttribute("type","text"),s.setAttribute("name","todo-title");const p=t("label","description-label","Description");p.setAttribute("for","todo-description");const c=t("input","todo-description",null);c.setAttribute("type","text"),c.setAttribute("name","todo-description");const u=t("label","dueDate-label","Due Date");u.setAttribute("for","todo-dueDate");const f=t("input","todo-dueDate",null);f.setAttribute("type","text"),f.setAttribute("name","todo-dueDate");const h=t("label","priority-label","Priority");h.setAttribute("for","todo-priority");const m=t("select","todo-priority",null);m.setAttribute("name","todo-priority");const b=t("option","high","High");b.setAttribute("value","high");const v=t("option","medium","Medium");v.setAttribute("value","medium");const g=t("option","low","Low");g.setAttribute("value","low");const y=t("button","submit","Submit");return y.setAttribute("type","submit"),y.setAttribute("value","Submit"),d.appendChild(l),d.appendChild(s),d.appendChild(p),d.appendChild(c),d.appendChild(u),d.appendChild(f),d.appendChild(h),d.appendChild(m),m.appendChild(b),m.appendChild(v),m.appendChild(g),d.appendChild(y),a.appendChild(d),i.appendChild(a),n.appendChild(o),n.appendChild(r),n.appendChild(i),e.appendChild(n),e}();!function(){const e=t("div","header-div",null),n=t("h1","header-title","To-Do-List");e.appendChild(n),y.appendChild(e)}();const w=function(){const e=t("div","middle-div",null),n=t("div","button-div",null),o=t("a","add-button","+");return o.setAttribute("href","#new-form"),n.appendChild(o),e.appendChild(n),y.appendChild(e),document.getElementById("middle-div")}();w.appendChild(x);const C=function(e){const n=t("div","todo-container",null);return e.appendChild(n),document.getElementById("todo-container")}(w);w.appendChild(C),x.addEventListener("submit",(t=>{t.preventDefault();let n=document.getElementById("todo-title").value,o=document.getElementById("todo-description").value,i=document.getElementById("todo-dueDate").value,a=document.getElementById("todo-priority").value;""==n||""==o||""==i||""==a?alert("Please fill in all the fields"):(C.appendChild(e(r(n,o,i,a))),x.reset())})),C.appendChild(e(r("Implement Projects","Have a general project that is automatically selected, but have the ability to add projects by clicking a button -> prompted to give project a name and it should appear on the side bar -> clicking on the project makes it active so any new to-dos are added to that project until you swap to another that is, you should associate to-dos with the project that was active during the time they were created","dueDate","priority")))})()})();