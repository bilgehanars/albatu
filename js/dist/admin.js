module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=6)}([function(t,e){t.exports=flarum.core.compat["components/FieldSet"]},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["utils/withAttr"]},function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n);var a=o(2),u=o.n(a),i=o(3),c=o.n(i),p=(o(4),o(0)),l=o.n(p),s=(o(5),function(t){var e,o;function n(){return t.apply(this,arguments)||this}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var r=n.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.komut="",this.packadi=""},r.content=function(){var t=this;return m("div",{className:"container"},m("form",{onsubmit:this.onsubmit.bind(this)},m(l.a,{label:"Composer Command - Require/Update/Remove"},m("input",{className:"FormControl",value:this.komut,oninput:function(e){return t.komut=e.target.value}})),m(l.a,{label:"Package Name. (Example: Bilgehanars/Albatu)"},m("input",{className:"FormControl",value:this.packadi,oninput:function(e){return t.packadi=e.target.value}})),m(c.a,{type:"submit"},"Execute")),m("div",{className:"cevap"},"Console"))},r.onsubmit=function(){app.request({method:"post",url:app.forum.attribute("baseUrl")+"/AlbatuKomut",timeout:0,data:{komut:this.komut,packadi:this.packadi}}).then((function(t){m("div",{class:"cevap"},t),m.redraw()}))},n}(u.a));r.a.initializers.add("bilgehanars-albatu",(function(t){t.extensionData.for("bilgehanars-albatu").registerPage(s)}))}]);
//# sourceMappingURL=admin.js.map