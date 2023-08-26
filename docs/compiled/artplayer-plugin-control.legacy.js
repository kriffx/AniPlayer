/*!
 * artplayer-plugin-control.js v2.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,r,o,n){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l="function"==typeof a[o]&&a[o],i=l.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function p(t,r){if(!i[t]){if(!e[t]){var n="function"==typeof a[o]&&a[o];if(!r&&n)return n(t,!0);if(l)return l(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}s.resolve=function(r){var o=e[t][1][r];return null!=o?o:r},s.cache={};var d=i[t]=new p.Module(t);e[t][0].call(d.exports,s,d,d.exports,this)}return i[t].exports;function s(e){var t=s.resolve(e);return!1===t?{}:p(t)}}p.isParcelRequire=!0,p.Module=function(e){this.id=e,this.bundle=p,this.exports={}},p.modules=e,p.cache=i,p.parent=l,p.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(p,"root",{get:function(){return a[o]}}),a[o]=p;for(var c=0;c<t.length;c++)p(t[c]);if(r){var d=p(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define((function(){return d}))}}({eacU2:[function(e,t,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var n=e("bundle-text:./style.less"),a=o.interopDefault(n);function l(){return function(e){!function(e){var t=e.constructor,r=t.version,o=t.utils.errorHandle,n=r.split(".").map(Number);o(n[0]+n[1]/100>=5,"Artplayer.js@".concat(r," is not compatible the artplayerPluginControl@").concat(l.version,". Please update it to version Artplayer.js@5.x.x"))}(e);var t=e.template,r=t.$bottom,o=t.$player,n=e.constructor.utils,a=n.append,i=n.secondToTime,u=n.addClass,p=n.removeClass,c=n.hasClass;if(!n.isMobile){var d="artplayer-plugin-control";u(o,d);for(var s=a(r,'<div class="apa-control-current"></div>'),f=a(r,'<div class="apa-control-duration"></div>'),y=["video:loadedmetadata","video:timeupdate","video:progress"],g=0;g<y.length;g++)e.on(y[g],(function(){s.innerText=i(e.currentTime),f.innerText=i(e.duration)}));return{name:"artplayerPluginControl",get enable(){return c(o,d)},set enable(e){e?u(o,d):p(o,d)}}}}}if(r.default=l,l.env="production",l.version="2.0.0",l.build="2023-08-26 16:47:27","undefined"!=typeof document&&!document.getElementById("artplayer-plugin-control")){var i=document.createElement("style");i.id="artplayer-plugin-control",i.textContent=a.default,document.head.appendChild(i)}"undefined"!=typeof window&&(window.artplayerPluginControl=l)},{"bundle-text:./style.less":"kok3H","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],kok3H:[function(e,t,r){t.exports=".artplayer-plugin-control{--art-control-height:46px;--art-control-icon-scale:1.1}.artplayer-plugin-control .apa-control-current,.artplayer-plugin-control .apa-control-duration{display:flex}.artplayer-plugin-control .art-control-time,.artplayer-plugin-control .art-controls-center{display:none}.artplayer-plugin-control .art-settings{bottom:85px}.artplayer-plugin-control .art-bottom{height:70px;width:400px;-webkit-backdrop-filter:saturate(180%)blur(20px);backdrop-filter:saturate(180%)blur(20px);background-color:rgba(0,0,0,.7);background-image:none;border-radius:10px;align-items:center;margin-left:-200px;top:auto;bottom:10px;left:50%;right:auto;overflow:visible;box-shadow:0 10px 15px -3px rgba(0,0,0,.2),0 4px 6px -4px rgba(0,0,0,.2)}.artplayer-plugin-control .art-bottom .art-progress{width:70%}.artplayer-plugin-control .art-bottom .art-controls{width:100%}.artplayer-plugin-control .art-bottom .apa-control-current,.artplayer-plugin-control .art-bottom .apa-control-duration{width:15%;justify-content:center;font-size:12px;line-height:1;display:flex;position:absolute;top:10px}.artplayer-plugin-control .art-bottom .apa-control-current{left:0}.artplayer-plugin-control .art-bottom .apa-control-duration{right:0}.apa-control-current,.apa-control-duration{display:none}"},{}],iWrD0:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach((function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})})),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}]},["eacU2"],"eacU2","parcelRequire4dc0");