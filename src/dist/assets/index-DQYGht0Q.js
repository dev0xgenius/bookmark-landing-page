(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const h=new Map,S={set(e,t,n){h.has(e)||h.set(e,new Map);const s=h.get(e);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,n)},get(e,t){return h.has(e)&&h.get(e).get(t)||null},remove(e,t){if(!h.has(e))return;const n=h.get(e);n.delete(t),n.size===0&&h.delete(e)}},ft=1e3,x="transitionend",J=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,n)=>`#${CSS.escape(n)}`)),e),dt=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),gt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),r=Number.parseFloat(n);return!s&&!r?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*ft)},ht=e=>{e.dispatchEvent(new Event(x))},y=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),P=e=>y(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(J(e)):null,_t=e=>{if(!y(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const s=e.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return t},H=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",pt=e=>{e.offsetHeight},X=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,D=[],Et=e=>{document.readyState==="loading"?(D.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of D)t()}),D.push(e)):e()},tt=e=>{Et(()=>{const t=X();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},k=(e,t=[],n=e)=>typeof e=="function"?e(...t):n,mt=(e,t,n=!0)=>{if(!n){k(e);return}const r=gt(t)+5;let i=!1;const o=({target:a})=>{a===t&&(i=!0,t.removeEventListener(x,o),k(e))};t.addEventListener(x,o),setTimeout(()=>{i||ht(t)},r)},At=(e,t,n,s)=>{const r=e.length;let i=e.indexOf(t);return i===-1?!n&&s?e[r-1]:e[0]:(i+=n?1:-1,i=(i+r)%r,e[Math.max(0,Math.min(i,r-1))])},bt=/[^.]*(?=\..*)\.|.*/,yt=/\..*/,Ct=/::\d+$/,T={};let Y=1;const et={mouseenter:"mouseover",mouseleave:"mouseout"},Ot=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function nt(e,t){return t&&`${t}::${Y++}`||e.uidEvent||Y++}function st(e){const t=nt(e);return e.uidEvent=t,T[t]=T[t]||{},T[t]}function Nt(e,t){return function n(s){return V(s,{delegateTarget:e}),n.oneOff&&c.off(e,s.type,t),t.apply(e,[s])}}function St(e,t,n){return function s(r){const i=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return V(r,{delegateTarget:o}),s.oneOff&&c.off(e,r.type,t,n),n.apply(o,[r])}}function rt(e,t,n=null){return Object.values(e).find(s=>s.callable===t&&s.delegationSelector===n)}function it(e,t,n){const s=typeof t=="string",r=s?n:t||n;let i=ot(e);return Ot.has(i)||(i=e),[s,r,i]}function j(e,t,n,s,r){if(typeof t!="string"||!e)return;let[i,o,a]=it(t,n,s);t in et&&(o=(ut=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return ut.call(this,m)})(o));const u=st(e),g=u[a]||(u[a]={}),f=rt(g,o,i?n:null);if(f){f.oneOff=f.oneOff&&r;return}const E=nt(o,t.replace(bt,"")),d=i?St(e,n,o):Nt(e,o);d.delegationSelector=i?n:null,d.callable=o,d.oneOff=r,d.uidEvent=E,g[E]=d,e.addEventListener(a,d,i)}function K(e,t,n,s,r){const i=rt(t[n],s,r);i&&(e.removeEventListener(n,i,!!r),delete t[n][i.uidEvent])}function Dt(e,t,n,s){const r=t[n]||{};for(const[i,o]of Object.entries(r))i.includes(s)&&K(e,t,n,o.callable,o.delegationSelector)}function ot(e){return e=e.replace(yt,""),et[e]||e}const c={on(e,t,n,s){j(e,t,n,s,!1)},one(e,t,n,s){j(e,t,n,s,!0)},off(e,t,n,s){if(typeof t!="string"||!e)return;const[r,i,o]=it(t,n,s),a=o!==t,u=st(e),g=u[o]||{},f=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(g).length)return;K(e,u,o,i,r?n:null);return}if(f)for(const E of Object.keys(u))Dt(e,u,E,t.slice(1));for(const[E,d]of Object.entries(g)){const W=E.replace(Ct,"");(!a||t.includes(W))&&K(e,u,o,d.callable,d.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const s=X(),r=ot(t),i=t!==r;let o=null,a=!0,u=!0,g=!1;i&&s&&(o=s.Event(t,n),s(e).trigger(o),a=!o.isPropagationStopped(),u=!o.isImmediatePropagationStopped(),g=o.isDefaultPrevented());const f=V(new Event(t,{bubbles:a,cancelable:!0}),n);return g&&f.preventDefault(),u&&e.dispatchEvent(f),f.defaultPrevented&&o&&o.preventDefault(),f}};function V(e,t={}){for(const[n,s]of Object.entries(t))try{e[n]=s}catch{Object.defineProperty(e,n,{configurable:!0,get(){return s}})}return e}function z(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function L(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const q={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${L(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${L(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let r=s.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=z(e.dataset[s])}return t},getDataAttribute(e,t){return z(e.getAttribute(`data-bs-${L(t)}`))}};class Tt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const s=y(n)?q.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...y(n)?q.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const[s,r]of Object.entries(n)){const i=t[s],o=y(i)?"element":dt(i);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${r}".`)}}}const Lt="5.3.3";class at extends Tt{constructor(t,n){super(),t=P(t),t&&(this._element=t,this._config=this._getConfig(n),S.set(this._element,this.constructor.DATA_KEY,this))}dispose(){S.remove(this._element,this.constructor.DATA_KEY),c.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,s=!0){mt(t,n,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return S.get(P(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return Lt}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const w=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t?t.split(",").map(n=>J(n)).join(","):null},l={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let s=e.parentNode.closest(t);for(;s;)n.push(s),s=s.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!H(n)&&_t(n))},getSelectorFromElement(e){const t=w(e);return t&&l.findOne(t)?t:null},getElementFromSelector(e){const t=w(e);return t?l.findOne(t):null},getMultipleElementsFromSelector(e){const t=w(e);return t?l.find(t):[]}},wt="tab",vt="bs.tab",p=`.${vt}`,It=`hide${p}`,$t=`hidden${p}`,Rt=`show${p}`,Mt=`shown${p}`,xt=`click${p}`,Pt=`keydown${p}`,Kt=`load${p}`,Ft="ArrowLeft",G="ArrowRight",Ht="ArrowUp",U="ArrowDown",v="Home",Q="End",_="active",B="fade",I="show",Vt="dropdown",lt=".dropdown-toggle",Wt=".dropdown-menu",$=`:not(${lt})`,kt='.list-group, .nav, [role="tablist"]',Yt=".nav-item, .list-group-item",jt=`.nav-link${$}, .list-group-item${$}, [role="tab"]${$}`,ct='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',R=`${jt}, ${ct}`,zt=`.${_}[data-bs-toggle="tab"], .${_}[data-bs-toggle="pill"], .${_}[data-bs-toggle="list"]`;class b extends at{constructor(t){super(t),this._parent=this._element.closest(kt),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),c.on(this._element,Pt,n=>this._keydown(n)))}static get NAME(){return wt}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),s=n?c.trigger(n,It,{relatedTarget:t}):null;c.trigger(t,Rt,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(_),this._activate(l.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(I);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),c.trigger(t,Mt,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(B))}_deactivate(t,n){if(!t)return;t.classList.remove(_),t.blur(),this._deactivate(l.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(I);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),c.trigger(t,$t,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(B))}_keydown(t){if(![Ft,G,Ht,U,v,Q].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=this._getChildren().filter(r=>!H(r));let s;if([v,Q].includes(t.key))s=n[t.key===v?0:n.length-1];else{const r=[G,U].includes(t.key);s=At(n,t.target,r,!0)}s&&(s.focus({preventScroll:!0}),b.getOrCreateInstance(s).show())}_getChildren(){return l.find(R,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",n),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=l.getElementFromSelector(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,n){const s=this._getOuterElement(t);if(!s.classList.contains(Vt))return;const r=(i,o)=>{const a=l.findOne(i,s);a&&a.classList.toggle(o,n)};r(lt,_),r(Wt,I),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,s){t.hasAttribute(n)||t.setAttribute(n,s)}_elemIsActive(t){return t.classList.contains(_)}_getInnerElement(t){return t.matches(R)?t:l.findOne(R,t)}_getOuterElement(t){return t.closest(Yt)||t}static jQueryInterface(t){return this.each(function(){const n=b.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}c.on(document,xt,ct,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!H(this)&&b.getOrCreateInstance(this).show()});c.on(window,Kt,()=>{for(const e of l.find(zt))b.getOrCreateInstance(e)});tt(b);const qt="collapse",Gt="bs.collapse",O=`.${Gt}`,Ut=".data-api",Qt=`show${O}`,Bt=`shown${O}`,Zt=`hide${O}`,Jt=`hidden${O}`,Xt=`click${O}${Ut}`,M="show",A="collapse",N="collapsing",te="collapsed",ee=`:scope .${A} .${A}`,ne="collapse-horizontal",se="width",re="height",ie=".collapse.show, .collapse.collapsing",F='[data-bs-toggle="collapse"]',oe={parent:null,toggle:!0},ae={parent:"(null|element)",toggle:"boolean"};class C extends at{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const s=l.find(F);for(const r of s){const i=l.getSelectorFromElement(r),o=l.find(i).filter(a=>a===this._element);i!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return oe}static get DefaultType(){return ae}static get NAME(){return qt}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(ie).filter(a=>a!==this._element).map(a=>C.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||c.trigger(this._element,Qt).defaultPrevented)return;for(const a of t)a.hide();const s=this._getDimension();this._element.classList.remove(A),this._element.classList.add(N),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(N),this._element.classList.add(A,M),this._element.style[s]="",c.trigger(this._element,Bt)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||c.trigger(this._element,Zt).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,pt(this._element),this._element.classList.add(N),this._element.classList.remove(A,M);for(const r of this._triggerArray){const i=l.getElementFromSelector(r);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(N),this._element.classList.add(A),c.trigger(this._element,Jt)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(M)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=P(t.parent),t}_getDimension(){return this._element.classList.contains(ne)?se:re}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(F);for(const n of t){const s=l.getElementFromSelector(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(t){const n=l.find(ee,this._config.parent);return l.find(t,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const s of t)s.classList.toggle(te,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const s=C.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}c.on(document,Xt,F,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const t of l.getMultipleElementsFromSelector(this))C.getOrCreateInstance(t,{toggle:!1}).toggle()});tt(C);const Z=document.getElementById("ctaForm");Z.onsubmit=function(e){const t=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,n=new FormData(Z),s=this.querySelector("label");let r=s.classList;t.test(n.get("email"))?r.contains("error")&&r.remove("error"):(e.preventDefault(),r.contains("error")||r.add("error")),s.classList=r};
