
/*!
 * artplayer-plugin-libass.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2024 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,r,n,o){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[n]&&s[n],i=a.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,r){if(!i[t]){if(!e[t]){var o="function"==typeof s[n]&&s[n];if(!r&&o)return o(t,!0);if(a)return a(t,!0);if(c&&"string"==typeof t)return c(t);var u=Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}d.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},d.cache={};var f=i[t]=new l.Module(t);e[t][0].call(f.exports,d,f,f.exports,this)}return i[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:l(t)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=i,l.parent=a,l.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(l,"root",{get:function(){return s[n]}}),s[n]=l;for(var u=0;u<t.length;u++)l(t[u]);if(r){var f=l(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd&&define(function(){return f})}}({"1dPf1":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",function(){return a});var o=e("./adapter"),s=n.interopDefault(o);function a(e){return function(t){var r=new s.default(t,e);return{name:"artplayerPluginLibass",libass:r.libass,visible:r.visible,init:r.init.bind(r),switch:r.switch.bind(r),show:r.show.bind(r),hide:r.hide.bind(r),destroy:r.destroy.bind(r)}}}"undefined"!=typeof window&&(window.artplayerPluginLibass=a)},{"./adapter":"aIBcJ","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],aIBcJ:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",function(){return k});var o=e("@swc/helpers/_/_async_to_generator"),s=e("@swc/helpers/_/_class_call_check"),a=e("@swc/helpers/_/_class_private_method_get"),i=e("@swc/helpers/_/_class_private_method_init"),c=e("@swc/helpers/_/_create_class"),l=e("@swc/helpers/_/_object_spread"),u=e("@swc/helpers/_/_object_spread_props"),f=e("@swc/helpers/_/_sliced_to_array"),d=e("@swc/helpers/_/_ts_generator"),p=e("libass-wasm"),h=n.interopDefault(p),v=/*#__PURE__*/new WeakSet,m=/*#__PURE__*/new WeakSet,y=/*#__PURE__*/new WeakSet,b=/*#__PURE__*/new WeakSet,_=/*#__PURE__*/new WeakSet,g=/*#__PURE__*/new WeakSet,w=/*#__PURE__*/new WeakSet,j=/*#__PURE__*/new WeakSet,k=/*#__PURE__*/function(){function e(t,r){(0,s._)(this,e),(0,i._)(this,v),(0,i._)(this,m),(0,i._)(this,y),(0,i._)(this,b),(0,i._)(this,_),(0,i._)(this,g),(0,i._)(this,w),(0,i._)(this,j);var n=t.constructor,o=t.template;this.art=t,this.$video=o.$video,this.$webvtt=o.$subtitle,this.utils=n.utils,this.libass=null,t.once("ready",this.init.bind(this,r))}return(0,c._)(e,[{key:"init",value:function(e){var t=this;return(0,o._)(function(){var r,n,o,s;return(0,d._)(this,function(i){switch(i.label){case 0:return(0,a._)(t,j,I).call(t),[4,(0,a._)(t,v,x).call(t,e)];case 1:return i.sent(),(0,a._)(t,m,E).call(t),t.art.emit("artplayerPluginLibass:init",t),(s=null===(o=t.art)||void 0===o?void 0:null===(n=o.option)||void 0===n?void 0:null===(r=n.subtitle)||void 0===r?void 0:r.url)&&"ass"===t.utils.getExt(s)&&t.switch(s),[2]}})})()}},{key:"switch",value:function(e){this.art.emit("artplayerPluginLibass:switch",e),e&&"ass"===this.utils.getExt(e)?(this.currentType="ass",this.libass.freeTrack(),this.libass.setTrackByUrl((0,a._)(this,_,L).call(this,e)),this.visible=this.art.subtitle.show):(this.currentType="webvtt",this.hide(),this.libass.freeTrack())}},{key:"setVisibility",value:function(e){this.visible=e}},{key:"setOffset",value:function(e){this.timeOffset=e}},{key:"active",get:function(){return"ass"===this.currentType}},{key:"visible",get:function(){return!!this.libass&&"none"!==this.libass.canvasParent.style.display},set:function(e){this.art.emit("artplayerPluginLibass:visible",e),(0,a._)(this,b,T).call(this,!this.active),this.libass.canvasParent&&(this.libass.canvasParent.style.display=e?"block":"none",e&&this.libass.resize())}},{key:"timeOffset",get:function(){return this.libass.timeOffset},set:function(e){this.art.emit("artplayerPluginLibass:timeOffset",e),this.libass.timeOffset=e}},{key:"show",value:function(){this.visible=!0}},{key:"hide",value:function(){this.visible=!1}},{key:"destroy",value:function(){this.art.emit("artplayerPluginLibass:destroy"),(0,a._)(this,y,P).call(this),this.libass.dispose(),URL.revokeObjectURL(this.workerScriptUrl),this.libass=null}}]),e}();function x(){return O.apply(this,arguments)}function O(){return(O=(0,o._)(function(){var e,t,r,n,o,s,i,c=arguments;return(0,d._)(this,function(d){switch(d.label){case 0:if(e=this,!(t=c.length>0&&void 0!==c[0]?c[0]:{}).fallbackFont)return[2,this.utils.errorHandle(t.fallbackFont,"artplayerPluginLibass: fallbackFont is required")];return t.workerUrl||(t.workerUrl="https://cdnjs.cloudflare.com/ajax/libs/libass-wasm/4.1.0/js/subtitles-octopus-worker.js"),t.availableFonts&&(t.availableFonts=Object.entries(t.availableFonts).reduce(function(t,r){var n=(0,f._)(r,2),o=n[0],s=n[1];return t[o]=(0,a._)(e,_,L).call(e,s),t},{})),n=this,o=h.default.bind,s=[(0,l._)({subContent:"[Script Info]\nScriptType: v4.00+",video:this.$video},t)],i={},[4,(0,a._)(this,w,F).call(this,t)];case 1:return n.libass=new(o.apply(h.default,[void 0,(0,u._).apply(void 0,s.concat([(i.workerUrl=d.sent(),i.fallbackFont=(0,a._)(this,_,L).call(this,t.fallbackFont),i.fonts=null===(r=t.fonts)||void 0===r?void 0:r.map(function(t){return(0,a._)(e,_,L).call(e,t)}),i)]))])),this.libass.canvasParent.className="artplayer-plugin-libass",this.libass.canvasParent.style.cssText="\n position: absolute;\n top: 0;\n left: 0;\n width: 100%;\n height: 100%;\n user-select: none;\n pointer-events: none;\n z-index: 20;",[2]}})})).apply(this,arguments)}function E(){this.switchHandler=this.switch.bind(this),this.visibleHandler=this.setVisibility.bind(this),this.offsetHandler=this.setOffset.bind(this),this.art.on("subtitle",this.visibleHandler),this.art.on("subtitleLoad",this.switchHandler),this.art.on("subtitleOffset",this.offsetHandler),this.art.once("destroy",this.destroy.bind(this))}function P(){this.art.off("subtitle",this.visibleHandler),this.art.off("subtitleLoad",this.switchHandler),this.art.off("subtitleOffset",this.offsetHandler)}function T(e){this.$webvtt.style.visibility=e?"visible":"hidden"}function L(e){return(0,a._)(this,g,S).call(this,e)?e:new URL(e,document.baseURI).toString()}function S(e){return/^https?:\/\//.test(e)}function F(e){var t=this,r=e.workerUrl,n=e.wasmUrl;return new Promise(function(e){fetch(r).then(function(e){return e.text()}).then(function(o){var s=o,i=new Blob([s=s.replace(/wasmBinaryFile\s*=\s*"(subtitles-octopus-worker\.wasm)"/g,function(e,o){return n=n?(0,a._)(t,_,L).call(t,n):new URL(o,r).toString(),'wasmBinaryFile = "'.concat(n,'"')})],{type:"text/javascript"});e(URL.createObjectURL(i))})})}function I(){var e=!1;try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){var t=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));t instanceof WebAssembly.Module&&(e=new WebAssembly.Instance(t) instanceof WebAssembly.Instance)}}catch(e){}this.utils.errorHandle(e,"Browser does not support WebAssembly")}},{"@swc/helpers/_/_async_to_generator":"eONSn","@swc/helpers/_/_class_call_check":"9iJMm","@swc/helpers/_/_class_private_method_get":"g3ohx","@swc/helpers/_/_class_private_method_init":"7mIdc","@swc/helpers/_/_create_class":"21IOT","@swc/helpers/_/_object_spread":"9agdF","@swc/helpers/_/_object_spread_props":"gJNH2","@swc/helpers/_/_sliced_to_array":"uVQht","@swc/helpers/_/_ts_generator":"6Xyd0","libass-wasm":"gKNB2","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],eONSn:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t,r,n,o,s,a){try{var i=e[s](a),c=i.value}catch(e){r(e);return}i.done?t(c):Promise.resolve(c).then(n,o)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(n,s){var a=e.apply(t,r);function i(e){o(a,n,s,i,c,"next",e)}function c(e){o(a,n,s,i,c,"throw",e)}i(void 0)})}}n.defineInteropFlag(r),n.export(r,"_",function(){return s})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],iWrD0:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],"9iJMm":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}n.defineInteropFlag(r),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],g3ohx:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t,r){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return r}n.defineInteropFlag(r),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"7mIdc":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"_",function(){return s});var o=e("./_check_private_redeclaration.js");function s(e,t){(0,o._)(e,t),t.add(e)}},{"./_check_private_redeclaration.js":"7Xw9a","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"7Xw9a":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}n.defineInteropFlag(r),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"21IOT":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}n.defineInteropFlag(r),n.export(r,"_",function(){return s})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"9agdF":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"_",function(){return s});var o=e("./_define_property.js");function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){(0,o._)(e,t,r[t])})}return e}},{"./_define_property.js":"3NGsL","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"3NGsL":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}n.defineInteropFlag(r),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],gJNH2:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}n.defineInteropFlag(r),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],uVQht:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"_",function(){return c});var o=e("./_array_with_holes.js"),s=e("./_iterable_to_array_limit.js"),a=e("./_non_iterable_rest.js"),i=e("./_unsupported_iterable_to_array.js");function c(e,t){return(0,o._)(e)||(0,s._)(e,t)||(0,i._)(e,t)||(0,a._)()}},{"./_array_with_holes.js":"hF14e","./_iterable_to_array_limit.js":"loYCM","./_non_iterable_rest.js":"2Mjp1","./_unsupported_iterable_to_array.js":"5m31D","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],hF14e:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){if(Array.isArray(e))return e}n.defineInteropFlag(r),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],loYCM:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var s=[],a=!0,i=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw n}}return s}}n.defineInteropFlag(r),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"2Mjp1":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.defineInteropFlag(r),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"5m31D":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"_",function(){return s});var o=e("./_array_like_to_array.js");function s(e,t){if(e){if("string"==typeof e)return(0,o._)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return(0,o._)(e,t)}}},{"./_array_like_to_array.js":"djwRR","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],djwRR:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}n.defineInteropFlag(r),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"6Xyd0":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"_",function(){return o.__generator});var o=e("tslib")},{tslib:"c0d7h","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],c0d7h:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"__extends",function(){return a}),n.export(r,"__assign",function(){return i}),n.export(r,"__rest",function(){return c}),n.export(r,"__decorate",function(){return l}),n.export(r,"__param",function(){return u}),n.export(r,"__esDecorate",function(){return f}),n.export(r,"__runInitializers",function(){return d}),n.export(r,"__propKey",function(){return p}),n.export(r,"__setFunctionName",function(){return h}),n.export(r,"__metadata",function(){return v}),n.export(r,"__awaiter",function(){return m}),n.export(r,"__generator",function(){return y}),n.export(r,"__createBinding",function(){return b}),n.export(r,"__exportStar",function(){return _}),n.export(r,"__values",function(){return g}),n.export(r,"__read",function(){return w}),n.export(r,"__spread",function(){return j}),n.export(r,"__spreadArrays",function(){return k}),n.export(r,"__spreadArray",function(){return x}),n.export(r,"__await",function(){return O}),n.export(r,"__asyncGenerator",function(){return E}),n.export(r,"__asyncDelegator",function(){return P}),n.export(r,"__asyncValues",function(){return T}),n.export(r,"__makeTemplateObject",function(){return L}),n.export(r,"__importStar",function(){return F}),n.export(r,"__importDefault",function(){return I}),n.export(r,"__classPrivateFieldGet",function(){return M}),n.export(r,"__classPrivateFieldSet",function(){return W}),n.export(r,"__classPrivateFieldIn",function(){return D}),n.export(r,"__addDisposableResource",function(){return C}),n.export(r,"__disposeResources",function(){return R});var o=e("@swc/helpers/_/_type_of"),s=function(e,t){return(s=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function l(e,t,r,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a}function u(e,t){return function(r,n){t(r,n,e)}}function f(e,t,r,n,o,s){function a(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var i,c=n.kind,l="getter"===c?"get":"setter"===c?"set":"value",u=!t&&e?n.static?e:e.prototype:null,f=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),d=!1,p=r.length-1;p>=0;p--){var h={};for(var v in n)h[v]="access"===v?{}:n[v];for(var v in n.access)h.access[v]=n.access[v];h.addInitializer=function(e){if(d)throw TypeError("Cannot add initializers after decoration has completed");s.push(a(e||null))};var m=(0,r[p])("accessor"===c?{get:f.get,set:f.set}:f[l],h);if("accessor"===c){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw TypeError("Object expected");(i=a(m.get))&&(f.get=i),(i=a(m.set))&&(f.set=i),(i=a(m.init))&&o.unshift(i)}else(i=a(m))&&("field"===c?o.unshift(i):f[l]=i)}u&&Object.defineProperty(u,n.name,f),d=!0}function d(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function p(e){return(void 0===e?"undefined":(0,o._)(e))==="symbol"?e:"".concat(e)}function h(e,t,r){return(void 0===t?"undefined":(0,o._)(t))==="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function v(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function m(e,t,r,n){return new(r||(r=Promise))(function(o,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,i)}c((n=n.apply(e,t||[])).next())})}function y(e,t){var r,n,o,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=i(0),a.throw=i(1),a.return=i(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(r)throw TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var b=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function _(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||b(t,e,r)}function g(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,s=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}return a}function j(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e}function k(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var s=arguments[t],a=0,i=s.length;a<i;a++,o++)n[o]=s[a];return n}function x(e,t,r){if(r||2==arguments.length)for(var n,o=0,s=t.length;o<s;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function E(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),s=[];return n=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",function(e){return function(t){return Promise.resolve(t).then(e,l)}}),n[Symbol.asyncIterator]=function(){return this},n;function a(e,t){o[e]&&(n[e]=function(t){return new Promise(function(r,n){s.push([e,t,r,n])>1||i(e,t)})},t&&(n[e]=t(n[e])))}function i(e,t){try{var r;(r=o[e](t)).value instanceof O?Promise.resolve(r.value.v).then(c,l):u(s[0][2],r)}catch(e){u(s[0][3],e)}}function c(e){i("next",e)}function l(e){i("throw",e)}function u(e,t){e(t),s.shift(),s.length&&i(s[0][0],s[0][1])}}function P(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:O(e[n](t)),done:!1}:o?o(t):t}:o}}function T(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=g(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){!function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,o,(t=e[r](t)).done,t.value)})}}}function L(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var S=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function F(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&b(t,e,r);return S(t,e),t}function I(e){return e&&e.__esModule?e:{default:e}}function M(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function W(e,t,r,n,o){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function D(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function C(e,t,r){if(null!=t){var n,o;if("object"!=typeof t&&"function"!=typeof t)throw TypeError("Object expected.");if(r){if(!Symbol.asyncDispose)throw TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose],r&&(o=n)}if("function"!=typeof n)throw TypeError("Object not disposable.");o&&(n=function(){try{o.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var A="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function R(e){function t(t){e.error=e.hasError?new A(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}var r,n=0;return function o(){for(;r=e.stack.pop();)try{if(!r.async&&1===n)return n=0,e.stack.push(r),Promise.resolve().then(o);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return n|=2,Promise.resolve(s).then(o,function(e){return t(e),o()})}else n|=1}catch(e){t(e)}if(1===n)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}()}r.default={__extends:a,__assign:i,__rest:c,__decorate:l,__param:u,__metadata:v,__awaiter:m,__generator:y,__createBinding:b,__exportStar:_,__values:g,__read:w,__spread:j,__spreadArrays:k,__spreadArray:x,__await:O,__asyncGenerator:E,__asyncDelegator:P,__asyncValues:T,__makeTemplateObject:L,__importStar:F,__importDefault:I,__classPrivateFieldGet:M,__classPrivateFieldSet:W,__classPrivateFieldIn:D,__addDisposableResource:C,__disposeResources:R}},{"@swc/helpers/_/_type_of":"felZi","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],felZi:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}n.defineInteropFlag(r),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],gKNB2:[function(e,t,r){"function"==typeof SubtitlesOctopusOnLoad&&SubtitlesOctopusOnLoad(),t.exports&&(t.exports=function(e){var t=!1;try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){var r=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));r instanceof WebAssembly.Module&&(t=new WebAssembly.Instance(r) instanceof WebAssembly.Instance)}}catch(e){}console.log("WebAssembly support detected: "+(t?"yes":"no"));var n=this;function o(){n.setCurrentTime(n.video.currentTime+n.timeOffset)}function s(){n.setIsPaused(!1,n.video.currentTime+n.timeOffset)}function a(){n.setIsPaused(!0,n.video.currentTime+n.timeOffset)}function i(){n.video.removeEventListener("timeupdate",o,!1)}function c(){n.video.addEventListener("timeupdate",o,!1);var e=n.video.currentTime+n.timeOffset;n.setCurrentTime(e)}function l(){n.setRate(n.video.playbackRate)}function u(){n.setIsPaused(!0,n.video.currentTime+n.timeOffset)}function f(e){e.target.removeEventListener(e.type,f,!1),n.resize()}function d(){var e=n.renderFramesData,t=performance.now();n.ctx.clearRect(0,0,n.canvas.width,n.canvas.height);for(var r=0;r<e.canvases.length;r++){var o=e.canvases[r];n.bufferCanvas.width=o.w,n.bufferCanvas.height=o.h;var s=new Uint8ClampedArray(o.buffer);if(n.hasAlphaBug)for(var a=3;a<s.length;a+=4)s[a]=s[a]>=1?s[a]:1;var i=new ImageData(s,o.w,o.h);n.bufferCanvasCtx.putImageData(i,0,0),n.ctx.drawImage(n.bufferCanvas,o.x,o.y)}if(n.debug){var c=Math.round(performance.now()-t),l=e.blendTime;void 0!==l?console.log("render: "+Math.round(e.spentTime-l)+" ms, blend: "+Math.round(l)+" ms, draw: "+c+" ms; TOTAL="+Math.round(e.spentTime+c)+" ms"):console.log(Math.round(e.spentTime)+" ms (+ "+c+" ms draw)"),n.renderStart=performance.now()}}function p(){var e=n.renderFramesData,t=performance.now();n.ctx.clearRect(0,0,n.canvas.width,n.canvas.height);for(var r=0;r<e.bitmaps.length;r++){var o=e.bitmaps[r];n.ctx.drawImage(o.bitmap,o.x,o.y)}if(n.debug){var s=Math.round(performance.now()-t);console.log(e.bitmaps.length+" bitmaps, libass: "+Math.round(e.libassTime)+"ms, decode: "+Math.round(e.decodeTime)+"ms, draw: "+s+"ms"),n.renderStart=performance.now()}}n.canvas=e.canvas,n.renderMode=e.renderMode||(e.lossyRender?"lossy":"wasm-blend"),n.libassMemoryLimit=e.libassMemoryLimit||0,n.libassGlyphLimit=e.libassGlyphLimit||0,n.targetFps=e.targetFps||24,n.prescaleFactor=e.prescaleFactor||1,n.prescaleHeightLimit=e.prescaleHeightLimit||1080,n.maxRenderHeight=e.maxRenderHeight||0,n.dropAllAnimations=e.dropAllAnimations||!1,n.isOurCanvas=!1,n.video=e.video,n.canvasParent=null,n.fonts=e.fonts||[],n.availableFonts=e.availableFonts||[],n.fallbackFont=e.fallbackFont||"default.woff2",n.lazyFileLoading=e.lazyFileLoading||!1,n.onReadyEvent=e.onReady,t?n.workerUrl=e.workerUrl||"subtitles-octopus-worker.js":n.workerUrl=e.legacyWorkerUrl||"subtitles-octopus-worker-legacy.js",n.subUrl=e.subUrl,n.subContent=e.subContent||null,n.onErrorEvent=e.onError,n.debug=e.debug||!1,n.lastRenderTime=0,n.pixelRatio=window.devicePixelRatio||1,n.timeOffset=e.timeOffset||0,n.hasAlphaBug=!1,function(){if("function"==typeof ImageData.prototype.constructor)try{new window.ImageData(new Uint8ClampedArray([0,0,0,0]),1,1);return}catch(e){console.log("detected that ImageData is not constructable despite browser saying so")}var e=document.createElement("canvas").getContext("2d");window.ImageData=function(){var t=0;if(arguments[0]instanceof Uint8ClampedArray)var r=arguments[t++];var n=arguments[t++],o=arguments[t],s=e.createImageData(n,o);return r&&s.data.set(r),s}}(),n.workerError=function(e){if(console.error("Worker error: ",e),n.onErrorEvent&&n.onErrorEvent(e),!n.debug)throw n.dispose(),Error("Worker error: "+e)},n.init=function(){if(!window.Worker){n.workerError("worker not supported");return}n.worker||(n.worker=new Worker(n.workerUrl),n.worker.addEventListener("message",n.onWorkerMessage),n.worker.addEventListener("error",n.workerError)),n.workerActive=!1,n.createCanvas(),n.setVideo(e.video),n.setSubUrl(e.subUrl),n.worker.postMessage({target:"worker-init",width:n.canvas.width,height:n.canvas.height,URL:document.URL,currentScript:n.workerUrl,preMain:!0,renderMode:n.renderMode,subUrl:n.subUrl,subContent:n.subContent,fonts:n.fonts,availableFonts:n.availableFonts,fallbackFont:n.fallbackFont,lazyFileLoading:n.lazyFileLoading,debug:n.debug,targetFps:n.targetFps,libassMemoryLimit:n.libassMemoryLimit,libassGlyphLimit:n.libassGlyphLimit,dropAllAnimations:n.dropAllAnimations})},n.createCanvas=function(){n.canvas||(n.video?(n.isOurCanvas=!0,n.canvas=document.createElement("canvas"),n.canvas.className="libassjs-canvas",n.canvas.style.display="none",n.canvasParent=document.createElement("div"),n.canvasParent.className="libassjs-canvas-parent",n.canvasParent.appendChild(n.canvas),n.video.nextSibling?n.video.parentNode.insertBefore(n.canvasParent,n.video.nextSibling):n.video.parentNode.appendChild(n.canvasParent)):n.canvas||n.workerError("Don't know where to render: you should give video or canvas in options.")),n.ctx=n.canvas.getContext("2d"),n.bufferCanvas=document.createElement("canvas"),n.bufferCanvasCtx=n.bufferCanvas.getContext("2d"),n.bufferCanvas.width=1,n.bufferCanvas.height=1;var e=new ImageData(new Uint8ClampedArray([0,255,0,0]),1,1);n.bufferCanvasCtx.clearRect(0,0,1,1),n.ctx.clearRect(0,0,1,1);var t=n.ctx.getImageData(0,0,1,1).data;n.bufferCanvasCtx.putImageData(e,0,0),n.ctx.drawImage(n.bufferCanvas,0,0);var r=n.ctx.getImageData(0,0,1,1).data;n.hasAlphaBug=t[1]!=r[1],n.hasAlphaBug&&console.log("Detected a browser having issue with transparent pixels, applying workaround")},n.setVideo=function(e){n.video=e,n.video&&(n.video.addEventListener("timeupdate",o,!1),n.video.addEventListener("playing",s,!1),n.video.addEventListener("pause",a,!1),n.video.addEventListener("seeking",i,!1),n.video.addEventListener("seeked",c,!1),n.video.addEventListener("ratechange",l,!1),n.video.addEventListener("waiting",u,!1),document.addEventListener("fullscreenchange",n.resizeWithTimeout,!1),document.addEventListener("mozfullscreenchange",n.resizeWithTimeout,!1),document.addEventListener("webkitfullscreenchange",n.resizeWithTimeout,!1),document.addEventListener("msfullscreenchange",n.resizeWithTimeout,!1),window.addEventListener("resize",n.resizeWithTimeout,!1),"undefined"!=typeof ResizeObserver&&(n.ro=new ResizeObserver(n.resizeWithTimeout),n.ro.observe(n.video)),n.video.videoWidth>0?n.resize():n.video.addEventListener("loadedmetadata",f,!1))},n.getVideoPosition=function(){var e=n.video.videoWidth/n.video.videoHeight,t=n.video.offsetWidth,r=n.video.offsetHeight,o=t,s=r;t/r>e?o=Math.floor(r*e):s=Math.floor(t/e);var a=(t-o)/2,i=(r-s)/2;return{width:o,height:s,x:a,y:i}},n.setSubUrl=function(e){n.subUrl=e},n.renderFrameData=null,n.workerActive=!1,n.frameId=0,n.onWorkerMessage=function(e){!n.workerActive&&(n.workerActive=!0,n.onReadyEvent&&n.onReadyEvent());var t=e.data;switch(t.target){case"stdout":console.log(t.content);break;case"console-log":console.log.apply(console,JSON.parse(t.content));break;case"console-debug":console.debug.apply(console,JSON.parse(t.content));break;case"console-info":console.info.apply(console,JSON.parse(t.content));break;case"console-warn":console.warn.apply(console,JSON.parse(t.content));break;case"console-error":console.error.apply(console,JSON.parse(t.content));break;case"stderr":console.error(t.content);break;case"window":window[t.method]();break;case"canvas":switch(t.op){case"getContext":n.ctx=n.canvas.getContext(t.type,t.attributes);break;case"resize":n.resize(t.width,t.height);break;case"renderCanvas":n.lastRenderTime<t.time&&(n.lastRenderTime=t.time,n.renderFramesData=t,window.requestAnimationFrame(d));break;case"renderFastCanvas":n.lastRenderTime<t.time&&(n.lastRenderTime=t.time,n.renderFramesData=t,window.requestAnimationFrame(p));break;case"setObjectProperty":n.canvas[t.object][t.property]=t.value;break;default:throw"eh?"}break;case"tick":n.frameId=t.id,n.worker.postMessage({target:"tock",id:n.frameId});break;case"custom":if(n.onCustomMessage)n.onCustomMessage(e);else throw"Custom message received but client onCustomMessage not implemented.";break;case"setimmediate":n.worker.postMessage({target:"setimmediate"});break;case"get-events":case"get-styles":case"ready":break;default:throw"what? "+t.target}},n.resize=function(e,t,r,o){var s=null;if(r=r||0,o=o||0,(!e||!t)&&n.video){var a=function(e,t){var r=n.prescaleFactor<=0?1:n.prescaleFactor;if(t<=0||e<=0)e=0,t=0;else{var o=r<1?-1:1,s=t;o*s*r<=o*n.prescaleHeightLimit?s*=r:o*s<o*n.prescaleHeightLimit&&(s=n.prescaleHeightLimit),n.maxRenderHeight>0&&s>n.maxRenderHeight&&(s=n.maxRenderHeight),e*=s/t,t=s}return{width:e,height:t}}((s=n.getVideoPosition()).width*n.pixelRatio,s.height*n.pixelRatio);e=a.width,t=a.height;var i=n.canvasParent.getBoundingClientRect().top-n.video.getBoundingClientRect().top;r=s.y-i,o=s.x}if(!e||!t){n.video||console.error("width or height is 0. You should specify width & height for resize.");return}(n.canvas.width!=e||n.canvas.height!=t||n.canvas.style.top!=r||n.canvas.style.left!=o)&&(n.canvas.width=e,n.canvas.height=t,null!=s&&(n.canvasParent.style.position="relative",n.canvas.style.display="block",n.canvas.style.position="absolute",n.canvas.style.width=s.width+"px",n.canvas.style.height=s.height+"px",n.canvas.style.top=r+"px",n.canvas.style.left=o+"px",n.canvas.style.pointerEvents="none"),n.worker.postMessage({target:"canvas",width:n.canvas.width,height:n.canvas.height}))},n.resizeWithTimeout=function(){n.resize(),setTimeout(n.resize,100)},n.runBenchmark=function(){n.worker.postMessage({target:"runBenchmark"})},n.customMessage=function(e,t){t=t||{},n.worker.postMessage({target:"custom",userData:e,preMain:t.preMain})},n.setCurrentTime=function(e){n.worker.postMessage({target:"video",currentTime:e})},n.setTrackByUrl=function(e){n.worker.postMessage({target:"set-track-by-url",url:e})},n.setTrack=function(e){n.worker.postMessage({target:"set-track",content:e})},n.freeTrack=function(e){n.worker.postMessage({target:"free-track"})},n.render=n.setCurrentTime,n.setIsPaused=function(e,t){n.worker.postMessage({target:"video",isPaused:e,currentTime:t})},n.setRate=function(e){n.worker.postMessage({target:"video",rate:e})},n.dispose=function(){n.worker.postMessage({target:"destroy"}),n.worker.terminate(),n.worker.removeEventListener("message",n.onWorkerMessage),n.worker.removeEventListener("error",n.workerError),n.workerActive=!1,n.worker=null,n.video&&(n.video.removeEventListener("timeupdate",o,!1),n.video.removeEventListener("playing",s,!1),n.video.removeEventListener("pause",a,!1),n.video.removeEventListener("seeking",i,!1),n.video.removeEventListener("seeked",c,!1),n.video.removeEventListener("ratechange",l,!1),n.video.removeEventListener("waiting",u,!1),n.video.removeEventListener("loadedmetadata",f,!1),document.removeEventListener("fullscreenchange",n.resizeWithTimeout,!1),document.removeEventListener("mozfullscreenchange",n.resizeWithTimeout,!1),document.removeEventListener("webkitfullscreenchange",n.resizeWithTimeout,!1),document.removeEventListener("msfullscreenchange",n.resizeWithTimeout,!1),window.removeEventListener("resize",n.resizeWithTimeout,!1),n.video.parentNode.removeChild(n.canvasParent),n.video=null),n.ro&&(n.ro.disconnect(),n.ro=null),n.onCustomMessage=null,n.onErrorEvent=null,n.onReadyEvent=null},n.fetchFromWorker=function(e,t,r){try{var o=e.target,s=setTimeout(function(){i(Error("Error: Timeout while try to fetch "+o))},5e3),a=function(e){e.data.target==o&&(t(e.data),n.worker.removeEventListener("message",a),n.worker.removeEventListener("error",i),clearTimeout(s))},i=function(e){r(e),n.worker.removeEventListener("message",a),n.worker.removeEventListener("error",i),clearTimeout(s)};n.worker.addEventListener("message",a),n.worker.addEventListener("error",i),n.worker.postMessage(e)}catch(e){r(e)}},n.createEvent=function(e){n.worker.postMessage({target:"create-event",event:e})},n.getEvents=function(e,t){n.fetchFromWorker({target:"get-events"},function(t){e(t.events)},t)},n.setEvent=function(e,t){n.worker.postMessage({target:"set-event",event:e,index:t})},n.removeEvent=function(e){n.worker.postMessage({target:"remove-event",index:e})},n.createStyle=function(e){n.worker.postMessage({target:"create-style",style:e})},n.getStyles=function(e,t){n.fetchFromWorker({target:"get-styles"},function(t){e(t.styles)},t)},n.setStyle=function(e,t){n.worker.postMessage({target:"set-style",style:e,index:t})},n.removeStyle=function(e){n.worker.postMessage({target:"remove-style",index:e})},n.init()})},{}]},["1dPf1"],"1dPf1","parcelRequire4dc0");