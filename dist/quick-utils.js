!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.quickUtils=t():e.quickUtils=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);r.d(t,"parseURLSearch",function(){return n.a})},function(e,t,r){"use strict";function n(e){if(!e)return{};return("?"===e[0]?e.slice(1):e).split("&").filter(function(e){return e}).reduce(function(e,t){var r=t.split("="),n=r[0],o=r[1],u=e[n];return"string"==typeof u?e[n]=[u,o]:Array.isArray(u)?e[n]=u.concat([o]):e[n]=o,e},{})}r.d(t,"a",function(){return n})}])});
//# sourceMappingURL=quick-utils.js.map