/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new WeakMap;class o{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=e.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&e.set(i,t))}return t}toString(){return this.cssText}}const r=(t,...s)=>{const e=1===t.length?t[0]:s.reduce(((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1]),t[0]);return new o(e,t,i)},n=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:h,defineProperty:a,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,f=globalThis,p=f.trustedTypes,v=p?p.emptyScript:"",b=f.reactiveElementPolyfillSupport,g=(t,s)=>t,y={toAttribute(t,s){switch(s){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,s)=>!h(t,s),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=w){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&a(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){const{get:e,set:o}=l(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return e?.call(this)},set(s){const r=e?.call(this);o.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,s=[...c(t),...d(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(n(t))}else void 0!==t&&s.push(n(t));return s}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{if(s)i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),o=t.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,i.appendChild(e)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(s,i.type);this._$Em=t,null==o?this.removeAttribute(e):this.setAttribute(e,o),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=e,this[e]=o.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??m)(this[t],s))return;this.P(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[g("elementProperties")]=new Map,$[g("finalized")]=new Map,b?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,S=k.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",z=`lit$${(Math.random()+"").slice(9)}$`,A="?"+z,_=`<${A}>`,M=document,E=()=>M.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,j="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,P=/>/g,R=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,D=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),L=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),V=new WeakMap,W=M.createTreeWalker(M,129);function Z(t,s){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(s):s}const H=(t,s)=>{const i=t.length-1,e=[];let o,r=2===s?"<svg>":"",n=T;for(let s=0;s<i;s++){const i=t[s];let h,a,l=-1,c=0;for(;c<i.length&&(n.lastIndex=c,a=n.exec(i),null!==a);)c=n.lastIndex,n===T?"!--"===a[1]?n=U:void 0!==a[1]?n=P:void 0!==a[2]?(q.test(a[2])&&(o=RegExp("</"+a[2],"g")),n=R):void 0!==a[3]&&(n=R):n===R?">"===a[0]?(n=o??T,l=-1):void 0===a[1]?l=-2:(l=n.lastIndex-a[2].length,h=a[1],n=void 0===a[3]?R:'"'===a[3]?I:B):n===I||n===B?n=R:n===U||n===P?n=T:(n=R,o=void 0);const d=n===R&&t[s+1].startsWith("/>")?" ":"";r+=n===T?i+_:l>=0?(e.push(h),i.slice(0,l)+x+i.slice(l)+z+d):i+z+(-2===l?s:d)}return[Z(t,r+(t[i]||"<?>")+(2===s?"</svg>":"")),e]};class J{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let o=0,r=0;const n=t.length-1,h=this.parts,[a,l]=H(t,s);if(this.el=J.createElement(a,i),W.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=W.nextNode())&&h.length<n;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(x)){const s=l[r++],i=e.getAttribute(t).split(z),n=/([.?@])?(.*)/.exec(s);h.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?Y:"?"===n[1]?tt:"@"===n[1]?st:X}),e.removeAttribute(t)}else t.startsWith(z)&&(h.push({type:6,index:o}),e.removeAttribute(t));if(q.test(e.tagName)){const t=e.textContent.split(z),s=t.length-1;if(s>0){e.textContent=S?S.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],E()),W.nextNode(),h.push({type:2,index:++o});e.append(t[s],E())}}}else if(8===e.nodeType)if(e.data===A)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(z,t+1));)h.push({type:7,index:o}),t+=z.length-1}o++}}static createElement(t,s){const i=M.createElement("template");return i.innerHTML=t,i}}function K(t,s,i=t,e){if(s===L)return s;let o=void 0!==e?i._$Co?.[e]:i._$Cl;const r=O(s)?void 0:s._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,e)),void 0!==e?(i._$Co??=[])[e]=o:i._$Cl=o),void 0!==o&&(s=K(t,o._$AS(t,s.values),o,e)),s}class G{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=(t?.creationScope??M).importNode(s,!0);W.currentNode=e;let o=W.nextNode(),r=0,n=0,h=i[0];for(;void 0!==h;){if(r===h.index){let s;2===h.type?s=new Q(o,o.nextSibling,this,t):1===h.type?s=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(s=new it(o,this,t)),this._$AV.push(s),h=i[++n]}r!==h?.index&&(o=W.nextNode(),r++)}return W.currentNode=M,e}p(t){let s=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=K(this,t,s),O(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==F&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:i}=t,e="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===e)this._$AH.p(s);else{const t=new G(e,this),i=t.u(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let s=V.get(t.strings);return void 0===s&&V.set(t.strings,s=new J(t)),s}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const o of t)e===s.length?s.push(i=new Q(this.S(E()),this.S(E()),this,this.options)):i=s[e],i._$AI(o),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,s=this,i,e){const o=this.strings;let r=!1;if(void 0===o)t=K(this,t,s,0),r=!O(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=K(this,e[i+n],s,n),h===L&&(h=this._$AH[n]),r||=!O(h)||h!==this._$AH[n],h===F?t=F:t!==F&&(t+=(h??"")+o[n+1]),this._$AH[n]=h}r&&!e&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class st extends X{constructor(t,s,i,e,o){super(t,s,i,e,o),this.type=5}_$AI(t,s=this){if((t=K(this,t,s,0)??F)===L)return;const i=this._$AH,e=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==F&&(i===F||e);e&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const et=k.litHtmlPolyfillSupport;et?.(J,Q),(k.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ot extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,i)=>{const e=i?.renderBefore??s;let o=e._$litPart$;if(void 0===o){const t=i?.renderBefore??null;e._$litPart$=o=new Q(s.insertBefore(E(),t),t,void 0,i??{})}return o._$AI(t),o})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>(s,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,s)})):customElements.define(t,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m},at=(t=ht,s,i)=>{const{kind:e,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),"accessor"===e){const{name:e}=i;return{set(i){const o=s.get.call(this);s.set.call(this,i),this.requestUpdate(e,o,t)},init(s){return void 0!==s&&this.P(e,void 0,t),s}}}if("setter"===e){const{name:e}=i;return function(i){const o=this[e];s.call(this,i),this.requestUpdate(e,o,t)}}throw Error("Unsupported decorator location: "+e)};function lt(t){return(s,i)=>"object"==typeof i?at(t,s,i):((t,s,i)=>{const e=s.hasOwnProperty(i);return s.constructor.createProperty(i,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(s,i):void 0})(t,s,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ct(t){return lt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft="important",pt=" !"+ft,vt=(t=>(...s)=>({_$litDirective$:t,values:s}))(class extends ut{constructor(t){if(super(t),t.type!==dt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((s,i)=>{const e=t[i];return null==e?s:s+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`}),"")}update(t,[s]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(s)),this.render(s);for(const t of this.ft)null==s[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in s){const e=s[t];if(null!=e){this.ft.add(t);const s="string"==typeof e&&e.endsWith(pt);t.includes("-")||s?i.setProperty(t,s?e.slice(0,-11):e,s?ft:""):i[t]=e}}return L}});var bt=function(t,s,i,e){for(var o,r=arguments.length,n=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,h=t.length-1;h>=0;h--)(o=t[h])&&(n=(r<3?o(n):r>3?o(s,i,n):o(s,i))||n);return r>3&&n&&Object.defineProperty(s,i,n),n};class gt extends Event{constructor(t,s){super("cellchange"),this.index=t,this.value=s}}class yt extends Event{constructor(t){super("animationcomplete"),this.index=t}}let mt=class extends ot{constructor(){super(...arguments),this.row=0,this.column=0,this.value=0,this.prefilled=!1,this.conflict=!1,this.animateValue=!1,this._animationComplete=!1,this.candidates=0,this.onKeyDown=t=>{let s=0;if("Backspace"==t.key||"Delete"==t.key)s=0;else if(s=parseInt(t.key),isNaN(s))return;t.preventDefault();const i=9*this.row+this.column;this.dispatchEvent(new gt(i,s))},this.onTransitionEnd=t=>{t.preventDefault();const s=9*this.row+this.column;this.dispatchEvent(new yt(s))}}render(){if(0==this.value&&this.candidates>0)return this.renderCandidates();let t={};return this.value>0&&(this.animateValue?t.opacity=0:(t.opacity=1,t.transition="opacity 1s")),D`
      <div
        class="input-value ${this.conflict?"conflict":""} ${this.prefilled?"prefilled":""}"
        style=${vt(t)}
        tabindex=${(t=>t??F)(this.prefilled?void 0:"0")}
        @keydown=${this.prefilled?void 0:this.onKeyDown}
        @transitionend=${this.onTransitionEnd}
      >
        ${0===this.value?"":this.value}
      </div>
    `}renderCandidates(){const t=[0,1,2].map((t=>{const s=[0,1,2].map((s=>{const i=3*t+s+1,e=!!(2**(i-1)&this.candidates);return D`
          <td @keydown="${this.onKeyDown}">${e?i:void 0}</td>
        `}));return D`
        <tr @keydown="${this.onKeyDown}">
          ${s}
        </tr>
      `}));return D`
      <table tabindex="0" @keydown="${this.onKeyDown}">
        ${t}
      </table>
    `}};mt.styles=r`
    :host {
      --cell-size: 10vmin;
    }

    :host .input-value {
      border: 0;
      width: var(--cell-size);
      height: var(--cell-size);
      text-align: center;
      font-size: calc(var(--cell-size) * 0.8);
      padding: 0;
      cursor: default;
    }

    :host .input-value:focus {
      background-color: lightblue;
      outline: none;
    }

    :host .input-value.prefilled {
      background-color: lightgrey;
    }

    :host .input-value.conflict {
      background-color: lightcoral;
    }

    :host .input-value.conflict:focus {
      background-color: pink;
    }

    :host .input-value.prefilled.conflict {
      background-color: red;
    }

    :host table {
      width: var(--cell-size);
      height: var(--cell-size);
      font-size: calc(var(--cell-size) * 0.25);
      table-layout: fixed;
      color: lightgrey;
      text-align: center;
      cursor: default;
    }

    :host table:focus {
      background-color: lightblue;
      color: darkgrey;
      outline: none;
    }

    :host tr {
      height: calc(var(--cell-size) / 3.2);
    }
  `,bt([lt({type:Number})],mt.prototype,"row",void 0),bt([lt({type:Number})],mt.prototype,"column",void 0),bt([lt({type:Number})],mt.prototype,"value",void 0),bt([lt({type:Boolean})],mt.prototype,"prefilled",void 0),bt([lt({type:Boolean})],mt.prototype,"conflict",void 0),bt([lt({type:Boolean})],mt.prototype,"animateValue",void 0),bt([ct()],mt.prototype,"_animationComplete",void 0),bt([lt({type:Number})],mt.prototype,"candidates",void 0),mt=bt([nt("sudoku-square")],mt);var wt,$t=function(t,s,i,e){for(var o,r=arguments.length,n=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,h=t.length-1;h>=0;h--)(o=t[h])&&(n=(r<3?o(n):r>3?o(s,i,n):o(s,i))||n);return r>3&&n&&Object.defineProperty(s,i,n),n};!function(t){t[t.Normal=0]="Normal",t[t.Candidate=1]="Candidate"}(wt||(wt={}));let kt=class extends ot{constructor(){super(),this._mode=wt.Normal,this._cells=new Array(81),this._prefilledCells=new Array(81),this._conflicts=new Array(81),this._candidates=new Array(81),this._autoCandidatesOverrides=new Array(81),this.autoCandidateMode=!1,this.autofillOnlyCandidatesMode=!1,this._animatedSquare=-1,this.onCellChange=t=>{switch(this._mode){case wt.Normal:{if(t.value<0||t.value>9)return;const s=t.value!=this._cells[t.index];this._cells[t.index]=t.value,s&&(this.checkForConflicts(),this.autoCandidateMode&&(this.autoUpdateCandidates(),this.autofillOnlyCandidatesMode&&this.autofillOnlyCandidates()),this.requestUpdate());break}case wt.Candidate:{if(t.value<1||t.value>9)return;const s=2**(t.value-1);(s&this._candidates[t.index])>0?this._autoCandidatesOverrides[t.index]|=s:this._autoCandidatesOverrides[t.index]&=~s,this._candidates[t.index]^=s,this.requestUpdate();break}}},this.selectNormal=t=>{this._mode=wt.Normal},this.selectCandidate=t=>{this._mode=wt.Candidate},this.autoCandidateModeChanged=t=>{this.autoCandidateMode=!this.autoCandidateMode,this.autoCandidateMode?(this.autoUpdateCandidates(),this.autofillOnlyCandidatesMode&&this.autofillOnlyCandidates(),this.requestUpdate()):this._candidates=new Array(81)},this.autofillOnlyCandidatesModeChanged=t=>{this.autofillOnlyCandidatesMode=!this.autofillOnlyCandidatesMode,this.autofillOnlyCandidatesMode&&this.autofillOnlyCandidates()},this.animationComplete=async t=>{this.autofillOnlyCandidatesMode&&await this.autofillOnlyCandidates()};const t=window.location.search,s=new URLSearchParams(t);if(s.has("s")){const t=s.get("s");if(81!=t?.length)return void window.console.log("Failed to parse input sudoku board: "+t);for(let s=0;s<81;s++){const i=parseInt(t.charAt(s));if(isNaN(i))return void window.console.log("Failed to parse input sudoku square "+s+": "+t.charAt(s));i>0&&(this._cells[s]=i,this._prefilledCells[s]=!0)}this.checkForConflicts()}}checkForConflicts(){let t=!1;for(let s=0;s<81;s++){this._conflicts[s]=!1;const i=this._cells[s];if(i>0)for(let e of this.getRelatedCells(s))if(this._cells[e]==i){this._conflicts[s]=!0,t=!0;break}}return t}autoUpdateCandidates(){for(let t=0;t<81;t++){let s=0;for(let i of this.getRelatedCells(t)){const t=this._cells[i];t>0&&(s|=2**(t-1))}this._candidates[t]=511&~s,this._candidates[t]&=~this._autoCandidatesOverrides[t]}this.requestUpdate()}getRelatedCells(t){let s=new Set;const i=t-t%9;for(let e=i;e<i+9;e++)e!=t&&s.add(e);for(let i=t%9;i<81;i+=9)i!=t&&s.add(i);const e=~~(t/9),o=e-e%3,r=t%9,n=r-r%3;for(let i=o;i<o+3;i++)for(let e=n;e<n+3;e++){const o=9*i+e;o!=t&&s.add(o)}return s}async autofillOnlyCandidates(){if(this._conflicts.some((t=>t)))return;let t=[];for(let s=0;s<81;s++)if(!(this._cells[s]>0)){if(!(this._candidates[s]>0))return this._conflicts[s]=!0,void this.requestUpdate();const i=this._candidates[s];i&i-1||t.push(s)}if(0==t.length)return;let s=t[Math.floor(Math.random()*t.length)];const i=1+~~(Math.log(this._candidates[s])/Math.log(2));this._cells[s]=i,this.checkForConflicts()?this.requestUpdate():(this.autoUpdateCandidates(),this._animatedSquare=s,this.requestUpdate(),await new Promise((t=>setTimeout(t,0))),this._animatedSquare=-1,this.requestUpdate(),await new Promise((t=>setTimeout(t,0))))}render(){const t=[0,1,2,3,4,5,6,7,8].map((t=>{const s=[0,1,2,3,4,5,6,7,8].map((s=>{const i=9*t+s,e=this._cells[i],o=this._candidates[i];return D`
          <div
            class="cell"
            ?data-group-end="${s%3==2}"
            ?data-group-start="${0===s}"
          >
            <sudoku-square
              row=${t}
              column=${s}
              value=${e}
              ?prefilled=${this._prefilledCells[i]}
              ?conflict=${this._conflicts[i]}
              ?animateValue=${this._animatedSquare==i}
              candidates=${o}
              @cellchange="${this.onCellChange}"
              @animationcomplete="${this.animationComplete}"
            >
            </sudoku-square>
          </div>
        `}));return D`
        <div
          class="row"
          ?data-group-end="${t%3==2}"
          ?data-group-start="${0===t}"
        >
          ${s}
        </div>
      `}));return D`
      <div class="app">
        <div class="grid">${t}</div>
        <div class="spacer"></div>
        <div class="controls">
          <div class="mode-selector">
            <button
              type="button"
              ?data-active="${this._mode==wt.Normal}"
              @click="${this.selectNormal}"
            >
              Normal
            </button>
            <button
              type="button"
              ?data-active="${this._mode==wt.Candidate}"
              @click="${this.selectCandidate}"
            >
              Candidates
            </button>
          </div>
          <div class="keyboard">
            <input
              type="checkbox"
              id="autoCandidateMode"
              .checked="${this.autoCandidateMode}"
              @change="${this.autoCandidateModeChanged}"
            />
            <label for="autoCandidateMode">Auto Candidate Mode</label>
            <input
              type="checkbox"
              id="autofillOnlyCandidates"
              .checked="${this.autofillOnlyCandidatesMode}"
              ?disabled="${!this.autoCandidateMode}"
              @change="${this.autofillOnlyCandidatesModeChanged}"
            />
            <label for="autoCandidateMode">Autofill Only Candidates</label>
          </div>
        </div>
      </div>
    `}};kt.styles=r`
    :host {
      --cell-size: 10vmin;
      --border-size: 1px; // calc(var(--cell-size) * 0.05);
      --group-border-size: calc(var(--border-size) * 4);
    }

    :host .app {
      display: flex;
      align-items: stretch;
      justify-content: center;
    }

    :host .spacer {
      display: block;
      width: calc(var(--cell-size) * 1);
    }

    :host .controls {
      display: block;
      width: calc(var(--cell-size) * 4);
      font-size: calc(var(--cell-size) * 0.2);
    }

    :host .mode-selector {
      display: flex;
      align-items: stretch;
      justify-content: center;
    }

    :host .keyboard {
      display: flex;
      align-items: stretch;
      justify-content: center;
    }

    :host .grid {
      display: block;
      flex-direction: column;
      border: var(--border-size) solid black;
    }

    :host .row {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
    }

    :host .row[data-group-end] {
      border-bottom: var(--group-border-size) solid black;
    }

    :host .row[data-group-start] {
      border-top: var(--group-border-size) solid black;
    }

    :host .cell {
      width: var(--cell-size);
      height: var(--cell-size);
      border-left: var(--border-size) solid black;
      border-top: var(--border-size) solid black;
      background: white;
    }

    :host .cell[data-group-end] {
      border-right: var(--group-border-size) solid black;
    }

    :host .cell[data-group-start] {
      border-left: var(--group-border-size) solid black;
    }

    :host button {
      background-color: #fff;
      color: #ccc;
      border: 1px solid #ccc;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      outline: 0;
      font-size: calc(var(--cell-size) * 0.2);
      width: 50%;
      height: calc(var(--cell-size) * 0.5);
      text-align: center;
      cursor: pointer;
      -webkit-appearance: button;
      overflow: visible;
      line-height: 2;
      margin: 0;
    }

    :host button[data-active] {
      background-color: #000;
      color: #fff;
    }
  `,$t([ct()],kt.prototype,"_mode",void 0),$t([ct()],kt.prototype,"_cells",void 0),$t([ct()],kt.prototype,"_prefilledCells",void 0),$t([ct()],kt.prototype,"_conflicts",void 0),$t([ct()],kt.prototype,"_candidates",void 0),$t([ct()],kt.prototype,"_autoCandidatesOverrides",void 0),$t([lt({type:Boolean})],kt.prototype,"autoCandidateMode",void 0),$t([lt({type:Boolean})],kt.prototype,"autofillOnlyCandidatesMode",void 0),$t([ct()],kt.prototype,"_animatedSquare",void 0),kt=$t([nt("animated-sudoku")],kt);export{kt as AnimatedSudoku};
