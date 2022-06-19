var Xp=Object.defineProperty,Yp=Object.defineProperties;var Jp=Object.getOwnPropertyDescriptors;var sc=Object.getOwnPropertySymbols;var Qp=Object.prototype.hasOwnProperty,Zp=Object.prototype.propertyIsEnumerable;var ic=(t,e,n)=>e in t?Xp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,rc=(t,e)=>{for(var n in e||(e={}))Qp.call(e,n)&&ic(t,n,e[n]);if(sc)for(var n of sc(e))Zp.call(e,n)&&ic(t,n,e[n]);return t},oc=(t,e)=>Yp(t,Jp(e));const eg=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};eg();function Ua(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const tg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ng=Ua(tg);function ch(t){return!!t||t===""}function Fa(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=De(s)?rg(s):Fa(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(De(t))return t;if(Ae(t))return t}}const sg=/;(?![^(]*\))/g,ig=/:(.+)/;function rg(t){const e={};return t.split(sg).forEach(n=>{if(n){const s=n.split(ig);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Va(t){let e="";if(De(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Va(t[n]);s&&(e+=s+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hb=t=>De(t)?t:t==null?"":H(t)||Ae(t)&&(t.toString===dh||!K(t.toString))?JSON.stringify(t,uh,2):String(t),uh=(t,e)=>e&&e.__v_isRef?uh(t,e.value):Wn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:hh(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!H(e)&&!ph(e)?String(e):e,le={},zn=[],ct=()=>{},og=()=>!1,ag=/^on[^a-z]/,Lr=t=>ag.test(t),Ba=t=>t.startsWith("onUpdate:"),He=Object.assign,$a=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lg=Object.prototype.hasOwnProperty,Q=(t,e)=>lg.call(t,e),H=Array.isArray,Wn=t=>Ur(t)==="[object Map]",hh=t=>Ur(t)==="[object Set]",K=t=>typeof t=="function",De=t=>typeof t=="string",ja=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",fh=t=>Ae(t)&&K(t.then)&&K(t.catch),dh=Object.prototype.toString,Ur=t=>dh.call(t),cg=t=>Ur(t).slice(8,-1),ph=t=>Ur(t)==="[object Object]",Ha=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xi=Ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ug=/-(\w)/g,Tt=Fr(t=>t.replace(ug,(e,n)=>n?n.toUpperCase():"")),hg=/\B([A-Z])/g,us=Fr(t=>t.replace(hg,"-$1").toLowerCase()),Vr=Fr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Io=Fr(t=>t?`on${Vr(t)}`:""),$s=(t,e)=>!Object.is(t,e),Yi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ar=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Wo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ac;const fg=()=>ac||(ac=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let yt;class dg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&yt&&(this.parent=yt,this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function pg(t,e=yt){e&&e.active&&e.effects.push(t)}const Ka=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gh=t=>(t.w&tn)>0,mh=t=>(t.n&tn)>0,gg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=tn},mg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];gh(i)&&!mh(i)?i.delete(t):e[n++]=i,i.w&=~tn,i.n&=~tn}e.length=n}},Go=new WeakMap;let bs=0,tn=1;const Xo=30;let ot;const gn=Symbol(""),Yo=Symbol("");class qa{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pg(this,s)}run(){if(!this.active)return this.fn();let e=ot,n=Yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ot,ot=this,Yt=!0,tn=1<<++bs,bs<=Xo?gg(this):lc(this),this.fn()}finally{bs<=Xo&&mg(this),tn=1<<--bs,ot=this.parent,Yt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(lc(this),this.onStop&&this.onStop(),this.active=!1)}}function lc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yt=!0;const yh=[];function hs(){yh.push(Yt),Yt=!1}function fs(){const t=yh.pop();Yt=t===void 0?!0:t}function Ze(t,e,n){if(Yt&&ot){let s=Go.get(t);s||Go.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ka()),vh(i)}}function vh(t,e){let n=!1;bs<=Xo?mh(t)||(t.n|=tn,n=!gh(t)):n=!t.has(ot),n&&(t.add(ot),ot.deps.push(t))}function Dt(t,e,n,s,i,r){const o=Go.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Ha(n)&&a.push(o.get("length")):(a.push(o.get(gn)),Wn(t)&&a.push(o.get(Yo)));break;case"delete":H(t)||(a.push(o.get(gn)),Wn(t)&&a.push(o.get(Yo)));break;case"set":Wn(t)&&a.push(o.get(gn));break}if(a.length===1)a[0]&&Jo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Jo(Ka(l))}}function Jo(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&cc(s);for(const s of n)s.computed||cc(s)}function cc(t,e){(t!==ot||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const yg=Ua("__proto__,__v_isRef,__isVue"),wh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ja)),vg=za(),wg=za(!1,!0),_g=za(!0),uc=Eg();function Eg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let r=0,o=this.length;r<o;r++)Ze(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hs();const s=ne(this)[e].apply(this,n);return fs(),s}}),t}function za(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Ug:bh:e?Th:Ih).get(s))return s;const o=H(s);if(!t&&o&&Q(uc,i))return Reflect.get(uc,i,r);const a=Reflect.get(s,i,r);return(ja(i)?wh.has(i):yg(i))||(t||Ze(s,"get",i),e)?a:xe(a)?o&&Ha(i)?a:a.value:Ae(a)?t?Ah(a):di(a):a}}const Ig=_h(),Tg=_h(!0);function _h(t=!1){return function(n,s,i,r){let o=n[s];if(js(o)&&xe(o)&&!xe(i))return!1;if(!t&&!js(i)&&(Qo(i)||(i=ne(i),o=ne(o)),!H(n)&&xe(o)&&!xe(i)))return o.value=i,!0;const a=H(n)&&Ha(s)?Number(s)<n.length:Q(n,s),l=Reflect.set(n,s,i,r);return n===ne(r)&&(a?$s(i,o)&&Dt(n,"set",s,i):Dt(n,"add",s,i)),l}}function bg(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Dt(t,"delete",e,void 0),s}function Ag(t,e){const n=Reflect.has(t,e);return(!ja(e)||!wh.has(e))&&Ze(t,"has",e),n}function Sg(t){return Ze(t,"iterate",H(t)?"length":gn),Reflect.ownKeys(t)}const Eh={get:vg,set:Ig,deleteProperty:bg,has:Ag,ownKeys:Sg},Cg={get:_g,set(t,e){return!0},deleteProperty(t,e){return!0}},Rg=He({},Eh,{get:wg,set:Tg}),Wa=t=>t,Br=t=>Reflect.getPrototypeOf(t);function Li(t,e,n=!1,s=!1){t=t.__v_raw;const i=ne(t),r=ne(e);n||(e!==r&&Ze(i,"get",e),Ze(i,"get",r));const{has:o}=Br(i),a=s?Wa:n?Ya:Hs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ui(t,e=!1){const n=this.__v_raw,s=ne(n),i=ne(t);return e||(t!==i&&Ze(s,"has",t),Ze(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Fi(t,e=!1){return t=t.__v_raw,!e&&Ze(ne(t),"iterate",gn),Reflect.get(t,"size",t)}function hc(t){t=ne(t);const e=ne(this);return Br(e).has.call(e,t)||(e.add(t),Dt(e,"add",t,t)),this}function fc(t,e){e=ne(e);const n=ne(this),{has:s,get:i}=Br(n);let r=s.call(n,t);r||(t=ne(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?$s(e,o)&&Dt(n,"set",t,e):Dt(n,"add",t,e),this}function dc(t){const e=ne(this),{has:n,get:s}=Br(e);let i=n.call(e,t);i||(t=ne(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Dt(e,"delete",t,void 0),r}function pc(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&Dt(t,"clear",void 0,void 0),n}function Vi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ne(o),l=e?Wa:t?Ya:Hs;return!t&&Ze(a,"iterate",gn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Bi(t,e,n){return function(...s){const i=this.__v_raw,r=ne(i),o=Wn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Wa:e?Ya:Hs;return!e&&Ze(r,"iterate",l?Yo:gn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Vt(t){return function(...e){return t==="delete"?!1:this}}function kg(){const t={get(r){return Li(this,r)},get size(){return Fi(this)},has:Ui,add:hc,set:fc,delete:dc,clear:pc,forEach:Vi(!1,!1)},e={get(r){return Li(this,r,!1,!0)},get size(){return Fi(this)},has:Ui,add:hc,set:fc,delete:dc,clear:pc,forEach:Vi(!1,!0)},n={get(r){return Li(this,r,!0)},get size(){return Fi(this,!0)},has(r){return Ui.call(this,r,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:Vi(!0,!1)},s={get(r){return Li(this,r,!0,!0)},get size(){return Fi(this,!0)},has(r){return Ui.call(this,r,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:Vi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Bi(r,!1,!1),n[r]=Bi(r,!0,!1),e[r]=Bi(r,!1,!0),s[r]=Bi(r,!0,!0)}),[t,n,e,s]}const[Ng,Og,Pg,Dg]=kg();function Ga(t,e){const n=e?t?Dg:Pg:t?Og:Ng;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const Mg={get:Ga(!1,!1)},xg={get:Ga(!1,!0)},Lg={get:Ga(!0,!1)},Ih=new WeakMap,Th=new WeakMap,bh=new WeakMap,Ug=new WeakMap;function Fg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vg(t){return t.__v_skip||!Object.isExtensible(t)?0:Fg(cg(t))}function di(t){return js(t)?t:Xa(t,!1,Eh,Mg,Ih)}function Bg(t){return Xa(t,!1,Rg,xg,Th)}function Ah(t){return Xa(t,!0,Cg,Lg,bh)}function Xa(t,e,n,s,i){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Vg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Gn(t){return js(t)?Gn(t.__v_raw):!!(t&&t.__v_isReactive)}function js(t){return!!(t&&t.__v_isReadonly)}function Qo(t){return!!(t&&t.__v_isShallow)}function Sh(t){return Gn(t)||js(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function Ch(t){return ar(t,"__v_skip",!0),t}const Hs=t=>Ae(t)?di(t):t,Ya=t=>Ae(t)?Ah(t):t;function Rh(t){Yt&&ot&&(t=ne(t),vh(t.dep||(t.dep=Ka())))}function kh(t,e){t=ne(t),t.dep&&Jo(t.dep)}function xe(t){return!!(t&&t.__v_isRef===!0)}function Nh(t){return Oh(t,!1)}function $g(t){return Oh(t,!0)}function Oh(t,e){return xe(t)?t:new jg(t,e)}class jg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:Hs(e)}get value(){return Rh(this),this._value}set value(e){e=this.__v_isShallow?e:ne(e),$s(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Hs(e),kh(this))}}function Ns(t){return xe(t)?t.value:t}const Hg={get:(t,e,n)=>Ns(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ph(t){return Gn(t)?t:new Proxy(t,Hg)}class Kg{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new qa(e,()=>{this._dirty||(this._dirty=!0,kh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ne(this);return Rh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qg(t,e,n=!1){let s,i;const r=K(t);return r?(s=t,i=ct):(s=t.get,i=t.set),new Kg(s,i,r||!i,n)}function Jt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){$r(r,e,n)}return i}function ut(t,e,n,s){if(K(t)){const r=Jt(t,e,n,s);return r&&fh(r)&&r.catch(o=>{$r(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ut(t[r],e,n,s));return i}function $r(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,a]);return}}zg(t,n,i,s)}function zg(t,e,n,s=!0){console.error(t)}let lr=!1,Zo=!1;const Je=[];let Rt=0;const Os=[];let As=null,Vn=0;const Ps=[];let Ht=null,Bn=0;const Dh=Promise.resolve();let Ja=null,ea=null;function Mh(t){const e=Ja||Dh;return t?e.then(this?t.bind(this):t):e}function Wg(t){let e=Rt+1,n=Je.length;for(;e<n;){const s=e+n>>>1;Ks(Je[s])<t?e=s+1:n=s}return e}function xh(t){(!Je.length||!Je.includes(t,lr&&t.allowRecurse?Rt+1:Rt))&&t!==ea&&(t.id==null?Je.push(t):Je.splice(Wg(t.id),0,t),Lh())}function Lh(){!lr&&!Zo&&(Zo=!0,Ja=Dh.then(Vh))}function Gg(t){const e=Je.indexOf(t);e>Rt&&Je.splice(e,1)}function Uh(t,e,n,s){H(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Lh()}function Xg(t){Uh(t,As,Os,Vn)}function Yg(t){Uh(t,Ht,Ps,Bn)}function jr(t,e=null){if(Os.length){for(ea=e,As=[...new Set(Os)],Os.length=0,Vn=0;Vn<As.length;Vn++)As[Vn]();As=null,Vn=0,ea=null,jr(t,e)}}function Fh(t){if(jr(),Ps.length){const e=[...new Set(Ps)];if(Ps.length=0,Ht){Ht.push(...e);return}for(Ht=e,Ht.sort((n,s)=>Ks(n)-Ks(s)),Bn=0;Bn<Ht.length;Bn++)Ht[Bn]();Ht=null,Bn=0}}const Ks=t=>t.id==null?1/0:t.id;function Vh(t){Zo=!1,lr=!0,jr(t),Je.sort((n,s)=>Ks(n)-Ks(s));const e=ct;try{for(Rt=0;Rt<Je.length;Rt++){const n=Je[Rt];n&&n.active!==!1&&Jt(n,null,14)}}finally{Rt=0,Je.length=0,Fh(),lr=!1,Ja=null,(Je.length||Os.length||Ps.length)&&Vh(t)}}function Jg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=s[u]||le;d&&(i=n.map(m=>m.trim())),f&&(i=n.map(Wo))}let a,l=s[a=Io(e)]||s[a=Io(Tt(e))];!l&&r&&(l=s[a=Io(us(e))]),l&&ut(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(c,t,6,i)}}function Bh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=Bh(c,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):He(o,r),s.set(t,o),o)}function Hr(t,e){return!t||!Lr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,us(e))||Q(t,e))}let at=null,$h=null;function cr(t){const e=at;return at=t,$h=t&&t.type.__scopeId||null,e}function Ss(t,e=at,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ac(-1);const r=cr(e),o=t(...i);return cr(r),s._d&&Ac(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function To(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:w,inheritAttrs:P}=t;let k,N;const F=cr(t);try{if(n.shapeFlag&4){const Y=i||s;k=vt(u.call(Y,Y,f,r,m,d,w)),N=l}else{const Y=e;k=vt(Y.length>1?Y(r,{attrs:l,slots:a,emit:c}):Y(r,null)),N=e.props?l:Qg(l)}}catch(Y){Ds.length=0,$r(Y,t,1),k=be(wn)}let G=k;if(N&&P!==!1){const Y=Object.keys(N),{shapeFlag:ge}=G;Y.length&&ge&7&&(o&&Y.some(Ba)&&(N=Zg(N,o)),G=es(G,N))}return n.dirs&&(G=es(G),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),k=G,cr(F),k}const Qg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Lr(n))&&((e||(e={}))[n]=t[n]);return e},Zg=(t,e)=>{const n={};for(const s in t)(!Ba(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function em(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?gc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!Hr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?gc(s,o,c):!0:!!o;return!1}function gc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Hr(n,r))return!0}return!1}function tm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const nm=t=>t.__isSuspense;function sm(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Yg(t)}function Ji(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function Qt(t,e,n=!1){const s=Ne||at;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s.proxy):e}}const mc={};function Qi(t,e,n){return jh(t,e,n)}function jh(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=le){const a=Ne;let l,c=!1,u=!1;if(xe(t)?(l=()=>t.value,c=Qo(t)):Gn(t)?(l=()=>t,s=!0):H(t)?(u=!0,c=t.some(N=>Gn(N)||Qo(N)),l=()=>t.map(N=>{if(xe(N))return N.value;if(Gn(N))return fn(N);if(K(N))return Jt(N,a,2)})):K(t)?e?l=()=>Jt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),ut(t,a,3,[d])}:l=ct,e&&s){const N=l;l=()=>fn(N())}let f,d=N=>{f=k.onStop=()=>{Jt(N,a,4)}};if(Ws)return d=ct,e?n&&ut(e,a,3,[l(),u?[]:void 0,d]):l(),ct;let m=u?[]:mc;const w=()=>{if(!!k.active)if(e){const N=k.run();(s||c||(u?N.some((F,G)=>$s(F,m[G])):$s(N,m)))&&(f&&f(),ut(e,a,3,[N,m===mc?void 0:m,d]),m=N)}else k.run()};w.allowRecurse=!!e;let P;i==="sync"?P=w:i==="post"?P=()=>qe(w,a&&a.suspense):P=()=>Xg(w);const k=new qa(l,P);return e?n?w():m=k.run():i==="post"?qe(k.run.bind(k),a&&a.suspense):k.run(),()=>{k.stop(),a&&a.scope&&$a(a.scope.effects,k)}}function im(t,e,n){const s=this.proxy,i=De(t)?t.includes(".")?Hh(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=Ne;ts(this);const a=jh(i,r.bind(s),n);return o?ts(o):mn(),a}function Hh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function fn(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))fn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)fn(t[n],e);else if(hh(t)||Wn(t))t.forEach(n=>{fn(n,e)});else if(ph(t))for(const n in t)fn(t[n],e);return t}function Kh(t){return K(t)?{setup:t,name:t.name}:t}const Zi=t=>!!t.type.__asyncLoader,qh=t=>t.type.__isKeepAlive;function rm(t,e){zh(t,"a",e)}function om(t,e){zh(t,"da",e)}function zh(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Kr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)qh(i.parent.vnode)&&am(s,e,n,i),i=i.parent}}function am(t,e,n,s){const i=Kr(e,t,s,!0);Gh(()=>{$a(s[e],i)},n)}function Kr(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hs(),ts(n);const a=ut(e,n,t,o);return mn(),fs(),a});return s?i.unshift(r):i.push(r),r}}const Ut=t=>(e,n=Ne)=>(!Ws||t==="sp")&&Kr(t,e,n),lm=Ut("bm"),Wh=Ut("m"),cm=Ut("bu"),um=Ut("u"),hm=Ut("bum"),Gh=Ut("um"),fm=Ut("sp"),dm=Ut("rtg"),pm=Ut("rtc");function gm(t,e=Ne){Kr("ec",t,e)}function Kb(t,e){const n=at;if(n===null)return t;const s=zr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=le]=e[r];K(o)&&(o={mounted:o,updated:o}),o.deep&&fn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function an(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(hs(),ut(l,n,8,[t.el,a,t,e]),fs())}}const Xh="components";function yc(t,e){return ym(Xh,t,!0,e)||t}const mm=Symbol();function ym(t,e,n=!0,s=!1){const i=at||Ne;if(i){const r=i.type;if(t===Xh){const a=Gm(r,!1);if(a&&(a===e||a===Tt(e)||a===Vr(Tt(e))))return r}const o=vc(i[t]||r[t],e)||vc(i.appContext[t],e);return!o&&s?r:o}}function vc(t,e){return t&&(t[e]||t[Tt(e)]||t[Vr(Tt(e))])}const ta=t=>t?lf(t)?zr(t)||t.proxy:ta(t.parent):null,ur=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ta(t.parent),$root:t=>ta(t.root),$emit:t=>t.emit,$options:t=>Jh(t),$forceUpdate:t=>t.f||(t.f=()=>xh(t.update)),$nextTick:t=>t.n||(t.n=Mh.bind(t.proxy)),$watch:t=>im.bind(t)}),vm={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==le&&Q(s,e))return o[e]=1,s[e];if(i!==le&&Q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,r[e];if(n!==le&&Q(n,e))return o[e]=4,n[e];na&&(o[e]=0)}}const u=ur[e];let f,d;if(u)return e==="$attrs"&&Ze(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==le&&Q(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==le&&Q(i,e)?(i[e]=n,!0):s!==le&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==le&&Q(t,o)||e!==le&&Q(e,o)||(a=r[0])&&Q(a,o)||Q(s,o)||Q(ur,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let na=!0;function wm(t){const e=Jh(t),n=t.proxy,s=t.ctx;na=!1,e.beforeCreate&&wc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:w,activated:P,deactivated:k,beforeDestroy:N,beforeUnmount:F,destroyed:G,unmounted:Y,render:ge,renderTracked:_e,renderTriggered:Ue,errorCaptured:Ft,serverPrefetch:Ke,expose:dt,inheritAttrs:At,components:st,directives:Dn,filters:Mn}=e;if(c&&_m(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ce in o){const se=o[ce];K(se)&&(s[ce]=se.bind(n))}if(i){const ce=i.call(n,n);Ae(ce)&&(t.data=di(ce))}if(na=!0,r)for(const ce in r){const se=r[ce],Xe=K(se)?se.bind(n,n):K(se.get)?se.get.bind(n,n):ct,Ln=!K(se)&&K(se.set)?se.set.bind(n):ct,St=wt({get:Xe,set:Ln});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>St.value,set:pt=>St.value=pt})}if(a)for(const ce in a)Yh(a[ce],s,n,ce);if(l){const ce=K(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(se=>{Ji(se,ce[se])})}u&&wc(u,t,"c");function Ee(ce,se){H(se)?se.forEach(Xe=>ce(Xe.bind(n))):se&&ce(se.bind(n))}if(Ee(lm,f),Ee(Wh,d),Ee(cm,m),Ee(um,w),Ee(rm,P),Ee(om,k),Ee(gm,Ft),Ee(pm,_e),Ee(dm,Ue),Ee(hm,F),Ee(Gh,Y),Ee(fm,Ke),H(dt))if(dt.length){const ce=t.exposed||(t.exposed={});dt.forEach(se=>{Object.defineProperty(ce,se,{get:()=>n[se],set:Xe=>n[se]=Xe})})}else t.exposed||(t.exposed={});ge&&t.render===ct&&(t.render=ge),At!=null&&(t.inheritAttrs=At),st&&(t.components=st),Dn&&(t.directives=Dn)}function _m(t,e,n=ct,s=!1){H(t)&&(t=sa(t));for(const i in t){const r=t[i];let o;Ae(r)?"default"in r?o=Qt(r.from||i,r.default,!0):o=Qt(r.from||i):o=Qt(r),xe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function wc(t,e,n){ut(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yh(t,e,n,s){const i=s.includes(".")?Hh(n,s):()=>n[s];if(De(t)){const r=e[t];K(r)&&Qi(i,r)}else if(K(t))Qi(i,t.bind(n));else if(Ae(t))if(H(t))t.forEach(r=>Yh(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&Qi(i,r,t)}}function Jh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>hr(l,c,o,!0)),hr(l,e,o)),r.set(e,l),l}function hr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&hr(t,r,n,!0),i&&i.forEach(o=>hr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Em[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Em={data:_c,props:cn,emits:cn,methods:cn,computed:cn,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:cn,directives:cn,watch:Tm,provide:_c,inject:Im};function _c(t,e){return e?t?function(){return He(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Im(t,e){return cn(sa(t),sa(e))}function sa(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function cn(t,e){return t?He(He(Object.create(null),t),e):e}function Tm(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const s in e)n[s]=Fe(t[s],e[s]);return n}function bm(t,e,n,s=!1){const i={},r={};ar(r,qr,1),t.propsDefaults=Object.create(null),Qh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Bg(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Am(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ne(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Hr(t.emitsOptions,d))continue;const m=e[d];if(l)if(Q(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const w=Tt(d);i[w]=ia(l,a,w,m,t,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{Qh(t,e,i,r)&&(c=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=us(f))===f||!Q(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=ia(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!Q(e,f)&&!0)&&(delete r[f],c=!0)}c&&Dt(t,"set","$attrs")}function Qh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xi(l))continue;const c=e[l];let u;i&&Q(i,u=Tt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Hr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ne(n),c=a||le;for(let u=0;u<r.length;u++){const f=r[u];n[f]=ia(i,l,f,c[f],t,!Q(c,f))}}return o}function ia(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&K(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(ts(i),s=c[n]=l.call(null,e),mn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===us(n))&&(s=!0))}return s}function Zh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=f=>{l=!0;const[d,m]=Zh(f,e,!0);He(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return s.set(t,zn),zn;if(H(r))for(let u=0;u<r.length;u++){const f=Tt(r[u]);Ec(f)&&(o[f]=le)}else if(r)for(const u in r){const f=Tt(u);if(Ec(f)){const d=r[u],m=o[f]=H(d)||K(d)?{type:d}:d;if(m){const w=bc(Boolean,m.type),P=bc(String,m.type);m[0]=w>-1,m[1]=P<0||w<P,(w>-1||Q(m,"default"))&&a.push(f)}}}const c=[o,a];return s.set(t,c),c}function Ec(t){return t[0]!=="$"}function Ic(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Tc(t,e){return Ic(t)===Ic(e)}function bc(t,e){return H(e)?e.findIndex(n=>Tc(n,t)):K(e)&&Tc(e,t)?0:-1}const ef=t=>t[0]==="_"||t==="$stable",Qa=t=>H(t)?t.map(vt):[vt(t)],Sm=(t,e,n)=>{if(e._n)return e;const s=Ss((...i)=>Qa(e(...i)),n);return s._c=!1,s},tf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ef(i))continue;const r=t[i];if(K(r))e[i]=Sm(i,r,s);else if(r!=null){const o=Qa(r);e[i]=()=>o}}},nf=(t,e)=>{const n=Qa(e);t.slots.default=()=>n},Cm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),ar(e,"_",n)):tf(e,t.slots={})}else t.slots={},e&&nf(t,e);ar(t.slots,qr,1)},Rm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(He(i,e),!n&&a===1&&delete i._):(r=!e.$stable,tf(e,i)),o=e}else e&&(nf(t,e),o={default:1});if(r)for(const a in i)!ef(a)&&!(a in o)&&delete i[a]};function sf(){return{app:null,config:{isNativeTag:og,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let km=0;function Nm(t,e){return function(s,i=null){K(s)||(s=Object.assign({},s)),i!=null&&!Ae(i)&&(i=null);const r=sf(),o=new Set;let a=!1;const l=r.app={_uid:km++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ym,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const d=be(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,zr(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function ra(t,e,n,s,i=!1){if(H(t)){t.forEach((d,m)=>ra(d,e&&(H(e)?e[m]:e),n,s,i));return}if(Zi(s)&&!i)return;const r=s.shapeFlag&4?zr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(De(c)?(u[c]=null,Q(f,c)&&(f[c]=null)):xe(c)&&(c.value=null)),K(l))Jt(l,a,12,[o,u]);else{const d=De(l),m=xe(l);if(d||m){const w=()=>{if(t.f){const P=d?u[l]:l.value;i?H(P)&&$a(P,r):H(P)?P.includes(r)||P.push(r):d?(u[l]=[r],Q(f,l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Q(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,qe(w,n)):w()}}}const qe=sm;function Om(t){return Pm(t)}function Pm(t,e){const n=fg();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=ct,cloneNode:w,insertStaticContent:P}=t,k=(h,p,g,_=null,v=null,T=null,R=!1,I=null,S=!!p.dynamicChildren)=>{if(h===p)return;h&&!Es(h,p)&&(_=x(h),nt(h,v,T,!0),h=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:L,shapeFlag:D}=p;switch(E){case Za:N(h,p,g,_);break;case wn:F(h,p,g,_);break;case bo:h==null&&G(p,g,_,R);break;case Ct:Dn(h,p,g,_,v,T,R,I,S);break;default:D&1?_e(h,p,g,_,v,T,R,I,S):D&6?Mn(h,p,g,_,v,T,R,I,S):(D&64||D&128)&&E.process(h,p,g,_,v,T,R,I,S,ue)}L!=null&&v&&ra(L,h&&h.ref,T,p||h,!p)},N=(h,p,g,_)=>{if(h==null)s(p.el=a(p.children),g,_);else{const v=p.el=h.el;p.children!==h.children&&c(v,p.children)}},F=(h,p,g,_)=>{h==null?s(p.el=l(p.children||""),g,_):p.el=h.el},G=(h,p,g,_)=>{[h.el,h.anchor]=P(h.children,p,g,_,h.el,h.anchor)},Y=({el:h,anchor:p},g,_)=>{let v;for(;h&&h!==p;)v=d(h),s(h,g,_),h=v;s(p,g,_)},ge=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),i(h),h=g;i(p)},_e=(h,p,g,_,v,T,R,I,S)=>{R=R||p.type==="svg",h==null?Ue(p,g,_,v,T,R,I,S):dt(h,p,v,T,R,I,S)},Ue=(h,p,g,_,v,T,R,I)=>{let S,E;const{type:L,props:D,shapeFlag:U,transition:j,patchFlag:Z,dirs:re}=h;if(h.el&&w!==void 0&&Z===-1)S=h.el=w(h.el);else{if(S=h.el=o(h.type,T,D&&D.is,D),U&8?u(S,h.children):U&16&&Ke(h.children,S,null,_,v,T&&L!=="foreignObject",R,I),re&&an(h,null,_,"created"),D){for(const fe in D)fe!=="value"&&!Xi(fe)&&r(S,fe,null,D[fe],T,h.children,_,v,C);"value"in D&&r(S,"value",null,D.value),(E=D.onVnodeBeforeMount)&&mt(E,_,h)}Ft(S,h,h.scopeId,R,_)}re&&an(h,null,_,"beforeMount");const oe=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;oe&&j.beforeEnter(S),s(S,p,g),((E=D&&D.onVnodeMounted)||oe||re)&&qe(()=>{E&&mt(E,_,h),oe&&j.enter(S),re&&an(h,null,_,"mounted")},v)},Ft=(h,p,g,_,v)=>{if(g&&m(h,g),_)for(let T=0;T<_.length;T++)m(h,_[T]);if(v){let T=v.subTree;if(p===T){const R=v.vnode;Ft(h,R,R.scopeId,R.slotScopeIds,v.parent)}}},Ke=(h,p,g,_,v,T,R,I,S=0)=>{for(let E=S;E<h.length;E++){const L=h[E]=I?Kt(h[E]):vt(h[E]);k(null,L,p,g,_,v,T,R,I)}},dt=(h,p,g,_,v,T,R)=>{const I=p.el=h.el;let{patchFlag:S,dynamicChildren:E,dirs:L}=p;S|=h.patchFlag&16;const D=h.props||le,U=p.props||le;let j;g&&ln(g,!1),(j=U.onVnodeBeforeUpdate)&&mt(j,g,p,h),L&&an(p,h,g,"beforeUpdate"),g&&ln(g,!0);const Z=v&&p.type!=="foreignObject";if(E?At(h.dynamicChildren,E,I,g,_,Z,T):R||Xe(h,p,I,null,g,_,Z,T,!1),S>0){if(S&16)st(I,p,D,U,g,_,v);else if(S&2&&D.class!==U.class&&r(I,"class",null,U.class,v),S&4&&r(I,"style",D.style,U.style,v),S&8){const re=p.dynamicProps;for(let oe=0;oe<re.length;oe++){const fe=re[oe],it=D[fe],Un=U[fe];(Un!==it||fe==="value")&&r(I,fe,it,Un,v,h.children,g,_,C)}}S&1&&h.children!==p.children&&u(I,p.children)}else!R&&E==null&&st(I,p,D,U,g,_,v);((j=U.onVnodeUpdated)||L)&&qe(()=>{j&&mt(j,g,p,h),L&&an(p,h,g,"updated")},_)},At=(h,p,g,_,v,T,R)=>{for(let I=0;I<p.length;I++){const S=h[I],E=p[I],L=S.el&&(S.type===Ct||!Es(S,E)||S.shapeFlag&70)?f(S.el):g;k(S,E,L,null,_,v,T,R,!0)}},st=(h,p,g,_,v,T,R)=>{if(g!==_){for(const I in _){if(Xi(I))continue;const S=_[I],E=g[I];S!==E&&I!=="value"&&r(h,I,E,S,R,p.children,v,T,C)}if(g!==le)for(const I in g)!Xi(I)&&!(I in _)&&r(h,I,g[I],null,R,p.children,v,T,C);"value"in _&&r(h,"value",g.value,_.value)}},Dn=(h,p,g,_,v,T,R,I,S)=>{const E=p.el=h?h.el:a(""),L=p.anchor=h?h.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:j}=p;j&&(I=I?I.concat(j):j),h==null?(s(E,g,_),s(L,g,_),Ke(p.children,g,L,v,T,R,I,S)):D>0&&D&64&&U&&h.dynamicChildren?(At(h.dynamicChildren,U,g,v,T,R,I),(p.key!=null||v&&p===v.subTree)&&rf(h,p,!0)):Xe(h,p,g,L,v,T,R,I,S)},Mn=(h,p,g,_,v,T,R,I,S)=>{p.slotScopeIds=I,h==null?p.shapeFlag&512?v.ctx.activate(p,g,_,R,S):xn(p,g,_,v,T,R,S):Ee(h,p,S)},xn=(h,p,g,_,v,T,R)=>{const I=h.component=Hm(h,_,v);if(qh(h)&&(I.ctx.renderer=ue),Km(I),I.asyncDep){if(v&&v.registerDep(I,ce),!h.el){const S=I.subTree=be(wn);F(null,S,p,g)}return}ce(I,h,p,g,v,T,R)},Ee=(h,p,g)=>{const _=p.component=h.component;if(em(h,p,g))if(_.asyncDep&&!_.asyncResolved){se(_,p,g);return}else _.next=p,Gg(_.update),_.update();else p.el=h.el,_.vnode=p},ce=(h,p,g,_,v,T,R)=>{const I=()=>{if(h.isMounted){let{next:L,bu:D,u:U,parent:j,vnode:Z}=h,re=L,oe;ln(h,!1),L?(L.el=Z.el,se(h,L,R)):L=Z,D&&Yi(D),(oe=L.props&&L.props.onVnodeBeforeUpdate)&&mt(oe,j,L,Z),ln(h,!0);const fe=To(h),it=h.subTree;h.subTree=fe,k(it,fe,f(it.el),x(it),h,v,T),L.el=fe.el,re===null&&tm(h,fe.el),U&&qe(U,v),(oe=L.props&&L.props.onVnodeUpdated)&&qe(()=>mt(oe,j,L,Z),v)}else{let L;const{el:D,props:U}=p,{bm:j,m:Z,parent:re}=h,oe=Zi(p);if(ln(h,!1),j&&Yi(j),!oe&&(L=U&&U.onVnodeBeforeMount)&&mt(L,re,p),ln(h,!0),D&&z){const fe=()=>{h.subTree=To(h),z(D,h.subTree,h,v,null)};oe?p.type.__asyncLoader().then(()=>!h.isUnmounted&&fe()):fe()}else{const fe=h.subTree=To(h);k(null,fe,g,_,h,v,T),p.el=fe.el}if(Z&&qe(Z,v),!oe&&(L=U&&U.onVnodeMounted)){const fe=p;qe(()=>mt(L,re,fe),v)}(p.shapeFlag&256||re&&Zi(re.vnode)&&re.vnode.shapeFlag&256)&&h.a&&qe(h.a,v),h.isMounted=!0,p=g=_=null}},S=h.effect=new qa(I,()=>xh(E),h.scope),E=h.update=()=>S.run();E.id=h.uid,ln(h,!0),E()},se=(h,p,g)=>{p.component=h;const _=h.vnode.props;h.vnode=p,h.next=null,Am(h,p.props,_,g),Rm(h,p.children,g),hs(),jr(void 0,h.update),fs()},Xe=(h,p,g,_,v,T,R,I,S=!1)=>{const E=h&&h.children,L=h?h.shapeFlag:0,D=p.children,{patchFlag:U,shapeFlag:j}=p;if(U>0){if(U&128){St(E,D,g,_,v,T,R,I,S);return}else if(U&256){Ln(E,D,g,_,v,T,R,I,S);return}}j&8?(L&16&&C(E,v,T),D!==E&&u(g,D)):L&16?j&16?St(E,D,g,_,v,T,R,I,S):C(E,v,T,!0):(L&8&&u(g,""),j&16&&Ke(D,g,_,v,T,R,I,S))},Ln=(h,p,g,_,v,T,R,I,S)=>{h=h||zn,p=p||zn;const E=h.length,L=p.length,D=Math.min(E,L);let U;for(U=0;U<D;U++){const j=p[U]=S?Kt(p[U]):vt(p[U]);k(h[U],j,g,null,v,T,R,I,S)}E>L?C(h,v,T,!0,!1,D):Ke(p,g,_,v,T,R,I,S,D)},St=(h,p,g,_,v,T,R,I,S)=>{let E=0;const L=p.length;let D=h.length-1,U=L-1;for(;E<=D&&E<=U;){const j=h[E],Z=p[E]=S?Kt(p[E]):vt(p[E]);if(Es(j,Z))k(j,Z,g,null,v,T,R,I,S);else break;E++}for(;E<=D&&E<=U;){const j=h[D],Z=p[U]=S?Kt(p[U]):vt(p[U]);if(Es(j,Z))k(j,Z,g,null,v,T,R,I,S);else break;D--,U--}if(E>D){if(E<=U){const j=U+1,Z=j<L?p[j].el:_;for(;E<=U;)k(null,p[E]=S?Kt(p[E]):vt(p[E]),g,Z,v,T,R,I,S),E++}}else if(E>U)for(;E<=D;)nt(h[E],v,T,!0),E++;else{const j=E,Z=E,re=new Map;for(E=Z;E<=U;E++){const Ye=p[E]=S?Kt(p[E]):vt(p[E]);Ye.key!=null&&re.set(Ye.key,E)}let oe,fe=0;const it=U-Z+1;let Un=!1,ec=0;const _s=new Array(it);for(E=0;E<it;E++)_s[E]=0;for(E=j;E<=D;E++){const Ye=h[E];if(fe>=it){nt(Ye,v,T,!0);continue}let gt;if(Ye.key!=null)gt=re.get(Ye.key);else for(oe=Z;oe<=U;oe++)if(_s[oe-Z]===0&&Es(Ye,p[oe])){gt=oe;break}gt===void 0?nt(Ye,v,T,!0):(_s[gt-Z]=E+1,gt>=ec?ec=gt:Un=!0,k(Ye,p[gt],g,null,v,T,R,I,S),fe++)}const tc=Un?Dm(_s):zn;for(oe=tc.length-1,E=it-1;E>=0;E--){const Ye=Z+E,gt=p[Ye],nc=Ye+1<L?p[Ye+1].el:_;_s[E]===0?k(null,gt,g,nc,v,T,R,I,S):Un&&(oe<0||E!==tc[oe]?pt(gt,g,nc,2):oe--)}}},pt=(h,p,g,_,v=null)=>{const{el:T,type:R,transition:I,children:S,shapeFlag:E}=h;if(E&6){pt(h.component.subTree,p,g,_);return}if(E&128){h.suspense.move(p,g,_);return}if(E&64){R.move(h,p,g,ue);return}if(R===Ct){s(T,p,g);for(let D=0;D<S.length;D++)pt(S[D],p,g,_);s(h.anchor,p,g);return}if(R===bo){Y(h,p,g);return}if(_!==2&&E&1&&I)if(_===0)I.beforeEnter(T),s(T,p,g),qe(()=>I.enter(T),v);else{const{leave:D,delayLeave:U,afterLeave:j}=I,Z=()=>s(T,p,g),re=()=>{D(T,()=>{Z(),j&&j()})};U?U(T,Z,re):re()}else s(T,p,g)},nt=(h,p,g,_=!1,v=!1)=>{const{type:T,props:R,ref:I,children:S,dynamicChildren:E,shapeFlag:L,patchFlag:D,dirs:U}=h;if(I!=null&&ra(I,null,g,h,!0),L&256){p.ctx.deactivate(h);return}const j=L&1&&U,Z=!Zi(h);let re;if(Z&&(re=R&&R.onVnodeBeforeUnmount)&&mt(re,p,h),L&6)M(h.component,g,_);else{if(L&128){h.suspense.unmount(g,_);return}j&&an(h,null,p,"beforeUnmount"),L&64?h.type.remove(h,p,g,v,ue,_):E&&(T!==Ct||D>0&&D&64)?C(E,p,g,!1,!0):(T===Ct&&D&384||!v&&L&16)&&C(S,p,g),_&&Eo(h)}(Z&&(re=R&&R.onVnodeUnmounted)||j)&&qe(()=>{re&&mt(re,p,h),j&&an(h,null,p,"unmounted")},g)},Eo=h=>{const{type:p,el:g,anchor:_,transition:v}=h;if(p===Ct){y(g,_);return}if(p===bo){ge(h);return}const T=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,S=()=>R(g,T);I?I(h.el,T,S):S()}else T()},y=(h,p)=>{let g;for(;h!==p;)g=d(h),i(h),h=g;i(p)},M=(h,p,g)=>{const{bum:_,scope:v,update:T,subTree:R,um:I}=h;_&&Yi(_),v.stop(),T&&(T.active=!1,nt(R,h,p,g)),I&&qe(I,p),qe(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(h,p,g,_=!1,v=!1,T=0)=>{for(let R=T;R<h.length;R++)nt(h[R],p,g,_,v)},x=h=>h.shapeFlag&6?x(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),ie=(h,p,g)=>{h==null?p._vnode&&nt(p._vnode,null,null,!0):k(p._vnode||null,h,p,null,null,null,g),Fh(),p._vnode=h},ue={p:k,um:nt,m:pt,r:Eo,mt:xn,mc:Ke,pc:Xe,pbc:At,n:x,o:t};let X,z;return e&&([X,z]=e(ue)),{render:ie,hydrate:X,createApp:Nm(ie,X)}}function ln({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rf(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Kt(i[r]),a.el=o.el),n||rf(o,a))}}function Dm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Mm=t=>t.__isTeleport,Ct=Symbol(void 0),Za=Symbol(void 0),wn=Symbol(void 0),bo=Symbol(void 0),Ds=[];let lt=null;function oa(t=!1){Ds.push(lt=t?null:[])}function xm(){Ds.pop(),lt=Ds[Ds.length-1]||null}let qs=1;function Ac(t){qs+=t}function of(t){return t.dynamicChildren=qs>0?lt||zn:null,xm(),qs>0&&lt&&lt.push(t),t}function Sc(t,e,n,s,i,r){return of(zs(t,e,n,s,i,r,!0))}function Lm(t,e,n,s,i){return of(be(t,e,n,s,i,!0))}function aa(t){return t?t.__v_isVNode===!0:!1}function Es(t,e){return t.type===e.type&&t.key===e.key}const qr="__vInternal",af=({key:t})=>t!=null?t:null,er=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||xe(t)||K(t)?{i:at,r:t,k:e,f:!!n}:t:null;function zs(t,e=null,n=null,s=0,i=null,r=t===Ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&af(e),ref:e&&er(e),scopeId:$h,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(el(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=De(n)?8:16),qs>0&&!o&&lt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&lt.push(l),l}const be=Um;function Um(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===mm)&&(t=wn),aa(t)){const a=es(t,e,!0);return n&&el(a,n),qs>0&&!r&&lt&&(a.shapeFlag&6?lt[lt.indexOf(t)]=a:lt.push(a)),a.patchFlag|=-2,a}if(Xm(t)&&(t=t.__vccOpts),e){e=Fm(e);let{class:a,style:l}=e;a&&!De(a)&&(e.class=Va(a)),Ae(l)&&(Sh(l)&&!H(l)&&(l=He({},l)),e.style=Fa(l))}const o=De(t)?1:nm(t)?128:Mm(t)?64:Ae(t)?4:K(t)?2:0;return zs(t,e,n,s,i,o,r,!0)}function Fm(t){return t?Sh(t)||qr in t?He({},t):t:null}function es(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Bm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&af(a),ref:e&&e.ref?n&&i?H(i)?i.concat(er(e)):[i,er(e)]:er(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&es(t.ssContent),ssFallback:t.ssFallback&&es(t.ssFallback),el:t.el,anchor:t.anchor}}function sn(t=" ",e=0){return be(Za,null,t,e)}function Vm(t="",e=!1){return e?(oa(),Lm(wn,null,t)):be(wn,null,t)}function vt(t){return t==null||typeof t=="boolean"?be(wn):H(t)?be(Ct,null,t.slice()):typeof t=="object"?Kt(t):be(Za,null,String(t))}function Kt(t){return t.el===null||t.memo?t:es(t)}function el(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),el(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(qr in e)?e._ctx=at:i===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[sn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Va([e.class,s.class]));else if(i==="style")e.style=Fa([e.style,s.style]);else if(Lr(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function mt(t,e,n,s=null){ut(t,e,7,[n,s])}const $m=sf();let jm=0;function Hm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||$m,r={uid:jm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zh(s,i),emitsOptions:Bh(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Jg.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const ts=t=>{Ne=t,t.scope.on()},mn=()=>{Ne&&Ne.scope.off(),Ne=null};function lf(t){return t.vnode.shapeFlag&4}let Ws=!1;function Km(t,e=!1){Ws=e;const{props:n,children:s}=t.vnode,i=lf(t);bm(t,n,i,e),Cm(t,s);const r=i?qm(t,e):void 0;return Ws=!1,r}function qm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ch(new Proxy(t.ctx,vm));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Wm(t):null;ts(t),hs();const r=Jt(s,t,0,[t.props,i]);if(fs(),mn(),fh(r)){if(r.then(mn,mn),e)return r.then(o=>{Cc(t,o,e)}).catch(o=>{$r(o,t,0)});t.asyncDep=r}else Cc(t,r,e)}else cf(t,e)}function Cc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=Ph(e)),cf(t,n)}let Rc;function cf(t,e,n){const s=t.type;if(!t.render){if(!e&&Rc&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=He(He({isCustomElement:r,delimiters:a},o),l);s.render=Rc(i,c)}}t.render=s.render||ct}ts(t),hs(),wm(t),fs(),mn()}function zm(t){return new Proxy(t.attrs,{get(e,n){return Ze(t,"get","$attrs"),e[n]}})}function Wm(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=zm(t))},slots:t.slots,emit:t.emit,expose:e}}function zr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ph(Ch(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ur)return ur[n](t)}}))}function Gm(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function Xm(t){return K(t)&&"__vccOpts"in t}const wt=(t,e)=>qg(t,e,Ws);function uf(t,e,n){const s=arguments.length;return s===2?Ae(e)&&!H(e)?aa(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&aa(n)&&(n=[n]),be(t,e,n))}const Ym="3.2.37",Jm="http://www.w3.org/2000/svg",hn=typeof document!="undefined"?document:null,kc=hn&&hn.createElement("template"),Qm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?hn.createElementNS(Jm,t):hn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{kc.innerHTML=s?`<svg>${t}</svg>`:t;const a=kc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Zm(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ey(t,e,n){const s=t.style,i=De(n);if(n&&!i){for(const r in n)la(s,r,n[r]);if(e&&!De(e))for(const r in e)n[r]==null&&la(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Nc=/\s*!important$/;function la(t,e,n){if(H(n))n.forEach(s=>la(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ty(t,e);Nc.test(n)?t.setProperty(us(s),n.replace(Nc,""),"important"):t[s]=n}}const Oc=["Webkit","Moz","ms"],Ao={};function ty(t,e){const n=Ao[e];if(n)return n;let s=Tt(e);if(s!=="filter"&&s in t)return Ao[e]=s;s=Vr(s);for(let i=0;i<Oc.length;i++){const r=Oc[i]+s;if(r in t)return Ao[e]=r}return e}const Pc="http://www.w3.org/1999/xlink";function ny(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pc,e.slice(6,e.length)):t.setAttributeNS(Pc,e,n);else{const r=ng(e);n==null||r&&!ch(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function sy(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ch(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[hf,iy]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ca=0;const ry=Promise.resolve(),oy=()=>{ca=0},ay=()=>ca||(ry.then(oy),ca=hf());function $n(t,e,n,s){t.addEventListener(e,n,s)}function ly(t,e,n,s){t.removeEventListener(e,n,s)}function cy(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=uy(e);if(s){const c=r[e]=hy(s,i);$n(t,a,c,l)}else o&&(ly(t,a,o,l),r[e]=void 0)}}const Dc=/(?:Once|Passive|Capture)$/;function uy(t){let e;if(Dc.test(t)){e={};let n;for(;n=t.match(Dc);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[us(t.slice(2)),e]}function hy(t,e){const n=s=>{const i=s.timeStamp||hf();(iy||i>=n.attached-1)&&ut(fy(s,n.value),e,5,[s])};return n.value=t,n.attached=ay(),n}function fy(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Mc=/^on[a-z]/,dy=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Zm(t,s,i):e==="style"?ey(t,n,s):Lr(e)?Ba(e)||cy(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):py(t,e,s,i))?sy(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ny(t,e,s,i))};function py(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Mc.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mc.test(e)&&De(n)?!1:e in t}const xc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Yi(e,n):e};function gy(t){t.target.composing=!0}function Lc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qb={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=xc(i);const r=s||i.props&&i.props.type==="number";$n(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Wo(a)),t._assign(a)}),n&&$n(t,"change",()=>{t.value=t.value.trim()}),e||($n(t,"compositionstart",gy),$n(t,"compositionend",Lc),$n(t,"change",Lc))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=xc(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Wo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},my=He({patchProp:dy},Qm);let Uc;function yy(){return Uc||(Uc=Om(my))}const vy=(...t)=>{const e=yy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=wy(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function wy(t){return De(t)?document.querySelector(t):t}/**
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
 */const ff=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_y=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},df={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[u],n[f],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ff(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_y(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),f!==64){const w=c<<6&192|f;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ey=function(t){const e=ff(t);return df.encodeByteArray(e,!0)},pf=function(t){return Ey(t).replace(/\./g,"")},Iy=function(t){try{return df.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Ty{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Se(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function mf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function by(){return Se().indexOf("Electron/")>=0}function vf(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ay(){return Se().indexOf("MSAppHost/")>=0}function Sy(){return typeof indexedDB=="object"}function Cy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ry="FirebaseError";class On extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ry,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ky(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new On(i,a,s)}}function ky(t,e){return t.replace(Ny,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ny=/\{\$([^}]+)}/g;function Oy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Fc(r)&&Fc(o)){if(!fr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Fc(t){return t!==null&&typeof t=="object"}/**
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
 */function gi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Py(t,e){const n=new Dy(t,e);return n.subscribe.bind(n)}class Dy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");My(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=So),i.error===void 0&&(i.error=So),i.complete===void 0&&(i.complete=So);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function My(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function So(){}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const un="[DEFAULT]";/**
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
 */class xy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ty;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uy(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ly(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ly(t){return t===un?void 0:t}function Uy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Vy={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},By=te.INFO,$y={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},jy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=$y[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tl{constructor(e){this.name=e,this._logLevel=By,this._logHandler=jy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Hy=(t,e)=>e.some(n=>t instanceof n);let Vc,Bc;function Ky(){return Vc||(Vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qy(){return Bc||(Bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wf=new WeakMap,ua=new WeakMap,_f=new WeakMap,Co=new WeakMap,nl=new WeakMap;function zy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Zt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wf.set(n,t)}).catch(()=>{}),nl.set(e,t),e}function Wy(t){if(ua.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ua.set(t,e)}let ha={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ua.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_f.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gy(t){ha=t(ha)}function Xy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ro(this),e,...n);return _f.set(s,e.sort?e.sort():[e]),Zt(s)}:qy().includes(t)?function(...e){return t.apply(Ro(this),e),Zt(wf.get(this))}:function(...e){return Zt(t.apply(Ro(this),e))}}function Yy(t){return typeof t=="function"?Xy(t):(t instanceof IDBTransaction&&Wy(t),Hy(t,Ky())?new Proxy(t,ha):t)}function Zt(t){if(t instanceof IDBRequest)return zy(t);if(Co.has(t))return Co.get(t);const e=Yy(t);return e!==t&&(Co.set(t,e),nl.set(e,t)),e}const Ro=t=>nl.get(t);function Jy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Zt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Qy=["get","getKey","getAll","getAllKeys","count"],Zy=["put","add","delete","clear"],ko=new Map;function $c(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ko.get(e))return ko.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Zy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Qy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ko.set(e,r),r}Gy(t=>oc(rc({},t),{get:(e,n,s)=>$c(e,n)||t.get(e,n,s),has:(e,n)=>!!$c(e,n)||t.has(e,n)}));/**
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
 */class ev{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fa="@firebase/app",jc="0.7.25";/**
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
 */const sl=new tl("@firebase/app"),nv="@firebase/app-compat",sv="@firebase/analytics-compat",iv="@firebase/analytics",rv="@firebase/app-check-compat",ov="@firebase/app-check",av="@firebase/auth",lv="@firebase/auth-compat",cv="@firebase/database",uv="@firebase/database-compat",hv="@firebase/functions",fv="@firebase/functions-compat",dv="@firebase/installations",pv="@firebase/installations-compat",gv="@firebase/messaging",mv="@firebase/messaging-compat",yv="@firebase/performance",vv="@firebase/performance-compat",wv="@firebase/remote-config",_v="@firebase/remote-config-compat",Ev="@firebase/storage",Iv="@firebase/storage-compat",Tv="@firebase/firestore",bv="@firebase/firestore-compat",Av="firebase",Sv="9.8.2";/**
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
 */const Ef="[DEFAULT]",Cv={[fa]:"fire-core",[nv]:"fire-core-compat",[iv]:"fire-analytics",[sv]:"fire-analytics-compat",[ov]:"fire-app-check",[rv]:"fire-app-check-compat",[av]:"fire-auth",[lv]:"fire-auth-compat",[cv]:"fire-rtdb",[uv]:"fire-rtdb-compat",[hv]:"fire-fn",[fv]:"fire-fn-compat",[dv]:"fire-iid",[pv]:"fire-iid-compat",[gv]:"fire-fcm",[mv]:"fire-fcm-compat",[yv]:"fire-perf",[vv]:"fire-perf-compat",[wv]:"fire-rc",[_v]:"fire-rc-compat",[Ev]:"fire-gcs",[Iv]:"fire-gcs-compat",[Tv]:"fire-fst",[bv]:"fire-fst-compat","fire-js":"fire-js",[Av]:"fire-js-all"};/**
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
 */const dr=new Map,da=new Map;function Rv(t,e){try{t.container.addComponent(e)}catch(n){sl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(da.has(e))return sl.debug(`There were multiple attempts to register component ${e}.`),!1;da.set(e,t);for(const n of dr.values())Rv(n,t);return!0}function il(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const kv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},En=new pi("app","Firebase",kv);/**
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
 */class Nv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=Sv;function Ov(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ef,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw En.create("bad-app-name",{appName:String(s)});const i=dr.get(s);if(i){if(fr(t,i.options)&&fr(n,i.config))return i;throw En.create("duplicate-app",{appName:s})}const r=new Fy(s);for(const a of da.values())r.addComponent(a);const o=new Nv(t,n,r);return dr.set(s,o),o}function If(t=Ef){const e=dr.get(t);if(!e)throw En.create("no-app",{appName:t});return e}function en(t,e,n){var s;let i=(s=Cv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sl.warn(a.join(" "));return}ns(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Pv="firebase-heartbeat-database",Dv=1,Gs="firebase-heartbeat-store";let No=null;function Tf(){return No||(No=Jy(Pv,Dv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gs)}}}).catch(t=>{throw En.create("storage-open",{originalErrorMessage:t.message})})),No}async function Mv(t){try{return(await Tf()).transaction(Gs).objectStore(Gs).get(bf(t))}catch(e){throw En.create("storage-get",{originalErrorMessage:e.message})}}async function Hc(t,e){try{const s=(await Tf()).transaction(Gs,"readwrite");return await s.objectStore(Gs).put(e,bf(t)),s.done}catch(n){throw En.create("storage-set",{originalErrorMessage:n.message})}}function bf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xv=1024,Lv=30*24*60*60*1e3;class Uv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Lv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kc(),{heartbeatsToSend:n,unsentEntries:s}=Fv(this._heartbeatsCache.heartbeats),i=pf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Kc(){return new Date().toISOString().substring(0,10)}function Fv(t,e=xv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Vv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sy()?Cy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qc(t){return pf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bv(t){ns(new _n("platform-logger",e=>new ev(e),"PRIVATE")),ns(new _n("heartbeat",e=>new Uv(e),"PRIVATE")),en(fa,jc,t),en(fa,jc,"esm2017"),en("fire-js","")}Bv("");function rl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Af(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $v=Af,Sf=new pi("auth","Firebase",Af());/**
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
 */const zc=new tl("@firebase/auth");function tr(t,...e){zc.logLevel<=te.ERROR&&zc.error(`Auth (${mi}): ${t}`,...e)}/**
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
 */function ft(t,...e){throw ol(t,...e)}function Et(t,...e){return ol(t,...e)}function jv(t,e,n){const s=Object.assign(Object.assign({},$v()),{[e]:n});return new pi("auth","Firebase",s).create(e,{appName:t.name})}function ol(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Sf.create(t,...e)}function B(t,e,...n){if(!t)throw ol(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tr(e),new Error(e)}function Mt(t,e){t||kt(e)}/**
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
 */const Wc=new Map;function Nt(t){Mt(t instanceof Function,"Expected a class definition");let e=Wc.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wc.set(t,e),e)}/**
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
 */function Hv(t,e){const n=il(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(fr(r,e!=null?e:{}))return i;ft(i,"already-initialized")}return n.initialize({options:e})}function Kv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function pa(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qv(){return Gc()==="http:"||Gc()==="https:"}function Gc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zv(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qv()||mf()||"connection"in navigator)?navigator.onLine:!0}function Wv(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=gf()||yf()}get(){return zv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function al(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Xv=new yi(3e4,6e4);function vi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wi(t,e,n,s,i={}){return Rf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=gi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Cf.fetch()(kf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Rf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Gv),e);try{const i=new Yv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $i(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $i(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $i(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jv(t,u,c);ft(t,u)}}catch(i){if(i instanceof On)throw i;ft(t,"network-request-failed")}}async function _i(t,e,n,s,i={}){const r=await wi(t,e,n,s,i);return"mfaPendingCredential"in r&&ft(t,"multi-factor-auth-required",{_serverResponse:r}),r}function kf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?al(t.config,i):`${t.config.apiScheme}://${i}`}class Yv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Et(this.auth,"network-request-failed")),Xv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $i(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Et(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Jv(t,e){return wi(t,"POST","/v1/accounts:delete",e)}async function Qv(t,e){return wi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ms(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zv(t,e=!1){const n=ht(t),s=await n.getIdToken(e),i=ll(s);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ms(Oo(i.auth_time)),issuedAtTime:Ms(Oo(i.iat)),expirationTime:Ms(Oo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Oo(t){return Number(t)*1e3}function ll(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return tr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iy(n);return i?JSON.parse(i):(tr("Failed to decode base64 JWT payload"),null)}catch(i){return tr("Caught error parsing JWT payload as JSON",i),null}}function ew(t){const e=ll(t);return B(e,"internal-error"),B(typeof e.exp!="undefined","internal-error"),B(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof On&&tw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function tw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Xs(t,Qv(n,{idToken:s}));B(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?rw(r.providerUserInfo):[],a=iw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Nf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function sw(t){const e=ht(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function rw(t){return t.map(e=>{var{providerId:n}=e,s=rl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function ow(t,e){const n=await Rf(t,{},async()=>{const s=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=kf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken!="undefined","internal-error"),B(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):ew(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await ow(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ys;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Bt(t,e){B(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Nf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zv(this,e)}reload(){return sw(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xs(this,Jv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:G,emailVerified:Y,isAnonymous:ge,providerData:_e,stsTokenManager:Ue}=n;B(G&&Ue,e,"internal-error");const Ft=Ys.fromJSON(this.name,Ue);B(typeof G=="string",e,"internal-error"),Bt(f,e.name),Bt(d,e.name),B(typeof Y=="boolean",e,"internal-error"),B(typeof ge=="boolean",e,"internal-error"),Bt(m,e.name),Bt(w,e.name),Bt(P,e.name),Bt(k,e.name),Bt(N,e.name),Bt(F,e.name);const Ke=new yn({uid:G,auth:e,email:d,emailVerified:Y,displayName:f,isAnonymous:ge,photoURL:w,phoneNumber:m,tenantId:P,stsTokenManager:Ft,createdAt:N,lastLoginAt:F});return _e&&Array.isArray(_e)&&(Ke.providerData=_e.map(dt=>Object.assign({},dt))),k&&(Ke._redirectEventId=k),Ke}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ys;i.updateFromServerResponse(n);const r=new yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await pr(r),r}}/**
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
 */class Of{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Of.type="NONE";const Xc=Of;/**
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
 */function nr(t,e,n){return`firebase:${t}:${e}:${n}`}class Xn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=nr(this.userKey,i.apiKey,r),this.fullPersistenceKey=nr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Xn(Nt(Xc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Nt(Xc);const o=nr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=yn._fromJSON(e,u);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Xn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Xn(r,e,s))}}/**
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
 */function Yc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lf(e))return"Blackberry";if(Uf(e))return"Webos";if(cl(e))return"Safari";if((e.includes("chrome/")||Df(e))&&!e.includes("edge/"))return"Chrome";if(xf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pf(t=Se()){return/firefox\//i.test(t)}function cl(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Df(t=Se()){return/crios\//i.test(t)}function Mf(t=Se()){return/iemobile/i.test(t)}function xf(t=Se()){return/android/i.test(t)}function Lf(t=Se()){return/blackberry/i.test(t)}function Uf(t=Se()){return/webos/i.test(t)}function Wr(t=Se()){return/iphone|ipad|ipod/i.test(t)}function aw(t=Se()){var e;return Wr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lw(){return vf()&&document.documentMode===10}function Ff(t=Se()){return Wr(t)||xf(t)||Uf(t)||Lf(t)||/windows phone/i.test(t)||Mf(t)}function cw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vf(t,e=[]){let n;switch(t){case"Browser":n=Yc(Se());break;case"Worker":n=`${Yc(Se())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${s}`}/**
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
 */class uw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s.message})}}}/**
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
 */class hw{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jc(this),this.idTokenSubscription=new Jc(this),this.beforeStateQueue=new uw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Xn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ht(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Xn.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Gr(t){return ht(t)}class Jc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Py(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class ul{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}async function fw(t,e){return wi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function dw(t,e){return _i(t,"POST","/v1/accounts:signInWithPassword",vi(t,e))}/**
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
 */async function pw(t,e){return _i(t,"POST","/v1/accounts:signInWithEmailLink",vi(t,e))}async function gw(t,e){return _i(t,"POST","/v1/accounts:signInWithEmailLink",vi(t,e))}/**
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
 */class Js extends ul{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Js(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Js(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dw(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pw(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gw(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yn(t,e){return _i(t,"POST","/v1/accounts:signInWithIdp",vi(t,e))}/**
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
 */const mw="http://localhost";class In extends ul{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=rl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new In(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Yn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}buildRequest(){const e={requestUri:mw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gi(n)}return e}}/**
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
 */function yw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vw(t){const e=Cs(Rs(t)).link,n=e?Cs(Rs(e)).deep_link_id:null,s=Cs(Rs(t)).deep_link_id;return(s?Cs(Rs(s)).link:null)||s||n||e||t}class hl{constructor(e){var n,s,i,r,o,a;const l=Cs(Rs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,f=yw((i=l.mode)!==null&&i!==void 0?i:null);B(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vw(e);try{return new hl(n)}catch{return null}}}/**
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
 */class ds{constructor(){this.providerId=ds.PROVIDER_ID}static credential(e,n){return Js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=hl.parseLink(n);return B(s,"argument-error"),Js._fromEmailAndCode(e,s.code,s.tenantId)}}ds.PROVIDER_ID="password";ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ei extends Bf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends Ei{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class Wt extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return In._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Wt.credential(n,s)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
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
 */class Gt extends Ei{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
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
 */class Xt extends Ei{constructor(){super("twitter.com")}static credential(e,n){return In._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Xt.credential(n,s)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
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
 */async function ww(t,e){return _i(t,"POST","/v1/accounts:signUp",vi(t,e))}/**
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
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await yn._fromIdTokenResponse(e,s,i),o=Qc(s);return new Tn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Qc(s);return new Tn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Qc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gr extends On{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new gr(e,n,s,i)}}function $f(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,r,e,s):r})}async function _w(t,e,n=!1){const s=await Xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tn._forOperation(t,"link",s)}/**
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
 */async function Ew(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Xs(t,$f(s,i,e,t),n);B(r.idToken,s,"internal-error");const o=ll(r.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(t.uid===a,s,"user-mismatch"),Tn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ft(s,"user-mismatch"),r}}/**
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
 */async function jf(t,e,n=!1){const s="signIn",i=await $f(t,s,e),r=await Tn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Iw(t,e){return jf(Gr(t),e)}async function zb(t,e,n){const s=Gr(t),i=await ww(s,{returnSecureToken:!0,email:e,password:n}),r=await Tn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function Wb(t,e,n){return Iw(ht(t),ds.credential(e,n))}function Tw(t,e,n,s){return ht(t).onAuthStateChanged(e,n,s)}function bw(t){return ht(t).signOut()}const mr="__sak";/**
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
 */class Hf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Aw(){const t=Se();return cl(t)||Wr(t)}const Sw=1e3,Cw=10;class Kf extends Hf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Aw()&&cw(),this.fallbackToPolling=Ff(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);lw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kf.type="LOCAL";const Rw=Kf;/**
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
 */class qf extends Hf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qf.type="SESSION";const zf=qf;/**
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
 */function kw(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Xr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await kw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xr.receivers=[];/**
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
 */function fl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Nw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=fl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function It(){return window}function Ow(t){It().location.href=t}/**
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
 */function Wf(){return typeof It().WorkerGlobalScope!="undefined"&&typeof It().importScripts=="function"}async function Pw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mw(){return Wf()?self:null}/**
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
 */const Gf="firebaseLocalStorageDb",xw=1,yr="firebaseLocalStorage",Xf="fbase_key";class Ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yr(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function Lw(){const t=indexedDB.deleteDatabase(Gf);return new Ii(t).toPromise()}function ga(){const t=indexedDB.open(Gf,xw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(yr,{keyPath:Xf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(yr)?e(s):(s.close(),await Lw(),e(await ga()))})})}async function Zc(t,e,n){const s=Yr(t,!0).put({[Xf]:e,value:n});return new Ii(s).toPromise()}async function Uw(t,e){const n=Yr(t,!1).get(e),s=await new Ii(n).toPromise();return s===void 0?null:s.value}function eu(t,e){const n=Yr(t,!0).delete(e);return new Ii(n).toPromise()}const Fw=800,Vw=3;class Yf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ga(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Vw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xr._getInstance(Mw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Pw(),!this.activeServiceWorker)return;this.sender=new Nw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ga();return await Zc(e,mr,"1"),await eu(e,mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Uw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Yr(i,!1).getAll();return new Ii(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yf.type="LOCAL";const Bw=Yf;/**
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
 */function $w(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Et("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",$w().appendChild(s)})}function Hw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new yi(3e4,6e4);/**
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
 */function Kw(t,e){return e?Nt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dl extends ul{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qw(t){return jf(t.auth,new dl(t),t.bypassAuthState)}function zw(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Ew(n,new dl(t),t.bypassAuthState)}async function Ww(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),_w(n,new dl(t),t.bypassAuthState)}/**
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
 */class Jf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qw;case"linkViaPopup":case"linkViaRedirect":return Ww;case"reauthViaPopup":case"reauthViaRedirect":return zw;default:ft(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gw=new yi(2e3,1e4);class Hn extends Jf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Gw.get())};e()}}Hn.currentPopupAction=null;/**
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
 */const Xw="pendingRedirect",sr=new Map;class Yw extends Jf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=sr.get(this.auth._key());if(!e){try{const s=await Jw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}sr.set(this.auth._key(),e)}return this.bypassAuthState||sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jw(t,e){const n=e_(e),s=Zw(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Qw(t,e){sr.set(t._key(),e)}function Zw(t){return Nt(t._redirectPersistence)}function e_(t){return nr(Xw,t.config.apiKey,t.name)}async function t_(t,e,n=!1){const s=Gr(t),i=Kw(s,e),o=await new Yw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const n_=10*60*1e3;class s_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Qf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=n_&&this.cachedEventUids.clear(),this.cachedEventUids.has(tu(e))}saveEventToCache(e){this.cachedEventUids.add(tu(e)),this.lastProcessedEventTime=Date.now()}}function tu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qf(t);default:return!1}}/**
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
 */async function r_(t,e={}){return wi(t,"GET","/v1/projects",e)}/**
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
 */const o_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a_=/^https?/;async function l_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await r_(t);for(const n of e)try{if(c_(n))return}catch{}ft(t,"unauthorized-domain")}function c_(t){const e=pa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!a_.test(n))return!1;if(o_.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const u_=new yi(3e4,6e4);function nu(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function h_(t){return new Promise((e,n)=>{var s,i,r;function o(){nu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nu(),n(Et(t,"network-request-failed"))},timeout:u_.get()})}if(!((i=(s=It().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=It().gapi)===null||r===void 0)&&r.load)o();else{const a=Hw("iframefcb");return It()[a]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},jw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ir=null,e})}let ir=null;function f_(t){return ir=ir||h_(t),ir}/**
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
 */const d_=new yi(5e3,15e3),p_="__/auth/iframe",g_="emulator/auth/iframe",m_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function v_(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?al(e,g_):`https://${t.config.authDomain}/${p_}`,s={apiKey:e.apiKey,appName:t.name,v:mi},i=y_.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${gi(s).slice(1)}`}async function w_(t){const e=await f_(t),n=It().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:v_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m_,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),a=It().setTimeout(()=>{r(o)},d_.get());function l(){It().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const __={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E_=500,I_=600,T_="_blank",b_="http://localhost";class su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A_(t,e,n,s=E_,i=I_){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},__),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Se().toLowerCase();n&&(a=Df(c)?T_:n),Pf(c)&&(e=e||b_,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[m,w])=>`${d}${m}=${w},`,"");if(aw(c)&&a!=="_self")return S_(e||"",a),new su(null);const f=window.open(e||"",a,u);B(f,t,"popup-blocked");try{f.focus()}catch{}return new su(f)}function S_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const C_="__/auth/handler",R_="emulator/auth/handler";function iu(t,e,n,s,i,r){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:mi,eventId:i};if(e instanceof Bf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Oy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ei){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${k_(t)}?${gi(a).slice(1)}`}function k_({config:t}){return t.emulator?al(t,R_):`https://${t.authDomain}/${C_}`}/**
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
 */const Po="webStorageSupport";class N_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zf,this._completeRedirectFn=t_,this._overrideRedirectResult=Qw}async _openPopup(e,n,s,i){var r;Mt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=iu(e,n,s,pa(),i);return A_(e,o,fl())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Ow(iu(e,n,s,pa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await w_(e),s=new s_(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Po,{type:Po},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Po];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ff()||cl()||Wr()}}const O_=N_;var ru="@firebase/auth",ou="0.20.2";/**
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
 */class P_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function D_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function M_(t){ns(new _n("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{B(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vf(t)},u=new hw(a,l,c);return Kv(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ns(new _n("auth-internal",e=>{const n=Gr(e.getProvider("auth").getImmediate());return(s=>new P_(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(ru,ou,D_(t)),en(ru,ou,"esm2017")}/**
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
 */function vr(t=If()){const e=il(t,"auth");return e.isInitialized()?e.getImmediate():Hv(t,{popupRedirectResolver:O_,persistence:[Bw,Rw,zf]})}M_("Browser");const x_="modulepreload",au={},L_="/",ji=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${L_}${s}`,s in au)return;au[s]=!0;const i=s.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":x_,i||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),i)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zf=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ps=t=>Zf?Symbol(t):"_vr_"+t,U_=ps("rvlm"),lu=ps("rvd"),pl=ps("r"),ed=ps("rl"),ma=ps("rvl"),jn=typeof window!="undefined";function F_(t){return t.__esModule||Zf&&t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function Do(t,e){const n={};for(const s in e){const i=e[s];n[s]=Array.isArray(i)?i.map(t):t(i)}return n}const xs=()=>{},V_=/\/$/,B_=t=>t.replace(V_,"");function Mo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=K_(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function $_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function j_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ss(e.matched[s],n.matched[i])&&td(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function td(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!H_(t[n],e[n]))return!1;return!0}function H_(t,e){return Array.isArray(t)?uu(t,e):Array.isArray(e)?uu(e,t):t===e}function uu(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function K_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Qs;(function(t){t.pop="pop",t.push="push"})(Qs||(Qs={}));var Ls;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ls||(Ls={}));function q_(t){if(!t)if(jn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),B_(t)}const z_=/^[^#]+#/;function W_(t,e){return t.replace(z_,"#")+e}function G_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Jr=()=>({left:window.pageXOffset,top:window.pageYOffset});function X_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=G_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hu(t,e){return(history.state?history.state.position-e:-1)+t}const ya=new Map;function Y_(t,e){ya.set(t,e)}function J_(t){const e=ya.get(t);return ya.delete(t),e}let Q_=()=>location.protocol+"//"+location.host;function nd(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),cu(l,"")}return cu(n,t)+s+i}function Z_(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const m=nd(t,location),w=n.value,P=e.value;let k=0;if(d){if(n.value=m,e.value=d,o&&o===w){o=null;return}k=P?d.position-P.position:0}else s(m);i.forEach(N=>{N(n.value,w,{delta:k,type:Qs.pop,direction:k?k>0?Ls.forward:Ls.back:Ls.unknown})})};function l(){o=n.value}function c(d){i.push(d);const m=()=>{const w=i.indexOf(d);w>-1&&i.splice(w,1)};return r.push(m),m}function u(){const{history:d}=window;!d.state||d.replaceState(ae({},d.state,{scroll:Jr()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function fu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Jr():null}}function eE(t){const{history:e,location:n}=window,s={value:nd(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Q_()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(l,c){const u=ae({},e.state,fu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ae({},i.value,e.state,{forward:l,scroll:Jr()});r(u.current,u,!0);const f=ae({},fu(s.value,l,null),{position:u.position+1},c);r(l,f,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function tE(t){t=q_(t);const e=eE(t),n=Z_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ae({location:"",base:t,go:s,createHref:W_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function nE(t){return typeof t=="string"||t&&typeof t=="object"}function sd(t){return typeof t=="string"||typeof t=="symbol"}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},id=ps("nf");var du;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(du||(du={}));function is(t,e){return ae(new Error,{type:t,[id]:!0},e)}function jt(t,e){return t instanceof Error&&id in t&&(e==null||!!(t.type&e))}const pu="[^/]+?",sE={sensitive:!1,strict:!1,start:!0,end:!0},iE=/[.+*?^${}()[\]/\\]/g;function rE(t,e){const n=ae({},sE,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(iE,"\\$&"),m+=40;else if(d.type===1){const{value:w,repeatable:P,optional:k,regexp:N}=d;r.push({name:w,repeatable:P,optional:k});const F=N||pu;if(F!==pu){m+=10;try{new RegExp(`(${F})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${w}" (${F}): `+Y.message)}}let G=P?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;f||(G=k&&c.length<2?`(?:/${G})`:"/"+G),k&&(G+="?"),i+=G,m+=20,k&&(m+=-8),P&&(m+=-20),F===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",w=r[d-1];f[w.name]=m&&w.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:w,repeatable:P,optional:k}=m,N=w in c?c[w]:"";if(Array.isArray(N)&&!P)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const F=Array.isArray(N)?N.join("/"):N;if(!F)if(k)d.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);u+=F}}return u}return{re:o,score:s,keys:r,parse:a,stringify:l}}function oE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function aE(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=oE(s[n],i[n]);if(r)return r;n++}return i.length-s.length}const lE={type:0,value:""},cE=/[a-zA-Z0-9_]/;function uE(t){if(!t)return[[]];if(t==="/")return[[lE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function f(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:cE.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function hE(t,e,n){const s=rE(uE(t.path),n),i=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function fE(t,e){const n=[],s=new Map;e=mu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,f,d){const m=!d,w=pE(u);w.aliasOf=d&&d.record;const P=mu(e,u),k=[w];if("alias"in u){const G=typeof u.alias=="string"?[u.alias]:u.alias;for(const Y of G)k.push(ae({},w,{components:d?d.record.components:w.components,path:Y,aliasOf:d?d.record:w}))}let N,F;for(const G of k){const{path:Y}=G;if(f&&Y[0]!=="/"){const ge=f.record.path,_e=ge[ge.length-1]==="/"?"":"/";G.path=f.record.path+(Y&&_e+Y)}if(N=hE(G,f,P),d?d.alias.push(N):(F=F||N,F!==N&&F.alias.push(N),m&&u.name&&!gu(N)&&o(u.name)),"children"in w){const ge=w.children;for(let _e=0;_e<ge.length;_e++)r(ge[_e],N,d&&d.children[_e])}d=d||N,l(N)}return F?()=>{o(F)}:xs}function o(u){if(sd(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&aE(u,n[f])>=0&&(u.record.path!==n[f].record.path||!rd(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!gu(u)&&s.set(u.record.name,u)}function c(u,f){let d,m={},w,P;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw is(1,{location:u});P=d.record.name,m=ae(dE(f.params,d.keys.filter(F=>!F.optional).map(F=>F.name)),u.params),w=d.stringify(m)}else if("path"in u)w=u.path,d=n.find(F=>F.re.test(w)),d&&(m=d.parse(w),P=d.record.name);else{if(d=f.name?s.get(f.name):n.find(F=>F.re.test(f.path)),!d)throw is(1,{location:u,currentLocation:f});P=d.record.name,m=ae({},f.params,u.params),w=d.stringify(m)}const k=[];let N=d;for(;N;)k.unshift(N.record),N=N.parent;return{name:P,path:w,params:m,matched:k,meta:mE(k)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function dE(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function pE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function gE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function gu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mE(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function mu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function rd(t,e){return e.children.some(n=>n===t||rd(t,n))}const od=/#/g,yE=/&/g,vE=/\//g,wE=/=/g,_E=/\?/g,ad=/\+/g,EE=/%5B/g,IE=/%5D/g,ld=/%5E/g,TE=/%60/g,cd=/%7B/g,bE=/%7C/g,ud=/%7D/g,AE=/%20/g;function gl(t){return encodeURI(""+t).replace(bE,"|").replace(EE,"[").replace(IE,"]")}function SE(t){return gl(t).replace(cd,"{").replace(ud,"}").replace(ld,"^")}function va(t){return gl(t).replace(ad,"%2B").replace(AE,"+").replace(od,"%23").replace(yE,"%26").replace(TE,"`").replace(cd,"{").replace(ud,"}").replace(ld,"^")}function CE(t){return va(t).replace(wE,"%3D")}function RE(t){return gl(t).replace(od,"%23").replace(_E,"%3F")}function kE(t){return t==null?"":RE(t).replace(vE,"%2F")}function wr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function NE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ad," "),o=r.indexOf("="),a=wr(o<0?r:r.slice(0,o)),l=o<0?null:wr(r.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function yu(t){let e="";for(let n in t){const s=t[n];if(n=CE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&va(r)):[s&&va(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function OE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}function Is(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(is(4,{from:n,to:e})):f instanceof Error?a(f):nE(f)?a(is(2,{from:e,to:f})):(r&&s.enterCallbacks[i]===r&&typeof f=="function"&&r.push(f),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function xo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(PE(a)){const c=(a.__vccOpts||a)[e];c&&i.push(qt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=F_(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&qt(d,n,s,r,o)()}))}}return i}function PE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vu(t){const e=Qt(pl),n=Qt(ed),s=wt(()=>e.resolve(Ns(t.to))),i=wt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(ss.bind(null,u));if(d>-1)return d;const m=wu(l[c-2]);return c>1&&wu(u)===m&&f[f.length-1].path!==m?f.findIndex(ss.bind(null,l[c-2])):d}),r=wt(()=>i.value>-1&&LE(n.params,s.value.params)),o=wt(()=>i.value>-1&&i.value===n.matched.length-1&&td(n.params,s.value.params));function a(l={}){return xE(l)?e[Ns(t.replace)?"replace":"push"](Ns(t.to)).catch(xs):Promise.resolve()}return{route:s,href:wt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const DE=Kh({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vu,setup(t,{slots:e}){const n=di(vu(t)),{options:s}=Qt(pl),i=wt(()=>({[_u(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[_u(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:uf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ME=DE;function xE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function LE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Array.isArray(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function wu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _u=(t,e,n)=>t!=null?t:e!=null?e:n,UE=Kh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Qt(ma),i=wt(()=>t.route||s.value),r=Qt(lu,0),o=wt(()=>i.value.matched[r]);Ji(lu,r+1),Ji(U_,o),Ji(ma,i);const a=Nh();return Qi(()=>[a.value,o.value,t.name],([l,c,u],[f,d,m])=>{c&&(c.instances[u]=l,d&&d!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),l&&c&&(!d||!ss(c,d)||!f)&&(c.enterCallbacks[u]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=i.value,c=o.value,u=c&&c.components[t.name],f=t.name;if(!u)return Eu(n.default,{Component:u,route:l});const d=c.props[t.name],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,P=uf(u,ae({},m,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(c.instances[f]=null)},ref:a}));return Eu(n.default,{Component:P,route:l})||P}}});function Eu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const FE=UE;function VE(t){const e=fE(t.routes,t),n=t.parseQuery||NE,s=t.stringifyQuery||yu,i=t.history,r=Is(),o=Is(),a=Is(),l=$g($t);let c=$t;jn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Do.bind(null,y=>""+y),f=Do.bind(null,kE),d=Do.bind(null,wr);function m(y,M){let C,x;return sd(y)?(C=e.getRecordMatcher(y),x=M):x=y,e.addRoute(x,C)}function w(y){const M=e.getRecordMatcher(y);M&&e.removeRoute(M)}function P(){return e.getRoutes().map(y=>y.record)}function k(y){return!!e.getRecordMatcher(y)}function N(y,M){if(M=ae({},M||l.value),typeof y=="string"){const z=Mo(n,y,M.path),h=e.resolve({path:z.path},M),p=i.createHref(z.fullPath);return ae(z,h,{params:d(h.params),hash:wr(z.hash),redirectedFrom:void 0,href:p})}let C;if("path"in y)C=ae({},y,{path:Mo(n,y.path,M.path).path});else{const z=ae({},y.params);for(const h in z)z[h]==null&&delete z[h];C=ae({},y,{params:f(y.params)}),M.params=f(M.params)}const x=e.resolve(C,M),ie=y.hash||"";x.params=u(d(x.params));const ue=$_(s,ae({},y,{hash:SE(ie),path:x.path})),X=i.createHref(ue);return ae({fullPath:ue,hash:ie,query:s===yu?OE(y.query):y.query||{}},x,{redirectedFrom:void 0,href:X})}function F(y){return typeof y=="string"?Mo(n,y,l.value.path):ae({},y)}function G(y,M){if(c!==y)return is(8,{from:M,to:y})}function Y(y){return Ue(y)}function ge(y){return Y(ae(F(y),{replace:!0}))}function _e(y){const M=y.matched[y.matched.length-1];if(M&&M.redirect){const{redirect:C}=M;let x=typeof C=="function"?C(y):C;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=F(x):{path:x},x.params={}),ae({query:y.query,hash:y.hash,params:y.params},x)}}function Ue(y,M){const C=c=N(y),x=l.value,ie=y.state,ue=y.force,X=y.replace===!0,z=_e(C);if(z)return Ue(ae(F(z),{state:ie,force:ue,replace:X}),M||C);const h=C;h.redirectedFrom=M;let p;return!ue&&j_(s,x,C)&&(p=is(16,{to:h,from:x}),Ln(x,x,!0,!1)),(p?Promise.resolve(p):Ke(h,x)).catch(g=>jt(g)?jt(g,2)?g:Xe(g):ce(g,h,x)).then(g=>{if(g){if(jt(g,2))return Ue(ae(F(g.to),{state:ie,force:ue,replace:X}),M||h)}else g=At(h,x,!0,X,ie);return dt(h,x,g),g})}function Ft(y,M){const C=G(y,M);return C?Promise.reject(C):Promise.resolve()}function Ke(y,M){let C;const[x,ie,ue]=BE(y,M);C=xo(x.reverse(),"beforeRouteLeave",y,M);for(const z of x)z.leaveGuards.forEach(h=>{C.push(qt(h,y,M))});const X=Ft.bind(null,y,M);return C.push(X),Fn(C).then(()=>{C=[];for(const z of r.list())C.push(qt(z,y,M));return C.push(X),Fn(C)}).then(()=>{C=xo(ie,"beforeRouteUpdate",y,M);for(const z of ie)z.updateGuards.forEach(h=>{C.push(qt(h,y,M))});return C.push(X),Fn(C)}).then(()=>{C=[];for(const z of y.matched)if(z.beforeEnter&&!M.matched.includes(z))if(Array.isArray(z.beforeEnter))for(const h of z.beforeEnter)C.push(qt(h,y,M));else C.push(qt(z.beforeEnter,y,M));return C.push(X),Fn(C)}).then(()=>(y.matched.forEach(z=>z.enterCallbacks={}),C=xo(ue,"beforeRouteEnter",y,M),C.push(X),Fn(C))).then(()=>{C=[];for(const z of o.list())C.push(qt(z,y,M));return C.push(X),Fn(C)}).catch(z=>jt(z,8)?z:Promise.reject(z))}function dt(y,M,C){for(const x of a.list())x(y,M,C)}function At(y,M,C,x,ie){const ue=G(y,M);if(ue)return ue;const X=M===$t,z=jn?history.state:{};C&&(x||X?i.replace(y.fullPath,ae({scroll:X&&z&&z.scroll},ie)):i.push(y.fullPath,ie)),l.value=y,Ln(y,M,C,X),Xe()}let st;function Dn(){st||(st=i.listen((y,M,C)=>{const x=N(y),ie=_e(x);if(ie){Ue(ae(ie,{replace:!0}),x).catch(xs);return}c=x;const ue=l.value;jn&&Y_(hu(ue.fullPath,C.delta),Jr()),Ke(x,ue).catch(X=>jt(X,12)?X:jt(X,2)?(Ue(X.to,x).then(z=>{jt(z,20)&&!C.delta&&C.type===Qs.pop&&i.go(-1,!1)}).catch(xs),Promise.reject()):(C.delta&&i.go(-C.delta,!1),ce(X,x,ue))).then(X=>{X=X||At(x,ue,!1),X&&(C.delta?i.go(-C.delta,!1):C.type===Qs.pop&&jt(X,20)&&i.go(-1,!1)),dt(x,ue,X)}).catch(xs)}))}let Mn=Is(),xn=Is(),Ee;function ce(y,M,C){Xe(y);const x=xn.list();return x.length?x.forEach(ie=>ie(y,M,C)):console.error(y),Promise.reject(y)}function se(){return Ee&&l.value!==$t?Promise.resolve():new Promise((y,M)=>{Mn.add([y,M])})}function Xe(y){return Ee||(Ee=!y,Dn(),Mn.list().forEach(([M,C])=>y?C(y):M()),Mn.reset()),y}function Ln(y,M,C,x){const{scrollBehavior:ie}=t;if(!jn||!ie)return Promise.resolve();const ue=!C&&J_(hu(y.fullPath,0))||(x||!C)&&history.state&&history.state.scroll||null;return Mh().then(()=>ie(y,M,ue)).then(X=>X&&X_(X)).catch(X=>ce(X,y,M))}const St=y=>i.go(y);let pt;const nt=new Set;return{currentRoute:l,addRoute:m,removeRoute:w,hasRoute:k,getRoutes:P,resolve:N,options:t,push:Y,replace:ge,go:St,back:()=>St(-1),forward:()=>St(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:xn.add,isReady:se,install(y){const M=this;y.component("RouterLink",ME),y.component("RouterView",FE),y.config.globalProperties.$router=M,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ns(l)}),jn&&!pt&&l.value===$t&&(pt=!0,Y(i.location).catch(ie=>{}));const C={};for(const ie in $t)C[ie]=wt(()=>l.value[ie]);y.provide(pl,M),y.provide(ed,di(C)),y.provide(ma,l);const x=y.unmount;nt.add(y),y.unmount=function(){nt.delete(y),nt.size<1&&(c=$t,st&&st(),st=null,l.value=$t,pt=!1,Ee=!1),x()}}}}function Fn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function BE(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ss(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ss(c,l))||i.push(l))}return[n,s,i]}const ml=VE({history:tE(),routes:[{path:"/",component:()=>ji(()=>import("./Home.e412af74.js"),["assets/Home.e412af74.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/register",component:()=>ji(()=>import("./Register.fb4eb62c.js"),[])},{path:"/sign-in",component:()=>ji(()=>import("./SignIn.22f5aff1.js"),[])},{path:"/feed",component:()=>ji(()=>import("./Feed.a6deb438.js"),["assets/Feed.a6deb438.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0}}]});ml.beforeEach((t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?vr().currentUser?n():(alert("you don't have access"),n("/")):n()});var $E=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,yl=yl||{},$=$E||self;function _r(){}function wa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ti(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jE(t){return Object.prototype.hasOwnProperty.call(t,Lo)&&t[Lo]||(t[Lo]=++HE)}var Lo="closure_uid_"+(1e9*Math.random()>>>0),HE=0;function KE(t,e,n){return t.call.apply(t.bind,arguments)}function qE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Oe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Oe=KE:Oe=qE,Oe.apply(null,arguments)}function Hi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function rn(){this.s=this.s,this.o=this.o}var zE=0;rn.prototype.s=!1;rn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zE!=0)&&jE(this)};rn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},fd=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function WE(t){e:{var e=FI;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Iu(t){return Array.prototype.concat.apply([],arguments)}function vl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Er(t){return/^[\s\xa0]*$/.test(t)}var Tu=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ve(t,e){return t.indexOf(e)!=-1}function Uo(t,e){return t<e?-1:t>e?1:0}var Be;e:{var bu=$.navigator;if(bu){var Au=bu.userAgent;if(Au){Be=Au;break e}}Be=""}function wl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function dd(t){const e={};for(const n in t)e[n]=t[n];return e}var Su="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pd(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Su.length;r++)n=Su[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function _l(t){return _l[" "](t),t}_l[" "]=_r;function GE(t){var e=JE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var XE=Ve(Be,"Opera"),rs=Ve(Be,"Trident")||Ve(Be,"MSIE"),gd=Ve(Be,"Edge"),_a=gd||rs,md=Ve(Be,"Gecko")&&!(Ve(Be.toLowerCase(),"webkit")&&!Ve(Be,"Edge"))&&!(Ve(Be,"Trident")||Ve(Be,"MSIE"))&&!Ve(Be,"Edge"),YE=Ve(Be.toLowerCase(),"webkit")&&!Ve(Be,"Edge");function yd(){var t=$.document;return t?t.documentMode:void 0}var Ir;e:{var Fo="",Vo=function(){var t=Be;if(md)return/rv:([^\);]+)(\)|;)/.exec(t);if(gd)return/Edge\/([\d\.]+)/.exec(t);if(rs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YE)return/WebKit\/(\S+)/.exec(t);if(XE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vo&&(Fo=Vo?Vo[1]:""),rs){var Bo=yd();if(Bo!=null&&Bo>parseFloat(Fo)){Ir=String(Bo);break e}}Ir=Fo}var JE={};function QE(){return GE(function(){let t=0;const e=Tu(String(Ir)).split("."),n=Tu("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Uo(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Uo(i[2].length==0,r[2].length==0)||Uo(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Ea;if($.document&&rs){var Cu=yd();Ea=Cu||parseInt(Ir,10)||void 0}else Ea=void 0;var ZE=Ea,eI=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",_r,e),$.removeEventListener("test",_r,e)}catch{}return t}();function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};function Zs(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(md){e:{try{_l(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:tI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zs.Z.h.call(this)}}Me(Zs,Le);var tI={2:"touch",3:"pen",4:"mouse"};Zs.prototype.h=function(){Zs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bi="closure_listenable_"+(1e6*Math.random()|0),nI=0;function sI(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++nI,this.ca=this.fa=!1}function Qr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Zr(t){this.src=t,this.g={},this.h=0}Zr.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ta(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new sI(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function Ia(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=hd(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Qr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ta(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var El="closure_lm_"+(1e6*Math.random()|0),$o={};function vd(t,e,n,s,i){if(s&&s.once)return _d(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)vd(t,e[r],n,s,i);return null}return n=bl(n),t&&t[bi]?t.N(e,n,Ti(s)?!!s.capture:!!s,i):wd(t,e,n,!1,s,i)}function wd(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ti(i)?!!i.capture:!!i,a=Tl(t);if(a||(t[El]=a=new Zr(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=iI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)eI||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Id(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function iI(){function t(n){return e.call(t.src,t.listener,n)}var e=rI;return t}function _d(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)_d(t,e[r],n,s,i);return null}return n=bl(n),t&&t[bi]?t.O(e,n,Ti(s)?!!s.capture:!!s,i):wd(t,e,n,!0,s,i)}function Ed(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ed(t,e[r],n,s,i);else s=Ti(s)?!!s.capture:!!s,n=bl(n),t&&t[bi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ta(r,n,s,i),-1<n&&(Qr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Tl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ta(e,n,s,i)),(n=-1<t?e[t]:null)&&Il(n))}function Il(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[bi])Ia(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Id(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Tl(e))?(Ia(n,t),n.h==0&&(n.src=null,e[El]=null)):Qr(t)}}}function Id(t){return t in $o?$o[t]:$o[t]="on"+t}function rI(t,e){if(t.ca)t=!0;else{e=new Zs(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Il(t),t=n.call(s,e)}return t}function Tl(t){return t=t[El],t instanceof Zr?t:null}var jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function bl(t){return typeof t=="function"?t:(t[jo]||(t[jo]=function(e){return t.handleEvent(e)}),t[jo])}function Ce(){rn.call(this),this.i=new Zr(this),this.P=this,this.I=null}Me(Ce,rn);Ce.prototype[bi]=!0;Ce.prototype.removeEventListener=function(t,e,n,s){Ed(this,t,e,n,s)};function Pe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var i=e;e=new Le(s,t),pd(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ki(o,s,!0,e)&&i}if(o=e.g=t,i=Ki(o,s,!0,e)&&i,i=Ki(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ki(o,s,!1,e)&&i}Ce.prototype.M=function(){if(Ce.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Qr(n[s]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ce.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ki(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Ia(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Al=$.JSON.stringify;function oI(){var t=bd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class aI{constructor(){this.h=this.g=null}add(e,n){const s=Td.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Td=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new lI,t=>t.reset());class lI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cI(t){$.setTimeout(()=>{throw t},0)}function Sl(t,e){ba||uI(),Aa||(ba(),Aa=!0),bd.add(t,e)}var ba;function uI(){var t=$.Promise.resolve(void 0);ba=function(){t.then(hI)}}var Aa=!1,bd=new aI;function hI(){for(var t;t=oI();){try{t.h.call(t.g)}catch(n){cI(n)}var e=Td;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Aa=!1}function eo(t,e){Ce.call(this),this.h=t||1,this.g=e||$,this.j=Oe(this.kb,this),this.l=Date.now()}Me(eo,Ce);O=eo.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Pe(this,"tick"),this.da&&(Cl(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){eo.Z.M.call(this),Cl(this),delete this.g};function Rl(t,e,n){if(typeof t=="function")n&&(t=Oe(t,n));else if(t&&typeof t.handleEvent=="function")t=Oe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Ad(t){t.g=Rl(()=>{t.g=null,t.i&&(t.i=!1,Ad(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fI extends rn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ad(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ei(t){rn.call(this),this.h=t,this.g={}}Me(ei,rn);var Ru=[];function Sd(t,e,n,s){Array.isArray(n)||(n&&(Ru[0]=n.toString()),n=Ru);for(var i=0;i<n.length;i++){var r=vd(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Cd(t){wl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Il(e)},t),t.g={}}ei.prototype.M=function(){ei.Z.M.call(this),Cd(this)};ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function to(){this.g=!0}to.prototype.Aa=function(){this.g=!1};function dI(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function pI(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Kn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mI(t,n)+(s?" "+s:"")})}function gI(t,e){t.info(function(){return"TIMEOUT: "+e})}to.prototype.info=function(){};function mI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Al(n)}catch{return e}}var Pn={},ku=null;function no(){return ku=ku||new Ce}Pn.Ma="serverreachability";function Rd(t){Le.call(this,Pn.Ma,t)}Me(Rd,Le);function ti(t){const e=no();Pe(e,new Rd(e))}Pn.STAT_EVENT="statevent";function kd(t,e){Le.call(this,Pn.STAT_EVENT,t),this.stat=e}Me(kd,Le);function $e(t){const e=no();Pe(e,new kd(e,t))}Pn.Na="timingevent";function Nd(t,e){Le.call(this,Pn.Na,t),this.size=e}Me(Nd,Le);function Ai(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var so={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Od={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function kl(){}kl.prototype.h=null;function Nu(t){return t.h||(t.h=t.i())}function Pd(){}var Si={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Nl(){Le.call(this,"d")}Me(Nl,Le);function Ol(){Le.call(this,"c")}Me(Ol,Le);var Sa;function io(){}Me(io,kl);io.prototype.g=function(){return new XMLHttpRequest};io.prototype.i=function(){return{}};Sa=new io;function Ci(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new ei(this),this.P=yI,t=_a?125:void 0,this.W=new eo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Dd}function Dd(){this.i=null,this.g="",this.h=!1}var yI=45e3,Ca={},Tr={};O=Ci.prototype;O.setTimeout=function(t){this.P=t};function Ra(t,e,n){t.K=1,t.v=oo(xt(e)),t.s=n,t.U=!0,Md(t,null)}function Md(t,e){t.F=Date.now(),Ri(t),t.A=xt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),$d(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Dd,t.g=ap(t.l,n?e:null,!t.s),0<t.O&&(t.L=new fI(Oe(t.Ia,t,t.g),t.O)),Sd(t.V,t.g,"readystatechange",t.gb),e=t.H?dd(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ti(),dI(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&Ot(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=Ot(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>u)&&(u!=3||_a||this.g&&(this.h.h||this.g.ga()||Mu(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?ti(3):ti(2)),ro(this);var n=this.g.ba();this.N=n;t:if(xd(this)){var s=Mu(this.g);t="";var i=s.length,r=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){dn(this),Us(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,pI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Er(a)){var c=a;break t}}c=null}if(n=c)Kn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ka(this,n);else{this.i=!1,this.o=3,$e(12),dn(this),Us(this);break e}}this.U?(Ld(this,u,o),_a&&this.i&&u==3&&(Sd(this.V,this.W,"tick",this.fb),this.W.start())):(Kn(this.j,this.m,o,null),ka(this,o)),u==4&&dn(this),this.i&&!this.I&&(u==4?sp(this.l,this):(this.i=!1,Ri(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$e(12)):(this.o=0,$e(13)),dn(this),Us(this)}}}catch{}finally{}};function xd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ld(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=vI(t,n),i==Tr){e==4&&(t.o=4,$e(14),s=!1),Kn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ca){t.o=4,$e(15),Kn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Kn(t.j,t.m,i,null),ka(t,i);xd(t)&&i!=Tr&&i!=Ca&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$e(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bl(e),e.L=!0,$e(11))):(Kn(t.j,t.m,n,"[Invalid Chunked Response]"),dn(t),Us(t))}O.fb=function(){if(this.g){var t=Ot(this.g),e=this.g.ga();this.C<e.length&&(ro(this),Ld(this,t,e),this.i&&t!=4&&Ri(this))}};function vI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Tr:(n=Number(e.substring(n,s)),isNaN(n)?Ca:(s+=1,s+n>e.length?Tr:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,dn(this)};function Ri(t){t.Y=Date.now()+t.P,Ud(t,t.P)}function Ud(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ai(Oe(t.eb,t),e)}function ro(t){t.B&&($.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gI(this.j,this.A),this.K!=2&&(ti(),$e(17)),dn(this),this.o=2,Us(this)):Ud(this,this.Y-t)};function Us(t){t.l.G==0||t.I||sp(t.l,t)}function dn(t){ro(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Cl(t.W),Cd(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ka(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Na(n.i,t))){if(n.I=t.N,!t.J&&Na(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Cr(n),co(n);else break e;Vl(n),$e(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ai(Oe(n.ab,n),6e3));if(1>=Kd(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else pn(n,11)}else if((t.J||n.g==t)&&Cr(n),!Er(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const f=c[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var r=s.i;!r.g&&(Ve(w,"spdy")||Ve(w,"quic")||Ve(w,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ml(r,r.h),r.h=null))}if(s.D){const P=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(s.sa=P,pe(s.F,s.D,P))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=op(s,s.H?s.la:null,s.W),o.J){qd(s.i,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(ro(a),Ri(a)),s.g=o}else tp(s);0<n.l.length&&uo(n)}else c[0]!="stop"&&c[0]!="close"||pn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?pn(n,7):Fl(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}ti(4)}catch{}}function wI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(wa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Pl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wa(t)||typeof t=="string")fd(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(wa(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=wI(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function gs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof gs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=gs.prototype;O.R=function(){Dl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return Dl(this),this.g.concat()};function Dl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];bn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],bn(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}O.get=function(t,e){return bn(this.h,t)?this.h[t]:e};O.set=function(t,e){bn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Fd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function _I(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function An(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof An){this.g=e!==void 0?e:t.g,br(this,t.j),this.s=t.s,Ar(this,t.i),Sr(this,t.m),this.l=t.l,e=t.h;var n=new ni;n.i=e.i,e.g&&(n.g=new gs(e.g),n.h=e.h),Ou(this,n),this.o=t.o}else t&&(n=String(t).match(Fd))?(this.g=!!e,br(this,n[1]||"",!0),this.s=Fs(n[2]||""),Ar(this,n[3]||"",!0),Sr(this,n[4]),this.l=Fs(n[5]||"",!0),Ou(this,n[6]||"",!0),this.o=Fs(n[7]||"")):(this.g=!!e,this.h=new ni(null,this.g))}An.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ks(e,Pu,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ks(e,Pu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ks(n,n.charAt(0)=="/"?AI:bI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ks(n,CI)),t.join("")};function xt(t){return new An(t)}function br(t,e,n){t.j=n?Fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ar(t,e,n){t.i=n?Fs(e,!0):e}function Sr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ou(t,e,n){e instanceof ni?(t.h=e,RI(t.h,t.g)):(n||(e=ks(e,SI)),t.h=new ni(e,t.g))}function pe(t,e,n){t.h.set(e,n)}function oo(t){return pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function EI(t){return t instanceof An?xt(t):new An(t,void 0)}function II(t,e,n,s){var i=new An(null,void 0);return t&&br(i,t),e&&Ar(i,e),n&&Sr(i,n),s&&(i.l=s),i}function Fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pu=/[#\/\?@]/g,bI=/[#\?:]/g,AI=/[#\?]/g,SI=/[#\?@]/g,CI=/#/g;function ni(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function on(t){t.g||(t.g=new gs,t.h=0,t.i&&_I(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ni.prototype;O.add=function(t,e){on(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Vd(t,e){on(t),e=ms(t,e),bn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,bn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Dl(t)))}function Bd(t,e){return on(t),e=ms(t,e),bn(t.g.h,e)}O.forEach=function(t,e){on(this),this.g.forEach(function(n,s){fd(n,function(i){t.call(e,i,s,this)},this)},this)};O.T=function(){on(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};O.R=function(t){on(this);var e=[];if(typeof t=="string")Bd(this,t)&&(e=Iu(e,this.g.get(ms(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Iu(e,t[n])}return e};O.set=function(t,e){return on(this),this.i=null,t=ms(this,t),Bd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function $d(t,e,n){Vd(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),vl(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RI(t,e){e&&!t.j&&(on(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Vd(this,s),$d(this,i,n))},t)),t.j=e}var kI=class{constructor(t,e){this.h=t,this.g=e}};function jd(t){this.l=t||NI,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NI=10;function Hd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Kd(t){return t.h?1:t.g?t.g.size:0}function Na(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ml(t,e){t.g?t.g.add(e):t.h=e}function qd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jd.prototype.cancel=function(){if(this.i=zd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return vl(t.i)}function xl(){}xl.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};xl.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function OI(){this.g=new xl}function PI(t,e,n){const s=n||"";try{Pl(t,function(i,r){let o=i;Ti(i)&&(o=Al(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function DI(t,e){const n=new to;if($.Image){const s=new Image;s.onload=Hi(qi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Hi(qi,n,s,"TestLoadImage: error",!1,e),s.onabort=Hi(qi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Hi(qi,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function qi(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function ki(t){this.l=t.$b||null,this.j=t.ib||!1}Me(ki,kl);ki.prototype.g=function(){return new ao(this.l,this.j)};ki.prototype.i=function(t){return function(){return t}}({});function ao(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ll,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(ao,Ce);var Ll=0;O=ao.prototype;O.open=function(t,e){if(this.readyState!=Ll)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,si(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=Ll};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wd(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Wd(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ni(this):si(this),this.readyState==3&&Wd(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,Ni(this))};O.Ta=function(t){this.g&&(this.response=t,Ni(this))};O.ha=function(){this.g&&Ni(this)};function Ni(t){t.readyState=4,t.l=null,t.j=null,t.A=null,si(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function si(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var MI=$.JSON.parse;function we(t){Ce.call(this),this.headers=new gs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Gd,this.K=this.L=!1}Me(we,Ce);var Gd="",xI=/^https?$/i,LI=["POST","PUT"];O=we.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Sa.g(),this.C=this.u?Nu(this.u):Nu(Sa),this.g.onreadystatechange=Oe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Du(this,r);return}t=n||"";const i=new gs(this.headers);s&&Pl(s,function(r,o){i.set(o,r)}),s=WE(i.T()),n=$.FormData&&t instanceof $.FormData,!(0<=hd(LI,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jd(this),0<this.B&&((this.K=UI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Oe(this.pa,this)):this.A=Rl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Du(this,r)}};function UI(t){return rs&&QE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function FI(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof yl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function Du(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xd(t),lo(t)}function Xd(t){t.D||(t.D=!0,Pe(t,"complete"),Pe(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),lo(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lo(this,!0)),we.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Yd(this):this.cb())};O.cb=function(){Yd(this)};function Yd(t){if(t.h&&typeof yl!="undefined"&&(!t.C[1]||Ot(t)!=4||t.ba()!=2)){if(t.v&&Ot(t)==4)Rl(t.Fa,0,t);else if(Pe(t,"readystatechange"),Ot(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Fd)[1]||null;if(!i&&$.self&&$.self.location){var r=$.self.location.protocol;i=r.substr(0,r.length-1)}s=!xI.test(i?i.toLowerCase():"")}n=s}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var o=2<Ot(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Xd(t)}}finally{lo(t)}}}}function lo(t,e){if(t.g){Jd(t);const n=t.g,s=t.C[0]?_r:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Jd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Ot(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),MI(e)}};function Mu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Gd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function VI(t){let e="";return wl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ul(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=VI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pe(t,e,n))}function Ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qd(t){this.za=0,this.l=[],this.h=new to,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ts("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ts("baseRetryDelayMs",5e3,t),this.$a=Ts("retryDelaySeedMs",1e4,t),this.Ya=Ts("forwardChannelMaxRetries",2,t),this.ra=Ts("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new jd(t&&t.concurrentRequestLimit),this.Ca=new OI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=Qd.prototype;O.ma=8;O.G=1;function Fl(t){if(Zd(t),t.G==3){var e=t.V++,n=xt(t.F);pe(n,"SID",t.J),pe(n,"RID",e),pe(n,"TYPE","terminate"),Oi(t,n),e=new Ci(t,t.h,e,void 0),e.K=2,e.v=oo(xt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=ap(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ri(e)}rp(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function co(t){t.g&&(Bl(t),t.g.cancel(),t.g=null)}function Zd(t){co(t),t.u&&($.clearTimeout(t.u),t.u=null),Cr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Ho(t,e){t.l.push(new kI(t.Za++,e)),t.G==3&&uo(t)}function uo(t){Hd(t.i)||t.m||(t.m=!0,Sl(t.Ha,t),t.C=0)}function BI(t,e){return Kd(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ai(Oe(t.Ha,t,e),ip(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ci(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=dd(r),pd(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ep(this,i,e),n=xt(this.F),pe(n,"RID",t),pe(n,"CVER",22),this.D&&pe(n,"X-HTTP-Session-Id",this.D),Oi(this,n),this.o&&r&&Ul(n,this.o,r),Ml(this.i,i),this.Ra&&pe(n,"TYPE","init"),this.ja?(pe(n,"$req",e),pe(n,"SID","null"),i.$=!0,Ra(i,n,null)):Ra(i,n,e),this.G=2}}else this.G==3&&(t?xu(this,t):this.l.length==0||Hd(this.i)||xu(this))};function xu(t,e){var n;e?n=e.m:n=t.V++;const s=xt(t.F);pe(s,"SID",t.J),pe(s,"RID",n),pe(s,"AID",t.U),Oi(t,s),t.o&&t.s&&Ul(s,t.o,t.s),n=new Ci(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ep(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ml(t.i,n),Ra(n,s,e)}function Oi(t,e){t.j&&Pl({},function(n,s){pe(e,s,n)})}function ep(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Oe(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{PI(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function tp(t){t.g||t.u||(t.Y=1,Sl(t.Ga,t),t.A=0)}function Vl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ai(Oe(t.Ga,t),ip(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,np(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ai(Oe(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,$e(10),co(this),np(this))};function Bl(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function np(t){t.g=new Ci(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=xt(t.oa);pe(e,"RID","rpc"),pe(e,"SID",t.J),pe(e,"CI",t.N?"0":"1"),pe(e,"AID",t.U),Oi(t,e),pe(e,"TYPE","xmlhttp"),t.o&&t.s&&Ul(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=oo(xt(e)),n.s=null,n.U=!0,Md(n,t)}O.ab=function(){this.v!=null&&(this.v=null,co(this),Vl(this),$e(19))};function Cr(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function sp(t,e){var n=null;if(t.g==e){Cr(t),Bl(t),t.g=null;var s=2}else if(Na(t.i,e))n=e.D,qd(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=no(),Pe(s,new Nd(s,n)),uo(t)}else tp(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&BI(t,e)||s==2&&Vl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:pn(t,5);break;case 4:pn(t,10);break;case 3:pn(t,6);break;default:pn(t,2)}}}function ip(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function pn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Oe(t.jb,t);n||(n=new An("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||br(n,"https"),oo(n)),DI(n.toString(),s)}else $e(2);t.G=0,t.j&&t.j.va(e),rp(t),Zd(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),$e(2)):(this.h.info("Failed to ping google.com"),$e(1))};function rp(t){t.G=0,t.I=-1,t.j&&((zd(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,vl(t.l),t.l.length=0),t.j.ua())}function op(t,e,n){let s=EI(n);if(s.i!="")e&&Ar(s,e+"."+s.i),Sr(s,s.m);else{const i=$.location;s=II(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&wl(t.aa,function(i,r){pe(s,r,i)}),e=t.D,n=t.sa,e&&n&&pe(s,e,n),pe(s,"VER",t.ma),Oi(t,s),s}function ap(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new we(new ki({ib:!0})):new we(t.qa),e.L=t.H,e}function lp(){}O=lp.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function Rr(){if(rs&&!(10<=Number(ZE)))throw Error("Environmental error: no available transport.")}Rr.prototype.g=function(t,e){return new et(t,e)};function et(t,e){Ce.call(this),this.g=new Qd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Er(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Er(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ys(this)}Me(et,Ce);et.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Sl(Oe(t.hb,t,e))),$e(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=op(t,null,t.W),uo(t)};et.prototype.close=function(){Fl(this.g)};et.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ho(this.g,e)}else this.v?(e={},e.__data__=Al(t),Ho(this.g,e)):Ho(this.g,t)};et.prototype.M=function(){this.g.j=null,delete this.j,Fl(this.g),delete this.g,et.Z.M.call(this)};function cp(t){Nl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(cp,Nl);function up(){Ol.call(this),this.status=1}Me(up,Ol);function ys(t){this.g=t}Me(ys,lp);ys.prototype.xa=function(){Pe(this.g,"a")};ys.prototype.wa=function(t){Pe(this.g,new cp(t))};ys.prototype.va=function(t){Pe(this.g,new up)};ys.prototype.ua=function(){Pe(this.g,"b")};Rr.prototype.createWebChannel=Rr.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;so.NO_ERROR=0;so.TIMEOUT=8;so.HTTP_ERROR=6;Od.COMPLETE="complete";Pd.EventType=Si;Si.OPEN="a";Si.CLOSE="b";Si.ERROR="c";Si.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.La;we.prototype.getLastErrorCode=we.prototype.Da;we.prototype.getStatus=we.prototype.ba;we.prototype.getResponseJson=we.prototype.Qa;we.prototype.getResponseText=we.prototype.ga;we.prototype.send=we.prototype.ea;var $I=function(){return new Rr},jI=function(){return no()},Ko=so,HI=Od,KI=Pn,Lu={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},qI=ki,zi=Pd,zI=we;const Uu="@firebase/firestore";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let vs="9.8.0";/**
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
 */const Sn=new tl("@firebase/firestore");function Fu(){return Sn.logLevel}function V(t,...e){if(Sn.logLevel<=te.DEBUG){const n=e.map($l);Sn.debug(`Firestore (${vs}): ${t}`,...n)}}function Cn(t,...e){if(Sn.logLevel<=te.ERROR){const n=e.map($l);Sn.error(`Firestore (${vs}): ${t}`,...n)}}function Vu(t,...e){if(Sn.logLevel<=te.WARN){const n=e.map($l);Sn.warn(`Firestore (${vs}): ${t}`,...n)}}function $l(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw Cn(e),new Error(e)}function Ie(t,e){t||ee()}function de(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class WI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class XI{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string"),new WI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new ze(e)}}class YI{constructor(e,n,s){this.type="FirstParty",this.user=ze.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class JI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new YI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.p=n.token,new QI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class hp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function e0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */hp.A=-1;class fp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=e0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function he(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new je(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new je(0,0))}static max(){return new ve(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Bu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ii{constructor(e,n,s){n===void 0?n=0:n>e.length&&ee(),s===void 0?s=e.length-n:s>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ii?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends ii{construct(e,n,s){return new ye(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const t0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends ii{construct(e,n,s){return new We(e,n,s)}static isValidIdentifier(e){return t0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new q(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new q(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class Oa{constructor(e){this.fields=e,e.sort(We.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const n0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=n0.exec(t);if(Ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?Lt.fromBase64String(t):Lt.fromUint8Array(t)}/**
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
 */function s0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kr(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class i0{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function jl(t){return t==null}function Nr(t){return t===0&&1/t==-1/0}function r0(t){return typeof t=="number"&&Number.isInteger(t)&&!Nr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ye.fromString(e))}static fromName(e){return new W(ye.fromString(e).popFirst(5))}static empty(){return new W(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ye(e.slice()))}}/**
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
 */const Wi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?s0(t)?4:o0(t)?9007199254740991:10:ee()}function bt(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kr(t).isEqual(kr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Rn(s.timestampValue),o=Rn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ri(s.bytesValue).isEqual(ri(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Re(s.geoPointValue.latitude)===Re(i.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Re(s.integerValue)===Re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Re(s.doubleValue),o=Re(i.doubleValue);return r===o?Nr(r)===Nr(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Bu(r)!==Bu(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!bt(r[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function ai(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=as(t),s=as(e);if(n!==s)return he(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Re(i.integerValue||i.doubleValue),a=Re(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $u(t.timestampValue,e.timestampValue);case 4:return $u(kr(t),kr(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,r){const o=ri(i),a=ri(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=he(o[l],a[l]);if(c!==0)return c}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=he(Re(i.latitude),Re(r.latitude));return o!==0?o:he(Re(i.longitude),Re(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ls(o[l],a[l]);if(c)return c}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Wi.mapValue&&r===Wi.mapValue)return 0;if(i===Wi.mapValue)return 1;if(r===Wi.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=he(a[u],c[u]);if(f!==0)return f;const d=ls(o[a[u]],l[c[u]]);if(d!==0)return d}return he(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ee()}}function $u(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Rn(t),s=Rn(e),i=he(n.seconds,s.seconds);return i!==0?i:he(n.nanos,s.nanos)}function Jn(t){return Pa(t)}function Pa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Rn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ri(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Pa(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Pa(s.fields[a])}`;return r+"}"}(t.mapValue):ee();var e,n}function Da(t){return!!t&&"integerValue"in t}function Hl(t){return!!t&&"arrayValue"in t}function rr(t){return!!t&&"mapValue"in t}function Vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Vs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function o0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!rr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(n)}setAll(e){let n=We.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Vs(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());rr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];rr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Pi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new _t(Vs(this.value))}}function pp(t){const e=[];return Pi(t.fields,(n,s)=>{const i=new We([n]);if(rr(s)){const r=pp(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Oa(e)}/**
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
 */class rt{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new rt(e,0,ve.min(),ve.min(),_t.empty(),0)}static newFoundDocument(e,n,s){return new rt(e,1,n,ve.min(),s,0)}static newNoDocument(e,n){return new rt(e,2,n,ve.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,ve.min(),_t.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function a0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(s===1e9?new je(n+1,0):new je(n,s));return new kn(i,W.empty(),e)}function l0(t){return new kn(t.readTime,t.key,-1)}class kn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new kn(ve.min(),W.empty(),-1)}static max(){return new kn(ve.max(),W.empty(),-1)}}function c0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */class tt{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gi(this.root,e,this.comparator,!0)}}class Gi{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ke.RED,this.left=i!=null?i:ke.EMPTY,this.right=r!=null?r:ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ke(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ju(this.data.getIterator())}getIteratorFrom(e){return new ju(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class ju{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class u0{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function Hu(t,e=null,n=[],s=[],i=null,r=null,o=null){return new u0(t,e,n,s,i,r,o)}function Kl(t){const e=de(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Jn(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Jn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Jn(s)).join(",")),e.P=n}return e.P}function h0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Jn(s.value)}`;var s}).join(", ")}]`),jl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Jn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Jn(n)).join(",")),`Target(${e})`}function ql(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!w0(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!bt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qu(t.startAt,e.startAt)&&qu(t.endAt,e.endAt)}class Ge extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new f0(e,n,s):n==="array-contains"?new g0(e,s):n==="in"?new m0(e,s):n==="not-in"?new y0(e,s):n==="array-contains-any"?new v0(e,s):new Ge(e,n,s)}static V(e,n,s){return n==="in"?new d0(e,s):new p0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(ls(n,this.value)):n!==null&&as(this.value)===as(n)&&this.v(ls(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class f0 extends Ge{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.v(n)}}class d0 extends Ge{constructor(e,n){super(e,"in",n),this.keys=gp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class p0 extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=gp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class g0 extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hl(n)&&ai(n.arrayValue,this.value)}}class m0 extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ai(this.value.arrayValue,n)}}class y0 extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ai(this.value.arrayValue,n)}}class v0 extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ai(this.value.arrayValue,s))}}class Or{constructor(e,n){this.position=e,this.inclusive=n}}class Bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function w0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ku(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=ls(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function qu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ho{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function _0(t,e,n,s,i,r,o,a){return new ho(t,e,n,s,i,r,o,a)}function E0(t){return new ho(t)}function I0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function T0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function b0(t){for(const e of t.filters)if(e.S())return e.field;return null}function A0(t){return t.collectionGroup!==null}function li(t){const e=de(t);if(e.D===null){e.D=[];const n=b0(e),s=T0(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Bs(n)),e.D.push(new Bs(We.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Bs(We.keyField(),r))}}}return e.D}function Pr(t){const e=de(t);if(!e.C)if(e.limitType==="F")e.C=Hu(e.path,e.collectionGroup,li(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of li(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Bs(r.field,o))}const s=e.endAt?new Or(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Or(e.startAt.position,e.startAt.inclusive):null;e.C=Hu(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.C}function S0(t,e,n){return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mp(t,e){return ql(Pr(t),Pr(e))&&t.limitType===e.limitType}function yp(t){return`${Kl(Pr(t))}|lt:${t.limitType}`}function zu(t){return`Query(target=${h0(Pr(t))}; limitType=${t.limitType})`}function vp(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):W.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Ku(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,li(n),s)||n.endAt&&!function(i,r,o){const a=Ku(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,li(n),s))}(t,e)}function C0(t){return(e,n)=>{let s=!1;for(const i of li(t)){const r=R0(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function R0(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ls(a,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ee()}}/**
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
 */function wp(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nr(e)?"-0":e}}function _p(t){return{integerValue:""+t}}function k0(t,e){return r0(e)?_p(e):wp(t,e)}/**
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
 */class fo{constructor(){this._=void 0}}function N0(t,e,n){return t instanceof Dr?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ci?Ip(t,e):t instanceof ui?Tp(t,e):function(s,i){const r=Ep(s,i),o=Wu(r)+Wu(s.k);return Da(r)&&Da(s.k)?_p(o):wp(s.M,o)}(t,e)}function O0(t,e,n){return t instanceof ci?Ip(t,e):t instanceof ui?Tp(t,e):n}function Ep(t,e){return t instanceof Mr?Da(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Dr extends fo{}class ci extends fo{constructor(e){super(),this.elements=e}}function Ip(t,e){const n=bp(e);for(const s of t.elements)n.some(i=>bt(i,s))||n.push(s);return{arrayValue:{values:n}}}class ui extends fo{constructor(e){super(),this.elements=e}}function Tp(t,e){let n=bp(e);for(const s of t.elements)n=n.filter(i=>!bt(i,s));return{arrayValue:{values:n}}}class Mr extends fo{constructor(e,n){super(),this.M=e,this.k=n}}function Wu(t){return Re(t.integerValue||t.doubleValue)}function bp(t){return Hl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function P0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ci&&s instanceof ci||n instanceof ui&&s instanceof ui?os(n.elements,s.elements,bt):n instanceof Mr&&s instanceof Mr?bt(n.k,s.k):n instanceof Dr&&s instanceof Dr}(t.transform,e.transform)}class D0{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function or(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class po{}function M0(t,e,n){t instanceof go?function(s,i,r){const o=s.value.clone(),a=Yu(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Di?function(s,i,r){if(!or(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Yu(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ap(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Ma(t,e,n){t instanceof go?function(s,i,r){if(!or(s.precondition,i))return;const o=s.value.clone(),a=Ju(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Xu(i),o).setHasLocalMutations()}(t,e,n):t instanceof Di?function(s,i,r){if(!or(s.precondition,i))return;const o=Ju(s.fieldTransforms,r,i),a=i.data;a.setAll(Ap(s)),a.setAll(o),i.convertToFoundDocument(Xu(i),a).setHasLocalMutations()}(t,e,n):function(s,i){or(s.precondition,i)&&i.convertToNoDocument(ve.min())}(t,e)}function x0(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Ep(s.transform,i||null);r!=null&&(n==null&&(n=_t.empty()),n.set(s.field,r))}return n||null}function Gu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&os(n,s,(i,r)=>P0(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Xu(t){return t.isFoundDocument()?t.version:ve.min()}class go extends po{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Di extends po{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Ap(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Yu(t,e,n){const s=new Map;Ie(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,O0(o,a,n[i]))}return s}function Ju(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,N0(r,o,e))}return s}class L0 extends po{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class U0 extends po{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */var me,J;function F0(t){switch(t){default:return ee();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function V0(t){if(t===void 0)return Cn("GRPC error has no .code"),b.UNKNOWN;switch(t){case me.OK:return b.OK;case me.CANCELLED:return b.CANCELLED;case me.UNKNOWN:return b.UNKNOWN;case me.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case me.INTERNAL:return b.INTERNAL;case me.UNAVAILABLE:return b.UNAVAILABLE;case me.UNAUTHENTICATED:return b.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case me.NOT_FOUND:return b.NOT_FOUND;case me.ALREADY_EXISTS:return b.ALREADY_EXISTS;case me.PERMISSION_DENIED:return b.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case me.ABORTED:return b.ABORTED;case me.OUT_OF_RANGE:return b.OUT_OF_RANGE;case me.UNIMPLEMENTED:return b.UNIMPLEMENTED;case me.DATA_LOSS:return b.DATA_LOSS;default:return ee()}}(J=me||(me={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return dp(this.inner)}size(){return this.innerSize}}/**
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
 */const B0=new tt(W.comparator);function Qu(){return B0}const $0=new tt(W.comparator);function Zu(...t){let e=$0;for(const n of t)e=e.insert(n.key,n);return e}function qo(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const j0=new tt(W.comparator),H0=new Qe(W.comparator);function Nn(...t){let e=H0;for(const n of t)e=e.add(n);return e}const K0=new Qe(he);function q0(){return K0}class z0{constructor(e,n){this.databaseId=e,this.N=n}}function xa(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W0(t,e){return t.N?e.toBase64():e.toUint8Array()}function G0(t,e){return xa(t,e.toTimestamp())}function Zn(t){return Ie(!!t),ve.fromTimestamp(function(e){const n=Rn(e);return new je(n.seconds,n.nanos)}(t))}function Sp(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function X0(t){const e=ye.fromString(t);return Ie(rT(e)),e}function La(t,e){return Sp(t.databaseId,e.path)}function Y0(t){const e=X0(t);return e.length===4?ye.emptyPath():Q0(e)}function J0(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Q0(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function eh(t,e,n){return{name:La(t,e),fields:n.value.mapValue.fields}}function Z0(t,e){let n;if(e instanceof go)n={update:eh(t,e.key,e.value)};else if(e instanceof L0)n={delete:La(t,e.key)};else if(e instanceof Di)n={update:eh(t,e.key,e.data),updateMask:iT(e.fieldMask)};else{if(!(e instanceof U0))return ee();n={verify:La(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Dr)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ci)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ui)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Mr)return{fieldPath:r.field.canonicalString(),increment:o.k};throw ee()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:G0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function eT(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Zn(s.updateTime):Zn(i);return r.isEqual(ve.min())&&(r=Zn(i)),new D0(r,s.transformResults||[])}(n,e))):[]}function tT(t){let e=Y0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ie(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=Cp(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Bs(qn(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,jl(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(u){const f=!!u.before,d=u.values||[];return new Or(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const f=!u.before,d=u.values||[];return new Or(d,f)}(n.endAt)),_0(e,i,o,r,a,"F",l,c)}function Cp(t){return t?t.unaryFilter!==void 0?[sT(t)]:t.fieldFilter!==void 0?[nT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Cp(e)).reduce((e,n)=>e.concat(n)):ee():[]}function qn(t){return We.fromServerFormat(t.fieldPath)}function nT(t){return Ge.create(qn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function sT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qn(t.unaryFilter.field);return Ge.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qn(t.unaryFilter.field);return Ge.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qn(t.unaryFilter.field);return Ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qn(t.unaryFilter.field);return Ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function iT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const oT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(i=>i?A.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function mo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lT{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&M0(r,e,s[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Ma(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Ma(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(ve.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Nn())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,s)=>Gu(n,s))&&os(this.baseMutations,e.baseMutations,(n,s)=>Gu(n,s))}}class zl{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ie(e.mutations.length===s.length);let i=j0;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new zl(e,n,s,i)}}/**
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
 */class cT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uT{constructor(e){this.Jt=e}}function hT(t){const e=tT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?S0(e,e.limit,"L"):e}/**
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
 */class fT{constructor(){this.qe=new dT}addToCollectionParentIndex(e,n){return this.qe.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(kn.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class dT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Qe(ye.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Qe(ye.comparator)).toArray()}}/**
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
 */class cs{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new cs(0)}static yn(){return new cs(-1)}}/**
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
 */async function Rp(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==oT)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class pT{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gT{constructor(e,n,s){this.ds=e,this.Bs=n,this.indexManager=s}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Us(e,n,s))}Us(e,n,s){return this.ds.getEntry(e,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}qs(e,n){e.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Ks(e,n){return this.ds.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Qs(e,n,s){return function(i){return W.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(e,n.path):A0(n)?this.Ws(e,n,s):this.zs(e,n,s)}js(e,n){return this.Ls(e,new W(n)).next(s=>{let i=Zu();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Ws(e,n,s){const i=n.collectionGroup;let r=Zu();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(c,u){return new ho(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.zs(e,l,s).next(c=>{c.forEach((u,f)=>{r=r.insert(u,f)})})}).next(()=>r))}zs(e,n,s){let i;return this.ds.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(r=>{for(const o of r)for(const a of o.mutations){const l=a.key;let c=i.get(l);c==null&&(c=rt.newInvalidDocument(l),i=i.insert(l,c)),Ma(a,c,o.localWriteTime),c.isFoundDocument()||(i=i.remove(l))}}).next(()=>(i.forEach((r,o)=>{vp(n,o)||(i=i.remove(r))}),i))}}/**
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
 */class Wl{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Hs=s,this.Js=i}static Ys(e,n){let s=Nn(),i=Nn();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Wl(e,n.fromCache,s,i)}}/**
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
 */class mT{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,s,i){return this.ti(e,n).next(r=>r||this.ei(e,n,i,s)).next(r=>r||this.ni(e,n))}ti(e,n){return A.resolve(null)}ei(e,n,s,i){return I0(n)||i.isEqual(ve.min())?this.ni(e,n):this.Zs.Ks(e,s).next(r=>{const o=this.si(n,r);return this.ii(n,o,s,i)?this.ni(e,n):(Fu()<=te.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zu(n)),this.ri(e,o,n,a0(i,-1)))})}si(e,n){let s=new Qe(C0(e));return n.forEach((i,r)=>{vp(e,r)&&(s=s.add(r))}),s}ii(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ni(e,n){return Fu()<=te.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",zu(n)),this.Zs.Qs(e,n,kn.min())}ri(e,n,s,i){return this.Zs.Qs(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class yT{constructor(e,n,s,i){this.persistence=e,this.oi=n,this.M=i,this.ui=new tt(he),this.ai=new ws(r=>Kl(r),ql),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(s)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new gT(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function vT(t,e,n,s){return new yT(t,e,n,s)}async function kp(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.Bs.getAllMutationBatches(s).next(r=>(i=r,n.li(e),n.Bs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Nn();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.fi.Ks(s,l).next(c=>({di:c,removedBatchIds:o,addedBatchIds:a}))})})}function wT(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,f=u.keys();let d=A.resolve();return f.forEach(m=>{d=d.next(()=>c.getEntry(a,m)).next(w=>{const P=l.docVersions.get(m);Ie(P!==null),w.version.compareTo(P)<0&&(u.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),c.addEntry(w)))})}),d.next(()=>o.Bs.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.fi.Ks(s,i))})}function _T(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function ET(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(s,e)))}/**
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
 */class IT{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return A.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var s;return this.yi.set(n.id,{id:(s=n).id,version:s.version,createTime:Zn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(s){return{name:s.name,query:hT(s.bundledQuery),readTime:Zn(s.readTime)}}(n)),A.resolve()}}/**
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
 */class TT{constructor(){this.overlays=new tt(W.comparator),this.Ii=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.Xt(e,n,r)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Ii.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ii.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const i=qo(),r=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new tt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=qo(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=qo(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return A.resolve(a)}Xt(e,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.Ii.get(i.largestBatchId).delete(s.key);this.Ii.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new cT(n,s));let r=this.Ii.get(n);r===void 0&&(r=Nn(),this.Ii.set(n,r)),this.Ii.set(n,r.add(s.key))}}/**
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
 */class Gl{constructor(){this.Ti=new Qe(Te.Ei),this.Ai=new Qe(Te.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const s=new Te(e,n);this.Ti=this.Ti.add(s),this.Ai=this.Ai.add(s)}bi(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Pi(new Te(e,n))}Vi(e,n){e.forEach(s=>this.removeReference(s,n))}vi(e){const n=new W(new ye([])),s=new Te(n,e),i=new Te(n,e+1),r=[];return this.Ai.forEachInRange([s,i],o=>{this.Pi(o),r.push(o.key)}),r}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new W(new ye([])),s=new Te(n,e),i=new Te(n,e+1);let r=Nn();return this.Ai.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Te(e,0),s=this.Ti.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Te{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return W.comparator(e.key,n.key)||he(e.Ci,n.Ci)}static Ri(e,n){return he(e.Ci,n.Ci)||W.comparator(e.key,n.key)}}/**
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
 */class bT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new Qe(Te.Ei)}checkEmpty(e){return A.resolve(this.Bs.length===0)}addMutationBatch(e,n,s,i){const r=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new lT(r,n,s,i);this.Bs.push(o);for(const a of i)this.Ni=this.Ni.add(new Te(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Mi(s),r=i<0?0:i;return A.resolve(this.Bs.length>r?this.Bs[r]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return A.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),r=[];return this.Ni.forEachInRange([s,i],o=>{const a=this.ki(o.Ci);r.push(a)}),A.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Qe(he);return n.forEach(i=>{const r=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([r,o],a=>{s=s.add(a.Ci)})}),A.resolve(this.Oi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const o=new Te(new W(r),0);let a=new Qe(he);return this.Ni.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Ci)),!0)},o),A.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(s=>{const i=this.ki(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let s=this.Ni;return A.forEach(n.mutations,i=>{const r=new Te(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Ni=s})}_n(e){}containsKey(e,n){const s=new Te(n,0),i=this.Ni.firstAfterOrEqual(s);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,A.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class AT{constructor(e){this.$i=e,this.docs=new tt(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.$i(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let s=Qu();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():rt.newInvalidDocument(i))}),A.resolve(s)}getAllFromCollection(e,n,s){let i=Qu();const r=new W(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c0(l0(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,i){ee()}Bi(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new ST(this)}getSize(e){return A.resolve(this.size)}}class ST extends pT{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class CT{constructor(e){this.persistence=e,this.Li=new ws(n=>Kl(n),ql),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Gl,this.targetCount=0,this.Ki=cs.gn()}forEachTarget(e,n){return this.Li.forEach((s,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ui&&(this.Ui=n),A.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Tn(n),A.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Li.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(r).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Li.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.qi.bi(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.qi.Vi(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qi.Di(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.qi.containsKey(n))}}/**
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
 */class RT{constructor(e,n){this.Gi={},this.overlays={},this.es=new hp(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new CT(this),this.indexManager=new fT,this.ds=function(s){return new AT(s)}(s=>this.referenceDelegate.Qi(s)),this.M=new uT(n),this._s=new IT(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Gi[e.toKey()];return s||(s=new bT(n,this.referenceDelegate),this.Gi[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const i=new kT(this.es.next());return this.referenceDelegate.ji(),s(i).next(r=>this.referenceDelegate.Wi(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}zi(e,n){return A.or(Object.values(this.Gi).map(s=>()=>s.containsKey(e,n)))}}class kT extends aT{constructor(e){super(),this.currentSequenceNumber=e}}class Xl{constructor(e){this.persistence=e,this.Hi=new Gl,this.Ji=null}static Yi(e){return new Xl(e)}get Xi(){if(this.Ji)return this.Ji;throw ee()}addReference(e,n,s){return this.Hi.addReference(s,n),this.Xi.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Hi.removeReference(s,n),this.Xi.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),A.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(i=>this.Xi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Xi.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xi,s=>{const i=W.fromPath(s);return this.Zi(e,i).next(r=>{r||n.removeEntry(i,ve.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(s=>{s?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return A.or([()=>A.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class th{constructor(){this.activeTargetIds=q0()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NT{constructor(){this.Ur=new th,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new th,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OT{Kr(e){}shutdown(){}}/**
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
 */class nh{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const PT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class DT{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
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
 */class MT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,i,r){const o=this.ho(e,n);V("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(V("RestConnection","Received: ",l),l),l=>{throw Vu("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r){return this.co(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+vs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=PT[e];return`${this.uo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new zI;a.listenOnce(HI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ko.NO_ERROR:const c=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Ko.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new q(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(w)>=0?w:b.UNKNOWN}(f.status);o(new q(d,f.message))}else o(new q(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new q(b.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=$I(),o=jI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new qI({})),this.lo(a.initMessageHeaders,n,s),gf()||yf()||by()||vf()||Ay()||mf()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");V("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,f=!1;const d=new DT({Jr:w=>{f?V("Connection","Not sending because WebChannel is closed:",w):(u||(V("Connection","Opening WebChannel transport."),c.open(),u=!0),V("Connection","WebChannel sending:",w),c.send(w))},Yr:()=>c.close()}),m=(w,P,k)=>{w.listen(P,N=>{try{k(N)}catch(F){setTimeout(()=>{throw F},0)}})};return m(c,zi.EventType.OPEN,()=>{f||V("Connection","WebChannel transport opened.")}),m(c,zi.EventType.CLOSE,()=>{f||(f=!0,V("Connection","WebChannel transport closed"),d.ro())}),m(c,zi.EventType.ERROR,w=>{f||(f=!0,Vu("Connection","WebChannel transport errored:",w),d.ro(new q(b.UNAVAILABLE,"The operation could not be completed")))}),m(c,zi.EventType.MESSAGE,w=>{var P;if(!f){const k=w.data[0];Ie(!!k);const N=k,F=N.error||((P=N[0])===null||P===void 0?void 0:P.error);if(F){V("Connection","WebChannel received error:",F);const G=F.status;let Y=function(_e){const Ue=me[_e];if(Ue!==void 0)return V0(Ue)}(G),ge=F.message;Y===void 0&&(Y=b.INTERNAL,ge="Unknown error status: "+G+" with message "+F.message),f=!0,d.ro(new q(Y,ge)),c.close()}else V("Connection","WebChannel received:",k),d.oo(k)}}),m(o,KI.STAT_EVENT,w=>{w.stat===Lu.PROXY?V("Connection","Detected buffering proxy"):w.stat===Lu.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.io()},0),d}}function zo(){return typeof document!="undefined"?document:null}/**
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
 */function yo(t){return new z0(t,!0)}class Np{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Yn=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class xT{constructor(e,n,s,i,r,o,a,l){this.Yn=e,this.Vo=s,this.vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Np(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new q(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LT extends xT{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.M=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=eT(e.writeResults,e.commitTime),s=Zn(e.commitTime);return this.listener.tu(s,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=J0(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Z0(this.M,s))};this.Lo(n)}}/**
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
 */class UT extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.M=i,this.su=!1}iu(){if(this.su)throw new q(b.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(b.UNKNOWN,i.toString())})}_o(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So._o(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(b.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class FT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Cn(n),this.uu=!1):V("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class VT{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.Kr(o=>{s.enqueueAndForget(async()=>{xi(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=de(a);l.wu.add(4),await Mi(l),l.yu.set("Unknown"),l.wu.delete(4),await vo(l)}(this))})}),this.yu=new FT(s,i)}}async function vo(t){if(xi(t))for(const e of t.mu)await e(!0)}async function Mi(t){for(const e of t.mu)await e(!1)}function xi(t){return de(t).wu.size===0}async function Op(t,e,n){if(!mo(e))throw e;t.wu.add(1),await Mi(t),t.yu.set("Offline"),n||(n=()=>_T(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await vo(t)})}function Pp(t,e){return e().catch(n=>Op(t,n,e))}async function wo(t){const e=de(t),n=nn(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;BT(e);)try{const i=await ET(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,$T(e,i)}catch(i){await Op(e,i)}Dp(e)&&Mp(e)}function BT(t){return xi(t)&&t.du.length<10}function $T(t,e){t.du.push(e);const n=nn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function Dp(t){return xi(t)&&!nn(t).ko()&&t.du.length>0}function Mp(t){nn(t).start()}async function jT(t){nn(t).nu()}async function HT(t){const e=nn(t);for(const n of t.du)e.Zo(n.mutations)}async function KT(t,e,n){const s=t.du.shift(),i=zl.from(s,e,n);await Pp(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wo(t)}async function qT(t,e){e&&nn(t).Xo&&await async function(n,s){if(i=s.code,F0(i)&&i!==b.ABORTED){const r=n.du.shift();nn(n).Fo(),await Pp(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await wo(n)}var i}(t,e),Dp(t)&&Mp(t)}async function sh(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=xi(n);n.wu.add(3),await Mi(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await vo(n)}async function zT(t,e){const n=de(t);e?(n.wu.delete(2),await vo(n)):e||(n.wu.add(2),await Mi(n),n.yu.set("Unknown"))}function nn(t){return t.Tu||(t.Tu=function(e,n,s){const i=de(e);return i.iu(),new LT(n,i.So,i.authCredentials,i.appCheckCredentials,i.M,s)}(t.datastore,t.asyncQueue,{Xr:jT.bind(null,t),eo:qT.bind(null,t),eu:HT.bind(null,t),tu:KT.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await wo(t)):(await t.Tu.stop(),t.du.length>0&&(V("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class Yl{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Yl(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xp(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),mo(t))return new q(b.UNAVAILABLE,`${e}: ${t}`);throw t}class WT{constructor(){this.queries=new ws(e=>yp(e),mp),this.onlineState="Unknown",this.bu=new Set}}function GT(t){t.bu.forEach(e=>{e.next()})}class XT{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new ws(a=>yp(a),mp),this.ra=new Map,this.oa=new Set,this.ua=new tt(W.comparator),this.aa=new Map,this.ca=new Gl,this.ha={},this.la=new Map,this.fa=cs.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function YT(t,e,n){const s=eb(t);try{const i=await function(r,o){const a=de(r),l=je.now(),c=o.reduce((f,d)=>f.add(d.key),Nn());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>a.fi.Ks(f,c).next(d=>{u=d;const m=[];for(const w of o){const P=x0(w,u.get(w.key));P!=null&&m.push(new Di(w.key,P,pp(P.value.mapValue),Qn.exists(!0)))}return a.Bs.addMutationBatch(f,l,m,o)})).then(f=>(f.applyToLocalDocumentSet(u),{batchId:f.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.ha[r.currentUser.toKey()];l||(l=new tt(he)),l=l.insert(o,a),r.ha[r.currentUser.toKey()]=l}(s,i.batchId,n),await _o(s,i.changes),await wo(s.remoteStore)}catch(i){const r=xp(i,"Failed to persist write");n.reject(r)}}function ih(t,e,n){const s=de(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ia.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=de(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const f of u.listeners)f.Pu(o)&&(l=!0)}),l&&GT(a)}(s.eventManager,e),i.length&&s.sa.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function JT(t,e){const n=de(t),s=e.batch.batchId;try{const i=await wT(n.localStore,e);Up(n,s,null),Lp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await _o(n,i)}catch(i){await Rp(i)}}async function QT(t,e,n){const s=de(t);try{const i=await function(r,o){const a=de(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.Bs.lookupMutationBatch(l,o).next(u=>(Ie(u!==null),c=u.keys(),a.Bs.removeMutationBatch(l,u))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.fi.Ks(l,c))})}(s.localStore,e);Up(s,e,n),Lp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await _o(s,i)}catch(i){await Rp(i)}}function Lp(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function Up(t,e,n){const s=de(t);let i=s.ha[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ha[s.currentUser.toKey()]=i}}async function _o(t,e,n){const s=de(t),i=[],r=[],o=[];s.ia.isEmpty()||(s.ia.forEach((a,l)=>{o.push(s._a(l,e,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),i.push(c);const u=Wl.Ys(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.sa.zo(i),await async function(a,l){const c=de(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(l,f=>A.forEach(f.Hs,d=>c.persistence.referenceDelegate.addReference(u,f.targetId,d)).next(()=>A.forEach(f.Js,d=>c.persistence.referenceDelegate.removeReference(u,f.targetId,d)))))}catch(u){if(!mo(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const f=u.targetId;if(!u.fromCache){const d=c.ui.get(f),m=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(m);c.ui=c.ui.insert(f,w)}}}(s.localStore,r))}async function ZT(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await kp(n.localStore,e);n.currentUser=e,function(i,r){i.la.forEach(o=>{o.forEach(a=>{a.reject(new q(b.CANCELLED,r))})}),i.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await _o(n,s.di)}}function eb(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QT.bind(null,e),e}class tb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=yo(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return vT(this.persistence,new mT,e.initialUser,this.M)}ya(e){return new RT(Xl.Yi,this.M)}ga(e){return new NT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ih(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZT.bind(null,this.syncEngine),await zT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new WT}createDatastore(e){const n=yo(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new MT(i));var i;return function(r,o,a,l){return new UT(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>ih(this.syncEngine,a,0),o=nh.vt()?new nh:new OT,new VT(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new XT(s,i,r,o,a,l);return c&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=de(e);V("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Mi(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */class sb{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=fp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{V("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(V("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ib(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await kp(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function rb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ob(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>sh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>sh(e.remoteStore,r)),t.onlineComponents=e}async function ob(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await ib(t,new tb)),t.offlineComponents}async function ab(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await rb(t,new nb)),t.onlineComponents}function lb(t){return ab(t).then(e=>e.syncEngine)}const rh=new Map;/**
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
 */function cb(t,e,n){if(!n)throw new q(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ub(t,e,n,s){if(e===!0&&s===!0)throw new q(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function oh(t){if(!W.isDocumentKey(t))throw new q(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function ah(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jl(t);throw new q(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class lh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ub("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Fp{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lh({}),this._settingsFrozen=!1,e instanceof oi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new q(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(i.options.projectId)}(e))}get app(){if(!this._app)throw new q(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new GI;switch(n.type){case"gapi":const s=n.client;return Ie(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new JI(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new q(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rh.get(e);n&&(V("ComponentProvider","Removing Datastore"),rh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Pt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Ql{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ql(this.firestore,e,this._query)}}class hi extends Ql{constructor(e,n,s){super(e,n,E0(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new W(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function hb(t,e,...n){if(t=ht(t),arguments.length===1&&(e=fp.R()),cb("doc","path",e),t instanceof Fp){const s=ye.fromString(e,...n);return oh(s),new Pt(t,null,new W(s))}{if(!(t instanceof Pt||t instanceof hi))throw new q(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ye.fromString(e,...n));return oh(s),new Pt(t.firestore,t instanceof hi?t.converter:null,new W(s))}}/**
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
 */class fb{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Np(this,"async_queue_retry"),this.Qa=()=>{const n=zo();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=zo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=zo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new vn;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!mo(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(s=>{this.Ua=s,this.qa=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Cn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.qa=!1,s))));return this.Fa=n,n}enqueueAfterDelay(e,n,s){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const i=Yl.createAndSchedule(this,e,n,s,r=>this.Ha(r));return this.La.push(i),i}ja(){this.Ua&&ee()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class Vp extends Fp{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new fb,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Bp(this),this._firestoreClient.terminate()}}function db(t=If()){return il(t,"firestore").getImmediate()}function pb(t){return t._firestoreClient||Bp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bp(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new i0(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sb(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class $p{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(Lt.fromBase64String(e))}catch(n){throw new q(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fi(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jp{constructor(e){this._methodName=e}}/**
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
 */class Hp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const gb=/^__.*__$/;class mb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Di(e,this.data,this.fieldMask,n,this.fieldTransforms):new go(e,this.data,n,this.fieldTransforms)}}function Kp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Zl{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=i,r===void 0&&this.tc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Zl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.nc({path:s,ic:!1});return i.rc(e),i}oc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.nc({path:s,ic:!1});return i.tc(),i}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return xr(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(Kp(this.ec)&&gb.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class yb{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||yo(e)}lc(e,n,s,i=!1){return new Zl({ec:e,methodName:n,hc:s,path:We.emptyPath(),ic:!1,cc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function vb(t){const e=t._freezeSettings(),n=yo(t._databaseId);return new yb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wb(t,e,n,s,i,r={}){const o=t.lc(r.merge||r.mergeFields?2:0,e,n,i);Gp("Data must be an object, but it was:",o,s);const a=zp(s,o);let l,c;if(r.merge)l=new Oa(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const f of r.mergeFields){const d=_b(e,f,n);if(!o.contains(d))throw new q(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Tb(u,d)||u.push(d)}l=new Oa(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new mb(new _t(a),l,c)}function qp(t,e){if(Wp(t=ht(t)))return Gp("Unsupported field value:",e,t),zp(t,e);if(t instanceof jp)return function(n,s){if(!Kp(s.ec))throw s.ac(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ac(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=qp(o,s.uc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return k0(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=je.fromDate(n);return{timestampValue:xa(s.M,i)}}if(n instanceof je){const i=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xa(s.M,i)}}if(n instanceof Hp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fi)return{bytesValue:W0(s.M,n._byteString)};if(n instanceof Pt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sp(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ac(`Unsupported field value: ${Jl(n)}`)}(t,e)}function zp(t,e){const n={};return dp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(t,(s,i)=>{const r=qp(i,e.sc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Wp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Hp||t instanceof fi||t instanceof Pt||t instanceof jp)}function Gp(t,e,n){if(!Wp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Jl(n);throw s==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+s)}}function _b(t,e,n){if((e=ht(e))instanceof $p)return e._internalPath;if(typeof e=="string")return Ib(t,e);throw xr("Field path arguments must be of type string or ",t,!1,void 0,n)}const Eb=new RegExp("[~\\*/\\[\\]]");function Ib(t,e,n){if(e.search(Eb)>=0)throw xr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $p(...e.split("."))._internalPath}catch{throw xr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xr(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new q(b.INVALID_ARGUMENT,a+t+l)}function Tb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function bb(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}function Ab(t,e,n){t=ah(t,Pt);const s=ah(t.firestore,Vp),i=bb(t.converter,e,n);return Sb(s,[wb(vb(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qn.none())])}function Sb(t,e){return function(n,s){const i=new vn;return n.asyncQueue.enqueueAndForget(async()=>YT(await lb(n),s,i)),i.promise}(pb(t),e)}(function(t,e=!0){(function(n){vs=n})(mi),ns(new _n("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Vp(i,new XI(n.getProvider("auth-internal")),new ZI(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),en(Uu,"3.4.9",t),en(Uu,"3.4.9","esm2017")})();var Cb="";async function Gb(t,e){try{const n=await Ab(hb($b,"users",vr().currentUser.email),{userid:vr().currentUser.uid,ValID:t,ValRegion:e});console.log("Document written with ID: ",n.id)}catch(n){console.error("Error adding document: ",n)}}const Rb=zs("span",{style:{color:"#dc3d4b"}},"V",-1),kb=sn("ALSTATS"),Nb=sn(" Feed "),Ob=sn(" | "),Pb=sn(" Login "),Db=sn(" | "),Mb=sn(" Register "),xb=sn(" | "),Lb={__name:"App",setup(t){const e=Nh(!1);let n;Wh(()=>{n=vr(),Tw(n,i=>{console.log(Cb),i?e.value=!0:e.value=!1})});const s=()=>{bw(n).then(()=>{ml.push("/")})};return(i,r)=>{const o=yc("router-link"),a=yc("router-view");return oa(),Sc("div",null,[zs("nav",null,[zs("header",null,[be(o,{to:"/",style:{"font-family":"Valfont","text-decoration":"none","font-size":"50px",color:"white","text-align":"right"}},{default:Ss(()=>[Rb,kb]),_:1}),be(o,{to:"/feed"},{default:Ss(()=>[Nb]),_:1}),Ob,be(o,{to:"/sign-in"},{default:Ss(()=>[Pb]),_:1}),Db,be(o,{to:"/register"},{default:Ss(()=>[Mb]),_:1}),xb,e.value?(oa(),Sc("button",{key:0,onClick:s,name:"signout"},"Sign out")):Vm("",!0)])]),be(a)])}}};var Ub="firebase",Fb="9.8.2";/**
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
 */en(Ub,Fb,"app");const Vb={apiKey:"AIzaSyCBuA1ZQbdDAxGbvYRe4isGeV1o5Jlo4eM",authDomain:"valdb-3b36d.firebaseapp.com",projectId:"valdb-3b36d",storageBucket:"valdb-3b36d.appspot.com",messagingSenderId:"59622579519",appId:"1:59622579519:web:8f4d1e89fb6d2251bd478a",measurementId:"G-PGS46EXKVS"},Bb=Ov(Vb),$b=db(Bb);vy(Lb).use(ml).mount("#app");export{Ct as F,zs as a,Vm as b,Sc as c,zb as d,Gb as e,ml as f,vr as g,oa as o,Nh as r,Wb as s,Hb as t,qb as v,Kb as w};
