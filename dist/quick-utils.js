!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.quickUtils=t():e.quickUtils=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=n(2);n.d(t,"parseURLSearch",function(){return r.a}),n.d(t,"whetherInBetween",function(){return u.a})},function(e,t,n){"use strict";function r(e){if(!e)return{};return("?"===e[0]?e.slice(1):e).split("&").filter(function(e){return e}).reduce(function(e,t){var n=t.split("="),r=n[0],u=n[1],o=e[r];return void 0===o?(e[r]=u,e):"string"==typeof o?(e[r]=[o,u],e):Array.isArray(o)?(e[r]=o.concat([u]),e):void 0},{})}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";function r(e,t){var n=e.split(":").map(Number),r=n[0],u=n[1],o=t.split(":").map(Number),i=o[0],c=o[1],f=new Date,a=f.getTime(),s=f.getFullYear(),p=f.getMonth(),l=f.getDate();return(new Date(s,p,l,r,u,0,0).getTime()-a)*(a-new Date(s,p,l,i,c,0,0).getTime())>0}n.d(t,"a",function(){return r})}])});
//# sourceMappingURL=quick-utils.js.map