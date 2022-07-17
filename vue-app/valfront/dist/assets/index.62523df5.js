var um=Object.defineProperty,hm=Object.defineProperties;var fm=Object.getOwnPropertyDescriptors;var Gl=Object.getOwnPropertySymbols;var dm=Object.prototype.hasOwnProperty,pm=Object.prototype.propertyIsEnumerable;var Yl=(t,e,n)=>e in t?um(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Yo=(t,e)=>{for(var n in e||(e={}))dm.call(e,n)&&Yl(t,n,e[n]);if(Gl)for(var n of Gl(e))pm.call(e,n)&&Yl(t,n,e[n]);return t},Xo=(t,e)=>hm(t,fm(e));const gm=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};gm();function mc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const mm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ym=mc(mm);function sf(t){return!!t||t===""}function yc(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?_m(s):yc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Re(t))return t;if(we(t))return t}}const vm=/;(?![^(]*\))/g,wm=/:(.+)/;function _m(t){const e={};return t.split(vm).forEach(n=>{if(n){const s=n.split(wm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ot(t){let e="";if(Re(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=Ot(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Em(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=oo(t[s],e[s]);return n}function oo(t,e){if(t===e)return!0;let n=Xl(t),s=Xl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=cr(t),s=cr(e),n||s)return t===e;if(n=j(t),s=j(e),n||s)return n&&s?Em(t,e):!1;if(n=we(t),s=we(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!oo(t[o],e[o]))return!1}}return String(t)===String(e)}function Im(t,e){return t.findIndex(n=>oo(n,e))}const qA=t=>Re(t)?t:t==null?"":j(t)||we(t)&&(t.toString===af||!G(t.toString))?JSON.stringify(t,rf,2):String(t),rf=(t,e)=>e&&e.__v_isRef?rf(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:co(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!j(e)&&!cf(e)?String(e):e,he={},ss=[],gt=()=>{},Tm=()=>!1,bm=/^on[^a-z]/,ao=t=>bm.test(t),vc=t=>t.startsWith("onUpdate:"),Ye=Object.assign,wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sm=Object.prototype.hasOwnProperty,te=(t,e)=>Sm.call(t,e),j=Array.isArray,rs=t=>Pr(t)==="[object Map]",co=t=>Pr(t)==="[object Set]",Xl=t=>Pr(t)==="[object Date]",G=t=>typeof t=="function",Re=t=>typeof t=="string",cr=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",of=t=>we(t)&&G(t.then)&&G(t.catch),af=Object.prototype.toString,Pr=t=>af.call(t),Am=t=>Pr(t).slice(8,-1),cf=t=>Pr(t)==="[object Object]",_c=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Cm=/-(\w)/g,Rt=lo(t=>t.replace(Cm,(e,n)=>n?n.toUpperCase():"")),Rm=/\B([A-Z])/g,Bn=lo(t=>t.replace(Rm,"-$1").toLowerCase()),uo=lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qo=lo(t=>t?`on${uo(t)}`:""),lr=(t,e)=>!Object.is(t,e),vi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ci=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ri=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ql;const km=()=>Ql||(Ql=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Tt;class Nm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Tt&&(this.parent=Tt,this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Dm(t,e=Tt){e&&e.active&&e.effects.push(t)}const Ec=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lf=t=>(t.w&ln)>0,uf=t=>(t.n&ln)>0,Om=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ln},Pm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];lf(r)&&!uf(r)?r.delete(t):e[n++]=r,r.w&=~ln,r.n&=~ln}e.length=n}},Ta=new WeakMap;let Ks=0,ln=1;const ba=30;let ft;const Sn=Symbol(""),Sa=Symbol("");class Ic{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dm(this,s)}run(){if(!this.active)return this.fn();let e=ft,n=nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ft,ft=this,nn=!0,ln=1<<++Ks,Ks<=ba?Om(this):Jl(this),this.fn()}finally{Ks<=ba&&Pm(this),ln=1<<--Ks,ft=this.parent,nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ft===this?this.deferStop=!0:this.active&&(Jl(this),this.onStop&&this.onStop(),this.active=!1)}}function Jl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let nn=!0;const hf=[];function As(){hf.push(nn),nn=!1}function Cs(){const t=hf.pop();nn=t===void 0?!0:t}function rt(t,e,n){if(nn&&ft){let s=Ta.get(t);s||Ta.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ec()),ff(r)}}function ff(t,e){let n=!1;Ks<=ba?uf(t)||(t.n|=ln,n=!lf(t)):n=!t.has(ft),n&&(t.add(ft),ft.deps.push(t))}function Vt(t,e,n,s,r,i){const o=Ta.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?_c(n)&&a.push(o.get("length")):(a.push(o.get(Sn)),rs(t)&&a.push(o.get(Sa)));break;case"delete":j(t)||(a.push(o.get(Sn)),rs(t)&&a.push(o.get(Sa)));break;case"set":rs(t)&&a.push(o.get(Sn));break}if(a.length===1)a[0]&&Aa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Aa(Ec(c))}}function Aa(t,e){const n=j(t)?t:[...t];for(const s of n)s.computed&&Zl(s);for(const s of n)s.computed||Zl(s)}function Zl(t,e){(t!==ft||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Mm=mc("__proto__,__v_isRef,__isVue"),df=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cr)),xm=Tc(),Lm=Tc(!1,!0),Um=Tc(!0),eu=Fm();function Fm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)rt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){As();const s=ie(this)[e].apply(this,n);return Cs(),s}}),t}function Tc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ey:vf:e?yf:mf).get(s))return s;const o=j(s);if(!t&&o&&te(eu,r))return Reflect.get(eu,r,i);const a=Reflect.get(s,r,i);return(cr(r)?df.has(r):Mm(r))||(t||rt(s,"get",r),e)?a:Me(a)?o&&_c(r)?a:a.value:we(a)?t?wf(a):Rs(a):a}}const Vm=pf(),Bm=pf(!0);function pf(t=!1){return function(n,s,r,i){let o=n[s];if(ur(o)&&Me(o)&&!Me(r))return!1;if(!t&&!ur(r)&&(Ca(r)||(r=ie(r),o=ie(o)),!j(n)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=j(n)&&_c(s)?Number(s)<n.length:te(n,s),c=Reflect.set(n,s,r,i);return n===ie(i)&&(a?lr(r,o)&&Vt(n,"set",s,r):Vt(n,"add",s,r)),c}}function $m(t,e){const n=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Vt(t,"delete",e,void 0),s}function jm(t,e){const n=Reflect.has(t,e);return(!cr(e)||!df.has(e))&&rt(t,"has",e),n}function Hm(t){return rt(t,"iterate",j(t)?"length":Sn),Reflect.ownKeys(t)}const gf={get:xm,set:Vm,deleteProperty:$m,has:jm,ownKeys:Hm},Km={get:Um,set(t,e){return!0},deleteProperty(t,e){return!0}},qm=Ye({},gf,{get:Lm,set:Bm}),bc=t=>t,ho=t=>Reflect.getPrototypeOf(t);function ii(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);n||(e!==i&&rt(r,"get",e),rt(r,"get",i));const{has:o}=ho(r),a=s?bc:n?Cc:hr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function oi(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return e||(t!==r&&rt(s,"has",t),rt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ai(t,e=!1){return t=t.__v_raw,!e&&rt(ie(t),"iterate",Sn),Reflect.get(t,"size",t)}function tu(t){t=ie(t);const e=ie(this);return ho(e).has.call(e,t)||(e.add(t),Vt(e,"add",t,t)),this}function nu(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=ho(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?lr(e,o)&&Vt(n,"set",t,e):Vt(n,"add",t,e),this}function su(t){const e=ie(this),{has:n,get:s}=ho(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Vt(e,"delete",t,void 0),i}function ru(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Vt(t,"clear",void 0,void 0),n}function ci(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),c=e?bc:t?Cc:hr;return!t&&rt(a,"iterate",Sn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function li(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=rs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?bc:e?Cc:hr;return!e&&rt(i,"iterate",c?Sa:Sn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Kt(t){return function(...e){return t==="delete"?!1:this}}function zm(){const t={get(i){return ii(this,i)},get size(){return ai(this)},has:oi,add:tu,set:nu,delete:su,clear:ru,forEach:ci(!1,!1)},e={get(i){return ii(this,i,!1,!0)},get size(){return ai(this)},has:oi,add:tu,set:nu,delete:su,clear:ru,forEach:ci(!1,!0)},n={get(i){return ii(this,i,!0)},get size(){return ai(this,!0)},has(i){return oi.call(this,i,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:ci(!0,!1)},s={get(i){return ii(this,i,!0,!0)},get size(){return ai(this,!0)},has(i){return oi.call(this,i,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:ci(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=li(i,!1,!1),n[i]=li(i,!0,!1),e[i]=li(i,!1,!0),s[i]=li(i,!0,!0)}),[t,n,e,s]}const[Wm,Gm,Ym,Xm]=zm();function Sc(t,e){const n=e?t?Xm:Ym:t?Gm:Wm;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(te(n,r)&&r in s?n:s,r,i)}const Qm={get:Sc(!1,!1)},Jm={get:Sc(!1,!0)},Zm={get:Sc(!0,!1)},mf=new WeakMap,yf=new WeakMap,vf=new WeakMap,ey=new WeakMap;function ty(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ny(t){return t.__v_skip||!Object.isExtensible(t)?0:ty(Am(t))}function Rs(t){return ur(t)?t:Ac(t,!1,gf,Qm,mf)}function sy(t){return Ac(t,!1,qm,Jm,yf)}function wf(t){return Ac(t,!0,Km,Zm,vf)}function Ac(t,e,n,s,r){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=ny(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function is(t){return ur(t)?is(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function Ca(t){return!!(t&&t.__v_isShallow)}function _f(t){return is(t)||ur(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Ef(t){return Ci(t,"__v_skip",!0),t}const hr=t=>we(t)?Rs(t):t,Cc=t=>we(t)?wf(t):t;function If(t){nn&&ft&&(t=ie(t),ff(t.dep||(t.dep=Ec())))}function Tf(t,e){t=ie(t),t.dep&&Aa(t.dep)}function Me(t){return!!(t&&t.__v_isRef===!0)}function Rc(t){return bf(t,!1)}function ry(t){return bf(t,!0)}function bf(t,e){return Me(t)?t:new iy(t,e)}class iy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:hr(e)}get value(){return If(this),this._value}set value(e){e=this.__v_isShallow?e:ie(e),lr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:hr(e),Tf(this))}}function Xs(t){return Me(t)?t.value:t}const oy={get:(t,e,n)=>Xs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Sf(t){return is(t)?t:new Proxy(t,oy)}function ay(t){const e=j(t)?new Array(t.length):{};for(const n in t)e[n]=ly(t,n);return e}class cy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ly(t,e,n){const s=t[e];return Me(s)?s:new cy(t,e,n)}class uy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ic(e,()=>{this._dirty||(this._dirty=!0,Tf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return If(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function hy(t,e,n=!1){let s,r;const i=G(t);return i?(s=t,r=gt):(s=t.get,r=t.set),new uy(s,r,i||!r,n)}function sn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){fo(i,e,n)}return r}function mt(t,e,n,s){if(G(t)){const i=sn(t,e,n,s);return i&&of(i)&&i.catch(o=>{fo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(mt(t[i],e,n,s));return r}function fo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){sn(c,null,10,[t,o,a]);return}}fy(t,n,r,s)}function fy(t,e,n,s=!0){console.error(t)}let ki=!1,Ra=!1;const st=[];let Pt=0;const Qs=[];let qs=null,Qn=0;const Js=[];let Gt=null,Jn=0;const Af=Promise.resolve();let kc=null,ka=null;function Cf(t){const e=kc||Af;return t?e.then(this?t.bind(this):t):e}function dy(t){let e=Pt+1,n=st.length;for(;e<n;){const s=e+n>>>1;fr(st[s])<t?e=s+1:n=s}return e}function Rf(t){(!st.length||!st.includes(t,ki&&t.allowRecurse?Pt+1:Pt))&&t!==ka&&(t.id==null?st.push(t):st.splice(dy(t.id),0,t),kf())}function kf(){!ki&&!Ra&&(Ra=!0,kc=Af.then(Of))}function py(t){const e=st.indexOf(t);e>Pt&&st.splice(e,1)}function Nf(t,e,n,s){j(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),kf()}function gy(t){Nf(t,qs,Qs,Qn)}function my(t){Nf(t,Gt,Js,Jn)}function po(t,e=null){if(Qs.length){for(ka=e,qs=[...new Set(Qs)],Qs.length=0,Qn=0;Qn<qs.length;Qn++)qs[Qn]();qs=null,Qn=0,ka=null,po(t,e)}}function Df(t){if(po(),Js.length){const e=[...new Set(Js)];if(Js.length=0,Gt){Gt.push(...e);return}for(Gt=e,Gt.sort((n,s)=>fr(n)-fr(s)),Jn=0;Jn<Gt.length;Jn++)Gt[Jn]();Gt=null,Jn=0}}const fr=t=>t.id==null?1/0:t.id;function Of(t){Ra=!1,ki=!0,po(t),st.sort((n,s)=>fr(n)-fr(s));const e=gt;try{for(Pt=0;Pt<st.length;Pt++){const n=st[Pt];n&&n.active!==!1&&sn(n,null,14)}}finally{Pt=0,st.length=0,Df(),ki=!1,kc=null,(st.length||Qs.length||Js.length)&&Of(t)}}function yy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||he;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||he;d&&(r=n.map(g=>g.trim())),h&&(r=n.map(Ri))}let a,c=s[a=Qo(e)]||s[a=Qo(Rt(e))];!c&&i&&(c=s[a=Qo(Bn(e))]),c&&mt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mt(l,t,6,r)}}function Pf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!G(t)){const c=l=>{const u=Pf(l,e,!0);u&&(a=!0,Ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):Ye(o,i),s.set(t,o),o)}function go(t,e){return!t||!ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,Bn(e))||te(t,e))}let We=null,Mf=null;function Ni(t){const e=We;return We=t,Mf=t&&t.type.__scopeId||null,e}function zs(t,e=We,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&gu(-1);const i=Ni(e),o=t(...r);return Ni(i),s._d&&gu(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Jo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:D}=t;let R,k;const V=Ni(t);try{if(n.shapeFlag&4){const Z=r||s;R=bt(u.call(Z,Z,h,i,g,d,y)),k=c}else{const Z=e;R=bt(Z.length>1?Z(i,{attrs:c,slots:a,emit:l}):Z(i,null)),k=e.props?c:vy(c)}}catch(Z){er.length=0,fo(Z,t,1),R=Ae(un)}let Y=R;if(k&&D!==!1){const Z=Object.keys(k),{shapeFlag:_e}=Y;Z.length&&_e&7&&(o&&Z.some(vc)&&(k=wy(k,o)),Y=ds(Y,k))}return n.dirs&&(Y=ds(Y),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&(Y.transition=n.transition),R=Y,Ni(V),R}const vy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ao(n))&&((e||(e={}))[n]=t[n]);return e},wy=(t,e)=>{const n={};for(const s in t)(!vc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function _y(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?iu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!go(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?iu(s,o,l):!0:!!o;return!1}function iu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!go(n,i))return!0}return!1}function Ey({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Iy=t=>t.__isSuspense;function Ty(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):my(t)}function tn(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function ct(t,e,n=!1){const s=Pe||We;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&G(e)?e.call(s.proxy):e}}const ou={};function os(t,e,n){return xf(t,e,n)}function xf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=he){const a=Pe;let c,l=!1,u=!1;if(Me(t)?(c=()=>t.value,l=Ca(t)):is(t)?(c=()=>t,s=!0):j(t)?(u=!0,l=t.some(k=>is(k)||Ca(k)),c=()=>t.map(k=>{if(Me(k))return k.value;if(is(k))return In(k);if(G(k))return sn(k,a,2)})):G(t)?e?c=()=>sn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),mt(t,a,3,[d])}:c=gt,e&&s){const k=c;c=()=>In(k())}let h,d=k=>{h=R.onStop=()=>{sn(k,a,4)}};if(pr)return d=gt,e?n&&mt(e,a,3,[c(),u?[]:void 0,d]):c(),gt;let g=u?[]:ou;const y=()=>{if(!!R.active)if(e){const k=R.run();(s||l||(u?k.some((V,Y)=>lr(V,g[Y])):lr(k,g)))&&(h&&h(),mt(e,a,3,[k,g===ou?void 0:g,d]),g=k)}else R.run()};y.allowRecurse=!!e;let D;r==="sync"?D=y:r==="post"?D=()=>Qe(y,a&&a.suspense):D=()=>gy(y);const R=new Ic(c,D);return e?n?y():g=R.run():r==="post"?Qe(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&wc(a.scope.effects,R)}}function by(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?Lf(s,t):()=>s[t]:t.bind(s,s);let i;G(e)?i=e:(i=e.handler,n=e);const o=Pe;ps(this);const a=xf(r,i.bind(s),n);return o?ps(o):An(),a}function Lf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function In(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))In(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)In(t[n],e);else if(co(t)||rs(t))t.forEach(n=>{In(n,e)});else if(cf(t))for(const n in t)In(t[n],e);return t}function Uf(t){return G(t)?{setup:t,name:t.name}:t}const Zs=t=>!!t.type.__asyncLoader,Ff=t=>t.type.__isKeepAlive;function Sy(t,e){Vf(t,"a",e)}function Ay(t,e){Vf(t,"da",e)}function Vf(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(mo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ff(r.parent.vnode)&&Cy(s,e,n,r),r=r.parent}}function Cy(t,e,n,s){const r=mo(e,t,s,!0);jf(()=>{wc(s[e],r)},n)}function mo(t,e,n=Pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;As(),ps(n);const a=mt(e,n,t,o);return An(),Cs(),a});return s?r.unshift(i):r.push(i),i}}const jt=t=>(e,n=Pe)=>(!pr||t==="sp")&&mo(t,e,n),Bf=jt("bm"),Nc=jt("m"),Ry=jt("bu"),ky=jt("u"),$f=jt("bum"),jf=jt("um"),Ny=jt("sp"),Dy=jt("rtg"),Oy=jt("rtc");function Py(t,e=Pe){mo("ec",t,e)}function My(t,e){const n=We;if(n===null)return t;const s=vo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=he]=e[i];G(o)&&(o={mounted:o,updated:o}),o.deep&&In(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function mn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(As(),mt(c,n,8,[t.el,a,t,e]),Cs())}}const Hf="components";function au(t,e){return Ly(Hf,t,!0,e)||t}const xy=Symbol();function Ly(t,e,n=!0,s=!1){const r=We||Pe;if(r){const i=r.type;if(t===Hf){const a=dv(i,!1);if(a&&(a===e||a===Rt(e)||a===uo(Rt(e))))return i}const o=cu(r[t]||i[t],e)||cu(r.appContext[t],e);return!o&&s?i:o}}function cu(t,e){return t&&(t[e]||t[Rt(e)]||t[uo(Rt(e))])}function Uy(t,e,n,s){let r;const i=n&&n[s];if(j(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(we(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Kf(t,e,n={},s,r){if(We.isCE||We.parent&&Zs(We.parent)&&We.parent.isCE)return Ae("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),rn();const o=i&&qf(i(n)),a=nd(at,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function qf(t){return t.some(e=>Pi(e)?!(e.type===un||e.type===at&&!qf(e.children)):!0)?t:null}const Na=t=>t?rd(t)?vo(t)||t.proxy:Na(t.parent):null,Di=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Na(t.parent),$root:t=>Na(t.root),$emit:t=>t.emit,$options:t=>Wf(t),$forceUpdate:t=>t.f||(t.f=()=>Rf(t.update)),$nextTick:t=>t.n||(t.n=Cf.bind(t.proxy)),$watch:t=>by.bind(t)}),Fy={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==he&&te(s,e))return o[e]=1,s[e];if(r!==he&&te(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&te(l,e))return o[e]=3,i[e];if(n!==he&&te(n,e))return o[e]=4,n[e];Da&&(o[e]=0)}}const u=Di[e];let h,d;if(u)return e==="$attrs"&&rt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==he&&te(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==he&&te(r,e)?(r[e]=n,!0):s!==he&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==he&&te(t,o)||e!==he&&te(e,o)||(a=i[0])&&te(a,o)||te(s,o)||te(Di,o)||te(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Da=!0;function Vy(t){const e=Wf(t),n=t.proxy,s=t.ctx;Da=!1,e.beforeCreate&&lu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:D,deactivated:R,beforeDestroy:k,beforeUnmount:V,destroyed:Y,unmounted:Z,render:_e,renderTracked:be,renderTriggered:He,errorCaptured:Ht,serverPrefetch:Xe,expose:wt,inheritAttrs:Nt,components:ut,directives:Kn,filters:qn}=e;if(l&&By(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const fe in o){const oe=o[fe];G(oe)&&(s[fe]=oe.bind(n))}if(r){const fe=r.call(n,n);we(fe)&&(t.data=Rs(fe))}if(Da=!0,i)for(const fe in i){const oe=i[fe],tt=G(oe)?oe.bind(n,n):G(oe.get)?oe.get.bind(n,n):gt,Wn=!G(oe)&&G(oe.set)?oe.set.bind(n):gt,Dt=St({get:tt,set:Wn});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:_t=>Dt.value=_t})}if(a)for(const fe in a)zf(a[fe],s,n,fe);if(c){const fe=G(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(oe=>{tn(oe,fe[oe])})}u&&lu(u,t,"c");function Se(fe,oe){j(oe)?oe.forEach(tt=>fe(tt.bind(n))):oe&&fe(oe.bind(n))}if(Se(Bf,h),Se(Nc,d),Se(Ry,g),Se(ky,y),Se(Sy,D),Se(Ay,R),Se(Py,Ht),Se(Oy,be),Se(Dy,He),Se($f,V),Se(jf,Z),Se(Ny,Xe),j(wt))if(wt.length){const fe=t.exposed||(t.exposed={});wt.forEach(oe=>{Object.defineProperty(fe,oe,{get:()=>n[oe],set:tt=>n[oe]=tt})})}else t.exposed||(t.exposed={});_e&&t.render===gt&&(t.render=_e),Nt!=null&&(t.inheritAttrs=Nt),ut&&(t.components=ut),Kn&&(t.directives=Kn)}function By(t,e,n=gt,s=!1){j(t)&&(t=Oa(t));for(const r in t){const i=t[r];let o;we(i)?"default"in i?o=ct(i.from||r,i.default,!0):o=ct(i.from||r):o=ct(i),Me(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function lu(t,e,n){mt(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function zf(t,e,n,s){const r=s.includes(".")?Lf(n,s):()=>n[s];if(Re(t)){const i=e[t];G(i)&&os(r,i)}else if(G(t))os(r,t.bind(n));else if(we(t))if(j(t))t.forEach(i=>zf(i,e,n,s));else{const i=G(t.handler)?t.handler.bind(n):e[t.handler];G(i)&&os(r,i,t)}}function Wf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Oi(c,l,o,!0)),Oi(c,e,o)),i.set(e,c),c}function Oi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Oi(t,i,n,!0),r&&r.forEach(o=>Oi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=$y[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $y={data:uu,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:vn,directives:vn,watch:Hy,provide:uu,inject:jy};function uu(t,e){return e?t?function(){return Ye(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function jy(t,e){return vn(Oa(t),Oa(e))}function Oa(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ke(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?Ye(Ye(Object.create(null),t),e):e}function Hy(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const s in e)n[s]=Ke(t[s],e[s]);return n}function Ky(t,e,n,s=!1){const r={},i={};Ci(i,yo,1),t.propsDefaults=Object.create(null),Gf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:sy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function qy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(go(t.emitsOptions,d))continue;const g=e[d];if(c)if(te(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const y=Rt(d);r[y]=Pa(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Gf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!te(e,h)&&((u=Bn(h))===h||!te(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Pa(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!te(e,h)&&!0)&&(delete i[h],l=!0)}l&&Vt(t,"set","$attrs")}function Gf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(yi(c))continue;const l=e[c];let u;r&&te(r,u=Rt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:go(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ie(n),l=a||he;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Pa(r,c,h,l[h],t,!te(l,h))}}return o}function Pa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&G(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(ps(r),s=l[n]=c.call(null,e),An())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Bn(n))&&(s=!0))}return s}function Yf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!G(t)){const u=h=>{c=!0;const[d,g]=Yf(h,e,!0);Ye(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,ss),ss;if(j(i))for(let u=0;u<i.length;u++){const h=Rt(i[u]);hu(h)&&(o[h]=he)}else if(i)for(const u in i){const h=Rt(u);if(hu(h)){const d=i[u],g=o[h]=j(d)||G(d)?{type:d}:d;if(g){const y=pu(Boolean,g.type),D=pu(String,g.type);g[0]=y>-1,g[1]=D<0||y<D,(y>-1||te(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function hu(t){return t[0]!=="$"}function fu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function du(t,e){return fu(t)===fu(e)}function pu(t,e){return j(e)?e.findIndex(n=>du(n,t)):G(e)&&du(e,t)?0:-1}const Xf=t=>t[0]==="_"||t==="$stable",Dc=t=>j(t)?t.map(bt):[bt(t)],zy=(t,e,n)=>{if(e._n)return e;const s=zs((...r)=>Dc(e(...r)),n);return s._c=!1,s},Qf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Xf(r))continue;const i=t[r];if(G(i))e[r]=zy(r,i,s);else if(i!=null){const o=Dc(i);e[r]=()=>o}}},Jf=(t,e)=>{const n=Dc(e);t.slots.default=()=>n},Wy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Ci(e,"_",n)):Qf(e,t.slots={})}else t.slots={},e&&Jf(t,e);Ci(t.slots,yo,1)},Gy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=he;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ye(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Qf(e,r)),o=e}else e&&(Jf(t,e),o={default:1});if(i)for(const a in r)!Xf(a)&&!(a in o)&&delete r[a]};function Zf(){return{app:null,config:{isNativeTag:Tm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yy=0;function Xy(t,e){return function(s,r=null){G(s)||(s=Object.assign({},s)),r!=null&&!we(r)&&(r=null);const i=Zf(),o=new Set;let a=!1;const c=i.app={_uid:Yy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:gv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&G(l.install)?(o.add(l),l.install(c,...u)):G(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Ae(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,vo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Ma(t,e,n,s,r=!1){if(j(t)){t.forEach((d,g)=>Ma(d,e&&(j(e)?e[g]:e),n,s,r));return}if(Zs(s)&&!r)return;const i=s.shapeFlag&4?vo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===he?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Re(l)?(u[l]=null,te(h,l)&&(h[l]=null)):Me(l)&&(l.value=null)),G(c))sn(c,a,12,[o,u]);else{const d=Re(c),g=Me(c);if(d||g){const y=()=>{if(t.f){const D=d?u[c]:c.value;r?j(D)&&wc(D,i):j(D)?D.includes(i)||D.push(i):d?(u[c]=[i],te(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,te(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Qe(y,n)):y()}}}const Qe=Ty;function Qy(t){return Jy(t)}function Jy(t,e){const n=km();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=gt,cloneNode:y,insertStaticContent:D}=t,R=(f,p,m,_=null,w=null,S=null,N=!1,T=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!Vs(f,p)&&(_=L(f),ot(f,w,S,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:E,ref:U,shapeFlag:P}=p;switch(E){case Oc:k(f,p,m,_);break;case un:V(f,p,m,_);break;case Zo:f==null&&Y(p,m,_,N);break;case at:Kn(f,p,m,_,w,S,N,T,A);break;default:P&1?be(f,p,m,_,w,S,N,T,A):P&6?qn(f,p,m,_,w,S,N,T,A):(P&64||P&128)&&E.process(f,p,m,_,w,S,N,T,A,de)}U!=null&&w&&Ma(U,f&&f.ref,S,p||f,!p)},k=(f,p,m,_)=>{if(f==null)s(p.el=a(p.children),m,_);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},V=(f,p,m,_)=>{f==null?s(p.el=c(p.children||""),m,_):p.el=f.el},Y=(f,p,m,_)=>{[f.el,f.anchor]=D(f.children,p,m,_,f.el,f.anchor)},Z=({el:f,anchor:p},m,_)=>{let w;for(;f&&f!==p;)w=d(f),s(f,m,_),f=w;s(p,m,_)},_e=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},be=(f,p,m,_,w,S,N,T,A)=>{N=N||p.type==="svg",f==null?He(p,m,_,w,S,N,T,A):wt(f,p,w,S,N,T,A)},He=(f,p,m,_,w,S,N,T)=>{let A,E;const{type:U,props:P,shapeFlag:F,transition:q,patchFlag:ne,dirs:ce}=f;if(f.el&&y!==void 0&&ne===-1)A=f.el=y(f.el);else{if(A=f.el=o(f.type,S,P&&P.is,P),F&8?u(A,f.children):F&16&&Xe(f.children,A,null,_,w,S&&U!=="foreignObject",N,T),ce&&mn(f,null,_,"created"),P){for(const ge in P)ge!=="value"&&!yi(ge)&&i(A,ge,null,P[ge],S,f.children,_,w,C);"value"in P&&i(A,"value",null,P.value),(E=P.onVnodeBeforeMount)&&It(E,_,f)}Ht(A,f,f.scopeId,N,_)}ce&&mn(f,null,_,"beforeMount");const le=(!w||w&&!w.pendingBranch)&&q&&!q.persisted;le&&q.beforeEnter(A),s(A,p,m),((E=P&&P.onVnodeMounted)||le||ce)&&Qe(()=>{E&&It(E,_,f),le&&q.enter(A),ce&&mn(f,null,_,"mounted")},w)},Ht=(f,p,m,_,w)=>{if(m&&g(f,m),_)for(let S=0;S<_.length;S++)g(f,_[S]);if(w){let S=w.subTree;if(p===S){const N=w.vnode;Ht(f,N,N.scopeId,N.slotScopeIds,w.parent)}}},Xe=(f,p,m,_,w,S,N,T,A=0)=>{for(let E=A;E<f.length;E++){const U=f[E]=T?Yt(f[E]):bt(f[E]);R(null,U,p,m,_,w,S,N,T)}},wt=(f,p,m,_,w,S,N)=>{const T=p.el=f.el;let{patchFlag:A,dynamicChildren:E,dirs:U}=p;A|=f.patchFlag&16;const P=f.props||he,F=p.props||he;let q;m&&yn(m,!1),(q=F.onVnodeBeforeUpdate)&&It(q,m,p,f),U&&mn(p,f,m,"beforeUpdate"),m&&yn(m,!0);const ne=w&&p.type!=="foreignObject";if(E?Nt(f.dynamicChildren,E,T,m,_,ne,S):N||tt(f,p,T,null,m,_,ne,S,!1),A>0){if(A&16)ut(T,p,P,F,m,_,w);else if(A&2&&P.class!==F.class&&i(T,"class",null,F.class,w),A&4&&i(T,"style",P.style,F.style,w),A&8){const ce=p.dynamicProps;for(let le=0;le<ce.length;le++){const ge=ce[le],ht=P[ge],Gn=F[ge];(Gn!==ht||ge==="value")&&i(T,ge,ht,Gn,w,f.children,m,_,C)}}A&1&&f.children!==p.children&&u(T,p.children)}else!N&&E==null&&ut(T,p,P,F,m,_,w);((q=F.onVnodeUpdated)||U)&&Qe(()=>{q&&It(q,m,p,f),U&&mn(p,f,m,"updated")},_)},Nt=(f,p,m,_,w,S,N)=>{for(let T=0;T<p.length;T++){const A=f[T],E=p[T],U=A.el&&(A.type===at||!Vs(A,E)||A.shapeFlag&70)?h(A.el):m;R(A,E,U,null,_,w,S,N,!0)}},ut=(f,p,m,_,w,S,N)=>{if(m!==_){for(const T in _){if(yi(T))continue;const A=_[T],E=m[T];A!==E&&T!=="value"&&i(f,T,E,A,N,p.children,w,S,C)}if(m!==he)for(const T in m)!yi(T)&&!(T in _)&&i(f,T,m[T],null,N,p.children,w,S,C);"value"in _&&i(f,"value",m.value,_.value)}},Kn=(f,p,m,_,w,S,N,T,A)=>{const E=p.el=f?f.el:a(""),U=p.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:q}=p;q&&(T=T?T.concat(q):q),f==null?(s(E,m,_),s(U,m,_),Xe(p.children,m,U,w,S,N,T,A)):P>0&&P&64&&F&&f.dynamicChildren?(Nt(f.dynamicChildren,F,m,w,S,N,T),(p.key!=null||w&&p===w.subTree)&&ed(f,p,!0)):tt(f,p,m,U,w,S,N,T,A)},qn=(f,p,m,_,w,S,N,T,A)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?w.ctx.activate(p,m,_,N,A):zn(p,m,_,w,S,N,A):Se(f,p,A)},zn=(f,p,m,_,w,S,N)=>{const T=f.component=cv(f,_,w);if(Ff(f)&&(T.ctx.renderer=de),lv(T),T.asyncDep){if(w&&w.registerDep(T,fe),!f.el){const A=T.subTree=Ae(un);V(null,A,p,m)}return}fe(T,f,p,m,w,S,N)},Se=(f,p,m)=>{const _=p.component=f.component;if(_y(f,p,m))if(_.asyncDep&&!_.asyncResolved){oe(_,p,m);return}else _.next=p,py(_.update),_.update();else p.el=f.el,_.vnode=p},fe=(f,p,m,_,w,S,N)=>{const T=()=>{if(f.isMounted){let{next:U,bu:P,u:F,parent:q,vnode:ne}=f,ce=U,le;yn(f,!1),U?(U.el=ne.el,oe(f,U,N)):U=ne,P&&vi(P),(le=U.props&&U.props.onVnodeBeforeUpdate)&&It(le,q,U,ne),yn(f,!0);const ge=Jo(f),ht=f.subTree;f.subTree=ge,R(ht,ge,h(ht.el),L(ht),f,w,S),U.el=ge.el,ce===null&&Ey(f,ge.el),F&&Qe(F,w),(le=U.props&&U.props.onVnodeUpdated)&&Qe(()=>It(le,q,U,ne),w)}else{let U;const{el:P,props:F}=p,{bm:q,m:ne,parent:ce}=f,le=Zs(p);if(yn(f,!1),q&&vi(q),!le&&(U=F&&F.onVnodeBeforeMount)&&It(U,ce,p),yn(f,!0),P&&X){const ge=()=>{f.subTree=Jo(f),X(P,f.subTree,f,w,null)};le?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ge()):ge()}else{const ge=f.subTree=Jo(f);R(null,ge,m,_,f,w,S),p.el=ge.el}if(ne&&Qe(ne,w),!le&&(U=F&&F.onVnodeMounted)){const ge=p;Qe(()=>It(U,ce,ge),w)}(p.shapeFlag&256||ce&&Zs(ce.vnode)&&ce.vnode.shapeFlag&256)&&f.a&&Qe(f.a,w),f.isMounted=!0,p=m=_=null}},A=f.effect=new Ic(T,()=>Rf(E),f.scope),E=f.update=()=>A.run();E.id=f.uid,yn(f,!0),E()},oe=(f,p,m)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,qy(f,p.props,_,m),Gy(f,p.children,m),As(),po(void 0,f.update),Cs()},tt=(f,p,m,_,w,S,N,T,A=!1)=>{const E=f&&f.children,U=f?f.shapeFlag:0,P=p.children,{patchFlag:F,shapeFlag:q}=p;if(F>0){if(F&128){Dt(E,P,m,_,w,S,N,T,A);return}else if(F&256){Wn(E,P,m,_,w,S,N,T,A);return}}q&8?(U&16&&C(E,w,S),P!==E&&u(m,P)):U&16?q&16?Dt(E,P,m,_,w,S,N,T,A):C(E,w,S,!0):(U&8&&u(m,""),q&16&&Xe(P,m,_,w,S,N,T,A))},Wn=(f,p,m,_,w,S,N,T,A)=>{f=f||ss,p=p||ss;const E=f.length,U=p.length,P=Math.min(E,U);let F;for(F=0;F<P;F++){const q=p[F]=A?Yt(p[F]):bt(p[F]);R(f[F],q,m,null,w,S,N,T,A)}E>U?C(f,w,S,!0,!1,P):Xe(p,m,_,w,S,N,T,A,P)},Dt=(f,p,m,_,w,S,N,T,A)=>{let E=0;const U=p.length;let P=f.length-1,F=U-1;for(;E<=P&&E<=F;){const q=f[E],ne=p[E]=A?Yt(p[E]):bt(p[E]);if(Vs(q,ne))R(q,ne,m,null,w,S,N,T,A);else break;E++}for(;E<=P&&E<=F;){const q=f[P],ne=p[F]=A?Yt(p[F]):bt(p[F]);if(Vs(q,ne))R(q,ne,m,null,w,S,N,T,A);else break;P--,F--}if(E>P){if(E<=F){const q=F+1,ne=q<U?p[q].el:_;for(;E<=F;)R(null,p[E]=A?Yt(p[E]):bt(p[E]),m,ne,w,S,N,T,A),E++}}else if(E>F)for(;E<=P;)ot(f[E],w,S,!0),E++;else{const q=E,ne=E,ce=new Map;for(E=ne;E<=F;E++){const nt=p[E]=A?Yt(p[E]):bt(p[E]);nt.key!=null&&ce.set(nt.key,E)}let le,ge=0;const ht=F-ne+1;let Gn=!1,ql=0;const Fs=new Array(ht);for(E=0;E<ht;E++)Fs[E]=0;for(E=q;E<=P;E++){const nt=f[E];if(ge>=ht){ot(nt,w,S,!0);continue}let Et;if(nt.key!=null)Et=ce.get(nt.key);else for(le=ne;le<=F;le++)if(Fs[le-ne]===0&&Vs(nt,p[le])){Et=le;break}Et===void 0?ot(nt,w,S,!0):(Fs[Et-ne]=E+1,Et>=ql?ql=Et:Gn=!0,R(nt,p[Et],m,null,w,S,N,T,A),ge++)}const zl=Gn?Zy(Fs):ss;for(le=zl.length-1,E=ht-1;E>=0;E--){const nt=ne+E,Et=p[nt],Wl=nt+1<U?p[nt+1].el:_;Fs[E]===0?R(null,Et,m,Wl,w,S,N,T,A):Gn&&(le<0||E!==zl[le]?_t(Et,m,Wl,2):le--)}}},_t=(f,p,m,_,w=null)=>{const{el:S,type:N,transition:T,children:A,shapeFlag:E}=f;if(E&6){_t(f.component.subTree,p,m,_);return}if(E&128){f.suspense.move(p,m,_);return}if(E&64){N.move(f,p,m,de);return}if(N===at){s(S,p,m);for(let P=0;P<A.length;P++)_t(A[P],p,m,_);s(f.anchor,p,m);return}if(N===Zo){Z(f,p,m);return}if(_!==2&&E&1&&T)if(_===0)T.beforeEnter(S),s(S,p,m),Qe(()=>T.enter(S),w);else{const{leave:P,delayLeave:F,afterLeave:q}=T,ne=()=>s(S,p,m),ce=()=>{P(S,()=>{ne(),q&&q()})};F?F(S,ne,ce):ce()}else s(S,p,m)},ot=(f,p,m,_=!1,w=!1)=>{const{type:S,props:N,ref:T,children:A,dynamicChildren:E,shapeFlag:U,patchFlag:P,dirs:F}=f;if(T!=null&&Ma(T,null,m,f,!0),U&256){p.ctx.deactivate(f);return}const q=U&1&&F,ne=!Zs(f);let ce;if(ne&&(ce=N&&N.onVnodeBeforeUnmount)&&It(ce,p,f),U&6)M(f.component,m,_);else{if(U&128){f.suspense.unmount(m,_);return}q&&mn(f,null,p,"beforeUnmount"),U&64?f.type.remove(f,p,m,w,de,_):E&&(S!==at||P>0&&P&64)?C(E,p,m,!1,!0):(S===at&&P&384||!w&&U&16)&&C(A,p,m),_&&Go(f)}(ne&&(ce=N&&N.onVnodeUnmounted)||q)&&Qe(()=>{ce&&It(ce,p,f),q&&mn(f,null,p,"unmounted")},m)},Go=f=>{const{type:p,el:m,anchor:_,transition:w}=f;if(p===at){v(m,_);return}if(p===Zo){_e(f);return}const S=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:T}=w,A=()=>N(m,S);T?T(f.el,S,A):A()}else S()},v=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},M=(f,p,m)=>{const{bum:_,scope:w,update:S,subTree:N,um:T}=f;_&&vi(_),w.stop(),S&&(S.active=!1,ot(N,f,p,m)),T&&Qe(T,p),Qe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(f,p,m,_=!1,w=!1,S=0)=>{for(let N=S;N<f.length;N++)ot(f[N],p,m,_,w)},L=f=>f.shapeFlag&6?L(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ae=(f,p,m)=>{f==null?p._vnode&&ot(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,m),Df(),p._vnode=f},de={p:R,um:ot,m:_t,r:Go,mt:zn,mc:Xe,pc:tt,pbc:Nt,n:L,o:t};let J,X;return e&&([J,X]=e(de)),{render:ae,hydrate:J,createApp:Xy(ae,J)}}function yn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ed(t,e,n=!1){const s=t.children,r=e.children;if(j(s)&&j(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Yt(r[i]),a.el=o.el),n||ed(o,a))}}function Zy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ev=t=>t.__isTeleport,at=Symbol(void 0),Oc=Symbol(void 0),un=Symbol(void 0),Zo=Symbol(void 0),er=[];let pt=null;function rn(t=!1){er.push(pt=t?null:[])}function tv(){er.pop(),pt=er[er.length-1]||null}let dr=1;function gu(t){dr+=t}function td(t){return t.dynamicChildren=dr>0?pt||ss:null,tv(),dr>0&&pt&&pt.push(t),t}function as(t,e,n,s,r,i){return td(Ut(t,e,n,s,r,i,!0))}function nd(t,e,n,s,r){return td(Ae(t,e,n,s,r,!0))}function Pi(t){return t?t.__v_isVNode===!0:!1}function Vs(t,e){return t.type===e.type&&t.key===e.key}const yo="__vInternal",sd=({key:t})=>t!=null?t:null,wi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Re(t)||Me(t)||G(t)?{i:We,r:t,k:e,f:!!n}:t:null;function Ut(t,e=null,n=null,s=0,r=null,i=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sd(e),ref:e&&wi(e),scopeId:Mf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Pc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Re(n)?8:16),dr>0&&!o&&pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&pt.push(c),c}const Ae=nv;function nv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===xy)&&(t=un),Pi(t)){const a=ds(t,e,!0);return n&&Pc(a,n),dr>0&&!i&&pt&&(a.shapeFlag&6?pt[pt.indexOf(t)]=a:pt.push(a)),a.patchFlag|=-2,a}if(pv(t)&&(t=t.__vccOpts),e){e=sv(e);let{class:a,style:c}=e;a&&!Re(a)&&(e.class=Ot(a)),we(c)&&(_f(c)&&!j(c)&&(c=Ye({},c)),e.style=yc(c))}const o=Re(t)?1:Iy(t)?128:ev(t)?64:we(t)?4:G(t)?2:0;return Ut(t,e,n,s,r,o,i,!0)}function sv(t){return t?_f(t)||yo in t?Ye({},t):t:null}function ds(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?iv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sd(a),ref:e&&e.ref?n&&r?j(r)?r.concat(wi(e)):[r,wi(e)]:wi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),el:t.el,anchor:t.anchor}}function Mr(t=" ",e=0){return Ae(Oc,null,t,e)}function rv(t="",e=!1){return e?(rn(),nd(un,null,t)):Ae(un,null,t)}function bt(t){return t==null||typeof t=="boolean"?Ae(un):j(t)?Ae(at,null,t.slice()):typeof t=="object"?Yt(t):Ae(Oc,null,String(t))}function Yt(t){return t.el===null||t.memo?t:ds(t)}function Pc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Pc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(yo in e)?e._ctx=We:r===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[Mr(e)]):n=8);t.children=e,t.shapeFlag|=n}function iv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ot([e.class,s.class]));else if(r==="style")e.style=yc([e.style,s.style]);else if(ao(r)){const i=e[r],o=s[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function It(t,e,n,s=null){mt(t,e,7,[n,s])}const ov=Zf();let av=0;function cv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||ov,i={uid:av++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yf(s,r),emitsOptions:Pf(s,r),emit:null,emitted:null,propsDefaults:he,inheritAttrs:s.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yy.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const ps=t=>{Pe=t,t.scope.on()},An=()=>{Pe&&Pe.scope.off(),Pe=null};function rd(t){return t.vnode.shapeFlag&4}let pr=!1;function lv(t,e=!1){pr=e;const{props:n,children:s}=t.vnode,r=rd(t);Ky(t,n,r,e),Wy(t,s);const i=r?uv(t,e):void 0;return pr=!1,i}function uv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ef(new Proxy(t.ctx,Fy));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?fv(t):null;ps(t),As();const i=sn(s,t,0,[t.props,r]);if(Cs(),An(),of(i)){if(i.then(An,An),e)return i.then(o=>{mu(t,o,e)}).catch(o=>{fo(o,t,0)});t.asyncDep=i}else mu(t,i,e)}else id(t,e)}function mu(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Sf(e)),id(t,n)}let yu;function id(t,e,n){const s=t.type;if(!t.render){if(!e&&yu&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ye(Ye({isCustomElement:i,delimiters:a},o),c);s.render=yu(r,l)}}t.render=s.render||gt}ps(t),As(),Vy(t),Cs(),An()}function hv(t){return new Proxy(t.attrs,{get(e,n){return rt(t,"get","$attrs"),e[n]}})}function fv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=hv(t))},slots:t.slots,emit:t.emit,expose:e}}function vo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sf(Ef(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Di)return Di[n](t)}}))}function dv(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function pv(t){return G(t)&&"__vccOpts"in t}const St=(t,e)=>hy(t,e,pr);function od(t,e,n){const s=arguments.length;return s===2?we(e)&&!j(e)?Pi(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Pi(n)&&(n=[n]),Ae(t,e,n))}const gv="3.2.37",mv="http://www.w3.org/2000/svg",_n=typeof document!="undefined"?document:null,vu=_n&&_n.createElement("template"),yv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?_n.createElementNS(mv,t):_n.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{vu.innerHTML=s?`<svg>${t}</svg>`:t;const a=vu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function wv(t,e,n){const s=t.style,r=Re(n);if(n&&!r){for(const i in n)xa(s,i,n[i]);if(e&&!Re(e))for(const i in e)n[i]==null&&xa(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const wu=/\s*!important$/;function xa(t,e,n){if(j(n))n.forEach(s=>xa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_v(t,e);wu.test(n)?t.setProperty(Bn(s),n.replace(wu,""),"important"):t[s]=n}}const _u=["Webkit","Moz","ms"],ea={};function _v(t,e){const n=ea[e];if(n)return n;let s=Rt(e);if(s!=="filter"&&s in t)return ea[e]=s;s=uo(s);for(let r=0;r<_u.length;r++){const i=_u[r]+s;if(i in t)return ea[e]=i}return e}const Eu="http://www.w3.org/1999/xlink";function Ev(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Eu,e.slice(6,e.length)):t.setAttributeNS(Eu,e,n);else{const i=ym(e);n==null||i&&!sf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Iv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=sf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[ad,Tv]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let La=0;const bv=Promise.resolve(),Sv=()=>{La=0},Av=()=>La||(bv.then(Sv),La=ad());function En(t,e,n,s){t.addEventListener(e,n,s)}function Cv(t,e,n,s){t.removeEventListener(e,n,s)}function Rv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=kv(e);if(s){const l=i[e]=Nv(s,r);En(t,a,l,c)}else o&&(Cv(t,a,o,c),i[e]=void 0)}}const Iu=/(?:Once|Passive|Capture)$/;function kv(t){let e;if(Iu.test(t)){e={};let n;for(;n=t.match(Iu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Bn(t.slice(2)),e]}function Nv(t,e){const n=s=>{const r=s.timeStamp||ad();(Tv||r>=n.attached-1)&&mt(Dv(s,n.value),e,5,[s])};return n.value=t,n.attached=Av(),n}function Dv(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Tu=/^on[a-z]/,Ov=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?vv(t,s,r):e==="style"?wv(t,n,s):ao(e)?vc(e)||Rv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pv(t,e,s,r))?Iv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ev(t,e,s,r))};function Pv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Tu.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Tu.test(e)&&Re(n)?!1:e in t}const Mi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>vi(e,n):e};function Mv(t){t.target.composing=!0}function bu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zA={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Mi(r);const i=s||r.props&&r.props.type==="number";En(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ri(a)),t._assign(a)}),n&&En(t,"change",()=>{t.value=t.value.trim()}),e||(En(t,"compositionstart",Mv),En(t,"compositionend",bu),En(t,"change",bu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Mi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ri(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},WA={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=co(e);En(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ri(xi(o)):xi(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Mi(s)},mounted(t,{value:e}){Su(t,e)},beforeUpdate(t,e,n){t._assign=Mi(n)},updated(t,{value:e}){Su(t,e)}};function Su(t,e){const n=t.multiple;if(!(n&&!j(e)&&!co(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=xi(i);if(n)j(e)?i.selected=Im(e,o)>-1:i.selected=e.has(o);else if(oo(xi(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function xi(t){return"_value"in t?t._value:t.value}const xv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},GA=(t,e)=>n=>{if(!("key"in n))return;const s=Bn(n.key);if(e.some(r=>r===s||xv[r]===s))return t(n)},Lv={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Bs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Bs(t,!0),s.enter(t)):s.leave(t,()=>{Bs(t,!1)}):Bs(t,e))},beforeUnmount(t,{value:e}){Bs(t,e)}};function Bs(t,e){t.style.display=e?t._vod:"none"}const Uv=Ye({patchProp:Ov},yv);let Au;function Fv(){return Au||(Au=Qy(Uv))}const Vv=(...t)=>{const e=Fv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Bv(s);if(!r)return;const i=e._component;!G(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Bv(t){return Re(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},$v=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$v(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},jv=function(t){const e=cd(t);return ld.encodeByteArray(e,!0)},ud=function(t){return jv(t).replace(/\./g,"")},Hv=function(t){try{return ld.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function fd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qv(){return ke().indexOf("Electron/")>=0}function pd(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zv(){return ke().indexOf("MSAppHost/")>=0}function Wv(){return typeof indexedDB=="object"}function Gv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="FirebaseError";class $n extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Yv,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xr.prototype.create)}}class xr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Xv(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new $n(r,a,s)}}function Xv(t,e){return t.replace(Qv,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Qv=/\{\$([^}]+)}/g;function Jv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Cu(i)&&Cu(o)){if(!gr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Cu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zv(t,e){const n=new ew(t,e);return n.subscribe.bind(n)}class ew{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");tw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ta),r.error===void 0&&(r.error=ta),r.complete===void 0&&(r.complete=ta);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ta(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Kv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rw(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sw(t){return t===wn?void 0:t}function rw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const ow={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},aw=se.INFO,cw={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},lw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=cw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=aw,this._logHandler=lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const uw=(t,e)=>e.some(n=>t instanceof n);let Ru,ku;function hw(){return Ru||(Ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fw(){return ku||(ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gd=new WeakMap,Ua=new WeakMap,md=new WeakMap,na=new WeakMap,xc=new WeakMap;function dw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(on(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gd.set(n,t)}).catch(()=>{}),xc.set(e,t),e}function pw(t){if(Ua.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ua.set(t,e)}let Fa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ua.get(t);if(e==="objectStoreNames")return t.objectStoreNames||md.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gw(t){Fa=t(Fa)}function mw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(sa(this),e,...n);return md.set(s,e.sort?e.sort():[e]),on(s)}:fw().includes(t)?function(...e){return t.apply(sa(this),e),on(gd.get(this))}:function(...e){return on(t.apply(sa(this),e))}}function yw(t){return typeof t=="function"?mw(t):(t instanceof IDBTransaction&&pw(t),uw(t,hw())?new Proxy(t,Fa):t)}function on(t){if(t instanceof IDBRequest)return dw(t);if(na.has(t))return na.get(t);const e=yw(t);return e!==t&&(na.set(t,e),xc.set(e,t)),e}const sa=t=>xc.get(t);function vw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=on(o);return s&&o.addEventListener("upgradeneeded",c=>{s(on(o.result),c.oldVersion,c.newVersion,on(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const ww=["get","getKey","getAll","getAllKeys","count"],_w=["put","add","delete","clear"],ra=new Map;function Nu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ra.get(e))return ra.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=_w.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ww.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ra.set(e,i),i}gw(t=>Xo(Yo({},t),{get:(e,n,s)=>Nu(e,n)||t.get(e,n,s),has:(e,n)=>!!Nu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Iw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Iw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Va="@firebase/app",Du="0.7.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Mc("@firebase/app"),Tw="@firebase/app-compat",bw="@firebase/analytics-compat",Sw="@firebase/analytics",Aw="@firebase/app-check-compat",Cw="@firebase/app-check",Rw="@firebase/auth",kw="@firebase/auth-compat",Nw="@firebase/database",Dw="@firebase/database-compat",Ow="@firebase/functions",Pw="@firebase/functions-compat",Mw="@firebase/installations",xw="@firebase/installations-compat",Lw="@firebase/messaging",Uw="@firebase/messaging-compat",Fw="@firebase/performance",Vw="@firebase/performance-compat",Bw="@firebase/remote-config",$w="@firebase/remote-config-compat",jw="@firebase/storage",Hw="@firebase/storage-compat",Kw="@firebase/firestore",qw="@firebase/firestore-compat",zw="firebase",Ww="9.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="[DEFAULT]",Gw={[Va]:"fire-core",[Tw]:"fire-core-compat",[Sw]:"fire-analytics",[bw]:"fire-analytics-compat",[Cw]:"fire-app-check",[Aw]:"fire-app-check-compat",[Rw]:"fire-auth",[kw]:"fire-auth-compat",[Nw]:"fire-rtdb",[Dw]:"fire-rtdb-compat",[Ow]:"fire-fn",[Pw]:"fire-fn-compat",[Mw]:"fire-iid",[xw]:"fire-iid-compat",[Lw]:"fire-fcm",[Uw]:"fire-fcm-compat",[Fw]:"fire-perf",[Vw]:"fire-perf-compat",[Bw]:"fire-rc",[$w]:"fire-rc-compat",[jw]:"fire-gcs",[Hw]:"fire-gcs-compat",[Kw]:"fire-fst",[qw]:"fire-fst-compat","fire-js":"fire-js",[zw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new Map,Ba=new Map;function Yw(t,e){try{t.container.addComponent(e)}catch(n){Lc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gs(t){const e=t.name;if(Ba.has(e))return Lc.debug(`There were multiple attempts to register component ${e}.`),!1;Ba.set(e,t);for(const n of Li.values())Yw(n,t);return!0}function wo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Nn=new xr("app","Firebase",Xw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=Ww;function Jw(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:yd,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Nn.create("bad-app-name",{appName:String(s)});const r=Li.get(s);if(r){if(gr(t,r.options)&&gr(n,r.config))return r;throw Nn.create("duplicate-app",{appName:s})}const i=new iw(s);for(const a of Ba.values())i.addComponent(a);const o=new Qw(t,n,i);return Li.set(s,o),o}function vd(t=yd){const e=Li.get(t);if(!e)throw Nn.create("no-app",{appName:t});return e}function an(t,e,n){var s;let r=(s=Gw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lc.warn(a.join(" "));return}gs(new kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="firebase-heartbeat-database",e_=1,mr="firebase-heartbeat-store";let ia=null;function wd(){return ia||(ia=vw(Zw,e_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mr)}}}).catch(t=>{throw Nn.create("storage-open",{originalErrorMessage:t.message})})),ia}async function t_(t){try{return(await wd()).transaction(mr).objectStore(mr).get(_d(t))}catch(e){throw Nn.create("storage-get",{originalErrorMessage:e.message})}}async function Ou(t,e){try{const s=(await wd()).transaction(mr,"readwrite");return await s.objectStore(mr).put(e,_d(t)),s.done}catch(n){throw Nn.create("storage-set",{originalErrorMessage:n.message})}}function _d(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=1024,s_=30*24*60*60*1e3;class r_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new o_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=s_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pu(),{heartbeatsToSend:n,unsentEntries:s}=i_(this._heartbeatsCache.heartbeats),r=ud(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pu(){return new Date().toISOString().substring(0,10)}function i_(t,e=n_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Mu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Mu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class o_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wv()?Gv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await t_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mu(t){return ud(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){gs(new kn("platform-logger",e=>new Ew(e),"PRIVATE")),gs(new kn("heartbeat",e=>new r_(e),"PRIVATE")),an(Va,Du,t),an(Va,Du,"esm2017"),an("fire-js","")}a_("");function Uc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ed(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c_=Ed,Id=new xr("auth","Firebase",Ed());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Mc("@firebase/auth");function _i(t,...e){xu.logLevel<=se.ERROR&&xu.error(`Auth (${Ur}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,...e){throw Fc(t,...e)}function At(t,...e){return Fc(t,...e)}function l_(t,e,n){const s=Object.assign(Object.assign({},c_()),{[e]:n});return new xr("auth","Firebase",s).create(e,{appName:t.name})}function Fc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Id.create(t,...e)}function H(t,e,...n){if(!t)throw Fc(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _i(e),new Error(e)}function Bt(t,e){t||Mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Map;function xt(t){Bt(t instanceof Function,"Expected a class definition");let e=Lu.get(t);return e?(Bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lu.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t,e){const n=wo(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(gr(i,e!=null?e:{}))return r;vt(r,"already-initialized")}return n.initialize({options:e})}function h_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function f_(){return Uu()==="http:"||Uu()==="https:"}function Uu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(f_()||fd()||"connection"in navigator)?navigator.onLine:!0}function p_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=hd()||dd()}get(){return d_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t,e){Bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=new Fr(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Br(t,e,n,s,r={}){return bd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Lr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Td.fetch()(Sd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function bd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},g_),e);try{const r=new y_(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ui(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ui(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ui(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ui(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw l_(t,u,l);vt(t,u)}}catch(r){if(r instanceof $n)throw r;vt(t,"network-request-failed")}}async function $r(t,e,n,s,r={}){const i=await Br(t,e,n,s,r);return"mfaPendingCredential"in i&&vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Sd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Vc(t.config,r):`${t.config.apiScheme}://${r}`}class y_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(At(this.auth,"network-request-failed")),m_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ui(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=At(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function w_(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function __(t,e=!1){const n=yt(t),s=await n.getIdToken(e),r=Bc(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:tr(oa(r.auth_time)),issuedAtTime:tr(oa(r.iat)),expirationTime:tr(oa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oa(t){return Number(t)*1e3}function Bc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return _i("JWT malformed, contained fewer than 3 sections"),null;try{const r=Hv(n);return r?JSON.parse(r):(_i("Failed to decode base64 JWT payload"),null)}catch(r){return _i("Caught error parsing JWT payload as JSON",r),null}}function E_(t){const e=Bc(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof $n&&I_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function I_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=tr(this.lastLoginAt),this.creationTime=tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t){var e;const n=t.auth,s=await t.getIdToken(),r=await yr(t,w_(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?A_(i.providerUserInfo):[],a=S_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ad(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function b_(t){const e=yt(t);await Ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function S_(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function A_(t){return t.map(e=>{var{providerId:n}=e,s=Uc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(t,e){const n=await bd(t,{},async()=>{const s=Lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Sd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Td.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):E_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await C_(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new vr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vr,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ad(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return __(this,e)}reload(){return b_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ui(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yr(this,v_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Y,emailVerified:Z,isAnonymous:_e,providerData:be,stsTokenManager:He}=n;H(Y&&He,e,"internal-error");const Ht=vr.fromJSON(this.name,He);H(typeof Y=="string",e,"internal-error"),qt(h,e.name),qt(d,e.name),H(typeof Z=="boolean",e,"internal-error"),H(typeof _e=="boolean",e,"internal-error"),qt(g,e.name),qt(y,e.name),qt(D,e.name),qt(R,e.name),qt(k,e.name),qt(V,e.name);const Xe=new Cn({uid:Y,auth:e,email:d,emailVerified:Z,displayName:h,isAnonymous:_e,photoURL:y,phoneNumber:g,tenantId:D,stsTokenManager:Ht,createdAt:k,lastLoginAt:V});return be&&Array.isArray(be)&&(Xe.providerData=be.map(wt=>Object.assign({},wt))),R&&(Xe._redirectEventId=R),Xe}static async _fromIdTokenResponse(e,n,s=!1){const r=new vr;r.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ui(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cd.type="NONE";const Fu=Cd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ei(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ei("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new cs(xt(Fu),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||xt(Fu);const o=Ei(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Cn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new cs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Od(e))return"Blackberry";if(Pd(e))return"Webos";if($c(e))return"Safari";if((e.includes("chrome/")||kd(e))&&!e.includes("edge/"))return"Chrome";if(Dd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rd(t=ke()){return/firefox\//i.test(t)}function $c(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kd(t=ke()){return/crios\//i.test(t)}function Nd(t=ke()){return/iemobile/i.test(t)}function Dd(t=ke()){return/android/i.test(t)}function Od(t=ke()){return/blackberry/i.test(t)}function Pd(t=ke()){return/webos/i.test(t)}function _o(t=ke()){return/iphone|ipad|ipod/i.test(t)}function R_(t=ke()){var e;return _o(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function k_(){return pd()&&document.documentMode===10}function Md(t=ke()){return _o(t)||Dd(t)||Pd(t)||Od(t)||/windows phone/i.test(t)||Nd(t)}function N_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e=[]){let n;switch(t){case"Browser":n=Vu(ke());break;case"Worker":n=`${Vu(ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ur}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bu(this),this.idTokenSubscription=new Bu(this),this.beforeStateQueue=new D_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Id,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ui(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=p_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Eo(t){return yt(t)}class Bu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zv(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}async function P_(t,e){return Br(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_(t,e){return $r(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(t,e){return $r(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function L_(t,e){return $r(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends jc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new wr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new wr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return M_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return x_(e,{email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return P_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return L_(e,{idToken:n,email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e){return $r(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="http://localhost";class Dn extends jc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Uc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Dn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ls(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:U_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V_(t){const e=Ws(Gs(t)).link,n=e?Ws(Gs(e)).deep_link_id:null,s=Ws(Gs(t)).deep_link_id;return(s?Ws(Gs(s)).link:null)||s||n||e||t}class Hc{constructor(e){var n,s,r,i,o,a;const c=Ws(Gs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=F_((r=c.mode)!==null&&r!==void 0?r:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=V_(e);try{return new Hc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return wr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Hc.parseLink(n);return H(s,"argument-error"),wr._fromEmailAndCode(e,s.code,s.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Ld{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends jr{constructor(){super("facebook.com")}static credential(e){return Dn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Jt.credential(n,s)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends jr{constructor(){super("github.com")}static credential(e){return Dn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends jr{constructor(){super("twitter.com")}static credential(e,n){return Dn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return en.credential(n,s)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(t,e){return $r(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Cn._fromIdTokenResponse(e,s,r),o=$u(s);return new On({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=$u(s);return new On({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function $u(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends $n{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Fi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Fi(e,n,s,r)}}function Ud(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fi._fromErrorAndOperation(t,i,e,s):i})}async function $_(t,e,n=!1){const s=await yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return On._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await yr(t,Ud(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=Bc(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),On._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fd(t,e,n=!1){const s="signIn",r=await Ud(t,s,e),i=await On._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function H_(t,e){return Fd(Eo(t),e)}async function YA(t,e,n){const s=Eo(t),r=await B_(s,{returnSecureToken:!0,email:e,password:n}),i=await On._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function XA(t,e,n){return H_(yt(t),ks.credential(e,n))}function K_(t,e,n,s){return yt(t).onAuthStateChanged(e,n,s)}function q_(t){return yt(t).signOut()}const Vi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(){const t=ke();return $c(t)||_o(t)}const W_=1e3,G_=10;class Bd extends Vd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=z_()&&N_(),this.fallbackToPolling=Md(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);k_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,G_):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},W_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bd.type="LOCAL";const Y_=Bd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d extends Vd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$d.type="SESSION";const jd=$d;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Io(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await X_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Io.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Kc("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function J_(t){Ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(){return typeof Ct().WorkerGlobalScope!="undefined"&&typeof Ct().importScripts=="function"}async function Z_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tE(){return Hd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="firebaseLocalStorageDb",nE=1,Bi="firebaseLocalStorage",qd="fbase_key";class Hr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function To(t,e){return t.transaction([Bi],e?"readwrite":"readonly").objectStore(Bi)}function sE(){const t=indexedDB.deleteDatabase(Kd);return new Hr(t).toPromise()}function ja(){const t=indexedDB.open(Kd,nE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Bi,{keyPath:qd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Bi)?e(s):(s.close(),await sE(),e(await ja()))})})}async function ju(t,e,n){const s=To(t,!0).put({[qd]:e,value:n});return new Hr(s).toPromise()}async function rE(t,e){const n=To(t,!1).get(e),s=await new Hr(n).toPromise();return s===void 0?null:s.value}function Hu(t,e){const n=To(t,!0).delete(e);return new Hr(n).toPromise()}const iE=800,oE=3;class zd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ja(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>oE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Io._getInstance(tE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Z_(),!this.activeServiceWorker)return;this.sender=new Q_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ja();return await ju(e,Vi,"1"),await Hu(e,Vi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ju(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>rE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=To(r,!1).getAll();return new Hr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zd.type="LOCAL";const aE=zd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=At("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",cE().appendChild(s)})}function uE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Fr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e){return e?xt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends jc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fE(t){return Fd(t.auth,new qc(t),t.bypassAuthState)}function dE(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),j_(n,new qc(t),t.bypassAuthState)}async function pE(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),$_(n,new qc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fE;case"linkViaPopup":case"linkViaRedirect":return pE;case"reauthViaPopup":case"reauthViaRedirect":return dE;default:vt(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=new Fr(2e3,1e4);class es extends Wd{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=Kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,gE.get())};e()}}es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="pendingRedirect",Ii=new Map;class yE extends Wd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ii.get(this.auth._key());if(!e){try{const s=await vE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ii.set(this.auth._key(),e)}return this.bypassAuthState||Ii.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vE(t,e){const n=EE(e),s=_E(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function wE(t,e){Ii.set(t._key(),e)}function _E(t){return xt(t._redirectPersistence)}function EE(t){return Ei(mE,t.config.apiKey,t.name)}async function IE(t,e,n=!1){const s=Eo(t),r=hE(s,e),o=await new yE(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=10*60*1e3;class bE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Gd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(At(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ku(e))}saveEventToCache(e){this.cachedEventUids.add(Ku(e)),this.lastProcessedEventTime=Date.now()}}function Ku(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RE=/^https?/;async function kE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AE(t);for(const n of e)try{if(NE(n))return}catch{}vt(t,"unauthorized-domain")}function NE(t){const e=$a(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!RE.test(n))return!1;if(CE.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new Fr(3e4,6e4);function qu(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OE(t){return new Promise((e,n)=>{var s,r,i;function o(){qu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qu(),n(At(t,"network-request-failed"))},timeout:DE.get()})}if(!((r=(s=Ct().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ct().gapi)===null||i===void 0)&&i.load)o();else{const a=uE("iframefcb");return Ct()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},lE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ti=null,e})}let Ti=null;function PE(t){return Ti=Ti||OE(t),Ti}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=new Fr(5e3,15e3),xE="__/auth/iframe",LE="emulator/auth/iframe",UE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VE(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vc(e,LE):`https://${t.config.authDomain}/${xE}`,s={apiKey:e.apiKey,appName:t.name,v:Ur},r=FE.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Lr(s).slice(1)}`}async function BE(t){const e=await PE(t),n=Ct().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:VE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=Ct().setTimeout(()=>{i(o)},ME.get());function c(){Ct().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jE=500,HE=600,KE="_blank",qE="http://localhost";class zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zE(t,e,n,s=jE,r=HE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$E),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ke().toLowerCase();n&&(a=kd(l)?KE:n),Rd(l)&&(e=e||qE,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(R_(l)&&a!=="_self")return WE(e||"",a),new zu(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new zu(h)}function WE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="__/auth/handler",YE="emulator/auth/handler";function Wu(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ur,eventId:r};if(e instanceof Ld){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof jr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${XE(t)}?${Lr(a).slice(1)}`}function XE({config:t}){return t.emulator?Vc(t,YE):`https://${t.authDomain}/${GE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="webStorageSupport";class QE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jd,this._completeRedirectFn=IE,this._overrideRedirectResult=wE}async _openPopup(e,n,s,r){var i;Bt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Wu(e,n,s,$a(),r);return zE(e,o,Kc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),J_(Wu(e,n,s,$a(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Bt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await BE(e),s=new bE(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(aa,{type:aa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[aa];o!==void 0&&n(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Md()||$c()||_o()}}const JE=QE;var Gu="@firebase/auth",Yu="0.20.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tI(t){gs(new kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xd(t)},u=new O_(a,c,l);return h_(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gs(new kn("auth-internal",e=>{const n=Eo(e.getProvider("auth").getImmediate());return(s=>new ZE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Gu,Yu,eI(t)),an(Gu,Yu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t=vd()){const e=wo(t,"auth");return e.isInitialized()?e.getImmediate():u_(t,{popupRedirectResolver:JE,persistence:[aE,Y_,jd]})}tI("Browser");const nI="modulepreload",Xu={},sI="/VALStats/",$s=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${sI}${s}`,s in Xu)return;Xu[s]=!0;const r=s.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":nI,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yd=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ns=t=>Yd?Symbol(t):"_vr_"+t,rI=Ns("rvlm"),Qu=Ns("rvd"),zc=Ns("r"),Xd=Ns("rl"),Ha=Ns("rvl"),Zn=typeof window!="undefined";function iI(t){return t.__esModule||Yd&&t[Symbol.toStringTag]==="Module"}const ue=Object.assign;function ca(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const nr=()=>{},oI=/\/$/,aI=t=>t.replace(oI,"");function la(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=hI(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function cI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ju(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lI(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ms(e.matched[s],n.matched[r])&&Qd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uI(t[n],e[n]))return!1;return!0}function uI(t,e){return Array.isArray(t)?Zu(t,e):Array.isArray(e)?Zu(e,t):t===e}function Zu(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function hI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var _r;(function(t){t.pop="pop",t.push="push"})(_r||(_r={}));var sr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(sr||(sr={}));function fI(t){if(!t)if(Zn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aI(t)}const dI=/^[^#]+#/;function pI(t,e){return t.replace(dI,"#")+e}function gI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const bo=()=>({left:window.pageXOffset,top:window.pageYOffset});function mI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=gI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function eh(t,e){return(history.state?history.state.position-e:-1)+t}const Ka=new Map;function yI(t,e){Ka.set(t,e)}function vI(t){const e=Ka.get(t);return Ka.delete(t),e}let wI=()=>location.protocol+"//"+location.host;function Jd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ju(c,"")}return Ju(n,t)+s+r}function _I(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Jd(t,location),y=n.value,D=e.value;let R=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}R=D?d.position-D.position:0}else s(g);r.forEach(k=>{k(n.value,y,{delta:R,type:_r.pop,direction:R?R>0?sr.forward:sr.back:sr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(ue({},d.state,{scroll:bo()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function th(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?bo():null}}function EI(t){const{history:e,location:n}=window,s={value:Jd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:wI()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ue({},e.state,th(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ue({},r.value,e.state,{forward:c,scroll:bo()});i(u.current,u,!0);const h=ue({},th(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function II(t){t=fI(t);const e=EI(t),n=_I(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ue({location:"",base:t,go:s,createHref:pI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function TI(t){return typeof t=="string"||t&&typeof t=="object"}function Zd(t){return typeof t=="string"||typeof t=="symbol"}const zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ep=Ns("nf");var nh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nh||(nh={}));function ys(t,e){return ue(new Error,{type:t,[ep]:!0},e)}function Wt(t,e){return t instanceof Error&&ep in t&&(e==null||!!(t.type&e))}const sh="[^/]+?",bI={sensitive:!1,strict:!1,start:!0,end:!0},SI=/[.+*?^${}()[\]/\\]/g;function AI(t,e){const n=ue({},bI,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(SI,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:D,optional:R,regexp:k}=d;i.push({name:y,repeatable:D,optional:R});const V=k||sh;if(V!==sh){g+=10;try{new RegExp(`(${V})`)}catch(Z){throw new Error(`Invalid custom RegExp for param "${y}" (${V}): `+Z.message)}}let Y=D?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;h||(Y=R&&l.length<2?`(?:/${Y})`:"/"+Y),R&&(Y+="?"),r+=Y,g+=20,R&&(g+=-8),D&&(g+=-20),V===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:D,optional:R}=g,k=y in l?l[y]:"";if(Array.isArray(k)&&!D)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const V=Array.isArray(k)?k.join("/"):k;if(!V)if(R)d.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=V}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function CI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function RI(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=CI(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const kI={type:0,value:""},NI=/[a-zA-Z0-9_]/;function DI(t){if(!t)return[[]];if(t==="/")return[[kI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:NI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function OI(t,e,n){const s=AI(DI(t.path),n),r=ue(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function PI(t,e){const n=[],s=new Map;e=ih({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,y=xI(u);y.aliasOf=d&&d.record;const D=ih(e,u),R=[y];if("alias"in u){const Y=typeof u.alias=="string"?[u.alias]:u.alias;for(const Z of Y)R.push(ue({},y,{components:d?d.record.components:y.components,path:Z,aliasOf:d?d.record:y}))}let k,V;for(const Y of R){const{path:Z}=Y;if(h&&Z[0]!=="/"){const _e=h.record.path,be=_e[_e.length-1]==="/"?"":"/";Y.path=h.record.path+(Z&&be+Z)}if(k=OI(Y,h,D),d?d.alias.push(k):(V=V||k,V!==k&&V.alias.push(k),g&&u.name&&!rh(k)&&o(u.name)),"children"in y){const _e=y.children;for(let be=0;be<_e.length;be++)i(_e[be],k,d&&d.children[be])}d=d||k,c(k)}return V?()=>{o(V)}:nr}function o(u){if(Zd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&RI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!tp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!rh(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},y,D;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ys(1,{location:u});D=d.record.name,g=ue(MI(h.params,d.keys.filter(V=>!V.optional).map(V=>V.name)),u.params),y=d.stringify(g)}else if("path"in u)y=u.path,d=n.find(V=>V.re.test(y)),d&&(g=d.parse(y),D=d.record.name);else{if(d=h.name?s.get(h.name):n.find(V=>V.re.test(h.path)),!d)throw ys(1,{location:u,currentLocation:h});D=d.record.name,g=ue({},h.params,u.params),y=d.stringify(g)}const R=[];let k=d;for(;k;)R.unshift(k.record),k=k.parent;return{name:D,path:y,params:g,matched:R,meta:UI(R)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function MI(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function xI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function LI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function rh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function UI(t){return t.reduce((e,n)=>ue(e,n.meta),{})}function ih(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function tp(t,e){return e.children.some(n=>n===t||tp(t,n))}const np=/#/g,FI=/&/g,VI=/\//g,BI=/=/g,$I=/\?/g,sp=/\+/g,jI=/%5B/g,HI=/%5D/g,rp=/%5E/g,KI=/%60/g,ip=/%7B/g,qI=/%7C/g,op=/%7D/g,zI=/%20/g;function Wc(t){return encodeURI(""+t).replace(qI,"|").replace(jI,"[").replace(HI,"]")}function WI(t){return Wc(t).replace(ip,"{").replace(op,"}").replace(rp,"^")}function qa(t){return Wc(t).replace(sp,"%2B").replace(zI,"+").replace(np,"%23").replace(FI,"%26").replace(KI,"`").replace(ip,"{").replace(op,"}").replace(rp,"^")}function GI(t){return qa(t).replace(BI,"%3D")}function YI(t){return Wc(t).replace(np,"%23").replace($I,"%3F")}function XI(t){return t==null?"":YI(t).replace(VI,"%2F")}function ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function QI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(sp," "),o=i.indexOf("="),a=ji(o<0?i:i.slice(0,o)),c=o<0?null:ji(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function oh(t){let e="";for(let n in t){const s=t[n];if(n=GI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&qa(i)):[s&&qa(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function JI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function js(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Xt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ys(4,{from:n,to:e})):h instanceof Error?a(h):TI(h)?a(ys(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ua(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ZI(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Xt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=iI(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Xt(d,n,s,i,o)()}))}}return r}function ZI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ah(t){const e=ct(zc),n=ct(Xd),s=St(()=>e.resolve(Xs(t.to))),r=St(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ms.bind(null,u));if(d>-1)return d;const g=ch(c[l-2]);return l>1&&ch(u)===g&&h[h.length-1].path!==g?h.findIndex(ms.bind(null,c[l-2])):d}),i=St(()=>r.value>-1&&s0(n.params,s.value.params)),o=St(()=>r.value>-1&&r.value===n.matched.length-1&&Qd(n.params,s.value.params));function a(c={}){return n0(c)?e[Xs(t.replace)?"replace":"push"](Xs(t.to)).catch(nr):Promise.resolve()}return{route:s,href:St(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const e0=Uf({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ah,setup(t,{slots:e}){const n=Rs(ah(t)),{options:s}=ct(zc),r=St(()=>({[lh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[lh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:od("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),t0=e0;function n0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function s0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ch(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lh=(t,e,n)=>t!=null?t:e!=null?e:n,r0=Uf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ct(Ha),r=St(()=>t.route||s.value),i=ct(Qu,0),o=St(()=>r.value.matched[i]);tn(Qu,i+1),tn(rI,o),tn(Ha,r);const a=Rc();return os(()=>[a.value,o.value,t.name],([c,l,u],[h,d,g])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!ms(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return uh(n.default,{Component:u,route:c});const d=l.props[t.name],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,D=od(u,ue({},g,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return uh(n.default,{Component:D,route:c})||D}}});function uh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const i0=r0;function o0(t){const e=PI(t.routes,t),n=t.parseQuery||QI,s=t.stringifyQuery||oh,r=t.history,i=js(),o=js(),a=js(),c=ry(zt);let l=zt;Zn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ca.bind(null,v=>""+v),h=ca.bind(null,XI),d=ca.bind(null,ji);function g(v,M){let C,L;return Zd(v)?(C=e.getRecordMatcher(v),L=M):L=v,e.addRoute(L,C)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function D(){return e.getRoutes().map(v=>v.record)}function R(v){return!!e.getRecordMatcher(v)}function k(v,M){if(M=ue({},M||c.value),typeof v=="string"){const X=la(n,v,M.path),f=e.resolve({path:X.path},M),p=r.createHref(X.fullPath);return ue(X,f,{params:d(f.params),hash:ji(X.hash),redirectedFrom:void 0,href:p})}let C;if("path"in v)C=ue({},v,{path:la(n,v.path,M.path).path});else{const X=ue({},v.params);for(const f in X)X[f]==null&&delete X[f];C=ue({},v,{params:h(v.params)}),M.params=h(M.params)}const L=e.resolve(C,M),ae=v.hash||"";L.params=u(d(L.params));const de=cI(s,ue({},v,{hash:WI(ae),path:L.path})),J=r.createHref(de);return ue({fullPath:de,hash:ae,query:s===oh?JI(v.query):v.query||{}},L,{redirectedFrom:void 0,href:J})}function V(v){return typeof v=="string"?la(n,v,c.value.path):ue({},v)}function Y(v,M){if(l!==v)return ys(8,{from:M,to:v})}function Z(v){return He(v)}function _e(v){return Z(ue(V(v),{replace:!0}))}function be(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:C}=M;let L=typeof C=="function"?C(v):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=V(L):{path:L},L.params={}),ue({query:v.query,hash:v.hash,params:v.params},L)}}function He(v,M){const C=l=k(v),L=c.value,ae=v.state,de=v.force,J=v.replace===!0,X=be(C);if(X)return He(ue(V(X),{state:ae,force:de,replace:J}),M||C);const f=C;f.redirectedFrom=M;let p;return!de&&lI(s,L,C)&&(p=ys(16,{to:f,from:L}),Wn(L,L,!0,!1)),(p?Promise.resolve(p):Xe(f,L)).catch(m=>Wt(m)?Wt(m,2)?m:tt(m):fe(m,f,L)).then(m=>{if(m){if(Wt(m,2))return He(ue(V(m.to),{state:ae,force:de,replace:J}),M||f)}else m=Nt(f,L,!0,J,ae);return wt(f,L,m),m})}function Ht(v,M){const C=Y(v,M);return C?Promise.reject(C):Promise.resolve()}function Xe(v,M){let C;const[L,ae,de]=a0(v,M);C=ua(L.reverse(),"beforeRouteLeave",v,M);for(const X of L)X.leaveGuards.forEach(f=>{C.push(Xt(f,v,M))});const J=Ht.bind(null,v,M);return C.push(J),Yn(C).then(()=>{C=[];for(const X of i.list())C.push(Xt(X,v,M));return C.push(J),Yn(C)}).then(()=>{C=ua(ae,"beforeRouteUpdate",v,M);for(const X of ae)X.updateGuards.forEach(f=>{C.push(Xt(f,v,M))});return C.push(J),Yn(C)}).then(()=>{C=[];for(const X of v.matched)if(X.beforeEnter&&!M.matched.includes(X))if(Array.isArray(X.beforeEnter))for(const f of X.beforeEnter)C.push(Xt(f,v,M));else C.push(Xt(X.beforeEnter,v,M));return C.push(J),Yn(C)}).then(()=>(v.matched.forEach(X=>X.enterCallbacks={}),C=ua(de,"beforeRouteEnter",v,M),C.push(J),Yn(C))).then(()=>{C=[];for(const X of o.list())C.push(Xt(X,v,M));return C.push(J),Yn(C)}).catch(X=>Wt(X,8)?X:Promise.reject(X))}function wt(v,M,C){for(const L of a.list())L(v,M,C)}function Nt(v,M,C,L,ae){const de=Y(v,M);if(de)return de;const J=M===zt,X=Zn?history.state:{};C&&(L||J?r.replace(v.fullPath,ue({scroll:J&&X&&X.scroll},ae)):r.push(v.fullPath,ae)),c.value=v,Wn(v,M,C,J),tt()}let ut;function Kn(){ut||(ut=r.listen((v,M,C)=>{const L=k(v),ae=be(L);if(ae){He(ue(ae,{replace:!0}),L).catch(nr);return}l=L;const de=c.value;Zn&&yI(eh(de.fullPath,C.delta),bo()),Xe(L,de).catch(J=>Wt(J,12)?J:Wt(J,2)?(He(J.to,L).then(X=>{Wt(X,20)&&!C.delta&&C.type===_r.pop&&r.go(-1,!1)}).catch(nr),Promise.reject()):(C.delta&&r.go(-C.delta,!1),fe(J,L,de))).then(J=>{J=J||Nt(L,de,!1),J&&(C.delta?r.go(-C.delta,!1):C.type===_r.pop&&Wt(J,20)&&r.go(-1,!1)),wt(L,de,J)}).catch(nr)}))}let qn=js(),zn=js(),Se;function fe(v,M,C){tt(v);const L=zn.list();return L.length?L.forEach(ae=>ae(v,M,C)):console.error(v),Promise.reject(v)}function oe(){return Se&&c.value!==zt?Promise.resolve():new Promise((v,M)=>{qn.add([v,M])})}function tt(v){return Se||(Se=!v,Kn(),qn.list().forEach(([M,C])=>v?C(v):M()),qn.reset()),v}function Wn(v,M,C,L){const{scrollBehavior:ae}=t;if(!Zn||!ae)return Promise.resolve();const de=!C&&vI(eh(v.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return Cf().then(()=>ae(v,M,de)).then(J=>J&&mI(J)).catch(J=>fe(J,v,M))}const Dt=v=>r.go(v);let _t;const ot=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:R,getRoutes:D,resolve:k,options:t,push:Z,replace:_e,go:Dt,back:()=>Dt(-1),forward:()=>Dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:zn.add,isReady:oe,install(v){const M=this;v.component("RouterLink",t0),v.component("RouterView",i0),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Xs(c)}),Zn&&!_t&&c.value===zt&&(_t=!0,Z(r.location).catch(ae=>{}));const C={};for(const ae in zt)C[ae]=St(()=>c.value[ae]);v.provide(zc,M),v.provide(Xd,Rs(C)),v.provide(Ha,c);const L=v.unmount;ot.add(v),v.unmount=function(){ot.delete(v),ot.size<1&&(l=zt,ut&&ut(),ut=null,c.value=zt,_t=!1,Se=!1),L()}}}}function Yn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function a0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ms(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ms(l,c))||r.push(c))}return[n,s,r]}const Gc=o0({history:II(),routes:[{path:"/",component:()=>$s(()=>import("./Home.6116a6bc.js"),[])},{path:"/register",component:()=>$s(()=>import("./Register.af026aae.js"),[])},{path:"/sign-in",component:()=>$s(()=>import("./SignIn.e6dde973.js"),[])},{path:"/feed",component:()=>$s(()=>import("./Feed.fe85e54a.js"),[]),meta:{requiresAuth:!0}},{path:"/match",component:()=>$s(()=>import("./Match.c226afb4.js"),["assets/Match.c226afb4.js","assets/Match.505b8881.css","assets/Feed.fe85e54a.js"]),meta:{requiresData:!0}}]});Gc.beforeEach((t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?$i().currentUser?n():(alert("you don't have access"),n("/")):n()});var c0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,Yc=Yc||{},K=c0||self;function Hi(){}function za(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Kr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function l0(t){return Object.prototype.hasOwnProperty.call(t,ha)&&t[ha]||(t[ha]=++u0)}var ha="closure_uid_"+(1e9*Math.random()>>>0),u0=0;function h0(t,e,n){return t.call.apply(t.bind,arguments)}function f0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xe=h0:xe=f0,xe.apply(null,arguments)}function hi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function pn(){this.s=this.s,this.o=this.o}var d0=0;pn.prototype.s=!1;pn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),d0!=0)&&l0(this)};pn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ap=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},cp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function p0(t){e:{var e=iT;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function hh(t){return Array.prototype.concat.apply([],arguments)}function Xc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ki(t){return/^[\s\xa0]*$/.test(t)}var fh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function qe(t,e){return t.indexOf(e)!=-1}function fa(t,e){return t<e?-1:t>e?1:0}var ze;e:{var dh=K.navigator;if(dh){var ph=dh.userAgent;if(ph){ze=ph;break e}}ze=""}function Qc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function lp(t){const e={};for(const n in t)e[n]=t[n];return e}var gh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function up(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<gh.length;i++)n=gh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Jc(t){return Jc[" "](t),t}Jc[" "]=Hi;function g0(t){var e=v0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var m0=qe(ze,"Opera"),vs=qe(ze,"Trident")||qe(ze,"MSIE"),hp=qe(ze,"Edge"),Wa=hp||vs,fp=qe(ze,"Gecko")&&!(qe(ze.toLowerCase(),"webkit")&&!qe(ze,"Edge"))&&!(qe(ze,"Trident")||qe(ze,"MSIE"))&&!qe(ze,"Edge"),y0=qe(ze.toLowerCase(),"webkit")&&!qe(ze,"Edge");function dp(){var t=K.document;return t?t.documentMode:void 0}var qi;e:{var da="",pa=function(){var t=ze;if(fp)return/rv:([^\);]+)(\)|;)/.exec(t);if(hp)return/Edge\/([\d\.]+)/.exec(t);if(vs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(y0)return/WebKit\/(\S+)/.exec(t);if(m0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(pa&&(da=pa?pa[1]:""),vs){var ga=dp();if(ga!=null&&ga>parseFloat(da)){qi=String(ga);break e}}qi=da}var v0={};function w0(){return g0(function(){let t=0;const e=fh(String(qi)).split("."),n=fh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=fa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||fa(r[2].length==0,i[2].length==0)||fa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ga;if(K.document&&vs){var mh=dp();Ga=mh||parseInt(qi,10)||void 0}else Ga=void 0;var _0=Ga,E0=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Hi,e),K.removeEventListener("test",Hi,e)}catch{}return t}();function $e(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};function Er(t,e){if($e.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fp){e:{try{Jc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:I0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Er.Z.h.call(this)}}Ve(Er,$e);var I0={2:"touch",3:"pen",4:"mouse"};Er.prototype.h=function(){Er.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qr="closure_listenable_"+(1e6*Math.random()|0),T0=0;function b0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++T0,this.ca=this.fa=!1}function So(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ao(t){this.src=t,this.g={},this.h=0}Ao.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Xa(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new b0(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Ya(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ap(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(So(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xa(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Zc="closure_lm_"+(1e6*Math.random()|0),ma={};function pp(t,e,n,s,r){if(s&&s.once)return mp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)pp(t,e[i],n,s,r);return null}return n=nl(n),t&&t[qr]?t.N(e,n,Kr(s)?!!s.capture:!!s,r):gp(t,e,n,!1,s,r)}function gp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Kr(r)?!!r.capture:!!r,a=tl(t);if(a||(t[Zc]=a=new Ao(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=S0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)E0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(vp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function S0(){function t(n){return e.call(t.src,t.listener,n)}var e=A0;return t}function mp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)mp(t,e[i],n,s,r);return null}return n=nl(n),t&&t[qr]?t.O(e,n,Kr(s)?!!s.capture:!!s,r):gp(t,e,n,!0,s,r)}function yp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)yp(t,e[i],n,s,r);else s=Kr(s)?!!s.capture:!!s,n=nl(n),t&&t[qr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Xa(i,n,s,r),-1<n&&(So(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=tl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xa(e,n,s,r)),(n=-1<t?e[t]:null)&&el(n))}function el(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[qr])Ya(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(vp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=tl(e))?(Ya(n,t),n.h==0&&(n.src=null,e[Zc]=null)):So(t)}}}function vp(t){return t in ma?ma[t]:ma[t]="on"+t}function A0(t,e){if(t.ca)t=!0;else{e=new Er(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&el(t),t=n.call(s,e)}return t}function tl(t){return t=t[Zc],t instanceof Ao?t:null}var ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function nl(t){return typeof t=="function"?t:(t[ya]||(t[ya]=function(e){return t.handleEvent(e)}),t[ya])}function Ne(){pn.call(this),this.i=new Ao(this),this.P=this,this.I=null}Ve(Ne,pn);Ne.prototype[qr]=!0;Ne.prototype.removeEventListener=function(t,e,n,s){yp(this,t,e,n,s)};function Le(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new $e(e,t);else if(e instanceof $e)e.target=e.target||t;else{var r=e;e=new $e(s,t),up(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=fi(o,s,!0,e)&&r}if(o=e.g=t,r=fi(o,s,!0,e)&&r,r=fi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=fi(o,s,!1,e)&&r}Ne.prototype.M=function(){if(Ne.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)So(n[s]);delete t.g[e],t.h--}}this.I=null};Ne.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ne.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function fi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ya(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var sl=K.JSON.stringify;function C0(){var t=_p;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class R0{constructor(){this.h=this.g=null}add(e,n){const s=wp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var wp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new k0,t=>t.reset());class k0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function N0(t){K.setTimeout(()=>{throw t},0)}function rl(t,e){Qa||D0(),Ja||(Qa(),Ja=!0),_p.add(t,e)}var Qa;function D0(){var t=K.Promise.resolve(void 0);Qa=function(){t.then(O0)}}var Ja=!1,_p=new R0;function O0(){for(var t;t=C0();){try{t.h.call(t.g)}catch(n){N0(n)}var e=wp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ja=!1}function Co(t,e){Ne.call(this),this.h=t||1,this.g=e||K,this.j=xe(this.kb,this),this.l=Date.now()}Ve(Co,Ne);O=Co.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Le(this,"tick"),this.da&&(il(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function il(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){Co.Z.M.call(this),il(this),delete this.g};function ol(t,e,n){if(typeof t=="function")n&&(t=xe(t,n));else if(t&&typeof t.handleEvent=="function")t=xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Ep(t){t.g=ol(()=>{t.g=null,t.i&&(t.i=!1,Ep(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class P0 extends pn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ep(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ir(t){pn.call(this),this.h=t,this.g={}}Ve(Ir,pn);var yh=[];function Ip(t,e,n,s){Array.isArray(n)||(n&&(yh[0]=n.toString()),n=yh);for(var r=0;r<n.length;r++){var i=pp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Tp(t){Qc(t.g,function(e,n){this.g.hasOwnProperty(n)&&el(e)},t),t.g={}}Ir.prototype.M=function(){Ir.Z.M.call(this),Tp(this)};Ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ro(){this.g=!0}Ro.prototype.Aa=function(){this.g=!1};function M0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function x0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ts(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+U0(t,n)+(s?" "+s:"")})}function L0(t,e){t.info(function(){return"TIMEOUT: "+e})}Ro.prototype.info=function(){};function U0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return sl(n)}catch{return e}}var jn={},vh=null;function ko(){return vh=vh||new Ne}jn.Ma="serverreachability";function bp(t){$e.call(this,jn.Ma,t)}Ve(bp,$e);function Tr(t){const e=ko();Le(e,new bp(e))}jn.STAT_EVENT="statevent";function Sp(t,e){$e.call(this,jn.STAT_EVENT,t),this.stat=e}Ve(Sp,$e);function Ge(t){const e=ko();Le(e,new Sp(e,t))}jn.Na="timingevent";function Ap(t,e){$e.call(this,jn.Na,t),this.size=e}Ve(Ap,$e);function zr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var No={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Cp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function al(){}al.prototype.h=null;function wh(t){return t.h||(t.h=t.i())}function Rp(){}var Wr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function cl(){$e.call(this,"d")}Ve(cl,$e);function ll(){$e.call(this,"c")}Ve(ll,$e);var Za;function Do(){}Ve(Do,al);Do.prototype.g=function(){return new XMLHttpRequest};Do.prototype.i=function(){return{}};Za=new Do;function Gr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Ir(this),this.P=F0,t=Wa?125:void 0,this.W=new Co(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new kp}function kp(){this.i=null,this.g="",this.h=!1}var F0=45e3,ec={},zi={};O=Gr.prototype;O.setTimeout=function(t){this.P=t};function tc(t,e,n){t.K=1,t.v=Po($t(e)),t.s=n,t.U=!0,Np(t,null)}function Np(t,e){t.F=Date.now(),Yr(t),t.A=$t(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Up(n.h,"t",s),t.C=0,n=t.l.H,t.h=new kp,t.g=sg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new P0(xe(t.Ia,t,t.g),t.O)),Ip(t.V,t.g,"readystatechange",t.gb),e=t.H?lp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Tr(),M0(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&Lt(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=Lt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Wa||this.g&&(this.h.h||this.g.ga()||Th(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Tr(3):Tr(2)),Oo(this);var n=this.g.ba();this.N=n;t:if(Dp(this)){var s=Th(this.g);t="";var r=s.length,i=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Tn(this),rr(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,x0(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ki(a)){var l=a;break t}}l=null}if(n=l)ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,nc(this,n);else{this.i=!1,this.o=3,Ge(12),Tn(this),rr(this);break e}}this.U?(Op(this,u,o),Wa&&this.i&&u==3&&(Ip(this.V,this.W,"tick",this.fb),this.W.start())):(ts(this.j,this.m,o,null),nc(this,o)),u==4&&Tn(this),this.i&&!this.I&&(u==4?Zp(this.l,this):(this.i=!1,Yr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),Tn(this),rr(this)}}}catch{}finally{}};function Dp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Op(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=V0(t,n),r==zi){e==4&&(t.o=4,Ge(14),s=!1),ts(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ec){t.o=4,Ge(15),ts(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ts(t.j,t.m,r,null),nc(t,r);Dp(t)&&r!=zi&&r!=ec&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),vl(e),e.L=!0,Ge(11))):(ts(t.j,t.m,n,"[Invalid Chunked Response]"),Tn(t),rr(t))}O.fb=function(){if(this.g){var t=Lt(this.g),e=this.g.ga();this.C<e.length&&(Oo(this),Op(this,t,e),this.i&&t!=4&&Yr(this))}};function V0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?zi:(n=Number(e.substring(n,s)),isNaN(n)?ec:(s+=1,s+n>e.length?zi:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,Tn(this)};function Yr(t){t.Y=Date.now()+t.P,Pp(t,t.P)}function Pp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zr(xe(t.eb,t),e)}function Oo(t){t.B&&(K.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(L0(this.j,this.A),this.K!=2&&(Tr(),Ge(17)),Tn(this),this.o=2,rr(this)):Pp(this,this.Y-t)};function rr(t){t.l.G==0||t.I||Zp(t.l,t)}function Tn(t){Oo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,il(t.W),Tp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function nc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||sc(n.i,t))){if(n.I=t.N,!t.J&&sc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Xi(n),Lo(n);else break e;yl(n),Ge(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=zr(xe(n.ab,n),6e3));if(1>=Bp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else bn(n,11)}else if((t.J||n.g==t)&&Xi(n),!Ki(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(qe(y,"spdy")||qe(y,"quic")||qe(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(fl(i,i.h),i.h=null))}if(s.D){const D=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.sa=D,ye(s.F,s.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=ng(s,s.H?s.la:null,s.W),o.J){$p(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Oo(a),Yr(a)),s.g=o}else Qp(s);0<n.l.length&&Uo(n)}else l[0]!="stop"&&l[0]!="close"||bn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?bn(n,7):ml(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Tr(4)}catch{}}function B0(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(za(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ul(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(za(t)||typeof t=="string")cp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(za(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=B0(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Ds(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Ds)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=Ds.prototype;O.R=function(){hl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return hl(this),this.g.concat()};function hl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Pn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Pn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return Pn(this.h,t)?this.h[t]:e};O.set=function(t,e){Pn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Pn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Mp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Mn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Mn){this.g=e!==void 0?e:t.g,Wi(this,t.j),this.s=t.s,Gi(this,t.i),Yi(this,t.m),this.l=t.l,e=t.h;var n=new br;n.i=e.i,e.g&&(n.g=new Ds(e.g),n.h=e.h),_h(this,n),this.o=t.o}else t&&(n=String(t).match(Mp))?(this.g=!!e,Wi(this,n[1]||"",!0),this.s=ir(n[2]||""),Gi(this,n[3]||"",!0),Yi(this,n[4]),this.l=ir(n[5]||"",!0),_h(this,n[6]||"",!0),this.o=ir(n[7]||"")):(this.g=!!e,this.h=new br(null,this.g))}Mn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ys(e,Eh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ys(e,Eh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ys(n,n.charAt(0)=="/"?z0:q0,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ys(n,G0)),t.join("")};function $t(t){return new Mn(t)}function Wi(t,e,n){t.j=n?ir(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Gi(t,e,n){t.i=n?ir(e,!0):e}function Yi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _h(t,e,n){e instanceof br?(t.h=e,Y0(t.h,t.g)):(n||(e=Ys(e,W0)),t.h=new br(e,t.g))}function ye(t,e,n){t.h.set(e,n)}function Po(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function j0(t){return t instanceof Mn?$t(t):new Mn(t,void 0)}function H0(t,e,n,s){var r=new Mn(null,void 0);return t&&Wi(r,t),e&&Gi(r,e),n&&Yi(r,n),s&&(r.l=s),r}function ir(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ys(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,K0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function K0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Eh=/[#\/\?@]/g,q0=/[#\?:]/g,z0=/[#\?]/g,W0=/[#\?@]/g,G0=/#/g;function br(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gn(t){t.g||(t.g=new Ds,t.h=0,t.i&&$0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=br.prototype;O.add=function(t,e){gn(this),this.i=null,t=Os(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function xp(t,e){gn(t),e=Os(t,e),Pn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Pn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&hl(t)))}function Lp(t,e){return gn(t),e=Os(t,e),Pn(t.g.h,e)}O.forEach=function(t,e){gn(this),this.g.forEach(function(n,s){cp(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){gn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){gn(this);var e=[];if(typeof t=="string")Lp(this,t)&&(e=hh(e,this.g.get(Os(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=hh(e,t[n])}return e};O.set=function(t,e){return gn(this),this.i=null,t=Os(this,t),Lp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Up(t,e,n){xp(t,e),0<n.length&&(t.i=null,t.g.set(Os(t,e),Xc(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Os(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Y0(t,e){e&&!t.j&&(gn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(xp(this,s),Up(this,r,n))},t)),t.j=e}var X0=class{constructor(t,e){this.h=t,this.g=e}};function Fp(t){this.l=t||Q0,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Q0=10;function Vp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Bp(t){return t.h?1:t.g?t.g.size:0}function sc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fl(t,e){t.g?t.g.add(e):t.h=e}function $p(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Fp.prototype.cancel=function(){if(this.i=jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function jp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Xc(t.i)}function dl(){}dl.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};dl.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function J0(){this.g=new dl}function Z0(t,e,n){const s=n||"";try{ul(t,function(r,i){let o=r;Kr(r)&&(o=sl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function eT(t,e){const n=new Ro;if(K.Image){const s=new Image;s.onload=hi(di,n,s,"TestLoadImage: loaded",!0,e),s.onerror=hi(di,n,s,"TestLoadImage: error",!1,e),s.onabort=hi(di,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=hi(di,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function di(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Xr(t){this.l=t.$b||null,this.j=t.ib||!1}Ve(Xr,al);Xr.prototype.g=function(){return new Mo(this.l,this.j)};Xr.prototype.i=function(t){return function(){return t}}({});function Mo(t,e){Ne.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=pl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(Mo,Ne);var pl=0;O=Mo.prototype;O.open=function(t,e){if(this.readyState!=pl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Sr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qr(this)),this.readyState=pl};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Hp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Hp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qr(this):Sr(this),this.readyState==3&&Hp(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,Qr(this))};O.Ta=function(t){this.g&&(this.response=t,Qr(this))};O.ha=function(){this.g&&Qr(this)};function Qr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Sr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Sr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var tT=K.JSON.parse;function Te(t){Ne.call(this),this.headers=new Ds,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Kp,this.K=this.L=!1}Ve(Te,Ne);var Kp="",nT=/^https?$/i,sT=["POST","PUT"];O=Te.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Za.g(),this.C=this.u?wh(this.u):wh(Za),this.g.onreadystatechange=xe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ih(this,i);return}t=n||"";const r=new Ds(this.headers);s&&ul(s,function(i,o){r.set(o,i)}),s=p0(r.T()),n=K.FormData&&t instanceof K.FormData,!(0<=ap(sT,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wp(this),0<this.B&&((this.K=rT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xe(this.pa,this)):this.A=ol(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ih(this,i)}};function rT(t){return vs&&w0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function iT(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof Yc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function Ih(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qp(t),xo(t)}function qp(t){t.D||(t.D=!0,Le(t,"complete"),Le(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),xo(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xo(this,!0)),Te.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?zp(this):this.cb())};O.cb=function(){zp(this)};function zp(t){if(t.h&&typeof Yc!="undefined"&&(!t.C[1]||Lt(t)!=4||t.ba()!=2)){if(t.v&&Lt(t)==4)ol(t.Fa,0,t);else if(Le(t,"readystatechange"),Lt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Mp)[1]||null;if(!r&&K.self&&K.self.location){var i=K.self.location.protocol;r=i.substr(0,i.length-1)}s=!nT.test(r?r.toLowerCase():"")}n=s}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var o=2<Lt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",qp(t)}}finally{xo(t)}}}}function xo(t,e){if(t.g){Wp(t);const n=t.g,s=t.C[0]?Hi:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=s}catch{}}}function Wp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function Lt(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),tT(e)}};function Th(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Kp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function oT(t){let e="";return Qc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=oT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function Hs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gp(t){this.za=0,this.l=[],this.h=new Ro,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Hs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Hs("baseRetryDelayMs",5e3,t),this.$a=Hs("retryDelaySeedMs",1e4,t),this.Ya=Hs("forwardChannelMaxRetries",2,t),this.ra=Hs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Fp(t&&t.concurrentRequestLimit),this.Ca=new J0,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=Gp.prototype;O.ma=8;O.G=1;function ml(t){if(Yp(t),t.G==3){var e=t.V++,n=$t(t.F);ye(n,"SID",t.J),ye(n,"RID",e),ye(n,"TYPE","terminate"),Jr(t,n),e=new Gr(t,t.h,e,void 0),e.K=2,e.v=Po($t(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=sg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Yr(e)}tg(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Lo(t){t.g&&(vl(t),t.g.cancel(),t.g=null)}function Yp(t){Lo(t),t.u&&(K.clearTimeout(t.u),t.u=null),Xi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function va(t,e){t.l.push(new X0(t.Za++,e)),t.G==3&&Uo(t)}function Uo(t){Vp(t.i)||t.m||(t.m=!0,rl(t.Ha,t),t.C=0)}function aT(t,e){return Bp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=zr(xe(t.Ha,t,e),eg(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Gr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=lp(i),up(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Xp(this,r,e),n=$t(this.F),ye(n,"RID",t),ye(n,"CVER",22),this.D&&ye(n,"X-HTTP-Session-Id",this.D),Jr(this,n),this.o&&i&&gl(n,this.o,i),fl(this.i,r),this.Ra&&ye(n,"TYPE","init"),this.ja?(ye(n,"$req",e),ye(n,"SID","null"),r.$=!0,tc(r,n,null)):tc(r,n,e),this.G=2}}else this.G==3&&(t?bh(this,t):this.l.length==0||Vp(this.i)||bh(this))};function bh(t,e){var n;e?n=e.m:n=t.V++;const s=$t(t.F);ye(s,"SID",t.J),ye(s,"RID",n),ye(s,"AID",t.U),Jr(t,s),t.o&&t.s&&gl(s,t.o,t.s),n=new Gr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Xp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),fl(t.i,n),tc(n,s,e)}function Jr(t,e){t.j&&ul({},function(n,s){ye(e,s,n)})}function Xp(t,e,n){n=Math.min(t.l.length,n);var s=t.j?xe(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Z0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Qp(t){t.g||t.u||(t.Y=1,rl(t.Ga,t),t.A=0)}function yl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=zr(xe(t.Ga,t),eg(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,Jp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=zr(xe(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ge(10),Lo(this),Jp(this))};function vl(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Jp(t){t.g=new Gr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=$t(t.oa);ye(e,"RID","rpc"),ye(e,"SID",t.J),ye(e,"CI",t.N?"0":"1"),ye(e,"AID",t.U),Jr(t,e),ye(e,"TYPE","xmlhttp"),t.o&&t.s&&gl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Po($t(e)),n.s=null,n.U=!0,Np(n,t)}O.ab=function(){this.v!=null&&(this.v=null,Lo(this),yl(this),Ge(19))};function Xi(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Zp(t,e){var n=null;if(t.g==e){Xi(t),vl(t),t.g=null;var s=2}else if(sc(t.i,e))n=e.D,$p(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ko(),Le(s,new Ap(s,n)),Uo(t)}else Qp(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&aT(t,e)||s==2&&yl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:bn(t,5);break;case 4:bn(t,10);break;case 3:bn(t,6);break;default:bn(t,2)}}}function eg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function bn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=xe(t.jb,t);n||(n=new Mn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Wi(n,"https"),Po(n)),eT(n.toString(),s)}else Ge(2);t.G=0,t.j&&t.j.va(e),tg(t),Yp(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ge(2)):(this.h.info("Failed to ping google.com"),Ge(1))};function tg(t){t.G=0,t.I=-1,t.j&&((jp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Xc(t.l),t.l.length=0),t.j.ua())}function ng(t,e,n){let s=j0(n);if(s.i!="")e&&Gi(s,e+"."+s.i),Yi(s,s.m);else{const r=K.location;s=H0(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Qc(t.aa,function(r,i){ye(s,i,r)}),e=t.D,n=t.sa,e&&n&&ye(s,e,n),ye(s,"VER",t.ma),Jr(t,s),s}function sg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Te(new Xr({ib:!0})):new Te(t.qa),e.L=t.H,e}function rg(){}O=rg.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function Qi(){if(vs&&!(10<=Number(_0)))throw Error("Environmental error: no available transport.")}Qi.prototype.g=function(t,e){return new it(t,e)};function it(t,e){Ne.call(this),this.g=new Gp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ki(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ki(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ps(this)}Ve(it,Ne);it.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),rl(xe(t.hb,t,e))),Ge(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ng(t,null,t.W),Uo(t)};it.prototype.close=function(){ml(this.g)};it.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,va(this.g,e)}else this.v?(e={},e.__data__=sl(t),va(this.g,e)):va(this.g,t)};it.prototype.M=function(){this.g.j=null,delete this.j,ml(this.g),delete this.g,it.Z.M.call(this)};function ig(t){cl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ve(ig,cl);function og(){ll.call(this),this.status=1}Ve(og,ll);function Ps(t){this.g=t}Ve(Ps,rg);Ps.prototype.xa=function(){Le(this.g,"a")};Ps.prototype.wa=function(t){Le(this.g,new ig(t))};Ps.prototype.va=function(t){Le(this.g,new og)};Ps.prototype.ua=function(){Le(this.g,"b")};Qi.prototype.createWebChannel=Qi.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;No.NO_ERROR=0;No.TIMEOUT=8;No.HTTP_ERROR=6;Cp.COMPLETE="complete";Rp.EventType=Wr;Wr.OPEN="a";Wr.CLOSE="b";Wr.ERROR="c";Wr.MESSAGE="d";Ne.prototype.listen=Ne.prototype.N;Te.prototype.listenOnce=Te.prototype.O;Te.prototype.getLastError=Te.prototype.La;Te.prototype.getLastErrorCode=Te.prototype.Da;Te.prototype.getStatus=Te.prototype.ba;Te.prototype.getResponseJson=Te.prototype.Qa;Te.prototype.getResponseText=Te.prototype.ga;Te.prototype.send=Te.prototype.ea;var cT=function(){return new Qi},lT=function(){return ko()},wa=No,uT=Cp,hT=jn,Sh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fT=Xr,pi=Rp,dT=Te;const Ah="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Mc("@firebase/firestore");function Ch(){return xn.logLevel}function x(t,...e){if(xn.logLevel<=se.DEBUG){const n=e.map(wl);xn.debug(`Firestore (${Ms}): ${t}`,...n)}}function hn(t,...e){if(xn.logLevel<=se.ERROR){const n=e.map(wl);xn.error(`Firestore (${Ms}): ${t}`,...n)}}function Rh(t,...e){if(xn.logLevel<=se.WARN){const n=e.map(wl);xn.warn(`Firestore (${Ms}): ${t}`,...n)}}function wl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw hn(e),new Error(e)}function pe(t,e){t||z()}function W(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class mT{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pe(typeof s.accessToken=="string"),new pT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new Je(e)}}class yT{constructor(e,n,s){this.type="FirstParty",this.user=Je.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class vT{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new yT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _T{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.p=n.token,new wT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_l.A=-1;class ag{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ET(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function re(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new je(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new je(0,0))}static max(){return new Q(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ar.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ar?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Ar{construct(e,n,s){return new ve(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const IT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Ar{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return IT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new $(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.fields=e,e.sort(Ze.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Fe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const TT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(t){if(pe(!!t),typeof t=="string"){let e=0;const n=TT.exec(t);if(pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _s(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ug(t){const e=t.mapValue.fields.__previous_value__;return lg(e)?ug(e):e}function Cr(t){const e=fn(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Es{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Es("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Es&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){return t==null}function Ji(t){return t===0&&1/t==-1/0}function ST(t){return typeof t=="number"&&Number.isInteger(t)&&!Ji(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ve.fromString(e))}static fromName(e){return new B(ve.fromString(e).popFirst(5))}static empty(){return new B(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ve(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ln(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lg(t)?4:AT(t)?9007199254740991:10:z()}function kt(t,e){if(t===e)return!0;const n=Ln(t);if(n!==Ln(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Cr(t).isEqual(Cr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=fn(s.timestampValue),o=fn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return _s(s.bytesValue).isEqual(_s(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ie(s.geoPointValue.latitude)===Ie(r.geoPointValue.latitude)&&Ie(s.geoPointValue.longitude)===Ie(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ie(s.integerValue)===Ie(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ie(s.doubleValue),o=Ie(r.doubleValue);return i===o?Ji(i)===Ji(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(kh(i)!==kh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!kt(i[a],o[a])))return!1;return!0}(t,e);default:return z()}}function Rr(t,e){return(t.values||[]).find(n=>kt(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=Ln(t),s=Ln(e);if(n!==s)return re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ie(r.integerValue||r.doubleValue),a=Ie(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Nh(t.timestampValue,e.timestampValue);case 4:return Nh(Cr(t),Cr(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(r,i){const o=_s(r),a=_s(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=re(o[c],a[c]);if(l!==0)return l}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=re(Ie(r.latitude),Ie(i.latitude));return o!==0?o:re(Ie(r.longitude),Ie(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Is(o[c],a[c]);if(l)return l}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===gi.mapValue&&i===gi.mapValue)return 0;if(r===gi.mapValue)return 1;if(i===gi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=re(a[u],l[u]);if(h!==0)return h;const d=Is(o[a[u]],c[l[u]]);if(d!==0)return d}return re(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function Nh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=fn(t),s=fn(e),r=re(n.seconds,s.seconds);return r!==0?r:re(n.nanos,s.nanos)}function us(t){return ic(t)}function ic(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=fn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_s(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ic(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ic(s.fields[a])}`;return i+"}"}(t.mapValue):z();var e,n}function oc(t){return!!t&&"integerValue"in t}function El(t){return!!t&&"arrayValue"in t}function Dh(t){return!!t&&"nullValue"in t}function Oh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bi(t){return!!t&&"mapValue"in t}function or(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=or(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=or(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!bi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=or(n)}setAll(e){let n=Ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=or(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());bi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];bi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){xs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new dt(or(this.value))}}function hg(t){const e=[];return xs(t.fields,(n,s)=>{const r=new Ze([n]);if(bi(s)){const i=hg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new rc(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Be(e,0,Q.min(),Q.min(),dt.empty(),0)}static newFoundDocument(e,n,s){return new Be(e,1,n,Q.min(),s,0)}static newNoDocument(e,n){return new Be(e,2,n,Q.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Be(e,3,n,Q.min(),dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function CT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new je(n+1,0):new je(n,s));return new Un(r,B.empty(),e)}function RT(t){return new Un(t.readTime,t.key,-1)}class Un{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Un(Q.min(),B.empty(),-1)}static max(){return new Un(Q.max(),B.empty(),-1)}}function kT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mi(this.root,e,this.comparator,!0)}}class mi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Oe.RED,this.left=r!=null?r:Oe.EMPTY,this.right=i!=null?i:Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Oe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Oe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Oe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ph(this.data.getIterator())}getIteratorFrom(e){return new Ph(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Ph{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Mh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new NT(t,e,n,s,r,i,o)}function Il(t){const e=W(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+us(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Fo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>us(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>us(s)).join(",")),e.P=n}return e.P}function DT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${us(s.value)}`;var s}).join(", ")}]`),Fo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>us(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>us(n)).join(",")),`Target(${e})`}function Tl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!VT(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!kt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lh(t.startAt,e.startAt)&&Lh(t.endAt,e.endAt)}function ac(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class et extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new OT(e,n,s):n==="array-contains"?new xT(e,s):n==="in"?new LT(e,s):n==="not-in"?new UT(e,s):n==="array-contains-any"?new FT(e,s):new et(e,n,s)}static V(e,n,s){return n==="in"?new PT(e,s):new MT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Is(n,this.value)):n!==null&&Ln(this.value)===Ln(n)&&this.v(Is(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class OT extends et{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.v(n)}}class PT extends et{constructor(e,n){super(e,"in",n),this.keys=fg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MT extends et{constructor(e,n){super(e,"not-in",n),this.keys=fg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class xT extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return El(n)&&Rr(n.arrayValue,this.value)}}class LT extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Rr(this.value.arrayValue,n)}}class UT extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Rr(this.value.arrayValue,n)}}class FT extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!El(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Rr(this.value.arrayValue,s))}}class Zi{constructor(e,n){this.position=e,this.inclusive=n}}class ar{constructor(e,n="asc"){this.field=e,this.dir=n}}function VT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function xh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=Is(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function BT(t,e,n,s,r,i,o,a){return new Vo(t,e,n,s,r,i,o,a)}function bl(t){return new Vo(t)}function $T(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function HT(t){for(const e of t.filters)if(e.S())return e.field;return null}function KT(t){return t.collectionGroup!==null}function kr(t){const e=W(t);if(e.D===null){e.D=[];const n=HT(e),s=jT(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new ar(n)),e.D.push(new ar(Ze.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ar(Ze.keyField(),i))}}}return e.D}function Fn(t){const e=W(t);if(!e.C)if(e.limitType==="F")e.C=Mh(e.path,e.collectionGroup,kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of kr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ar(i.field,o))}const s=e.endAt?new Zi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Zi(e.startAt.position,e.startAt.inclusive):null;e.C=Mh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function qT(t,e,n){return new Vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bo(t,e){return Tl(Fn(t),Fn(e))&&t.limitType===e.limitType}function dg(t){return`${Il(Fn(t))}|lt:${t.limitType}`}function cc(t){return`Query(target=${DT(Fn(t))}; limitType=${t.limitType})`}function Sl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=xh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,kr(n),s)||n.endAt&&!function(r,i,o){const a=xh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,kr(n),s))}(t,e)}function zT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pg(t){return(e,n)=>{let s=!1;for(const r of kr(t)){const i=WT(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function WT(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Is(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ji(e)?"-0":e}}function mg(t){return{integerValue:""+t}}function GT(t,e){return ST(e)?mg(e):gg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this._=void 0}}function YT(t,e,n){return t instanceof eo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Nr?vg(t,e):t instanceof Dr?wg(t,e):function(s,r){const i=yg(s,r),o=Uh(i)+Uh(s.k);return oc(i)&&oc(s.k)?mg(o):gg(s.M,o)}(t,e)}function XT(t,e,n){return t instanceof Nr?vg(t,e):t instanceof Dr?wg(t,e):n}function yg(t,e){return t instanceof to?oc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class eo extends $o{}class Nr extends $o{constructor(e){super(),this.elements=e}}function vg(t,e){const n=_g(e);for(const s of t.elements)n.some(r=>kt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Dr extends $o{constructor(e){super(),this.elements=e}}function wg(t,e){let n=_g(e);for(const s of t.elements)n=n.filter(r=>!kt(r,s));return{arrayValue:{values:n}}}class to extends $o{constructor(e,n){super(),this.M=e,this.k=n}}function Uh(t){return Ie(t.integerValue||t.doubleValue)}function _g(t){return El(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function QT(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Nr&&s instanceof Nr||n instanceof Dr&&s instanceof Dr?ws(n.elements,s.elements,kt):n instanceof to&&s instanceof to?kt(n.k,s.k):n instanceof eo&&s instanceof eo}(t.transform,e.transform)}class JT{constructor(e,n){this.version=e,this.transformResults=n}}class hs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hs}static exists(e){return new hs(void 0,e)}static updateTime(e){return new hs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Si(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jo{}function ZT(t,e,n){t instanceof Ho?function(s,r,i){const o=s.value.clone(),a=Bh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(s,r,i){if(!Si(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Bh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Eg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function lc(t,e,n){t instanceof Ho?function(s,r,i){if(!Si(s.precondition,r))return;const o=s.value.clone(),a=$h(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Vh(r),o).setHasLocalMutations()}(t,e,n):t instanceof Zr?function(s,r,i){if(!Si(s.precondition,r))return;const o=$h(s.fieldTransforms,i,r),a=r.data;a.setAll(Eg(s)),a.setAll(o),r.convertToFoundDocument(Vh(r),a).setHasLocalMutations()}(t,e,n):function(s,r){Si(s.precondition,r)&&r.convertToNoDocument(Q.min())}(t,e)}function eb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=yg(s.transform,r||null);i!=null&&(n==null&&(n=dt.empty()),n.set(s.field,i))}return n||null}function Fh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ws(n,s,(r,i)=>QT(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Vh(t){return t.isFoundDocument()?t.version:Q.min()}class Ho extends jo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Zr extends jo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Eg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bh(t,e,n){const s=new Map;pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,XT(o,a,n[r]))}return s}function $h(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,YT(i,o,e))}return s}class tb extends jo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class nb extends jo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,ee;function rb(t){switch(t){default:return z();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Ig(t){if(t===void 0)return hn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ee.OK:return I.OK;case Ee.CANCELLED:return I.CANCELLED;case Ee.UNKNOWN:return I.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return I.INTERNAL;case Ee.UNAVAILABLE:return I.UNAVAILABLE;case Ee.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ee.NOT_FOUND:return I.NOT_FOUND;case Ee.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ee.ABORTED:return I.ABORTED;case Ee.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ee.DATA_LOSS:return I.DATA_LOSS;default:return z()}}(ee=Ee||(Ee={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return cg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=new De(B.comparator);function Vn(){return ib}const ob=new De(B.comparator);function uc(...t){let e=ob;for(const n of t)e=e.insert(n.key,n);return e}function _a(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const ab=new De(B.comparator),cb=new Ue(B.comparator);function me(...t){let e=cb;for(const n of t)e=e.add(n);return e}const lb=new Ue(re);function Tg(){return lb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,ei.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ko(Q.min(),s,Tg(),Vn(),me())}}class ei{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ei(Fe.EMPTY_BYTE_STRING,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class bg{constructor(e,n){this.targetId=e,this.$=n}}class Sg{constructor(e,n,s=Fe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class jh{constructor(){this.B=0,this.L=Kh(),this.U=Fe.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=me(),n=me(),s=me();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:z()}}),new ei(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=Kh()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ub{constructor(e){this.nt=e,this.st=new Map,this.it=Vn(),this.rt=Hh(),this.ot=new Ue(re)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(ac(i))if(s===0){const o=new B(i.path);this.ct(n,o,Be.newNoDocument(o,Q.min()))}else pe(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&ac(a.target)){const c=new B(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,Be.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=me();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new Ko(e,n,this.ot,this.it,s);return this.it=Vn(),this.rt=Hh(),this.ot=new Ue(re),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new jh,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Ue(re),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new jh),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Hh(){return new De(B.comparator)}function Kh(){return new De(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class db{constructor(e,n){this.databaseId=e,this.N=n}}function no(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ag(t,e){return t.N?e.toBase64():e.toUint8Array()}function pb(t,e){return no(t,e.toTimestamp())}function Ft(t){return pe(!!t),Q.fromTimestamp(function(e){const n=fn(e);return new je(n.seconds,n.nanos)}(t))}function Al(t,e){return function(n){return new ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cg(t){const e=ve.fromString(t);return pe(Ng(e)),e}function hc(t,e){return Al(t.databaseId,e.path)}function Ea(t,e){const n=Cg(e);if(n.get(1)!==t.databaseId.projectId)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Rg(n))}function fc(t,e){return Al(t.databaseId,e)}function gb(t){const e=Cg(t);return e.length===4?ve.emptyPath():Rg(e)}function dc(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rg(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qh(t,e,n){return{name:hc(t,e),fields:n.value.mapValue.fields}}function mb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(pe(l===void 0||typeof l=="string"),Fe.fromBase64String(l||"")):(pe(l===void 0||l instanceof Uint8Array),Fe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Ig(c.code);return new $(l,c.message||"")}(o);n=new Sg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ea(t,s.document.name),i=Ft(s.document.updateTime),o=new dt({mapValue:{fields:s.document.fields}}),a=Be.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Ai(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ea(t,s.document),i=s.readTime?Ft(s.readTime):Q.min(),o=Be.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ai([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ea(t,s.document),i=s.removedTargetIds||[];n=new Ai([],i,r,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new sb(r),o=s.targetId;n=new bg(o,i)}}return n}function yb(t,e){let n;if(e instanceof Ho)n={update:qh(t,e.key,e.value)};else if(e instanceof tb)n={delete:hc(t,e.key)};else if(e instanceof Zr)n={update:qh(t,e.key,e.data),updateMask:Cb(e.fieldMask)};else{if(!(e instanceof nb))return z();n={verify:hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof eo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Nr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Dr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof to)return{fieldPath:i.field.canonicalString(),increment:o.k};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:pb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function vb(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ft(s.updateTime):Ft(r);return i.isEqual(Q.min())&&(i=Ft(r)),new JT(i,s.transformResults||[])}(n,e))):[]}function wb(t,e){return{documents:[fc(t,e.path)]}}function _b(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=fc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Oh(h.value))return{unaryFilter:{field:Xn(h.field),op:"IS_NAN"}};if(Dh(h.value))return{unaryFilter:{field:Xn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Oh(h.value))return{unaryFilter:{field:Xn(h.field),op:"IS_NOT_NAN"}};if(Dh(h.value))return{unaryFilter:{field:Xn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xn(h.field),op:bb(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Xn(u.field),direction:Tb(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||Fo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Eb(t){let e=gb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){pe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=kg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ar(ns(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Fo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Zi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Zi(d,h)}(n.endAt)),BT(e,r,o,i,a,"F",c,l)}function Ib(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function kg(t){return t?t.unaryFilter!==void 0?[Ab(t)]:t.fieldFilter!==void 0?[Sb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>kg(e)).reduce((e,n)=>e.concat(n)):z():[]}function Tb(t){return hb[t]}function bb(t){return fb[t]}function Xn(t){return{fieldPath:t.canonicalString()}}function ns(t){return Ze.fromServerFormat(t.fieldPath)}function Sb(t){return et.create(ns(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ab(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ns(t.unaryFilter.field);return et.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ns(t.unaryFilter.field);return et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ns(t.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ns(t.unaryFilter.field);return et.create(r,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function Cb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ng(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function ti(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ZT(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&lc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&lc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(Q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,s)=>Fh(n,s))&&ws(this.baseMutations,e.baseMutations,(n,s)=>Fh(n,s))}}class Cl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){pe(e.mutations.length===s.length);let r=ab;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Cl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=Fe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.Jt=e}}function Pb(t){const e=Eb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qT(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.qe=new xb}addToCollectionParentIndex(e,n){return this.qe.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Un.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class xb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ue(ve.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ue(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Ts(0)}static yn(){return new Ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Rb)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n,s){this.ds=e,this.Bs=n,this.indexManager=s}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Us(e,n,s))}Us(e,n,s){return this.ds.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Ks(e,n){return this.ds.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Qs(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.js(e,n.path):KT(n)?this.Ws(e,n,s):this.zs(e,n,s)}js(e,n){return this.Ls(e,new B(n)).next(s=>{let r=uc();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(e,n,s){const r=n.collectionGroup;let i=uc();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Vo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.zs(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,s){let r;return this.ds.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=Be.newInvalidDocument(c),r=r.insert(c,l)),lc(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{Sl(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hs=s,this.Js=r}static Ys(e,n){let s=me(),r=me();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Rl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,s,r){return this.ti(e,n).next(i=>i||this.ei(e,n,r,s)).next(i=>i||this.ni(e,n))}ti(e,n){return b.resolve(null)}ei(e,n,s,r){return $T(n)||r.isEqual(Q.min())?this.ni(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.si(n,i);return this.ii(n,o,s,r)?this.ni(e,n):(Ch()<=se.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),cc(n)),this.ri(e,o,n,CT(r,-1)))})}si(e,n){let s=new Ue(pg(e));return n.forEach((r,i)=>{Sl(e,i)&&(s=s.add(i))}),s}ii(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,n){return Ch()<=se.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",cc(n)),this.Zs.Qs(e,n,Un.min())}ri(e,n,s,r){return this.Zs.Qs(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n,s,r){this.persistence=e,this.oi=n,this.M=r,this.ui=new De(re),this.ai=new Ls(i=>Il(i),Tl),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(s)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new Ub(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function Bb(t,e,n,s){return new Vb(t,e,n,s)}async function Dg(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Bs.getAllMutationBatches(s).next(i=>(r=i,n.li(e),n.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=me();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.fi.Ks(s,c).next(l=>({di:l,removedBatchIds:o,addedBatchIds:a}))})})}function $b(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(y=>{const D=c.docVersions.get(g);pe(D!==null),y.version.compareTo(D)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.Bs.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.fi.Ks(s,r))})}function Og(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function jb(t,e){const n=W(t),s=e.snapshotVersion;let r=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});r=n.ui;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?d=d.withResumeToken(Fe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),r=r.insert(u,d),function(g,y,D){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(h,d,l)&&a.push(n.fs.updateTargetData(i,d))});let c=Vn();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Hb(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(Q.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=r,i))}function Hb(t,e,n){let s=me();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=Vn();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(Q.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):x("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Kb(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(s,e)))}function qb(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.fs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.fs.allocateTargetId(s).next(o=>(r=new Rn(e,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(s.targetId,s),n.ai.set(e,s.targetId)),s})}async function pc(t,e,n){const s=W(t),r=s.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ti(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ui=s.ui.remove(e),s.ai.delete(r.target)}function zh(t,e,n){const s=W(t);let r=Q.min(),i=me();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=W(a),h=u.ai.get(l);return h!==void 0?b.resolve(u.ui.get(h)):u.fs.getTargetData(c,l)}(s,o,Fn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.oi.Qs(o,e,n?r:Q.min(),n?i:me())).next(a=>(zb(s,zT(e),a),{documents:a,_i:i})))}function zb(t,e,n){let s=Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ci.set(e,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return b.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var s;return this.yi.set(n.id,{id:(s=n).id,version:s.version,createTime:Ft(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(s){return{name:s.name,query:Pb(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.overlays=new De(B.comparator),this.Ii=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ii.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=_a(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new De((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=_a(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=_a(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return b.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.Ii.get(r.largestBatchId).delete(s.key);this.Ii.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Db(n,s));let i=this.Ii.get(n);i===void 0&&(i=me(),this.Ii.set(n,i)),this.Ii.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.Ti=new Ue(Ce.Ei),this.Ai=new Ue(Ce.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const s=new Ce(e,n);this.Ti=this.Ti.add(s),this.Ai=this.Ai.add(s)}bi(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Pi(new Ce(e,n))}Vi(e,n){e.forEach(s=>this.removeReference(s,n))}vi(e){const n=new B(new ve([])),s=new Ce(n,e),r=new Ce(n,e+1),i=[];return this.Ai.forEachInRange([s,r],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new B(new ve([])),s=new Ce(n,e),r=new Ce(n,e+1);let i=me();return this.Ai.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ce(e,0),s=this.Ti.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ce{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return B.comparator(e.key,n.key)||re(e.Ci,n.Ci)}static Ri(e,n){return re(e.Ci,n.Ci)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new Ue(Ce.Ei)}checkEmpty(e){return b.resolve(this.Bs.length===0)}addMutationBatch(e,n,s,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new Nb(i,n,s,r);this.Bs.push(o);for(const a of r)this.Ni=this.Ni.add(new Ce(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Mi(s),i=r<0?0:r;return b.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return b.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ce(n,0),r=new Ce(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([s,r],o=>{const a=this.ki(o.Ci);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ue(re);return n.forEach(r=>{const i=new Ce(r,0),o=new Ce(r,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{s=s.add(a.Ci)})}),b.resolve(this.Oi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new Ce(new B(i),0);let a=new Ue(re);return this.Ni.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Ci)),!0)},o),b.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(s=>{const r=this.ki(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){pe(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let s=this.Ni;return b.forEach(n.mutations,r=>{const i=new Ce(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Ni=s})}_n(e){}containsKey(e,n){const s=new Ce(n,0),r=this.Ni.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,b.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.$i=e,this.docs=new De(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.$i(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Be.newInvalidDocument(n))}getEntries(e,n){let s=Vn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Be.newInvalidDocument(r))}),b.resolve(s)}getAllFromCollection(e,n,s){let r=Vn();const i=new B(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||kT(RT(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,r){z()}Bi(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Qb(this)}getSize(e){return b.resolve(this.size)}}class Qb extends Lb{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.persistence=e,this.Li=new Ls(n=>Il(n),Tl),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Ui=0,this.qi=new kl,this.targetCount=0,this.Ki=Ts.gn()}forEachTarget(e,n){return this.Li.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ui&&(this.Ui=n),b.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Tn(n),b.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Li.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.qi.bi(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.qi.Vi(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qi.Di(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.qi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.Gi={},this.overlays={},this.es=new _l(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Jb(this),this.indexManager=new Mb,this.ds=function(s){return new Xb(s)}(s=>this.referenceDelegate.Qi(s)),this.M=new Ob(n),this._s=new Wb(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Gb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Gi[e.toKey()];return s||(s=new Yb(n,this.referenceDelegate),this.Gi[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,s){x("MemoryPersistence","Starting transaction:",e);const r=new eS(this.es.next());return this.referenceDelegate.ji(),s(r).next(i=>this.referenceDelegate.Wi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}zi(e,n){return b.or(Object.values(this.Gi).map(s=>()=>s.containsKey(e,n)))}}class eS extends kb{constructor(e){super(),this.currentSequenceNumber=e}}class Nl{constructor(e){this.persistence=e,this.Hi=new kl,this.Ji=null}static Yi(e){return new Nl(e)}get Xi(){if(this.Ji)return this.Ji;throw z()}addReference(e,n,s){return this.Hi.addReference(s,n),this.Xi.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Hi.removeReference(s,n),this.Xi.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),b.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(r=>this.Xi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xi,s=>{const r=B.fromPath(s);return this.Zi(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(s=>{s?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return b.or([()=>b.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class Wh{constructor(){this.activeTargetIds=Tg()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tS{constructor(){this.Ur=new Wh,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Wh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{Kr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ho(e,n);x("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(x("RestConnection","Received: ",c),c),c=>{throw Rh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i){return this.co(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ms,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=sS[e];return`${this.uo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new dT;a.listenOnce(uT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case wa.NO_ERROR:const l=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(l)),i(l);break;case wa.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new $(I.DEADLINE_EXCEEDED,"Request time out"));break;case wa.HTTP_ERROR:const u=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(y)>=0?y:I.UNKNOWN}(h.status);o(new $(d,h.message))}else o(new $(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(I.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=cT(),o=lT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fT({})),this.lo(a.initMessageHeaders,n,s),hd()||dd()||qv()||pd()||zv()||fd()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");x("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new rS({Jr:y=>{h?x("Connection","Not sending because WebChannel is closed:",y):(u||(x("Connection","Opening WebChannel transport."),l.open(),u=!0),x("Connection","WebChannel sending:",y),l.send(y))},Yr:()=>l.close()}),g=(y,D,R)=>{y.listen(D,k=>{try{R(k)}catch(V){setTimeout(()=>{throw V},0)}})};return g(l,pi.EventType.OPEN,()=>{h||x("Connection","WebChannel transport opened.")}),g(l,pi.EventType.CLOSE,()=>{h||(h=!0,x("Connection","WebChannel transport closed"),d.ro())}),g(l,pi.EventType.ERROR,y=>{h||(h=!0,Rh("Connection","WebChannel transport errored:",y),d.ro(new $(I.UNAVAILABLE,"The operation could not be completed")))}),g(l,pi.EventType.MESSAGE,y=>{var D;if(!h){const R=y.data[0];pe(!!R);const k=R,V=k.error||((D=k[0])===null||D===void 0?void 0:D.error);if(V){x("Connection","WebChannel received error:",V);const Y=V.status;let Z=function(be){const He=Ee[be];if(He!==void 0)return Ig(He)}(Y),_e=V.message;Z===void 0&&(Z=I.INTERNAL,_e="Unknown error status: "+Y+" with message "+V.message),h=!0,d.ro(new $(Z,_e)),l.close()}else x("Connection","WebChannel received:",R),d.oo(R)}}),g(o,hT.STAT_EVENT,y=>{y.stat===Sh.PROXY?x("Connection","Detected buffering proxy"):y.stat===Sh.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.io()},0),d}}function Ia(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){return new db(t,!0)}class Pg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&x("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,s,r,i,o,a,c){this.Yn=e,this.Vo=s,this.vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Pg(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(hn(n.toString()),hn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new $(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oS extends Mg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=mb(this.M,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?Ft(i.readTime):Q.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=dc(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=ac(a)?{documents:wb(r,a)}:{query:_b(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ag(r,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=no(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=Ib(this.M,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=dc(this.M),n.removeTarget=e,this.Lo(n)}}class aS extends Mg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=vb(e.writeResults,e.commitTime),s=Ft(e.commitTime);return this.listener.tu(s,n)}return pe(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=dc(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>yb(this.M,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.M=r,this.su=!1}iu(){if(this.su)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(I.UNKNOWN,r.toString())})}_o(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So._o(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(I.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class lS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(hn(n),this.uu=!1):x("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{s.enqueueAndForget(async()=>{Hn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=W(a);c.wu.add(4),await si(c),c.yu.set("Unknown"),c.wu.delete(4),await zo(c)}(this))})}),this.yu=new lS(s,r)}}async function zo(t){if(Hn(t))for(const e of t.mu)await e(!0)}async function si(t){for(const e of t.mu)await e(!1)}function xg(t,e){const n=W(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Pl(n)?Ol(n):Us(n).Mo()&&Dl(n,e))}function Lg(t,e){const n=W(t),s=Us(n);n._u.delete(e),s.Mo()&&Ug(n,e),n._u.size===0&&(s.Mo()?s.$o():Hn(n)&&n.yu.set("Unknown"))}function Dl(t,e){t.pu.Z(e.targetId),Us(t).Ho(e)}function Ug(t,e){t.pu.Z(e),Us(t).Jo(e)}function Ol(t){t.pu=new ub({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),Us(t).start(),t.yu.au()}function Pl(t){return Hn(t)&&!Us(t).ko()&&t._u.size>0}function Hn(t){return W(t).wu.size===0}function Fg(t){t.pu=void 0}async function hS(t){t._u.forEach((e,n)=>{Dl(t,e)})}async function fS(t,e){Fg(t),Pl(t)?(t.yu.lu(e),Ol(t)):t.yu.set("Unknown")}async function dS(t,e,n){if(t.yu.set("Online"),e instanceof Sg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await so(t,s)}else if(e instanceof Ai?t.pu.ut(e):e instanceof bg?t.pu._t(e):t.pu.ht(e),!n.isEqual(Q.min()))try{const s=await Og(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r._u.get(c);l&&r._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(Fe.EMPTY_BYTE_STRING,c.snapshotVersion)),Ug(r,a);const l=new Rn(c.target,a,1,c.sequenceNumber);Dl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){x("RemoteStore","Failed to raise snapshot:",s),await so(t,s)}}async function so(t,e,n){if(!ti(e))throw e;t.wu.add(1),await si(t),t.yu.set("Offline"),n||(n=()=>Og(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await zo(t)})}function Vg(t,e){return e().catch(n=>so(t,n,e))}async function Wo(t){const e=W(t),n=dn(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;pS(e);)try{const r=await Kb(e.localStore,s);if(r===null){e.du.length===0&&n.$o();break}s=r.batchId,gS(e,r)}catch(r){await so(e,r)}Bg(e)&&$g(e)}function pS(t){return Hn(t)&&t.du.length<10}function gS(t,e){t.du.push(e);const n=dn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function Bg(t){return Hn(t)&&!dn(t).ko()&&t.du.length>0}function $g(t){dn(t).start()}async function mS(t){dn(t).nu()}async function yS(t){const e=dn(t);for(const n of t.du)e.Zo(n.mutations)}async function vS(t,e,n){const s=t.du.shift(),r=Cl.from(s,e,n);await Vg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Wo(t)}async function wS(t,e){e&&dn(t).Xo&&await async function(n,s){if(r=s.code,rb(r)&&r!==I.ABORTED){const i=n.du.shift();dn(n).Fo(),await Vg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wo(n)}var r}(t,e),Bg(t)&&$g(t)}async function Yh(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const s=Hn(n);n.wu.add(3),await si(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await zo(n)}async function _S(t,e){const n=W(t);e?(n.wu.delete(2),await zo(n)):e||(n.wu.add(2),await si(n),n.yu.set("Unknown"))}function Us(t){return t.Iu||(t.Iu=function(e,n,s){const r=W(e);return r.iu(),new oS(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:hS.bind(null,t),eo:fS.bind(null,t),zo:dS.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Pl(t)?Ol(t):t.yu.set("Unknown")):(await t.Iu.stop(),Fg(t))})),t.Iu}function dn(t){return t.Tu||(t.Tu=function(e,n,s){const r=W(e);return r.iu(),new aS(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:mS.bind(null,t),eo:wS.bind(null,t),eu:yS.bind(null,t),tu:vS.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Wo(t)):(await t.Tu.stop(),t.du.length>0&&(x("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ml(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xl(t,e){if(hn("AsyncQueue",`${e}: ${t}`),ti(t))return new $(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=uc(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new fs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.Eu=new De(B.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):z():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class bs{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new bs(e,n,fs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.Ru=void 0,this.listeners=[]}}class IS{constructor(){this.queries=new Ls(e=>dg(e),Bo),this.onlineState="Unknown",this.bu=new Set}}async function TS(t,e){const n=W(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new ES),r)try{i.Ru=await n.onListen(s)}catch(o){const a=xl(o,`Initialization of query '${cc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&Ll(n)}async function bS(t,e){const n=W(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function SS(t,e){const n=W(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Ru=r}}s&&Ll(n)}function AS(t,e,n){const s=W(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ll(t){t.bu.forEach(e=>{e.next()})}class CS{constructor(e,n,s){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new bs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.key=e}}class Hg{constructor(e){this.key=e}}class RS{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=me(),this.mutatedKeys=me(),this.Gu=pg(e),this.Qu=new fs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new Xh,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=Sl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),D=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;d&&g?d.data.isEqual(g.data)?y!==D&&(s.track({type:3,doc:g}),R=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),R=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),R=!0):d&&!g&&(s.track({type:1,doc:d}),R=!0,(c||l)&&(a=!0)),R&&(g?(o=o.add(g),i=D?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return g(h)-g(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new bs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Xh,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=me(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Hg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new jg(s))}),n}ta(e){this.Uu=e._i,this.Ku=me();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return bs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class kS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class NS{constructor(e){this.key=e,this.na=!1}}class DS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new Ls(a=>dg(a),Bo),this.ra=new Map,this.oa=new Set,this.ua=new De(B.comparator),this.aa=new Map,this.ca=new kl,this.ha={},this.la=new Map,this.fa=Ts.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function OS(t,e){const n=jS(t);let s,r;const i=n.ia.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ea();else{const o=await qb(n.localStore,Fn(e));n.isPrimaryClient&&xg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await PS(n,e,s,a==="current")}return r}async function PS(t,e,n,s){t._a=(u,h,d)=>async function(g,y,D,R){let k=y.view.Wu(D);k.ii&&(k=await zh(g.localStore,y.query,!1).then(({documents:Z})=>y.view.Wu(Z,k)));const V=R&&R.targetChanges.get(y.targetId),Y=y.view.applyChanges(k,g.isPrimaryClient,V);return Jh(g,y.targetId,Y.Xu),Y.snapshot}(t,u,h,d);const r=await zh(t.localStore,e,!0),i=new RS(e,r._i),o=i.Wu(r.documents),a=ei.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Jh(t,n,c.Xu);const l=new kS(e,n,i);return t.ia.set(e,l),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function MS(t,e){const n=W(t),s=n.ia.get(e),r=n.ra.get(s.targetId);if(r.length>1)return n.ra.set(s.targetId,r.filter(i=>!Bo(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await pc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Lg(n.remoteStore,s.targetId),gc(n,s.targetId)}).catch(ni)):(gc(n,s.targetId),await pc(n.localStore,s.targetId,!0))}async function xS(t,e,n){const s=HS(t);try{const r=await function(i,o){const a=W(i),c=je.now(),l=o.reduce((h,d)=>h.add(d.key),me());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,l).next(d=>{u=d;const g=[];for(const y of o){const D=eb(y,u.get(y.key));D!=null&&g.push(new Zr(y.key,D,hg(D.value.mapValue),hs.exists(!0)))}return a.Bs.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new De(re)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(s,r.batchId,n),await ri(s,r.changes),await Wo(s.remoteStore)}catch(r){const i=xl(r,"Failed to persist write");n.reject(i)}}async function Kg(t,e){const n=W(t);try{const s=await jb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.aa.get(i);o&&(pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.na=!0:r.modifiedDocuments.size>0?pe(o.na):r.removedDocuments.size>0&&(pe(o.na),o.na=!1))}),await ri(n,s,e)}catch(s){await ni(s)}}function Qh(t,e,n){const s=W(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=W(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Ll(a)}(s.eventManager,e),r.length&&s.sa.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function LS(t,e,n){const s=W(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.aa.get(e),i=r&&r.key;if(i){let o=new De(B.comparator);o=o.insert(i,Be.newNoDocument(i,Q.min()));const a=me().add(i),c=new Ko(Q.min(),new Map,new Ue(re),o,a);await Kg(s,c),s.ua=s.ua.remove(i),s.aa.delete(e),Ul(s)}else await pc(s.localStore,e,!1).then(()=>gc(s,e,n)).catch(ni)}async function US(t,e){const n=W(t),s=e.batch.batchId;try{const r=await $b(n.localStore,e);zg(n,s,null),qg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ri(n,r)}catch(r){await ni(r)}}async function FS(t,e,n){const s=W(t);try{const r=await function(i,o){const a=W(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(pe(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,l))})}(s.localStore,e);zg(s,e,n),qg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ri(s,r)}catch(r){await ni(r)}}function qg(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function zg(t,e,n){const s=W(t);let r=s.ha[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ha[s.currentUser.toKey()]=r}}function gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ra.get(e))t.ia.delete(s),n&&t.sa.wa(s,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(s=>{t.ca.containsKey(s)||Wg(t,s)})}function Wg(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(Lg(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),Ul(t))}function Jh(t,e,n){for(const s of n)s instanceof jg?(t.ca.addReference(s.key,e),VS(t,s)):s instanceof Hg?(x("SyncEngine","Document no longer in limbo: "+s.key),t.ca.removeReference(s.key,e),t.ca.containsKey(s.key)||Wg(t,s.key)):z()}function VS(t,e){const n=e.key,s=n.path.canonicalString();t.ua.get(n)||t.oa.has(s)||(x("SyncEngine","New document in limbo: "+n),t.oa.add(s),Ul(t))}function Ul(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new B(ve.fromString(e)),s=t.fa.next();t.aa.set(s,new NS(n)),t.ua=t.ua.insert(n,s),xg(t.remoteStore,new Rn(Fn(bl(n.path)),s,2,_l.A))}}async function ri(t,e,n){const s=W(t),r=[],i=[],o=[];s.ia.isEmpty()||(s.ia.forEach((a,c)=>{o.push(s._a(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Rl.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sa.zo(r),await async function(a,c){const l=W(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Hs,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Js,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ti(u))throw u;x("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.ui.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.ui=l.ui.insert(h,y)}}}(s.localStore,i))}async function BS(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const s=await Dg(n.localStore,e);n.currentUser=e,function(r,i){r.la.forEach(o=>{o.forEach(a=>{a.reject(new $(I.CANCELLED,i))})}),r.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ri(n,s.di)}}function $S(t,e){const n=W(t),s=n.aa.get(e);if(s&&s.na)return me().add(s.key);{let r=me();const i=n.ra.get(e);if(!i)return r;for(const o of i){const a=n.ia.get(o);r=r.unionWith(a.view.ju)}return r}}function jS(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$S.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LS.bind(null,e),e.sa.zo=SS.bind(null,e.eventManager),e.sa.wa=AS.bind(null,e.eventManager),e}function HS(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=US.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FS.bind(null,e),e}class KS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=qo(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return Bb(this.persistence,new Fb,e.initialUser,this.M)}ya(e){return new Zb(Nl.Yi,this.M)}ga(e){return new tS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=BS.bind(null,this.syncEngine),await _S(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new IS}createDatastore(e){const n=qo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new iS(r));var r;return function(i,o,a,c){return new cS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Qh(this.syncEngine,a,0),o=Gh.vt()?new Gh:new nS,new uS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new DS(s,r,i,o,a,c);return l&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=W(e);x("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await si(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Je.UNAUTHENTICATED,this.clientId=ag.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function GS(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Dg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function YS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XS(t);x("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Yh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yh(e.remoteStore,i)),t.onlineComponents=e}async function XS(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await GS(t,new KS)),t.offlineComponents}async function Gg(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await YS(t,new qS)),t.onlineComponents}function QS(t){return Gg(t).then(e=>e.syncEngine)}async function JS(t){const e=await Gg(t),n=e.eventManager;return n.onListen=OS.bind(null,e.syncEngine),n.onUnlisten=MS.bind(null,e.syncEngine),n}function ZS(t,e,n={}){const s=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new zS({next:h=>{i.enqueueAndForget(()=>bS(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new $(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new $(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new CS(bl(o.path),l,{includeMetadataChanges:!0,ku:!0});return TS(r,u)}(await JS(t),t.asyncQueue,e,n,s)),s.promise}const Zh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t,e,n){if(!n)throw new $(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tA(t,e,n,s){if(e===!0&&s===!0)throw new $(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ef(t){if(!B.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function ro(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fl(t);throw new $(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,tA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tf({}),this._settingsFrozen=!1,e instanceof Es?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new $(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Es(r.options.projectId)}(e))}get app(){if(!this._app)throw new $(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gT;switch(n.type){case"gapi":const s=n.client;return pe(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new vT(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new $(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zh.get(e);n&&(x("ComponentProvider","Removing Datastore"),Zh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class Vl{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vl(this.firestore,e,this._query)}}class Or extends Vl{constructor(e,n,s){super(e,n,bl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new B(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function nA(t,e,...n){if(t=yt(t),arguments.length===1&&(e=ag.R()),eA("doc","path",e),t instanceof Yg){const s=ve.fromString(e,...n);return ef(s),new lt(t,null,new B(s))}{if(!(t instanceof lt||t instanceof Or))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ve.fromString(e,...n));return ef(s),new lt(t.firestore,t instanceof Or?t.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Pg(this,"async_queue_retry"),this.Qa=()=>{const n=Ia();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Ia();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Ia();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new cn;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!ti(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(s=>{this.Ua=s,this.qa=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw hn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.qa=!1,s))));return this.Fa=n,n}enqueueAfterDelay(e,n,s){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const r=Ml.createAndSchedule(this,e,n,s,i=>this.Ha(i));return this.La.push(r),r}ja(){this.Ua&&z()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class Bl extends Yg{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new sA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Qg(this),this._firestoreClient.terminate()}}function rA(t,e){const n=wo(t,"firestore");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(gr(r,e))return s;throw new $(I.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e})}function iA(t=vd()){return wo(t,"firestore").getImmediate()}function Xg(t){return t._firestoreClient||Qg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Qg(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new bT(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new WS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ss(Fe.fromBase64String(e))}catch(n){throw new $(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ss(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=/^__.*__$/;class aA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ho(e,this.data,n,this.fieldTransforms)}}function Zg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Hl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Hl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.rc(e),r}oc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return io(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(Zg(this.ec)&&oA.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class cA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||qo(e)}lc(e,n,s,r=!1){return new Hl({ec:e,methodName:n,hc:s,path:Ze.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function lA(t){const e=t._freezeSettings(),n=qo(t._databaseId);return new cA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uA(t,e,n,s,r,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,r);sm("Data must be an object, but it was:",o,s);const a=tm(s,o);let c,l;if(i.merge)c=new rc(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=hA(e,h,n);if(!o.contains(d))throw new $(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);dA(u,d)||u.push(d)}c=new rc(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new aA(new dt(a),c,l)}function em(t,e){if(nm(t=yt(t)))return sm("Unsupported field value:",e,t),tm(t,e);if(t instanceof Jg)return function(n,s){if(!Zg(s.ec))throw s.ac(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ac(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=em(o,s.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=yt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return GT(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=je.fromDate(n);return{timestampValue:no(s.M,r)}}if(n instanceof je){const r=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:no(s.M,r)}}if(n instanceof jl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ss)return{bytesValue:Ag(s.M,n._byteString)};if(n instanceof lt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Al(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ac(`Unsupported field value: ${Fl(n)}`)}(t,e)}function tm(t,e){const n={};return cg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(s,r)=>{const i=em(r,e.sc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function nm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof jl||t instanceof Ss||t instanceof lt||t instanceof Jg)}function sm(t,e,n){if(!nm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Fl(n);throw s==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+s)}}function hA(t,e,n){if((e=yt(e))instanceof $l)return e._internalPath;if(typeof e=="string")return rm(t,e);throw io("Field path arguments must be of type string or ",t,!1,void 0,n)}const fA=new RegExp("[~\\*/\\[\\]]");function rm(t,e,n){if(e.search(fA)>=0)throw io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $l(...e.split("."))._internalPath}catch{throw io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function io(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new $(I.INVALID_ARGUMENT,a+t+c)}function dA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(om("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pA extends im{data(){return super.data()}}function om(t,e){return typeof e=="string"?rm(t,e):e instanceof $l?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class am extends im{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(om("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class mA extends am{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{convertValue(e,n="none"){switch(Ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const s={};return xs(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new jl(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ug(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Cr(e));default:return null}}convertTimestamp(e){const n=fn(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ve.fromString(e);pe(Ng(s));const r=new Es(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||hn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){t=ro(t,lt);const e=ro(t.firestore,Bl);return ZS(Xg(e),t._key).then(n=>IA(e,t,n))}class wA extends yA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function _A(t,e,n){t=ro(t,lt);const s=ro(t.firestore,Bl),r=vA(t.converter,e,n);return EA(s,[uA(lA(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,hs.none())])}function EA(t,e){return function(n,s){const r=new cn;return n.asyncQueue.enqueueAndForget(async()=>xS(await QS(n),s,r)),r.promise}(Xg(t),e)}function IA(t,e,n){const s=n.docs.get(e._key),r=new wA(t);return new am(t,r,e._key,s,new gA(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ms=n})(Ur),gs(new kn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Bl(r,new mT(n.getProvider("auth-internal")),new _T(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),an(Ah,"3.4.9",t),an(Ah,"3.4.9","esm2017")})();var TA="";async function JA(t,e){try{const n=await _A(nA(HA,"users",$i().currentUser.email),{userid:$i().currentUser.uid,ValID:t,ValRegion:e});console.log("Document written with ID: ",n.id)}catch(n){console.error("Error adding document: ",n)}}const bA={class:"logo"},SA=Ut("span",{style:{color:"#dc3d4b"}},"V",-1),AA=Mr("ALSTATS"),CA=Mr(" Profile"),RA=Mr(" Login"),kA=Mr(" Register"),NA={__name:"App",setup(t){const e=Rc(!1);let n;Nc(()=>{n=$i(),K_(n,r=>{console.log(TA),r?e.value=!0:e.value=!1})});const s=()=>{q_(n).then(()=>{Gc.push("/")})};return(r,i)=>{const o=au("router-link"),a=au("router-view");return rn(),as("div",null,[Ut("nav",null,[Ut("header",null,[Ut("div",bA,[Ae(o,{to:"/",style:{"font-family":"Valfont","text-decoration":"none","font-size":"40px",color:"white"}},{default:zs(()=>[SA,AA]),_:1})]),Ae(o,{id:"links",to:"/feed"},{default:zs(()=>[CA]),_:1}),Ae(o,{id:"links",to:"/sign-in"},{default:zs(()=>[RA]),_:1}),Ae(o,{id:"links",to:"/register"},{default:zs(()=>[kA]),_:1}),e.value?(rn(),as("button",{key:0,onClick:s,id:"submit",name:"signout"},"Sign out")):rv("",!0)])]),Ae(a)])}}};var DA="firebase",OA="9.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(DA,OA,"app");var cm=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const PA={name:"Tab",props:{panelClass:{type:String,default:"tabs-component-panel"},id:{type:String,default:null},name:{type:String,required:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},isDisabled:{type:Boolean,default:!1}},setup(t){const e=Rc(!1),n=ct("tabsProvider"),s=ct("addTab"),r=ct("updateTab"),i=ct("deleteTab"),o=t.prefix+t.name+t.suffix,a=t.id?t.id:t.name.toLowerCase().replace(/ /g,"-"),c="#"+(t.isDisabled?"":a);return os(()=>n.activeTabHash,()=>{e.value=c===n.activeTabHash}),os(()=>Object.assign({},t),()=>{r(a,{name:t.name,header:t.prefix+t.name+t.suffix,isDisabled:t.isDisabled,hash:c,index:n.tabs.length,computedId:a})}),Bf(()=>{s({name:t.name,header:o,isDisabled:t.isDisabled,hash:c,index:n.tabs.length,computedId:a})}),$f(()=>{i(a)}),{header:o,computedId:a,hash:c,isActive:e}}},MA=["aria-hidden","id"];function xA(t,e,n,s,r,i){return My((rn(),as("section",{"aria-hidden":!s.isActive,class:Ot(n.panelClass),id:s.computedId,role:"tabpanel",ref:"tab"},[Kf(t.$slots,"default")],10,MA)),[[Lv,s.isActive]])}var LA=cm(PA,[["render",xA]]);class UA{get(e){const n=JSON.parse(localStorage.getItem(e));return n?new Date(n.expires)<new Date?(localStorage.removeItem(e),null):n.value:null}set(e,n,s){const r=new Date().getTime(),i=new Date(r+s*6e4);localStorage.setItem(e,JSON.stringify({value:n,expires:i}))}}var nf=new UA;const FA={props:{cacheLifetime:{default:5},options:{type:Object,required:!1,default:()=>({useUrlFragment:!0,defaultTabHash:null})},wrapperClass:{type:String,default:"tabs-component"},panelsWrapperClass:{type:String,default:"tabs-component-panels"},navClass:{type:String,default:"tabs-component-tabs"},navItemClass:{type:String,default:"tabs-component-tab"},navItemDisabledClass:{type:String,default:"is-disabled"},navItemActiveClass:{type:String,default:"is-active"},navItemLinkClass:{type:String,default:"tabs-component-tab-a"},navItemLinkActiveClass:{type:String,default:"is-active"},navItemLinkDisabledClass:{type:String,default:"is-disabled"}},emits:["changed","clicked"],setup(t,e){const n=Rs({activeTabHash:"",lastActiveTabHash:"",tabs:[]});tn("tabsProvider",n),tn("addTab",i=>{n.tabs.push(i)}),tn("updateTab",(i,o)=>{let a=n.tabs.findIndex(c=>c.computedId===i);o.isActive=n.tabs[a].isActive,n.tabs[a]=o}),tn("deleteTab",i=>{let o=n.tabs.findIndex(a=>a.computedId===i);n.tabs.splice(o,1)});const s=(i,o)=>{o&&!t.options.useUrlFragment&&o.preventDefault();const a=r(i);if(!a)return;if(o&&a.isDisabled){o.preventDefault();return}if(n.lastActiveTabHash===a.hash){e.emit("clicked",{tab:a});return}n.tabs.forEach(l=>{l.isActive=l.hash===a.hash}),e.emit("changed",{tab:a}),n.lastActiveTabHash=n.activeTabHash=a.hash;const c=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`;nf.set(c,a.hash,t.cacheLifetime)},r=i=>n.tabs.find(o=>o.hash===i);return Nc(()=>{if(!n.tabs.length)return;if(window.addEventListener("hashchange",()=>s(window.location.hash)),r(window.location.hash)){s(window.location.hash);return}const i=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`,o=nf.get(i);if(r(o)){s(o);return}if(t.options.defaultTabHash&&r("#"+t.options.defaultTabHash)){s("#"+t.options.defaultTabHash);return}s(n.tabs[0].hash)}),Xo(Yo({},ay(n)),{selectTab:s,findTab:r})}},VA=["innerHTML","aria-controls","aria-selected","onClick","href"];function BA(t,e,n,s,r,i){return rn(),as("div",{class:Ot(n.wrapperClass)},[Ut("ul",{role:"tablist",class:Ot(n.navClass)},[(rn(!0),as(at,null,Uy(t.tabs,(o,a)=>(rn(),as("li",{key:a,class:Ot([n.navItemClass,o.isDisabled?n.navItemDisabledClass:"",o.isActive?n.navItemActiveClass:""]),role:"presentation"},[Ut("a",{innerHTML:o.header,"aria-controls":o.hash,"aria-selected":o.isActive,onClick:c=>s.selectTab(o.hash,c),href:o.hash,class:Ot([n.navItemLinkClass,o.isDisabled?n.navItemLinkDisabledClass:"",o.isActive?n.navItemLinkActiveClass:""]),role:"tab"},null,10,VA)],2))),128))],2),Ut("div",{class:Ot(n.panelsWrapperClass)},[Kf(t.$slots,"default")],2)],2)}var $A=cm(FA,[["render",BA]]);const jA={apiKey:"AIzaSyCBuA1ZQbdDAxGbvYRe4isGeV1o5Jlo4eM",authDomain:"valdb-3b36d.firebaseapp.com",projectId:"valdb-3b36d",storageBucket:"valdb-3b36d.appspot.com",messagingSenderId:"59622579519",appId:"1:59622579519:web:8f4d1e89fb6d2251bd478a",measurementId:"G-PGS46EXKVS"},lm=Jw(jA);rA(lm,{experimentalForceLongPolling:!0});const HA=iA(lm),Kl=Vv(NA);Kl.component("tabs",$A);Kl.component("tab",LA);Kl.use(Gc).mount("#app");export{at as F,nA as I,cm as _,Ut as a,GA as b,as as c,rv as d,YA as e,JA as f,$i as g,Gc as h,Nc as i,QA as j,au as k,Ae as l,zs as m,Mr as n,rn as o,HA as p,WA as q,Rc as r,XA as s,qA as t,Uy as u,zA as v,My as w,Xs as x,nd as y};
