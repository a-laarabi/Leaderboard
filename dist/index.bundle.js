(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Arima:wght@100;200;300;400;500;600;700&display=swap);"]),i.push([n.id,"body {\n  font-family: 'Arima', cursive;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.logo {\n  margin-left: 40px;\n  margin-top: 60px;\n}\n\n.container {\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: 10% 45% 10% 25% 10%;\n}\n\n/* ########## Scores ########## */\n\n.scores {\n  grid-column-start: 2;\n  grid-column-end: 3;\n}\n\n.scores button {\n  display: inline;\n}\n\n.scoresHeader {\n  display: flex;\n  flex-direction: row;\n}\n\n.refresh {\n  margin-left: 30px;\n  padding: 0 10px;\n  background: none;\n  box-shadow: 2px 2px 2px black;\n  cursor: pointer;\n}\n\n.listScores {\n  border: 2px solid black;\n  border-radius: 5px;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.listScores div {\n  padding: 10px;\n}\n\n.listScores div:nth-child(odd) {\n  background-color: rgb(205, 197, 197);\n}\n\n/* ########## addScore ########## */\n\n.addScore {\n  grid-column-start: 4;\n  grid-column-end: 5;\n}\n\n.addScore .inputForm {\n  display: block;\n  margin-top: 20px;\n  width: 100%;\n  padding: 5px;\n  border: 2px solid black;\n}\n\n::placeholder {\n  font-family: 'Arima', cursive;\n  color: #000;\n}\n\n.submit {\n  display: block;\n  margin-top: 20px;\n  padding: 5px 10px;\n  margin-left: 70%;\n  background: none;\n  box-shadow: 2px 2px 2px black;\n  cursor: pointer;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let v;v=0===localStorage.length?[]:JSON.parse(localStorage.getItem("items"));const g=document.querySelector(".listScores"),h=(n,e)=>{const t=document.createElement("div");t.innerHTML+=`<p>${n}: ${e}</p>`,g.appendChild(t)},y=document.querySelector(".name"),x=document.querySelector(".score");document.querySelector(".submit").addEventListener("click",(()=>{""!==y.value&&""!==x.value&&(((n,e)=>{h(n,e);const t=new class{constructor(n,e){this.name=n,this.score=e}}(n,e);v.push(t),localStorage.setItem("items",JSON.stringify(v))})(y.value,x.value),y.value=null,x.value=null)})),window.addEventListener("load",(()=>{if(localStorage.length){const n=localStorage.getItem("items");JSON.parse(n).forEach((n=>{h(n.name,n.score)}))}}))})()})();