!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=128)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(91))},function(t,n,e){var r=e(0),o=e(33),i=e(3),c=e(34),u=e(38),a=e(58),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(7),o=e(49),i=e(6),c=e(21),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(7),o=e(4),i=e(15);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(0),o=e(22).f,i=e(8),c=e(10),u=e(31),a=e(53),f=e(57);t.exports=function(t,n){var e,s,l,p,v,h=t.target,y=t.global,d=t.stat;if(e=y?r:d?r[h]||u(h,{}):(r[h]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(y?s:h+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(0),o=e(8),i=e(3),c=e(31),u=e(32),a=e(16),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(47),o=e(27);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(54),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(27);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r,o,i,c=e(92),u=e(0),a=e(5),f=e(8),s=e(3),l=e(23),p=e(24),v=u.WeakMap;if(c){var h=new v,y=h.get,d=h.has,g=h.set;r=function(t,n){return g.call(h,t,n),n},o=function(t){return y.call(h,t)||{}},i=function(t){return d.call(h,t)}}else{var m=l("state");p[m]=!0,r=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){t.exports=!1},function(t,n,e){var r=e(36),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(7),o=e(51),i=e(15),c=e(11),u=e(21),a=e(3),f=e(49),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(33),o=e(34),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n,e){var r=e(4).f,o=e(3),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(104),e(105);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=document.querySelector(n),this._setHandlers(e)}var n,e,o;return n=t,(e=[{key:"_setHandlers",value:function(t){var n=this;Array.isArray(t)&&t.forEach((function(t){n._element.addEventListener(t.event,t.callback)}))}}])&&r(n.prototype,e),o&&r(n,o),t}()},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(20);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(43),o=e(10),i=e(102);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){var r=e(0),o=e(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(8);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(52),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(17),o=e(52);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(55),o=e(37).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(12);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r,o=e(6),i=e(96),c=e(37),u=e(24),a=e(60),f=e(30),s=e(23),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},h=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;h=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete h.prototype[c[e]];return h()};u[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=h(),void 0===n?e:i(e,n)}},function(t,n,e){"use strict";var r=e(11),o=e(98),i=e(19),c=e(16),u=e(67),a=c.set,f=c.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,n){a(this,{type:"Array Iterator",target:r(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){var r=e(3),o=e(14),i=e(23),c=e(69),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,e){var r={};r[e(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){var r,o,i=e(0),c=e(76),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return i}));var r="305dd5c564b64d14a9f4f2bf7b677e5f",o="https://api.news.neomedved.site",i="http://newsapi.org/v2"},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));e(48);function r(t,n){localStorage.getItem("jwt")?n.getUserData().then((function(n){t.render({isLoggedIn:!0,userName:n.name})})).catch((function(){t.render({isLoggedIn:!1})})):t.render({isLoggedIn:!1})}},function(t,n,e){var r=e(2),o=e(12),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(7),o=e(4).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/;!r||"name"in i||o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},function(t,n,e){var r=e(7),o=e(2),i=e(30);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){"use strict";var r=e(9),o=e(0),i=e(13),c=e(17),u=e(7),a=e(38),f=e(58),s=e(2),l=e(3),p=e(39),v=e(5),h=e(6),y=e(14),d=e(11),g=e(21),m=e(15),b=e(40),x=e(59),S=e(35),w=e(97),O=e(56),j=e(22),_=e(4),E=e(51),P=e(8),T=e(10),k=e(33),L=e(23),A=e(24),I=e(34),M=e(1),C=e(61),N=e(62),F=e(25),R=e(16),D=e(63).forEach,G=L("hidden"),z=M("toPrimitive"),U=R.set,V=R.getterFor("Symbol"),q=Object.prototype,H=o.Symbol,B=i("JSON","stringify"),W=j.f,J=_.f,Y=w.f,K=E.f,$=k("symbols"),Q=k("op-symbols"),X=k("string-to-symbol-registry"),Z=k("symbol-to-string-registry"),tt=k("wks"),nt=o.QObject,et=!nt||!nt.prototype||!nt.prototype.findChild,rt=u&&s((function(){return 7!=b(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=W(q,n);r&&delete q[n],J(t,n,e),r&&t!==q&&J(q,n,r)}:J,ot=function(t,n){var e=$[t]=b(H.prototype);return U(e,{type:"Symbol",tag:t,description:n}),u||(e.description=n),e},it=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,n,e){t===q&&ct(Q,n,e),h(t);var r=g(n,!0);return h(e),l($,r)?(e.enumerable?(l(t,G)&&t[G][r]&&(t[G][r]=!1),e=b(e,{enumerable:m(0,!1)})):(l(t,G)||J(t,G,m(1,{})),t[G][r]=!0),rt(t,r,e)):J(t,r,e)},ut=function(t,n){h(t);var e=d(n),r=x(e).concat(lt(e));return D(r,(function(n){u&&!at.call(e,n)||ct(t,n,e[n])})),t},at=function(t){var n=g(t,!0),e=K.call(this,n);return!(this===q&&l($,n)&&!l(Q,n))&&(!(e||!l(this,n)||!l($,n)||l(this,G)&&this[G][n])||e)},ft=function(t,n){var e=d(t),r=g(n,!0);if(e!==q||!l($,r)||l(Q,r)){var o=W(e,r);return!o||!l($,r)||l(e,G)&&e[G][r]||(o.enumerable=!0),o}},st=function(t){var n=Y(d(t)),e=[];return D(n,(function(t){l($,t)||l(A,t)||e.push(t)})),e},lt=function(t){var n=t===q,e=Y(n?Q:d(t)),r=[];return D(e,(function(t){!l($,t)||n&&!l(q,t)||r.push($[t])})),r};(a||(T((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=I(t),e=function(t){this===q&&e.call(Q,t),l(this,G)&&l(this[G],n)&&(this[G][n]=!1),rt(this,n,m(1,t))};return u&&et&&rt(q,n,{configurable:!0,set:e}),ot(n,t)}).prototype,"toString",(function(){return V(this).tag})),T(H,"withoutSetter",(function(t){return ot(I(t),t)})),E.f=at,_.f=ct,j.f=ft,S.f=w.f=st,O.f=lt,C.f=function(t){return ot(M(t),t)},u&&(J(H.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),c||T(q,"propertyIsEnumerable",at,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:H}),D(x(tt),(function(t){N(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(l(X,n))return X[n];var e=H(n);return X[n]=e,Z[e]=n,e},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,n){return void 0===n?b(t):ut(b(t),n)},defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:s((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(y(t))}}),B)&&r({target:"JSON",stat:!0,forced:!a||s((function(){var t=H();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}))},{stringify:function(t,n,e){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=n,(v(n)||void 0!==t)&&!it(t))return p(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!it(n))return n}),o[1]=n,B.apply(null,o)}});H.prototype[z]||P(H.prototype,z,H.prototype.valueOf),F(H,"Symbol"),A[G]=!0},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(31),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(3),o=e(93),i=e(22),c=e(4);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(3),o=e(11),i=e(94).indexOf,c=e(24);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(38);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(55),o=e(37);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(13);t.exports=r("document","documentElement")},function(t,n,e){var r=e(1);n.f=r},function(t,n,e){var r=e(54),o=e(3),i=e(61),c=e(4).f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},function(t,n,e){var r=e(28),o=e(47),i=e(14),c=e(18),u=e(64),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,h,y,d){for(var g,m,b=i(v),x=o(b),S=r(h,y,3),w=c(x.length),O=0,j=d||u,_=n?j(v,w):e?j(v,0):void 0;w>O;O++)if((p||O in x)&&(m=S(g=x[O],O,b),t))if(n)_[O]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:a.call(_,g)}else if(s)return!1;return l?-1:f||s?s:_}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(5),o=e(39),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){"use strict";var r=e(9),o=e(7),i=e(0),c=e(3),u=e(5),a=e(4).f,f=e(53),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var h=v.toString,y="Symbol(test)"==String(s("test")),d=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=h.call(t);if(c(l,t))return"";var e=y?n.slice(7,-1):n.replace(d,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,n,e){e(62)("iterator")},function(t,n,e){"use strict";var r=e(9),o=e(99),i=e(42),c=e(100),u=e(25),a=e(8),f=e(10),s=e(1),l=e(17),p=e(19),v=e(68),h=v.IteratorPrototype,y=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),g=function(){return this};t.exports=function(t,n,e,s,v,m,b){o(e,n,s);var x,S,w,O=function(t){if(t===v&&T)return T;if(!y&&t in E)return E[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},j=n+" Iterator",_=!1,E=t.prototype,P=E[d]||E["@@iterator"]||v&&E[v],T=!y&&P||O(v),k="Array"==n&&E.entries||P;if(k&&(x=i(k.call(new t)),h!==Object.prototype&&x.next&&(l||i(x)===h||(c?c(x,h):"function"!=typeof x[d]&&a(x,d,g)),u(x,j,!0,!0),l&&(p[j]=g))),"values"==v&&P&&"values"!==P.name&&(_=!0,T=function(){return P.call(this)}),l&&!b||E[d]===T||a(E,d,T),p[n]=T,v)if(S={values:O("values"),keys:m?T:O("keys"),entries:O("entries")},b)for(w in S)!y&&!_&&w in E||f(E,w,S[w]);else r({target:n,proto:!0,forced:y||_},S);return S}},function(t,n,e){"use strict";var r,o,i,c=e(42),u=e(8),a=e(3),f=e(1),s=e(17),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||a(r,l)||u(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(2);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(9),o=e(2),i=e(14),c=e(42),u=e(69);r({target:"Object",stat:!0,forced:o((function(){c(1)})),sham:!u},{getPrototypeOf:function(t){return c(i(t))}})},function(t,n,e){var r=e(43),o=e(12),i=e(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){"use strict";var r=e(103).charAt,o=e(16),i=e(67),c=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=u(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(0),o=e(74),i=e(41),c=e(8),u=e(1),a=u("iterator"),f=u("toStringTag"),s=i.values;for(var l in o){var p=r[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{c(v,a,s)}catch(t){v[a]=s}if(v[f]||c(v,f,l),o[l])for(var h in i)if(v[h]!==i[h])try{c(v,h,i[h])}catch(t){v[h]=i[h]}}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";var r=e(63).forEach,o=e(82),i=e(83),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(13);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r,o,i,c=e(0),u=e(2),a=e(12),f=e(28),s=e(60),l=e(30),p=e(78),v=c.location,h=c.setImmediate,y=c.clearImmediate,d=c.process,g=c.MessageChannel,m=c.Dispatch,b=0,x={},S=function(t){if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},w=function(t){return function(){S(t)}},O=function(t){S(t.data)},j=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};h&&y||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return x[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(b),b},y=function(t){delete x[t]},"process"==a(d)?r=function(t){d.nextTick(w(t))}:m&&m.now?r=function(t){m.now(w(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=O,r=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(j)?r="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),S(t)}}:function(t){setTimeout(w(t),0)}:(r=j,c.addEventListener("message",O,!1))),t.exports={set:h,clear:y}},function(t,n,e){var r=e(76);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){"use strict";var r=e(20),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));e(50),e(65),e(66),e(41),e(70),e(29),e(72),e(73);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var f=function(t){function n(){return o(this,n),c(this,u(n).apply(this,arguments))}var e,r,f;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(n,t),e=n,(r=[{key:"render",value:function(t){var n=this._element.querySelector(".header__user"),e=this._element.querySelector(".header__icon"),r=this._element.querySelectorAll(".header__link")[1];t.isLoggedIn?(n.textContent=t.userName,e.classList.remove("header__icon_unauthorized"),r.classList.remove("header__link_unauthorized")):(n.textContent="Авторизация",e.classList.add("header__icon_unauthorized"),r.classList.add("header__link_unauthorized"))}}])&&i(e.prototype,r),f&&i(e,f),n}(e(26).a)},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(84),e(29),e(86);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=n.baseUrl,this.headers=n.headers}var n,e,o;return n=t,(e=[{key:"_template",value:function(t,n,e){var r=this.headers;return r.authorization="Bearer ".concat(localStorage.getItem("jwt")),fetch("".concat(this.baseUrl,"/").concat(t),{method:n,headers:r,body:"GET"===n?void 0:JSON.stringify(e)}).then((function(t){return t.ok?t.json():Promise.reject(new Error("{ status: ".concat(t.status,", response: ").concat(t.json()," }")))}))}},{key:"login",value:function(t,n){return this._template("signin","POST",{email:t,password:n})}},{key:"signup",value:function(t,n,e){return this._template("signup","POST",{name:t,email:n,password:e})}},{key:"getUserData",value:function(){return this._template("users/me","GET")}},{key:"getArticles",value:function(){return this._template("articles","GET")}},{key:"createArticle",value:function(t){return this._template("articles","POST",t)}},{key:"removeArticle",value:function(t){return this._template("articles/".concat(t),"DELETE")}}])&&r(n.prototype,e),o&&r(n,o),t}()},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(7),o=e(2),i=e(3),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){"use strict";var r=e(9),o=e(2),i=e(39),c=e(5),u=e(14),a=e(18),f=e(85),s=e(64),l=e(106),p=e(1),v=e(44),h=p("isConcatSpreadable"),y=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),d=l("concat"),g=function(t){if(!c(t))return!1;var n=t[h];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!y||!d},{concat:function(t){var n,e,r,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],g(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,e){"use strict";var r=e(21),o=e(4),i=e(15);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){"use strict";var r,o,i,c,u=e(9),a=e(17),f=e(0),s=e(13),l=e(107),p=e(10),v=e(108),h=e(25),y=e(109),d=e(5),g=e(20),m=e(110),b=e(12),x=e(32),S=e(111),w=e(90),O=e(112),j=e(77).set,_=e(113),E=e(114),P=e(115),T=e(79),k=e(116),L=e(16),A=e(57),I=e(1),M=e(44),C=I("species"),N="Promise",F=L.get,R=L.set,D=L.getterFor(N),G=l,z=f.TypeError,U=f.document,V=f.process,q=s("fetch"),H=T.f,B=H,W="process"==b(V),J=!!(U&&U.createEvent&&f.dispatchEvent),Y=A(N,(function(){if(!(x(G)!==String(G))){if(66===M)return!0;if(!W&&"function"!=typeof PromiseRejectionEvent)return!0}if(a&&!G.prototype.finally)return!0;if(M>=51&&/native code/.test(G))return!1;var t=G.resolve(1),n=function(t){t((function(){}),(function(){}))};return(t.constructor={})[C]=n,!(t.then((function(){}))instanceof n)})),K=Y||!w((function(t){G.all(t).catch((function(){}))})),$=function(t){var n;return!(!d(t)||"function"!=typeof(n=t.then))&&n},Q=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;_((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,a,f,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,v=s.reject,h=s.domain;try{l?(i||(2===n.rejection&&nt(t,n),n.rejection=1),!0===l?u=o:(h&&h.enter(),u=l(o),h&&(h.exit(),f=!0)),u===s.promise?v(z("Promise-chain cycle")):(a=$(u))?a.call(u,p,v):p(u)):v(o)}catch(t){h&&!f&&h.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&Z(t,n)}))}},X=function(t,n,e){var r,o;J?((r=U.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},(o=f["on"+t])?o(r):"unhandledrejection"===t&&P("Unhandled promise rejection",e)},Z=function(t,n){j.call(f,(function(){var e,r=n.value;if(tt(n)&&(e=k((function(){W?V.emit("unhandledRejection",r,t):X("unhandledrejection",t,r)})),n.rejection=W||tt(n)?2:1,e.error))throw e.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,n){j.call(f,(function(){W?V.emit("rejectionHandled",t):X("rejectionhandled",t,n.value)}))},et=function(t,n,e,r){return function(o){t(n,e,o,r)}},rt=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,Q(t,n,!0))},ot=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw z("Promise can't be resolved itself");var o=$(e);o?_((function(){var r={done:!1};try{o.call(e,et(ot,t,r,n),et(rt,t,r,n))}catch(e){rt(t,r,e,n)}})):(n.value=e,n.state=1,Q(t,n,!1))}catch(e){rt(t,{done:!1},e,n)}}};Y&&(G=function(t){m(this,G,N),g(t),r.call(this);var n=F(this);try{t(et(ot,this,n),et(rt,this,n))}catch(t){rt(this,n,t)}},(r=function(t){R(this,{type:N,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(G.prototype,{then:function(t,n){var e=D(this),r=H(O(this,G));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=W?V.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&Q(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=F(t);this.promise=t,this.resolve=et(ot,t,n),this.reject=et(rt,t,n)},T.f=H=function(t){return t===G||t===i?new o(t):B(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,n){var e=this;return new G((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof q&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(G,q.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:Y},{Promise:G}),h(G,N,!1,!0),y(N),i=s(N),u({target:N,stat:!0,forced:Y},{reject:function(t){var n=H(this);return n.reject.call(void 0,t),n.promise}}),u({target:N,stat:!0,forced:a||Y},{resolve:function(t){return E(a&&this===i?G:this,t)}}),u({target:N,stat:!0,forced:K},{all:function(t){var n=this,e=H(n),r=e.resolve,o=e.reject,i=k((function(){var e=g(n.resolve),i=[],c=0,u=1;S(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,e.call(n,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=H(n),r=e.reject,o=k((function(){var o=g(n.resolve);S(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(1),o=e(19),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(71),o=e(19),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(6);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(32),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(13),o=e(35),i=e(56),c=e(6);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(11),o=e(18),i=e(95),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(36),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(7),o=e(4),i=e(6),c=e(59);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(11),o=e(35).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,n,e){var r=e(1),o=e(40),i=e(4),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,n,e){"use strict";var r=e(68).IteratorPrototype,o=e(40),i=e(15),c=e(25),u=e(19),a=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,f,!1,!0),u[f]=a,t}},function(t,n,e){var r=e(6),o=e(101);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";var r=e(43),o=e(71);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){var r=e(36),o=e(27),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){"use strict";var r=e(9),o=e(75);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){var r=e(0),o=e(74),i=e(75),c=e(8);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,e){var r=e(2),o=e(1),i=e(44),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(10);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(13),o=e(4),i=e(1),c=e(7),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(6),o=e(87),i=e(18),c=e(28),u=e(88),a=e(89),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,l){var p,v,h,y,d,g,m,b=c(n,e,s?2:1);if(l)p=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(h=0,y=i(t.length);y>h;h++)if((d=s?b(r(m=t[h])[0],m[1]):b(t[h]))&&d instanceof f)return d;return new f(!1)}p=v.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(d=a(p,b,m.value,s))&&d&&d instanceof f)return d;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,e){var r=e(6),o=e(20),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r,o,i,c,u,a,f,s,l=e(0),p=e(22).f,v=e(12),h=e(77).set,y=e(78),d=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,b="process"==v(g),x=p(l,"queueMicrotask"),S=x&&x.value;S||(r=function(){var t,n;for(b&&(t=g.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},b?c=function(){g.nextTick(r)}:d&&!y?(u=!0,a=document.createTextNode(""),new d(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(f=m.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=function(){h.call(l,r)}),t.exports=S||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(6),o=e(5),i=e(79);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(129);var r=e(80),o=e(81),i=e(45),c=e(46),u=new o.a({baseUrl:i.a,headers:{credentials:"include","Content-Type":"application/json"}}),a=new r.a(".header",[{event:"click",callback:function(t){(t.target.classList.contains("header__login")||t.target.parentNode.classList.contains("header__login"))&&(localStorage.removeItem("jwt"),window.location.href="../")}},{event:"click",callback:function(t){t.target.classList.contains("header__menu")&&(t.target.classList.toggle("header__menu_dropdown"),t.target.firstChild.classList.toggle("header__background_dropdown"))}}]);localStorage.getItem("jwt")?Object(c.a)(a,u):window.location.href="../"},function(t,n,e){}]);