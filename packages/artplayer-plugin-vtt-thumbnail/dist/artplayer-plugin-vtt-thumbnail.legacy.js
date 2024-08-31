
/*!
 * artplayer-plugin-vtt-thumbnail.js v1.0.3
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2024 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,r,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[n]&&i[n],u=a.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(t,r){if(!u[t]){if(!e[t]){var o="function"==typeof i[n]&&i[n];if(!r&&o)return o(t,!0);if(a)return a(t,!0);if(c&&"string"==typeof t)return c(t);var f=Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}p.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},p.cache={};var l=u[t]=new s.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return u[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:s(t)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=u,s.parent=a,s.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(s,"root",{get:function(){return i[n]}}),i[n]=s;for(var f=0;f<t.length;f++)s(t[f]);if(r){var l=s(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd&&define(function(){return l})}}({"2Oq25":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",function(){return c});var o=e("@swc/helpers/_/_async_to_generator"),i=e("@swc/helpers/_/_ts_generator"),a=e("./getVttArray"),u=n.interopDefault(a);function c(e){var t;return t=(0,o._)(function(t){var r,n,a,c,s,f,l;return(0,i._)(this,function(p){switch(p.label){case 0:return n=(r=t.constructor.utils).setStyle,a=r.isMobile,c=r.addClass,s=t.template.$progress,f=null,[4,(0,u.default)(e.vtt)];case 1:return l=p.sent(),t.controls.add({name:"vtt-thumbnail",position:"top",index:20,style:e.style||{},mounted:function(e){var r;c(e,"art-control-thumbnails"),t.on("setBar",(r=(0,o._)(function(r,o,u){var c,p,d,y;return(0,i._)(this,function(i){if(c="played"===r&&u&&a,"hover"===r||c){if(p=s.clientWidth*o,d=o*t.duration,n(e,"display","flex"),!(y=l.find(function(e){return d>=e.start&&d<=e.end})))return[2,n(e,"display","none")];p>0&&p<s.clientWidth?(n(e,"backgroundImage","url(".concat(y.url,")")),n(e,"height","".concat(y.h,"px")),n(e,"width","".concat(y.w,"px")),n(e,"backgroundPosition","-".concat(y.x,"px -").concat(y.y,"px")),p<=y.w/2?n(e,"left",0):p>s.clientWidth-y.w/2?n(e,"left","".concat(s.clientWidth-y.w,"px")):n(e,"left","".concat(p-y.w/2,"px"))):a||n(e,"display","none"),c&&(clearTimeout(f),f=setTimeout(function(){n(e,"display","none")},500))}return[2]})}),function(e,t,n){return r.apply(this,arguments)}))}}),[2,{name:"artplayerPluginVttThumbnail"}]}})}),function(e){return t.apply(this,arguments)}}"undefined"!=typeof window&&(window.artplayerPluginVttThumbnail=c)},{"@swc/helpers/_/_async_to_generator":"eONSn","@swc/helpers/_/_ts_generator":"6Xyd0","./getVttArray":"iUpz3","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],eONSn:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){r(e);return}u.done?t(c):Promise.resolve(c).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function u(e){o(a,n,i,u,c,"next",e)}function c(e){o(a,n,i,u,c,"throw",e)}u(void 0)})}}n.defineInteropFlag(r),n.export(r,"_async_to_generator",function(){return i}),n.export(r,"_",function(){return i})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],iWrD0:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],"6Xyd0":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"_",function(){return o.__generator}),n.export(r,"_ts_generator",function(){return o.__generator});var o=e("tslib")},{tslib:"c0d7h","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],c0d7h:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"__extends",function(){return a}),n.export(r,"__assign",function(){return u}),n.export(r,"__rest",function(){return c}),n.export(r,"__decorate",function(){return s}),n.export(r,"__param",function(){return f}),n.export(r,"__esDecorate",function(){return l}),n.export(r,"__runInitializers",function(){return p}),n.export(r,"__propKey",function(){return d}),n.export(r,"__setFunctionName",function(){return y}),n.export(r,"__metadata",function(){return _}),n.export(r,"__awaiter",function(){return h}),n.export(r,"__generator",function(){return v}),n.export(r,"__createBinding",function(){return m}),n.export(r,"__exportStar",function(){return b}),n.export(r,"__values",function(){return g}),n.export(r,"__read",function(){return w}),n.export(r,"__spread",function(){return x}),n.export(r,"__spreadArrays",function(){return j}),n.export(r,"__spreadArray",function(){return O}),n.export(r,"__await",function(){return P}),n.export(r,"__asyncGenerator",function(){return S}),n.export(r,"__asyncDelegator",function(){return E}),n.export(r,"__asyncValues",function(){return T}),n.export(r,"__makeTemplateObject",function(){return D}),n.export(r,"__importStar",function(){return F}),n.export(r,"__importDefault",function(){return k}),n.export(r,"__classPrivateFieldGet",function(){return A}),n.export(r,"__classPrivateFieldSet",function(){return M}),n.export(r,"__classPrivateFieldIn",function(){return R}),n.export(r,"__addDisposableResource",function(){return W}),n.export(r,"__disposeResources",function(){return q});var o=e("@swc/helpers/_/_type_of"),i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function s(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function f(e,t){return function(r,n){t(r,n,e)}}function l(e,t,r,n,o,i){function a(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var u,c=n.kind,s="getter"===c?"get":"setter"===c?"set":"value",f=!t&&e?n.static?e:e.prototype:null,l=t||(f?Object.getOwnPropertyDescriptor(f,n.name):{}),p=!1,d=r.length-1;d>=0;d--){var y={};for(var _ in n)y[_]="access"===_?{}:n[_];for(var _ in n.access)y.access[_]=n.access[_];y.addInitializer=function(e){if(p)throw TypeError("Cannot add initializers after decoration has completed");i.push(a(e||null))};var h=(0,r[d])("accessor"===c?{get:l.get,set:l.set}:l[s],y);if("accessor"===c){if(void 0===h)continue;if(null===h||"object"!=typeof h)throw TypeError("Object expected");(u=a(h.get))&&(l.get=u),(u=a(h.set))&&(l.set=u),(u=a(h.init))&&o.unshift(u)}else(u=a(h))&&("field"===c?o.unshift(u):l[s]=u)}f&&Object.defineProperty(f,n.name,l),p=!0}function p(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function d(e){return(void 0===e?"undefined":(0,o._)(e))==="symbol"?e:"".concat(e)}function y(e,t,r){return(void 0===t?"undefined":(0,o._)(t))==="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function _(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function h(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,u)}c((n=n.apply(e,t||[])).next())})}function v(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}var m=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function b(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||m(t,e,r)}function g(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function x(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e}function j(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n}function O(e,t,r){if(r||2==arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function P(e){return this instanceof P?(this.v=e,this):new P(e)}function S(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return",function(e){return function(t){return Promise.resolve(t).then(e,s)}}),n[Symbol.asyncIterator]=function(){return this},n;function a(e,t){o[e]&&(n[e]=function(t){return new Promise(function(r,n){i.push([e,t,r,n])>1||u(e,t)})},t&&(n[e]=t(n[e])))}function u(e,t){try{var r;(r=o[e](t)).value instanceof P?Promise.resolve(r.value.v).then(c,s):f(i[0][2],r)}catch(e){f(i[0][3],e)}}function c(e){u("next",e)}function s(e){u("throw",e)}function f(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}function E(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:P(e[n](t)),done:!1}:o?o(t):t}:o}}function T(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=g(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){!function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,o,(t=e[r](t)).done,t.value)})}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var I=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function F(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&m(t,e,r);return I(t,e),t}function k(e){return e&&e.__esModule?e:{default:e}}function A(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function M(e,t,r,n,o){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function R(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function W(e,t,r){if(null!=t){var n,o;if("object"!=typeof t&&"function"!=typeof t)throw TypeError("Object expected.");if(r){if(!Symbol.asyncDispose)throw TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose],r&&(o=n)}if("function"!=typeof n)throw TypeError("Object not disposable.");o&&(n=function(){try{o.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var N="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function q(e){function t(t){e.error=e.hasError?new N(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function r(){for(;e.stack.length;){var n=e.stack.pop();try{var o=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(o).then(r,function(e){return t(e),r()})}catch(e){t(e)}}if(e.hasError)throw e.error}()}r.default={__extends:a,__assign:u,__rest:c,__decorate:s,__param:f,__metadata:_,__awaiter:h,__generator:v,__createBinding:m,__exportStar:b,__values:g,__read:w,__spread:x,__spreadArrays:j,__spreadArray:O,__await:P,__asyncGenerator:S,__asyncDelegator:E,__asyncValues:T,__makeTemplateObject:D,__importStar:F,__importDefault:k,__classPrivateFieldGet:A,__classPrivateFieldSet:M,__classPrivateFieldIn:R,__addDisposableResource:W,__disposeResources:q}},{"@swc/helpers/_/_type_of":"felZi","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],felZi:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}n.defineInteropFlag(r),n.export(r,"_type_of",function(){return o}),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],iUpz3:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",function(){return u});var o=e("@swc/helpers/_/_async_to_generator"),i=e("@swc/helpers/_/_ts_generator");function a(e){var t,r,n,o=e.split("."),i=o[0].split(":")||[],a=Number((t=o[1]||"0",r=3,n="0",t.length>r?String(t):((r-=t.length)>n.length&&(n+=n.repeat(r/n.length)),String(t)+n.slice(0,r))))/1e3;return 3600*Number(i[i.length-3]||0)+60*Number(i[i.length-2]||0)+Number(i[i.length-1]||0)+a}function u(){return c.apply(this,arguments)}function c(){return(c=(0,o._)(function(){var e,t,r,n,o,u,c,s,f,l,p,d,y,_,h,v,m,b,g=arguments;return(0,i._)(this,function(i){switch(i.label){case 0:return[4,fetch(e=g.length>0&&void 0!==g[0]?g[0]:"")];case 1:return[4,i.sent().text()];case 2:for(n=1,t=i.sent().split(/[\n\r]/gm).filter(function(e){return e.trim()}),r=[];n<t.length;n+=2)if(o=t[n],(u=t[n+1]).trim()){for(c=/((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)(?: ?-->?)((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)/,s=o.match(c),f=/(.*)#(\w{4})=(.*)/i,l=u.match(f),p=Math.floor(a(s[1])),d=Math.floor(a(s[2])),y=l[1],/^\/|((https?|ftp|file):\/\/)/i.test(y)||((_=e.split("/")).pop(),_.push(y),y=_.join("/")),h={start:p,end:d,url:y},v=l[2].split(""),m=l[3].split(","),b=0;b<v.length;b++)h[v[b]]=m[b];r.push(h)}return[2,r]}})})).apply(this,arguments)}},{"@swc/helpers/_/_async_to_generator":"eONSn","@swc/helpers/_/_ts_generator":"6Xyd0","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}]},["2Oq25"],"2Oq25","parcelRequire4dc0");