(()=>{var u=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Fe=u((el,Ie)=>{"use strict";var Co="Function.prototype.bind called on incompatible ",Uo=Object.prototype.toString,Go=Math.max,Lo="[object Function]",Ee=function(r,t){for(var n=[],o=0;o<r.length;o+=1)n[o]=r[o];for(var i=0;i<t.length;i+=1)n[i+r.length]=t[i];return n},ko=function(r,t){for(var n=[],o=t||0,i=0;o<r.length;o+=1,i+=1)n[i]=r[o];return n},zo=function(e,r){for(var t="",n=0;n<e.length;n+=1)t+=e[n],n+1<e.length&&(t+=r);return t};Ie.exports=function(r){var t=this;if(typeof t!="function"||Uo.apply(t)!==Lo)throw new TypeError(Co+t);for(var n=ko(arguments,1),o,i=function(){if(this instanceof o){var y=t.apply(this,Ee(n,arguments));return Object(y)===y?y:this}return t.apply(r,Ee(n,arguments))},l=Go(0,t.length-n.length),f=[],a=0;a<l;a++)f[a]="$"+a;if(o=Function("binder","return function ("+zo(f,",")+"){ return binder.apply(this,arguments); }")(i),t.prototype){var v=function(){};v.prototype=t.prototype,o.prototype=new v,v.prototype=null}return o}});var tr=u((tl,Te)=>{"use strict";var Ho=Fe();Te.exports=Function.prototype.bind||Ho});var _e=u((nl,Re)=>{"use strict";Re.exports=Error});var Be=u((ol,Ne)=>{"use strict";Ne.exports=EvalError});var Me=u((il,De)=>{"use strict";De.exports=RangeError});var Ce=u((al,We)=>{"use strict";We.exports=ReferenceError});var Ir=u((ul,Ue)=>{"use strict";Ue.exports=SyntaxError});var h=u((ll,Ge)=>{"use strict";Ge.exports=TypeError});var ke=u((fl,Le)=>{"use strict";Le.exports=URIError});var Fr=u((sl,ze)=>{"use strict";ze.exports=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var r={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var o=42;r[t]=o;for(t in r)return!1;if(typeof Object.keys=="function"&&Object.keys(r).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(r).length!==0)return!1;var i=Object.getOwnPropertySymbols(r);if(i.length!==1||i[0]!==t||!Object.prototype.propertyIsEnumerable.call(r,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var l=Object.getOwnPropertyDescriptor(r,t);if(l.value!==o||l.enumerable!==!0)return!1}return!0}});var Tr=u((pl,Ke)=>{"use strict";var He=typeof Symbol!="undefined"&&Symbol,Ko=Fr();Ke.exports=function(){return typeof He!="function"||typeof Symbol!="function"||typeof He("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Ko()}});var Ye=u((cl,Je)=>{"use strict";var Rr={__proto__:null,foo:{}},Jo=Object;Je.exports=function(){return{__proto__:Rr}.foo===Rr.foo&&!(Rr instanceof Jo)}});var Xe=u((yl,je)=>{"use strict";var Yo=Function.prototype.call,jo=Object.prototype.hasOwnProperty,Xo=tr();je.exports=Xo.call(Yo,jo)});var O=u((vl,et)=>{"use strict";var p,Qo=_e(),Vo=Be(),Zo=Me(),ri=Ce(),C=Ir(),W=h(),ei=ke(),rt=Function,_r=function(e){try{return rt('"use strict"; return ('+e+").constructor;")()}catch(r){}},_=Object.getOwnPropertyDescriptor;if(_)try{_({},"")}catch(e){_=null}var Nr=function(){throw new W},ti=_?function(){try{return arguments.callee,Nr}catch(e){try{return _(arguments,"callee").get}catch(r){return Nr}}}():Nr,D=Tr()(),ni=Ye()(),d=Object.getPrototypeOf||(ni?function(e){return e.__proto__}:null),M={},oi=typeof Uint8Array=="undefined"||!d?p:d(Uint8Array),N={__proto__:null,"%AggregateError%":typeof AggregateError=="undefined"?p:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?p:ArrayBuffer,"%ArrayIteratorPrototype%":D&&d?d([][Symbol.iterator]()):p,"%AsyncFromSyncIteratorPrototype%":p,"%AsyncFunction%":M,"%AsyncGenerator%":M,"%AsyncGeneratorFunction%":M,"%AsyncIteratorPrototype%":M,"%Atomics%":typeof Atomics=="undefined"?p:Atomics,"%BigInt%":typeof BigInt=="undefined"?p:BigInt,"%BigInt64Array%":typeof BigInt64Array=="undefined"?p:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array=="undefined"?p:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?p:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Qo,"%eval%":eval,"%EvalError%":Vo,"%Float32Array%":typeof Float32Array=="undefined"?p:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?p:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?p:FinalizationRegistry,"%Function%":rt,"%GeneratorFunction%":M,"%Int8Array%":typeof Int8Array=="undefined"?p:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?p:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?p:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":D&&d?d(d([][Symbol.iterator]())):p,"%JSON%":typeof JSON=="object"?JSON:p,"%Map%":typeof Map=="undefined"?p:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!D||!d?p:d(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?p:Promise,"%Proxy%":typeof Proxy=="undefined"?p:Proxy,"%RangeError%":Zo,"%ReferenceError%":ri,"%Reflect%":typeof Reflect=="undefined"?p:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?p:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!D||!d?p:d(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?p:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":D&&d?d(""[Symbol.iterator]()):p,"%Symbol%":D?Symbol:p,"%SyntaxError%":C,"%ThrowTypeError%":ti,"%TypedArray%":oi,"%TypeError%":W,"%Uint8Array%":typeof Uint8Array=="undefined"?p:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?p:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?p:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?p:Uint32Array,"%URIError%":ei,"%WeakMap%":typeof WeakMap=="undefined"?p:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?p:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?p:WeakSet};if(d)try{null.error}catch(e){Qe=d(d(e)),N["%Error.prototype%"]=Qe}var Qe,ii=function e(r){var t;if(r==="%AsyncFunction%")t=_r("async function () {}");else if(r==="%GeneratorFunction%")t=_r("function* () {}");else if(r==="%AsyncGeneratorFunction%")t=_r("async function* () {}");else if(r==="%AsyncGenerator%"){var n=e("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(r==="%AsyncIteratorPrototype%"){var o=e("%AsyncGenerator%");o&&d&&(t=d(o.prototype))}return N[r]=t,t},Ve={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},H=tr(),nr=Xe(),ai=H.call(Function.call,Array.prototype.concat),ui=H.call(Function.apply,Array.prototype.splice),Ze=H.call(Function.call,String.prototype.replace),or=H.call(Function.call,String.prototype.slice),li=H.call(Function.call,RegExp.prototype.exec),fi=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,si=/\\(\\)?/g,pi=function(r){var t=or(r,0,1),n=or(r,-1);if(t==="%"&&n!=="%")throw new C("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new C("invalid intrinsic syntax, expected opening `%`");var o=[];return Ze(r,fi,function(i,l,f,a){o[o.length]=f?Ze(a,si,"$1"):l||i}),o},ci=function(r,t){var n=r,o;if(nr(Ve,n)&&(o=Ve[n],n="%"+o[0]+"%"),nr(N,n)){var i=N[n];if(i===M&&(i=ii(n)),typeof i=="undefined"&&!t)throw new W("intrinsic "+r+" exists, but is not available. Please file an issue!");return{alias:o,name:n,value:i}}throw new C("intrinsic "+r+" does not exist!")};et.exports=function(r,t){if(typeof r!="string"||r.length===0)throw new W("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new W('"allowMissing" argument must be a boolean');if(li(/^%?[^%]*%?$/,r)===null)throw new C("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=pi(r),o=n.length>0?n[0]:"",i=ci("%"+o+"%",t),l=i.name,f=i.value,a=!1,v=i.alias;v&&(o=v[0],ui(n,ai([0,1],v)));for(var y=1,c=!0;y<n.length;y+=1){var s=n[y],m=or(s,0,1),A=or(s,-1);if((m==='"'||m==="'"||m==="`"||A==='"'||A==="'"||A==="`")&&m!==A)throw new C("property names with quotes must have matching quotes");if((s==="constructor"||!c)&&(a=!0),o+="."+s,l="%"+o+"%",nr(N,l))f=N[l];else if(f!=null){if(!(s in f)){if(!t)throw new W("base intrinsic for "+r+" exists, but the property is not available.");return}if(_&&y+1>=n.length){var g=_(f,s);c=!!g,c&&"get"in g&&!("originalValue"in g.get)?f=g.get:f=f[s]}else c=nr(f,s),f=f[s];c&&!a&&(N[l]=f)}}return f}});var ar=u((gl,tt)=>{"use strict";var yi=O(),ir=yi("%Object.defineProperty%",!0)||!1;if(ir)try{ir({},"a",{value:1})}catch(e){ir=!1}tt.exports=ir});var Br=u((dl,nt)=>{"use strict";var vi=O(),ur=vi("%Object.getOwnPropertyDescriptor%",!0);if(ur)try{ur([],"length")}catch(e){ur=null}nt.exports=ur});var Dr=u((hl,at)=>{"use strict";var ot=ar(),gi=Ir(),U=h(),it=Br();at.exports=function(r,t,n){if(!r||typeof r!="object"&&typeof r!="function")throw new U("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new U("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new U("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new U("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new U("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new U("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,i=arguments.length>4?arguments[4]:null,l=arguments.length>5?arguments[5]:null,f=arguments.length>6?arguments[6]:!1,a=!!it&&it(r,t);if(ot)ot(r,t,{configurable:l===null&&a?a.configurable:!l,enumerable:o===null&&a?a.enumerable:!o,value:n,writable:i===null&&a?a.writable:!i});else if(f||!o&&!i&&!l)r[t]=n;else throw new gi("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")}});var Wr=u((Sl,lt)=>{"use strict";var Mr=ar(),ut=function(){return!!Mr};ut.hasArrayLengthDefineBug=function(){if(!Mr)return null;try{return Mr([],"length",{value:1}).length!==1}catch(r){return!0}};lt.exports=ut});var yt=u((ml,ct)=>{"use strict";var di=O(),ft=Dr(),hi=Wr()(),st=Br(),pt=h(),Si=di("%Math.floor%");ct.exports=function(r,t){if(typeof r!="function")throw new pt("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||Si(t)!==t)throw new pt("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],o=!0,i=!0;if("length"in r&&st){var l=st(r,"length");l&&!l.configurable&&(o=!1),l&&!l.writable&&(i=!1)}return(o||i||!n)&&(hi?ft(r,"length",t,!0,!0):ft(r,"length",t)),r}});var sr=u((bl,lr)=>{"use strict";var Cr=tr(),fr=O(),mi=yt(),bi=h(),dt=fr("%Function.prototype.apply%"),ht=fr("%Function.prototype.call%"),St=fr("%Reflect.apply%",!0)||Cr.call(ht,dt),vt=ar(),Ai=fr("%Math.max%");lr.exports=function(r){if(typeof r!="function")throw new bi("a function is required");var t=St(Cr,ht,arguments);return mi(t,1+Ai(0,r.length-(arguments.length-1)),!0)};var gt=function(){return St(Cr,dt,arguments)};vt?vt(lr.exports,"apply",{value:gt}):lr.exports.apply=gt});var Ur=u((Al,bt)=>{"use strict";var mt=Object.prototype.toString;bt.exports=function(r){var t=mt.call(r),n=t==="[object Arguments]";return n||(n=t!=="[object Array]"&&r!==null&&typeof r=="object"&&typeof r.length=="number"&&r.length>=0&&mt.call(r.callee)==="[object Function]"),n}});var It=u((wl,Et)=>{"use strict";var Pt;Object.keys||(K=Object.prototype.hasOwnProperty,Gr=Object.prototype.toString,At=Ur(),Lr=Object.prototype.propertyIsEnumerable,wt=!Lr.call({toString:null},"toString"),Ot=Lr.call(function(){},"prototype"),J=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],pr=function(e){var r=e.constructor;return r&&r.prototype===e},$t={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},qt=function(){if(typeof window=="undefined")return!1;for(var e in window)try{if(!$t["$"+e]&&K.call(window,e)&&window[e]!==null&&typeof window[e]=="object")try{pr(window[e])}catch(r){return!0}}catch(r){return!0}return!1}(),xt=function(e){if(typeof window=="undefined"||!qt)return pr(e);try{return pr(e)}catch(r){return!1}},Pt=function(r){var t=r!==null&&typeof r=="object",n=Gr.call(r)==="[object Function]",o=At(r),i=t&&Gr.call(r)==="[object String]",l=[];if(!t&&!n&&!o)throw new TypeError("Object.keys called on a non-object");var f=Ot&&n;if(i&&r.length>0&&!K.call(r,0))for(var a=0;a<r.length;++a)l.push(String(a));if(o&&r.length>0)for(var v=0;v<r.length;++v)l.push(String(v));else for(var y in r)!(f&&y==="prototype")&&K.call(r,y)&&l.push(String(y));if(wt)for(var c=xt(r),s=0;s<J.length;++s)!(c&&J[s]==="constructor")&&K.call(r,J[s])&&l.push(J[s]);return l});var K,Gr,At,Lr,wt,Ot,J,pr,$t,qt,xt;Et.exports=Pt});var _t=u((Ol,Rt)=>{"use strict";var wi=Array.prototype.slice,Oi=Ur(),Ft=Object.keys,cr=Ft?function(r){return Ft(r)}:It(),Tt=Object.keys;cr.shim=function(){if(Object.keys){var r=function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2);r||(Object.keys=function(n){return Oi(n)?Tt(wi.call(n)):Tt(n)})}else Object.keys=cr;return Object.keys||cr};Rt.exports=cr});var Y=u(($l,Mt)=>{"use strict";var $i=_t(),qi=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",xi=Object.prototype.toString,Pi=Array.prototype.concat,Nt=Dr(),Ei=function(e){return typeof e=="function"&&xi.call(e)==="[object Function]"},Bt=Wr()(),Ii=function(e,r,t,n){if(r in e){if(n===!0){if(e[r]===t)return}else if(!Ei(n)||!n())return}Bt?Nt(e,r,t,!0):Nt(e,r,t)},Dt=function(e,r){var t=arguments.length>2?arguments[2]:{},n=$i(r);qi&&(n=Pi.call(n,Object.getOwnPropertySymbols(r)));for(var o=0;o<n.length;o+=1)Ii(e,n[o],r[n[o]],t[n[o]])};Dt.supportsDescriptors=!!Bt;Mt.exports=Dt});var $=u((ql,Ut)=>{"use strict";var Wt=O(),Ct=sr(),Fi=Ct(Wt("String.prototype.indexOf"));Ut.exports=function(r,t){var n=Wt(r,!!t);return typeof n=="function"&&Fi(r,".prototype.")>-1?Ct(n):n}});var kt=u((xl,Lt)=>{"use strict";var Ti=O(),Gt=Ti("%Array%"),Ri=!Gt.isArray&&$()("Object.prototype.toString");Lt.exports=Gt.isArray||function(r){return Ri(r)==="[object Array]"}});var kr=u((Pl,zt)=>{"use strict";zt.exports=kt()});var Kt=u((El,Ht)=>{"use strict";var _i=O(),Ni=$(),Bi=h(),Di=kr(),Mi=_i("%Reflect.apply%",!0)||Ni("Function.prototype.apply");Ht.exports=function(r,t){var n=arguments.length>2?arguments[2]:[];if(!Di(n))throw new Bi("Assertion failed: optional `argumentsList`, if provided, must be a List");return Mi(r,t,n)}});var Jt=u(()=>{});var V=u((Tl,yn)=>{var Zr=typeof Map=="function"&&Map.prototype,zr=Object.getOwnPropertyDescriptor&&Zr?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,vr=Zr&&zr&&typeof zr.get=="function"?zr.get:null,Yt=Zr&&Map.prototype.forEach,re=typeof Set=="function"&&Set.prototype,Hr=Object.getOwnPropertyDescriptor&&re?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,gr=re&&Hr&&typeof Hr.get=="function"?Hr.get:null,jt=re&&Set.prototype.forEach,Wi=typeof WeakMap=="function"&&WeakMap.prototype,X=Wi?WeakMap.prototype.has:null,Ci=typeof WeakSet=="function"&&WeakSet.prototype,Q=Ci?WeakSet.prototype.has:null,Ui=typeof WeakRef=="function"&&WeakRef.prototype,Xt=Ui?WeakRef.prototype.deref:null,Gi=Boolean.prototype.valueOf,Li=Object.prototype.toString,ki=Function.prototype.toString,zi=String.prototype.match,ee=String.prototype.slice,F=String.prototype.replace,Hi=String.prototype.toUpperCase,Qt=String.prototype.toLowerCase,un=RegExp.prototype.test,Vt=Array.prototype.concat,q=Array.prototype.join,Ki=Array.prototype.slice,Zt=Math.floor,Yr=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Kr=Object.getOwnPropertySymbols,jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,G=typeof Symbol=="function"&&typeof Symbol.iterator=="object",S=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===G||!0)?Symbol.toStringTag:null,ln=Object.prototype.propertyIsEnumerable,rn=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function en(e,r){if(e===1/0||e===-1/0||e!==e||e&&e>-1e3&&e<1e3||un.call(/e/,r))return r;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e=="number"){var n=e<0?-Zt(-e):Zt(e);if(n!==e){var o=String(n),i=ee.call(r,o.length+1);return F.call(o,t,"$&_")+"."+F.call(F.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return F.call(r,t,"$&_")}var Xr=Jt(),tn=Xr.custom,nn=sn(tn)?tn:null;yn.exports=function e(r,t,n,o){var i=t||{};if(I(i,"quoteStyle")&&i.quoteStyle!=="single"&&i.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(I(i,"maxStringLength")&&(typeof i.maxStringLength=="number"?i.maxStringLength<0&&i.maxStringLength!==1/0:i.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var l=I(i,"customInspect")?i.customInspect:!0;if(typeof l!="boolean"&&l!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(I(i,"indent")&&i.indent!==null&&i.indent!=="	"&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(I(i,"numericSeparator")&&typeof i.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var f=i.numericSeparator;if(typeof r=="undefined")return"undefined";if(r===null)return"null";if(typeof r=="boolean")return r?"true":"false";if(typeof r=="string")return cn(r,i);if(typeof r=="number"){if(r===0)return 1/0/r>0?"0":"-0";var a=String(r);return f?en(r,a):a}if(typeof r=="bigint"){var v=String(r)+"n";return f?en(r,v):v}var y=typeof i.depth=="undefined"?5:i.depth;if(typeof n=="undefined"&&(n=0),n>=y&&y>0&&typeof r=="object")return Qr(r)?"[Array]":"[Object]";var c=sa(i,n);if(typeof o=="undefined")o=[];else if(pn(o,r)>=0)return"[Circular]";function s(B,er,Wo){if(er&&(o=Ki.call(o),o.push(er)),Wo){var Pe={depth:i.depth};return I(i,"quoteStyle")&&(Pe.quoteStyle=i.quoteStyle),e(B,Pe,n+1,o)}return e(B,i,n+1,o)}if(typeof r=="function"&&!on(r)){var m=ea(r),A=yr(r,s);return"[Function"+(m?": "+m:" (anonymous)")+"]"+(A.length>0?" { "+q.call(A,", ")+" }":"")}if(sn(r)){var g=G?F.call(String(r),/^(Symbol\(.*\))_[^)]*$/,"$1"):jr.call(r);return typeof r=="object"&&!G?j(g):g}if(ua(r)){for(var b="<"+Qt.call(String(r.nodeName)),w=r.attributes||[],x=0;x<w.length;x++)b+=" "+w[x].name+"="+fn(Ji(w[x].value),"double",i);return b+=">",r.childNodes&&r.childNodes.length&&(b+="..."),b+="</"+Qt.call(String(r.nodeName))+">",b}if(Qr(r)){if(r.length===0)return"[]";var R=yr(r,s);return c&&!fa(R)?"["+Vr(R,c)+"]":"[ "+q.call(R,", ")+" ]"}if(ji(r)){var z=yr(r,s);return!("cause"in Error.prototype)&&"cause"in r&&!ln.call(r,"cause")?"{ ["+String(r)+"] "+q.call(Vt.call("[cause]: "+s(r.cause),z),", ")+" }":z.length===0?"["+String(r)+"]":"{ ["+String(r)+"] "+q.call(z,", ")+" }"}if(typeof r=="object"&&l){if(nn&&typeof r[nn]=="function"&&Xr)return Xr(r,{depth:y-n});if(l!=="symbol"&&typeof r.inspect=="function")return r.inspect()}if(ta(r)){var rr=[];return Yt&&Yt.call(r,function(B,er){rr.push(s(er,r,!0)+" => "+s(B,r))}),an("Map",vr.call(r),rr,c)}if(ia(r)){var $e=[];return jt&&jt.call(r,function(B){$e.push(s(B,r))}),an("Set",gr.call(r),$e,c)}if(na(r))return Jr("WeakMap");if(aa(r))return Jr("WeakSet");if(oa(r))return Jr("WeakRef");if(Qi(r))return j(s(Number(r)));if(Zi(r))return j(s(Yr.call(r)));if(Vi(r))return j(Gi.call(r));if(Xi(r))return j(s(String(r)));if(typeof window!="undefined"&&r===window)return"{ [object Window] }";if(typeof globalThis!="undefined"&&r===globalThis||typeof global!="undefined"&&r===global)return"{ [object globalThis] }";if(!Yi(r)&&!on(r)){var xr=yr(r,s),qe=rn?rn(r)===Object.prototype:r instanceof Object||r.constructor===Object,Pr=r instanceof Object?"":"null prototype",xe=!qe&&S&&Object(r)===r&&S in r?ee.call(T(r),8,-1):Pr?"Object":"",Mo=qe||typeof r.constructor!="function"?"":r.constructor.name?r.constructor.name+" ":"",Er=Mo+(xe||Pr?"["+q.call(Vt.call([],xe||[],Pr||[]),": ")+"] ":"");return xr.length===0?Er+"{}":c?Er+"{"+Vr(xr,c)+"}":Er+"{ "+q.call(xr,", ")+" }"}return String(r)};function fn(e,r,t){var n=(t.quoteStyle||r)==="double"?'"':"'";return n+e+n}function Ji(e){return F.call(String(e),/"/g,"&quot;")}function Qr(e){return T(e)==="[object Array]"&&(!S||!(typeof e=="object"&&S in e))}function Yi(e){return T(e)==="[object Date]"&&(!S||!(typeof e=="object"&&S in e))}function on(e){return T(e)==="[object RegExp]"&&(!S||!(typeof e=="object"&&S in e))}function ji(e){return T(e)==="[object Error]"&&(!S||!(typeof e=="object"&&S in e))}function Xi(e){return T(e)==="[object String]"&&(!S||!(typeof e=="object"&&S in e))}function Qi(e){return T(e)==="[object Number]"&&(!S||!(typeof e=="object"&&S in e))}function Vi(e){return T(e)==="[object Boolean]"&&(!S||!(typeof e=="object"&&S in e))}function sn(e){if(G)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!jr)return!1;try{return jr.call(e),!0}catch(r){}return!1}function Zi(e){if(!e||typeof e!="object"||!Yr)return!1;try{return Yr.call(e),!0}catch(r){}return!1}var ra=Object.prototype.hasOwnProperty||function(e){return e in this};function I(e,r){return ra.call(e,r)}function T(e){return Li.call(e)}function ea(e){if(e.name)return e.name;var r=zi.call(ki.call(e),/^function\s*([\w$]+)/);return r?r[1]:null}function pn(e,r){if(e.indexOf)return e.indexOf(r);for(var t=0,n=e.length;t<n;t++)if(e[t]===r)return t;return-1}function ta(e){if(!vr||!e||typeof e!="object")return!1;try{vr.call(e);try{gr.call(e)}catch(r){return!0}return e instanceof Map}catch(r){}return!1}function na(e){if(!X||!e||typeof e!="object")return!1;try{X.call(e,X);try{Q.call(e,Q)}catch(r){return!0}return e instanceof WeakMap}catch(r){}return!1}function oa(e){if(!Xt||!e||typeof e!="object")return!1;try{return Xt.call(e),!0}catch(r){}return!1}function ia(e){if(!gr||!e||typeof e!="object")return!1;try{gr.call(e);try{vr.call(e)}catch(r){return!0}return e instanceof Set}catch(r){}return!1}function aa(e){if(!Q||!e||typeof e!="object")return!1;try{Q.call(e,Q);try{X.call(e,X)}catch(r){return!0}return e instanceof WeakSet}catch(r){}return!1}function ua(e){return!e||typeof e!="object"?!1:typeof HTMLElement!="undefined"&&e instanceof HTMLElement?!0:typeof e.nodeName=="string"&&typeof e.getAttribute=="function"}function cn(e,r){if(e.length>r.maxStringLength){var t=e.length-r.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return cn(ee.call(e,0,r.maxStringLength),r)+n}var o=F.call(F.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,la);return fn(o,"single",r)}function la(e){var r=e.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[r];return t?"\\"+t:"\\x"+(r<16?"0":"")+Hi.call(r.toString(16))}function j(e){return"Object("+e+")"}function Jr(e){return e+" { ? }"}function an(e,r,t,n){var o=n?Vr(t,n):q.call(t,", ");return e+" ("+r+") {"+o+"}"}function fa(e){for(var r=0;r<e.length;r++)if(pn(e[r],`
`)>=0)return!1;return!0}function sa(e,r){var t;if(e.indent==="	")t="	";else if(typeof e.indent=="number"&&e.indent>0)t=q.call(Array(e.indent+1)," ");else return null;return{base:t,prev:q.call(Array(r+1),t)}}function Vr(e,r){if(e.length===0)return"";var t=`
`+r.prev+r.base;return t+q.call(e,","+t)+`
`+r.prev}function yr(e,r){var t=Qr(e),n=[];if(t){n.length=e.length;for(var o=0;o<e.length;o++)n[o]=I(e,o)?r(e[o],e):""}var i=typeof Kr=="function"?Kr(e):[],l;if(G){l={};for(var f=0;f<i.length;f++)l["$"+i[f]]=i[f]}for(var a in e)I(e,a)&&(t&&String(Number(a))===a&&a<e.length||G&&l["$"+a]instanceof Symbol||(un.call(/[^\w$]/,a)?n.push(r(a,e)+": "+r(e[a],e)):n.push(a+": "+r(e[a],e))));if(typeof Kr=="function")for(var v=0;v<i.length;v++)ln.call(e,i[v])&&n.push("["+r(i[v])+"]: "+r(e[i[v]],e));return n}});var dr=u((Rl,vn)=>{"use strict";vn.exports=function(r){return typeof r=="string"||typeof r=="symbol"}});var dn=u((_l,gn)=>{"use strict";var pa=h(),ca=V(),ya=dr();gn.exports=function(r,t){if(!ya(t))throw new pa("Assertion failed: IsPropertyKey(P) is not true, got "+ca(t));return r[t]}});var bn=u((Nl,mn)=>{"use strict";var Sn=Function.prototype.toString,L=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,ne,hr;if(typeof L=="function"&&typeof Object.defineProperty=="function")try{ne=Object.defineProperty({},"length",{get:function(){throw hr}}),hr={},L(function(){throw 42},null,ne)}catch(e){e!==hr&&(L=null)}else L=null;var va=/^\s*class\b/,oe=function(r){try{var t=Sn.call(r);return va.test(t)}catch(n){return!1}},te=function(r){try{return oe(r)?!1:(Sn.call(r),!0)}catch(t){return!1}},Sr=Object.prototype.toString,ga="[object Object]",da="[object Function]",ha="[object GeneratorFunction]",Sa="[object HTMLAllCollection]",ma="[object HTML document.all class]",ba="[object HTMLCollection]",Aa=typeof Symbol=="function"&&!!Symbol.toStringTag,wa=!(0 in[,]),ie=function(){return!1};typeof document=="object"&&(hn=document.all,Sr.call(hn)===Sr.call(document.all)&&(ie=function(r){if((wa||!r)&&(typeof r=="undefined"||typeof r=="object"))try{var t=Sr.call(r);return(t===Sa||t===ma||t===ba||t===ga)&&r("")==null}catch(n){}return!1}));var hn;mn.exports=L?function(r){if(ie(r))return!0;if(!r||typeof r!="function"&&typeof r!="object")return!1;try{L(r,null,ne)}catch(t){if(t!==hr)return!1}return!oe(r)&&te(r)}:function(r){if(ie(r))return!0;if(!r||typeof r!="function"&&typeof r!="object")return!1;if(Aa)return te(r);if(oe(r))return!1;var t=Sr.call(r);return t!==da&&t!==ha&&!/^\[object HTML/.test(t)?!1:te(r)}});var ae=u((Bl,An)=>{"use strict";An.exports=bn()});var qn=u((Dl,$n)=>{"use strict";var wn=h(),Oa=dn(),$a=ae(),qa=dr(),On=V();$n.exports=function(r,t){if(!qa(t))throw new wn("Assertion failed: IsPropertyKey(P) is not true");var n=Oa(r,t);if(n!=null){if(!$a(n))throw new wn(On(t)+" is not a function: "+On(n));return n}}});var Pn=u((Ml,xn)=>{"use strict";var xa=Fr();xn.exports=function(){return xa()&&!!Symbol.toStringTag}});var se=u((Wl,Tn)=>{"use strict";var ue=$(),En=Pn()(),In,Fn,le,fe;En&&(In=ue("Object.prototype.hasOwnProperty"),Fn=ue("RegExp.prototype.exec"),le={},mr=function(){throw le},fe={toString:mr,valueOf:mr},typeof Symbol.toPrimitive=="symbol"&&(fe[Symbol.toPrimitive]=mr));var mr,Pa=ue("Object.prototype.toString"),Ea=Object.getOwnPropertyDescriptor,Ia="[object RegExp]";Tn.exports=En?function(r){if(!r||typeof r!="object")return!1;var t=Ea(r,"lastIndex"),n=t&&In(t,"value");if(!n)return!1;try{Fn(r,fe)}catch(o){return o===le}}:function(r){return!r||typeof r!="object"&&typeof r!="function"?!1:Pa(r)===Ia}});var pe=u((Cl,Rn)=>{"use strict";var Fa=$(),Ta=se(),Ra=Fa("RegExp.prototype.exec"),_a=h();Rn.exports=function(r){if(!Ta(r))throw new _a("`regex` must be a RegExp");return function(n){return Ra(r,n)!==null}}});var Nn=u((Ul,_n)=>{"use strict";_n.exports=function(r,t){for(var n=0;n<r.length;n+=1)if(!t(r[n],n,r))return!1;return!0}});var Dn=u((Gl,Bn)=>{"use strict";Bn.exports=function(r){if(r===null)return"Null";if(typeof r=="undefined")return"Undefined";if(typeof r=="function"||typeof r=="object")return"Object";if(typeof r=="number")return"Number";if(typeof r=="boolean")return"Boolean";if(typeof r=="string")return"String"}});var ce=u((Ll,Mn)=>{"use strict";var Na=Dn();Mn.exports=function(r){return typeof r=="symbol"?"Symbol":typeof r=="bigint"?"BigInt":Na(r)}});var Un=u((kl,Cn)=>{"use strict";var Wn=h(),Ba=V(),Da=dr(),Ma=ce();Cn.exports=function(r,t){if(Ma(r)!=="Object")throw new Wn("Assertion failed: Type(O) is not Object");if(!Da(t))throw new Wn("Assertion failed: IsPropertyKey(P) is not true, got "+Ba(t));return r[t]}});var Ln=u((zl,Gn)=>{"use strict";var Wa=O();Gn.exports=Wa("%Math.min%")});var ye=u((Hl,kn)=>{"use strict";kn.exports=Number.isNaN||function(r){return r!==r}});var Hn=u((Kl,zn)=>{"use strict";var Ca=ye();zn.exports=function(e){return(typeof e=="number"||typeof e=="bigint")&&!Ca(e)&&e!==1/0&&e!==-1/0}});var br=u((Jl,Jn)=>{"use strict";var Kn=O(),Ua=Kn("%Math.abs%"),Ga=Kn("%Math.floor%"),La=ye(),ka=Hn();Jn.exports=function(r){if(typeof r!="number"||La(r)||!ka(r))return!1;var t=Ua(r);return Ga(t)===t}});var ge=u((Yl,Yn)=>{"use strict";var za=$(),ve=h(),Ha=br(),Ka=za("String.prototype.slice");Yn.exports=function(r,t,n){if(typeof r!="string")throw new ve("Assertion failed: `string` must be a String");if(typeof t!="string")throw new ve("Assertion failed: `searchValue` must be a String");if(!Ha(n)||n<0)throw new ve("Assertion failed: `fromIndex` must be a non-negative integer");var o=r.length;if(t===""&&n<=o)return n;for(var i=t.length,l=n;l<=o-i;l+=1){var f=Ka(r,l,l+i);if(f===t)return l}return-1}});var Ar=u((jl,jn)=>{"use strict";var Ja=h();jn.exports=function(r){if(r==null)throw new Ja(arguments.length>0&&arguments[1]||"Cannot call method on "+r);return r}});var wr=u((Xl,Xn)=>{"use strict";var Ya=O(),ja=Ya("%String%"),Xa=h();Xn.exports=function(r){if(typeof r=="symbol")throw new Xa("Cannot convert a Symbol value to a string");return ja(r)}});var de=u((Ql,Zn)=>{"use strict";var Qa=Ar(),Va=wr(),Za=$(),Qn=Za("String.prototype.replace"),Vn=/^\s$/.test("\u180E"),ru=Vn?/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/:/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,eu=Vn?/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/:/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;Zn.exports=function(){var r=Va(Qa(this));return Qn(Qn(r,ru,""),eu,"")}});var he=u((Vl,eo)=>{"use strict";var tu=de(),ro="\u200B",k="\u180E";eo.exports=function(){return String.prototype.trim&&ro.trim()===ro&&k.trim()===k&&("_"+k).trim()==="_"+k&&(k+"_").trim()===k+"_"?String.prototype.trim:tu}});var no=u((Zl,to)=>{"use strict";var nu=Y(),ou=he();to.exports=function(){var r=ou();return nu(String.prototype,{trim:r},{trim:function(){return String.prototype.trim!==r}}),r}});var uo=u((rf,ao)=>{"use strict";var iu=sr(),au=Y(),uu=Ar(),lu=de(),oo=he(),fu=no(),su=iu(oo()),io=function(r){return uu(r),su(r)};au(io,{getPolyfill:oo,implementation:lu,shim:fu});ao.exports=io});var po=u((ef,so)=>{"use strict";var me=O(),Se=me("%Number%"),pu=me("%RegExp%"),cu=h(),lo=me("%parseInt%"),yu=$(),Or=pe(),fo=yu("String.prototype.slice"),vu=Or(/^0b[01]+$/i),gu=Or(/^0o[0-7]+$/i),du=Or(/^[-+]0x[0-9a-f]+$/i),hu=["\x85","\u200B","\uFFFE"].join(""),Su=new pu("["+hu+"]","g"),mu=Or(Su),bu=uo();so.exports=function e(r){if(typeof r!="string")throw new cu("Assertion failed: `argument` is not a String");if(vu(r))return Se(lo(fo(r,2),2));if(gu(r))return Se(lo(fo(r,2),8));if(mu(r)||du(r))return NaN;var t=bu(r);return t!==r?e(t):Se(r)}});var vo=u((tf,yo)=>{"use strict";var Au=h(),co=br(),wu=$(),Ou=wu("String.prototype.slice");yo.exports=function(r,t,n){if(typeof r!="string"||!co(t)||arguments.length>2&&!co(n))throw new Au("`S` must be a String, and `inclusiveStart` and `exclusiveEnd` must be integers");return Ou(r,t,arguments.length>2?n:r.length)}});var ho=u((nf,go)=>{"use strict";go.exports=function(r){return typeof r=="string"||typeof r=="undefined"}});var mo=u((of,So)=>{"use strict";var $u=$()("String.prototype.slice");So.exports=function(r,t){return r===t?!0:r.length>t.length?!1:$u(t,0,r.length)===r}});var $o=u((af,Oo)=>{"use strict";var P=h(),wo=pe(),qu=Nn(),be=V(),xu=Un(),Pu=kr(),Eu=Ln(),Iu=ge(),bo=po(),E=vo(),Fu=wr(),Ao=ce(),Tu=br(),Ru=ho(),Z=mo(),_u=wo(/^\$[0-9]/),Nu=wo(/^\$[0-9][0-9]/);Oo.exports=function(r,t,n,o,i,l){if(typeof r!="string")throw new P("Assertion failed: `matched` must be a String");if(typeof t!="string")throw new P("Assertion failed: `str` must be a String");if(!Tu(n)||n<0)throw new P("Assertion failed: `position` must be a nonnegative integer, got "+be(n));if(!Pu(o)||!qu(o,Ru))throw new P("Assertion failed: `captures` must be a possibly-empty List of Strings or `undefined`, got "+be(o));if(typeof i!="undefined"&&Ao(i)!=="Object")throw new P("Assertion failed: `namedCaptures` must be `undefined` or an Object");if(typeof l!="string")throw new P("Assertion failed: `replacementTemplate` must be a String");var f=t.length;if(n>f)throw new P("Assertion failed: position > stringLength, got "+be(n));for(var a=l,v="";a!=="";){var y,c,s;if(Z("$$",a))y="$$",c="$";else if(Z("$`",a))y="$`",c=E(t,0,n);else if(Z("$&",a))y="$&",c=r;else if(Z("$'",a)){y="$'";var m=r.length,A=n+m;c=E(t,Eu(A,f))}else if(_u(a)){var g=Nu(a)?2:1,b=E(a,1,1+g),w=bo(b);if(w<0||w>99)throw new P("Assertion failed: `index` must be >= 0 and <= 99");var x=o.length;w>x&&g===2&&(g=1,b=E(b,0,1),w=bo(b)),y=E(a,0,1+g),1<=w&&w<=x?(s=o[w-1],typeof s=="undefined"?c="":c=s):c=y}else if(Z("$<",a)){var R=Iu(a,">",0);if(R===-1||typeof i=="undefined")y="$<",c=y;else{y=E(a,0,R+1);var z=E(a,2,R);if(Ao(i)!=="Object")throw new P("Assertion failed: Type(namedCaptures) is not Object");s=xu(i,z),typeof s=="undefined"?c="":c=Fu(s)}}else y=E(a,0,1),c=y;var rr=y.length;a=E(a,rr),v+=c}return v}});var we=u((uf,Eo)=>{"use strict";var qo=Kt(),Bu=qn(),Du=$o(),Mu=ae(),Wu=Ar(),$r=wr(),xo=ge(),Cu=O(),qr=$(),Uu=Tr()(),Gu=se(),Lu=Cu("%Math.max%"),Po=h(),ku=qr("Array.prototype.push"),Ae=qr("String.prototype.slice"),zu=qr("String.prototype.indexOf"),Hu=qr("String.prototype.replace");Eo.exports=function(r,t){var n=Wu(this),o=Gu(r);if(o&&zu(Ae(r,r.source.length+2),"g")===-1)throw new Po("use .replace for a non-global regex. NOTE: this may be allowed in the future.");if(Uu&&Symbol.replace){if(r!=null){var i=Bu(r,Symbol.replace);if(typeof i!="undefined")return qo(i,r,[n,t])}}else if(o)return Hu(n,r,t);var l=$r(n),f=$r(r),a=Mu(t);a||(t=$r(t));for(var v=f.length,y=Lu(1,v),c=[],s=xo(l,f,0);s!==-1;)ku(c,s),s=xo(l,f,s+y);for(var m=0,A="",g=0;g<c.length;g+=1){var b;if(a)b=$r(qo(t,void 0,[f,c[g],l]));else{if(typeof t!="string")throw new Po("Assertion failed: `replaceValue` should be a string at this point");var w=[];b=Du(f,l,c[g],w,void 0,t)}var x=Ae(l,m,c[g]);A+=x+b,m=c[g]+v}return m<l.length&&(A+=Ae(l,m)),A}});var Oe=u((lf,Io)=>{"use strict";var Ku=we();Io.exports=function(){return String.prototype.replaceAll||Ku}});var To=u((ff,Fo)=>{"use strict";var Ju=Y(),Yu=Oe();Fo.exports=function(){var r=Yu();return Ju(String.prototype,{replaceAll:r},{replaceAll:function(){return String.prototype.replaceAll!==r}}),r}});var Bo=u((sf,No)=>{"use strict";var ju=sr(),Xu=Y(),Ro=we(),Qu=Oe(),Vu=To(),_o=ju(Ro);Xu(_o,{getPolyfill:Qu,implementation:Ro,shim:Vu});No.exports=_o});var Do=String.prototype.replaceAll?(e,r,t)=>String.prototype.replaceAll.call(e,r,t):Bo();function Zu(e){let r=document.createElement("div");r.innerHTML=e;let t=r.innerText||r.textContent;return r=null,t}(()=>{let e=/\$\$[\s\S]*\$\$/g,r=/\$[\s\S]*\$/g,t=(n,o)=>{n.beforeEach(i=>{let l=Do(i,e,a=>katex.renderToString(a.substr(2,a.length-4),{displayMode:!0}));return Do(l,r,a=>(a=Zu(a),katex.renderToString(a.substr(1,a.length-2),{displayMode:!1})))})};$docsify=$docsify||{},$docsify.plugins=[].concat(t,$docsify.plugins||[])})();})();
//# sourceMappingURL=docsify-katex-ex.minimal.js.map
