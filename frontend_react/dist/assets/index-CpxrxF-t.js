(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Yx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bm={exports:{}},Hl={},zm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),Kx=Symbol.for("react.portal"),Zx=Symbol.for("react.fragment"),Jx=Symbol.for("react.strict_mode"),Qx=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),nv=Symbol.for("react.forward_ref"),iv=Symbol.for("react.suspense"),rv=Symbol.for("react.memo"),sv=Symbol.for("react.lazy"),Th=Symbol.iterator;function av(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var Gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hm=Object.assign,Vm={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||Gm}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wm(){}Wm.prototype=Bs.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||Gm}var Zd=Kd.prototype=new Wm;Zd.constructor=Kd;Hm(Zd,Bs.prototype);Zd.isPureReactComponent=!0;var Ah=Array.isArray,jm=Object.prototype.hasOwnProperty,Jd={current:null},Xm={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)jm.call(e,i)&&!Xm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Xa,type:t,key:s,ref:a,props:r,_owner:Jd.current}}function ov(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function lv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ch=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lv(""+t.key):e.toString(36)}function jo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Xa:case Kx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+uc(a,0):i,Ah(r)?(n="",t!=null&&(n=t.replace(Ch,"$&/")+"/"),jo(r,e,n,"",function(c){return c})):r!=null&&(Qd(r)&&(r=ov(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ch,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ah(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+uc(s,o);a+=jo(s,e,n,l,r)}else if(l=av(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+uc(s,o++),a+=jo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function io(t,e,n){if(t==null)return t;var i=[],r=0;return jo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function cv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},Xo={transition:null},uv={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:Jd};function $m(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:io,forEach:function(t,e,n){io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return io(t,function(){e++}),e},toArray:function(t){return io(t,function(e){return e})||[]},only:function(t){if(!Qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Bs;Ye.Fragment=Zx;Ye.Profiler=Qx;Ye.PureComponent=Kd;Ye.StrictMode=Jx;Ye.Suspense=iv;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv;Ye.act=$m;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)jm.call(e,l)&&!Xm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Xa,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ev,_context:t},t.Consumer=t};Ye.createElement=qm;Ye.createFactory=function(t){var e=qm.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:nv,render:t}};Ye.isValidElement=Qd;Ye.lazy=function(t){return{$$typeof:sv,_payload:{_status:-1,_result:t},_init:cv}};Ye.memo=function(t,e){return{$$typeof:rv,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Xo.transition;Xo.transition={};try{t()}finally{Xo.transition=e}};Ye.unstable_act=$m;Ye.useCallback=function(t,e){return dn.current.useCallback(t,e)};Ye.useContext=function(t){return dn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return dn.current.useEffect(t,e)};Ye.useId=function(){return dn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return dn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Ye.useRef=function(t){return dn.current.useRef(t)};Ye.useState=function(t){return dn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return dn.current.useTransition()};Ye.version="18.3.1";zm.exports=Ye;var ze=zm.exports;const dv=Yx(ze);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv=ze,hv=Symbol.for("react.element"),pv=Symbol.for("react.fragment"),mv=Object.prototype.hasOwnProperty,gv=fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xv={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)mv.call(e,i)&&!xv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hv,type:t,key:s,ref:a,props:r,_owner:gv.current}}Hl.Fragment=pv;Hl.jsx=Ym;Hl.jsxs=Ym;Bm.exports=Hl;var u=Bm.exports,fu={},Km={exports:{}},Cn={},Zm={exports:{}},Jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,k){var H=z.length;z.push(k);e:for(;0<H;){var ee=H-1>>>1,ce=z[ee];if(0<r(ce,k))z[ee]=k,z[H]=ce,H=ee;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var k=z[0],H=z.pop();if(H!==k){z[0]=H;e:for(var ee=0,ce=z.length,Re=ce>>>1;ee<Re;){var J=2*(ee+1)-1,xe=z[J],Me=J+1,Ne=z[Me];if(0>r(xe,H))Me<ce&&0>r(Ne,xe)?(z[ee]=Ne,z[Me]=H,ee=Me):(z[ee]=xe,z[J]=H,ee=J);else if(Me<ce&&0>r(Ne,H))z[ee]=Ne,z[Me]=H,ee=Me;else break e}}return k}function r(z,k){var H=z.sortIndex-k.sortIndex;return H!==0?H:z.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],p=1,m=null,h=3,_=!1,M=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=z)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function E(z){if(b=!1,y(z),!M)if(n(l)!==null)M=!0,Q(R);else{var k=n(c);k!==null&&j(E,k.startTime-z)}}function R(z,k){M=!1,b&&(b=!1,d(w),w=-1),_=!0;var H=h;try{for(y(k),m=n(l);m!==null&&(!(m.expirationTime>k)||z&&!L());){var ee=m.callback;if(typeof ee=="function"){m.callback=null,h=m.priorityLevel;var ce=ee(m.expirationTime<=k);k=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(l)&&i(l),y(k)}else i(l);m=n(l)}if(m!==null)var Re=!0;else{var J=n(c);J!==null&&j(E,J.startTime-k),Re=!1}return Re}finally{m=null,h=H,_=!1}}var T=!1,g=null,w=-1,U=5,N=-1;function L(){return!(t.unstable_now()-N<U)}function G(){if(g!==null){var z=t.unstable_now();N=z;var k=!0;try{k=g(!0,z)}finally{k?$():(T=!1,g=null)}}else T=!1}var $;if(typeof f=="function")$=function(){f(G)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Y=I.port2;I.port1.onmessage=G,$=function(){Y.postMessage(null)}}else $=function(){S(G,0)};function Q(z){g=z,T||(T=!0,$())}function j(z,k){w=S(function(){z(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){M||_||(M=!0,Q(R))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var H=h;h=k;try{return z()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,k){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=h;h=z;try{return k()}finally{h=H}},t.unstable_scheduleCallback=function(z,k,H){var ee=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ee+H:ee):H=ee,z){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=H+ce,z={id:p++,callback:k,priorityLevel:z,startTime:H,expirationTime:ce,sortIndex:-1},H>ee?(z.sortIndex=H,e(c,z),n(l)===null&&z===n(c)&&(b?(d(w),w=-1):b=!0,j(E,H-ee))):(z.sortIndex=ce,e(l,z),M||_||(M=!0,Q(R))),z},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(z){var k=h;return function(){var H=h;h=k;try{return z.apply(this,arguments)}finally{h=H}}}})(Jm);Zm.exports=Jm;var vv=Zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=ze,An=vv;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qm=new Set,ya={};function zr(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(ya[t]=e,t=0;t<e.length;t++)Qm.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=Object.prototype.hasOwnProperty,Sv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},Nh={};function yv(t){return hu.call(Nh,t)?!0:hu.call(Rh,t)?!1:Sv.test(t)?Nh[t]=!0:(Rh[t]=!0,!1)}function Mv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ev(t,e,n,i){if(e===null||typeof e>"u"||Mv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ef=/[\-:]([a-z])/g;function tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ef,tf);Yt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ef,tf);Yt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ef,tf);Yt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function nf(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ev(e,n,r,i)&&(n=null),i||r===null?yv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),ss=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),pu=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),gu=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),Ph=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=Ph&&t[Ph]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,dc;function ra(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function hc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function bv(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case ss:return"Portal";case pu:return"Profiler";case rf:return"StrictMode";case mu:return"Suspense";case gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tg:return(t.displayName||"Context")+".Consumer";case eg:return(t._context.displayName||"Context")+".Provider";case sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:xu(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return xu(t(e))}catch{}}return null}function wv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xu(e);case 8:return e===rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tv(t){var e=ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function so(t){t._valueTracker||(t._valueTracker=Tv(t))}function rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vu(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sg(t,e){e=e.checked,e!=null&&nf(t,"checked",e,!1)}function _u(t,e){sg(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Su(t,e.type,n):e.hasOwnProperty("defaultValue")&&Su(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Su(t,e,n){(e!=="number"||ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ih(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(sa(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function ag(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Uh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function og(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?og(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ao,lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ao.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Av=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){Av.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Cv=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(t,e){if(e){if(Cv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wu=null;function of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tu=null,_s=null,Ss=null;function Fh(t){if(t=Ya(t)){if(typeof Tu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=ql(e),Tu(t.stateNode,t.type,e))}}function dg(t){_s?Ss?Ss.push(t):Ss=[t]:_s=t}function fg(){if(_s){var t=_s,e=Ss;if(Ss=_s=null,Fh(t),e)for(t=0;t<e.length;t++)Fh(e[t])}}function hg(t,e){return t(e)}function pg(){}var pc=!1;function mg(t,e,n){if(pc)return t(e,n);pc=!0;try{return hg(t,e,n)}finally{pc=!1,(_s!==null||Ss!==null)&&(pg(),fg())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Au=!1;if(Li)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Au=!1}function Rv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var fa=!1,dl=null,fl=!1,Cu=null,Nv={onError:function(t){fa=!0,dl=t}};function Pv(t,e,n,i,r,s,a,o,l){fa=!1,dl=null,Rv.apply(Nv,arguments)}function Lv(t,e,n,i,r,s,a,o,l){if(Pv.apply(this,arguments),fa){if(fa){var c=dl;fa=!1,dl=null}else throw Error(ae(198));fl||(fl=!0,Cu=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Oh(t){if(Gr(t)!==t)throw Error(ae(188))}function Dv(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Oh(r),t;if(s===i)return Oh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function xg(t){return t=Dv(t),t!==null?vg(t):null}function vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vg(t);if(e!==null)return e;t=t.sibling}return null}var _g=An.unstable_scheduleCallback,kh=An.unstable_cancelCallback,Iv=An.unstable_shouldYield,Uv=An.unstable_requestPaint,Ct=An.unstable_now,Fv=An.unstable_getCurrentPriorityLevel,lf=An.unstable_ImmediatePriority,Sg=An.unstable_UserBlockingPriority,hl=An.unstable_NormalPriority,Ov=An.unstable_LowPriority,yg=An.unstable_IdlePriority,Vl=null,fi=null;function kv(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:Gv,Bv=Math.log,zv=Math.LN2;function Gv(t){return t>>>=0,t===0?32:31-(Bv(t)/zv|0)|0}var oo=64,lo=4194304;function aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=aa(o):(s&=a,s!==0&&(i=aa(s)))}else a=n&~r,a!==0?i=aa(a):s!==0&&(i=aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function Hv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ei(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Hv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ru(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mg(){var t=oo;return oo<<=1,!(oo&4194240)&&(oo=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function Wv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function Eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bg,uf,wg,Tg,Ag,Nu=!1,co=[],ir=null,rr=null,sr=null,ba=new Map,wa=new Map,Ki=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ya(e),e!==null&&uf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Xv(t,e,n,i,r){switch(e){case"focusin":return ir=qs(ir,t,e,n,i,r),!0;case"dragenter":return rr=qs(rr,t,e,n,i,r),!0;case"mouseover":return sr=qs(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ba.set(s,qs(ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wa.set(s,qs(wa.get(s)||null,t,e,n,i,r)),!0}return!1}function Cg(t){var e=Tr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=gg(n),e!==null){t.blockedOn=e,Ag(t.priority,function(){wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);wu=i,n.target.dispatchEvent(i),wu=null}else return e=Ya(n),e!==null&&uf(e),t.blockedOn=n,!1;e.shift()}return!0}function zh(t,e,n){qo(t)&&n.delete(e)}function qv(){Nu=!1,ir!==null&&qo(ir)&&(ir=null),rr!==null&&qo(rr)&&(rr=null),sr!==null&&qo(sr)&&(sr=null),ba.forEach(zh),wa.forEach(zh)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,Nu||(Nu=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,qv)))}function Ta(t){function e(r){return $s(r,t)}if(0<co.length){$s(co[0],t);for(var n=1;n<co.length;n++){var i=co[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&$s(ir,t),rr!==null&&$s(rr,t),sr!==null&&$s(sr,t),ba.forEach(e),wa.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)Cg(n),n.blockedOn===null&&Ki.shift()}var ys=ki.ReactCurrentBatchConfig,ml=!0;function $v(t,e,n,i){var r=ot,s=ys.transition;ys.transition=null;try{ot=1,df(t,e,n,i)}finally{ot=r,ys.transition=s}}function Yv(t,e,n,i){var r=ot,s=ys.transition;ys.transition=null;try{ot=4,df(t,e,n,i)}finally{ot=r,ys.transition=s}}function df(t,e,n,i){if(ml){var r=Pu(t,e,n,i);if(r===null)wc(t,e,i,gl,n),Bh(t,i);else if(Xv(r,t,e,n,i))i.stopPropagation();else if(Bh(t,i),e&4&&-1<jv.indexOf(t)){for(;r!==null;){var s=Ya(r);if(s!==null&&bg(s),s=Pu(t,e,n,i),s===null&&wc(t,e,i,gl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else wc(t,e,i,null,n)}}var gl=null;function Pu(t,e,n,i){if(gl=null,t=of(i),t=Tr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gl=t,null}function Rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fv()){case lf:return 1;case Sg:return 4;case hl:case Ov:return 16;case yg:return 536870912;default:return 16}default:return 16}}var Qi=null,ff=null,$o=null;function Ng(){if($o)return $o;var t,e=ff,n=e.length,i,r="value"in Qi?Qi.value:Qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return $o=r.slice(t,1<i?1-i:void 0)}function Yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function Gh(){return!1}function Rn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uo:Gh,this.isPropagationStopped=Gh,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),e}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=Rn(zs),$a=Et({},zs,{view:0,detail:0}),Kv=Rn($a),gc,xc,Ys,Wl=Et({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(gc=t.screenX-Ys.screenX,xc=t.screenY-Ys.screenY):xc=gc=0,Ys=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),Hh=Rn(Wl),Zv=Et({},Wl,{dataTransfer:0}),Jv=Rn(Zv),Qv=Et({},$a,{relatedTarget:0}),vc=Rn(Qv),e_=Et({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),t_=Rn(e_),n_=Et({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i_=Rn(n_),r_=Et({},zs,{data:0}),Vh=Rn(r_),s_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=o_[t])?!!e[t]:!1}function pf(){return l_}var c_=Et({},$a,{key:function(t){if(t.key){var e=s_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u_=Rn(c_),d_=Et({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=Rn(d_),f_=Et({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),h_=Rn(f_),p_=Et({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),m_=Rn(p_),g_=Et({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=Rn(g_),v_=[9,13,27,32],mf=Li&&"CompositionEvent"in window,ha=null;Li&&"documentMode"in document&&(ha=document.documentMode);var __=Li&&"TextEvent"in window&&!ha,Pg=Li&&(!mf||ha&&8<ha&&11>=ha),jh=" ",Xh=!1;function Lg(t,e){switch(t){case"keyup":return v_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function S_(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:(Xh=!0,jh);case"textInput":return t=e.data,t===jh&&Xh?null:t;default:return null}}function y_(t,e){if(os)return t==="compositionend"||!mf&&Lg(t,e)?(t=Ng(),$o=ff=Qi=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pg&&e.locale!=="ko"?null:e.data;default:return null}}var M_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!M_[t.type]:e==="textarea"}function Ig(t,e,n,i){dg(i),e=xl(e,"onChange"),0<e.length&&(n=new hf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,Aa=null;function E_(t){jg(t,0)}function jl(t){var e=us(t);if(rg(e))return t}function b_(t,e){if(t==="change")return e}var Ug=!1;if(Li){var _c;if(Li){var Sc="oninput"in document;if(!Sc){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),Sc=typeof $h.oninput=="function"}_c=Sc}else _c=!1;Ug=_c&&(!document.documentMode||9<document.documentMode)}function Yh(){pa&&(pa.detachEvent("onpropertychange",Fg),Aa=pa=null)}function Fg(t){if(t.propertyName==="value"&&jl(Aa)){var e=[];Ig(e,Aa,t,of(t)),mg(E_,e)}}function w_(t,e,n){t==="focusin"?(Yh(),pa=e,Aa=n,pa.attachEvent("onpropertychange",Fg)):t==="focusout"&&Yh()}function T_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Aa)}function A_(t,e){if(t==="click")return jl(e)}function C_(t,e){if(t==="input"||t==="change")return jl(e)}function R_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:R_;function Ca(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hu.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function Kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zh(t,e){var n=Kh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kh(n)}}function Og(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Og(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kg(){for(var t=window,e=ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ul(t.document)}return e}function gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function N_(t){var e=kg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Og(n.ownerDocument.documentElement,n)){if(i!==null&&gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Zh(n,s);var a=Zh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P_=Li&&"documentMode"in document&&11>=document.documentMode,ls=null,Lu=null,ma=null,Du=!1;function Jh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Du||ls==null||ls!==ul(i)||(i=ls,"selectionStart"in i&&gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Ca(ma,i)||(ma=i,i=xl(Lu,"onSelect"),0<i.length&&(e=new hf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},yc={},Bg={};Li&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Xl(t){if(yc[t])return yc[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bg)return yc[t]=e[n];return t}var zg=Xl("animationend"),Gg=Xl("animationiteration"),Hg=Xl("animationstart"),Vg=Xl("transitionend"),Wg=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){Wg.set(t,e),zr(e,[t])}for(var Mc=0;Mc<Qh.length;Mc++){var Ec=Qh[Mc],L_=Ec.toLowerCase(),D_=Ec[0].toUpperCase()+Ec.slice(1);pr(L_,"on"+D_)}pr(zg,"onAnimationEnd");pr(Gg,"onAnimationIteration");pr(Hg,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(Vg,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I_=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function ep(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Lv(i,e,void 0,t),t.currentTarget=null}function jg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;ep(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;ep(r,o,c),s=l}}}if(fl)throw t=Cu,fl=!1,Cu=null,t}function ht(t,e){var n=e[ku];n===void 0&&(n=e[ku]=new Set);var i=t+"__bubble";n.has(i)||(Xg(e,t,2,!1),n.add(i))}function bc(t,e,n){var i=0;e&&(i|=4),Xg(n,t,i,e)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Ra(t){if(!t[ho]){t[ho]=!0,Qm.forEach(function(n){n!=="selectionchange"&&(I_.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ho]||(e[ho]=!0,bc("selectionchange",!1,e))}}function Xg(t,e,n,i){switch(Rg(e)){case 1:var r=$v;break;case 4:r=Yv;break;default:r=df}n=r.bind(null,e,n,t),r=void 0,!Au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function wc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Tr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}mg(function(){var c=s,p=of(n),m=[];e:{var h=Wg.get(t);if(h!==void 0){var _=hf,M=t;switch(t){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":_=u_;break;case"focusin":M="focus",_=vc;break;case"focusout":M="blur",_=vc;break;case"beforeblur":case"afterblur":_=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=h_;break;case zg:case Gg:case Hg:_=t_;break;case Vg:_=m_;break;case"scroll":_=Kv;break;case"wheel":_=x_;break;case"copy":case"cut":case"paste":_=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Wh}var b=(e&4)!==0,S=!b&&t==="scroll",d=b?h!==null?h+"Capture":null:h;b=[];for(var f=c,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,d!==null&&(E=Ea(f,d),E!=null&&b.push(Na(f,E,y)))),S)break;f=f.return}0<b.length&&(h=new _(h,M,null,n,p),m.push({event:h,listeners:b}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==wu&&(M=n.relatedTarget||n.fromElement)&&(Tr(M)||M[Di]))break e;if((_||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,_?(M=n.relatedTarget||n.toElement,_=c,M=M?Tr(M):null,M!==null&&(S=Gr(M),M!==S||M.tag!==5&&M.tag!==6)&&(M=null)):(_=null,M=c),_!==M)){if(b=Hh,E="onMouseLeave",d="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(b=Wh,E="onPointerLeave",d="onPointerEnter",f="pointer"),S=_==null?h:us(_),y=M==null?h:us(M),h=new b(E,f+"leave",_,n,p),h.target=S,h.relatedTarget=y,E=null,Tr(p)===c&&(b=new b(d,f+"enter",M,n,p),b.target=y,b.relatedTarget=S,E=b),S=E,_&&M)t:{for(b=_,d=M,f=0,y=b;y;y=Wr(y))f++;for(y=0,E=d;E;E=Wr(E))y++;for(;0<f-y;)b=Wr(b),f--;for(;0<y-f;)d=Wr(d),y--;for(;f--;){if(b===d||d!==null&&b===d.alternate)break t;b=Wr(b),d=Wr(d)}b=null}else b=null;_!==null&&tp(m,h,_,b,!1),M!==null&&S!==null&&tp(m,S,M,b,!0)}}e:{if(h=c?us(c):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var R=b_;else if(qh(h))if(Ug)R=C_;else{R=T_;var T=w_}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=A_);if(R&&(R=R(t,c))){Ig(m,R,n,p);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Su(h,"number",h.value)}switch(T=c?us(c):window,t){case"focusin":(qh(T)||T.contentEditable==="true")&&(ls=T,Lu=c,ma=null);break;case"focusout":ma=Lu=ls=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Jh(m,n,p);break;case"selectionchange":if(P_)break;case"keydown":case"keyup":Jh(m,n,p)}var g;if(mf)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else os?Lg(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Pg&&n.locale!=="ko"&&(os||w!=="onCompositionStart"?w==="onCompositionEnd"&&os&&(g=Ng()):(Qi=p,ff="value"in Qi?Qi.value:Qi.textContent,os=!0)),T=xl(c,w),0<T.length&&(w=new Vh(w,t,null,n,p),m.push({event:w,listeners:T}),g?w.data=g:(g=Dg(n),g!==null&&(w.data=g)))),(g=__?S_(t,n):y_(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(p=new Vh("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=g))}jg(m,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ea(t,n),s!=null&&i.unshift(Na(t,s,r)),s=Ea(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ea(n,s),l!=null&&a.unshift(Na(n,l,o))):r||(l=Ea(n,s),l!=null&&a.push(Na(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var U_=/\r\n?/g,F_=/\u0000|\uFFFD/g;function np(t){return(typeof t=="string"?t:""+t).replace(U_,`
`).replace(F_,"")}function po(t,e,n){if(e=np(e),np(t)!==e&&n)throw Error(ae(425))}function vl(){}var Iu=null,Uu=null;function Fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,O_=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,k_=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(t){return ip.resolve(null).then(t).catch(B_)}:Ou;function B_(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ta(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),li="__reactFiber$"+Gs,Pa="__reactProps$"+Gs,Di="__reactContainer$"+Gs,ku="__reactEvents$"+Gs,z_="__reactListeners$"+Gs,G_="__reactHandles$"+Gs;function Tr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rp(t);t!==null;){if(n=t[li])return n;t=rp(t)}return e}t=n,n=t.parentNode}return null}function Ya(t){return t=t[li]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function ql(t){return t[Pa]||null}var Bu=[],ds=-1;function mr(t){return{current:t}}function pt(t){0>ds||(t.current=Bu[ds],Bu[ds]=null,ds--)}function ut(t,e){ds++,Bu[ds]=t.current,t.current=e}var fr={},rn=mr(fr),xn=mr(!1),Pr=fr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return fr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function _l(){pt(xn),pt(rn)}function sp(t,e,n){if(rn.current!==fr)throw Error(ae(168));ut(rn,e),ut(xn,n)}function qg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,wv(t)||"Unknown",r));return Et({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Pr=rn.current,ut(rn,t),ut(xn,xn.current),!0}function ap(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=qg(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,pt(xn),pt(rn),ut(rn,t)):pt(xn),ut(xn,n)}var bi=null,$l=!1,Ac=!1;function $g(t){bi===null?bi=[t]:bi.push(t)}function H_(t){$l=!0,$g(t)}function gr(){if(!Ac&&bi!==null){Ac=!0;var t=0,e=ot;try{var n=bi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,$l=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),_g(lf,gr),r}finally{ot=e,Ac=!1}}return null}var fs=[],hs=0,yl=null,Ml=0,On=[],kn=0,Lr=null,wi=1,Ti="";function br(t,e){fs[hs++]=Ml,fs[hs++]=yl,yl=t,Ml=e}function Yg(t,e,n){On[kn++]=wi,On[kn++]=Ti,On[kn++]=Lr,Lr=t;var i=wi;t=Ti;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,wi=1<<32-ei(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function xf(t){t.return!==null&&(br(t,1),Yg(t,1,0))}function vf(t){for(;t===yl;)yl=fs[--hs],fs[hs]=null,Ml=fs[--hs],fs[hs]=null;for(;t===Lr;)Lr=On[--kn],On[kn]=null,Ti=On[--kn],On[kn]=null,wi=On[--kn],On[kn]=null}var Tn=null,wn=null,xt=!1,Zn=null;function Kg(t,e){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function op(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gu(t){if(xt){var e=wn;if(e){var n=e;if(!op(t,e)){if(zu(t))throw Error(ae(418));e=ar(n.nextSibling);var i=Tn;e&&op(t,e)?Kg(i,n):(t.flags=t.flags&-4097|2,xt=!1,Tn=t)}}else{if(zu(t))throw Error(ae(418));t.flags=t.flags&-4097|2,xt=!1,Tn=t}}}function lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function mo(t){if(t!==Tn)return!1;if(!xt)return lp(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fu(t.type,t.memoizedProps)),e&&(e=wn)){if(zu(t))throw Zg(),Error(ae(418));for(;e;)Kg(t,e),e=ar(e.nextSibling)}if(lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?ar(t.stateNode.nextSibling):null;return!0}function Zg(){for(var t=wn;t;)t=ar(t.nextSibling)}function Rs(){wn=Tn=null,xt=!1}function _f(t){Zn===null?Zn=[t]:Zn.push(t)}var V_=ki.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function go(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cp(t){var e=t._init;return e(t._payload)}function Jg(t){function e(d,f){if(t){var y=d.deletions;y===null?(d.deletions=[f],d.flags|=16):y.push(f)}}function n(d,f){if(!t)return null;for(;f!==null;)e(d,f),f=f.sibling;return null}function i(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function r(d,f){return d=ur(d,f),d.index=0,d.sibling=null,d}function s(d,f,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<f?(d.flags|=2,f):y):(d.flags|=2,f)):(d.flags|=1048576,f)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,f,y,E){return f===null||f.tag!==6?(f=Ic(y,d.mode,E),f.return=d,f):(f=r(f,y),f.return=d,f)}function l(d,f,y,E){var R=y.type;return R===as?p(d,f,y.props.children,E,y.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&cp(R)===f.type)?(E=r(f,y.props),E.ref=Ks(d,f,y),E.return=d,E):(E=nl(y.type,y.key,y.props,null,d.mode,E),E.ref=Ks(d,f,y),E.return=d,E)}function c(d,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Uc(y,d.mode,E),f.return=d,f):(f=r(f,y.children||[]),f.return=d,f)}function p(d,f,y,E,R){return f===null||f.tag!==7?(f=Nr(y,d.mode,E,R),f.return=d,f):(f=r(f,y),f.return=d,f)}function m(d,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ic(""+f,d.mode,y),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ro:return y=nl(f.type,f.key,f.props,null,d.mode,y),y.ref=Ks(d,null,f),y.return=d,y;case ss:return f=Uc(f,d.mode,y),f.return=d,f;case qi:var E=f._init;return m(d,E(f._payload),y)}if(sa(f)||js(f))return f=Nr(f,d.mode,y,null),f.return=d,f;go(d,f)}return null}function h(d,f,y,E){var R=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:o(d,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ro:return y.key===R?l(d,f,y,E):null;case ss:return y.key===R?c(d,f,y,E):null;case qi:return R=y._init,h(d,f,R(y._payload),E)}if(sa(y)||js(y))return R!==null?null:p(d,f,y,E,null);go(d,y)}return null}function _(d,f,y,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(y)||null,o(f,d,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ro:return d=d.get(E.key===null?y:E.key)||null,l(f,d,E,R);case ss:return d=d.get(E.key===null?y:E.key)||null,c(f,d,E,R);case qi:var T=E._init;return _(d,f,y,T(E._payload),R)}if(sa(E)||js(E))return d=d.get(y)||null,p(f,d,E,R,null);go(f,E)}return null}function M(d,f,y,E){for(var R=null,T=null,g=f,w=f=0,U=null;g!==null&&w<y.length;w++){g.index>w?(U=g,g=null):U=g.sibling;var N=h(d,g,y[w],E);if(N===null){g===null&&(g=U);break}t&&g&&N.alternate===null&&e(d,g),f=s(N,f,w),T===null?R=N:T.sibling=N,T=N,g=U}if(w===y.length)return n(d,g),xt&&br(d,w),R;if(g===null){for(;w<y.length;w++)g=m(d,y[w],E),g!==null&&(f=s(g,f,w),T===null?R=g:T.sibling=g,T=g);return xt&&br(d,w),R}for(g=i(d,g);w<y.length;w++)U=_(g,d,w,y[w],E),U!==null&&(t&&U.alternate!==null&&g.delete(U.key===null?w:U.key),f=s(U,f,w),T===null?R=U:T.sibling=U,T=U);return t&&g.forEach(function(L){return e(d,L)}),xt&&br(d,w),R}function b(d,f,y,E){var R=js(y);if(typeof R!="function")throw Error(ae(150));if(y=R.call(y),y==null)throw Error(ae(151));for(var T=R=null,g=f,w=f=0,U=null,N=y.next();g!==null&&!N.done;w++,N=y.next()){g.index>w?(U=g,g=null):U=g.sibling;var L=h(d,g,N.value,E);if(L===null){g===null&&(g=U);break}t&&g&&L.alternate===null&&e(d,g),f=s(L,f,w),T===null?R=L:T.sibling=L,T=L,g=U}if(N.done)return n(d,g),xt&&br(d,w),R;if(g===null){for(;!N.done;w++,N=y.next())N=m(d,N.value,E),N!==null&&(f=s(N,f,w),T===null?R=N:T.sibling=N,T=N);return xt&&br(d,w),R}for(g=i(d,g);!N.done;w++,N=y.next())N=_(g,d,w,N.value,E),N!==null&&(t&&N.alternate!==null&&g.delete(N.key===null?w:N.key),f=s(N,f,w),T===null?R=N:T.sibling=N,T=N);return t&&g.forEach(function(G){return e(d,G)}),xt&&br(d,w),R}function S(d,f,y,E){if(typeof y=="object"&&y!==null&&y.type===as&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ro:e:{for(var R=y.key,T=f;T!==null;){if(T.key===R){if(R=y.type,R===as){if(T.tag===7){n(d,T.sibling),f=r(T,y.props.children),f.return=d,d=f;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&cp(R)===T.type){n(d,T.sibling),f=r(T,y.props),f.ref=Ks(d,T,y),f.return=d,d=f;break e}n(d,T);break}else e(d,T);T=T.sibling}y.type===as?(f=Nr(y.props.children,d.mode,E,y.key),f.return=d,d=f):(E=nl(y.type,y.key,y.props,null,d.mode,E),E.ref=Ks(d,f,y),E.return=d,d=E)}return a(d);case ss:e:{for(T=y.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(d,f.sibling),f=r(f,y.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else e(d,f);f=f.sibling}f=Uc(y,d.mode,E),f.return=d,d=f}return a(d);case qi:return T=y._init,S(d,f,T(y._payload),E)}if(sa(y))return M(d,f,y,E);if(js(y))return b(d,f,y,E);go(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(d,f.sibling),f=r(f,y),f.return=d,d=f):(n(d,f),f=Ic(y,d.mode,E),f.return=d,d=f),a(d)):n(d,f)}return S}var Ns=Jg(!0),Qg=Jg(!1),El=mr(null),bl=null,ps=null,Sf=null;function yf(){Sf=ps=bl=null}function Mf(t){var e=El.current;pt(El),t._currentValue=e}function Hu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){bl=t,Sf=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(Sf!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(bl===null)throw Error(ae(308));ps=t,bl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var Ar=null;function Ef(t){Ar===null?Ar=[t]:Ar.push(t)}function e0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ef(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,Ef(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function Ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}function up(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,i){var r=t.updateQueue;$i=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=c:o.next=c,p.lastBaseUpdate=l))}if(s!==null){var m=r.baseState;a=0,p=c=l=null,o=s;do{var h=o.lane,_=o.eventTime;if((i&h)===h){p!==null&&(p=p.next={eventTime:_,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var M=t,b=o;switch(h=e,_=n,b.tag){case 1:if(M=b.payload,typeof M=="function"){m=M.call(_,m,h);break e}m=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=b.payload,h=typeof M=="function"?M.call(_,m,h):M,h==null)break e;m=Et({},m,h);break e;case 2:$i=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else _={eventTime:_,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(c=p=_,l=m):p=p.next=_,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(p===null&&(l=m),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=a,t.lanes=a,t.memoizedState=m}}function dp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Ka={},hi=mr(Ka),La=mr(Ka),Da=mr(Ka);function Cr(t){if(t===Ka)throw Error(ae(174));return t}function wf(t,e){switch(ut(Da,e),ut(La,t),ut(hi,Ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mu(e,t)}pt(hi),ut(hi,e)}function Ps(){pt(hi),pt(La),pt(Da)}function n0(t){Cr(Da.current);var e=Cr(hi.current),n=Mu(e,t.type);e!==n&&(ut(La,t),ut(hi,n))}function Tf(t){La.current===t&&(pt(hi),pt(La))}var St=mr(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function Af(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var Zo=ki.ReactCurrentDispatcher,Rc=ki.ReactCurrentBatchConfig,Dr=0,Mt=null,It=null,Ht=null,Al=!1,ga=!1,Ia=0,W_=0;function Jt(){throw Error(ae(321))}function Cf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function Rf(t,e,n,i,r,s){if(Dr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zo.current=t===null||t.memoizedState===null?$_:Y_,t=n(i,r),ga){s=0;do{if(ga=!1,Ia=0,25<=s)throw Error(ae(301));s+=1,Ht=It=null,e.updateQueue=null,Zo.current=K_,t=n(i,r)}while(ga)}if(Zo.current=Cl,e=It!==null&&It.next!==null,Dr=0,Ht=It=Mt=null,Al=!1,e)throw Error(ae(300));return t}function Nf(){var t=Ia!==0;return Ia=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Mt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Vn(){if(It===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Ht===null?Mt.memoizedState:Ht.next;if(e!==null)Ht=e,It=t;else{if(t===null)throw Error(ae(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Ht===null?Mt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Ua(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var p=c.lane;if((Dr&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=m,a=i):l=l.next=m,Mt.lanes|=p,Ir|=p}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ni(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ni(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function i0(){}function r0(t,e){var n=Mt,i=Vn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,Pf(o0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Fa(9,a0.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ae(349));Dr&30||s0(n,e,r)}return r}function s0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a0(t,e,n,i){e.value=n,e.getSnapshot=i,l0(e)&&c0(t)}function o0(t,e,n){return n(function(){l0(e)&&c0(t)})}function l0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function c0(t){var e=Ii(t,1);e!==null&&ti(e,t,1,-1)}function fp(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=q_.bind(null,Mt,t),[e.memoizedState,t]}function Fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function u0(){return Vn().memoizedState}function Jo(t,e,n,i){var r=ai();Mt.flags|=t,r.memoizedState=Fa(1|e,n,void 0,i===void 0?null:i)}function Yl(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(It!==null){var a=It.memoizedState;if(s=a.destroy,i!==null&&Cf(i,a.deps)){r.memoizedState=Fa(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Fa(1|e,n,s,i)}function hp(t,e){return Jo(8390656,8,t,e)}function Pf(t,e){return Yl(2048,8,t,e)}function d0(t,e){return Yl(4,2,t,e)}function f0(t,e){return Yl(4,4,t,e)}function h0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function p0(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,h0.bind(null,e,t),n)}function Lf(){}function m0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function g0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function x0(t,e,n){return Dr&21?(ni(n,e)||(n=Mg(),Mt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function j_(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{ot=n,Rc.transition=i}}function v0(){return Vn().memoizedState}function X_(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_0(t))S0(e,n);else if(n=e0(t,e,n,i),n!==null){var r=ln();ti(n,t,i,r),y0(n,e,i)}}function q_(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_0(t))S0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ni(o,a)){var l=e.interleaved;l===null?(r.next=r,Ef(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=e0(t,e,r,i),n!==null&&(r=ln(),ti(n,t,i,r),y0(n,e,i))}}function _0(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function S0(t,e){ga=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}var Cl={readContext:Hn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},$_={readContext:Hn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:hp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4194308,4,h0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jo(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=X_.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:fp,useDebugValue:Lf,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=fp(!1),e=t[0];return t=j_.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ai();if(xt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Vt===null)throw Error(ae(349));Dr&30||s0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hp(o0.bind(null,i,s,t),[t]),i.flags|=2048,Fa(9,a0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=Vt.identifierPrefix;if(xt){var n=Ti,i=wi;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y_={readContext:Hn,useCallback:m0,useContext:Hn,useEffect:Pf,useImperativeHandle:p0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:g0,useReducer:Nc,useRef:u0,useState:function(){return Nc(Ua)},useDebugValue:Lf,useDeferredValue:function(t){var e=Vn();return x0(e,It.memoizedState,t)},useTransition:function(){var t=Nc(Ua)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:r0,useId:v0,unstable_isNewReconciler:!1},K_={readContext:Hn,useCallback:m0,useContext:Hn,useEffect:Pf,useImperativeHandle:p0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:g0,useReducer:Pc,useRef:u0,useState:function(){return Pc(Ua)},useDebugValue:Lf,useDeferredValue:function(t){var e=Vn();return It===null?e.memoizedState=t:x0(e,It.memoizedState,t)},useTransition:function(){var t=Pc(Ua)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:r0,useId:v0,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=cr(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(ti(e,t,r,i),Ko(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=cr(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(ti(e,t,r,i),Ko(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=cr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=or(t,r,i),e!==null&&(ti(e,t,i,n),Ko(e,t,i))}};function pp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(r,s):!0}function M0(t,e,n){var i=!1,r=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=vn(e)?Pr:rn.current,i=e.contextTypes,s=(i=i!=null)?Cs(t,r):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function Wu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=vn(e)?Pr:rn.current,r.context=Cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kl.enqueueReplaceState(r,r.state,null),wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",i=e;do n+=bv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Z_=typeof WeakMap=="function"?WeakMap:Map;function E0(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,td=i),ju(t,e)},n}function b0(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ju(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function gp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Z_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dS.bind(null,t,e,n),e.then(t,t))}function xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var J_=ki.ReactCurrentOwner,mn=!1;function on(t,e,n,i){e.child=t===null?Qg(e,null,n,i):Ns(e,t.child,n,i)}function _p(t,e,n,i,r){n=n.render;var s=e.ref;return Ms(e,r),i=Rf(t,e,n,i,s,r),n=Nf(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(xt&&n&&xf(e),e.flags|=1,on(t,e,i,r),e.child)}function Sp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,w0(t,e,s,i,r)):(t=nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(a,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function w0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ca(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return Xu(t,e,n,i,r)}function T0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(gs,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(gs,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(gs,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(gs,En),En|=i;return on(t,e,r,n),e.child}function A0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xu(t,e,n,i,r){var s=vn(n)?Pr:rn.current;return s=Cs(e,s),Ms(e,r),n=Rf(t,e,n,i,s,r),i=Nf(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(xt&&i&&xf(e),e.flags|=1,on(t,e,n,r),e.child)}function yp(t,e,n,i,r){if(vn(n)){var s=!0;Sl(e)}else s=!1;if(Ms(e,r),e.stateNode===null)Qo(t,e),M0(e,n,i),Wu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Hn(c):(c=vn(n)?Pr:rn.current,c=Cs(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&mp(e,a,i,c),$i=!1;var h=e.memoizedState;a.state=h,wl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||xn.current||$i?(typeof p=="function"&&(Vu(e,n,p,i),l=e.memoizedState),(o=$i||pp(e,n,o,i,h,l,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,t0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Yn(e.type,o),a.props=c,m=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=vn(n)?Pr:rn.current,l=Cs(e,l));var _=n.getDerivedStateFromProps;(p=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||h!==l)&&mp(e,a,i,l),$i=!1,h=e.memoizedState,a.state=h,wl(e,i,a,r);var M=e.memoizedState;o!==m||h!==M||xn.current||$i?(typeof _=="function"&&(Vu(e,n,_,i),M=e.memoizedState),(c=$i||pp(e,n,c,i,h,M,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,M,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,M,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=M),a.props=i,a.state=M,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return qu(t,e,n,i,s,r)}function qu(t,e,n,i,r,s){A0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ap(e,n,!1),Ui(t,e,s);i=e.stateNode,J_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ns(e,t.child,null,s),e.child=Ns(e,null,o,s)):on(t,e,o,s),e.memoizedState=i.state,r&&ap(e,n,!0),e.child}function C0(t){var e=t.stateNode;e.pendingContext?sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sp(t,e.context,!1),wf(t,e.containerInfo)}function Mp(t,e,n,i,r){return Rs(),_f(r),e.flags|=256,on(t,e,n,i),e.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function R0(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(St,r&1),t===null)return Gu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ql(a,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yu(n),e.memoizedState=$u,t):Df(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Q_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ur(o,s):(s=Nr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Yu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=$u,i}return s=t.child,t=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Df(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xo(t,e,n,i){return i!==null&&_f(i),Ns(e,t.child,null,n),t=Df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Q_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Lc(Error(ae(422))),xo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ns(e,t.child,null,a),e.child.memoizedState=Yu(a),e.memoizedState=$u,s);if(!(e.mode&1))return xo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=Lc(s,i,void 0),xo(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),ti(i,t,r,-1))}return Bf(),i=Lc(Error(ae(421))),xo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=ar(r.nextSibling),Tn=e,xt=!0,Zn=null,t!==null&&(On[kn++]=wi,On[kn++]=Ti,On[kn++]=Lr,wi=t.id,Ti=t.overflow,Lr=e),e=Df(e,i.children),e.flags|=4096,e)}function Ep(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hu(t.return,e,n)}function Dc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function N0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ep(t,n,e);else if(t.tag===19)Ep(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Dc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eS(t,e,n){switch(e.tag){case 3:C0(e),Rs();break;case 5:n0(e);break;case 1:vn(e.type)&&Sl(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(El,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?R0(t,e,n):(ut(St,St.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);ut(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return N0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,T0(t,e,n)}return Ui(t,e,n)}var P0,Ku,L0,D0;P0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ku=function(){};L0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(hi.current);var s=null;switch(n){case"input":r=vu(t,r),i=vu(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=yu(t,r),i=yu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vl)}Eu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};D0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zs(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function tS(t,e,n){var i=e.pendingProps;switch(vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return vn(e.type)&&_l(),Qt(e),null;case 3:return i=e.stateNode,Ps(),pt(xn),pt(rn),Af(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(rd(Zn),Zn=null))),Ku(t,e),Qt(e),null;case 5:Tf(e);var r=Cr(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)L0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Qt(e),null}if(t=Cr(hi.current),mo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<oa.length;r++)ht(oa[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Lh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Ih(i,s),ht("invalid",i)}Eu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&po(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&po(i.textContent,o,t),r=["children",""+o]):ya.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":so(i),Dh(i,s,!0);break;case"textarea":so(i),Uh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=og(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[li]=e,t[Pa]=i,P0(t,e,!1,!1),e.stateNode=t;e:{switch(a=bu(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<oa.length;r++)ht(oa[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":Lh(t,i),r=vu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Ih(t,i),r=yu(t,i),ht("invalid",t);break;default:r=i}Eu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&nf(t,s,l,a))}switch(n){case"input":so(t),Dh(t,i,!1);break;case"textarea":so(t),Uh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)D0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Cr(Da.current),Cr(hi.current),mo(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:po(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Qt(e),null;case 13:if(pt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&wn!==null&&e.mode&1&&!(e.flags&128))Zg(),Rs(),e.flags|=98560,s=!1;else if(s=mo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[li]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Zn!==null&&(rd(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ut===0&&(Ut=3):Bf())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Ps(),Ku(t,e),t===null&&Ra(e.stateNode.containerInfo),Qt(e),null;case 10:return Mf(e.type._context),Qt(e),null;case 17:return vn(e.type)&&_l(),Qt(e),null;case 19:if(pt(St),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Zs(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Tl(t),a!==null){for(e.flags|=128,Zs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>Ds&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return Qt(e),null}else 2*Ct()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=St.current,ut(St,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return kf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function nS(t,e){switch(vf(e),e.tag){case 1:return vn(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),pt(xn),pt(rn),Af(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tf(e),null;case 13:if(pt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(St),null;case 4:return Ps(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var vo=!1,nn=!1,iS=typeof WeakSet=="function"?WeakSet:Set,be=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Zu(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var bp=!1;function rS(t,e){if(Iu=ml,t=kg(),gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,p=0,m=t,h=null;t:for(;;){for(var _;m!==n||r!==0&&m.nodeType!==3||(o=a+r),m!==s||i!==0&&m.nodeType!==3||(l=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(_=m.firstChild)!==null;)h=m,m=_;for(;;){if(m===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++p===i&&(l=a),(_=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=_}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uu={focusedElem:t,selectionRange:n},ml=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var M=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var b=M.memoizedProps,S=M.memoizedState,d=e.stateNode,f=d.getSnapshotBeforeUpdate(e.elementType===e.type?b:Yn(e.type,b),S);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(E){Tt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return M=bp,bp=!1,M}function xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zu(e,n,s)}r=r.next}while(r!==i)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ju(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function I0(t){var e=t.alternate;e!==null&&(t.alternate=null,I0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Pa],delete e[ku],delete e[z_],delete e[G_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U0(t){return t.tag===5||t.tag===3||t.tag===4}function wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vl));else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var jt=null,Kn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)F0(t,e,n),n=n.sibling}function F0(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:nn||ms(n,e);case 6:var i=jt,r=Kn;jt=null,Gi(t,e,n),jt=i,Kn=r,jt!==null&&(Kn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Kn?(t=jt,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),Ta(t)):Tc(jt,n.stateNode));break;case 4:i=jt,r=Kn,jt=n.stateNode.containerInfo,Kn=!0,Gi(t,e,n),jt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Zu(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!nn&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Tt(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,Gi(t,e,n),nn=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function Tp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iS),e.forEach(function(i){var r=hS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:jt=o.stateNode,Kn=!1;break e;case 3:jt=o.stateNode.containerInfo,Kn=!0;break e;case 4:jt=o.stateNode.containerInfo,Kn=!0;break e}o=o.return}if(jt===null)throw Error(ae(160));F0(s,a,r),jt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O0(e,t),e=e.sibling}function O0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),ii(t),i&4){try{xa(3,t,t.return),Zl(3,t)}catch(b){Tt(t,t.return,b)}try{xa(5,t,t.return)}catch(b){Tt(t,t.return,b)}}break;case 1:jn(e,t),ii(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(jn(e,t),ii(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(b){Tt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&sg(r,s),bu(o,a);var c=bu(o,s);for(a=0;a<l.length;a+=2){var p=l[a],m=l[a+1];p==="style"?ug(r,m):p==="dangerouslySetInnerHTML"?lg(r,m):p==="children"?Ma(r,m):nf(r,p,m,c)}switch(o){case"input":_u(r,s);break;case"textarea":ag(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?vs(r,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?vs(r,!!s.multiple,s.defaultValue,!0):vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(b){Tt(t,t.return,b)}}break;case 6:if(jn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){Tt(t,t.return,b)}}break;case 3:if(jn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(b){Tt(t,t.return,b)}break;case 4:jn(e,t),ii(t);break;case 13:jn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ff=Ct())),i&4&&Tp(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||p,jn(e,t),nn=c):jn(e,t),ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(be=t,p=t.child;p!==null;){for(m=be=p;be!==null;){switch(h=be,_=h.child,h.tag){case 0:case 11:case 14:case 15:xa(4,h,h.return);break;case 1:ms(h,h.return);var M=h.stateNode;if(typeof M.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,M.props=e.memoizedProps,M.state=e.memoizedState,M.componentWillUnmount()}catch(b){Tt(i,n,b)}}break;case 5:ms(h,h.return);break;case 22:if(h.memoizedState!==null){Cp(m);continue}}_!==null?(_.return=h,be=_):Cp(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{r=m.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=m.stateNode,l=m.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=cg("display",a))}catch(b){Tt(t,t.return,b)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(b){Tt(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:jn(e,t),ii(t),i&4&&Tp(t);break;case 21:break;default:jn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U0(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=wp(t);ed(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=wp(t);Qu(t,o,a);break;default:throw Error(ae(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sS(t,e,n){be=t,k0(t)}function k0(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||vo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||nn;o=vo;var c=nn;if(vo=a,(nn=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?Rp(r):l!==null?(l.return=a,be=l):Rp(r);for(;s!==null;)be=s,k0(s),s=s.sibling;be=r,vo=o,nn=c}Ap(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Ap(t)}}function Ap(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Ta(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}nn||e.flags&512&&Ju(e)}catch(h){Tt(e,e.return,h)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Cp(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Rp(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Ju(e)}catch(l){Tt(e,s,l)}break;case 5:var a=e.return;try{Ju(e)}catch(l){Tt(e,a,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var aS=Math.ceil,Rl=ki.ReactCurrentDispatcher,If=ki.ReactCurrentOwner,Gn=ki.ReactCurrentBatchConfig,tt=0,Vt=null,Lt=null,qt=0,En=0,gs=mr(0),Ut=0,Oa=null,Ir=0,Jl=0,Uf=0,va=null,pn=null,Ff=0,Ds=1/0,Ei=null,Nl=!1,td=null,lr=null,_o=!1,er=null,Pl=0,_a=0,nd=null,el=-1,tl=0;function ln(){return tt&6?Ct():el!==-1?el:el=Ct()}function cr(t){return t.mode&1?tt&2&&qt!==0?qt&-qt:V_.transition!==null?(tl===0&&(tl=Mg()),tl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Rg(t.type)),t):1}function ti(t,e,n,i){if(50<_a)throw _a=0,nd=null,Error(ae(185));qa(t,n,i),(!(tt&2)||t!==Vt)&&(t===Vt&&(!(tt&2)&&(Jl|=n),Ut===4&&Zi(t,qt)),_n(t,i),n===1&&tt===0&&!(e.mode&1)&&(Ds=Ct()+500,$l&&gr()))}function _n(t,e){var n=t.callbackNode;Vv(t,e);var i=pl(t,t===Vt?qt:0);if(i===0)n!==null&&kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&kh(n),e===1)t.tag===0?H_(Np.bind(null,t)):$g(Np.bind(null,t)),k_(function(){!(tt&6)&&gr()}),n=null;else{switch(Eg(i)){case 1:n=lf;break;case 4:n=Sg;break;case 16:n=hl;break;case 536870912:n=yg;break;default:n=hl}n=X0(n,B0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B0(t,e){if(el=-1,tl=0,tt&6)throw Error(ae(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var i=pl(t,t===Vt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ll(t,i);else{e=i;var r=tt;tt|=2;var s=G0();(Vt!==t||qt!==e)&&(Ei=null,Ds=Ct()+500,Rr(t,e));do try{cS();break}catch(o){z0(t,o)}while(!0);yf(),Rl.current=s,tt=r,Lt!==null?e=0:(Vt=null,qt=0,e=Ut)}if(e!==0){if(e===2&&(r=Ru(t),r!==0&&(i=r,e=id(t,r))),e===1)throw n=Oa,Rr(t,0),Zi(t,i),_n(t,Ct()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!oS(r)&&(e=Ll(t,i),e===2&&(s=Ru(t),s!==0&&(i=s,e=id(t,s))),e===1))throw n=Oa,Rr(t,0),Zi(t,i),_n(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:wr(t,pn,Ei);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=Ff+500-Ct(),10<e)){if(pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ou(wr.bind(null,t,pn,Ei),e);break}wr(t,pn,Ei);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ei(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aS(i/1960))-i,10<i){t.timeoutHandle=Ou(wr.bind(null,t,pn,Ei),i);break}wr(t,pn,Ei);break;case 5:wr(t,pn,Ei);break;default:throw Error(ae(329))}}}return _n(t,Ct()),t.callbackNode===n?B0.bind(null,t):null}function id(t,e){var n=va;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=pn,pn=n,e!==null&&rd(e)),t}function rd(t){pn===null?pn=t:pn.push.apply(pn,t)}function oS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~Uf,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Np(t){if(tt&6)throw Error(ae(327));Es();var e=pl(t,0);if(!(e&1))return _n(t,Ct()),null;var n=Ll(t,e);if(t.tag!==0&&n===2){var i=Ru(t);i!==0&&(e=i,n=id(t,i))}if(n===1)throw n=Oa,Rr(t,0),Zi(t,e),_n(t,Ct()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,pn,Ei),_n(t,Ct()),null}function Of(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Ds=Ct()+500,$l&&gr())}}function Ur(t){er!==null&&er.tag===0&&!(tt&6)&&Es();var e=tt;tt|=1;var n=Gn.transition,i=ot;try{if(Gn.transition=null,ot=1,t)return t()}finally{ot=i,Gn.transition=n,tt=e,!(tt&6)&&gr()}}function kf(){En=gs.current,pt(gs)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,O_(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(vf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:Ps(),pt(xn),pt(rn),Af();break;case 5:Tf(i);break;case 4:Ps();break;case 13:pt(St);break;case 19:pt(St);break;case 10:Mf(i.type._context);break;case 22:case 23:kf()}n=n.return}if(Vt=t,Lt=t=ur(t.current,null),qt=En=e,Ut=0,Oa=null,Uf=Jl=Ir=0,pn=va=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ar=null}return t}function z0(t,e){do{var n=Lt;try{if(yf(),Zo.current=Cl,Al){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Al=!1}if(Dr=0,Ht=It=Mt=null,ga=!1,Ia=0,If.current=null,n===null||n.return===null){Ut=1,Oa=e,Lt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=o,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var _=xp(a);if(_!==null){_.flags&=-257,vp(_,a,o,s,e),_.mode&1&&gp(s,c,e),e=_,l=c;var M=e.updateQueue;if(M===null){var b=new Set;b.add(l),e.updateQueue=b}else M.add(l);break e}else{if(!(e&1)){gp(s,c,e),Bf();break e}l=Error(ae(426))}}else if(xt&&o.mode&1){var S=xp(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),vp(S,a,o,s,e),_f(Ls(l,o));break e}}s=l=Ls(l,o),Ut!==4&&(Ut=2),va===null?va=[s]:va.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=E0(s,l,e);up(s,d);break e;case 1:o=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lr===null||!lr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=b0(s,o,e);up(s,E);break e}}s=s.return}while(s!==null)}V0(n)}catch(R){e=R,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function G0(){var t=Rl.current;return Rl.current=Cl,t===null?Cl:t}function Bf(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(Ir&268435455)&&!(Jl&268435455)||Zi(Vt,qt)}function Ll(t,e){var n=tt;tt|=2;var i=G0();(Vt!==t||qt!==e)&&(Ei=null,Rr(t,e));do try{lS();break}catch(r){z0(t,r)}while(!0);if(yf(),tt=n,Rl.current=i,Lt!==null)throw Error(ae(261));return Vt=null,qt=0,Ut}function lS(){for(;Lt!==null;)H0(Lt)}function cS(){for(;Lt!==null&&!Iv();)H0(Lt)}function H0(t){var e=j0(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?V0(t):Lt=e,If.current=null}function V0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nS(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Lt=null;return}}else if(n=tS(n,e,En),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ut===0&&(Ut=5)}function wr(t,e,n){var i=ot,r=Gn.transition;try{Gn.transition=null,ot=1,uS(t,e,n,i)}finally{Gn.transition=r,ot=i}return null}function uS(t,e,n,i){do Es();while(er!==null);if(tt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wv(t,s),t===Vt&&(Lt=Vt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,X0(hl,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var a=ot;ot=1;var o=tt;tt|=4,If.current=null,rS(t,n),O0(n,t),N_(Uu),ml=!!Iu,Uu=Iu=null,t.current=n,sS(n),Uv(),tt=o,ot=a,Gn.transition=s}else t.current=n;if(_o&&(_o=!1,er=t,Pl=r),s=t.pendingLanes,s===0&&(lr=null),kv(n.stateNode),_n(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,t=td,td=null,t;return Pl&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===nd?_a++:(_a=0,nd=t):_a=0,gr(),null}function Es(){if(er!==null){var t=Eg(Pl),e=Gn.transition,n=ot;try{if(Gn.transition=null,ot=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,Pl=0,tt&6)throw Error(ae(331));var r=tt;for(tt|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var p=be;switch(p.tag){case 0:case 11:case 15:xa(8,p,s)}var m=p.child;if(m!==null)m.return=p,be=m;else for(;be!==null;){p=be;var h=p.sibling,_=p.return;if(I0(p),p===c){be=null;break}if(h!==null){h.return=_,be=h;break}be=_}}}var M=s.alternate;if(M!==null){var b=M.child;if(b!==null){M.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,be=d;break e}be=s.return}}var f=t.current;for(be=f;be!==null;){a=be;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,be=y;else e:for(a=f;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Zl(9,o)}}catch(R){Tt(o,o.return,R)}if(o===a){be=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,be=E;break e}be=o.return}}if(tt=r,gr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(Vl,t)}catch{}i=!0}return i}finally{ot=n,Gn.transition=e}}return!1}function Pp(t,e,n){e=Ls(n,e),e=E0(t,e,1),t=or(t,e,1),e=ln(),t!==null&&(qa(t,1,e),_n(t,e))}function Tt(t,e,n){if(t.tag===3)Pp(t,t,n);else for(;e!==null;){if(e.tag===3){Pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=Ls(n,t),t=b0(e,t,1),e=or(e,t,1),t=ln(),e!==null&&(qa(e,1,t),_n(e,t));break}}e=e.return}}function dS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(qt&n)===n&&(Ut===4||Ut===3&&(qt&130023424)===qt&&500>Ct()-Ff?Rr(t,0):Uf|=n),_n(t,e)}function W0(t,e){e===0&&(t.mode&1?(e=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):e=1);var n=ln();t=Ii(t,e),t!==null&&(qa(t,e,n),_n(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W0(t,n)}function hS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),W0(t,n)}var j0;j0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,eS(t,e,n);mn=!!(t.flags&131072)}else mn=!1,xt&&e.flags&1048576&&Yg(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Qo(t,e),t=e.pendingProps;var r=Cs(e,rn.current);Ms(e,n),r=Rf(null,e,i,t,r,n);var s=Nf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bf(e),r.updater=Kl,e.stateNode=r,r._reactInternals=e,Wu(e,i,t,n),e=qu(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&xf(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Qo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=mS(i),t=Yn(i,t),r){case 0:e=Xu(null,e,i,t,n);break e;case 1:e=yp(null,e,i,t,n);break e;case 11:e=_p(null,e,i,t,n);break e;case 14:e=Sp(null,e,i,Yn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Xu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),yp(t,e,i,r,n);case 3:e:{if(C0(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,t0(t,e),wl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ls(Error(ae(423)),e),e=Mp(t,e,i,n,r);break e}else if(i!==r){r=Ls(Error(ae(424)),e),e=Mp(t,e,i,n,r);break e}else for(wn=ar(e.stateNode.containerInfo.firstChild),Tn=e,xt=!0,Zn=null,n=Qg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),i===r){e=Ui(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return n0(e),t===null&&Gu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Fu(i,r)?a=null:s!==null&&Fu(i,s)&&(e.flags|=32),A0(t,e),on(t,e,a,n),e.child;case 6:return t===null&&Gu(e),null;case 13:return R0(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ns(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),_p(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(El,i._currentValue),i._currentValue=a,s!==null)if(ni(s.value,a)){if(s.children===r.children&&!xn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Hu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,n),r=Hn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Sp(t,e,i,r,n);case 15:return w0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Qo(t,e),e.tag=1,vn(i)?(t=!0,Sl(e)):t=!1,Ms(e,n),M0(e,i,r),Wu(e,i,r,n),qu(null,e,i,!0,t,n);case 19:return N0(t,e,n);case 22:return T0(t,e,n)}throw Error(ae(156,e.tag))};function X0(t,e){return _g(t,e)}function pS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,e,n,i){return new pS(t,e,n,i)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mS(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sf)return 11;if(t===af)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")zf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case as:return Nr(n.children,r,s,e);case rf:a=8,r|=8;break;case pu:return t=zn(12,n,e,r|2),t.elementType=pu,t.lanes=s,t;case mu:return t=zn(13,n,e,r),t.elementType=mu,t.lanes=s,t;case gu:return t=zn(19,n,e,r),t.elementType=gu,t.lanes=s,t;case ng:return Ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eg:a=10;break e;case tg:a=9;break e;case sf:a=11;break e;case af:a=14;break e;case qi:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=zn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=zn(7,t,i,e),t.lanes=n,t}function Ql(t,e,n,i){return t=zn(22,t,i,e),t.elementType=ng,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=zn(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gf(t,e,n,i,r,s,a,o,l){return t=new gS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bf(s),t}function xS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function q0(t){if(!t)return fr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(vn(n))return qg(t,n,e)}return e}function $0(t,e,n,i,r,s,a,o,l){return t=Gf(n,i,!0,t,r,s,a,o,l),t.context=q0(null),n=t.current,i=ln(),r=cr(n),s=Ci(i,r),s.callback=e??null,or(n,s,r),t.current.lanes=r,qa(t,r,i),_n(t,i),t}function ec(t,e,n,i){var r=e.current,s=ln(),a=cr(r);return n=q0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=or(r,e,a),t!==null&&(ti(t,r,a,s),Ko(t,r,a)),a}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hf(t,e){Lp(t,e),(t=t.alternate)&&Lp(t,e)}function vS(){return null}var Y0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}tc.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));ec(t,e,null,null)};tc.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){ec(null,t,null,null)}),e[Di]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&Cg(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function _S(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Dl(a);s.call(c)}}var a=$0(e,i,t,0,null,!1,!1,"",Dp);return t._reactRootContainer=a,t[Di]=a.current,Ra(t.nodeType===8?t.parentNode:t),Ur(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Dl(l);o.call(c)}}var l=Gf(t,0,!1,null,null,!1,!1,"",Dp);return t._reactRootContainer=l,t[Di]=l.current,Ra(t.nodeType===8?t.parentNode:t),Ur(function(){ec(e,l,n,i)}),l}function ic(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Dl(a);o.call(l)}}ec(e,a,t,r)}else a=_S(n,e,t,r,i);return Dl(a)}bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=aa(e.pendingLanes);n!==0&&(cf(e,n|1),_n(e,Ct()),!(tt&6)&&(Ds=Ct()+500,gr()))}break;case 13:Ur(function(){var i=Ii(t,1);if(i!==null){var r=ln();ti(i,t,1,r)}}),Hf(t,1)}};uf=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=ln();ti(e,t,134217728,n)}Hf(t,134217728)}};wg=function(t){if(t.tag===13){var e=cr(t),n=Ii(t,e);if(n!==null){var i=ln();ti(n,t,e,i)}Hf(t,e)}};Tg=function(){return ot};Ag=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Tu=function(t,e,n){switch(e){case"input":if(_u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(ae(90));rg(i),_u(i,r)}}}break;case"textarea":ag(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};hg=Of;pg=Ur;var SS={usingClientEntryPoint:!1,Events:[Ya,us,ql,dg,fg,Of]},Js={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yS={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xg(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||vS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Vl=So.inject(yS),fi=So}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(ae(200));return xS(t,e,null,n)};Cn.createRoot=function(t,e){if(!Wf(t))throw Error(ae(299));var n=!1,i="",r=Y0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gf(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,Ra(t.nodeType===8?t.parentNode:t),new Vf(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=xg(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Ur(t)};Cn.hydrate=function(t,e,n){if(!nc(e))throw Error(ae(200));return ic(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Y0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=$0(e,null,t,1,n??null,r,!1,s,a),t[Di]=e.current,Ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new tc(e)};Cn.render=function(t,e,n){if(!nc(e))throw Error(ae(200));return ic(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!nc(t))throw Error(ae(40));return t._reactRootContainer?(Ur(function(){ic(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Cn.unstable_batchedUpdates=Of;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return ic(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function K0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K0)}catch(t){console.error(t)}}K0(),Km.exports=Cn;var MS=Km.exports,Ip=MS;fu.createRoot=Ip.createRoot,fu.hydrateRoot=Ip.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ES={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$e=(t,e)=>{const n=ze.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},p)=>ze.createElement("svg",{ref:p,...ES,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${bS(t)}`,o].join(" "),...c},[...e.map(([m,h])=>ze.createElement(m,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=$e("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=$e("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=$e("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=$e("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=$e("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=$e("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=$e("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=$e("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=$e("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=$e("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=$e("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=$e("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=$e("Dna",[["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1-1",key:"15nbz5"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=$e("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=$e("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=$e("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=$e("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=$e("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=$e("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=$e("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=$e("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=$e("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=$e("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=$e("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=$e("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=$e("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=$e("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=$e("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=$e("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=$e("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=$e("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=$e("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=$e("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=$e("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=$e("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=$e("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=$e("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=$e("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function jS({activeTab:t,setActiveTab:e,apiStatus:n}){const i=[{id:"home",label:"Overview",icon:sd},{id:"vision",label:"Specimen Vision AI",icon:Ba},{id:"ocean",label:"Ocean Climate ML",icon:za},{id:"taxonomy",label:"Genomic Taxonomy",icon:Is},{id:"map",label:"Map & Currents",icon:Fr},{id:"three",label:"Three.js Studio",icon:bs},{id:"visuals",label:"Visualizations",icon:jf}];return u.jsx("header",{className:"sticky top-0 z-50 backdrop-blur-xl border-b border-[rgba(100,255,218,0.15)] bg-[rgba(5,12,24,0.85)]",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"flex items-center justify-between h-20",children:[u.jsxs("div",{className:"flex items-center gap-3 cursor-pointer group",onClick:()=>e("home"),children:[u.jsx("div",{className:"w-11 h-11 rounded-xl bg-gradient-to-br from-[#64ffda] to-[#0284c7] p-0.5 shadow-lg shadow-[rgba(100,255,218,0.25)] flex items-center justify-center",children:u.jsx("div",{className:"w-full h-full bg-[#050c18] rounded-[10px] flex items-center justify-center",children:u.jsx(sd,{className:"w-6 h-6 text-[#64ffda] group-hover:scale-110 transition-transform"})})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"font-extrabold text-xl tracking-tight text-white group-hover:text-[#64ffda] transition-colors",children:"Marine Research Portal"}),u.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-[rgba(100,255,218,0.12)] text-[#64ffda] border border-[rgba(100,255,218,0.3)]",children:"v2.0 AI & Three.js"})]}),u.jsx("p",{className:"text-xs text-[#94a3b8] hidden sm:block",children:"Oceanography & Biological Analysis Platform"})]})]}),u.jsx("nav",{className:"hidden lg:flex items-center gap-1 p-1 rounded-xl bg-[rgba(13,27,49,0.7)] border border-[rgba(100,255,218,0.1)]",children:i.map(r=>{const s=r.icon,a=t===r.id;return u.jsxs("button",{onClick:()=>e(r.id),className:`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${a?"bg-gradient-to-r from-[rgba(100,255,218,0.2)] to-[rgba(56,189,248,0.2)] text-[#64ffda] border border-[rgba(100,255,218,0.35)] shadow-sm":"text-[#94a3b8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"}`,children:[u.jsx(s,{className:`w-4 h-4 ${a?"text-[#64ffda]":"text-[#64748b]"}`}),u.jsx("span",{children:r.label})]},r.id)})}),u.jsx("div",{className:"flex items-center gap-3",children:u.jsxs("div",{className:`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border ${n.online?"bg-[rgba(16,185,129,0.12)] border-[rgba(16,185,129,0.3)] text-[#34d399]":"bg-[rgba(244,63,94,0.12)] border-[rgba(244,63,94,0.3)] text-[#fb7185]"}`,children:[u.jsx("span",{className:`w-2 h-2 rounded-full ${n.online?"bg-[#34d399] animate-pulse":"bg-[#fb7185]"}`}),u.jsx("span",{className:"hidden sm:inline",children:n.online?"Backend Connected":"Backend Offline"}),u.jsx("span",{className:"sm:hidden",children:n.online?"API Online":"Offline"})]})})]}),u.jsx("div",{className:"flex lg:hidden overflow-x-auto gap-1 pb-3 scrollbar-none",children:i.map(r=>{const s=r.icon,a=t===r.id;return u.jsxs("button",{onClick:()=>e(r.id),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${a?"bg-[rgba(100,255,218,0.2)] text-[#64ffda] border border-[rgba(100,255,218,0.4)]":"text-[#94a3b8] hover:text-white bg-[rgba(13,27,49,0.5)]"}`,children:[u.jsx(s,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:r.label})]},r.id)})})]})})}function XS({setActiveTab:t,apiStatus:e}){const n=[{label:"Trained ML Models",value:"3 Active",detail:"CNN, Ensemble & Deep Net",icon:RS,color:"#64ffda"},{label:"Specimen Dataset",value:"9 Classes",detail:"6,200+ Augmented Samples",icon:Ba,color:"#38bdf8"},{label:"Ocean Regressor R²",value:"0.9745",detail:"Species Count & Biodiversity",icon:za,color:"#34d399"},{label:"3D & Spatial GIS",value:"Three.js Ready",detail:"WebGL Advection & Globe",icon:bs,color:"#a78bfa"}],i=[{id:"vision",title:"Marine Specimen Vision AI",category:"Computer Vision / Deep Learning",description:"Upload photographs of marine specimens or otolith samples. Our PyTorch CNN model classifies fish species with 94%+ accuracy and provides biological taxonomy, size metrics, and habitat indicators.",icon:Ba,tags:["PyTorch CNN","9 Seafood Classes","Otolith Analysis","Habitat Indicators"],accent:"from-[#0284c7] to-[#64ffda]",borderGlow:"hover:border-[#64ffda]"},{id:"ocean",title:"Ocean Climate & Species Predictor",category:"Environmental ML Ensemble",description:"Analyze how Sea Surface Temperature (SST), pH ocean acidification, coral bleaching severity, and marine heatwaves impact species richness and ecosystem health.",icon:za,tags:["Random Forest","Gradient Boosting","R²: 0.9745","Stress Index"],accent:"from-[#0d9488] to-[#34d399]",borderGlow:"hover:border-[#34d399]"},{id:"taxonomy",title:"Genomic Sequence Taxonomy",category:"Bioinformatics & Deep Genomics",description:"Submit raw DNA nucleotide sequences (A, C, G, T) to classify marine organisms across 7 hierarchical taxonomic levels (Kingdom, Phylum, Class, Order, Family, Genus, Species) using 4-mer k-mer vectorization.",icon:Is,tags:["Multi-Head Deep Net","7 Taxonomic Ranks","Confidence Scoring","eDNA Ready"],accent:"from-[#6366f1] to-[#a855f7]",borderGlow:"hover:border-[#a855f7]"},{id:"map",title:"Marine Map & Currents Visualizer",category:"Spatial Telemetry & Advection",description:"Explore live ocean currents streamline animations (Windy/Nullschool style), satellite telemetry migration paths (tunas, sharks), otolith isotope life-history tracks, and spatial taxonomy markers.",icon:Fr,tags:["Currents Advection","Migration Routes","Otolith Provenance","SST Heatmaps"],accent:"from-[#ea580c] to-[#f59e0b]",borderGlow:"hover:border-[#f59e0b]"},{id:"three",title:"Three.js 3D Ocean Space",category:"3D WebGL Development Studio",description:"Dedicated 3D canvas and development playground for you to craft custom Three.js underwater environments, interactive rotating globes, current vector fields, and 3D specimen models.",icon:bs,tags:["Three.js Canvas","Rotating Globe","Particle Fields","Developer Playground"],accent:"from-[#06b6d4] to-[#3b82f6]",borderGlow:"hover:border-[#3b82f6]"},{id:"visuals",title:"Analytics & Climate Simulator",category:"Empirical Data Modeling",description:"Interactive climate response simulator adjusting SST and pH dynamically, temperature-diversity response curves, coral bleaching distributions, and regional biodiversity matrices.",icon:jf,tags:["Dynamic Simulator","SST Response Curve","Reef Stress Distribution","Regional Basins"],accent:"from-[#10b981] to-[#06b6d4]",borderGlow:"hover:border-[#06b6d4]"}];return u.jsxs("div",{className:"space-y-12 pb-16",children:[u.jsxs("section",{className:"relative text-center py-12 px-4 max-w-4xl mx-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.3)] text-[#64ffda] text-xs font-semibold mb-6",children:[u.jsx(Fi,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Next-Generation Marine Biology, Oceanography & 3D Analytics"})]}),u.jsxs("h1",{className:"text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6",children:["AI, Machine Learning & ",u.jsx("br",{}),u.jsx("span",{className:"bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent",children:"Three.js Ocean Science"})]}),u.jsx("p",{className:"text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8 leading-relaxed",children:"Integrated scientific computational suite combining deep learning computer vision, climate regression models, genomic DNA classification, particle current advection, and Three.js 3D visualization."}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[u.jsxs("button",{onClick:()=>t("map"),className:"btn-ocean-solid",children:[u.jsx(Fr,{className:"w-5 h-5"}),u.jsx("span",{children:"Open Ocean Map & Currents"})]}),u.jsxs("button",{onClick:()=>t("three"),className:"btn-ocean",children:[u.jsx(bs,{className:"w-5 h-5"}),u.jsx("span",{children:"Launch Three.js 3D Studio"})]})]})]}),u.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:n.map((r,s)=>{const a=r.icon;return u.jsxs("div",{className:"glass-panel p-5 relative overflow-hidden group",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsx("span",{className:"text-xs font-semibold text-[#94a3b8] uppercase tracking-wider",children:r.label}),u.jsx("div",{className:"w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center group-hover:scale-110 transition-transform",children:u.jsx(a,{className:"w-5 h-5",style:{color:r.color}})})]}),u.jsx("div",{className:"text-2xl font-extrabold text-white mb-1 font-mono",children:r.value}),u.jsx("div",{className:"text-xs text-[#64748b]",children:r.detail})]},s)})})}),u.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsx("div",{className:"flex items-center justify-between mb-8",children:u.jsxs("div",{children:[u.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[u.jsx(Xf,{className:"w-6 h-6 text-[#64ffda]"}),"Analysis Modules, 3D Canvas & Spatial Engines"]}),u.jsx("p",{className:"text-sm text-[#94a3b8]",children:"Select a module to launch interactive modeling, maps, and Three.js environments"})]})}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map(r=>{const s=r.icon;return u.jsxs("div",{onClick:()=>t(r.id),className:`glass-panel p-6 cursor-pointer group flex flex-col justify-between ${r.borderGlow} hover:-translate-y-1.5 transition-all duration-300 relative`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-start justify-between mb-4",children:[u.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${r.accent} p-0.5 shadow-md flex items-center justify-center`,children:u.jsx("div",{className:"w-full h-full bg-[#0a192f] rounded-[10px] flex items-center justify-center",children:u.jsx(s,{className:"w-6 h-6 text-white group-hover:scale-110 transition-transform"})})}),u.jsx("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.06)] text-[#94a3b8] border border-[rgba(255,255,255,0.08)]",children:r.category})]}),u.jsx("h3",{className:"text-lg font-bold text-white group-hover:text-[#64ffda] transition-colors mb-2",children:r.title}),u.jsx("p",{className:"text-xs text-[#94a3b8] leading-relaxed mb-5",children:r.description})]}),u.jsxs("div",{children:[u.jsx("div",{className:"flex flex-wrap gap-1.5 mb-5",children:r.tags.map((a,o)=>u.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-md bg-[rgba(10,25,47,0.7)] text-[#38bdf8] border border-[rgba(56,189,248,0.2)]",children:a},o))}),u.jsxs("div",{className:"flex items-center text-xs font-semibold text-[#64ffda] group-hover:translate-x-1 transition-transform",children:[u.jsx("span",{children:"Launch Module"}),u.jsx(TS,{className:"w-3.5 h-3.5 ml-1.5"})]})]})]},r.id)})})]})]})}function qS(){const[t,e]=ze.useState(null),[n,i]=ze.useState(null),[r,s]=ze.useState("taxonomy"),[a,o]=ze.useState(!1),[l,c]=ze.useState(null),[p,m]=ze.useState(null),[h,_]=ze.useState([]);ze.useEffect(()=>{fetch("/sample-images").then(y=>y.json()).then(y=>{y.samples&&_(y.samples)}).catch(()=>{_([{name:"Red Mullet",filename:"Red_Mullet.png",url:"/sample_images/Red_Mullet.png"},{name:"Gilt-Head Bream",filename:"Gilt-Head_Bream.png",url:"/sample_images/Gilt-Head_Bream.png"},{name:"Sea Bass",filename:"Sea_Bass.png",url:"/sample_images/Sea_Bass.png"},{name:"Shrimp",filename:"Shrimp.png",url:"/sample_images/Shrimp.png"},{name:"Black Sea Sprat",filename:"Black_Sea_Sprat.png",url:"/sample_images/Black_Sea_Sprat.png"},{name:"Trout",filename:"Trout.png",url:"/sample_images/Trout.png"}])})},[]);const M=y=>{var R;const E=(R=y.target.files)==null?void 0:R[0];E&&(e(E),i(URL.createObjectURL(E)),c(null),m(null))},b=async y=>{try{o(!0),m(null),i(y.url);const R=await(await fetch(y.url)).blob(),T=new File([R],y.filename,{type:"image/png"});e(T),await S(T,r)}catch(E){m("Failed to load sample image: "+E.message),o(!1)}},S=async(y,E)=>{const R=y||t;if(!R){m("Please upload or select an image first.");return}o(!0),m(null);const T=new FormData;T.append("file",R),T.append("analysis_type",E||r);try{const g=await fetch("/analyze-image",{method:"POST",body:T});if(!g.ok)throw new Error(`Server returned status: ${g.status}`);const w=await g.json();c(w)}catch(g){m("Image analysis failed: "+g.message)}finally{o(!1)}},d=()=>{var T;if(!l)return;const y=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),E=URL.createObjectURL(y),R=document.createElement("a");R.href=E,R.download=`marine_specimen_analysis_${((T=l.common_name)==null?void 0:T.replace(/\s+/g,"_"))||"report"}.json`,R.click()},f=()=>{e(null),i(null),c(null),m(null)};return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.3)] text-[#64ffda] text-xs font-semibold mb-3",children:[u.jsx(Ba,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"PyTorch Deep Learning CNN Model"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:"Marine Specimen Vision AI"}),u.jsx("p",{className:"text-sm sm:text-base text-[#94a3b8] mt-2",children:"Upload specimen photographs or select from verified reference datasets to perform automated taxonomical identification and morphological analysis."})]}),u.jsx("div",{className:"flex justify-center",children:u.jsx("div",{className:"glass-panel p-1.5 flex flex-wrap gap-2 rounded-xl",children:[{id:"taxonomy",label:"Specimen Taxonomy",desc:"Species classification & biology"},{id:"otolith",label:"Otolithography",desc:"Growth patterns & rings"},{id:"habitat",label:"Habitat Assessment",desc:"Reef indicators & trophic role"}].map(y=>u.jsx("button",{onClick:()=>{s(y.id),t&&S(t,y.id)},className:`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${r===y.id?"bg-gradient-to-r from-[#64ffda] to-[#38bdf8] text-[#050c18] shadow-md font-bold":"text-[#94a3b8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"}`,children:y.label},y.id))})}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"glass-panel p-6",children:[u.jsxs("h3",{className:"text-base font-bold text-white mb-4 flex items-center gap-2",children:[u.jsx(kp,{className:"w-4 h-4 text-[#64ffda]"}),"Upload Specimen Image"]}),n?u.jsxs("div",{className:"relative rounded-xl overflow-hidden border border-[rgba(100,255,218,0.3)] bg-black",children:[u.jsx("img",{src:n,alt:"Specimen Preview",className:"w-full h-64 object-contain bg-[rgba(5,12,24,0.9)]"}),u.jsx("button",{onClick:f,className:"absolute top-3 right-3 p-2 rounded-lg bg-[rgba(5,12,24,0.85)] hover:bg-[rgba(244,63,94,0.85)] text-white text-xs border border-[rgba(255,255,255,0.2)] transition-colors",title:"Remove image",children:u.jsx(Fc,{className:"w-4 h-4"})})]}):u.jsxs("label",{className:"border-2 border-dashed border-[rgba(100,255,218,0.25)] hover:border-[#64ffda] rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all bg-[rgba(5,12,24,0.4)] hover:bg-[rgba(100,255,218,0.04)]",children:[u.jsx("div",{className:"w-16 h-16 rounded-full bg-[rgba(100,255,218,0.1)] flex items-center justify-center mb-4",children:u.jsx(kp,{className:"w-8 h-8 text-[#64ffda]"})}),u.jsx("span",{className:"text-sm font-semibold text-white mb-1",children:"Click to browse or drop image"}),u.jsx("span",{className:"text-xs text-[#94a3b8]",children:"PNG, JPG, JPEG up to 25MB"}),u.jsx("input",{type:"file",accept:"image/*",onChange:M,className:"hidden"})]}),n&&u.jsx("div",{className:"mt-4 flex gap-3",children:u.jsx("button",{onClick:()=>S(t,r),disabled:a,className:"btn-ocean-solid w-full justify-center",children:a?u.jsxs(u.Fragment,{children:[u.jsx(Fc,{className:"w-4 h-4 animate-spin"}),u.jsx("span",{children:"Classifying Specimen..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(Fi,{className:"w-4 h-4"}),u.jsx("span",{children:"Run Deep Learning Inference"})]})})})]}),u.jsxs("div",{className:"glass-panel p-6",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[u.jsx(Fi,{className:"w-4 h-4 text-[#38bdf8]"}),"1-Click Reference Test Samples"]}),u.jsx("span",{className:"text-xs text-[#64748b]",children:"Real Dataset Samples"})]}),u.jsx("p",{className:"text-xs text-[#94a3b8] mb-4",children:"Click any verified specimen from our 9-class Kaggle dataset to test instant model inference:"}),u.jsx("div",{className:"grid grid-cols-3 gap-2.5",children:h.map((y,E)=>u.jsxs("button",{onClick:()=>b(y),className:"p-2 rounded-lg bg-[rgba(5,12,24,0.7)] hover:bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.15)] hover:border-[#64ffda] text-left transition-all group flex flex-col items-center text-center",children:[u.jsx("img",{src:y.url,alt:y.name,className:"w-full h-14 object-cover rounded-md mb-1.5 group-hover:scale-105 transition-transform bg-black"}),u.jsx("span",{className:"text-[11px] font-semibold text-white group-hover:text-[#64ffda] truncate w-full",children:y.name})]},E))})]})]}),u.jsxs("div",{className:"lg:col-span-7",children:[p&&u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(244,63,94,0.12)] border border-[rgba(244,63,94,0.3)] text-[#fb7185] flex items-center gap-3 mb-6",children:[u.jsx(Z0,{className:"w-5 h-5 flex-shrink-0"}),u.jsx("span",{className:"text-sm",children:p})]}),!l&&!a&&u.jsxs("div",{className:"glass-panel p-12 text-center flex flex-col items-center justify-center min-h-[380px]",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[rgba(100,255,218,0.08)] flex items-center justify-center mb-4",children:u.jsx(Ba,{className:"w-8 h-8 text-[#64ffda] opacity-70"})}),u.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"No Analysis Run Yet"}),u.jsx("p",{className:"text-sm text-[#94a3b8] max-w-sm mb-6",children:"Upload a marine specimen photo or select one of the 9 sample specimens on the left to see instant classification results."})]}),a&&u.jsxs("div",{className:"glass-panel p-12 text-center flex flex-col items-center justify-center min-h-[380px]",children:[u.jsx("div",{className:"w-16 h-16 rounded-full border-4 border-[rgba(100,255,218,0.2)] border-t-[#64ffda] animate-spin mb-4"}),u.jsx("h3",{className:"text-lg font-bold text-white mb-1",children:"Analyzing Morphological Features"}),u.jsx("p",{className:"text-sm text-[#94a3b8]",children:"Extracting feature embeddings through 4 ConvNet blocks..."})]}),l&&u.jsxs("div",{className:"glass-panel p-7 space-y-6",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(100,255,218,0.15)]",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx("span",{className:"text-xs font-mono px-2.5 py-0.5 rounded-full bg-[rgba(100,255,218,0.15)] text-[#64ffda] border border-[rgba(100,255,218,0.3)]",children:l.family}),u.jsx("span",{className:"text-xs text-[#94a3b8]",children:l.conservation_status})]}),u.jsx("h3",{className:"text-2xl font-extrabold text-white",children:l.common_name}),u.jsx("p",{className:"text-sm italic text-[#38bdf8] font-mono",children:l.scientific_name})]}),u.jsxs("div",{className:"flex flex-col sm:items-end",children:[u.jsx("span",{className:"text-xs text-[#94a3b8] uppercase font-bold tracking-wider mb-1",children:"Confidence Score"}),u.jsxs("div",{className:"text-3xl font-extrabold text-[#64ffda] font-mono",children:[(l.confidence*100).toFixed(1),"%"]})]})]}),l.top_candidates&&u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(100,255,218,0.1)]",children:[u.jsx("span",{className:"text-xs font-bold text-white uppercase tracking-wider block mb-3",children:"Top-3 Candidate Distribution"}),u.jsx("div",{className:"space-y-2.5",children:l.top_candidates.map((y,E)=>u.jsxs("div",{className:"space-y-1",children:[u.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[u.jsx("span",{className:E===0?"text-[#64ffda] font-bold":"text-[#94a3b8]",children:y.species}),u.jsxs("span",{className:"text-white font-bold",children:[(y.probability*100).toFixed(1),"%"]})]}),u.jsx("div",{className:"h-1.5 w-full bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden",children:u.jsx("div",{className:`h-full rounded-full ${E===0?"bg-gradient-to-r from-[#64ffda] to-[#38bdf8]":"bg-[rgba(100,255,218,0.3)]"}`,style:{width:`${y.probability*100}%`}})})]},E))})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.5)] border border-[rgba(100,255,218,0.1)]",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-[#64ffda] mb-1.5",children:[u.jsx(BS,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"SIZE & MASS"})]}),u.jsx("p",{className:"text-xs text-[#cbd5e1] leading-relaxed",children:l.size})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.5)] border border-[rgba(100,255,218,0.1)]",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-[#38bdf8] mb-1.5",children:[u.jsx(Op,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"HABITAT & DEPTH"})]}),u.jsx("p",{className:"text-xs text-[#cbd5e1] leading-relaxed",children:l.habitat})]})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.5)] border border-[rgba(100,255,218,0.1)]",children:[u.jsx("span",{className:"text-xs font-bold text-[#94a3b8] uppercase tracking-wider block mb-1.5",children:"Morphological Characteristics"}),u.jsx("p",{className:"text-sm text-[#cbd5e1] leading-relaxed",children:l.characteristics})]}),l.otolith_analysis&&u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.3)]",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-[#a5b4fc] uppercase tracking-wider mb-2",children:[u.jsx(Xf,{className:"w-4 h-4"}),u.jsx("span",{children:"Otolith Structure & Ageing Findings"})]}),u.jsxs("p",{className:"text-xs text-[#cbd5e1] mb-1",children:[u.jsx("strong",{children:"Sagitta Pattern:"})," ",l.otolith_analysis.sagitta_pattern]}),u.jsxs("p",{className:"text-xs text-[#cbd5e1]",children:[u.jsx("strong",{children:"Estimated Age:"})," ",l.otolith_analysis.estimated_specimen_age," (",l.otolith_analysis.growth_rate_status,")"]})]}),l.habitat_analysis&&u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)]",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-[#6ee7b7] uppercase tracking-wider mb-2",children:[u.jsx(Op,{className:"w-4 h-4"}),u.jsx("span",{children:"Ecosystem Health & Trophic Role"})]}),u.jsxs("p",{className:"text-xs text-[#cbd5e1] mb-1",children:[u.jsx("strong",{children:"Bioindicator:"})," ",l.habitat_analysis.ecosystem_indicator]}),u.jsxs("p",{className:"text-xs text-[#cbd5e1]",children:[u.jsx("strong",{children:"Trophic Role:"})," ",l.habitat_analysis.ecological_role]})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(100,255,218,0.1)]",children:[u.jsxs("button",{onClick:d,className:"btn-ocean text-xs",children:[u.jsx(DS,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Export JSON Report"})]}),u.jsxs("button",{onClick:f,className:"text-xs text-[#94a3b8] hover:text-white flex items-center gap-1.5",children:[u.jsx(Fc,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Analyze Another Specimen"})]})]})]})]})]})]})}function $S(){var _,M;const t=[{name:"Great Barrier Reef, Australia",lat:-18.2871,lon:147.6992,sst:28.2,ph:8.08,bleach:"Moderate",heatwave:!0},{name:"Monterey Bay Sanctuary, USA",lat:36.6002,lon:-121.8947,sst:14.8,ph:8.16,bleach:"None",heatwave:!1},{name:"Coral Triangle, Indonesia",lat:-1.5,lon:125,sst:29.5,ph:8.05,bleach:"High",heatwave:!0},{name:"North Sea Marine Shelf, UK",lat:56.5,lon:3.2,sst:11.2,ph:8.14,bleach:"None",heatwave:!1},{name:"Galapagos Archipelago",lat:-.9538,lon:-90.9656,sst:22.4,ph:8.12,bleach:"Low",heatwave:!1}],[e,n]=ze.useState({Location:"Great Barrier Reef, Australia",Latitude:-18.2871,Longitude:147.6992,SST:28.2,pH_Level:8.08,Year:2026,Month:7,Bleaching_Severity:"Moderate",Marine_Heatwave:!0,Salinity:34.8,Dissolved_Oxygen:6.5,Depth:25}),[i,r]=ze.useState(null),[s,a]=ze.useState(!1),[o,l]=ze.useState(null),c=b=>{n(S=>({...S,Location:b.name,Latitude:b.lat,Longitude:b.lon,SST:b.sst,pH_Level:b.ph,Bleaching_Severity:b.bleach,Marine_Heatwave:b.heatwave})),r(null)},p=(b,S)=>{n(d=>({...d,[b]:S}))},m=async b=>{b.preventDefault(),a(!0),l(null);try{const S=await fetch("/predict-ocean",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!S.ok)throw new Error(`Server returned error: ${S.status}`);const d=await S.json();r(d)}catch(S){l("Prediction failed: "+S.message)}finally{a(!1)}},h=b=>{switch(b==null?void 0:b.toLowerCase()){case"low":return{color:"text-[#34d399] bg-[rgba(16,185,129,0.12)] border-[rgba(16,185,129,0.3)]",label:"Low Ecosystem Stress"};case"moderate":return{color:"text-[#f59e0b] bg-[rgba(245,158,11,0.12)] border-[rgba(245,158,11,0.3)]",label:"Moderate Stress Level"};case"high":return{color:"text-[#f97316] bg-[rgba(249,115,22,0.12)] border-[rgba(249,115,22,0.3)]",label:"High Stress Warning"};default:return{color:"text-[#f43f5e] bg-[rgba(244,63,94,0.12)] border-[rgba(244,63,94,0.3)]",label:"Critical Stress Risk"}}};return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.3)] text-[#34d399] text-xs font-semibold mb-3",children:[u.jsx(ka,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Ensemble Regressor (Random Forest + Gradient Boosting)"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:"Ocean Climate & Species Predictor"}),u.jsx("p",{className:"text-sm sm:text-base text-[#94a3b8] mt-2",children:"Model marine ecosystem response, forecast species richness, and evaluate climate-induced stress using sea surface temperature, acidification, and bleaching indices."})]}),u.jsxs("div",{className:"glass-panel p-4",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3 text-xs font-bold text-[#94a3b8] uppercase tracking-wider",children:[u.jsx(Fr,{className:"w-4 h-4 text-[#64ffda]"}),u.jsx("span",{children:"Load Quick Oceanographic Survey Presets:"})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:t.map((b,S)=>u.jsx("button",{onClick:()=>c(b),className:"text-xs px-3 py-1.5 rounded-lg bg-[rgba(5,12,24,0.8)] hover:bg-[rgba(100,255,218,0.15)] text-[#cbd5e1] hover:text-[#64ffda] border border-[rgba(100,255,218,0.15)] hover:border-[#64ffda] transition-all",children:b.name},S))})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[u.jsxs("div",{className:"lg:col-span-7 glass-panel p-7",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-6 flex items-center gap-2",children:[u.jsx(za,{className:"w-5 h-5 text-[#34d399]"}),u.jsx("span",{children:"Environmental Parameters & Survey Data"})]}),u.jsxs("form",{onSubmit:m,className:"space-y-6",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[u.jsxs("div",{className:"sm:col-span-2",children:[u.jsx("label",{className:"input-label",children:"Survey Location / Region"}),u.jsx("input",{type:"text",value:e.Location,onChange:b=>p("Location",b.target.value),className:"input-field",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"input-label",children:"Year & Month"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"number",value:e.Year,onChange:b=>p("Year",parseInt(b.target.value)),min:"1950",max:"2100",className:"input-field",required:!0}),u.jsx("input",{type:"number",value:e.Month,onChange:b=>p("Month",parseInt(b.target.value)),min:"1",max:"12",className:"input-field w-20",required:!0})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"input-label",children:"Latitude (°)"}),u.jsx("input",{type:"number",step:"0.0001",value:e.Latitude,onChange:b=>p("Latitude",parseFloat(b.target.value)),className:"input-field font-mono",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"input-label",children:"Longitude (°)"}),u.jsx("input",{type:"number",step:"0.0001",value:e.Longitude,onChange:b=>p("Longitude",parseFloat(b.target.value)),className:"input-field font-mono",required:!0})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-[rgba(5,12,24,0.5)] border border-[rgba(100,255,218,0.1)]",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1",children:[u.jsx("label",{className:"input-label",children:"Sea Surface Temp (SST)"}),u.jsxs("span",{className:"font-mono text-sm font-bold text-[#64ffda]",children:[e.SST,"°C"]})]}),u.jsx("input",{type:"range",min:"2",max:"35",step:"0.1",value:e.SST,onChange:b=>p("SST",parseFloat(b.target.value)),className:"w-full accent-[#64ffda] cursor-pointer"}),u.jsx("span",{className:"text-[11px] text-[#94a3b8]",children:"Optimal reef temp: 23–27°C"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1",children:[u.jsx("label",{className:"input-label",children:"Ocean pH Level"}),u.jsx("span",{className:"font-mono text-sm font-bold text-[#38bdf8]",children:e.pH_Level})]}),u.jsx("input",{type:"range",min:"7.5",max:"8.4",step:"0.01",value:e.pH_Level,onChange:b=>p("pH_Level",parseFloat(b.target.value)),className:"w-full accent-[#38bdf8] cursor-pointer"}),u.jsx("span",{className:"text-[11px] text-[#94a3b8]",children:"Normal ocean: ~8.10–8.20"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"input-label",children:"Coral Bleaching Severity"}),u.jsxs("select",{value:e.Bleaching_Severity,onChange:b=>p("Bleaching_Severity",b.target.value),className:"input-field",children:[u.jsx("option",{value:"None",children:"None (Pristine Reef)"}),u.jsx("option",{value:"Low",children:"Low (< 10% Bleached)"}),u.jsx("option",{value:"Moderate",children:"Moderate (10–30% Bleached)"}),u.jsx("option",{value:"High",children:"High (30–60% Bleached)"}),u.jsx("option",{value:"Severe",children:"Severe (> 60% Bleached)"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"input-label",children:"Marine Heatwave Status"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{type:"button",onClick:()=>p("Marine_Heatwave",!1),className:`flex-1 py-2.5 rounded-lg text-xs font-semibold border transition-all ${e.Marine_Heatwave?"bg-[rgba(5,12,24,0.6)] text-[#94a3b8] border-[rgba(255,255,255,0.1)]":"bg-[rgba(16,185,129,0.2)] text-[#34d399] border-[#34d399]"}`,children:"No Heatwave"}),u.jsx("button",{type:"button",onClick:()=>p("Marine_Heatwave",!0),className:`flex-1 py-2.5 rounded-lg text-xs font-semibold border transition-all ${e.Marine_Heatwave?"bg-[rgba(244,63,94,0.2)] text-[#fb7185] border-[#fb7185]":"bg-[rgba(5,12,24,0.6)] text-[#94a3b8] border-[rgba(255,255,255,0.1)]"}`,children:"Active Heatwave"})]})]})]}),u.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"input-label",children:"Depth (m)"}),u.jsx("input",{type:"number",step:"1",value:e.Depth,onChange:b=>p("Depth",parseFloat(b.target.value)),className:"input-field text-xs font-mono"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"input-label",children:"Salinity (PSU)"}),u.jsx("input",{type:"number",step:"0.1",value:e.Salinity,onChange:b=>p("Salinity",parseFloat(b.target.value)),className:"input-field text-xs font-mono"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"input-label",children:"Oxygen (mg/L)"}),u.jsx("input",{type:"number",step:"0.1",value:e.Dissolved_Oxygen,onChange:b=>p("Dissolved_Oxygen",parseFloat(b.target.value)),className:"input-field text-xs font-mono"})]})]}),u.jsx("button",{type:"submit",disabled:s,className:"btn-ocean-solid w-full justify-center py-3 text-base",children:s?u.jsxs(u.Fragment,{children:[u.jsx(ka,{className:"w-5 h-5 animate-spin"}),u.jsx("span",{children:"Computing Ecosystem Projections..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(Fi,{className:"w-5 h-5"}),u.jsx("span",{children:"Predict Species Richness & Ecosystem Health"})]})})]})]}),u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[o&&u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(244,63,94,0.12)] border border-[rgba(244,63,94,0.3)] text-[#fb7185] flex items-center gap-3",children:[u.jsx(wS,{className:"w-5 h-5 flex-shrink-0"}),u.jsx("span",{className:"text-sm",children:o})]}),!i&&!s&&u.jsxs("div",{className:"glass-panel p-10 text-center flex flex-col items-center justify-center min-h-[380px]",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[rgba(52,211,153,0.1)] flex items-center justify-center mb-4",children:u.jsx(za,{className:"w-8 h-8 text-[#34d399] opacity-70"})}),u.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Awaiting Parameters"}),u.jsx("p",{className:"text-sm text-[#94a3b8] max-w-xs",children:"Fill in the survey parameters on the left or select a station preset, then click predict."})]}),i&&u.jsxs("div",{className:"glass-panel p-7 space-y-6",children:[u.jsxs("div",{className:"pb-4 border-b border-[rgba(100,255,218,0.15)]",children:[u.jsx("span",{className:"text-xs font-mono text-[#64ffda] uppercase font-bold tracking-wider",children:"Model Prediction Results"}),u.jsx("h3",{className:"text-xl font-extrabold text-white mt-1",children:i.location}),u.jsxs("span",{className:"text-xs text-[#94a3b8] font-mono",children:["Coordinates: ",i.coordinates.lat.toFixed(4),"°, ",i.coordinates.lon.toFixed(4),"°"]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(100,255,218,0.18)]",children:[u.jsx("span",{className:"text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-1",children:"Species Richness"}),u.jsx("div",{className:"text-3xl font-extrabold text-[#64ffda] font-mono",children:i.predicted_species_observed}),u.jsx("span",{className:"text-[11px] text-[#64748b]",children:"Expected species / zone"})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(56,189,248,0.18)]",children:[u.jsx("span",{className:"text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-1",children:"Biodiversity Index"}),u.jsxs("div",{className:"text-3xl font-extrabold text-[#38bdf8] font-mono",children:[i.biodiversity_index,u.jsx("span",{className:"text-sm text-[#64748b]",children:"/100"})]}),u.jsx("span",{className:"text-[11px] text-[#64748b]",children:"Ecosystem vitality score"})]})]}),u.jsx("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.5)] border border-[rgba(100,255,218,0.1)]",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-xs text-[#94a3b8] font-bold uppercase tracking-wider",children:"Ecosystem Stress Status"}),u.jsx("span",{className:`text-xs font-bold font-mono px-3 py-1 rounded-full border ${h(i.ecosystem_stress).color}`,children:h(i.ecosystem_stress).label})]})}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",children:[u.jsxs("div",{className:"p-3 rounded-lg bg-[rgba(5,12,24,0.4)] border border-[rgba(255,255,255,0.06)]",children:[u.jsx("span",{className:"text-[#94a3b8] block mb-0.5",children:"Thermal Regime"}),u.jsx("span",{className:"font-semibold text-white",children:(_=i.environmental_status)==null?void 0:_.thermal_condition})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-[rgba(5,12,24,0.4)] border border-[rgba(255,255,255,0.06)]",children:[u.jsx("span",{className:"text-[#94a3b8] block mb-0.5",children:"Acidification Level"}),u.jsx("span",{className:"font-semibold text-white",children:(M=i.environmental_status)==null?void 0:M.ocean_acidity})]})]}),i.impact_factors&&u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(100,255,218,0.04)] border border-[rgba(100,255,218,0.12)]",children:[u.jsxs("span",{className:"text-xs font-bold text-[#64ffda] uppercase tracking-wider block mb-2 flex items-center gap-1.5",children:[u.jsx(US,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Factor Contribution Breakdown"})]}),u.jsxs("div",{className:"space-y-1.5 text-xs text-[#cbd5e1] font-mono",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Temperature Gradient:"}),u.jsx("span",{className:"font-bold",children:i.impact_factors.temperature_impact>0?`+${i.impact_factors.temperature_impact}`:i.impact_factors.temperature_impact})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Acidification Shift:"}),u.jsx("span",{className:"font-bold",children:i.impact_factors.acidification_impact>0?`+${i.impact_factors.acidification_impact}`:i.impact_factors.acidification_impact})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Bleaching Impact:"}),u.jsx("span",{className:"font-bold text-[#f43f5e]",children:i.impact_factors.bleaching_penalty})]})]})]})]})]})]})]})}function YS(){const t=[{name:"Yellowfin Tuna (Thunnus albacares)",sequence:"ATGCCCGATCGATCGATCGAACGTGCTAGCTAGCATCGATCGATCGATCGA",filter_id:"station-pacific-01",reads:32e3},{name:"Gilt-Head Bream (Sparus aurata)",sequence:"ATGCGGATCGACTAGCTAGCTAGCAACGTGCTAGCTCGATCGATCGATCGA",filter_id:"med-survey-station-4",reads:28e3},{name:"Atlantic Cod (Gadus morhua)",sequence:"ATGCTAGCTCGATCGATCGAACGTGCTAGCTAGCTAGCAAGTCGATCGA",filter_id:"north-sea-transect-B",reads:45e3},{name:"Giant Tiger Shrimp (Penaeus monodon)",sequence:"ATGCCGAACGTGCTAGCTAGCAAGTCGATCGATCGATCGATCGAACTAGCT",filter_id:"estuary-mangrove-09",reads:18500},{name:"Staghorn Coral (Acropora cervicornis)",sequence:"ATGCAAGTCGATCGATCGAACGTGCTAGCTAGCAACGTGCTAGCAAGTCGA",filter_id:"coral-reef-core-3",reads:54e3},{name:"Common Octopus (Octopus vulgaris)",sequence:"ATGCAGTCGATCGATCGAACGTGCTAGCTAGCAAGTCGATCGAAGTCGATC",filter_id:"pelagic-net-haul-12",reads:22e3}],[e,n]=ze.useState(t[0].sequence),[i,r]=ze.useState(t[0].filter_id),[s,a]=ze.useState(t[0].reads),[o,l]=ze.useState(!1),[c,p]=ze.useState(null),[m,h]=ze.useState(null),[_,M]=ze.useState(!1),b=T=>{n(T.sequence),r(T.filter_id),a(T.reads),p(null)},S=T=>{const g=T.replace(/[^ATCGatcg\n\r\s]/g,"").toUpperCase();n(g)},f=(()=>{const T=e.toUpperCase().replace(/[^ATCG]/g,""),g=T.length||1,w={A:0,T:0,C:0,G:0};for(let U of T)w[U]!==void 0&&w[U]++;return{A:(w.A/g*100).toFixed(1),T:(w.T/g*100).toFixed(1),C:(w.C/g*100).toFixed(1),G:(w.G/g*100).toFixed(1),gc:((w.G+w.C)/g*100).toFixed(1),total:T.length}})(),y=async T=>{if(T.preventDefault(),!e.trim()||e.length<4){h("Sequence must contain at least 4 nucleotide base pairs (ATCG).");return}l(!0),h(null);try{const g=await fetch("/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sequence:e.trim(),filter_id:i||"sample-001",reads:parseInt(s)||1e4})});if(!g.ok)throw new Error(`Server returned error: ${g.status}`);const w=await g.json();p(w)}catch(g){h("Taxonomical sequence analysis failed: "+g.message)}finally{l(!1)}},E=()=>{c&&(navigator.clipboard.writeText(JSON.stringify(c,null,2)),M(!0),setTimeout(()=>M(!1),2e3))},R=["Kingdom","Phylum","Class","Order","Family","Genus","Species"];return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.3)] text-[#c084fc] text-xs font-semibold mb-3",children:[u.jsx(Is,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Hierarchical 4-mer K-mer Genomic Classifier"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:"Genomic Sequence Taxonomy"}),u.jsx("p",{className:"text-sm sm:text-base text-[#94a3b8] mt-2",children:"Classify environmental DNA (eDNA) and marine genomic barcodes into 7-level biological taxonomical lineages using nucleotide 4-mer frequency representations."})]}),u.jsxs("div",{className:"glass-panel p-4",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3 text-xs font-bold text-[#94a3b8] uppercase tracking-wider",children:[u.jsx(Fi,{className:"w-4 h-4 text-[#a855f7]"}),u.jsx("span",{children:"Quick Marine Species Genomic Presets:"})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:t.map((T,g)=>u.jsx("button",{onClick:()=>b(T),className:"text-xs px-3 py-1.5 rounded-lg bg-[rgba(5,12,24,0.8)] hover:bg-[rgba(168,85,247,0.15)] text-[#cbd5e1] hover:text-[#c084fc] border border-[rgba(168,85,247,0.2)] hover:border-[#c084fc] transition-all",children:T.name},g))})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[u.jsxs("div",{className:"lg:col-span-6 glass-panel p-7",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-6 flex items-center gap-2",children:[u.jsx(LS,{className:"w-5 h-5 text-[#a855f7]"}),u.jsx("span",{children:"Genomic Input Data"})]}),u.jsxs("form",{onSubmit:y,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("label",{className:"input-label mb-0",children:"Nucleotide Sequence (A, T, C, G)"}),u.jsxs("span",{className:"font-mono text-xs text-[#a855f7]",children:[f.total," Base Pairs"]})]}),u.jsx("textarea",{rows:5,value:e,onChange:T=>S(T.target.value),placeholder:"Enter raw DNA sequence (e.g. ATGCCCGATCGA...)",className:"input-field font-mono text-xs tracking-wider uppercase",required:!0})]}),u.jsxs("div",{className:"p-3.5 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(100,255,218,0.1)]",children:[u.jsxs("div",{className:"flex justify-between items-center text-xs mb-2 font-mono",children:[u.jsxs("span",{className:"text-[#94a3b8]",children:["GC-Content: ",u.jsxs("strong",{className:"text-white",children:[f.gc,"%"]})]}),u.jsxs("span",{className:"text-[#94a3b8]",children:["Length: ",u.jsxs("strong",{className:"text-white",children:[f.total," bp"]})]})]}),u.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center text-xs font-mono",children:[u.jsxs("div",{className:"p-1.5 rounded bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] text-[#f87171]",children:["A: ",f.A,"%"]}),u.jsxs("div",{className:"p-1.5 rounded bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] text-[#60a5fa]",children:["T: ",f.T,"%"]}),u.jsxs("div",{className:"p-1.5 rounded bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] text-[#34d399]",children:["C: ",f.C,"%"]}),u.jsxs("div",{className:"p-1.5 rounded bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] text-[#fbbf24]",children:["G: ",f.G,"%"]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"input-label",children:"Filter / Station ID"}),u.jsx("input",{type:"text",value:i,onChange:T=>r(T.target.value),className:"input-field text-sm font-mono",placeholder:"sample-001-alpha",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"input-label",children:"Sequencing Reads"}),u.jsx("input",{type:"number",value:s,onChange:T=>a(T.target.value),min:"1",className:"input-field text-sm font-mono",required:!0})]})]}),u.jsx("button",{type:"submit",disabled:o,className:"btn-ocean-solid w-full justify-center py-3 text-base",children:o?u.jsxs(u.Fragment,{children:[u.jsx(ka,{className:"w-5 h-5 animate-spin"}),u.jsx("span",{children:"Classifying 4-mers & Lineage..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(Fi,{className:"w-5 h-5"}),u.jsx("span",{children:"Predict 7-Rank Biological Taxonomy"})]})})]})]}),u.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[m&&u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(244,63,94,0.12)] border border-[rgba(244,63,94,0.3)] text-[#fb7185] flex items-center gap-3",children:[u.jsx(Z0,{className:"w-5 h-5 flex-shrink-0"}),u.jsx("span",{className:"text-sm",children:m})]}),!c&&!o&&u.jsxs("div",{className:"glass-panel p-10 text-center flex flex-col items-center justify-center min-h-[420px]",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[rgba(168,85,247,0.1)] flex items-center justify-center mb-4",children:u.jsx(Is,{className:"w-8 h-8 text-[#c084fc] opacity-70"})}),u.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"No Taxonomy Lineage Computed"}),u.jsx("p",{className:"text-sm text-[#94a3b8] max-w-xs",children:"Submit a DNA nucleotide sequence on the left to view the complete 7-level biological taxonomy tree."})]}),c&&u.jsxs("div",{className:"glass-panel p-7 space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-[rgba(100,255,218,0.15)]",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono text-[#a855f7] uppercase font-bold tracking-wider",children:"Taxonomical Classification"}),u.jsx("h3",{className:"text-2xl font-extrabold text-white mt-0.5 italic",children:c.taxonomy.Species}),u.jsxs("span",{className:"text-xs text-[#94a3b8]",children:["Filter: ",c.filter_id," • Reads: ",c.reads.toLocaleString()]})]}),u.jsxs("button",{onClick:E,className:"p-2 rounded-lg bg-[rgba(5,12,24,0.8)] hover:bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.2)] text-[#64ffda] text-xs flex items-center gap-1.5 transition-colors",title:"Copy JSON",children:[_?u.jsx(AS,{className:"w-4 h-4 text-[#34d399]"}):u.jsx(CS,{className:"w-4 h-4"}),u.jsx("span",{children:_?"Copied":"Copy"})]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-xs font-bold text-white uppercase tracking-wider block mb-2",children:"7-Level Taxonomic Lineage & Confidence"}),R.map((T,g)=>{const w=c.taxonomy[T]||"Unknown",U=c.confidence[T]||.95,N=T==="Species";return u.jsxs("div",{className:`p-3 rounded-xl border transition-all ${N?"bg-[rgba(168,85,247,0.15)] border-[rgba(168,85,247,0.4)]":"bg-[rgba(5,12,24,0.6)] border-[rgba(100,255,218,0.1)]"}`,style:{marginLeft:`${g*8}px`},children:[u.jsxs("div",{className:"flex items-center justify-between text-xs mb-1.5",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:"font-mono text-[#94a3b8] uppercase font-semibold text-[10px]",children:[T,":"]}),u.jsx("span",{className:`font-bold ${N?"text-[#c084fc] text-sm italic":"text-white"}`,children:w})]}),u.jsxs("span",{className:"font-mono text-xs text-[#64ffda] font-bold",children:[(U*100).toFixed(1),"%"]})]}),u.jsx("div",{className:"h-1.5 w-full bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#a855f7]",style:{width:`${U*100}%`}})})]},T)})]})]})]})]})]})}function KS(){const t=ze.useRef(null),[e,n]=ze.useState(!0),[i,r]=ze.useState(1.5),[s,a]=ze.useState({currents:!0,temperature:!0,migration:!0,taxonomy:!0,otolith:!0}),[o,l]=ze.useState(null),[c,p]=ze.useState("map"),m=d=>{a(f=>({...f,[d]:!f[d]}))},h=[{name:"Gulf Stream",color:"#ff4d6d",speed:2.2,points:[[25,-80],[32,-75],[38,-65],[42,-50],[48,-35],[55,-20]]},{name:"North Atlantic Drift",color:"#ff758f",speed:1.6,points:[[55,-20],[60,-10],[65,0],[70,15]]},{name:"Kuroshio Current",color:"#38bdf8",speed:2.1,points:[[15,125],[24,125],[32,136],[38,145],[42,160]]},{name:"California Current",color:"#64ffda",speed:1.2,points:[[48,-125],[40,-124],[32,-118],[22,-110]]},{name:"Antarctic Circumpolar Current (ACC)",color:"#a78bfa",speed:1.8,points:[[-55,-160],[-58,-100],[-55,-40],[-52,20],[-56,80],[-58,140],[-55,180]]},{name:"Equatorial Counter Current",color:"#fbbf24",speed:1.4,points:[[5,130],[6,160],[5,-160],[6,-120],[5,-90]]},{name:"Agulhas Current",color:"#f43f5e",speed:2,points:[[-22,40],[-28,34],[-35,26],[-38,18]]}],_=[{id:"bluefin",species:"Atlantic Bluefin Tuna (Thunnus thynnus)",color:"#38bdf8",speed:"4.5 knots",depthRange:"0–500m",season:"April – October (Spawning to Foraging)",coordinates:[{name:"Gulf of Mexico (Spawning)",lat:26.5,lon:-88},{name:"Florida Straits Transiting",lat:25,lon:-80},{name:"Cape Hatteras Pelagic Front",lat:35.5,lon:-75},{name:"Grand Banks (Banquereau Foraging)",lat:44.5,lon:-50},{name:"Norwegian Sea Summer Benthos",lat:62,lon:2}]},{id:"white_shark",species:"Great White Shark (Carcharodon carcharias)",color:"#f59e0b",speed:"3.2 knots",depthRange:"0–900m",season:"December – July (Offshore Pelagic)",coordinates:[{name:"Farallon Islands (Seal Predation)",lat:37.7,lon:-123},{name:"Pelagic Transition Arc",lat:31,lon:-135},{name:'Subtropical "Shark Café"',lat:25,lon:-145},{name:"Hawaiian Pelagic Outpost",lat:21,lon:-156}]},{id:"leatherback",species:"Leatherback Sea Turtle (Dermochelys coriacea)",color:"#10b981",speed:"2.1 knots",depthRange:"0–1,200m (Deep Diver)",season:"Trans-Pacific Foraging",coordinates:[{name:"Jamursba-Medi (Papua Nesting)",lat:-.5,lon:132.5},{name:"Micronesian Passage",lat:8,lon:145},{name:"North Pacific Gyre",lat:30,lon:-160},{name:"California Upwelling Jellyfish Feeding",lat:36.8,lon:-122.5}]}],M=[{id:"otolith_cod",species:"Atlantic Cod (Gadus morhua)",technique:"LA-ICP-MS (Sr/Ca, Ba/Ca & δ18O)",summary:"Natal estuary nursery signature -> Continental shelf adult feeding -> Fjord spawning aggregation",stages:[{stage:"Nursery Ground (Estuary)",lat:51.5,lon:4.2,ratio:"High Ba/Ca (Low Salinity)",color:"#64ffda"},{stage:"Sub-adult Feeding Shelf",lat:56.5,lon:3.5,ratio:"Moderate Sr/Ca (Marine Shelf)",color:"#38bdf8"},{stage:"Adult Spawning Fjord",lat:68.2,lon:13.5,ratio:"Cold δ18O Enrichment (Lofoten)",color:"#a78bfa"}]},{id:"otolith_bream",species:"Gilt-Head Bream (Sparus aurata)",technique:"Micro-milling Core-to-Edge Profiling",summary:"Coastal Posidonia seagrass nursery -> Coastal lagoon fattening -> Offshore shelf winter check",stages:[{stage:"Coastal Lagoon (Mar Menor)",lat:37.7,lon:-.8,ratio:"Hypersaline Sr/Ca spike",color:"#64ffda"},{stage:"Open Mediterranean Shelf",lat:38.5,lon:.2,ratio:"Stable Oceanic Marine Baseline",color:"#38bdf8"}]}],b=[{name:"Coral Triangle eDNA Bio-Station",lat:-2.5,lon:122,taxon:"Cnidaria & Actinopterygii",count:"480 species",depth:"15–60m"},{name:"Monterey Canyon Deep Transect",lat:36.7,lon:-122.1,taxon:"Mollusca (Cephalopoda)",count:"125 species",depth:"400–1200m"},{name:"North Sea Cod Spawning Bio-Grid",lat:57,lon:2.5,taxon:"Gadidae (Gadus morhua)",count:"85 species",depth:"40–120m"},{name:"Great Barrier Reef Outer Barrier",lat:-16.5,lon:146.2,taxon:"Scleractinia & Sparidae",count:"620 species",depth:"5–35m"},{name:"Mid-Atlantic Benthos Station",lat:40,lon:-35,taxon:"Pelagic Teleosts & Crustacea",count:"94 species",depth:"100–800m"}],S=(d,f,y,E)=>{const R=(f+180)/360*y,T=(90-d)/180*E;return{x:R,y:T}};return ze.useEffect(()=>{const d=t.current;if(!d)return;const f=d.getContext("2d");let y,E=[];const R=400;for(let g=0;g<R;g++)E.push({x:Math.random()*d.width,y:Math.random()*d.height,life:Math.random()*100,maxLife:80+Math.random()*80,currentIdx:Math.floor(Math.random()*h.length),t:Math.random(),speed:.002+Math.random()*.004});const T=()=>{const g=d.width,w=d.height;if(f.fillStyle="#050c18",f.fillRect(0,0,g,w),s.temperature){const N=f.createLinearGradient(0,0,0,w);N.addColorStop(.05,"rgba(56, 189, 248, 0.08)"),N.addColorStop(.25,"rgba(100, 255, 218, 0.06)"),N.addColorStop(.5,"rgba(245, 158, 11, 0.15)"),N.addColorStop(.75,"rgba(100, 255, 218, 0.06)"),N.addColorStop(.95,"rgba(167, 139, 250, 0.08)"),f.fillStyle=N,f.fillRect(0,0,g,w),f.strokeStyle="rgba(255, 255, 255, 0.05)",f.lineWidth=1,[-60,-30,0,30,60].forEach(L=>{const G=S(L,0,g,w);f.beginPath(),f.moveTo(0,G.y),f.lineTo(g,G.y),f.stroke()})}f.fillStyle="rgba(13, 27, 49, 0.7)",f.strokeStyle="rgba(100, 255, 218, 0.2)",f.lineWidth=1.2;const U=N=>{f.beginPath(),N.forEach(([L,G],$)=>{const I=S(L,G,g,w);$===0?f.moveTo(I.x,I.y):f.lineTo(I.x,I.y)}),f.closePath(),f.fill(),f.stroke()};U([[70,-165],[60,-140],[50,-125],[30,-115],[20,-105],[15,-90],[25,-80],[35,-75],[45,-60],[60,-60],[70,-100]]),U([[10,-75],[0,-80],[-20,-70],[-45,-75],[-55,-68],[-40,-60],[-20,-40],[-5,-35],[5,-50],[10,-75]]),U([[70,20],[70,180],[45,140],[25,120],[15,100],[25,60],[35,35],[45,10],[55,10],[70,20]]),U([[35,-5],[30,30],[10,50],[-10,40],[-35,20],[-30,15],[0,10],[15,-15],[35,-5]]),U([[-12,130],[-15,145],[-35,150],[-38,140],[-32,115],[-20,115],[-12,130]]),s.currents&&(h.forEach(N=>{f.strokeStyle=N.color,f.lineWidth=2.2,f.shadowColor=N.color,f.shadowBlur=8,f.beginPath(),N.points.forEach(([L,G],$)=>{const I=S(L,G,g,w);$===0?f.moveTo(I.x,I.y):f.lineTo(I.x,I.y)}),f.stroke(),f.shadowBlur=0}),E.forEach(N=>{const L=h[N.currentIdx];N.t+=N.speed*i,N.t>=1&&(N.t=0,N.currentIdx=Math.floor(Math.random()*h.length));const G=L.points.length-1,$=N.t*G,I=Math.floor($),Y=$-I;if(I<G){const Q=L.points[I],j=L.points[I+1],z=Q[0]+(j[0]-Q[0])*Y,k=Q[1]+(j[1]-Q[1])*Y,H=S(z,k,g,w);f.fillStyle=L.color,f.beginPath(),f.arc(H.x,H.y,2.2,0,Math.PI*2),f.fill()}})),s.migration&&_.forEach(N=>{f.strokeStyle=N.color,f.lineWidth=2,f.setLineDash([6,4]),f.beginPath(),N.coordinates.forEach((L,G)=>{const $=S(L.lat,L.lon,g,w);G===0?f.moveTo($.x,$.y):f.lineTo($.x,$.y)}),f.stroke(),f.setLineDash([]),N.coordinates.forEach(L=>{const G=S(L.lat,L.lon,g,w);f.fillStyle=N.color,f.beginPath(),f.arc(G.x,G.y,4,0,Math.PI*2),f.fill();const $=Date.now()/300%8;f.strokeStyle=N.color,f.lineWidth=1,f.beginPath(),f.arc(G.x,G.y,4+$,0,Math.PI*2),f.stroke()})}),s.otolith&&M.forEach(N=>{f.strokeStyle="#64ffda",f.lineWidth=1.5,f.beginPath(),N.stages.forEach((L,G)=>{const $=S(L.lat,L.lon,g,w);G===0?f.moveTo($.x,$.y):f.lineTo($.x,$.y)}),f.stroke(),N.stages.forEach(L=>{const G=S(L.lat,L.lon,g,w);f.fillStyle=L.color,f.fillRect(G.x-3.5,G.y-3.5,7,7)})}),s.taxonomy&&b.forEach(N=>{const L=S(N.lat,N.lon,g,w);f.fillStyle="#a855f7",f.beginPath(),f.arc(L.x,L.y,5,0,Math.PI*2),f.fill(),f.strokeStyle="#ffffff",f.lineWidth=1.2,f.stroke()}),e&&(y=requestAnimationFrame(T))};return T(),()=>{cancelAnimationFrame(y)}},[s,e,i]),u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.3)] text-[#38bdf8] text-xs font-semibold mb-3",children:[u.jsx(Fr,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Spatial Oceanographic & Biological GIS Platform"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:"Marine Map & Currents Visualizer"}),u.jsx("p",{className:"text-sm sm:text-base text-[#94a3b8] mt-2",children:"Animate dynamic ocean wind & current streamlines, plot multi-generational migration routes, analyze otolith provenance isotope trajectories, and explore spatial taxonomy distribution."})]}),u.jsx("div",{className:"flex justify-center",children:u.jsxs("div",{className:"glass-panel p-1.5 flex gap-2 rounded-xl",children:[u.jsxs("button",{onClick:()=>p("map"),className:`px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${c==="map"?"bg-gradient-to-r from-[#64ffda] to-[#38bdf8] text-[#050c18] shadow-md":"text-[#94a3b8] hover:text-white"}`,children:[u.jsx(Fr,{className:"w-4 h-4"}),u.jsx("span",{children:"Interactive Map & Animation"})]}),u.jsxs("button",{onClick:()=>p("study"),className:`px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${c==="study"?"bg-gradient-to-r from-[#64ffda] to-[#38bdf8] text-[#050c18] shadow-md":"text-[#94a3b8] hover:text-white"}`,children:[u.jsx(Up,{className:"w-4 h-4"}),u.jsx("span",{children:"Detailed Scientific & Mapping Study"})]})]})}),c==="map"?u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"glass-panel p-4 flex flex-wrap items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsxs("span",{className:"text-xs font-bold text-[#94a3b8] uppercase mr-2 flex items-center gap-1.5",children:[u.jsx(Xf,{className:"w-4 h-4 text-[#64ffda]"}),"Layers:"]}),[{key:"currents",label:"Wind / Currents",icon:Bp,color:"#38bdf8"},{key:"temperature",label:"SST Isotherms",icon:J0,color:"#f59e0b"},{key:"migration",label:"Migration Routes",icon:ka,color:"#10b981"},{key:"otolith",label:"Otolith Provenance",icon:Fi,color:"#64ffda"},{key:"taxonomy",label:"Taxonomy Sites",icon:Is,color:"#a855f7"}].map(d=>{const f=d.icon,y=s[d.key];return u.jsxs("button",{onClick:()=>m(d.key),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${y?"bg-[rgba(100,255,218,0.15)] text-white border-[rgba(100,255,218,0.4)]":"bg-[rgba(5,12,24,0.6)] text-[#64748b] border-[rgba(255,255,255,0.06)]"}`,children:[u.jsx(f,{className:"w-3.5 h-3.5",style:{color:y?d.color:"#64748b"}}),u.jsx("span",{children:d.label})]},d.key)})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("button",{onClick:()=>n(!e),className:"btn-ocean py-1.5 text-xs",children:[e?u.jsx(FS,{className:"w-3.5 h-3.5"}):u.jsx(OS,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:e?"Pause Flows":"Resume Flows"})]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-[#94a3b8]",children:[u.jsx("span",{children:"Speed:"}),u.jsx("input",{type:"range",min:"0.5",max:"3.5",step:"0.5",value:i,onChange:d=>r(parseFloat(d.target.value)),className:"w-20 accent-[#64ffda] cursor-pointer"}),u.jsxs("span",{className:"text-white font-bold",children:[i,"x"]})]})]})]}),u.jsxs("div",{className:"glass-panel p-3 relative overflow-hidden rounded-2xl",children:[u.jsx("canvas",{ref:t,width:1120,height:560,className:"w-full h-auto rounded-xl block border border-[rgba(100,255,218,0.1)]"}),u.jsxs("div",{className:"absolute bottom-6 left-6 p-3 rounded-xl bg-[rgba(5,12,24,0.85)] backdrop-blur border border-[rgba(100,255,218,0.2)] text-[11px] font-mono space-y-1.5 pointer-events-none",children:[u.jsx("span",{className:"text-[#64ffda] font-bold block mb-1",children:"🗺️ Telemetry Legend"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-3 h-1 bg-[#ff4d6d] rounded-full inline-block"}),u.jsx("span",{className:"text-white",children:"Gulf Stream / Tropical Currents"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-3 h-1 bg-[#38bdf8] rounded-full inline-block"}),u.jsx("span",{className:"text-white",children:"Bluefin Tuna Telemetry (Arc)"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-3 h-1 bg-[#f59e0b] rounded-full inline-block"}),u.jsx("span",{className:"text-white",children:"White Shark Trans-Pacific Path"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-[#64ffda] inline-block"}),u.jsx("span",{className:"text-white",children:"Otolith Chemical Nursery Provenance"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#a855f7] inline-block"}),u.jsx("span",{className:"text-white",children:"eDNA Taxonomy Bio-Station"})]})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:_.map(d=>u.jsxs("div",{onClick:()=>l(d),className:"glass-panel p-4 cursor-pointer hover:border-[#64ffda] transition-all",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("span",{className:"text-xs font-mono font-bold",style:{color:d.color},children:d.speed}),u.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-[rgba(255,255,255,0.06)] text-[#94a3b8]",children:d.depthRange})]}),u.jsx("h4",{className:"text-sm font-bold text-white mb-1",children:d.species}),u.jsx("p",{className:"text-xs text-[#94a3b8]",children:d.season})]},d.id))})]}):u.jsxs("div",{className:"glass-panel p-8 space-y-8 animate-fadeIn",children:[u.jsxs("div",{className:"border-b border-[rgba(100,255,218,0.15)] pb-4",children:[u.jsxs("h3",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[u.jsx(Up,{className:"w-6 h-6 text-[#64ffda]"}),u.jsx("span",{children:"Scientific Guide: How to Plot & Represent Marine Data on Maps"})]}),u.jsx("p",{className:"text-sm text-[#94a3b8] mt-1",children:"A comprehensive technical study covering particle advection, geochemical otolith provenancing, satellite telemetry filtering, and WebGL shader pipelines."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs leading-relaxed",children:[u.jsxs("div",{className:"p-5 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(56,189,248,0.2)] space-y-3",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-[#38bdf8]",children:[u.jsx(Bp,{className:"w-4 h-4"}),u.jsx("h4",{children:"1. Ocean Currents & Wind Vector Animation (Nullschool / Windy Style)"})]}),u.jsxs("p",{className:"text-[#cbd5e1]",children:[u.jsx("strong",{children:"Data Sources:"})," Real-time vector wind and ocean current data are distributed by NOAA (GFS / OSCAR) and Copernicus (CMEMS) in ",u.jsx("strong",{children:"GRIB2"})," or ",u.jsx("strong",{children:"NetCDF"})," format containing spatial velocity components $u$ (east-west) and $v$ (north-south)."]}),u.jsxs("p",{className:"text-[#94a3b8]",children:[u.jsx("strong",{children:"Advection Mathematics:"})," Particle positions evolve via the Lagrangian trajectory formula:"]}),u.jsxs("div",{className:"p-2.5 rounded bg-black font-mono text-[11px] text-[#64ffda]",children:["$$\\vec",x,"(t + \\Delta t) = \\vec",x,"(t) + \\vec",v,"(\\vec",x,"(t)) \\cdot \\Delta t$$"]}),u.jsx("p",{className:"text-[#94a3b8]",children:"For production smoothness, 4th-Order Runge-Kutta (RK4) integration is utilized over bilinear spatial interpolation of grid nodes."}),u.jsxs("p",{className:"text-[#cbd5e1]",children:[u.jsx("strong",{children:"GPU Shader Pipeline:"})," In WebGL / Three.js, rendering 20,000+ particles at 60 FPS is done via ",u.jsx("em",{children:"Ping-Pong GPU Textures"}),". Two floating-point framebuffers alternate: Shader 1 updates particle positions based on current velocity textures; Shader 2 fades particle trails by blending previous frames with decay alpha (0.95)."]})]}),u.jsxs("div",{className:"p-5 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(100,255,218,0.2)] space-y-3",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-[#64ffda]",children:[u.jsx(Fi,{className:"w-4 h-4"}),u.jsx("h4",{children:"2. Otolithography Provenance & Life-History Tracing"})]}),u.jsxs("p",{className:"text-[#cbd5e1]",children:[u.jsx("strong",{children:"Principle:"})," Fish otoliths (ear bones) are metabolically inert calcium carbonate ($CaCO_3$, predominantly aragonite). As fish swim through varying water masses, minor and trace elements are permanently accreted into daily and seasonal growth rings."]}),u.jsxs("p",{className:"text-[#94a3b8]",children:[u.jsx("strong",{children:"Analytical Instrumentation:"})," Laser Ablation Inductively Coupled Plasma Mass Spectrometry (",u.jsx("strong",{children:"LA-ICP-MS"}),") profiles elemental ratios along the growth axis from core (natal birth) to edge (capture):"]}),u.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-[#94a3b8]",children:[u.jsxs("li",{children:[u.jsx("strong",{children:"Strontium/Calcium ($Sr/Ca$):"})," Directly correlates with ambient salinity; spikes identify transitions from freshwater/estuarine nurseries to open ocean."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Barium/Calcium ($Ba/Ca$):"})," Elevated in nutrient-rich freshwater runoff and coastal river plumes."]}),u.jsxs("li",{children:[u.jsxs("strong",{children:["Oxygen Isotopes ($\\delta^",18,"\\text",O,"$):"]})," Reconstructs historical ambient water temperature experienced across migration seasons."]})]}),u.jsxs("p",{className:"text-[#cbd5e1]",children:[u.jsx("strong",{children:"Mapping Technique:"})," Measured isotope profiles are inverted against regional oceanic ",u.jsx("em",{children:"Isoscapes"})," (IsoMAP models) to generate maximum-likelihood geographic tracks."]})]}),u.jsxs("div",{className:"p-5 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(245,158,11,0.2)] space-y-3",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-[#fbbf24]",children:[u.jsx(ka,{className:"w-4 h-4"}),u.jsx("h4",{children:"3. Marine Animal Migration & Telemetry Modeling"})]}),u.jsxs("p",{className:"text-[#cbd5e1]",children:[u.jsx("strong",{children:"Tag Technologies:"})," Pop-up Satellite Archival Tags (PSAT) and Smart Position and Temperature transmitting (SPOT) tags record light-level latitude, depth, and ambient SST."]}),u.jsxs("p",{className:"text-[#94a3b8]",children:[u.jsx("strong",{children:"State-Space Models (SSMs):"})," Raw Argos satellite fixes suffer from positional noise ($\\pm 5\\text",km,"$). Researchers apply two-state First-Difference Correlated Random Walk (DCRW) switching models:"]}),u.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-[#94a3b8]",children:[u.jsxs("li",{children:[u.jsx("strong",{children:"State 1 (Transiting):"})," High speed, low turning angles (directed trans-oceanic migration)."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"State 2 (Area-Restricted Search / Foraging):"})," Low speed, high tortuosity (feeding in upwelling fronts)."]})]}),u.jsxs("p",{className:"text-[#cbd5e1]",children:[u.jsx("strong",{children:"Cartographic Representation:"})," Great Circle geodesics with animated gradient pulses along the line string, color-coded by behavioral mode or vertical depth."]})]}),u.jsxs("div",{className:"p-5 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(168,85,247,0.2)] space-y-3",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-[#c084fc]",children:[u.jsx(Is,{className:"w-4 h-4"}),u.jsx("h4",{children:"4. Taxonomy & eDNA Biogeographic Distributions"})]}),u.jsxs("p",{className:"text-[#cbd5e1]",children:[u.jsx("strong",{children:"Global Biodiversity Databases:"})," Integrating with OBIS (Ocean Biodiversity Information System) and GBIF via GeoJSON FeatureCollections."]}),u.jsx("p",{className:"text-[#94a3b8]",children:u.jsx("strong",{children:"Cartographic Representation Techniques:"})}),u.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-[#94a3b8]",children:[u.jsxs("li",{children:[u.jsx("strong",{children:"H3 Hexagonal Hierarchical Spatial Indexing:"})," Binning continuous eDNA reads into discrete hexagonal grid cells to prevent point cluttering."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Biodiversity Iso-surfaces:"})," Kernel Density Estimation (KDE) contour lines showing species richness drops across environmental fronts."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Phylogenetic Tree Mapping:"})," Linking geo-markers to interactive circular dendrograms displaying hierarchical taxonomy lineage."]})]})]})]}),u.jsxs("div",{className:"p-5 rounded-xl bg-[rgba(100,255,218,0.05)] border border-[rgba(100,255,218,0.2)]",children:[u.jsxs("h4",{className:"text-sm font-bold text-[#64ffda] mb-2 flex items-center gap-2",children:[u.jsx(WS,{className:"w-4 h-4"}),u.jsx("span",{children:"Recommended Production Web Stack for World-Class Ocean Visualizations"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-[#cbd5e1] font-mono",children:[u.jsxs("div",{className:"p-2.5 rounded bg-[rgba(5,12,24,0.6)]",children:[u.jsx("strong",{className:"text-white block mb-1",children:"Three.js"}),u.jsx("span",{children:"Custom WebGL shaders, 3D globes, and volumetric bathymetric rendering."})]}),u.jsxs("div",{className:"p-2.5 rounded bg-[rgba(5,12,24,0.6)]",children:[u.jsx("strong",{className:"text-white block mb-1",children:"Deck.gl"}),u.jsx("span",{children:"High-performance WebGL layer for millions of telemetry points & H3 hexes."})]}),u.jsxs("div",{className:"p-2.5 rounded bg-[rgba(5,12,24,0.6)]",children:[u.jsx("strong",{className:"text-white block mb-1",children:"MapLibre GL"}),u.jsx("span",{children:"Open-source vector tile basemaps with custom ocean bathymetry styling."})]}),u.jsxs("div",{className:"p-2.5 rounded bg-[rgba(5,12,24,0.6)]",children:[u.jsx("strong",{className:"text-white block mb-1",children:"D3-Geo & Turf.js"}),u.jsx("span",{children:"Geodesic Great Circle calculations and spatial geometric interpolation."})]})]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qf="187",ZS=0,zp=1,JS=2,il=1,QS=2,la=3,Or=0,cn=1,ci=2,ws=0,Sa=1,Gp=2,Hp=3,Vp=4,ey=5,is=100,ty=101,ny=102,iy=103,ry=104,sy=200,ay=201,oy=202,ly=203,Q0=204,ex=205,cy=206,uy=207,dy=208,fy=209,hy=210,py=211,my=212,gy=213,xy=214,ad=0,od=1,ld=2,Ga=3,cd=4,ud=5,dd=6,fd=7,$f=0,vy=1,_y=2,Ri=0,tx=1,nx=2,ix=3,rx=4,sx=5,ax=6,ox=7,lx=300,Us=301,Ha=302,Oc=303,kc=304,hd=1e3,Ai=1001,pd=1002,Xt=1003,Sy=1004,yo=1005,gn=1006,Bc=1007,tr=1008,bn=1009,cx=1010,ux=1011,Va=1012,Yf=1013,mi=1014,ui=1015,gi=1016,Kf=1017,Zf=1018,Fs=1020,dx=35902,fx=35899,hx=1021,px=1022,di=1023,hr=1026,nr=1027,mx=1028,Jf=1029,kr=1030,Qf=1031,eh=1033,rl=33776,sl=33777,al=33778,ol=33779,md=35840,gd=35841,xd=35842,vd=35843,_d=36196,Sd=37492,yd=37496,Md=37488,Ed=37489,Il=37490,bd=37491,wd=37808,Td=37809,Ad=37810,Cd=37811,Rd=37812,Nd=37813,Pd=37814,Ld=37815,Dd=37816,Id=37817,Ud=37818,Fd=37819,Od=37820,kd=37821,Bd=36492,zd=36494,Gd=36495,Hd=36283,Vd=36284,Ul=36285,Wd=36286,yy=3200,Fl=0,My=1,Ji="",Fn="srgb",Ol="srgb-linear",kl="linear",at="srgb",zc=7680,Ey=519,by=512,wy=513,Ty=514,gx=515,Ay=516,Cy=517,xx=518,vx=519,Ry=35044,Wp="300 es",Qn=2e3,Wa=2001;function Ny(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Py(){const t=Bl("canvas");return t.style.display="block",t}const jp={};function Xp(...t){const e="THREE."+t.shift();console.log(e,...t)}function _x(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=_x(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function rt(...t){t=_x(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ll(...t){const e=t.join(" ");e in jp||(jp[e]=!0,Ue(...t))}function Ly(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Dy={[ad]:ad,[ld]:dd,[cd]:cd,[Ga]:ud,[od]:od,[dd]:ld,[fd]:fd,[ud]:Ga};class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=Math.PI/180,jd=180/Math.PI;function Za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function Iy(t,e){return(t%e+e)%e}function Hc(t,e,n){return(1-n)*t+n*e}function Uy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function th(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Fy(t,e){if(e.constructor===Float32Array)return t;const n=th(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Oy(t,e){if(e.constructor===Float32Array)return t;const n=th(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const dh=class dh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;let Xe=dh;class Hs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],p=i[r+2],m=i[r+3],h=s[a+0],_=s[a+1],M=s[a+2],b=s[a+3];if(m!==b||l!==h||c!==_||p!==M){let S=l*h+c*_+p*M+m*b;S<0&&(h=-h,_=-_,M=-M,b=-b,S=-S);let d=1-o;if(S<.9995){const f=Math.acos(S),y=Math.sin(f);d=Math.sin(d*f)/y,o=Math.sin(o*f)/y,l=l*d+h*o,c=c*d+_*o,p=p*d+M*o,m=m*d+b*o}else{l=l*d+h*o,c=c*d+_*o,p=p*d+M*o,m=m*d+b*o;const f=1/Math.sqrt(l*l+c*c+p*p+m*m);l*=f,c*=f,p*=f,m*=f}}e[n]=l,e[n+1]=c,e[n+2]=p,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],p=i[r+3],m=s[a],h=s[a+1],_=s[a+2],M=s[a+3];return e[n]=o*M+p*m+l*_-c*h,e[n+1]=l*M+p*h+c*m-o*_,e[n+2]=c*M+p*_+o*h-l*m,e[n+3]=p*M-o*m-l*h-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),p=o(r/2),m=o(s/2),h=l(i/2),_=l(r/2),M=l(s/2);switch(a){case"XYZ":this._x=h*p*m+c*_*M,this._y=c*_*m-h*p*M,this._z=c*p*M+h*_*m,this._w=c*p*m-h*_*M;break;case"YXZ":this._x=h*p*m+c*_*M,this._y=c*_*m-h*p*M,this._z=c*p*M-h*_*m,this._w=c*p*m+h*_*M;break;case"ZXY":this._x=h*p*m-c*_*M,this._y=c*_*m+h*p*M,this._z=c*p*M+h*_*m,this._w=c*p*m-h*_*M;break;case"ZYX":this._x=h*p*m-c*_*M,this._y=c*_*m+h*p*M,this._z=c*p*M-h*_*m,this._w=c*p*m+h*_*M;break;case"YZX":this._x=h*p*m+c*_*M,this._y=c*_*m+h*p*M,this._z=c*p*M-h*_*m,this._w=c*p*m-h*_*M;break;case"XZY":this._x=h*p*m-c*_*M,this._y=c*_*m-h*p*M,this._z=c*p*M+h*_*m,this._w=c*p*m+h*_*M;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],p=n[6],m=n[10],h=i+o+m;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(p-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>m){const _=2*Math.sqrt(1+i-o-m);this._w=(p-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>m){const _=2*Math.sqrt(1+o-i-m);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+p)/_}else{const _=2*Math.sqrt(1+m-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,p=n._w;return this._x=i*p+a*o+r*c-s*l,this._y=r*p+a*l+s*o-i*c,this._z=s*p+a*c+i*l-r*o,this._w=a*p-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,n=Math.sin(n*c)/p,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fh=class fh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),p=2*(o*n-s*r),m=2*(s*i-a*n);return this.x=n+l*c+a*m-o*p,this.y=i+l*p+o*c-s*m,this.z=r+l*m+s*p-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fh.prototype.isVector3=!0;let V=fh;const Vc=new V,qp=new Hs,hh=class hh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],p=i[4],m=i[7],h=i[2],_=i[5],M=i[8],b=r[0],S=r[3],d=r[6],f=r[1],y=r[4],E=r[7],R=r[2],T=r[5],g=r[8];return s[0]=a*b+o*f+l*R,s[3]=a*S+o*y+l*T,s[6]=a*d+o*E+l*g,s[1]=c*b+p*f+m*R,s[4]=c*S+p*y+m*T,s[7]=c*d+p*E+m*g,s[2]=h*b+_*f+M*R,s[5]=h*S+_*y+M*T,s[8]=h*d+_*E+M*g,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return n*a*p-n*o*c-i*s*p+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],m=p*a-o*c,h=o*l-p*s,_=c*s-a*l,M=n*m+i*h+r*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=m*b,e[1]=(r*c-p*i)*b,e[2]=(o*i-r*a)*b,e[3]=h*b,e[4]=(p*n-r*l)*b,e[5]=(r*s-o*n)*b,e[6]=_*b,e[7]=(i*l-c*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return ll("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wc.makeScale(e,n)),this}rotate(e){return ll("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wc.makeRotation(-e)),this}translate(e,n){return ll("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;let ke=hh;const Wc=new ke,$p=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yp=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ky(){const t={enabled:!0,workingColorSpace:Ol,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Ts(r.r),r.g=Ts(r.g),r.b=Ts(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ji?kl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ol]:{primaries:e,whitePoint:i,transfer:kl,toXYZ:$p,fromXYZ:Yp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:$p,fromXYZ:Yp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const Je=ky();function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ts(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jr;class By{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jr===void 0&&(jr=Bl("canvas")),jr.width=e.width,jr.height=e.height;const r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zy=0;class nh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jc(r[a].image)):s.push(jc(r[a]))}else s=jc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function jc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?By.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let Gy=0;const Xc=new V;class un extends Hr{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Ai,r=Ai,s=gn,a=tr,o=di,l=bn,c=un.DEFAULT_ANISOTROPY,p=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Za(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hd:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hd:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=lx;un.DEFAULT_ANISOTROPY=1;const ph=class ph{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],p=l[4],m=l[8],h=l[1],_=l[5],M=l[9],b=l[2],S=l[6],d=l[10];if(Math.abs(p-h)<.01&&Math.abs(m-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+h)<.1&&Math.abs(m+b)<.1&&Math.abs(M+S)<.1&&Math.abs(c+_+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,E=(_+1)/2,R=(d+1)/2,T=(p+h)/4,g=(m+b)/4,w=(M+S)/4;return y>E&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=g/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=w/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=g/s,r=w/s),this.set(i,r,s,n),this}let f=Math.sqrt((S-M)*(S-M)+(m-b)*(m-b)+(h-p)*(h-p));return Math.abs(f)<.001&&(f=1),this.x=(S-M)/f,this.y=(m-b)/f,this.z=(h-p)/f,this.w=Math.acos((c+_+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ph.prototype.isVector4=!0;let yt=ph;class Hy extends Hr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new un({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new nh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Hy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sx extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vy extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Gl=class Gl{constructor(e,n,i,r,s,a,o,l,c,p,m,h,_,M,b,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,p,m,h,_,M,b,S)}set(e,n,i,r,s,a,o,l,c,p,m,h,_,M,b,S){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=p,d[10]=m,d[14]=h,d[3]=_,d[7]=M,d[11]=b,d[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const h=a*p,_=a*m,M=o*p,b=o*m;n[0]=l*p,n[4]=-l*m,n[8]=c,n[1]=_+M*c,n[5]=h-b*c,n[9]=-o*l,n[2]=b-h*c,n[6]=M+_*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*p,_=l*m,M=c*p,b=c*m;n[0]=h+b*o,n[4]=M*o-_,n[8]=a*c,n[1]=a*m,n[5]=a*p,n[9]=-o,n[2]=_*o-M,n[6]=b+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*p,_=l*m,M=c*p,b=c*m;n[0]=h-b*o,n[4]=-a*m,n[8]=M+_*o,n[1]=_+M*o,n[5]=a*p,n[9]=b-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*p,_=a*m,M=o*p,b=o*m;n[0]=l*p,n[4]=M*c-_,n[8]=h*c+b,n[1]=l*m,n[5]=b*c+h,n[9]=_*c-M,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,_=a*c,M=o*l,b=o*c;n[0]=l*p,n[4]=b-h*m,n[8]=M*m+_,n[1]=m,n[5]=a*p,n[9]=-o*p,n[2]=-c*p,n[6]=_*m+M,n[10]=h-b*m}else if(e.order==="XZY"){const h=a*l,_=a*c,M=o*l,b=o*c;n[0]=l*p,n[4]=-m,n[8]=c*p,n[1]=h*m+b,n[5]=a*p,n[9]=_*m-M,n[2]=M*m-_,n[6]=o*p,n[10]=b*m+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,jy)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Hi.crossVectors(i,yn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Hi.crossVectors(i,yn)),Hi.normalize(),Mo.crossVectors(yn,Hi),r[0]=Hi.x,r[4]=Mo.x,r[8]=yn.x,r[1]=Hi.y,r[5]=Mo.y,r[9]=yn.y,r[2]=Hi.z,r[6]=Mo.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],p=i[1],m=i[5],h=i[9],_=i[13],M=i[2],b=i[6],S=i[10],d=i[14],f=i[3],y=i[7],E=i[11],R=i[15],T=r[0],g=r[4],w=r[8],U=r[12],N=r[1],L=r[5],G=r[9],$=r[13],I=r[2],Y=r[6],Q=r[10],j=r[14],z=r[3],k=r[7],H=r[11],ee=r[15];return s[0]=a*T+o*N+l*I+c*z,s[4]=a*g+o*L+l*Y+c*k,s[8]=a*w+o*G+l*Q+c*H,s[12]=a*U+o*$+l*j+c*ee,s[1]=p*T+m*N+h*I+_*z,s[5]=p*g+m*L+h*Y+_*k,s[9]=p*w+m*G+h*Q+_*H,s[13]=p*U+m*$+h*j+_*ee,s[2]=M*T+b*N+S*I+d*z,s[6]=M*g+b*L+S*Y+d*k,s[10]=M*w+b*G+S*Q+d*H,s[14]=M*U+b*$+S*j+d*ee,s[3]=f*T+y*N+E*I+R*z,s[7]=f*g+y*L+E*Y+R*k,s[11]=f*w+y*G+E*Q+R*H,s[15]=f*U+y*$+E*j+R*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],p=e[2],m=e[6],h=e[10],_=e[14],M=e[3],b=e[7],S=e[11],d=e[15],f=l*_-c*h,y=o*_-c*m,E=o*h-l*m,R=a*_-c*p,T=a*h-l*p,g=a*m-o*p;return n*(b*f-S*y+d*E)-i*(M*f-S*R+d*T)+r*(M*y-b*R+d*g)-s*(M*E-b*T+S*g)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],p=e[10];return n*(a*p-o*c)-i*(s*p-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],m=e[9],h=e[10],_=e[11],M=e[12],b=e[13],S=e[14],d=e[15],f=n*o-i*a,y=n*l-r*a,E=n*c-s*a,R=i*l-r*o,T=i*c-s*o,g=r*c-s*l,w=p*b-m*M,U=p*S-h*M,N=p*d-_*M,L=m*S-h*b,G=m*d-_*b,$=h*d-_*S,I=f*$-y*G+E*L+R*N-T*U+g*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/I;return e[0]=(o*$-l*G+c*L)*Y,e[1]=(r*G-i*$-s*L)*Y,e[2]=(b*g-S*T+d*R)*Y,e[3]=(h*T-m*g-_*R)*Y,e[4]=(l*N-a*$-c*U)*Y,e[5]=(n*$-r*N+s*U)*Y,e[6]=(S*E-M*g-d*y)*Y,e[7]=(p*g-h*E+_*y)*Y,e[8]=(a*G-o*N+c*w)*Y,e[9]=(i*N-n*G-s*w)*Y,e[10]=(M*T-b*E+d*f)*Y,e[11]=(m*E-p*T-_*f)*Y,e[12]=(o*U-a*L-l*w)*Y,e[13]=(n*L-i*U+r*w)*Y,e[14]=(b*y-M*R-S*f)*Y,e[15]=(p*R-m*y+h*f)*Y,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,p=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+i,p*l-r*a,0,c*l-r*o,p*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,p=a+a,m=o+o,h=s*c,_=s*p,M=s*m,b=a*p,S=a*m,d=o*m,f=l*c,y=l*p,E=l*m,R=i.x,T=i.y,g=i.z;return r[0]=(1-(b+d))*R,r[1]=(_+E)*R,r[2]=(M-y)*R,r[3]=0,r[4]=(_-E)*T,r[5]=(1-(h+d))*T,r[6]=(S+f)*T,r[7]=0,r[8]=(M+y)*g,r[9]=(S-f)*g,r[10]=(1-(h+b))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),l=Xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xn.copy(this);const c=1/a,p=1/o,m=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=p,Xn.elements[5]*=p,Xn.elements[6]*=p,Xn.elements[8]*=m,Xn.elements[9]*=m,Xn.elements[10]*=m,n.setFromRotationMatrix(Xn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Qn,l=!1){const c=this.elements,p=2*s/(n-e),m=2*s/(i-r),h=(n+e)/(n-e),_=(i+r)/(i-r);let M,b;if(l)M=s/(a-s),b=a*s/(a-s);else if(o===Qn)M=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Wa)M=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=M,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Qn,l=!1){const c=this.elements,p=2/(n-e),m=2/(i-r),h=-(n+e)/(n-e),_=-(i+r)/(i-r);let M,b;if(l)M=1/(a-s),b=a/(a-s);else if(o===Qn)M=-2/(a-s),b=-(a+s)/(a-s);else if(o===Wa)M=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=M,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Gl.prototype.isMatrix4=!0;let vt=Gl;const Xr=new V,Xn=new vt,Wy=new V(0,0,0),jy=new V(1,1,1),Hi=new V,Mo=new V,yn=new V,Kp=new vt,Zp=new Hs;class Oi{constructor(e=0,n=0,i=0,r=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],p=r[9],m=r[2],h=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,_),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class yx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xy=0;const Jp=new V,qr=new Hs,vi=new vt,Eo=new V,Qs=new V,qy=new V,$y=new Hs,Qp=new V(1,0,0),em=new V(0,1,0),tm=new V(0,0,1),nm={type:"added"},Yy={type:"removed"},$r={type:"childadded",child:null},qc={type:"childremoved",child:null};class $t extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new V,n=new Oi,i=new Hs,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ke}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Eo.copy(e):Eo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Qs,Eo,this.up):vi.lookAt(Eo,Qs,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(vi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nm),$r.child=e,this.dispatchEvent($r),$r.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yy),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nm),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,$y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const m=l[c];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),p=a(e.images),m=a(e.shapes),h=a(e.skeletons),_=a(e.animations),M=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),h.length>0&&(i.skeletons=h),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=r,i;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$t.DEFAULT_UP=new V(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ca extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ky={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const S=n.getJointPose(b,i),d=this._getHandJoint(c,b);S!==null&&(d.matrix.fromArray(S.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=S.radius),d.visible=S!==null}const p=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=p.position.distanceTo(m.position),_=.02,M=.005;c.inputState.pinching&&h>_+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=_-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},bo={h:0,s:0,l:0};function Yc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Iy(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Yc(a,s,e+1/3),this.g=Yc(a,s,e),this.b=Yc(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=Mx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Je.workingToColorSpace(tn.copy(this),e),Math.round(Qe(tn.r*255,0,255))*65536+Math.round(Qe(tn.g*255,0,255))*256+Math.round(Qe(tn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=p<=.5?m/(a+o):m/(2-a-o),a){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Fn){Je.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(bo);const i=Hc(Vi.h,bo.h,n),r=Hc(Vi.s,bo.s,n),s=Hc(Vi.l,bo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new qe;qe.NAMES=Mx;class ih{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=n}clone(){return new ih(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zy extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qn=new V,_i=new V,Kc=new V,Si=new V,Yr=new V,Kr=new V,im=new V,Zc=new V,Jc=new V,Qc=new V,eu=new yt,tu=new yt,nu=new yt;class Jn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),_i.subVectors(i,n),Kc.subVectors(e,n);const a=qn.dot(qn),o=qn.dot(_i),l=qn.dot(Kc),c=_i.dot(_i),p=_i.dot(Kc),m=a*c-o*o;if(m===0)return s.set(0,0,0),null;const h=1/m,_=(c*l-o*p)*h,M=(a*p-o*l)*h;return s.set(1-_-M,M,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return eu.setScalar(0),tu.setScalar(0),nu.setScalar(0),eu.fromBufferAttribute(e,n),tu.fromBufferAttribute(e,i),nu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(eu,s.x),a.addScaledVector(tu,s.y),a.addScaledVector(nu,s.z),a}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),_i.subVectors(e,n),qn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),qn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Yr.subVectors(r,i),Kr.subVectors(s,i),Zc.subVectors(e,i);const l=Yr.dot(Zc),c=Kr.dot(Zc);if(l<=0&&c<=0)return n.copy(i);Jc.subVectors(e,r);const p=Yr.dot(Jc),m=Kr.dot(Jc);if(p>=0&&m<=p)return n.copy(r);const h=l*m-p*c;if(h<=0&&l>=0&&p<=0&&l-p>0)return a=l/(l-p),n.copy(i).addScaledVector(Yr,a);Qc.subVectors(e,s);const _=Yr.dot(Qc),M=Kr.dot(Qc);if(M>=0&&_<=M)return n.copy(s);const b=_*c-l*M;if(b<=0&&c>=0&&M<=0)return o=c/(c-M),n.copy(i).addScaledVector(Kr,o);const S=p*M-_*m;if(S<=0&&m-p>=0&&_-M>=0)return im.subVectors(s,r),o=(m-p)/(m-p+(_-M)),n.copy(r).addScaledVector(im,o);const d=1/(S+b+h);return a=b*d,o=h*d,n.copy(i).addScaledVector(Yr,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ja{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(s,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),To.subVectors(this.max,ea),Zr.subVectors(e.a,ea),Jr.subVectors(e.b,ea),Qr.subVectors(e.c,ea),Wi.subVectors(Jr,Zr),ji.subVectors(Qr,Jr),Sr.subVectors(Zr,Qr);let n=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-Sr.z,Sr.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,Sr.z,0,-Sr.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-Sr.y,Sr.x,0];return!iu(n,Zr,Jr,Qr,To)||(n=[1,0,0,0,1,0,0,0,1],!iu(n,Zr,Jr,Qr,To))?!1:(Ao.crossVectors(Wi,ji),n=[Ao.x,Ao.y,Ao.z],iu(n,Zr,Jr,Qr,To))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new V,new V,new V,new V,new V,new V,new V,new V],$n=new V,wo=new Ja,Zr=new V,Jr=new V,Qr=new V,Wi=new V,ji=new V,Sr=new V,ea=new V,To=new V,Ao=new V,yr=new V;function iu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){yr.fromArray(t,s);const o=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=n.dot(yr),p=i.dot(yr);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const Pt=new V,Co=new Xe;let Jy=0;class Pi extends Hr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ry,this.updateRanges=[],this.gpuType=ui,this.version=0,this._normalizationScale=e!==void 0?th(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Co.fromBufferAttribute(this,n),Co.applyMatrix3(e),this.setXY(n,Co.x,Co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Fy(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Oy(e,this.array)}}class Ex extends Pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class bx extends Pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rt extends Pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Qy=new Ja,ta=new V,ru=new V;class rc{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Qy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const n=ta.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(ru)),this.expandByPoint(ta.copy(e.center).sub(ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eM=0;const Un=new vt,su=new $t,es=new V,Mn=new Ja,na=new Ja,Gt=new V;class Sn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ny(e)?bx:Ex)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];na.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(Mn.min,na.min),Mn.expandByPoint(Gt),Gt.addVectors(Mn.max,na.max),Mn.expandByPoint(Gt)):(Mn.expandByPoint(na.min),Mn.expandByPoint(na.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)Gt.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Gt.add(es)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)o[U]=new V,l[U]=new V;const p=new V,m=new V,h=new V,_=new Xe,M=new Xe,b=new Xe,S=new V,d=new V;function f(U,N,L){c[U]=c[N]=c[L]=1,p.fromBufferAttribute(i,U),m.fromBufferAttribute(i,N),h.fromBufferAttribute(i,L),_.fromBufferAttribute(s,U),M.fromBufferAttribute(s,N),b.fromBufferAttribute(s,L),m.sub(p),h.sub(p),M.sub(_),b.sub(_);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(S.copy(m).multiplyScalar(b.y).addScaledVector(h,-M.y).multiplyScalar(G),d.copy(h).multiplyScalar(M.x).addScaledVector(m,-b.x).multiplyScalar(G),o[U].add(S),o[N].add(S),o[L].add(S),l[U].add(d),l[N].add(d),l[L].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,N=y.length;U<N;++U){const L=y[U],G=L.start,$=L.count;for(let I=G,Y=G+$;I<Y;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const E=new V,R=new V,T=new V,g=new V;function w(U){T.fromBufferAttribute(r,U),g.copy(T);const N=o[U];E.copy(N),E.sub(T.multiplyScalar(T.dot(N))).normalize(),R.crossVectors(g,N);const G=R.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,G)}for(let U=0,N=i.count;U<N;++U)c[U]&&w(U);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,_=i.count;h<_;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,p=new V,m=new V;if(e)for(let h=0,_=e.count;h<_;h+=3){const M=e.getX(h+0),b=e.getX(h+1),S=e.getX(h+2);r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,S),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),o.fromBufferAttribute(i,M),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,S),o.add(p),l.add(p),c.add(p),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(S,c.x,c.y,c.z)}else for(let h=0,_=n.count;h<_;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),i.setXYZ(h+0,p.x,p.y,p.z),i.setXYZ(h+1,p.x,p.y,p.z),i.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,m=o.normalized,h=new c.constructor(l.length*p);let _=0,M=0;for(let b=0,S=l.length;b<S;b++){o.isInterleavedBufferAttribute?_=l[b]*o.data.stride+o.offset:_=l[b]*p;for(let d=0;d<p;d++)h[M++]=c[_++]}return new Pi(h,p,m)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let p=0,m=c.length;p<m;p++){const h=c[p],_=e(h,i);l.push(_)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let m=0,h=c.length;m<h;m++){const _=c[m];p.push(_.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(n))}const s=e.morphAttributes;for(const c in s){const p=[],m=s[c];for(let h=0,_=m.length;h<_;h++)p.push(m[h].clone(n));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,p=a.length;c<p;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const au=new V,tM=new V,nM=new ke;class Yi{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=au.subVectors(i,n).cross(tM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(au),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nM.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let iM=0;class Vr extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Sa,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Q0,this.blendDst=ex,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ey,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zc,this.stencilZFail=zc,this.stencilZPass=zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new V,ou=new V,Ro=new V,No=new V;class wx{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ou.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),No.copy(this.origin).sub(ou);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ro),o=No.dot(this.direction),l=-No.dot(Ro),c=No.lengthSq(),p=Math.abs(1-a*a);let m,h,_,M;if(p>0)if(m=a*l-o,h=a*o-l,M=s*p,m>=0)if(h>=-M)if(h<=M){const b=1/p;m*=b,h*=b,_=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=s,m=Math.max(0,-(a*h+o)),_=-m*m+h*(h+2*l)+c;else h=-s,m=Math.max(0,-(a*h+o)),_=-m*m+h*(h+2*l)+c;else h<=-M?(m=Math.max(0,-(-a*s+o)),h=m>0?-s:Math.min(Math.max(-s,-l),s),_=-m*m+h*(h+2*l)+c):h<=M?(m=0,h=Math.min(Math.max(-s,-l),s),_=h*(h+2*l)+c):(m=Math.max(0,-(a*s+o)),h=m>0?s:Math.min(Math.max(-s,-l),s),_=-m*m+h*(h+2*l)+c);else h=a>0?-s:s,m=Math.max(0,-(a*h+o)),_=-m*m+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(ou).addScaledVector(Ro,h),_}intersectSphere(e,n){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),p>=0?(s=(e.min.y-h.y)*p,a=(e.max.y-h.y)*p):(s=(e.max.y-h.y)*p,a=(e.min.y-h.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-h.z)*m,l=(e.max.z-h.z)*m):(o=(e.max.z-h.z)*m,l=(e.min.z-h.z)*m),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,p=o.z,m=e.x-a.x,h=e.y-a.y,_=e.z-a.z,M=n.x-a.x,b=n.y-a.y,S=n.z-a.z,d=i.x-a.x,f=i.y-a.y,y=i.z-a.z,E=Math.abs(l),R=Math.abs(c),T=Math.abs(p);let g,w,U,N,L,G,$,I,Y,Q,j,z;if(E>=R&&E>=T?(U=l,G=m,Y=M,z=d,l>=0?(g=c,w=p,N=h,L=_,$=b,I=S,Q=f,j=y):(g=p,w=c,N=_,L=h,$=S,I=b,Q=y,j=f)):R>=T?(U=c,G=h,Y=b,z=f,c>=0?(g=p,w=l,N=_,L=m,$=S,I=M,Q=y,j=d):(g=l,w=p,N=m,L=_,$=M,I=S,Q=d,j=y)):(U=p,G=_,Y=S,z=y,p>=0?(g=l,w=c,N=m,L=h,$=M,I=b,Q=d,j=f):(g=c,w=l,N=h,L=m,$=b,I=M,Q=f,j=d)),U===0)return null;const k=g/U,H=w/U,ee=1/U,ce=N-k*G,Re=L-H*G,J=$-k*Y,xe=I-H*Y,Me=Q-k*z,Ne=j-H*z,_e=Me*xe-Ne*J,Fe=ce*Ne-Re*Me,dt=J*Re-xe*ce;if(r){if(_e<0||Fe<0||dt<0)return null}else if((_e<0||Fe<0||dt<0)&&(_e>0||Fe>0||dt>0))return null;const De=_e+Fe+dt;if(De===0)return null;const nt=ee*(_e*G+Fe*Y+dt*z);return(De>0?nt<0:nt>0)?null:this.at(nt/De,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rs extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rm=new vt,Mr=new wx,Po=new rc,sm=new V,Lo=new V,Do=new V,Io=new V,lu=new V,Uo=new V,am=new V,Fo=new V;class hn extends $t{constructor(e=new Sn,n=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=o[l],m=s[l];p!==0&&(lu.fromBufferAttribute(m,e),a?Uo.addScaledVector(lu,p):Uo.addScaledVector(lu.sub(n),p))}n.add(Uo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Po.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Po,sm)===null||Mr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,h=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,b=h.length;M<b;M++){const S=h[M],d=a[S.materialIndex],f=Math.max(S.start,_.start),y=Math.min(o.count,Math.min(S.start+S.count,_.start+_.count));for(let E=f,R=y;E<R;E+=3){const T=o.getX(E),g=o.getX(E+1),w=o.getX(E+2);r=Oo(this,d,e,i,c,p,m,T,g,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,_.start),b=Math.min(o.count,_.start+_.count);for(let S=M,d=b;S<d;S+=3){const f=o.getX(S),y=o.getX(S+1),E=o.getX(S+2);r=Oo(this,a,e,i,c,p,m,f,y,E),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let M=0,b=h.length;M<b;M++){const S=h[M],d=a[S.materialIndex],f=Math.max(S.start,_.start),y=Math.min(l.count,Math.min(S.start+S.count,_.start+_.count));for(let E=f,R=y;E<R;E+=3){const T=E,g=E+1,w=E+2;r=Oo(this,d,e,i,c,p,m,T,g,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,_.start),b=Math.min(l.count,_.start+_.count);for(let S=M,d=b;S<d;S+=3){const f=S,y=S+1,E=S+2;r=Oo(this,a,e,i,c,p,m,f,y,E),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function rM(t,e,n,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Or,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fo);return c<n.near||c>n.far?null:{distance:c,point:Fo.clone(),object:t}}function Oo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Lo),t.getVertexPosition(l,Do),t.getVertexPosition(c,Io);const p=rM(t,e,n,i,Lo,Do,Io,am);if(p){const m=new V;Jn.getBarycoord(am,Lo,Do,Io,m),r&&(p.uv=Jn.getInterpolatedAttribute(r,o,l,c,m,new Xe)),s&&(p.uv1=Jn.getInterpolatedAttribute(s,o,l,c,m,new Xe)),a&&(p.normal=Jn.getInterpolatedAttribute(a,o,l,c,m,new V),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new V,materialIndex:0};Jn.getNormal(Lo,Do,Io,h.normal),p.face=h,p.barycoord=m}return p}class sM extends un{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Xt,p=Xt,m,h){super(null,a,o,l,c,p,r,s,m,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Er=new rc,aM=new Xe(.5,.5),ko=new V;class ja{constructor(e=new Yi,n=new Yi,i=new Yi,r=new Yi,s=new Yi,a=new Yi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],p=s[4],m=s[5],h=s[6],_=s[7],M=s[8],b=s[9],S=s[10],d=s[11],f=s[12],y=s[13],E=s[14],R=s[15];if(r[0].setComponents(c-a,_-p,d-M,R-f).normalize(),r[1].setComponents(c+a,_+p,d+M,R+f).normalize(),r[2].setComponents(c+o,_+m,d+b,R+y).normalize(),r[3].setComponents(c-o,_-m,d-b,R-y).normalize(),i)r[4].setComponents(l,h,S,E).normalize(),r[5].setComponents(c-l,_-h,d-S,R-E).normalize();else if(r[4].setComponents(c-l,_-h,d-S,R-E).normalize(),n===Qn)r[5].setComponents(c+l,_+h,d+S,R+E).normalize();else if(n===Wa)r[5].setComponents(l,h,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const n=aM.distanceTo(e.center);return Er.radius=.7071067811865476+n,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ko.x=r.normal.x>0?e.max.x:e.min.x,ko.y=r.normal.y>0?e.max.y:e.min.y,ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const om=new vt;class rh{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];om.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new ja),i[r].setFromProjectionMatrix(om,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new ja),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new rh().copy(this)}}class Xd extends Vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lm=new vt,qd=new wx,Bo=new rc,zo=new V;class cm extends $t{constructor(e=new Sn,n=new Xd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=s,e.ray.intersectsSphere(Bo)===!1)return;lm.copy(r).invert(),qd.copy(e.ray).applyMatrix4(lm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,m=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let M=h,b=_;M<b;M++){const S=c.getX(M);zo.fromBufferAttribute(m,S),um(zo,S,l,r,e,n,this)}}else{const h=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let M=h,b=_;M<b;M++)zo.fromBufferAttribute(m,M),um(zo,M,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function um(t,e,n,i,r,s,a){const o=qd.distanceSqToPoint(t);if(o<n){const l=new V;qd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Tx extends un{constructor(e=[],n=Us,i,r,s,a,o,l,c,p){super(e,n,i,r,s,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Os extends un{constructor(e,n,i=mi,r,s,a,o=Xt,l=Xt,c,p=hr,m=1){if(p!==hr&&p!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:m};super(h,r,s,a,o,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Ax extends Os{constructor(e,n=mi,i=Us,r,s,a=Xt,o=Xt,l,c=hr){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,n,i,r,s,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cx extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qa extends Sn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],p=[],m=[];let h=0,_=0;M("z","y","x",-1,-1,i,n,e,a,s,0),M("z","y","x",1,-1,i,n,-e,a,s,1),M("x","z","y",1,1,e,i,n,r,a,2),M("x","z","y",1,-1,e,i,-n,r,a,3),M("x","y","z",1,-1,e,n,i,r,s,4),M("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(p,3)),this.setAttribute("uv",new Rt(m,2));function M(b,S,d,f,y,E,R,T,g,w,U){const N=E/g,L=R/w,G=E/2,$=R/2,I=T/2,Y=g+1,Q=w+1;let j=0,z=0;const k=new V;for(let H=0;H<Q;H++){const ee=H*L-$;for(let ce=0;ce<Y;ce++){const Re=ce*N-G;k[b]=Re*f,k[S]=ee*y,k[d]=I,c.push(k.x,k.y,k.z),k[b]=0,k[S]=0,k[d]=T>0?1:-1,p.push(k.x,k.y,k.z),m.push(ce/g),m.push(1-H/w),j+=1}}for(let H=0;H<w;H++)for(let ee=0;ee<g;ee++){const ce=h+ee+Y*H,Re=h+ee+Y*(H+1),J=h+(ee+1)+Y*(H+1),xe=h+(ee+1)+Y*H;l.push(ce,Re,xe),l.push(Re,J,xe),z+=6}o.addGroup(_,z,U),_+=z,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sh extends Sn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),p(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(f){const y=new V,E=new V,R=new V;for(let T=0;T<n.length;T+=3)_(n[T+0],y),_(n[T+1],E),_(n[T+2],R),l(y,E,R,f)}function l(f,y,E,R){const T=R+1,g=[];for(let w=0;w<=T;w++){g[w]=[];const U=f.clone().lerp(E,w/T),N=y.clone().lerp(E,w/T),L=T-w;for(let G=0;G<=L;G++)G===0&&w===T?g[w][G]=U:g[w][G]=U.clone().lerp(N,G/L)}for(let w=0;w<T;w++)for(let U=0;U<2*(T-w)-1;U++){const N=Math.floor(U/2);U%2===0?(h(g[w][N+1]),h(g[w+1][N]),h(g[w][N])):(h(g[w][N+1]),h(g[w+1][N+1]),h(g[w+1][N]))}}function c(f){const y=new V;for(let E=0;E<s.length;E+=3)y.x=s[E+0],y.y=s[E+1],y.z=s[E+2],y.normalize().multiplyScalar(f),s[E+0]=y.x,s[E+1]=y.y,s[E+2]=y.z}function p(){const f=new V;for(let y=0;y<s.length;y+=3){f.x=s[y+0],f.y=s[y+1],f.z=s[y+2];const E=S(f)/2/Math.PI+.5,R=d(f)/Math.PI+.5;a.push(E,1-R)}M(),m()}function m(){for(let f=0;f<a.length;f+=6){const y=a[f+0],E=a[f+2],R=a[f+4],T=Math.max(y,E,R),g=Math.min(y,E,R);T>.9&&g<.1&&(y<.2&&(a[f+0]+=1),E<.2&&(a[f+2]+=1),R<.2&&(a[f+4]+=1))}}function h(f){s.push(f.x,f.y,f.z)}function _(f,y){const E=f*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function M(){const f=new V,y=new V,E=new V,R=new V,T=new Xe,g=new Xe,w=new Xe;for(let U=0,N=0;U<s.length;U+=9,N+=6){f.set(s[U+0],s[U+1],s[U+2]),y.set(s[U+3],s[U+4],s[U+5]),E.set(s[U+6],s[U+7],s[U+8]),T.set(a[N+0],a[N+1]),g.set(a[N+2],a[N+3]),w.set(a[N+4],a[N+5]),R.copy(f).add(y).add(E).divideScalar(3);const L=S(R);b(T,N+0,f,L),b(g,N+2,y,L),b(w,N+4,E,L)}}function b(f,y,E,R){R<0&&f.x===1&&(a[y]=f.x-1),E.x===0&&E.z===0&&(a[y]=R/2/Math.PI+.5)}function S(f){return Math.atan2(f.z,-f.x)}function d(f){return Math.atan2(-f.y,Math.sqrt(f.x*f.x+f.z*f.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.vertices,e.indices,e.radius,e.detail)}}class ah extends sh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ah(e.radius,e.detail)}}class sc extends Sn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,p=l+1,m=e/o,h=n/l,_=[],M=[],b=[],S=[];for(let d=0;d<p;d++){const f=d*h-a;for(let y=0;y<c;y++){const E=y*m-s;M.push(E,-f,0),b.push(0,0,1),S.push(y/o),S.push(1-d/l)}}for(let d=0;d<l;d++)for(let f=0;f<o;f++){const y=f+c*d,E=f+c*(d+1),R=f+1+c*(d+1),T=f+1+c*d;_.push(y,E,T),_.push(E,R,T)}this.setIndex(_),this.setAttribute("position",new Rt(M,3)),this.setAttribute("normal",new Rt(b,3)),this.setAttribute("uv",new Rt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class oh extends Sn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],p=[];let m=e;const h=(n-e)/r,_=new V,M=new Xe;for(let b=0;b<=r;b++){for(let S=0;S<=i;S++){const d=s+S/i*a;_.x=m*Math.cos(d),_.y=m*Math.sin(d),l.push(_.x,_.y,_.z),c.push(0,0,1),M.x=(_.x/n+1)/2,M.y=(_.y/n+1)/2,p.push(M.x,M.y)}m+=h}for(let b=0;b<r;b++){const S=b*(i+1);for(let d=0;d<i;d++){const f=d+S,y=f,E=f+i+1,R=f+i+2,T=f+1;o.push(y,E,T),o.push(E,R,T)}}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xs extends Sn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const p=[],m=new V,h=new V,_=[],M=[],b=[],S=[];for(let d=0;d<=i;d++){const f=[],y=d/i,E=a+y*o,R=e*Math.cos(E),T=Math.sqrt(e*e-R*R);let g=0;d===0&&a===0?g=.5/n:d===i&&l===Math.PI&&(g=-.5/n);for(let w=0;w<=n;w++){const U=w/n,N=r+U*s;m.x=-T*Math.cos(N),m.y=R,m.z=T*Math.sin(N),M.push(m.x,m.y,m.z),h.copy(m).normalize(),b.push(h.x,h.y,h.z),S.push(U+g,1-y),f.push(c++)}p.push(f)}for(let d=0;d<i;d++)for(let f=0;f<n;f++){const y=p[d][f+1],E=p[d][f],R=p[d+1][f],T=p[d+1][f+1];(d!==0||a>0)&&_.push(y,E,T),(d!==i-1||l<Math.PI)&&_.push(E,R,T)}this.setIndex(_),this.setAttribute("position",new Rt(M,3)),this.setAttribute("normal",new Rt(b,3)),this.setAttribute("uv",new Rt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lh extends Sn{constructor(e=1,n=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],p=[],m=new V,h=new V,_=new V,M=new V,b=new V,S=new V,d=new V;for(let y=0;y<=i;++y){const E=y/i*s*Math.PI*2;f(E,s,a,e,_),f(E+.01,s,a,e,M),S.subVectors(M,_),d.addVectors(M,_),b.crossVectors(S,d),d.crossVectors(b,S),b.normalize(),d.normalize();for(let R=0;R<=r;++R){const T=R/r*Math.PI*2,g=-n*Math.cos(T),w=n*Math.sin(T);m.x=_.x+(g*d.x+w*b.x),m.y=_.y+(g*d.y+w*b.y),m.z=_.z+(g*d.z+w*b.z),l.push(m.x,m.y,m.z),h.subVectors(m,_).normalize(),c.push(h.x,h.y,h.z),p.push(y/i),p.push(R/r)}}for(let y=1;y<=i;y++)for(let E=1;E<=r;E++){const R=(r+1)*(y-1)+(E-1),T=(r+1)*y+(E-1),g=(r+1)*y+E,w=(r+1)*(y-1)+E;o.push(R,T,w),o.push(T,g,w)}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(p,2));function f(y,E,R,T,g){const w=Math.cos(y),U=Math.sin(y),N=R/E*y,L=Math.cos(N);g.x=T*(2+L)*.5*w,g.y=T*(2+L)*U*.5,g.z=T*Math.sin(N)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(dm(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(dm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function dm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function oM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Rx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const lM={clone:ks,merge:an};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=oM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class dM extends Br{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fM extends Vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hM extends Vr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=$f,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pM extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mM extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ch extends $t{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const cu=new vt,fm=new V,hm=new V;class Nx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;fm.setFromMatrixPosition(e.matrixWorld),n.position.copy(fm),hm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(cu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Wa||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Go=new V,Ho=new Hs,ri=new V;class Px extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Go,Ho,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Ho,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Go,Ho,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Ho,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new V,pm=new Xe,mm=new Xe;class Bn extends Px{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class gM extends Nx{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0}}class xM extends ch{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Lx extends Px{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class vM extends Nx{constructor(){super(new Lx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _M extends ch{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new vM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class SM extends ch{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ts=-90,ns=1;class $d extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new Bn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new Bn(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new Bn(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new Bn(ts,ns,e,n);l.layers=this.layers,this.add(l);const c=new Bn(ts,ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,p]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=b,e.setRenderTarget(i,5,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(m,h,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class yM extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class MM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function gm(t,e,n,i){const r=EM(i);switch(n){case hx:return t*e;case mx:return t*e/r.components*r.byteLength;case Jf:return t*e/r.components*r.byteLength;case kr:return t*e*2/r.components*r.byteLength;case Qf:return t*e*2/r.components*r.byteLength;case px:return t*e*3/r.components*r.byteLength;case di:return t*e*4/r.components*r.byteLength;case eh:return t*e*4/r.components*r.byteLength;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case al:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gd:case vd:return Math.max(t,16)*Math.max(e,8)/4;case md:case xd:return Math.max(t,8)*Math.max(e,8)/2;case _d:case Sd:case Md:case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yd:case Il:case bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Bd:case zd:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ul:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function EM(t){switch(t){case bn:case cx:return{byteLength:1,components:1};case Va:case ux:case gi:return{byteLength:2,components:1};case Kf:case Zf:return{byteLength:2,components:4};case mi:case Yf:case ui:return{byteLength:4,components:1};case dx:case fx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qf}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dx(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function bM(t){const e=new WeakMap;function n(o,l){const c=o.array,p=o.usage,m=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,p),o.onUploadCallback();let _;if(c instanceof Float32Array)_=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=t.HALF_FLOAT:_=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=t.SHORT;else if(c instanceof Uint32Array)_=t.UNSIGNED_INT;else if(c instanceof Int32Array)_=t.INT;else if(c instanceof Int8Array)_=t.BYTE;else if(c instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const p=l.array,m=l.updateRanges;if(t.bindBuffer(c,o),m.length===0)t.bufferSubData(c,0,p);else{m.sort((_,M)=>_.start-M.start);let h=0;for(let _=1;_<m.length;_++){const M=m[h],b=m[_];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++h,m[h]=b)}m.length=h+1;for(let _=0,M=m.length;_<M;_++){const b=m[_];t.bufferSubData(c,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e1="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,f1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,g1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,x1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,A1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,I1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,G1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_E=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:wM,alphahash_pars_fragment:TM,alphamap_fragment:AM,alphamap_pars_fragment:CM,alphatest_fragment:RM,alphatest_pars_fragment:NM,aomap_fragment:PM,aomap_pars_fragment:LM,batching_pars_vertex:DM,batching_vertex:IM,begin_vertex:UM,beginnormal_vertex:FM,bsdfs:OM,iridescence_fragment:kM,bumpmap_pars_fragment:BM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:HM,clipping_planes_vertex:VM,color_fragment:WM,color_pars_fragment:jM,color_pars_vertex:XM,color_vertex:qM,common:$M,defaultnormal_vertex:YM,displacementmap_pars_vertex:KM,displacementmap_vertex:ZM,emissivemap_fragment:JM,emissivemap_pars_fragment:QM,colorspace_fragment:e1,colorspace_pars_fragment:t1,envmap_fragment:n1,envmap_common_pars_fragment:i1,envmap_pars_fragment:r1,envmap_pars_vertex:s1,envmap_physical_pars_fragment:g1,envmap_vertex:a1,fog_vertex:o1,fog_pars_vertex:l1,fog_fragment:c1,fog_pars_fragment:u1,gradientmap_pars_fragment:d1,lightmap_pars_fragment:f1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:p1,lights_pars_begin:m1,lights_toon_fragment:x1,lights_toon_pars_fragment:v1,lights_phong_fragment:_1,lights_phong_pars_fragment:S1,lights_physical_fragment:y1,lights_physical_pars_fragment:M1,lights_fragment_begin:E1,lights_fragment_maps:b1,lights_fragment_end:w1,lightprobes_pars_fragment:T1,logdepthbuf_fragment:A1,logdepthbuf_pars_fragment:C1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:N1,map_fragment:P1,map_pars_fragment:L1,map_particle_fragment:D1,map_particle_pars_fragment:I1,metalnessmap_fragment:U1,metalnessmap_pars_fragment:F1,morphinstance_vertex:O1,morphcolor_vertex:k1,morphnormal_vertex:B1,morphtarget_pars_vertex:z1,morphtarget_vertex:G1,normal_fragment_begin:H1,normal_fragment_maps:V1,normal_pars_fragment:W1,normal_pars_vertex:j1,normal_vertex:X1,normalmap_pars_fragment:q1,clearcoat_normal_fragment_begin:$1,clearcoat_normal_fragment_maps:Y1,clearcoat_pars_fragment:K1,iridescence_pars_fragment:Z1,opaque_fragment:J1,packing:Q1,premultiplied_alpha_fragment:eE,project_vertex:tE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:rE,roughnessmap_pars_fragment:sE,shadowmap_pars_fragment:aE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:dE,skinning_vertex:fE,skinnormal_vertex:hE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:xE,transmission_fragment:vE,transmission_pars_fragment:_E,uv_pars_fragment:SE,uv_pars_vertex:yE,uv_vertex:ME,worldpos_vertex:EE,background_vert:bE,background_frag:wE,backgroundCube_vert:TE,backgroundCube_frag:AE,cube_vert:CE,cube_frag:RE,depth_vert:NE,depth_frag:PE,distance_vert:LE,distance_frag:DE,equirect_vert:IE,equirect_frag:UE,linedashed_vert:FE,linedashed_frag:OE,meshbasic_vert:kE,meshbasic_frag:BE,meshlambert_vert:zE,meshlambert_frag:GE,meshmatcap_vert:HE,meshmatcap_frag:VE,meshnormal_vert:WE,meshnormal_frag:jE,meshphong_vert:XE,meshphong_frag:qE,meshphysical_vert:$E,meshphysical_frag:YE,meshtoon_vert:KE,meshtoon_frag:ZE,points_vert:JE,points_frag:QE,shadow_vert:eb,shadow_frag:tb,sprite_vert:nb,sprite_frag:ib},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},oi={basic:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:an([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:an([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:an([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:an([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:an([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:an([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:an([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:an([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};oi.physical={uniforms:an([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Vo={r:0,b:0,g:0},rb=new vt,Ix=new ke;Ix.set(-1,0,0,0,1,0,0,0,1);function sb(t,e,n,i,r,s){const a=new qe(0);let o=r===!0?0:1,l,c,p=null,m=0,h=null;function _(f){let y=f.isScene===!0?f.background:null;if(y&&y.isTexture){const E=f.backgroundBlurriness>0;y=e.get(y,E)}return y}function M(f){let y=!1;const E=_(f);E===null?S(a,o):E&&E.isColor&&(S(E,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(f,y){const E=_(y);E&&E.isCubeTexture?(c===void 0&&(c=new hn(new Qa(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:ks(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rb.makeRotationFromEuler(y.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ix),c.material.toneMapped=Je.getTransfer(E.colorSpace)!==at,(p!==E||m!==E.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,p=E,m=E.version,h=t.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new hn(new sc(2,2),new Br({name:"BackgroundMaterial",uniforms:ks(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||m!==E.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,p=E,m=E.version,h=t.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function S(f,y){f.getRGB(Vo,Rx(t)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,y,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(f,y=1){a.set(f),o=y,S(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(f){o=f,S(a,o)},render:M,addToRenderList:b,dispose:d}}function ab(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(L,G,$,I,Y){let Q=!1;const j=m(L,I,$,G);s!==j&&(s=j,c(s.object)),Q=_(L,I,$,Y),Q&&M(L,I,$,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,E(L,G,$,I),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function p(L){return t.deleteVertexArray(L)}function m(L,G,$,I){const Y=I.wireframe===!0;let Q=i[G.id];Q===void 0&&(Q={},i[G.id]=Q);const j=L.isInstancedMesh===!0?L.id:0;let z=Q[j];z===void 0&&(z={},Q[j]=z);let k=z[$.id];k===void 0&&(k={},z[$.id]=k);let H=k[Y];return H===void 0&&(H=h(l()),k[Y]=H),H}function h(L){const G=[],$=[],I=[];for(let Y=0;Y<n;Y++)G[Y]=0,$[Y]=0,I[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:I,object:L,attributes:{},index:null}}function _(L,G,$,I){const Y=s.attributes,Q=G.attributes;let j=0;const z=$.getAttributes();for(const k in z)if(z[k].location>=0){const ee=Y[k];let ce=Q[k];if(ce===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;j++}return s.attributesNum!==j||s.index!==I}function M(L,G,$,I){const Y={},Q=G.attributes;let j=0;const z=$.getAttributes();for(const k in z)if(z[k].location>=0){let ee=Q[k];ee===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),Y[k]=ce,j++}s.attributes=Y,s.attributesNum=j,s.index=I}function b(){const L=s.newAttributes;for(let G=0,$=L.length;G<$;G++)L[G]=0}function S(L){d(L,0)}function d(L,G){const $=s.newAttributes,I=s.enabledAttributes,Y=s.attributeDivisors;$[L]=1,I[L]===0&&(t.enableVertexAttribArray(L),I[L]=1),Y[L]!==G&&(t.vertexAttribDivisor(L,G),Y[L]=G)}function f(){const L=s.newAttributes,G=s.enabledAttributes;for(let $=0,I=G.length;$<I;$++)G[$]!==L[$]&&(t.disableVertexAttribArray($),G[$]=0)}function y(L,G,$,I,Y,Q,j){j===!0?t.vertexAttribIPointer(L,G,$,Y,Q):t.vertexAttribPointer(L,G,$,I,Y,Q)}function E(L,G,$,I){b();const Y=I.attributes,Q=$.getAttributes(),j=G.defaultAttributeValues;for(const z in Q){const k=Q[z];if(k.location>=0){let H=Y[z];if(H===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){const ee=H.normalized,ce=H.itemSize,Re=e.get(H);if(Re===void 0)continue;const J=Re.buffer,xe=Re.type,Me=Re.bytesPerElement,Ne=xe===t.INT||xe===t.UNSIGNED_INT||H.gpuType===Yf;if(H.isInterleavedBufferAttribute){const _e=H.data,Fe=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,dt=H.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let De=0;De<k.locationSize;De++)d(k.location+De,_e.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let De=0;De<k.locationSize;De++)S(k.location+De);t.bindBuffer(t.ARRAY_BUFFER,J);for(let De=0;De<k.locationSize;De++)y(k.location+De,ce/k.locationSize,xe,ee,Fe*Me,(dt+ce/k.locationSize*De)*Me,Ne)}else{if(H.isInstancedBufferAttribute){for(let _e=0;_e<k.locationSize;_e++)d(k.location+_e,H.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let _e=0;_e<k.locationSize;_e++)S(k.location+_e);t.bindBuffer(t.ARRAY_BUFFER,J);for(let _e=0;_e<k.locationSize;_e++)y(k.location+_e,ce/k.locationSize,xe,ee,ce*Me,ce/k.locationSize*_e*Me,Ne)}}else if(j!==void 0){const ee=j[z];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(k.location,ee);break;case 3:t.vertexAttrib3fv(k.location,ee);break;case 4:t.vertexAttrib4fv(k.location,ee);break;default:t.vertexAttrib1fv(k.location,ee)}}}}f()}function R(){U();for(const L in i){const G=i[L];for(const $ in G){const I=G[$];for(const Y in I){const Q=I[Y];for(const j in Q)p(Q[j].object),delete Q[j];delete I[Y]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const G=i[L.id];for(const $ in G){const I=G[$];for(const Y in I){const Q=I[Y];for(const j in Q)p(Q[j].object),delete Q[j];delete I[Y]}}delete i[L.id]}function g(L){for(const G in i){const $=i[G];for(const I in $){const Y=$[I];if(Y[L.id]===void 0)continue;const Q=Y[L.id];for(const j in Q)p(Q[j].object),delete Q[j];delete Y[L.id]}}}function w(L){for(const G in i){const $=i[G],I=L.isInstancedMesh===!0?L.id:0,Y=$[I];if(Y!==void 0){for(const Q in Y){const j=Y[Q];for(const z in j)p(j[z].object),delete j[z];delete Y[Q]}delete $[I],Object.keys($).length===0&&delete i[G]}}}function U(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:S,disableUnusedAttributes:f}}function ob(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,p){p!==0&&(t.drawArraysInstanced(i,l,c,p),n.update(c,i,p))}function o(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let h=0;for(let _=0;_<p;_++)h+=c[_];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function lb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==di&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const w=g===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==bn&&g!==ui&&!w&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const p=l(c);p!==c&&(Ue("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.logarithmicDepthBuffer===!0&&m===!1;n.reversedDepthBuffer===!0&&m===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&m===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const _=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),S=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:d,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:E,maxSamples:R,samples:T}}function cb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Yi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const _=m.length!==0||h||i!==0||r;return r=h,i=m.length,_},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,h){n=p(m,h,0)},this.setState=function(m,h,_){const M=m.clippingPlanes,b=m.clipIntersection,S=m.clipShadows,d=t.get(m);if(!r||M===null||M.length===0||s&&!S)s?p(null):c();else{const f=s?0:i,y=f*4;let E=d.clippingState||null;l.value=E,E=p(M,h,y,_);for(let R=0;R!==y;++R)E[R]=n[R];d.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=f}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,h,_,M){const b=m!==null?m.length:0;let S=null;if(b!==0){if(S=l.value,M!==!0||S===null){const d=_+b*4,f=h.matrixWorldInverse;o.getNormalMatrix(f),(S===null||S.length<d)&&(S=new Float32Array(d));for(let y=0,E=_;y!==b;++y,E+=4)a.copy(m[y]).applyMatrix4(f,o),a.normal.toArray(S,E),S[E+3]=a.constant}l.value=S,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}class uh extends pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qa(5,5,5),s=new Br({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:ws});s.uniforms.tEquirect.value=n;const a=new hn(r,s),o=n.minFilter;return n.minFilter===tr&&(n.minFilter=gn),new $d(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const xm=256,ub=3,db=20,Ux=256,Fx=16,fb=3,hb=new V,pb=new qe;class zl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $d(1,10,null),this._boxMesh=new hn(new Qa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=hb}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),p=this._getSourceTarget(!0);n>0&&(p.texture.mipmapsAutoUpdate=!1);const m=l.autoClear,h=l.autoClearColor,_=l.autoClearDepth,M=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(pb));const S=new $d(i,r,p);return S.position.copy(o),S.update(l,e),l.autoClear=m,l.autoClearColor=h,l.autoClearDepth=_,l.autoClearStencil=M,e.background=b,n>0&&(p.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(xm,Uy(e))}_fromTexture(e,n){e.mapping===Us||e.mapping===Ha?this._setSize(e.image.length===0?xm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=vm(e,!1,!1),i=Math.log2(e)-ub;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=vm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Us||e.mapping===Ha?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_m()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mb(),this._integrationMaterial=gb());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Fx);for(let a=0;a<=i;a++){const o=zl.lodToRoughness(a,i);if(a>i-fb)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Ux*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=xb());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function vm(t,e,n){return new uh(t,{minFilter:tr,generateMipmaps:e,type:gi,colorSpace:Ol,depthBuffer:n})}function eo(t,e,n){return new Br({name:t,uniforms:e,vertexShader:je.cube_vert,fragmentShader:n,side:cn,blending:ws,depthTest:!1,depthWrite:!1})}function mb(){return eo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ux}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gb(){return eo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xb(){return eo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${db}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _m(){return eo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Sm(){return eo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,_=!1){return h==null?null:_?a(h):s(h)}function s(h){if(h&&h.isTexture){const _=h.mapping;if(_===Oc||_===kc)if(e.has(h)){const M=e.get(h).texture;return o(M,h.mapping)}else{const M=h.image;if(M&&M.height>0){const b=new uh(M.height);return b.fromEquirectangularTexture(t,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const _=h.mapping,M=_===Oc||_===kc,b=_===Us||_===Ha;if(M||b){let S=n.get(h);const d=S!==void 0?S.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new zl(t)),S=M?i.fromEquirectangular(h,S):i.fromCubemap(h,S),S.texture.pmremVersion=h.pmremVersion,n.set(h,S),S.texture;if(S!==void 0)return S.texture;{const f=h.image;return M&&f&&f.height>0||b&&f&&l(f)?(i===null&&(i=new zl(t)),S=M?i.fromEquirectangular(h):i.fromCubemap(h),S.texture.pmremVersion=h.pmremVersion,n.set(h,S),h.addEventListener("dispose",p),S.texture):null}}}return h}function o(h,_){return _===Oc?h.mapping=Us:_===kc&&(h.mapping=Ha),h}function l(h){let _=0;const M=6;for(let b=0;b<M;b++)h[b]!==void 0&&_++;return _===M}function c(h){const _=h.target;_.removeEventListener("dispose",c);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(h){const _=h.target;_.removeEventListener("dispose",p);const M=n.get(_);M!==void 0&&(n.delete(_),M.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function _b(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ll("WebGLRenderer: "+i+" extension not supported."),r}}}function Sb(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(M=>delete r[M]);function o(M){l(M.target)}function l(M){M.index!==null&&e.remove(M.index);for(const S in M.attributes)e.remove(M.attributes[S]);M.removeEventListener("dispose",o),delete r[M.id],a.unregister(M);const b=s.get(M);b&&(e.remove(b),s.delete(M)),i.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,n.memory.geometries--}function c(M,b){return r[b.id]!==void 0||(b.addEventListener("dispose",o),r[b.id]=new WeakRef(b),a.register(b,b.id,b),n.memory.geometries++),b}function p(M){const b=M.attributes;for(const S in b)e.update(b[S],t.ARRAY_BUFFER)}function m(M){const b=M.index,S=M.attributes.position;let d=0;if(S===void 0)return;const f=b!==null?b.array.length:S.array.length/3-1,y=S.count>=65535?bx:Ex,E=new y(Math.ceil(f/3)*6,1),R=E.array;if(b!==null){const g=b.array;d=b.version;for(let w=0,U=0;w<f;w+=3){const N=g[w+0],L=g[w+1],G=g[w+2];R[U++]=N,R[U++]=L,R[U++]=L,R[U++]=G,R[U++]=G,R[U++]=N}}else{d=S.version;for(let g=0,w=0;g<f;g+=3){const U=g+0,N=g+1,L=g+2;R[w++]=U,R[w++]=N,R[w++]=N,R[w++]=L,R[w++]=L,R[w++]=U}}E.version=d;const T=s.get(M);T&&e.remove(T),s.set(M,E)}function h(M){const b=s.get(M);if(b){const S=M.index;S!==null&&b.version<S.version&&m(M)}else m(M);return s.get(M)}function _(){for(const M in r){const b=r[M].deref();b!==void 0&&l(b)}}return{get:c,update:p,getWireframeAttribute:h,dispose:_}}function yb(t,e,n){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,h){t.drawElements(i,h,s,m*a),n.update(h,i,1)}function c(m,h,_){_!==0&&(t.drawElementsInstanced(i,h,s,m*a,_),n.update(h,i,_))}function p(m,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,m,0,_);let b=0;for(let S=0;S<_;S++)b+=h[S];n.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function Mb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Eb(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=p!==void 0?p.length:0;let h=i.get(o);if(h===void 0||h.count!==m){let N=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var _=N;h!==void 0&&h.texture.dispose();const M=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;M===!0&&(E=1),b===!0&&(E=2),S===!0&&(E=3);let R=o.attributes.position.count*E,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const g=new Float32Array(R*T*4*m),w=new Sx(g,R,T,m);w.type=ui,w.needsUpdate=!0;const U=E*4;for(let L=0;L<m;L++){const G=d[L],$=f[L],I=y[L],Y=R*T*4*L;for(let Q=0;Q<G.count;Q++){const j=Q*U;M===!0&&(r.fromBufferAttribute(G,Q),g[Y+j+0]=r.x,g[Y+j+1]=r.y,g[Y+j+2]=r.z,g[Y+j+3]=0),b===!0&&(r.fromBufferAttribute($,Q),g[Y+j+4]=r.x,g[Y+j+5]=r.y,g[Y+j+6]=r.z,g[Y+j+7]=0),S===!0&&(r.fromBufferAttribute(I,Q),g[Y+j+8]=r.x,g[Y+j+9]=r.y,g[Y+j+10]=r.z,g[Y+j+11]=I.itemSize===4?r.w:1)}}h={count:m,texture:w,size:new Xe(R,T)},i.set(o,h),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let M=0;for(let S=0;S<c.length;S++)M+=c[S];const b=o.morphTargetsRelative?1:1-M;l.getUniforms().setValue(t,"morphTargetBaseInfluence",b),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function bb(t,e,n,i,r){let s=new WeakMap;function a(c){const p=r.render.frame,m=c.geometry,h=e.get(c,m);if(s.get(h)!==p&&(e.update(h),s.set(h,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const _=c.skeleton;s.get(_)!==p&&(_.update(),s.set(_,p))}return h}function o(){s=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:a,dispose:o}}const wb={[tx]:"LINEAR_TONE_MAPPING",[nx]:"REINHARD_TONE_MAPPING",[ix]:"CINEON_TONE_MAPPING",[rx]:"ACES_FILMIC_TONE_MAPPING",[ax]:"AGX_TONE_MAPPING",[ox]:"NEUTRAL_TONE_MAPPING",[sx]:"CUSTOM_TONE_MAPPING"};function Tb(t,e,n,i,r,s){const a=new pi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const p=new Sn;p.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Rt([0,2,0,0,2,0],2));const m=new dM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new hn(p,m),_=new Lx(-1,1,1,-1,0,1);let M=null,b=null,S=!1,d,f=null,y=[],E=!1;this.setSize=function(R,T){a.setSize(R,T),o!==null&&o.setSize(R,T),l!==null&&l.setSize(R,T);for(let g=0;g<y.length;g++){const w=y[g];w.setSize&&w.setSize(R,T)}},this.setEffects=function(R){y=R,E=y.length>0&&y[0].isRenderPass===!0;const T=a.width,g=a.height;y.length>0&&o===null&&(o=new pi(T,g,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new pi(T,g,{type:gi,depthBuffer:!1,stencilBuffer:!1}));const w=r===!0&&y.some(U=>U.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new Os(T,g),s===!0&&(c.format=nr,c.type=Fs)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let U=0;U<y.length;U++){const N=y[U];N.setSize&&N.setSize(T,g),w&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(R,T){if(S||R.toneMapping===Ri&&y.length===0)return!1;if(f=T,T!==null){const g=T.width,w=T.height;(a.width!==g||a.height!==w)&&this.setSize(g,w)}return E===!1&&R.setRenderTarget(a),d=R.toneMapping,R.toneMapping=Ri,!0},this.hasRenderPass=function(){return E},this.end=function(R,T){R.toneMapping=d,S=!0;let g=a,w=o;for(let U=0;U<y.length;U++){const N=y[U];N.enabled!==!1&&(N.render(R,w,g,T),N.needsSwap!==!1&&(g=w,w=w===o?l:o))}if(M!==R.outputColorSpace||b!==R.toneMapping){M=R.outputColorSpace,b=R.toneMapping,m.defines={},Je.getTransfer(M)===at&&(m.defines.SRGB_TRANSFER="");const U=wb[b];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=g.texture,R.setRenderTarget(f),R.render(h,_),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),p.dispose(),m.dispose()}}const Ox=new un,kx=new Os(1,1),Bx=new Ax(1),zx=new Sx,Gx=new Vy,Hx=new Tx,ym=[],Mm=[],Em=new Float32Array(16),bm=new Float32Array(9),wm=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ym[r];if(s===void 0&&(s=new Float32Array(r),ym[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ac(t,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ab(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function Nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function Pb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;wm.set(i),t.uniformMatrix2fv(this.addr,!1,wm),Ot(n,i)}}function Lb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;bm.set(i),t.uniformMatrix3fv(this.addr,!1,bm),Ot(n,i)}}function Db(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Em.set(i),t.uniformMatrix4fv(this.addr,!1,Em),Ot(n,i)}}function Ib(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function kb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function oc(t){return t.version===0&&(t.compareFunction=vx,t.needsUpdate=!0),t}function Hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=oc(kx):s=Ox,n.setTexture2D(e||s,r)}function Vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gx,r)}function Wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=oc(Bx):s=Hx,n.setTextureCube(e||s,r)}function jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zx,r)}function Xb(t){switch(t){case 5126:return Ab;case 35664:return Cb;case 35665:return Rb;case 35666:return Nb;case 35674:return Pb;case 35675:return Lb;case 35676:return Db;case 5124:case 35670:return Ib;case 35667:case 35671:return Ub;case 35668:case 35672:return Fb;case 35669:case 35673:return Ob;case 5125:return kb;case 36294:return Bb;case 36295:return zb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return jb}}function qb(t,e){t.uniform1fv(this.addr,e)}function $b(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function Yb(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function Kb(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function Zb(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Jb(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Qb(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ew(t,e){t.uniform1iv(this.addr,e)}function tw(t,e){t.uniform2iv(this.addr,e)}function nw(t,e){t.uniform3iv(this.addr,e)}function iw(t,e){t.uniform4iv(this.addr,e)}function rw(t,e){t.uniform1uiv(this.addr,e)}function sw(t,e){t.uniform2uiv(this.addr,e)}function aw(t,e){t.uniform3uiv(this.addr,e)}function ow(t,e){t.uniform4uiv(this.addr,e)}function lw(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=oc(kx):a=Ox;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function cw(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Gx,s[a])}function uw(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=oc(Bx):a=Hx;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function dw(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||zx,s[a])}function fw(t){switch(t){case 5126:return qb;case 35664:return $b;case 35665:return Yb;case 35666:return Kb;case 35674:return Zb;case 35675:return Jb;case 35676:return Qb;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return rw;case 36294:return sw;case 36295:return aw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return dw}}class hw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Xb(n.type)}}class pw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fw(n.type)}}class mw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const uu=/(\w+)(\])?(\[|\.)?/g;function Tm(t,e){t.seq.push(e),t.map[e.id]=e}function gw(t,e,n){const i=t.name,r=i.length;for(uu.lastIndex=0;;){const s=uu.exec(i),a=uu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Tm(n,c===void 0?new hw(o,t,e):new pw(o,t,e));break}else{let m=n.map[o];m===void 0&&(m=new mw(o),Tm(n,m)),n=m}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);gw(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Am(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xw=37297;let vw=0;function _w(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Cm=new ke;function Sw(t){Je._getMatrix(Cm,Je.workingColorSpace,t);const e=`mat3( ${Cm.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case kl:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+_w(t.getShaderSource(e),o)}else return s}function yw(t,e){const n=Sw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Mw={[tx]:"Linear",[nx]:"Reinhard",[ix]:"Cineon",[rx]:"ACESFilmic",[ax]:"AgX",[ox]:"Neutral",[sx]:"Custom"};function Ew(t,e){const n=Mw[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wo=new V;function bw(){Je.getLuminanceCoefficients(Wo);const t=Wo.x.toFixed(4),e=Wo.y.toFixed(4),n=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function Tw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Aw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ua(t){return t!==""}function Nm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Pm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(t){return t.replace(Cw,Rw)}function Rw(t,e){const n=je[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Yd(n)}const Nw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(t){return t.replace(Nw,Pw)}function Pw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Lw={[il]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function Dw(t){return Lw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Iw={[Ha]:"ENVMAP_MODE_REFRACTION"};function Uw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Iw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fw={[$f]:"ENVMAP_BLENDING_MULTIPLY",[vy]:"ENVMAP_BLENDING_MIX",[_y]:"ENVMAP_BLENDING_ADD"};function Ow(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Fw[t.combine]||"ENVMAP_BLENDING_NONE"}function kw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Dw(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",p=Uw(n),m=Ow(n),h=ww(n),_=Tw(s),M=r.createProgram();let b,S,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ua).join(`
`),b.length>0&&(b+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ua).join(`
`),S.length>0&&(S+=`
`)):(b=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),S=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?je.tonemapping_pars_fragment:"",n.toneMapping!==Ri?Ew("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,yw("linearToOutputTexel",n.outputColorSpace),bw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),a=Yd(a),a=Nm(a,n),a=Pm(a,n),o=Yd(o),o=Nm(o,n),o=Pm(o,n),a=Lm(a),o=Lm(o),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,b=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,S=["#define varying in",n.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const f=d+b+a,y=d+S+o,E=Am(r,r.VERTEX_SHADER,f),R=Am(r,r.FRAGMENT_SHADER,y);r.attachShader(M,E),r.attachShader(M,R),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function T(N){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(M)||"",G=r.getShaderInfoLog(E)||"",$=r.getShaderInfoLog(R)||"",I=L.trim(),Y=G.trim(),Q=$.trim();let j=!0,z=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,E,R);else{const k=Rm(r,E,"vertex"),H=Rm(r,R,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+k+`
`+H)}else I!==""?Ue("WebGLProgram: Program Info Log:",I):(Y===""||Q==="")&&(z=!1);z&&(N.diagnostics={runnable:j,programLog:I,vertexShader:{log:Y,prefix:b},fragmentShader:{log:Q,prefix:S}})}r.deleteShader(E),r.deleteShader(R),g=new cl(r,M),w=Aw(r,M)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(M,xw)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=R,this}let Bw=0;class zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Gw(e),n.set(e,i)),i}}class Gw{constructor(e){this.id=Bw++,this.code=e,this.usedTimes=0}}function Hw(t){return t===kr||t===Il||t===Ul}function Vw(t,e,n,i,r,s){const a=new yx,o=new zw,l=new Set,c=[],p=new Map,m=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function M(g,w,U,N,L,G){const $=N.fog,I=L.geometry,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?N.environment:null,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,j=e.get(g.envMap||Y,Q),z=h[g.type];let k=i.precision;g.precision!==null&&(k=i.getMaxPrecision(g.precision),k!==g.precision&&Ue("WebGLProgram.getParameters:",g.precision,"not supported, using",k,"instead."));const H=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=H!==void 0?H.length:0;let ce=0;I.morphAttributes.position!==void 0&&(ce=1),I.morphAttributes.normal!==void 0&&(ce=2),I.morphAttributes.color!==void 0&&(ce=3);let Re,J,xe,Me;if(z){const Se=oi[z];Re=Se.vertexShader,J=Se.fragmentShader}else{Re=g.vertexShader,J=g.fragmentShader;const Se=o.getVertexShaderStage(g),st=o.getFragmentShaderStage(g);o.update(g,Se,st),xe=Se.id,Me=st.id}const Ne=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),Fe=L.isInstancedMesh===!0,dt=L.isBatchedMesh===!0,De=!!g.map,nt=!!g.matcap,He=!!j,Ge=He&&j.isPMREMTexture===!0,bt=!!g.aoMap,At=!!g.lightMap,kt=!!g.bumpMap&&g.wireframe===!1,ft=!!g.normalMap,Nn=!!g.displacementMap,wt=!!g.emissiveMap,Pn=!!g.metalnessMap,Ln=!!g.roughnessMap,Dn=g.anisotropy>0,B=g.clearcoat>0,In=g.diffuseRoughness>0,mt=g.dispersion>0,gt=g.retroreflectivity>0,ve=g.iridescence>0,Dt=g.sheen>0,Ie=g.transmission>0,Oe=Dn&&!!g.anisotropyMap,P=B&&!!g.clearcoatMap,A=B&&!!g.clearcoatNormalMap,X=B&&!!g.clearcoatRoughnessMap,se=In&&!!g.diffuseRoughnessMap,re=ve&&!!g.iridescenceMap,ue=ve&&!!g.iridescenceThicknessMap,me=Dt&&!!g.sheenColorMap,te=Dt&&!!g.sheenRoughnessMap,ne=!!g.specularMap,fe=!!g.specularColorMap,D=!!g.specularIntensityMap,ie=Ie&&!!g.transmissionMap,Z=Ie&&!!g.thicknessMap,he=!!g.gradientMap,le=!!g.alphaMap,de=g.alphaTest>0,Pe=!!g.alphaHash,We=!!g.extensions;let oe=Ri;g.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(oe=t.toneMapping);const Le=Ge?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,Ve={shaderID:z,shaderType:g.type,shaderName:g.name,vertexShader:Re,fragmentShader:J,defines:g.defines,customVertexShaderID:xe,customFragmentShaderID:Me,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:k,batching:dt,batchingColor:dt&&L._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:De,matcap:nt,envMap:He,envMapMode:He&&j.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?Le.length-1:null,envMapSize:Ge?Le[0].width:null,aoMap:bt,lightMap:At,bumpMap:kt,normalMap:ft,displacementMap:Nn,emissiveMap:wt,normalMapObjectSpace:ft&&g.normalMapType===My,normalMapTangentSpace:ft&&g.normalMapType===Fl,packedNormalMap:ft&&g.normalMapType===Fl&&Hw(g.normalMap.format),metalnessMap:Pn,roughnessMap:Ln,anisotropy:Dn,anisotropyMap:Oe,clearcoat:B,clearcoatMap:P,clearcoatNormalMap:A,clearcoatRoughnessMap:X,diffuseRoughness:In,diffuseRoughnessMap:se,dispersion:mt,retroreflection:gt,iridescence:ve,iridescenceMap:re,iridescenceThicknessMap:ue,sheen:Dt,sheenColorMap:me,sheenRoughnessMap:te,specularMap:ne,specularColorMap:fe,specularIntensityMap:D,transmission:Ie,transmissionMap:ie,thicknessMap:Z,gradientMap:he,opaque:g.transparent===!1&&g.blending===Sa&&g.alphaToCoverage===!1,alphaMap:le,alphaTest:de,alphaHash:Pe,combine:g.combine,mapUv:De&&_(g.map.channel),aoMapUv:bt&&_(g.aoMap.channel),lightMapUv:At&&_(g.lightMap.channel),bumpMapUv:kt&&_(g.bumpMap.channel),normalMapUv:ft&&_(g.normalMap.channel),displacementMapUv:Nn&&_(g.displacementMap.channel),emissiveMapUv:wt&&_(g.emissiveMap.channel),metalnessMapUv:Pn&&_(g.metalnessMap.channel),roughnessMapUv:Ln&&_(g.roughnessMap.channel),anisotropyMapUv:Oe&&_(g.anisotropyMap.channel),clearcoatMapUv:P&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:A&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&_(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&_(g.diffuseRoughnessMap.channel),iridescenceMapUv:re&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:te&&_(g.sheenRoughnessMap.channel),specularMapUv:ne&&_(g.specularMap.channel),specularColorMapUv:fe&&_(g.specularColorMap.channel),specularIntensityMapUv:D&&_(g.specularIntensityMap.channel),transmissionMapUv:ie&&_(g.transmissionMap.channel),thicknessMapUv:Z&&_(g.thicknessMap.channel),alphaMapUv:le&&_(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ft||Dn),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(De||le),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&ft===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:_e,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:oe,decodeVideoTexture:De&&g.map.isVideoTexture===!0&&Je.getTransfer(g.map.colorSpace)===at,decodeVideoTextureEmissive:wt&&g.emissiveMap.isVideoTexture===!0&&Je.getTransfer(g.emissiveMap.colorSpace)===at,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ci,flipSided:g.side===cn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:We&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&g.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function b(g){const w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)w.push(U),w.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(S(w,g),d(w,g),w.push(t.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function S(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapPMREM),g.push(w.envMapMaxLod),g.push(w.envMapSize),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.diffuseRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.numSunLights),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numSunLightShadows),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.numLightProbeGrids),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function d(g,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function f(g){const w=h[g.type];let U;if(w){const N=oi[w];U=lM.clone(N.uniforms)}else U=g.uniforms;return U}function y(g,w){let U=p.get(w);return U!==void 0?++U.usedTimes:(U=new kw(t,w,g,r),c.push(U),p.set(w,U)),U}function E(g){if(--g.usedTimes===0){const w=c.indexOf(g);c[w]=c[c.length-1],c.pop(),p.delete(g.cacheKey),g.destroy()}}function R(g){o.remove(g)}function T(){o.dispose()}return{getParameters:M,getProgramCacheKey:b,getUniforms:f,acquireProgram:y,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:T}}function Ww(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function jw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Um(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h){let _=0;return h.isInstancedMesh&&(_+=2),h.isSkinnedMesh&&(_+=1),_}function o(h,_,M,b,S,d){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:_,material:M,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:S,group:d},t[e]=f):(f.id=h.id,f.object=h,f.geometry=_,f.material=M,f.materialVariant=a(h),f.groupOrder=b,f.renderOrder=h.renderOrder,f.z=S,f.group=d),e++,f}function l(h,_,M,b,S,d,f){f.reversedDepth===!0&&(S=-S);const y=o(h,_,M,b,S,d);M.transmission>0?i.push(y):M.transparent===!0?r.push(y):n.push(y)}function c(h,_,M,b,S,d){const f=o(h,_,M,b,S,d);M.transmission>0?i.unshift(f):M.transparent===!0?r.unshift(f):n.unshift(f)}function p(h,_){n.length>1&&n.sort(h||jw),i.length>1&&i.sort(_||Im),r.length>1&&r.sort(_||Im)}function m(){for(let h=e,_=t.length;h<_;h++){const M=t[h];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:m,sort:p}}function Xw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Um,t.set(i,[a])):r>=s.length?(a=new Um,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function qw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new V,color:new qe};break;case"SpotLight":n={position:new V,direction:new V,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function $w(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Yw=0;function Kw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Zw(t){const e=new qw,n=$w(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new vt,a=new vt;function o(c){let p=0,m=0,h=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,M=0,b=0,S=0,d=0,f=0,y=0,E=0,R=0,T=0,g=0,w=0,U=0,N=0;c.sort(Kw);for(let G=0,$=c.length;G<$;G++){const I=c[G],Y=I.color,Q=I.intensity,j=I.distance;let z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===kr?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)p+=Y.r*Q,m+=Y.g*Q,h+=Y.b*Q;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],Q);N++}else if(I.isSunLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,ee=n.get(I);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[M]=ee,i.sunShadowMap[M]=z;const ce=H.getViewportCount();for(let Re=0;Re<ce;Re++)i.sunShadowMatrix[b+Re]=H.getMatrix(Re),i.sunShadowCascade[b+Re]=H._cascadeData[Re];b+=ce,M++}i.sun[_]=k,_++}else if(I.isDirectionalLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,ee=n.get(I);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,i.directionalShadow[S]=ee,i.directionalShadowMap[S]=z,i.directionalShadowMatrix[S]=I.shadow.matrix,R++}i.directional[S]=k,S++}else if(I.isSpotLight){const k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(Y).multiplyScalar(Q),k.distance=j,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[f]=k;const H=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,H.updateMatrices(I),I.castShadow&&U++),i.spotLightMatrix[f]=H.matrix,I.castShadow){const ee=n.get(I);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,i.spotShadow[f]=ee,i.spotShadowMap[f]=z,g++}f++}else if(I.isRectAreaLight){const k=e.get(I);k.color.copy(Y).multiplyScalar(Q),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=k,y++}else if(I.isPointLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const H=I.shadow,ee=n.get(I);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,i.pointShadow[d]=ee,i.pointShadowMap[d]=z,i.pointShadowMatrix[d]=I.shadow.matrix,T++}i.point[d]=k,d++}else if(I.isHemisphereLight){const k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(Q),k.groundColor.copy(I.groundColor).multiplyScalar(Q),i.hemi[E]=k,E++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=h;const L=i.hash;(L.sunLength!==_||L.directionalLength!==S||L.pointLength!==d||L.spotLength!==f||L.rectAreaLength!==y||L.hemiLength!==E||L.numSunShadows!==M||L.numDirectionalShadows!==R||L.numPointShadows!==T||L.numSpotShadows!==g||L.numSpotMaps!==w||L.numLightProbes!==N)&&(i.sun.length=_,i.directional.length=S,i.spot.length=f,i.rectArea.length=y,i.point.length=d,i.hemi.length=E,i.sunShadow.length=M,i.sunShadowMap.length=M,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+w-U,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=N,L.sunLength=_,L.directionalLength=S,L.pointLength=d,L.spotLength=f,L.rectAreaLength=y,L.hemiLength=E,L.numSunShadows=M,L.numDirectionalShadows=R,L.numPointShadows=T,L.numSpotShadows=g,L.numSpotMaps=w,L.numLightProbes=N,i.version=Yw++)}function l(c,p){let m=0,h=0,_=0,M=0,b=0,S=0;const d=p.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const E=c[f];if(E.isSunLight){const R=i.sun[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(d),m++}else if(E.isDirectionalLight){const R=i.directional[h];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),h++}else if(E.isSpotLight){const R=i.spot[M];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),M++}else if(E.isRectAreaLight){const R=i.rectArea[b];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),a.identity(),s.copy(E.matrixWorld),s.premultiply(d),a.extractRotation(s),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),b++}else if(E.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),_++}else if(E.isHemisphereLight){const R=i.hemi[S];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(d),S++}}}return{setup:o,setupView:l,state:i}}function Fm(t){const e=new Zw(t),n=[],i=[],r=[];function s(m){p.camera=m,n.length=0,i.length=0,r.length=0}function a(m){m.isLightProbeGrid?r.push(m):n.push(m)}function o(m){i.push(m)}function l(){e.setup(n),r.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function c(m){e.setupView(n,m)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Fm(t),e.set(r,[o])):s>=a.length?(o=new Fm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Qw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tT=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],nT=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Om=new vt,ia=new V,du=new V;function iT(t,e,n){let i=new ja;const r=new Xe,s=new Xe,a=new yt,o=new pM,l=new mM,c={},p=n.maxTextureSize,m={[Or]:cn,[cn]:Or,[ci]:ci},h=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Qw,fragmentShader:eT}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const M=new Sn;M.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new hn(M,h),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let d=this.type;this.render=function(T,g,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||T.length===0)return;this.type===QS&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=il);const U=t.getRenderTarget(),N=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),G=t.state;G.setBlending(ws),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=d!==this.type;$&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(Y=>Y.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,Y=T.length;I<Y;I++){const Q=T[I],j=Q.shadow;if(j===void 0){Ue("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const z=j.getFrameExtents();r.multiply(z),s.copy(j.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/z.x),r.x=s.x*z.x,j.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/z.y),r.y=s.y*z.y,j.mapSize.y=s.y));const k=t.state.buffers.depth.getReversed();if(j.camera._reversedDepth=k,j.map===null||$===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===la){if(Q.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new pi(r.x,r.y,{format:kr,type:gi,minFilter:gn,magFilter:gn,generateMipmaps:!1}),j.map.texture.name=Q.name+".shadowMap",j.map.depthTexture=new Os(r.x,r.y,ui),j.map.depthTexture.name=Q.name+".shadowMapDepth",j.map.depthTexture.format=hr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Xt,j.map.depthTexture.magFilter=Xt}else Q.isPointLight?(j.map=new uh(r.x),j.map.depthTexture=new Ax(r.x,mi)):(j.map=new pi(r.x,r.y),j.map.depthTexture=new Os(r.x,r.y,mi)),j.map.depthTexture.name=Q.name+".shadowMap",j.map.depthTexture.format=hr,this.type===il?(j.map.depthTexture.compareFunction=k?xx:gx,j.map.depthTexture.minFilter=gn,j.map.depthTexture.magFilter=gn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Xt,j.map.depthTexture.magFilter=Xt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);const H=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Q.isPointLight!==!0&&j.updateMatrices(Q,w);const ee=j.camera.layers.mask&4294967294?j.camera.layers:w.layers;for(let ce=0;ce<H;ce++){const Re=j.getCamera(ce);if(Q.isPointLight){const J=j.camera,xe=j.matrix,Me=Q.distance||J.far;Me!==J.far&&(J.far=Me,J.updateProjectionMatrix()),ia.setFromMatrixPosition(Q.matrixWorld),J.position.copy(ia),du.copy(J.position),du.add(tT[ce]),J.up.copy(nT[ce]),J.lookAt(du),J.updateMatrixWorld(),xe.makeTranslation(-ia.x,-ia.y,-ia.z),Om.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Om,J.coordinateSystem,J.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)t.setRenderTarget(j.map,ce),t.clear();else{ce===0&&(t.setRenderTarget(j.map),t.clear());const J=j.getViewport(ce);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),G.viewport(a)}i=j.getFrustum(ce),E(g,w,Re,Q,ee,this.type)}j.isPointLightShadow!==!0&&this.type===la&&f(j,w),j.needsUpdate=!1}d=this.type,S.needsUpdate=!1,t.setRenderTarget(U,N,L)};function f(T,g){const w=e.update(b);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,_.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),T.mapPass===null?T.mapPass=new pi(r.x,r.y,{format:kr,type:gi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(g,null,w,h,b,null),_.uniforms.shadow_pass.value=T.mapPass.texture,_.uniforms.resolution.value.set(T.map.width,T.map.height),_.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(g,null,w,_,b,null)}function y(T,g,w,U){let N=null;const L=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)N=L;else if(N=w.isPointLight===!0?l:o,t.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const G=N.uuid,$=g.uuid;let I=c[G];I===void 0&&(I={},c[G]=I);let Y=I[$];Y===void 0&&(Y=N.clone(),I[$]=Y,g.addEventListener("dispose",R)),N=Y}if(N.visible=g.visible,N.wireframe=g.wireframe,U===la?N.side=g.shadowSide!==null?g.shadowSide:g.side:N.side=g.shadowSide!==null?g.shadowSide:m[g.side],N.alphaMap=g.alphaMap,N.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,N.map=g.map,N.clipShadows=g.clipShadows,N.clippingPlanes=g.clippingPlanes,N.clipIntersection=g.clipIntersection,N.displacementMap=g.displacementMap,N.displacementScale=g.displacementScale,N.displacementBias=g.displacementBias,N.wireframeLinewidth=g.wireframeLinewidth,N.linewidth=g.linewidth,w.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const G=t.properties.get(N);G.light=w}return N}function E(T,g,w,U,N,L){if(T.visible===!1)return;if(T.layers.test(N)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===la)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const I=e.update(T),Y=T.material;if(Array.isArray(Y)){const Q=I.groups;for(let j=0,z=Q.length;j<z;j++){const k=Q[j],H=Y[k.materialIndex];if(H&&H.visible){const ee=y(T,H,U,L);T.onBeforeShadow(t,T,g,w,I,ee,k),t.renderBufferDirect(w,null,I,ee,T,k),T.onAfterShadow(t,T,g,w,I,ee,k)}}}else if(Y.visible){const Q=y(T,Y,U,L);T.onBeforeShadow(t,T,g,w,I,Q,null),t.renderBufferDirect(w,null,I,Q,T,null),T.onAfterShadow(t,T,g,w,I,Q,null)}}const $=T.children;for(let I=0,Y=$.length;I<Y;I++)E($[I],g,w,U,N,L)}function R(T){T.target.removeEventListener("dispose",R);for(const w in c){const U=c[w],N=T.target.uuid;N in U&&(U[N].dispose(),delete U[N])}}}function rT(t,e){function n(){let D=!1;const ie=new yt;let Z=null;const he=new yt(0,0,0,0);return{setMask:function(le){Z!==le&&!D&&(t.colorMask(le,le,le,le),Z=le)},setLocked:function(le){D=le},setClear:function(le,de,Pe,We,oe){oe===!0&&(le*=We,de*=We,Pe*=We),ie.set(le,de,Pe,We),he.equals(ie)===!1&&(t.clearColor(le,de,Pe,We),he.copy(ie))},reset:function(){D=!1,Z=null,he.set(-1,0,0,0)}}}function i(){let D=!1,ie=!1,Z=null,he=null,le=null;return{setReversed:function(de){if(ie!==de){const Pe=e.get("EXT_clip_control");de?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ie=de;const We=le;le=null,this.setClear(We)}},getReversed:function(){return ie},setTest:function(de){de?_e(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(de){Z!==de&&!D&&(t.depthMask(de),Z=de)},setFunc:function(de){if(ie&&(de=Dy[de]),he!==de){switch(de){case ad:t.depthFunc(t.NEVER);break;case od:t.depthFunc(t.ALWAYS);break;case ld:t.depthFunc(t.LESS);break;case Ga:t.depthFunc(t.LEQUAL);break;case cd:t.depthFunc(t.EQUAL);break;case ud:t.depthFunc(t.GEQUAL);break;case dd:t.depthFunc(t.GREATER);break;case fd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=de}},setLocked:function(de){D=de},setClear:function(de){le!==de&&(le=de,ie&&(de=1-de),t.clearDepth(de))},reset:function(){D=!1,Z=null,he=null,le=null,ie=!1}}}function r(){let D=!1,ie=null,Z=null,he=null,le=null,de=null,Pe=null,We=null,oe=null;return{setTest:function(Le){D||(Le?_e(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(Le){ie!==Le&&!D&&(t.stencilMask(Le),ie=Le)},setFunc:function(Le,Ve,Se){(Z!==Le||he!==Ve||le!==Se)&&(t.stencilFunc(Le,Ve,Se),Z=Le,he=Ve,le=Se)},setOp:function(Le,Ve,Se){(de!==Le||Pe!==Ve||We!==Se)&&(t.stencilOp(Le,Ve,Se),de=Le,Pe=Ve,We=Se)},setLocked:function(Le){D=Le},setClear:function(Le){oe!==Le&&(t.clearStencil(Le),oe=Le)},reset:function(){D=!1,ie=null,Z=null,he=null,le=null,de=null,Pe=null,We=null,oe=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let p={},m={},h={},_=new WeakMap,M=[],b=null,S=!1,d=null,f=null,y=null,E=null,R=null,T=null,g=null,w=new qe(0,0,0),U=0,N=!1,L=null,G=null,$=null,I=null,Y=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,z=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(k)[1]),j=z>=1):k.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),j=z>=2);let H=null,ee={};const ce=t.getParameter(t.SCISSOR_BOX),Re=t.getParameter(t.VIEWPORT),J=new yt().fromArray(ce),xe=new yt().fromArray(Re);function Me(D,ie,Z,he){const le=new Uint8Array(4),de=t.createTexture();t.bindTexture(D,de),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<Z;Pe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(ie+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return de}const Ne={};Ne[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(t.DEPTH_TEST),a.setFunc(Ga),kt(!1),ft(zp),_e(t.CULL_FACE),bt(ws);function _e(D){p[D]!==!0&&(t.enable(D),p[D]=!0)}function Fe(D){p[D]!==!1&&(t.disable(D),p[D]=!1)}function dt(D,ie){return h[D]!==ie?(t.bindFramebuffer(D,ie),h[D]=ie,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ie),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function De(D,ie){let Z=M,he=!1;if(D){Z=_.get(ie),Z===void 0&&(Z=[],_.set(ie,Z));const le=D.textures;if(Z.length!==le.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Pe=le.length;de<Pe;de++)Z[de]=t.COLOR_ATTACHMENT0+de;Z.length=le.length,he=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,he=!0);he&&t.drawBuffers(Z)}function nt(D){return b!==D?(t.useProgram(D),b=D,!0):!1}const He={[is]:t.FUNC_ADD,[ty]:t.FUNC_SUBTRACT,[ny]:t.FUNC_REVERSE_SUBTRACT};He[iy]=t.MIN,He[ry]=t.MAX;const Ge={[sy]:t.ZERO,[ay]:t.ONE,[oy]:t.SRC_COLOR,[Q0]:t.SRC_ALPHA,[hy]:t.SRC_ALPHA_SATURATE,[dy]:t.DST_COLOR,[cy]:t.DST_ALPHA,[ly]:t.ONE_MINUS_SRC_COLOR,[ex]:t.ONE_MINUS_SRC_ALPHA,[fy]:t.ONE_MINUS_DST_COLOR,[uy]:t.ONE_MINUS_DST_ALPHA,[py]:t.CONSTANT_COLOR,[my]:t.ONE_MINUS_CONSTANT_COLOR,[gy]:t.CONSTANT_ALPHA,[xy]:t.ONE_MINUS_CONSTANT_ALPHA};function bt(D,ie,Z,he,le,de,Pe,We,oe,Le){if(D===ws){S===!0&&(Fe(t.BLEND),S=!1);return}if(S===!1&&(_e(t.BLEND),S=!0),D!==ey){if(D!==d||Le!==N){if((f!==is||R!==is)&&(t.blendEquation(t.FUNC_ADD),f=is,R=is),Le)switch(D){case Sa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gp:t.blendFunc(t.ONE,t.ONE);break;case Hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:rt("WebGLState: Invalid blending: ",D);break}else switch(D){case Sa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Hp:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vp:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",D);break}y=null,E=null,T=null,g=null,w.set(0,0,0),U=0,d=D,N=Le}return}le=le||ie,de=de||Z,Pe=Pe||he,(ie!==f||le!==R)&&(t.blendEquationSeparate(He[ie],He[le]),f=ie,R=le),(Z!==y||he!==E||de!==T||Pe!==g)&&(t.blendFuncSeparate(Ge[Z],Ge[he],Ge[de],Ge[Pe]),y=Z,E=he,T=de,g=Pe),(We.equals(w)===!1||oe!==U)&&(t.blendColor(We.r,We.g,We.b,oe),w.copy(We),U=oe),d=D,N=!1}function At(D,ie){D.side===ci?Fe(t.CULL_FACE):_e(t.CULL_FACE);let Z=D.side===cn;ie&&(Z=!Z),kt(Z),D.blending===Sa&&D.transparent===!1?bt(ws):bt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const he=D.stencilWrite;o.setTest(he),he&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),wt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function kt(D){L!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),L=D)}function ft(D){D!==ZS?(_e(t.CULL_FACE),D!==G&&(D===zp?t.cullFace(t.BACK):D===JS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),G=D}function Nn(D){D!==$&&(j&&t.lineWidth(D),$=D)}function wt(D,ie,Z){D?(_e(t.POLYGON_OFFSET_FILL),(I!==ie||Y!==Z)&&(I=ie,Y=Z,a.getReversed()&&(ie=-ie,Z=-Z),t.polygonOffset(ie,Z))):Fe(t.POLYGON_OFFSET_FILL)}function Pn(D){D?_e(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function Ln(D){D===void 0&&(D=t.TEXTURE0+Q-1),H!==D&&(t.activeTexture(D),H=D)}function Dn(D,ie,Z){Z===void 0&&(H===null?Z=t.TEXTURE0+Q-1:Z=H);let he=ee[Z];he===void 0&&(he={type:void 0,texture:void 0},ee[Z]=he),(he.type!==D||he.texture!==ie)&&(H!==Z&&(t.activeTexture(Z),H=Z),t.bindTexture(D,ie||Ne[D]),he.type=D,he.texture=ie)}function B(){const D=ee[H];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function In(){try{t.compressedTexImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function mt(){try{t.compressedTexImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function gt(){try{t.texSubImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function ve(){try{t.texSubImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function Dt(){try{t.compressedTexSubImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function Ie(){try{t.compressedTexSubImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function Oe(){try{t.texStorage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function P(){try{t.texStorage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function A(){try{t.texImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function X(){try{t.texImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function se(D){return m[D]!==void 0?m[D]:t.getParameter(D)}function re(D,ie){m[D]!==ie&&(t.pixelStorei(D,ie),m[D]=ie)}function ue(D){J.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function me(D){xe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function te(D,ie){let Z=c.get(ie);Z===void 0&&(Z=new WeakMap,c.set(ie,Z));let he=Z.get(D);he===void 0&&(he=t.getUniformBlockIndex(ie,D.name),t.uniformBlockBinding(ie,he,he),Z.set(D,he))}function ne(D,ie,Z){const le=c.get(ie).get(D);l[le]!==Z&&(t.bindBufferBase(t.UNIFORM_BUFFER,le,Z),l[le]=Z)}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},m={},H=null,ee={},h={},l={},_=new WeakMap,M=[],b=null,S=!1,d=null,f=null,y=null,E=null,R=null,T=null,g=null,w=new qe(0,0,0),U=0,N=!1,L=null,G=null,$=null,I=null,Y=null,J.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_e,disable:Fe,bindFramebuffer:dt,drawBuffers:De,useProgram:nt,setBlending:bt,setMaterial:At,setFlipSided:kt,setCullFace:ft,setLineWidth:Nn,setPolygonOffset:wt,setScissorTest:Pn,activeTexture:Ln,bindTexture:Dn,unbindTexture:B,compressedTexImage2D:In,compressedTexImage3D:mt,texImage2D:A,texImage3D:X,pixelStorei:re,getParameter:se,updateUBOMapping:te,uniformBlockBinding:ne,texStorage2D:Oe,texStorage3D:P,texSubImage2D:gt,texSubImage3D:ve,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Ie,scissor:ue,viewport:me,reset:fe}}function sT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,p=new WeakMap,m=new Set;let h;const _=new WeakMap,M=new Set,b=new FinalizationRegistry(P=>M.delete(P));let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(P,A){return S?new OffscreenCanvas(P,A):Bl("canvas")}function f(P,A,X){let se=1;const re=Oe(P);if((re.width>X||re.height>X)&&(se=X/Math.max(re.width,re.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(se*re.width),me=Math.floor(se*re.height);h===void 0&&(h=d(ue,me));const te=A?d(ue,me):h;return te.width=ue,te.height=me,te.getContext("2d").drawImage(P,0,0,ue,me),Ue("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ue+"x"+me+")."),te}else return"data"in P&&Ue("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function y(P){return P.generateMipmaps}function E(P){t.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(P,A,X,se,re,ue=!1){if(P!==null){if(t[P]!==void 0)return t[P];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me;se&&(me=e.get("EXT_texture_norm16"),me||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=A;if(A===t.RED&&(X===t.FLOAT&&(te=t.R32F),X===t.HALF_FLOAT&&(te=t.R16F),X===t.UNSIGNED_BYTE&&(te=t.R8),X===t.UNSIGNED_SHORT&&me&&(te=me.R16_EXT),X===t.SHORT&&me&&(te=me.R16_SNORM_EXT)),A===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(te=t.R8UI),X===t.UNSIGNED_SHORT&&(te=t.R16UI),X===t.UNSIGNED_INT&&(te=t.R32UI),X===t.BYTE&&(te=t.R8I),X===t.SHORT&&(te=t.R16I),X===t.INT&&(te=t.R32I)),A===t.RG&&(X===t.FLOAT&&(te=t.RG32F),X===t.HALF_FLOAT&&(te=t.RG16F),X===t.UNSIGNED_BYTE&&(te=t.RG8),X===t.UNSIGNED_SHORT&&me&&(te=me.RG16_EXT),X===t.SHORT&&me&&(te=me.RG16_SNORM_EXT)),A===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(te=t.RG8UI),X===t.UNSIGNED_SHORT&&(te=t.RG16UI),X===t.UNSIGNED_INT&&(te=t.RG32UI),X===t.BYTE&&(te=t.RG8I),X===t.SHORT&&(te=t.RG16I),X===t.INT&&(te=t.RG32I)),A===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(te=t.RGB8UI),X===t.UNSIGNED_SHORT&&(te=t.RGB16UI),X===t.UNSIGNED_INT&&(te=t.RGB32UI),X===t.BYTE&&(te=t.RGB8I),X===t.SHORT&&(te=t.RGB16I),X===t.INT&&(te=t.RGB32I)),A===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),X===t.UNSIGNED_INT&&(te=t.RGBA32UI),X===t.BYTE&&(te=t.RGBA8I),X===t.SHORT&&(te=t.RGBA16I),X===t.INT&&(te=t.RGBA32I)),A===t.RGB&&(X===t.UNSIGNED_SHORT&&me&&(te=me.RGB16_EXT),X===t.SHORT&&me&&(te=me.RGB16_SNORM_EXT),X===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),X===t.UNSIGNED_INT_10F_11F_11F_REV&&(te=t.R11F_G11F_B10F)),A===t.RGBA){const ne=ue?kl:Je.getTransfer(re);X===t.FLOAT&&(te=t.RGBA32F),X===t.HALF_FLOAT&&(te=t.RGBA16F),X===t.UNSIGNED_BYTE&&(te=ne===at?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT&&me&&(te=me.RGBA16_EXT),X===t.SHORT&&me&&(te=me.RGBA16_SNORM_EXT),X===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function g(P,A){let X;return P?A===null||A===mi||A===Fs?X=t.DEPTH24_STENCIL8:A===ui?X=t.DEPTH32F_STENCIL8:A===Va&&(X=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===mi||A===Fs?X=t.DEPTH_COMPONENT24:A===ui?X=t.DEPTH_COMPONENT32F:A===Va&&(X=t.DEPTH_COMPONENT16),X}function w(P,A){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xt&&P.minFilter!==gn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function U(P){const A=new WeakRef(P);i.get(P).__ref=A,M.add(A),b.register(P,A,A)}function N(P){const A=i.get(P).__ref;A!==void 0&&(M.delete(A),b.unregister(A))}function L(P){$(P.target)}function G(P){I(P.target)}function $(P){P.removeEventListener("dispose",L),N(P),Q(P),P.isVideoTexture&&p.delete(P),P.isHTMLTexture&&m.delete(P)}function I(P){P.removeEventListener("dispose",G),N(P),z(P)}function Y(){for(const P of M){const A=P.deref();A!==void 0&&(A.isRenderTarget===!0?I(A):$(A))}M.clear(),m.clear()}function Q(P){const A=i.get(P);if(A.__webglInit===void 0)return;const X=P.source,se=_.get(X);if(se){const re=se[A.__cacheKey];re.usedTimes--,re.usedTimes===0&&j(P),Object.keys(se).length===0&&_.delete(X)}i.remove(P)}function j(P){const A=i.get(P);t.deleteTexture(A.__webglTexture);const X=P.source,se=_.get(X);delete se[A.__cacheKey],a.memory.textures--}function z(P){const A=i.get(P);A.__depthDisposeCallback&&A.__depthDisposeCallback();const X=P.depthTexture;if(X&&X.renderTarget===P&&$(X),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(A.__webglFramebuffer[re]))for(let ue=0;ue<A.__webglFramebuffer[re].length;ue++)t.deleteFramebuffer(A.__webglFramebuffer[re][ue]);else t.deleteFramebuffer(A.__webglFramebuffer[re]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[re])}else{if(Array.isArray(A.__webglFramebuffer))for(let re=0;re<A.__webglFramebuffer.length;re++)t.deleteFramebuffer(A.__webglFramebuffer[re]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let re=0;re<A.__webglColorRenderbuffer.length;re++)A.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[re]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const se=P.textures;for(let re=0,ue=se.length;re<ue;re++){const me=i.get(se[re]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(se[re])}i.remove(P)}let k=0;function H(){k=0}function ee(){return k}function ce(P){k=P}function Re(){const P=k;return P>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,P}function J(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.mipmapsAutoUpdate),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function xe(P,A){const X=i.get(P);if(P.isVideoTexture&&Dt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){const se=P.image;if(se===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{At(X,P,A);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+A)}function Me(P,A){const X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){At(X,P,A);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+A)}function Ne(P,A){const X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){At(X,P,A);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+A)}function _e(P,A){const X=i.get(P);if(P.version>0&&X.__version!==P.version){kt(X,P,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+A)}const Fe={[hd]:t.REPEAT,[Ai]:t.CLAMP_TO_EDGE,[pd]:t.MIRRORED_REPEAT},dt={[Xt]:t.NEAREST,[Sy]:t.NEAREST_MIPMAP_NEAREST,[yo]:t.NEAREST_MIPMAP_LINEAR,[gn]:t.LINEAR,[Bc]:t.LINEAR_MIPMAP_NEAREST,[tr]:t.LINEAR_MIPMAP_LINEAR},De={[by]:t.NEVER,[vx]:t.ALWAYS,[wy]:t.LESS,[gx]:t.LEQUAL,[Ty]:t.EQUAL,[xx]:t.GEQUAL,[Ay]:t.GREATER,[Cy]:t.NOTEQUAL};function nt(P,A){if(A.type===ui&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===gn||A.magFilter===Bc||A.magFilter===yo||A.magFilter===tr||A.minFilter===gn||A.minFilter===Bc||A.minFilter===yo||A.minFilter===tr)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,Fe[A.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Fe[A.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Fe[A.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,dt[A.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,dt[A.minFilter]),A.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,De[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Xt||A.minFilter!==yo&&A.minFilter!==tr||A.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function He(P,A){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",L),U(A));const se=A.source;let re=_.get(se);re===void 0&&(re={},_.set(se,re));const ue=J(A);if(ue!==P.__cacheKey){re[ue]===void 0&&(re[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),re[ue].usedTimes++;const me=re[P.__cacheKey];me!==void 0&&(re[P.__cacheKey].usedTimes--,me.usedTimes===0&&j(A)),P.__cacheKey=ue,P.__webglTexture=re[ue].texture}return X}function Ge(P,A,X){return Math.floor(Math.floor(P/X)/A)}function bt(P,A,X,se){const ue=P.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,A.width,A.height,X,se,A.data);else{ue.sort((D,ie)=>D.start-ie.start);let me=0;for(let D=1;D<ue.length;D++){const ie=ue[me],Z=ue[D],he=ie.start+ie.count,le=Ge(Z.start,A.width,4),de=Ge(ie.start,A.width,4);Z.start<=he+1&&le===de&&Ge(Z.start+Z.count-1,A.width,4)===le?ie.count=Math.max(ie.count,Z.start+Z.count-ie.start):(++me,ue[me]=Z)}ue.length=me+1;const te=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,A.width);for(let D=0,ie=ue.length;D<ie;D++){const Z=ue[D],he=Math.floor(Z.start/4),le=Math.ceil(Z.count/4),de=he%A.width,Pe=Math.floor(he/A.width),We=le,oe=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,de),n.pixelStorei(t.UNPACK_SKIP_ROWS,Pe),n.texSubImage2D(t.TEXTURE_2D,0,de,Pe,We,oe,X,se,A.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,te),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function At(P,A,X){let se=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=t.TEXTURE_3D);const re=He(P,A),ue=A.source;n.bindTexture(se,P.__webglTexture,t.TEXTURE0+X);const me=i.get(ue);if(ue.version!==me.__version||re===!0){if(n.activeTexture(t.TEXTURE0+X),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const oe=Je.getPrimaries(Je.workingColorSpace),Le=A.colorSpace===Ji?null:Je.getPrimaries(A.colorSpace),Ve=A.colorSpace===Ji||oe===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}n.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment);let ne=f(A.image,!1,r.maxTextureSize);ne=Ie(A,ne);const fe=s.convert(A.format,A.colorSpace),D=s.convert(A.type);let ie=T(A.internalFormat,fe,D,A.normalized,A.colorSpace,A.isVideoTexture);nt(se,A);let Z;const he=A.mipmaps,le=A.isVideoTexture!==!0,de=me.__version===void 0||re===!0,Pe=ue.dataReady,We=w(A,ne);if(A.isDepthTexture)ie=g(A.format===nr,A.type),de&&(le?n.texStorage2D(t.TEXTURE_2D,1,ie,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,ie,ne.width,ne.height,0,fe,D,null));else if(A.isDataTexture)if(he.length>0){le&&de&&n.texStorage2D(t.TEXTURE_2D,We,ie,he[0].width,he[0].height);for(let oe=0,Le=he.length;oe<Le;oe++)Z=he[oe],le?Pe&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,fe,D,Z.data):n.texImage2D(t.TEXTURE_2D,oe,ie,Z.width,Z.height,0,fe,D,Z.data);A.generateMipmaps=!1}else le?(de&&n.texStorage2D(t.TEXTURE_2D,We,ie,ne.width,ne.height),Pe&&bt(A,ne,fe,D)):n.texImage2D(t.TEXTURE_2D,0,ie,ne.width,ne.height,0,fe,D,ne.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){le&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,ie,he[0].width,he[0].height,ne.depth);for(let oe=0,Le=he.length;oe<Le;oe++)if(Z=he[oe],A.format!==di)if(fe!==null)if(le){if(Pe)if(A.layerUpdates.size>0){const Ve=gm(Z.width,Z.height,A.format,A.type);for(const Se of A.layerUpdates){const st=Z.data.subarray(Se*Ve/Z.data.BYTES_PER_ELEMENT,(Se+1)*Ve/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,Se,Z.width,Z.height,1,fe,st)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,ne.depth,fe,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,ie,Z.width,Z.height,ne.depth,0,Z.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,ne.depth,fe,D,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,ie,Z.width,Z.height,ne.depth,0,fe,D,Z.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{le&&de&&n.texStorage2D(t.TEXTURE_2D,We,ie,he[0].width,he[0].height);for(let oe=0,Le=he.length;oe<Le;oe++)Z=he[oe],A.format!==di?fe!==null?le?Pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,fe,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,ie,Z.width,Z.height,0,Z.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Pe&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,fe,D,Z.data):n.texImage2D(t.TEXTURE_2D,oe,ie,Z.width,Z.height,0,fe,D,Z.data)}else if(A.isDataArrayTexture)if(le){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,ie,ne.width,ne.height,ne.depth),Pe)if(A.layerUpdates.size>0){const oe=gm(ne.width,ne.height,A.format,A.type);for(const Le of A.layerUpdates){const Ve=ne.data.subarray(Le*oe/ne.data.BYTES_PER_ELEMENT,(Le+1)*oe/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Le,ne.width,ne.height,1,fe,D,Ve)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,D,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ie,ne.width,ne.height,ne.depth,0,fe,D,ne.data);else if(A.isData3DTexture)le?(de&&n.texStorage3D(t.TEXTURE_3D,We,ie,ne.width,ne.height,ne.depth),Pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,D,ne.data)):n.texImage3D(t.TEXTURE_3D,0,ie,ne.width,ne.height,ne.depth,0,fe,D,ne.data);else if(A.isFramebufferTexture){if(de)if(le)n.texStorage2D(t.TEXTURE_2D,We,ie,ne.width,ne.height);else{let oe=ne.width,Le=ne.height;for(let Ve=0;Ve<We;Ve++)n.texImage2D(t.TEXTURE_2D,Ve,ie,oe,Le,0,fe,D,null),oe>>=1,Le>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in t){const oe=t.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ne.parentNode!==oe){oe.appendChild(ne),m.add(A),oe.onpaint=Le=>{const Ve=Le.changedElements;for(const Se of m)Ve.includes(Se.image)&&(Se.needsUpdate=!0)},oe.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const Ve=t.RGBA,Se=t.RGBA,st=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ve,Se,st,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(he.length>0){if(le&&de){const oe=Oe(he[0]);n.texStorage2D(t.TEXTURE_2D,We,ie,oe.width,oe.height)}for(let oe=0,Le=he.length;oe<Le;oe++)Z=he[oe],le?Pe&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,fe,D,Z):n.texImage2D(t.TEXTURE_2D,oe,ie,fe,D,Z);A.generateMipmaps=!1}else if(le){if(de){const oe=Oe(ne);n.texStorage2D(t.TEXTURE_2D,We,ie,oe.width,oe.height)}Pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,D,ne)}else n.texImage2D(t.TEXTURE_2D,0,ie,fe,D,ne);y(A)&&A.mipmapsAutoUpdate===!0&&E(se),me.__version=ue.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function kt(P,A,X){if(A.image.length!==6)return;const se=He(P,A),re=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+X);const ue=i.get(re);if(re.version!==ue.__version||se===!0){n.activeTexture(t.TEXTURE0+X);const me=Je.getPrimaries(Je.workingColorSpace),te=A.colorSpace===Ji?null:Je.getPrimaries(A.colorSpace),ne=A.colorSpace===Ji||me===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const fe=A.isCompressedTexture||A.image[0].isCompressedTexture,D=A.image[0]&&A.image[0].isDataTexture,ie=[];for(let Se=0;Se<6;Se++)!fe&&!D?ie[Se]=f(A.image[Se],!0,r.maxCubemapSize):ie[Se]=D?A.image[Se].image:A.image[Se],ie[Se]=Ie(A,ie[Se]);const Z=ie[0],he=s.convert(A.format,A.colorSpace),le=s.convert(A.type);let de=T(A.internalFormat,he,le,A.normalized,A.colorSpace);const Pe=A.isVideoTexture!==!0,We=ue.__version===void 0||se===!0,oe=re.dataReady;let Le=w(A,Z);nt(t.TEXTURE_CUBE_MAP,A);let Ve;if(A.isDepthTexture){if(de=g(A.format===nr,A.type),We)if(Pe)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,de,Z.width,Z.height);else for(let Se=0;Se<6;Se++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,de,Z.width,Z.height,0,he,le,null)}else if(fe){Pe&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,de,Z.width,Z.height);for(let Se=0;Se<6;Se++){Ve=ie[Se].mipmaps;for(let st=0;st<Ve.length;st++){const Bt=Ve[st];A.format!==di?he!==null?Pe?oe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,0,0,Bt.width,Bt.height,he,Bt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,de,Bt.width,Bt.height,0,Bt.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,0,0,Bt.width,Bt.height,he,le,Bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,de,Bt.width,Bt.height,0,he,le,Bt.data)}}}else{if(Ve=A.mipmaps,Pe&&We){Ve.length>0&&Le++;const Se=Oe(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,de,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(D){Pe?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ie[Se].width,ie[Se].height,he,le,ie[Se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,de,ie[Se].width,ie[Se].height,0,he,le,ie[Se].data);for(let st=0;st<Ve.length;st++){const Bi=Ve[st].image[Se].image;Pe?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,0,0,Bi.width,Bi.height,he,le,Bi.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,de,Bi.width,Bi.height,0,he,le,Bi.data)}}else{Pe?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,he,le,ie[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,de,he,le,ie[Se]);for(let st=0;st<Ve.length;st++){const Bt=Ve[st];Pe?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,0,0,he,le,Bt.image[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,de,he,le,Bt.image[Se])}}}y(A)&&A.mipmapsAutoUpdate===!0&&E(t.TEXTURE_CUBE_MAP),ue.__version=re.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ft(P,A,X,se,re,ue){const me=s.convert(X.format,X.colorSpace),te=s.convert(X.type),ne=T(X.internalFormat,me,te,X.normalized,X.colorSpace),fe=i.get(A),D=i.get(X);if(D.__renderTarget=A,!fe.__hasExternalTextures){const ie=Math.max(1,A.width>>ue),Z=Math.max(1,A.height>>ue);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ue,ne,ie,Z,A.depth,0,me,te,null):n.texImage2D(re,ue,ne,ie,Z,0,me,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),ve(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,re,D.__webglTexture,0,gt(A)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,re,D.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Nn(P,A,X){if(t.bindRenderbuffer(t.RENDERBUFFER,P),A.depthBuffer){const se=A.depthTexture,re=se&&se.isDepthTexture?se.type:null,ue=g(A.stencilBuffer,re),me=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ve(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(A),ue,A.width,A.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(A),ue,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,P)}else{const se=A.textures;for(let re=0;re<se.length;re++){const ue=se[re],me=s.convert(ue.format,ue.colorSpace),te=s.convert(ue.type),ne=T(ue.internalFormat,me,te,ue.normalized,ue.colorSpace);ve(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(A),ne,A.width,A.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(A),ne,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,ne,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function wt(P,A,X){const se=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=i.get(A.depthTexture);re.__renderTarget=A;const ue=se?A.depthTexture.image[0]:A.depthTexture.image;(!re.__webglTexture||ue.width!==A.width||ue.height!==A.height)&&(ue.width=A.width,ue.height=A.height,A.depthTexture.needsUpdate=!0),se?_e(A.depthTexture,0):xe(A.depthTexture,0);const me=re.__webglTexture,te=gt(A),ne=se?t.TEXTURE_CUBE_MAP_POSITIVE_X+X:t.TEXTURE_2D,fe=A.depthTexture.format===nr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(A.depthTexture.format===hr)ve(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ne,me,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ne,me,0);else if(A.depthTexture.format===nr)ve(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ne,me,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ne,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pn(P){const A=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),se){const re=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,se.removeEventListener("dispose",re)};se.addEventListener("dispose",re),A.__depthDisposeCallback=re}A.__boundDepthTexture=se}if(P.depthTexture&&!A.__autoAllocateDepthBuffer)if(X)for(let se=0;se<6;se++)wt(A.__webglFramebuffer[se],P,se);else P.texture.mipmaps.length>0?wt(A.__webglFramebuffer[0],P,0):wt(A.__webglFramebuffer,P,0);else if(X){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]===void 0)A.__webglDepthbuffer[se]=t.createRenderbuffer(),Nn(A.__webglDepthbuffer[se],P,!1);else{const re=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ue)}}else if(P.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),Nn(A.__webglDepthbuffer,P,!1);else{const re=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ue)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ln(P,A,X){const se=i.get(P);A!==void 0&&ft(se.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Pn(P)}function Dn(P){const A=P.texture,X=i.get(P),se=i.get(A);P.addEventListener("dispose",G),U(P);const re=P.textures,ue=P.isWebGLCubeRenderTarget===!0,me=re.length>1;if(me||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=A.version,a.memory.textures++),ue){X.__webglFramebuffer=[];for(let te=0;te<6;te++)if(A.mipmaps.length>0){X.__webglFramebuffer[te]=[];for(let ne=0;ne<A.mipmaps.length;ne++)X.__webglFramebuffer[te][ne]=t.createFramebuffer()}else X.__webglFramebuffer[te]=t.createFramebuffer()}else{if(A.mipmaps.length>0){X.__webglFramebuffer=[];for(let te=0;te<A.mipmaps.length;te++)X.__webglFramebuffer[te]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(me)for(let te=0,ne=re.length;te<ne;te++){const fe=i.get(re[te]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&ve(P)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let te=0;te<re.length;te++){const ne=re[te];X.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[te]);const fe=s.convert(ne.format,ne.colorSpace),D=s.convert(ne.type),ie=T(ne.internalFormat,fe,D,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),Z=gt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,ie,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,X.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),Nn(X.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),nt(t.TEXTURE_CUBE_MAP,A);for(let te=0;te<6;te++)if(A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)ft(X.__webglFramebuffer[te][ne],P,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne);else ft(X.__webglFramebuffer[te],P,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);y(A)?E(t.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),n.unbindTexture()}else if(me){for(let te=0,ne=re.length;te<ne;te++){const fe=re[te],D=i.get(fe);let ie=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,D.__webglTexture),nt(ie,fe),ft(X.__webglFramebuffer,P,fe,t.COLOR_ATTACHMENT0+te,ie,0),y(fe)&&E(ie)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,se.__webglTexture),nt(te,A),A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)ft(X.__webglFramebuffer[ne],P,A,t.COLOR_ATTACHMENT0,te,ne);else ft(X.__webglFramebuffer,P,A,t.COLOR_ATTACHMENT0,te,0);y(A)?E(te):A.mipmaps.length>0&&t.texParameteri(te,t.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),n.unbindTexture()}P.depthBuffer&&Pn(P)}function B(P){const A=P.textures;for(let X=0,se=A.length;X<se;X++){const re=A[X];if(y(re)&&re.mipmapsAutoUpdate===!0){const ue=R(P),me=i.get(re).__webglTexture;n.bindTexture(ue,me),E(ue),n.unbindTexture()}}}const In=[];function mt(P){if(P.samples>0){if(ve(P)===!1){const A=P.textures,X=P.width,se=P.height;let re=t.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(P),te=A.length>1;if(te)for(let fe=0;fe<A.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let fe=0;fe<A.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const D=i.get(A[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,D,0)}t.blitFramebuffer(0,0,X,se,0,0,X,se,re,t.NEAREST),l===!0&&(In.length=0,In.push(t.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&In.push(ue),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,In))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let fe=0;fe<A.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const D=i.get(A[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,D,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const A=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function gt(P){return Math.min(r.maxSamples,P.samples)}function ve(P){const A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Dt(P){const A=a.render.frame;p.get(P)!==A&&(p.set(P,A),P.update())}function Ie(P,A){const X=P.colorSpace,se=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Ol&&X!==Ji&&(Je.getTransfer(X)===at?(se!==di||re!==bn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",X)),A}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Re,this.resetTextureUnits=H,this.getTextureUnits=ee,this.setTextureUnits=ce,this.setTexture2D=xe,this.setTexture2DArray=Me,this.setTexture3D=Ne,this.setTextureCube=_e,this.rebindTextures=Ln,this.setupRenderTarget=Dn,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Pn,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=ve,this.dispose=Y}function aT(t,e){function n(i,r=Ji){let s;const a=Je.getTransfer(r);if(i===bn)return t.UNSIGNED_BYTE;if(i===Kf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===fx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===cx)return t.BYTE;if(i===ux)return t.SHORT;if(i===Va)return t.UNSIGNED_SHORT;if(i===Yf)return t.INT;if(i===mi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===gi)return t.HALF_FLOAT;if(i===hx)return t.ALPHA;if(i===px)return t.RGB;if(i===di)return t.RGBA;if(i===hr)return t.DEPTH_COMPONENT;if(i===nr)return t.DEPTH_STENCIL;if(i===mx)return t.RED;if(i===Jf)return t.RED_INTEGER;if(i===kr)return t.RG;if(i===Qf)return t.RG_INTEGER;if(i===eh)return t.RGBA_INTEGER;if(i===rl||i===sl||i===al||i===ol)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===md||i===gd||i===xd||i===vd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===md)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_d||i===Sd||i===yd||i===Md||i===Ed||i===Il||i===bd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_d||i===Sd)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Md)return s.COMPRESSED_R11_EAC;if(i===Ed)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Il)return s.COMPRESSED_RG11_EAC;if(i===bd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wd||i===Td||i===Ad||i===Cd||i===Rd||i===Nd||i===Pd||i===Ld||i===Dd||i===Id||i===Ud||i===Fd||i===Od||i===kd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Td)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ad)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ud)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bd||i===zd||i===Gd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bd)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hd||i===Vd||i===Ul||i===Wd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const oT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Cx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Br({vertexShader:oT,fragmentShader:lT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new sc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uT extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,p=null,m=null,h=null,_=null,M=null;const b=typeof XRWebGLBinding<"u",S=new cT,d={},f=n.getContextAttributes();let y=null,E=null;const R=[],T=[],g=new Xe;let w=null,U=null;const N=new Bn;N.viewport=new yt;const L=new Bn;L.viewport=new yt;const G=[N,L],$=new yM;let I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let xe=R[J];return xe===void 0&&(xe=new $c,R[J]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(J){let xe=R[J];return xe===void 0&&(xe=new $c,R[J]=xe),xe.getGripSpace()},this.getHand=function(J){let xe=R[J];return xe===void 0&&(xe=new $c,R[J]=xe),xe.getHandSpace()};function Q(J){const xe=T.indexOf(J.inputSource);if(xe===-1)return;const Me=R[xe];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",z);for(let J=0;J<R.length;J++){const xe=T[J];xe!==null&&(T[J]=null,R[J].disconnect(xe))}I=null,Y=null,S.reset();for(const J in d)delete d[J];if(e.setRenderTarget(y),_=null,h=null,m=null,r=null,E=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(g.width,g.height,!1),U!==null){const J=U.camera;J.fov=U.fov,J.zoom=U.zoom,J.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(r,n)),m},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",j),r.addEventListener("inputsourceschange",z),f.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(g),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ne=null,_e=null;f.depth&&(_e=f.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=f.stencil?nr:hr,Ne=f.stencil?Fs:mi);const Fe={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};m=this.getBinding(),h=m.createProjectionLayer(Fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new pi(h.textureWidth,h.textureHeight,{format:di,type:bn,depthTexture:new Os(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,Me),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),E=new pi(_.framebufferWidth,_.framebufferHeight,{format:di,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function z(J){for(let xe=0;xe<J.removed.length;xe++){const Me=J.removed[xe],Ne=T.indexOf(Me);Ne>=0&&(T[Ne]=null,R[Ne].disconnect(Me))}for(let xe=0;xe<J.added.length;xe++){const Me=J.added[xe];let Ne=T.indexOf(Me);if(Ne===-1){for(let Fe=0;Fe<R.length;Fe++)if(Fe>=T.length){T.push(Me),Ne=Fe;break}else if(T[Fe]===null){T[Fe]=Me,Ne=Fe;break}if(Ne===-1)break}const _e=R[Ne];_e&&_e.connect(Me)}}function k(J,xe){xe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(xe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let xe=J.near,Me=J.far;S.texture!==null&&(S.depthNear>0&&(xe=S.depthNear),S.depthFar>0&&(Me=S.depthFar)),$.near=L.near=N.near=xe,$.far=L.far=N.far=Me,(I!==$.near||Y!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),I=$.near,Y=$.far),$.layers.mask=J.layers.mask|6,N.layers.mask=$.layers.mask&-5,L.layers.mask=$.layers.mask&-3;const Ne=J.parent,_e=$.cameras;k($,Ne);for(let Fe=0;Fe<_e.length;Fe++)k(_e[Fe],Ne);$.projectionMatrix.copy(N.projectionMatrix),$.projectionMatrixInverse.copy(N.projectionMatrixInverse),U===null&&J.isPerspectiveCamera&&(U={camera:J,fov:J.fov,zoom:J.zoom}),H(J,$,Ne)};function H(J,xe,Me){Me===null?J.matrix.copy(xe.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(xe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(xe.projectionMatrix),J.projectionMatrixInverse.copy(xe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=jd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(h===null&&_===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(J){return d[J]};let ee=null;function ce(J,xe){if(p=xe.getViewerPose(c||a),M=xe,p!==null){const Me=p.views;_!==null&&(e.setRenderTargetFramebuffer(E,_.framebuffer),e.setRenderTarget(E));let Ne=!1;Me.length!==$.cameras.length&&($.cameras.length=0,Ne=!0);for(let De=0;De<Me.length;De++){const nt=Me[De];let He=null;if(_!==null)He=_.getViewport(nt);else{const bt=m.getViewSubImage(h,nt);He=bt.viewport,De===0&&(e.setRenderTargetTextures(E,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(E))}let Ge=G[De];Ge===void 0&&(Ge=new Bn,Ge.layers.enable(De),Ge.viewport=new yt,G[De]=Ge),Ge.matrix.fromArray(nt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(nt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(He.x,He.y,He.width,He.height),De===0&&($.matrix.copy(Ge.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ne===!0&&$.cameras.push(Ge)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){m=i.getBinding();const De=m.getDepthInformation(Me[0]);De&&De.isValid&&De.texture&&S.init(De,r.renderState)}if(_e&&_e.includes("camera-access")&&b){e.state.unbindTexture(),m=i.getBinding();for(let De=0;De<Me.length;De++){const nt=Me[De].camera;if(nt){let He=d[nt];He||(He=new Cx,d[nt]=He);const Ge=m.getCameraImage(nt);He.sourceTexture=Ge}}}}for(let Me=0;Me<R.length;Me++){const Ne=T[Me],_e=R[Me];Ne!==null&&_e!==void 0&&_e.update(Ne,xe,c||a)}ee&&ee(J,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),M=null}const Re=new Dx;Re.setAnimationLoop(ce),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const dT=new vt,Vx=new ke;Vx.set(-1,0,0,0,1,0,0,0,1);function fT(t,e){function n(S,d){S.matrixAutoUpdate===!0&&S.updateMatrix(),d.value.copy(S.matrix)}function i(S,d){d.color.getRGB(S.fogColor.value,Rx(t)),d.isFog?(S.fogNear.value=d.near,S.fogFar.value=d.far):d.isFogExp2&&(S.fogDensity.value=d.density)}function r(S,d,f,y,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(S,d):d.isMeshLambertMaterial?(s(S,d),d.envMap&&(S.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(S,d),m(S,d)):d.isMeshPhongMaterial?(s(S,d),p(S,d),d.envMap&&(S.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(S,d),h(S,d),d.isMeshPhysicalMaterial&&_(S,d,E)):d.isMeshMatcapMaterial?(s(S,d),M(S,d)):d.isMeshDepthMaterial?s(S,d):d.isMeshDistanceMaterial?(s(S,d),b(S,d)):d.isMeshNormalMaterial?s(S,d):d.isLineBasicMaterial?(a(S,d),d.isLineDashedMaterial&&o(S,d)):d.isPointsMaterial?l(S,d,f,y):d.isSpriteMaterial?c(S,d):d.isShadowMaterial?(S.color.value.copy(d.color),S.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(S,d){S.opacity.value=d.opacity,d.color&&S.diffuse.value.copy(d.color),d.emissive&&S.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(S.map.value=d.map,n(d.map,S.mapTransform)),d.alphaMap&&(S.alphaMap.value=d.alphaMap,n(d.alphaMap,S.alphaMapTransform)),d.bumpMap&&(S.bumpMap.value=d.bumpMap,n(d.bumpMap,S.bumpMapTransform),S.bumpScale.value=d.bumpScale,d.side===cn&&(S.bumpScale.value*=-1)),d.normalMap&&(S.normalMap.value=d.normalMap,n(d.normalMap,S.normalMapTransform),S.normalScale.value.copy(d.normalScale),d.side===cn&&S.normalScale.value.negate()),d.displacementMap&&(S.displacementMap.value=d.displacementMap,n(d.displacementMap,S.displacementMapTransform),S.displacementScale.value=d.displacementScale,S.displacementBias.value=d.displacementBias),d.emissiveMap&&(S.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,S.emissiveMapTransform)),d.specularMap&&(S.specularMap.value=d.specularMap,n(d.specularMap,S.specularMapTransform)),d.alphaTest>0&&(S.alphaTest.value=d.alphaTest);const f=e.get(d),y=f.envMap,E=f.envMapRotation;y&&(S.envMap.value=y,S.envMapRotation.value.setFromMatrix4(dT.makeRotationFromEuler(E)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Vx),S.reflectivity.value=d.reflectivity,S.ior.value=d.ior,S.refractionRatio.value=d.refractionRatio),d.lightMap&&(S.lightMap.value=d.lightMap,S.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,S.lightMapTransform)),d.aoMap&&(S.aoMap.value=d.aoMap,S.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,S.aoMapTransform))}function a(S,d){S.diffuse.value.copy(d.color),S.opacity.value=d.opacity,d.map&&(S.map.value=d.map,n(d.map,S.mapTransform))}function o(S,d){S.dashSize.value=d.dashSize,S.totalSize.value=d.dashSize+d.gapSize,S.scale.value=d.scale}function l(S,d,f,y){S.diffuse.value.copy(d.color),S.opacity.value=d.opacity,S.size.value=d.size*f,S.scale.value=y*.5,d.map&&(S.map.value=d.map,n(d.map,S.uvTransform)),d.alphaMap&&(S.alphaMap.value=d.alphaMap,n(d.alphaMap,S.alphaMapTransform)),d.alphaTest>0&&(S.alphaTest.value=d.alphaTest)}function c(S,d){S.diffuse.value.copy(d.color),S.opacity.value=d.opacity,S.rotation.value=d.rotation,d.map&&(S.map.value=d.map,n(d.map,S.mapTransform)),d.alphaMap&&(S.alphaMap.value=d.alphaMap,n(d.alphaMap,S.alphaMapTransform)),d.alphaTest>0&&(S.alphaTest.value=d.alphaTest)}function p(S,d){S.specular.value.copy(d.specular),S.shininess.value=Math.max(d.shininess,1e-4)}function m(S,d){d.gradientMap&&(S.gradientMap.value=d.gradientMap)}function h(S,d){S.metalness.value=d.metalness,d.metalnessMap&&(S.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,S.metalnessMapTransform)),S.roughness.value=d.roughness,d.roughnessMap&&(S.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,S.roughnessMapTransform)),d.envMap&&(S.envMapIntensity.value=d.envMapIntensity)}function _(S,d,f){S.ior.value=d.ior,d.diffuseRoughness>0&&(S.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(S.diffuseRoughnessMap.value=d.diffuseRoughnessMap,n(d.diffuseRoughnessMap,S.diffuseRoughnessMapTransform))),d.sheen>0&&(S.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),S.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(S.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,S.sheenColorMapTransform)),d.sheenRoughnessMap&&(S.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,S.sheenRoughnessMapTransform))),d.clearcoat>0&&(S.clearcoat.value=d.clearcoat,S.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(S.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,S.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(S.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&S.clearcoatNormalScale.value.negate())),d.dispersion>0&&(S.dispersion.value=d.dispersion),d.retroreflectivity>0&&(S.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(S.iridescence.value=d.iridescence,S.iridescenceIOR.value=d.iridescenceIOR,S.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,S.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(S.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,S.iridescenceMapTransform)),d.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),d.transmission>0&&(S.transmission.value=d.transmission,S.transmissionSamplerMap.value=f.texture,S.transmissionSamplerSize.value.set(f.width,f.height),d.transmissionMap&&(S.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,S.transmissionMapTransform)),S.thickness.value=d.thickness,d.thicknessMap&&(S.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=d.attenuationDistance,S.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(S.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(S.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=d.specularIntensity,S.specularColor.value.copy(d.specularColor),d.specularColorMap&&(S.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,S.specularColorMapTransform)),d.specularIntensityMap&&(S.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,d){d.matcap&&(S.matcap.value=d.matcap)}function b(S,d){const f=e.get(d).light;S.referencePosition.value.setFromMatrixPosition(f.matrixWorld),S.nearDistance.value=f.shadow.camera.near,S.farDistance.value=f.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hT(t,e,n,i){let r={},s={};function a(f,y){const E=y.program;i.uniformBlockBinding(f,E,r[f.id])}function o(f,y){let E=r[f.id];E===void 0&&(M(f),E=l(f),r[f.id]=E,f.addEventListener("dispose",S));const R=y.program;i.updateUBOMapping(f,R);const T=e.render.frame;s[f.id]!==T&&(c(f),s[f.id]=T)}function l(f){const y=t.createBuffer(),E=f.__size,R=f.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,E,R),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function c(f){const y=r[f.id],E=f.uniforms,R=f.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,g=E.length;T<g;T++){const w=E[T];if(Array.isArray(w))for(let U=0,N=w.length;U<N;U++)p(w[U],T,U,R);else p(w,T,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(f,y,E,R){if(h(f,y,E,R)===!0){const T=f.__offset,g=f.value;if(Array.isArray(g)){let w=0;for(let U=0;U<g.length;U++){const N=g[U],L=b(N,!0);m(N,f.__data,w),w+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else m(g,f.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,f.__data)}}function m(f,y,E){typeof f=="number"||typeof f=="boolean"?y[E]=f:f.isMatrix3?(y[E]=f.elements[0],y[E+1]=f.elements[1],y[E+2]=f.elements[2],y[E+3]=0,y[E+4]=f.elements[3],y[E+5]=f.elements[4],y[E+6]=f.elements[5],y[E+7]=0,y[E+8]=f.elements[6],y[E+9]=f.elements[7],y[E+10]=f.elements[8],y[E+11]=0):ArrayBuffer.isView(f)?y.set(f.subarray(0,y.length-E),E):f.toArray(y,E)}function h(f,y,E,R){const T=f.value,g=y+"_"+E;if(Array.isArray(T)){R[g]===void 0&&(R[g]=[]);const w=R[g];let U=!1;for(let N=0;N<T.length;N++)_(T[N],w,N)===!0&&(U=!0);return U}return _(T,R,g)}function _(f,y,E){if(y[E]===void 0)return typeof f=="number"||typeof f=="boolean"?y[E]=f:ArrayBuffer.isView(f)?y[E]=f.slice():y[E]=f.clone(),!0;{const R=y[E];if(typeof f=="number"||typeof f=="boolean"){if(R!==f)return y[E]=f,!0}else{if(ArrayBuffer.isView(f))return!0;if(R.equals(f)===!1)return R.copy(f),!0}}return!1}function M(f){const y=f.uniforms;let E=0;const R=16;for(let g=0,w=y.length;g<w;g++){const U=Array.isArray(y[g])?y[g]:[y[g]];for(let N=0,L=U.length;N<L;N++){const G=U[N],$=Array.isArray(G.value)?G.value:[G.value],I=Array.isArray(y[g])||Array.isArray(G.value);let Y=E;for(let j=0,z=$.length;j<z;j++){const k=$[j],H=b(k,I),ee=E%R,ce=ee%H.boundary,Re=ee+ce;E+=ce,Re!==0&&R-Re<H.storage&&(E+=R-Re),j===0&&(Y=E),E+=H.storage}const Q=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new Q((E-Y)/Float32Array.BYTES_PER_ELEMENT),G.__offset=Y}}const T=E%R;return T>0&&(E+=R-T),f.__size=E,f.__cache={},this}function b(f,y){const E={boundary:0,storage:0};return typeof f=="number"||typeof f=="boolean"?(E.boundary=4,E.storage=4):f.isVector2?(E.boundary=8,E.storage=8):f.isVector3||f.isColor?(E.boundary=16,E.storage=12):f.isVector4?(E.boundary=16,E.storage=16):f.isMatrix3?(E.boundary=16,E.storage=48):f.isMatrix4?(E.boundary=16,E.storage=64):f.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(f)?(E.boundary=16,E.storage=f.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",f),y===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function S(f){const y=f.target;y.removeEventListener("dispose",S),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const f in r)t.deleteBuffer(r[f]);r={},s={}}return{bind:a,update:o,dispose:d}}const pT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function mT(){return si===null&&(si=new sM(pT,16,16,kr,gi),si.name="DFG_LUT",si.minFilter=gn,si.magFilter=gn,si.wrapS=Ai,si.wrapT=Ai,si.generateMipmaps=!1,si.needsUpdate=!0),si}class gT{constructor(e={}){const{canvas:n=Py(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:_=bn}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=a;const b=_,S=new Set([eh,Qf,Jf]),d=new Set([bn,mi,Va,Fs,Kf,Zf]),f=new Uint32Array(4),y=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let R=null,T=null;const g=[],w=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let L=!1,G=null,$=null,I=null,Y=null;this._outputColorSpace=Fn;let Q=0,j=0,z=null,k=-1,H=null;const ee=new yt,ce=new yt;let Re=null;const J=new qe(0);let xe=0,Me=n.width,Ne=n.height,_e=1,Fe=null,dt=null;const De=new yt(0,0,Me,Ne),nt=new yt(0,0,Me,Ne);let He=!1;const Ge=new ja,bt=new rh;let At=!1,kt=!1;const ft=new vt,Nn=new V,wt=new yt,Pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ln=!1;function Dn(){return z===null?_e:1}let B=i;function In(C,F){return n.getContext(C,F)}let mt,gt,ve,Dt,Ie,Oe,P,A,X,se,re,ue,me,te,ne,fe,D,ie,Z,he,le,de,Pe;try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qf}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",Ve,!1),n.addEventListener("webglcontextcreationerror",Se,!1),B===null){const F="webgl2";if(B=In(F,C),B===null)throw In(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(C){throw n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ve,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),rt("WebGLRenderer: "+C.message),C}function We(){mt=new _b(B),mt.init(),le=new aT(B,mt),gt=new lb(B,mt,e,le),ve=new rT(B,mt),gt.reversedDepthBuffer&&h&&ve.buffers.depth.setReversed(!0),$=B.createFramebuffer(),I=B.createFramebuffer(),Y=B.createFramebuffer(),Dt=new Mb(B),Ie=new Ww,Oe=new sT(B,mt,ve,Ie,gt,le,Dt),P=new vb(N),A=new bM(B),de=new ab(B,A),X=new Sb(B,A,Dt,de),se=new bb(B,X,A,de,Dt),ie=new Eb(B,gt,Oe),ne=new cb(Ie),re=new Vw(N,P,mt,gt,de,ne),ue=new fT(N,Ie),me=new Xw,te=new Jw(mt),D=new sb(N,P,ve,se,M,l),fe=new iT(N,se,gt),Pe=new hT(B,Dt,gt,ve),Z=new ob(B,mt,Dt),he=new yb(B,mt,Dt),Dt.programs=re.programs,N.capabilities=gt,N.extensions=mt,N.properties=Ie,N.renderLists=me,N.shadowMap=fe,N.state=ve,N.info=Dt}b!==bn&&(U=new Tb(b,n.width,n.height,o,r,s));const oe=new uT(N,B);this.xr=oe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(Me,Ne,!1))},this.getSize=function(C){return C.set(Me,Ne)},this.setSize=function(C,F,K=!0){if(oe.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=C,Ne=F,n.width=Math.floor(C*_e),n.height=Math.floor(F*_e),K===!0&&(n.style.width=C+"px",n.style.height=F+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(Me*_e,Ne*_e).floor()},this.setDrawingBufferSize=function(C,F,K){Me=C,Ne=F,_e=K,n.width=Math.floor(C*K),n.height=Math.floor(F*K),this.setViewport(0,0,C,F)},this.setEffects=function(C){if(b===bn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let F=0;F<C.length;F++)if(C[F].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ee)},this.getViewport=function(C){return C.copy(De)},this.setViewport=function(C,F,K,W){C.isVector4?De.set(C.x,C.y,C.z,C.w):De.set(C,F,K,W),ve.viewport(ee.copy(De).multiplyScalar(Dn()).round())},this.getScissor=function(C){return C.copy(nt)},this.setScissor=function(C,F,K,W){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,F,K,W),ve.scissor(ce.copy(nt).multiplyScalar(Dn()).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(C){ve.setScissorTest(He=C)},this.setOpaqueSort=function(C){Fe=C},this.setTransparentSort=function(C){dt=C},this.getClearColor=function(C){return C.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(C=!0,F=!0,K=!0){let W=0;if(C){let q=!1;if(z!==null){const ge=z.texture.format;q=S.has(ge)}if(q){const ge=z.texture.type,we=d.has(ge),pe=D.getClearColor(),Ee=D.getClearAlpha(),Ce=pe.r,Be=pe.g,Ke=pe.b;we?(f[0]=Ce,f[1]=Be,f[2]=Ke,f[3]=Ee,B.clearBufferuiv(B.COLOR,0,f)):(y[0]=Ce,y[1]=Be,y[2]=Ke,y[3]=Ee,B.clearBufferiv(B.COLOR,0,y))}else W|=B.COLOR_BUFFER_BIT}F&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),G=C},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ve,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),D.dispose(),me.dispose(),te.dispose(),Oe.dispose(),Ie.dispose(),P.dispose(),se.dispose(),X.dispose(),de.dispose(),Pe.dispose(),re.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",gh),oe.removeEventListener("sessionend",xh),xr.stop()};function Le(C){C.preventDefault(),Xp("WebGLRenderer: Context Lost."),L=!0}function Ve(){Xp("WebGLRenderer: Context Restored."),L=!1;const C=Dt.autoReset,F=fe.enabled,K=fe.autoUpdate,W=fe.needsUpdate,q=fe.type;We(),Dt.autoReset=C,fe.enabled=F,fe.autoUpdate=K,fe.needsUpdate=W,fe.type=q}function Se(C){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function st(C){const F=C.target;F.removeEventListener("dispose",st),Bt(F)}function Bt(C){Bi(C),Ie.remove(C)}function Bi(C){const F=Ie.get(C).programs;F!==void 0&&(F.forEach(function(K){re.releaseProgram(K)}),C.isShaderMaterial&&re.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,K,W,q,ge){F===null&&(F=Pn);const we=q.isMesh&&q.matrixWorld.determinantAffine()<0,pe=Xx(C,F,K,W,q);ve.setMaterial(W,we);let Ee=K.index,Ce=1;if(W.wireframe===!0){if(Ee=X.getWireframeAttribute(K),Ee===void 0)return;Ce=2}const Be=K.drawRange,Ke=K.attributes.position;let Te=Be.start*Ce,Ze=(Be.start+Be.count)*Ce;ge!==null&&(Te=Math.max(Te,ge.start*Ce),Ze=Math.min(Ze,(ge.start+ge.count)*Ce)),Ee!==null?(Te=Math.max(Te,0),Ze=Math.min(Ze,Ee.count)):Ke!=null&&(Te=Math.max(Te,0),Ze=Math.min(Ze,Ke.count));const Nt=Ze-Te;if(Nt<0||Nt===1/0)return;de.setup(q,W,pe,K,Ee);let ct,lt=Z;if(Ee!==null&&(ct=A.get(Ee),lt=he,lt.setIndex(ct)),q.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*Dn()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(q.isLine){let Kt=W.linewidth;Kt===void 0&&(Kt=1),ve.setLineWidth(Kt*Dn()),q.isLineSegments?lt.setMode(B.LINES):q.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else q.isPoints?lt.setMode(B.POINTS):q.isSprite&&lt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))lt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Kt=q._multiDrawStarts,Ae=q._multiDrawCounts,sn=q._multiDrawCount,it=Ee?A.get(Ee).bytesPerElement:1,vr=Ie.get(W).currentProgram.getUniforms();for(let Zt=0;Zt<sn;Zt++)vr.setValue(B,"_gl_DrawID",Zt),lt.render(Kt[Zt]/it,Ae[Zt])}else if(q.isInstancedMesh)lt.renderInstances(Te,Nt,q.count);else if(K.isInstancedBufferGeometry){const Kt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ae=Math.min(K.instanceCount,Kt);lt.renderInstances(Te,Nt,Ae)}else lt.render(Te,Nt)};function mh(C,F,K,W){G!==null&&C.isNodeMaterial&&G.setObject(W,C),At===!0&&ne.setState(C,K,!1),C.transparent===!0&&C.side===ci&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,Ws(C,F,W),C.side=Or,C.needsUpdate=!0,Ws(C,F,W),C.side=ci):Ws(C,F,W)}this.compile=function(C,F,K=null){K===null&&(K=C),G!==null&&G.renderStart(C,F,K),T=te.get(K),T.init(F),w.push(T),K.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),C!==K&&C.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),kt=this.localClippingEnabled,At=ne.init(this.clippingPlanes,kt),At===!0&&ne.setGlobalState(this.clippingPlanes,F),G!==null&&fe.render(T.state.shadowsArray,K,F);const W=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ge=q.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const pe=ge[we];mh(pe,K,F,q),W.add(pe)}else mh(ge,K,F,q),W.add(ge)}),T=w.pop(),G!==null&&G.renderEnd(),W},this.compileAsync=function(C,F,K=null){const W=this.compile(C,F,K);return new Promise(q=>{function ge(){if(W.forEach(function(we){const Ee=Ie.get(we).currentProgram;(Ee===void 0||Ee.isReady())&&W.delete(we)}),W.size===0){q(C);return}setTimeout(ge,10)}mt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let lc=null;function Wx(C){lc&&lc(C)}function gh(){xr.stop()}function xh(){xr.start()}const xr=new Dx;xr.setAnimationLoop(Wx),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(C){lc=C,oe.setAnimationLoop(C),C===null?xr.stop():xr.start()},oe.addEventListener("sessionstart",gh),oe.addEventListener("sessionend",xh),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;G!==null&&G.renderStart(C,F);const K=oe.enabled===!0&&oe.isPresenting===!0,W=U!==null&&(z===null||K)&&U.begin(N,z);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,F,z),T=te.get(C,w.length),T.init(F),T.state.textureUnits=Oe.getTextureUnits(),w.push(T),ft.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?bt.setFromArrayCamera(F):Ge.setFromProjectionMatrix(ft,Qn,F.reversedDepth),kt=this.localClippingEnabled,At=ne.init(this.clippingPlanes,kt),R=me.get(C,g.length),R.init(),g.push(R),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){const we=N.xr.getDepthSensingMesh();we!==null&&cc(we,F,-1/0,N.sortObjects)}cc(C,F,0,N.sortObjects),R.finish(),G!==null&&G.updateLights(T.state.lightsArray),N.sortObjects===!0&&R.sort(Fe,dt),Ln=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ln&&D.addToRenderList(R,C),this.info.autoReset===!0&&this.info.reset(),At===!0&&ne.beginShadows();const q=T.state.shadowsArray;if(fe.render(q,C,F),At===!0&&ne.endShadows(),(W&&U.hasRenderPass())===!1){const we=R.opaque,pe=R.transmissive;if(T.setupLights(),F.isArrayCamera){const Ee=F.cameras;if(pe.length>0)for(let Ce=0,Be=Ee.length;Ce<Be;Ce++){const Ke=Ee[Ce];_h(we,pe,C,Ke)}Ln&&D.render(C);for(let Ce=0,Be=Ee.length;Ce<Be;Ce++){const Ke=Ee[Ce];vh(R,C,Ke,Ke.viewport)}}else pe.length>0&&_h(we,pe,C,F),Ln&&D.render(C),vh(R,C,F)}z!==null&&j===0&&(Oe.updateMultisampleRenderTarget(z),Oe.updateRenderTargetMipmap(z)),W&&U.end(N),C.isScene===!0&&C.onAfterRender(N,C,F),de.resetDefaultState(),k=-1,H=null,w.pop(),w.length>0?(T=w[w.length-1],Oe.setTextureUnits(T.state.textureUnits),At===!0&&ne.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?R=g[g.length-1]:R=null,G!==null&&G.renderEnd()};function cc(C,F,K,W){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){const we=F.isArrayCamera?bt:Ge;if(!C.frustumCulled||C.intersectsFrustum(we)){W&&wt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ft);const pe=se.update(C),Ee=C.material;Ee.visible&&R.push(C,pe,Ee,K,wt.z,null,F)}}else if(C.isMesh||C.isLine||C.isPoints){const we=F.isArrayCamera?bt:Ge;if(!C.frustumCulled||C.intersectsFrustum(we)){const pe=se.update(C),Ee=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),wt.copy(C.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),wt.copy(pe.boundingSphere.center)),wt.applyMatrix4(C.matrixWorld).applyMatrix4(ft)),Array.isArray(Ee)){const Ce=pe.groups;for(let Be=0,Ke=Ce.length;Be<Ke;Be++){const Te=Ce[Be],Ze=Ee[Te.materialIndex];Ze&&Ze.visible&&R.push(C,pe,Ze,K,wt.z,Te,F)}}else Ee.visible&&R.push(C,pe,Ee,K,wt.z,null,F)}}}const ge=C.children;for(let we=0,pe=ge.length;we<pe;we++)cc(ge[we],F,K,W)}function vh(C,F,K,W){const{opaque:q,transmissive:ge,transparent:we}=C;T.setupLightsView(K),At===!0&&ne.setGlobalState(N.clippingPlanes,K),W&&ve.viewport(ee.copy(W)),q.length>0&&to(q,F,K),ge.length>0&&to(ge,F,K),we.length>0&&to(we,F,K),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function _h(C,F,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const Te=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new pi(1,1,{generateMipmaps:!0,type:Te?gi:bn,minFilter:tr,samples:Math.max(4,gt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const ge=T.state.transmissionRenderTarget[W.id],we=W.viewport||ee;ge.setSize(we.z*N.transmissionResolutionScale,we.w*N.transmissionResolutionScale);const pe=N.getRenderTarget(),Ee=N.getActiveCubeFace(),Ce=N.getActiveMipmapLevel();N.setRenderTarget(ge),N.getClearColor(J),xe=N.getClearAlpha(),xe<1&&N.setClearColor(16777215,.5),N.clear(),Ln&&D.render(K);const Be=N.toneMapping;N.toneMapping=Ri;const Ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),At===!0&&ne.setGlobalState(N.clippingPlanes,W),to(C,K,W),Oe.updateMultisampleRenderTarget(ge),Oe.updateRenderTargetMipmap(ge),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ze=0,Nt=F.length;Ze<Nt;Ze++){const ct=F[Ze],{object:lt,geometry:Kt,material:Ae,group:sn}=ct;if(Ae.side===ci&&lt.layers.test(W.layers)){const it=Ae.side;Ae.side=cn,Ae.needsUpdate=!0,Sh(lt,K,W,Kt,Ae,sn),Ae.side=it,Ae.needsUpdate=!0,Te=!0}}Te===!0&&(Oe.updateMultisampleRenderTarget(ge),Oe.updateRenderTargetMipmap(ge))}N.setRenderTarget(pe,Ee,Ce),N.setClearColor(J,xe),Ke!==void 0&&(W.viewport=Ke),N.toneMapping=Be}function to(C,F,K){const W=F.isScene===!0?F.overrideMaterial:null;for(let q=0,ge=C.length;q<ge;q++){const we=C[q],{object:pe,geometry:Ee,group:Ce}=we;let Be=we.material;Be.allowOverride===!0&&W!==null&&(Be=W),pe.layers.test(K.layers)&&Sh(pe,F,K,Ee,Be,Ce)}}function Sh(C,F,K,W,q,ge){G!==null&&q.isNodeMaterial&&G.setObject(C,q),C.onBeforeRender(N,F,K,W,q,ge),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(N,F,K,W,C,ge),q.transparent===!0&&q.side===ci&&q.forceSinglePass===!1?(q.side=cn,q.needsUpdate=!0,N.renderBufferDirect(K,F,W,q,C,ge),q.side=Or,q.needsUpdate=!0,N.renderBufferDirect(K,F,W,q,C,ge),q.side=ci):N.renderBufferDirect(K,F,W,q,C,ge),C.onAfterRender(N,F,K,W,q,ge)}function yh(C){let F=0;for(const K of C)K.texture!==null&&F++;return F}function Ws(C,F,K){F.isScene!==!0&&(F=Pn);const W=Ie.get(C),q=T.state.lights,ge=T.state.shadowsArray,we=q.state.version,pe=re.getParameters(C,q.state,ge,F,K,T.state.lightProbeGridArray),Ee=re.getProgramCacheKey(pe);let Ce=W.programs;W.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const Be=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;W.envMap=P.get(C.envMap||W.environment,Be),W.envMapRotation=W.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,Ce===void 0&&(C.addEventListener("dispose",st),Ce=new Map,W.programs=Ce,W.programVariants=new Map);let Ke=Ce.get(Ee);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===we)return Eh(C,pe),Ke}else pe.uniforms=re.getUniforms(C),G!==null&&C.isNodeMaterial&&G.build(C,K,pe),C.onBeforeCompile(pe,N),Ke=re.acquireProgram(pe,Ee),Ce.set(Ee,Ke),W.uniforms=pe.uniforms;const Te=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Te.clippingPlanes=ne.uniform),Eh(C,pe),W.needsLights=$x(C),W.lightsStateVersion=we,W.needsLights&&(Te.ambientLightColor.value=q.state.ambient,Te.lightProbe.value=q.state.probe,Te.sunLights.value=q.state.sun,Te.sunLightShadows.value=q.state.sunShadow,Te.directionalLights.value=q.state.directional,Te.directionalLightShadows.value=q.state.directionalShadow,Te.spotLights.value=q.state.spot,Te.spotLightShadows.value=q.state.spotShadow,Te.rectAreaLights.value=q.state.rectArea,Te.ltc_1.value=q.state.rectAreaLTC1,Te.ltc_2.value=q.state.rectAreaLTC2,Te.pointLights.value=q.state.point,Te.pointLightShadows.value=q.state.pointShadow,Te.hemisphereLights.value=q.state.hemi,Te.sunShadowMatrix.value=q.state.sunShadowMatrix,Te.sunShadowCascade.value=q.state.sunShadowCascade,Te.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Te.spotLightMatrix.value=q.state.spotLightMatrix,Te.spotLightMap.value=q.state.spotLightMap,Te.pointShadowMatrix.value=q.state.pointShadowMatrix),W.numLightProbeGrids=yh(T.state.lightProbeGridArray),W.currentProgram=Ke,W.uniformsList=null,Ke}function jx(C,F,K,W,q){const ge=Ie.get(C),we=ge.currentProgram.id+","+W+","+q;let pe=ge.programVariants.get(we);return pe===void 0?(pe=Ws(C,F,K),ge.programVariants.set(we,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=W,ge.toneMapping=q),pe}function Mh(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=cl.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function Eh(C,F){const K=Ie.get(C);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Xx(C,F,K,W,q){F.isScene!==!0&&(F=Pn),Oe.resetTextureUnits();const ge=F.fog,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,pe=z===null?N.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Je.workingColorSpace,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ce=P.get(W.envMap||we,Ee),Be=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ke=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!K.morphAttributes.position,Ze=!!K.morphAttributes.normal,Nt=!!K.morphAttributes.color;let ct=Ri;W.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ct=N.toneMapping);const lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Kt=lt!==void 0?lt.length:0,Ae=Ie.get(W),sn=T.state.lights;if(At===!0&&(kt===!0||C!==H)){const _t=C===H&&W.id===k;ne.setState(W,C,_t)}let it=!1,vr=!1;W.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==sn.state.version||q.isBatchedMesh&&Ae.batching===!1||!q.isBatchedMesh&&Ae.batching===!0||q.isBatchedMesh&&Ae.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ae.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ae.instancing===!1||!q.isInstancedMesh&&Ae.instancing===!0||q.isSkinnedMesh&&Ae.skinning===!1||!q.isSkinnedMesh&&Ae.skinning===!0||q.isInstancedMesh&&Ae.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ae.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ae.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ae.instancingMorph===!1&&q.morphTexture!==null||Ae.envMap!==Ce||W.fog===!0&&Ae.fog!==ge||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==Be||Ae.vertexTangents!==Ke||Ae.morphTargets!==Te||Ae.morphNormals!==Ze||Ae.morphColors!==Nt||Ae.morphTargetsCount!==Kt||Ae.numLightProbeGrids!==yh(T.state.lightProbeGridArray)?it=!0:(Ae.outputColorSpace!==pe||Ae.toneMapping!==ct)&&(vr=!0):(it=!0,Ae.__version=W.version);let Zt=Ae.currentProgram;(it===!0||vr===!0)&&(Zt=vr===!0?jx(W,F,q,pe,ct):Ws(W,F,q),G&&W.isNodeMaterial&&G.onUpdateProgram(W,Zt,Ae));let no=!1,zi=!1,_r=!1;const et=Zt.getUniforms(),Wt=Ae.uniforms;if(ve.useProgram(Zt.program)&&(no=!0,zi=!0,_r=!0),W.id!==k&&(k=W.id,zi=!0),no||H!==C){ve.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),et.setValue(B,"projectionMatrix",C.projectionMatrix),et.setValue(B,"viewMatrix",C.matrixWorldInverse);const zt=et.map.cameraPosition;zt!==void 0&&zt.setValue(B,Nn.setFromMatrixPosition(C.matrixWorld)),gt.logarithmicDepthBuffer&&et.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&et.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),H!==C&&(H=C,zi=!0,_r=!0)}if(Ae.needsLights&&(sn.state.sunShadowMap.length>0&&et.setValue(B,"sunShadowMap",sn.state.sunShadowMap,Oe),sn.state.directionalShadowMap.length>0&&et.setValue(B,"directionalShadowMap",sn.state.directionalShadowMap,Oe),sn.state.spotShadowMap.length>0&&et.setValue(B,"spotShadowMap",sn.state.spotShadowMap,Oe),sn.state.pointShadowMap.length>0&&et.setValue(B,"pointShadowMap",sn.state.pointShadowMap,Oe)),q.isSkinnedMesh){et.setOptional(B,q,"bindMatrix"),et.setOptional(B,q,"bindMatrixInverse");const _t=q.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),et.setValue(B,"boneTexture",_t.boneTexture,Oe))}q.isBatchedMesh&&(et.setOptional(B,q,"batchingTexture"),et.setValue(B,"batchingTexture",q._matricesTexture,Oe),et.setOptional(B,q,"batchingIdTexture"),et.setValue(B,"batchingIdTexture",q._indirectTexture,Oe),et.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&et.setValue(B,"batchingColorTexture",q._colorsTexture,Oe));const Wn=K.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&ie.update(q,K,Zt),(zi||Ae.receiveShadow!==q.receiveShadow)&&(Ae.receiveShadow=q.receiveShadow,et.setValue(B,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Wt.envMapIntensity.value=F.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=mT()),zi){if(et.setValue(B,"toneMappingExposure",N.toneMappingExposure),Ae.needsLights&&qx(Wt,_r),ge&&W.fog===!0&&ue.refreshFogUniforms(Wt,ge),ue.refreshMaterialUniforms(Wt,W,_e,Ne,T.state.transmissionRenderTarget[C.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){const _t=E;let zt=0;for(const xi of T.state.lightProbeGridArray)xi.texture!==null&&(_t.textures[zt]=xi.texture,_t.min[zt]=xi.boundingBox.min,_t.max[zt]=xi.boundingBox.max,_t.resolution[zt]=xi.resolution,zt++);for(const xi in _t)_t[xi].length=zt;Wt.probesSH.value=_t.textures,Wt.probesMin.value=_t.min,Wt.probesMax.value=_t.max,Wt.probesResolution.value=_t.resolution}cl.upload(B,Mh(Ae),Wt,Oe)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(cl.upload(B,Mh(Ae),Wt,Oe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&et.setValue(B,"center",q.center),et.setValue(B,"modelViewMatrix",q.modelViewMatrix),et.setValue(B,"normalMatrix",q.normalMatrix),et.setValue(B,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){const _t=W.uniformsGroups;for(let zt=0,xi=_t.length;zt<xi;zt++){const wh=_t[zt];Pe.update(wh,Zt),Pe.bind(wh,Zt)}}return Zt}function qx(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.sunLights.needsUpdate=F,C.sunLightShadows.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function $x(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,F,K){const W=Ie.get(C);W.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ie.get(C.texture).__webglTexture=F,Ie.get(C.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,F){const K=Ie.get(C);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,K=0){z=C,Q=F,j=K;let W=null,q=!1,ge=!1;if(C){const pe=Ie.get(C);if(pe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(B.FRAMEBUFFER,pe.__webglFramebuffer),ee.copy(C.viewport),ce.copy(C.scissor),Re=C.scissorTest,ve.viewport(ee),ve.scissor(ce),ve.setScissorTest(Re),k=-1;return}else if(pe.__webglFramebuffer===void 0)Oe.setupRenderTarget(C);else if(pe.__hasExternalTextures)Oe.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Be=C.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&Ie.has(Be)&&(C.width!==Be.image.width||C.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(C)}}const Ee=C.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const Ce=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?W=Ce[F][K]:W=Ce[F],q=!0):C.samples>0&&Oe.useMultisampledRTT(C)===!1?W=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray(Ce)?W=Ce[K]:W=Ce,ee.copy(C.viewport),ce.copy(C.scissor),Re=C.scissorTest}else ee.copy(De).multiplyScalar(_e).floor(),ce.copy(nt).multiplyScalar(_e).floor(),Re=He;if(K!==0&&(W=$),ve.bindFramebuffer(B.FRAMEBUFFER,W)&&ve.drawBuffers(C,W),ve.viewport(ee),ve.scissor(ce),ve.setScissorTest(Re),q){const pe=Ie.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,K)}else if(ge){const pe=F;for(let Ee=0;Ee<C.textures.length;Ee++){const Ce=Ie.get(C.textures[Ee]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,K,pe)}}else if(C!==null&&K!==0){const pe=Ie.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pe.__webglTexture,K)}k=-1};function bh(C){const F=Ie.get(C);return(F.__readFormat!==C.format||F.__readType!==C.type)&&(F.__readFormat=C.format,F.__readType=C.type,F.__formatReadable=gt.textureFormatReadable(C.format),F.__typeReadable=gt.textureTypeReadable(C.type)),F}this.readRenderTargetPixels=function(C,F,K,W,q,ge,we,pe=0){if(!(C&&C.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){ve.bindFramebuffer(B.FRAMEBUFFER,Ee);try{const Ce=C.textures[pe],Be=Ce.format,Ke=Ce.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pe);const Te=bh(Ce);if(Te.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-W&&K>=0&&K<=C.height-q&&B.readPixels(F,K,W,q,le.convert(Be),le.convert(Ke),ge)}finally{const Ce=z!==null?Ie.get(z).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(C,F,K,W,q,ge,we,pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(F>=0&&F<=C.width-W&&K>=0&&K<=C.height-q){ve.bindFramebuffer(B.FRAMEBUFFER,Ee);const Ce=C.textures[pe],Be=Ce.format,Ke=Ce.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pe);const Te=bh(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ze),B.bufferData(B.PIXEL_PACK_BUFFER,ge.byteLength,B.STREAM_READ),B.readPixels(F,K,W,q,le.convert(Be),le.convert(Ke),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Nt=z!==null?Ie.get(z).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,Nt);const ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ly(B,ct,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ge),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ze),B.deleteSync(ct),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,F=null,K=0){const W=Math.pow(2,-K),q=Math.floor(C.image.width*W),ge=Math.floor(C.image.height*W),we=F!==null?F.x:0,pe=F!==null?F.y:0;Oe.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,we,pe,q,ge),ve.unbindTexture()},this.copyTextureToTexture=function(C,F,K=null,W=null,q=0,ge=0){let we,pe,Ee,Ce,Be,Ke,Te,Ze,Nt;const ct=C.isCompressedTexture?C.mipmaps[ge]:C.image;if(K!==null)we=K.max.x-K.min.x,pe=K.max.y-K.min.y,Ee=K.isBox3?K.max.z-K.min.z:1,Ce=K.min.x,Be=K.min.y,Ke=K.isBox3?K.min.z:0;else{const et=Math.pow(2,-q);we=Math.floor(ct.width*et),pe=Math.floor(ct.height*et),C.isDataArrayTexture?Ee=ct.depth:C.isData3DTexture?Ee=Math.floor(ct.depth*et):Ee=1,Ce=0,Be=0,Ke=0}W!==null?(Te=W.x,Ze=W.y,Nt=W.z):(Te=0,Ze=0,Nt=0);const lt=le.convert(F.format),Kt=le.convert(F.type);let Ae;F.isData3DTexture?(Oe.setTexture3D(F,0),Ae=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Oe.setTexture2DArray(F,0),Ae=B.TEXTURE_2D_ARRAY):(Oe.setTexture2D(F,0),Ae=B.TEXTURE_2D),ve.activeTexture(B.TEXTURE0),ve.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),ve.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ve.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const sn=ve.getParameter(B.UNPACK_ROW_LENGTH),it=ve.getParameter(B.UNPACK_IMAGE_HEIGHT),vr=ve.getParameter(B.UNPACK_SKIP_PIXELS),Zt=ve.getParameter(B.UNPACK_SKIP_ROWS),no=ve.getParameter(B.UNPACK_SKIP_IMAGES);ve.pixelStorei(B.UNPACK_ROW_LENGTH,ct.width),ve.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct.height),ve.pixelStorei(B.UNPACK_SKIP_PIXELS,Ce),ve.pixelStorei(B.UNPACK_SKIP_ROWS,Be),ve.pixelStorei(B.UNPACK_SKIP_IMAGES,Ke);const zi=C.isDataArrayTexture||C.isData3DTexture,_r=F.isDataArrayTexture||F.isData3DTexture;if(C.isDepthTexture){const et=Ie.get(C),Wt=Ie.get(F),Wn=Ie.get(et.__renderTarget),_t=Ie.get(Wt.__renderTarget);ve.bindFramebuffer(B.READ_FRAMEBUFFER,Wn.__webglFramebuffer),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let zt=0;zt<Ee;zt++)zi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.get(C).__webglTexture,q,Ke+zt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.get(F).__webglTexture,ge,Nt+zt)),B.blitFramebuffer(Ce,Be,Ce+we,Be+pe,Te,Ze,Te+we,Ze+pe,B.DEPTH_BUFFER_BIT,B.NEAREST);ve.bindFramebuffer(B.READ_FRAMEBUFFER,null),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||Ie.has(C)){const et=Ie.get(C),Wt=Ie.get(F);ve.bindFramebuffer(B.READ_FRAMEBUFFER,I),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,Y);for(let Wn=0;Wn<Ee;Wn++)zi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,et.__webglTexture,q,Ke+Wn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,et.__webglTexture,q),_r?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wt.__webglTexture,ge,Nt+Wn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Wt.__webglTexture,ge),q!==0?B.blitFramebuffer(Ce,Be,Ce+we,Be+pe,Te,Ze,Te+we,Ze+pe,B.COLOR_BUFFER_BIT,B.NEAREST):_r?B.copyTexSubImage3D(Ae,ge,Te,Ze,Nt+Wn,Ce,Be,we,pe):B.copyTexSubImage2D(Ae,ge,Te,Ze,Ce,Be,we,pe);ve.bindFramebuffer(B.READ_FRAMEBUFFER,null),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else _r?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Ae,ge,Te,Ze,Nt,we,pe,Ee,lt,Kt,ct.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Ae,ge,Te,Ze,Nt,we,pe,Ee,lt,ct.data):B.texSubImage3D(Ae,ge,Te,Ze,Nt,we,pe,Ee,lt,Kt,ct):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ge,Te,Ze,we,pe,lt,Kt,ct.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ge,Te,Ze,ct.width,ct.height,lt,ct.data):B.texSubImage2D(B.TEXTURE_2D,ge,Te,Ze,we,pe,lt,Kt,ct);ve.pixelStorei(B.UNPACK_ROW_LENGTH,sn),ve.pixelStorei(B.UNPACK_IMAGE_HEIGHT,it),ve.pixelStorei(B.UNPACK_SKIP_PIXELS,vr),ve.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),ve.pixelStorei(B.UNPACK_SKIP_IMAGES,no),ge===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(Ae),ve.unbindTexture()},this.initRenderTarget=function(C){Ie.get(C).__webglFramebuffer===void 0&&Oe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Oe.setTextureCube(C,0):C.isData3DTexture?Oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Oe.setTexture2DArray(C,0):Oe.setTexture2D(C,0),ve.unbindTexture()},this.resetState=function(){Q=0,j=0,z=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}function xT(){const t=ze.useRef(null),[e,n]=ze.useState("globe"),[i,r]=ze.useState(!0),[s,a]=ze.useState(.003),[o,l]=ze.useState(null),[c,p]=ze.useState(!1),m=[{name:"Great Barrier Reef (Australia)",lat:-18.28,lon:147.7,depth:"45m",sst:"27.4°C",species:"1,500+ species",color:6619098},{name:"Monterey Bay Sanctuary (USA)",lat:36.6,lon:-121.89,depth:"1,200m",sst:"14.2°C",species:"Kelp Forest Apex",color:3718648},{name:"Coral Triangle (Indonesia)",lat:-1.5,lon:125,depth:"85m",sst:"29.1°C",species:"Global Epicenter",color:3462041},{name:"Mariana Trench (Abyssal Zone)",lat:11.35,lon:142.2,depth:"10,984m",sst:"1.8°C",species:"Hadal Extremophiles",color:16096779},{name:"Mid-Atlantic Ridge (Hydrothermal)",lat:37,lon:-32,depth:"2,600m",sst:"2.5°C",species:"Chemosynthetic Vent Biota",color:16007006}],h=(_,M,b)=>{const S=(90-_)*(Math.PI/180),d=(M+180)*(Math.PI/180),f=-(b*Math.sin(S)*Math.cos(d)),y=b*Math.sin(S)*Math.sin(d),E=b*Math.cos(S);return new V(f,E,y)};return ze.useEffect(()=>{const _=t.current;if(!_)return;const M=new Zy;M.fog=new ih(330776,.04);const b=_.clientWidth,S=_.clientHeight||550,d=new Bn(45,b/S,.1,1e3);d.position.set(0,5,20);const f=new gT({antialias:!0,alpha:!0});f.setSize(b,S),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setClearColor(0,0),_.innerHTML="",_.appendChild(f.domElement);const y=new SM(16777215,.7);M.add(y);const E=new _M(6619098,1.5);E.position.set(10,20,15),M.add(E);const R=new xM(165063,2,50);R.position.set(-15,-10,-10),M.add(R);const T=new ca;M.add(T);let g;if(e==="globe"){const k=new xs(6,64,64),H=new hM({color:466493,emissive:332582,specular:6619098,shininess:35,wireframe:!1,transparent:!0,opacity:.92}),ee=new hn(k,H);T.add(ee);const ce=new xs(6+.05,24,24),Re=new rs({color:3718648,wireframe:!0,transparent:!0,opacity:.15}),J=new hn(ce,Re);T.add(J);const xe=new xs(6+.8,48,48),Me=new rs({color:6619098,transparent:!0,opacity:.08,side:cn}),Ne=new hn(xe,Me);T.add(Ne);const _e=600,Fe=new Sn,dt=new Float32Array(_e*3);for(let He=0;He<_e;He++){const Ge=He/_e*Math.PI*2,bt=6+.4+Math.sin(He*.1)*.3;dt[He*3]=Math.cos(Ge)*bt,dt[He*3+1]=Math.sin(Ge*3)*.6,dt[He*3+2]=Math.sin(Ge)*bt}Fe.setAttribute("position",new Pi(dt,3));const De=new Xd({color:6619098,size:.12,transparent:!0,opacity:.8}),nt=new cm(Fe,De);T.add(nt),m.forEach(He=>{const Ge=h(He.lat,He.lon,6.1),bt=new xs(.18,16,16),At=new rs({color:He.color}),kt=new hn(bt,At);kt.position.copy(Ge),kt.userData=He,T.add(kt);const ft=new oh(.2,.4,24),Nn=new rs({color:He.color,side:ci,transparent:!0,opacity:.6}),wt=new hn(ft,Nn);wt.position.copy(Ge),wt.lookAt(0,0,0),T.add(wt)})}else if(e==="particles"){const k=new Sn,H=new Float32Array(2e3*3);for(let Re=0;Re<2e3;Re++)H[Re*3]=(Math.random()-.5)*25,H[Re*3+1]=(Math.random()-.5)*15,H[Re*3+2]=(Math.random()-.5)*20;k.setAttribute("position",new Pi(H,3));const ee=new Xd({color:6619098,size:.15,transparent:!0,opacity:.75}),ce=new cm(k,ee);T.add(ce)}else if(e==="hologram"){const z=new lh(4.5,1.4,128,32),k=new fM({color:6619098,wireframe:!0,emissive:165063,emissiveIntensity:.4}),H=new hn(z,k);T.add(H);const ee=new ah(2.5,2),ce=new rs({color:3718648,wireframe:!0,transparent:!0,opacity:.4}),Re=new hn(ee,ce);T.add(Re)}let w=!1,U={x:0,y:0};const N=z=>{w=!0,U={x:z.clientX,y:z.clientY}},L=z=>{if(!w)return;const k=z.clientX-U.x,H=z.clientY-U.y;T.rotation.y+=k*.006,T.rotation.x+=H*.006,U={x:z.clientX,y:z.clientY}},G=()=>{w=!1},$=z=>{d.position.z=Math.max(8,Math.min(40,d.position.z+z.deltaY*.02))},I=f.domElement;I.addEventListener("mousedown",N),window.addEventListener("mousemove",L),window.addEventListener("mouseup",G),I.addEventListener("wheel",$,{passive:!0});const Y=()=>{if(!_)return;const z=_.clientWidth,k=_.clientHeight||550;d.aspect=z/k,d.updateProjectionMatrix(),f.setSize(z,k)};window.addEventListener("resize",Y);let Q=new MM;const j=()=>{if(g=requestAnimationFrame(j),Q.getDelta(),i&&!w&&(T.rotation.y+=s),e==="particles"){const z=T.children[0];if(z&&z.geometry){const k=z.geometry.attributes.position.array;for(let H=0;H<k.length/3;H++)k[H*3]+=.04,k[H*3]>12&&(k[H*3]=-12),k[H*3+1]+=Math.sin(Q.getElapsedTime()+H)*.006;z.geometry.attributes.position.needsUpdate=!0}}f.render(M,d)};return j(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",Y),window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",G),I.removeEventListener("mousedown",N),I.removeEventListener("wheel",$),_.contains(I)&&_.removeChild(I),f.dispose()}},[e,i,s]),u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.3)] text-[#64ffda] text-xs font-semibold mb-3",children:[u.jsx(bs,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Three.js 3D Interactive Graphics Studio"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:"Three.js 3D Ocean Space"}),u.jsx("p",{className:"text-sm sm:text-base text-[#94a3b8] mt-2",children:"Dedicated 3D canvas and development playground for you to craft WebGL shaders, 3D bathymetry, specimen morphometry models, and ocean current visualizers."})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 glass-panel p-4",children:[u.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"globe",label:"3D Ocean Globe & Stations",icon:PS},{id:"particles",label:"Underwater Vector Field Flow",icon:Fi},{id:"hologram",label:"Morphological Specimen Mesh",icon:bs}].map(_=>{const M=_.icon,b=e===_.id;return u.jsxs("button",{onClick:()=>n(_.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${b?"bg-gradient-to-r from-[#64ffda] to-[#38bdf8] text-[#050c18] shadow-md":"text-[#94a3b8] hover:text-white bg-[rgba(5,12,24,0.6)]"}`,children:[u.jsx(M,{className:"w-4 h-4"}),u.jsx("span",{children:_.label})]},_.id)})}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("button",{onClick:()=>r(!i),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all ${i?"bg-[rgba(100,255,218,0.15)] text-[#64ffda] border-[#64ffda]":"bg-[rgba(5,12,24,0.6)] text-[#94a3b8] border-[rgba(255,255,255,0.1)]"}`,children:[u.jsx(kS,{className:`w-3.5 h-3.5 ${i?"animate-spin-slow":""}`}),u.jsx("span",{children:i?"Auto-Orbit: ON":"Auto-Orbit: OFF"})]}),u.jsxs("button",{onClick:()=>p(!c),className:"btn-ocean text-xs py-1.5",children:[u.jsx(Fp,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:c?"Hide Developer Notes":"Three.js Dev Notes"})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[u.jsxs("div",{className:"lg:col-span-8 glass-panel p-2 relative overflow-hidden rounded-2xl",children:[u.jsx("div",{ref:t,className:"w-full h-[540px] cursor-grab active:cursor-grabbing rounded-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#07192f] via-[#050c18] to-[#02050b]"}),u.jsx("div",{className:"absolute bottom-4 left-4 pointer-events-none text-[11px] font-mono text-[#94a3b8] bg-[rgba(5,12,24,0.7)] px-3 py-1.5 rounded-lg backdrop-blur border border-[rgba(100,255,218,0.15)]",children:"🖱️ Left Click + Drag: Rotate 3D Space • Scroll: Zoom Camera"})]}),u.jsxs("div",{className:"lg:col-span-4 space-y-6",children:[u.jsxs("div",{className:"glass-panel p-6",children:[u.jsxs("h3",{className:"text-base font-bold text-white mb-3 flex items-center gap-2",children:[u.jsx(Fr,{className:"w-4 h-4 text-[#64ffda]"}),u.jsx("span",{children:"Marine Observation Stations"})]}),u.jsx("p",{className:"text-xs text-[#94a3b8] mb-4",children:"Real-world oceanographic monitoring stations mapped on the 3D globe:"}),u.jsx("div",{className:"space-y-2.5",children:m.map((_,M)=>u.jsxs("div",{onClick:()=>l(_),className:`p-3 rounded-xl border text-xs cursor-pointer transition-all ${(o==null?void 0:o.name)===_.name?"bg-[rgba(100,255,218,0.15)] border-[#64ffda]":"bg-[rgba(5,12,24,0.6)] border-[rgba(100,255,218,0.1)] hover:border-[rgba(100,255,218,0.3)]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"font-bold text-white",children:_.name}),u.jsx("span",{className:"font-mono text-[10px] text-[#64ffda]",children:_.sst})]}),u.jsxs("div",{className:"flex justify-between text-[11px] text-[#94a3b8] font-mono",children:[u.jsxs("span",{children:["Depth: ",_.depth]}),u.jsx("span",{children:_.species})]})]},M))})]}),o&&u.jsxs("div",{className:"glass-panel p-5 space-y-2",children:[u.jsx("span",{className:"text-[11px] font-bold text-[#64ffda] uppercase font-mono block",children:"Station Telemetry"}),u.jsx("h4",{className:"text-sm font-bold text-white",children:o.name}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono text-[#cbd5e1] pt-2 border-t border-[rgba(255,255,255,0.08)]",children:[u.jsxs("div",{children:["Lat: ",o.lat,"°"]}),u.jsxs("div",{children:["Lon: ",o.lon,"°"]}),u.jsxs("div",{children:["Depth: ",o.depth]}),u.jsxs("div",{children:["SST: ",o.sst]})]})]})]})]}),c&&u.jsxs("section",{className:"glass-panel p-7 space-y-4 animate-fadeIn",children:[u.jsxs("div",{className:"flex items-center gap-2 text-base font-bold text-[#64ffda]",children:[u.jsx(Fp,{className:"w-5 h-5"}),u.jsx("span",{children:"Developer Guide: How to Extend This Three.js Platform"})]}),u.jsx("p",{className:"text-xs text-[#94a3b8] leading-relaxed",children:"This module is structured cleanly for you to plug in advanced Three.js features. Here are the key patterns to implement:"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono",children:[u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(100,255,218,0.15)] space-y-2",children:[u.jsx("span",{className:"text-[#64ffda] font-bold block",children:"1. Load Custom GLTF/GLB Models"}),u.jsxs("p",{className:"text-[#94a3b8] text-[11px] leading-relaxed",children:["Import ",u.jsx("code",{className:"text-white",children:"GLTFLoader"})," from ",u.jsx("code",{className:"text-white",children:"'three/examples/jsm/loaders/GLTFLoader.js'"})," to render animated fish, sharks, bathymetric terrain, or underwater ROVs directly into ",u.jsx("code",{className:"text-white",children:"mainGroup"}),"."]})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(56,189,248,0.15)] space-y-2",children:[u.jsx("span",{className:"text-[#38bdf8] font-bold block",children:"2. Custom GLSL Water Shaders"}),u.jsxs("p",{className:"text-[#94a3b8] text-[11px] leading-relaxed",children:["Use ",u.jsx("code",{className:"text-white",children:"THREE.ShaderMaterial"})," with vertex shaders modifying vertices with Perlin noise / Gerstner waves to create undulating oceanic waves and bioluminescent caustics."]})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(52,211,153,0.15)] space-y-2",children:[u.jsx("span",{className:"text-[#34d399] font-bold block",children:"3. OrbitControls & Postprocessing"}),u.jsxs("p",{className:"text-[#94a3b8] text-[11px] leading-relaxed",children:["Add ",u.jsx("code",{className:"text-white",children:"OrbitControls"})," for damping, and ",u.jsx("code",{className:"text-white",children:"EffectComposer"})," with ",u.jsx("code",{className:"text-white",children:"UnrealBloomPass"})," to give current vectors and specimen markers vivid bioluminescent neon glows."]})]})]})]})]})}function vT(){const[t,e]=ze.useState(26),[n,i]=ze.useState(8.12),s=((c,p)=>{const m=Math.exp(-Math.pow(c-25,2)/50),h=Math.max(.2,(p-7.5)/.65);return Math.min(100,Math.max(10,Math.round(100*m*h)))})(t,n),a=[{region:"Coral Triangle (Indo-Pacific)",biodiversity:96,sst:"28.5°C",status:"High Biodiversity Hotspot",color:"#64ffda"},{region:"Great Barrier Reef (Australia)",biodiversity:84,sst:"27.4°C",status:"Thermal Stress Risk",color:"#38bdf8"},{region:"Monterey Bay Sanctuary (USA)",biodiversity:78,sst:"14.2°C",status:"Kelp Forest Upwelling",color:"#34d399"},{region:"Mediterranean Sea Basin",biodiversity:69,sst:"21.5°C",status:"Warming & Invasive Trends",color:"#f59e0b"},{region:"North Sea Coastal Shelf",biodiversity:58,sst:"11.8°C",status:"Demersal Cold Regime",color:"#818cf8"},{region:"Arctic Polar Benthos",biodiversity:34,sst:"2.5°C",status:"Sea-Ice Retreat Zone",color:"#f43f5e"}],o=[{temp:10,diversity:25},{temp:15,diversity:42},{temp:20,diversity:68},{temp:23,diversity:88},{temp:25,diversity:98},{temp:27,diversity:92},{temp:29,diversity:65},{temp:31,diversity:38},{temp:33,diversity:18}],l=[{category:"None",pct:38,count:"2,660 surveys",color:"#34d399"},{category:"Low",pct:24,count:"1,680 surveys",color:"#38bdf8"},{category:"Moderate",pct:19,count:"1,330 surveys",color:"#f59e0b"},{category:"High",pct:12,count:"840 surveys",color:"#f97316"},{category:"Severe",pct:7,count:"490 surveys",color:"#f43f5e"}];return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.3)] text-[#38bdf8] text-xs font-semibold mb-3",children:[u.jsx(jf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Interactive Oceanographic Data Analytics"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:"Visualizations & Environmental Trends"}),u.jsx("p",{className:"text-sm sm:text-base text-[#94a3b8] mt-2",children:"Explore empirical relationships between ocean temperature, ocean acidification, coral reef bleaching, and marine biodiversity distribution."})]}),u.jsxs("section",{className:"glass-panel p-8",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6 flex-wrap gap-4",children:[u.jsxs("div",{children:[u.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2",children:[u.jsx(GS,{className:"w-5 h-5 text-[#64ffda]"}),u.jsx("span",{children:"Interactive Marine Climate Response Simulator"})]}),u.jsx("p",{className:"text-xs text-[#94a3b8]",children:"Adjust SST and pH to simulate ecosystem health response in real-time"})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"text-xs text-[#94a3b8] font-bold uppercase",children:"Simulated Vitality Index:"}),u.jsxs("div",{className:"text-2xl font-extrabold font-mono text-[#64ffda]",children:[s," ",u.jsx("span",{className:"text-xs text-[#64748b]",children:"/ 100"})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-6",children:[u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(100,255,218,0.1)]",children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsxs("span",{className:"text-xs font-semibold text-white flex items-center gap-1.5",children:[u.jsx(J0,{className:"w-4 h-4 text-[#f59e0b]"}),"Sea Surface Temperature (SST)"]}),u.jsxs("span",{className:"font-mono font-bold text-[#f59e0b] text-sm",children:[t,"°C"]})]}),u.jsx("input",{type:"range",min:"8",max:"34",step:"0.2",value:t,onChange:c=>e(parseFloat(c.target.value)),className:"w-full accent-[#f59e0b] cursor-pointer"}),u.jsxs("div",{className:"flex justify-between text-[10px] text-[#64748b] mt-1 font-mono",children:[u.jsx("span",{children:"8°C (Cold Shelf)"}),u.jsx("span",{children:"25°C (Optimal)"}),u.jsx("span",{children:"34°C (Severe Heatwave)"})]})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(100,255,218,0.1)]",children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsxs("span",{className:"text-xs font-semibold text-white flex items-center gap-1.5",children:[u.jsx(NS,{className:"w-4 h-4 text-[#38bdf8]"}),"Ocean pH Level (Acidification)"]}),u.jsx("span",{className:"font-mono font-bold text-[#38bdf8] text-sm",children:n})]}),u.jsx("input",{type:"range",min:"7.5",max:"8.3",step:"0.01",value:n,onChange:c=>i(parseFloat(c.target.value)),className:"w-full accent-[#38bdf8] cursor-pointer"}),u.jsxs("div",{className:"flex justify-between text-[10px] text-[#64748b] mt-1 font-mono",children:[u.jsx("span",{children:"7.50 (Acidified)"}),u.jsx("span",{children:"8.10 (Typical Ocean)"}),u.jsx("span",{children:"8.30 (Pristine)"})]})]})]}),u.jsx("div",{className:"h-3 w-full bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full rounded-full transition-all duration-300 bg-gradient-to-r from-[#f43f5e] via-[#f59e0b] to-[#34d399]",style:{width:`${s}%`}})})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"glass-panel p-7",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-2 flex items-center gap-2",children:[u.jsx(VS,{className:"w-5 h-5 text-[#64ffda]"}),u.jsx("span",{children:"Temperature (SST) vs. Species Richness Curve"})]}),u.jsx("p",{className:"text-xs text-[#94a3b8] mb-6",children:"Bell-shaped distribution showing maximum species diversity at 24–26°C with steep thermal decay."}),u.jsx("div",{className:"space-y-3 font-mono text-xs",children:o.map((c,p)=>u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("span",{className:"w-14 text-[#94a3b8]",children:[c.temp,"°C"]}),u.jsx("div",{className:"flex-1 h-3.5 bg-[rgba(5,12,24,0.6)] rounded-full overflow-hidden p-0.5 border border-[rgba(100,255,218,0.1)]",children:u.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[#0284c7] via-[#64ffda] to-[#38bdf8]",style:{width:`${c.diversity}%`}})}),u.jsxs("span",{className:"w-12 text-right font-bold text-white",children:[c.diversity,"%"]})]},p))})]}),u.jsxs("div",{className:"glass-panel p-7",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-2 flex items-center gap-2",children:[u.jsx(HS,{className:"w-5 h-5 text-[#f59e0b]"}),u.jsx("span",{children:"Coral Bleaching Distribution Across Surveys"})]}),u.jsx("p",{className:"text-xs text-[#94a3b8] mb-6",children:"Proportion of surveyed reefs across bleaching stress tiers (7,000 global survey points)."}),u.jsx("div",{className:"space-y-4",children:l.map((c,p)=>u.jsxs("div",{className:"space-y-1",children:[u.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[u.jsxs("span",{className:"font-bold text-white flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:c.color}}),c.category," Bleaching"]}),u.jsxs("span",{className:"text-[#94a3b8]",children:[c.count," (",c.pct,"%)"]})]}),u.jsx("div",{className:"h-2 w-full bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full rounded-full",style:{width:`${c.pct}%`,backgroundColor:c.color}})})]},p))})]})]}),u.jsxs("section",{className:"glass-panel p-7",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-2 flex items-center gap-2",children:[u.jsx(IS,{className:"w-5 h-5 text-[#38bdf8]"}),u.jsx("span",{children:"Major Global Ocean Basins & Biodiversity Index"})]}),u.jsx("p",{className:"text-xs text-[#94a3b8] mb-6",children:"Empirical comparison across representative marine biogeographic realms and marine protected areas (MPAs)."}),u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"w-full text-left text-xs",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"border-b border-[rgba(100,255,218,0.15)] text-[#94a3b8] uppercase font-mono",children:[u.jsx("th",{className:"pb-3",children:"Marine Realm / Region"}),u.jsx("th",{className:"pb-3",children:"Mean SST"}),u.jsx("th",{className:"pb-3",children:"Biodiversity Index"}),u.jsx("th",{className:"pb-3",children:"Ecological Status"})]})}),u.jsx("tbody",{className:"divide-y divide-[rgba(255,255,255,0.05)]",children:a.map((c,p)=>u.jsxs("tr",{className:"hover:bg-[rgba(255,255,255,0.02)] transition-colors",children:[u.jsx("td",{className:"py-3 font-semibold text-white",children:c.region}),u.jsx("td",{className:"py-3 font-mono text-[#cbd5e1]",children:c.sst}),u.jsxs("td",{className:"py-3 font-mono font-bold",style:{color:c.color},children:[c.biodiversity," / 100"]}),u.jsx("td",{className:"py-3 text-[#94a3b8]",children:c.status})]},p))})]})})]})]})}function _T(){const[t,e]=ze.useState("home"),[n,i]=ze.useState({online:!1,data:null});return ze.useEffect(()=>{const r=async()=>{try{const a=await fetch("/");if(a.ok){const o=await a.json();i({online:!0,data:o})}else i({online:!1,data:null})}catch{i({online:!1,data:null})}};r();const s=setInterval(r,15e3);return()=>clearInterval(s)},[]),u.jsxs("div",{className:"min-h-screen relative flex flex-col font-sans selection:bg-[#64ffda] selection:text-[#050c18]",children:[u.jsx("div",{className:"ocean-waves-bg"}),[...Array(12)].map((r,s)=>u.jsx("div",{className:"biolum-bubble",style:{width:`${Math.random()*24+8}px`,height:`${Math.random()*24+8}px`,left:`${Math.random()*100}vw`,animationDuration:`${Math.random()*18+14}s`,animationDelay:`${Math.random()*6}s`}},s)),u.jsx(jS,{activeTab:t,setActiveTab:e,apiStatus:n}),u.jsxs("main",{className:"flex-1 relative z-10 pt-4",children:[t==="home"&&u.jsx(XS,{setActiveTab:e,apiStatus:n}),t==="vision"&&u.jsx(qS,{}),t==="ocean"&&u.jsx($S,{}),t==="taxonomy"&&u.jsx(YS,{}),t==="map"&&u.jsx(KS,{}),t==="three"&&u.jsx(xT,{}),t==="visuals"&&u.jsx(vT,{})]}),u.jsx("footer",{className:"relative z-10 border-t border-[rgba(100,255,218,0.12)] bg-[rgba(5,12,24,0.92)] mt-16 py-10",children:u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-[rgba(100,255,218,0.15)] flex items-center justify-center",children:u.jsx(sd,{className:"w-5 h-5 text-[#64ffda]"})}),u.jsxs("div",{children:[u.jsx("span",{className:"font-bold text-white text-sm",children:"Marine Research Portal"}),u.jsx("p",{className:"text-xs text-[#94a3b8]",children:"AI, Deep Learning & Three.js 3D Ocean Space"})]})]}),u.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-xs text-[#94a3b8]",children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx(zS,{className:"w-3.5 h-3.5 text-[#34d399]"}),u.jsx("span",{children:"PyTorch 2.1 & Scikit-Learn Ensembles"})]}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"Three.js WebGL Engine"}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"FastAPI Backend"})]}),u.jsx("div",{className:"text-xs text-[#64748b]",children:"Part of Global Marine Conservation & Taxonomy Initiative"})]})})})]})}fu.createRoot(document.getElementById("root")).render(u.jsx(dv.StrictMode,{children:u.jsx(_T,{})}));
