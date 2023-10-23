import{r as oe,R as M,g as _a,j as m,a as i,F as pe,n as ja,d as $e}from"./app-02160b21.js";import{d as qt,r as Ma}from"./relativeTime-1fca7892.js";import{S as re}from"./dialog-3048dff4.js";import"./use-is-mounted-1cad7a44.js";const Ce=oe;function La({title:e,titleId:t,...a},n){return Ce.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?Ce.createElement("title",{id:t},e):null,Ce.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const Ra=Ce.forwardRef(La);var Fa=Ra;const Pe=oe;function za({title:e,titleId:t,...a},n){return Pe.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?Pe.createElement("title",{id:t},e):null,Pe.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}const Da=Pe.forwardRef(za);var Ya=Da,$a=Fa,Wa=Ya,Kt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xt=M.createContext&&M.createContext(Kt),W=globalThis&&globalThis.__assign||function(){return W=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},W.apply(this,arguments)},Ua=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};function Qt(e){return e&&e.map(function(t,a){return M.createElement(t.tag,W({key:a},t.attr),Qt(t.child))})}function Ha(e){return function(t){return M.createElement(Ba,W({attr:W({},e.attr)},t),Qt(e.child))}}function Ba(e){var t=function(a){var n=e.attr,r=e.size,o=e.title,s=Ua(e,["attr","size","title"]),l=r||a.size||"1em",c;return a.className&&(c=a.className),e.className&&(c=(c?c+" ":"")+e.className),M.createElement("svg",W({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,n,s,{className:c,style:W(W({color:e.color||a.color},a.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&M.createElement("title",null,o),e.children)};return xt!==void 0?M.createElement(xt.Consumer,null,function(a){return t(a)}):t(Kt)}function Xa(e){return Ha({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function wt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?wt(Object(a),!0).forEach(function(n){S(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):wt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Ie(e){return Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ie(e)}function Ga(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kt(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Va(e,t,a){return t&&kt(e.prototype,t),a&&kt(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function st(e,t){return Ka(e)||Ja(e,t)||Jt(e,t)||en()}function ve(e){return qa(e)||Qa(e)||Jt(e)||Za()}function qa(e){if(Array.isArray(e))return Ge(e)}function Ka(e){if(Array.isArray(e))return e}function Qa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ja(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n=[],r=!0,o=!1,s,l;try{for(a=a.call(e);!(r=(s=a.next()).done)&&(n.push(s.value),!(t&&n.length===t));r=!0);}catch(c){o=!0,l=c}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw l}}return n}}function Jt(e,t){if(e){if(typeof e=="string")return Ge(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Ge(e,t)}}function Ge(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Za(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function en(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Nt=function(){},lt={},Zt={},ea=null,ta={mark:Nt,measure:Nt};try{typeof window<"u"&&(lt=window),typeof document<"u"&&(Zt=document),typeof MutationObserver<"u"&&(ea=MutationObserver),typeof performance<"u"&&(ta=performance)}catch{}var tn=lt.navigator||{},At=tn.userAgent,Ot=At===void 0?"":At,U=lt,x=Zt,St=ea,be=ta;U.document;var z=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",aa=~Ot.indexOf("MSIE")||~Ot.indexOf("Trident/"),ye,xe,we,ke,Ne,L="___FONT_AWESOME___",Ve=16,na="fa",ra="svg-inline--fa",K="data-fa-i2svg",qe="data-fa-pseudo-element",an="data-fa-pseudo-element-pending",ct="data-prefix",ft="data-icon",Ct="fontawesome-i2svg",nn="async",rn=["HTML","HEAD","STYLE","SCRIPT"],ia=function(){try{return!0}catch{return!1}}(),y="classic",w="sharp",ut=[y,w];function ge(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[y]}})}var ce=ge((ye={},S(ye,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),S(ye,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ye)),fe=ge((xe={},S(xe,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(xe,w,{solid:"fass",regular:"fasr",light:"fasl"}),xe)),ue=ge((we={},S(we,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(we,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),we)),on=ge((ke={},S(ke,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(ke,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ke)),sn=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,oa="fa-layers-text",ln=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,cn=ge((Ne={},S(Ne,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(Ne,w,{900:"fass",400:"fasr",300:"fasl"}),Ne)),sa=[1,2,3,4,5,6,7,8,9,10],fn=sa.concat([11,12,13,14,15,16,17,18,19,20]),un=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},me=new Set;Object.keys(fe[y]).map(me.add.bind(me));Object.keys(fe[w]).map(me.add.bind(me));var mn=[].concat(ut,ve(me),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(sa.map(function(e){return"".concat(e,"x")})).concat(fn.map(function(e){return"w-".concat(e)})),se=U.FontAwesomeConfig||{};function dn(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var gn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gn.forEach(function(e){var t=st(e,2),a=t[0],n=t[1],r=vn(dn(a));r!=null&&(se[n]=r)})}var la={styleDefault:"solid",familyDefault:"classic",cssPrefix:na,replacementClass:ra,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};se.familyPrefix&&(se.cssPrefix=se.familyPrefix);var ae=d(d({},la),se);ae.autoReplaceSvg||(ae.observeMutations=!1);var g={};Object.keys(la).forEach(function(e){Object.defineProperty(g,e,{enumerable:!0,set:function(a){ae[e]=a,le.forEach(function(n){return n(g)})},get:function(){return ae[e]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){ae.cssPrefix=t,le.forEach(function(a){return a(g)})},get:function(){return ae.cssPrefix}});U.FontAwesomeConfig=g;var le=[];function hn(e){return le.push(e),function(){le.splice(le.indexOf(e),1)}}var Y=Ve,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pn(e){if(!(!e||!z)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=x.head.childNodes,n=null,r=a.length-1;r>-1;r--){var o=a[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=o)}return x.head.insertBefore(t,n),e}}var bn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function de(){for(var e=12,t="";e-- >0;)t+=bn[Math.random()*62|0];return t}function ne(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function mt(e){return e.classList?ne(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ca(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(ca(e[a]),'" ')},"").trim()}function Le(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function dt(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function xn(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(l)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:c,path:f}}function wn(e){var t=e.transform,a=e.width,n=a===void 0?Ve:a,r=e.height,o=r===void 0?Ve:r,s=e.startCentered,l=s===void 0?!1:s,c="";return l&&aa?c+="translate(".concat(t.x/Y-n/2,"em, ").concat(t.y/Y-o/2,"em) "):l?c+="translate(calc(-50% + ".concat(t.x/Y,"em), calc(-50% + ").concat(t.y/Y,"em)) "):c+="translate(".concat(t.x/Y,"em, ").concat(t.y/Y,"em) "),c+="scale(".concat(t.size/Y*(t.flipX?-1:1),", ").concat(t.size/Y*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var kn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function fa(){var e=na,t=ra,a=g.cssPrefix,n=g.replacementClass,r=kn;if(a!==e||n!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(a,"-")).replace(s,"--".concat(a,"-")).replace(l,".".concat(n))}return r}var Pt=!1;function We(){g.autoAddCss&&!Pt&&(pn(fa()),Pt=!0)}var Nn={mixout:function(){return{dom:{css:fa,insertCss:We}}},hooks:function(){return{beforeDOMElementCreation:function(){We()},beforeI2svg:function(){We()}}}},R=U||{};R[L]||(R[L]={});R[L].styles||(R[L].styles={});R[L].hooks||(R[L].hooks={});R[L].shims||(R[L].shims=[]);var _=R[L],ua=[],An=function e(){x.removeEventListener("DOMContentLoaded",e),_e=1,ua.map(function(t){return t()})},_e=!1;z&&(_e=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),_e||x.addEventListener("DOMContentLoaded",An));function On(e){z&&(_e?setTimeout(e,0):ua.push(e))}function he(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?ca(e):"<".concat(t," ").concat(yn(n),">").concat(o.map(he).join(""),"</").concat(t,">")}function Et(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Sn=function(t,a){return function(n,r,o,s){return t.call(a,n,r,o,s)}},Ue=function(t,a,n,r){var o=Object.keys(t),s=o.length,l=r!==void 0?Sn(a,r):a,c,f,u;for(n===void 0?(c=1,u=t[o[0]]):(c=0,u=n);c<s;c++)f=o[c],u=l(u,t[f],f,t);return u};function Cn(e){for(var t=[],a=0,n=e.length;a<n;){var r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var o=e.charCodeAt(a++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function Ke(e){var t=Cn(e);return t.length===1?t[0].toString(16):null}function Pn(e,t){var a=e.length,n=e.charCodeAt(t),r;return n>=55296&&n<=56319&&a>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function Tt(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function Qe(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,o=Tt(t);typeof _.hooks.addPack=="function"&&!r?_.hooks.addPack(e,Tt(t)):_.styles[e]=d(d({},_.styles[e]||{}),o),e==="fas"&&Qe("fa",t)}var Ae,Oe,Se,J=_.styles,En=_.shims,Tn=(Ae={},S(Ae,y,Object.values(ue[y])),S(Ae,w,Object.values(ue[w])),Ae),vt=null,ma={},da={},va={},ga={},ha={},In=(Oe={},S(Oe,y,Object.keys(ce[y])),S(Oe,w,Object.keys(ce[w])),Oe);function _n(e){return~mn.indexOf(e)}function jn(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!_n(r)?r:null}var pa=function(){var t=function(o){return Ue(J,function(s,l,c){return s[c]=Ue(l,o,{}),s},{})};ma=t(function(r,o,s){if(o[3]&&(r[o[3]]=s),o[2]){var l=o[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){r[c.toString(16)]=s})}return r}),da=t(function(r,o,s){if(r[s]=s,o[2]){var l=o[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){r[c]=s})}return r}),ha=t(function(r,o,s){var l=o[2];return r[s]=s,l.forEach(function(c){r[c]=s}),r});var a="far"in J||g.autoFetchSvg,n=Ue(En,function(r,o){var s=o[0],l=o[1],c=o[2];return l==="far"&&!a&&(l="fas"),typeof s=="string"&&(r.names[s]={prefix:l,iconName:c}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:l,iconName:c}),r},{names:{},unicodes:{}});va=n.names,ga=n.unicodes,vt=Re(g.styleDefault,{family:g.familyDefault})};hn(function(e){vt=Re(e.styleDefault,{family:g.familyDefault})});pa();function gt(e,t){return(ma[e]||{})[t]}function Mn(e,t){return(da[e]||{})[t]}function q(e,t){return(ha[e]||{})[t]}function ba(e){return va[e]||{prefix:null,iconName:null}}function Ln(e){var t=ga[e],a=gt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function H(){return vt}var ht=function(){return{prefix:null,iconName:null,rest:[]}};function Re(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?y:a,r=ce[n][e],o=fe[n][e]||fe[n][r],s=e in _.styles?e:null;return o||s||null}var It=(Se={},S(Se,y,Object.keys(ue[y])),S(Se,w,Object.keys(ue[w])),Se);function Fe(e){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,o=(t={},S(t,y,"".concat(g.cssPrefix,"-").concat(y)),S(t,w,"".concat(g.cssPrefix,"-").concat(w)),t),s=null,l=y;(e.includes(o[y])||e.some(function(f){return It[y].includes(f)}))&&(l=y),(e.includes(o[w])||e.some(function(f){return It[w].includes(f)}))&&(l=w);var c=e.reduce(function(f,u){var v=jn(g.cssPrefix,u);if(J[u]?(u=Tn[l].includes(u)?on[l][u]:u,s=u,f.prefix=u):In[l].indexOf(u)>-1?(s=u,f.prefix=Re(u,{family:l})):v?f.iconName=v:u!==g.replacementClass&&u!==o[y]&&u!==o[w]&&f.rest.push(u),!r&&f.prefix&&f.iconName){var h=s==="fa"?ba(f.iconName):{},b=q(f.prefix,f.iconName);h.prefix&&(s=null),f.iconName=h.iconName||b||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!J.far&&J.fas&&!g.autoFetchSvg&&(f.prefix="fas")}return f},ht());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===w&&(J.fass||g.autoFetchSvg)&&(c.prefix="fass",c.iconName=q(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=H()||"fas"),c}var Rn=function(){function e(){Ga(this,e),this.definitions={}}return Va(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){a.definitions[l]=d(d({},a.definitions[l]||{}),s[l]),Qe(l,s[l]);var c=ue[y][l];c&&Qe(c,s[l]),pa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(o){var s=r[o],l=s.prefix,c=s.iconName,f=s.icon,u=f[2];a[l]||(a[l]={}),u.length>0&&u.forEach(function(v){typeof v=="string"&&(a[l][v]=f)}),a[l][c]=f}),a}}]),e}(),_t=[],Z={},te={},Fn=Object.keys(te);function zn(e,t){var a=t.mixoutsTo;return _t=e,Z={},Object.keys(te).forEach(function(n){Fn.indexOf(n)===-1&&delete te[n]}),_t.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(a[s]=r[s]),Ie(r[s])==="object"&&Object.keys(r[s]).forEach(function(l){a[s]||(a[s]={}),a[s][l]=r[s][l]})}),n.hooks){var o=n.hooks();Object.keys(o).forEach(function(s){Z[s]||(Z[s]=[]),Z[s].push(o[s])})}n.provides&&n.provides(te)}),a}function Je(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var o=Z[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(n))}),t}function Q(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=Z[e]||[];r.forEach(function(o){o.apply(null,a)})}function F(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return te[e]?te[e].apply(null,t):void 0}function Ze(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||H();if(t)return t=q(a,t)||t,Et(ya.definitions,a,t)||Et(_.styles,a,t)}var ya=new Rn,Dn=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,Q("noAuto")},Yn={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(Q("beforeI2svg",t),F("pseudoElements2svg",t),F("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,On(function(){Wn({autoReplaceSvgRoot:a}),Q("watch",t)})}},$n={icon:function(t){if(t===null)return null;if(Ie(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:q(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Re(t[0]);return{prefix:n,iconName:q(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(sn))){var r=Fe(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=H();return{prefix:o,iconName:q(o,t)||t}}}},I={noAuto:Dn,config:g,dom:Yn,parse:$n,library:ya,findIconDefinition:Ze,toHtml:he},Wn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?x:a;(Object.keys(_.styles).length>0||g.autoFetchSvg)&&z&&g.autoReplaceSvg&&I.dom.i2svg({node:n})};function ze(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return he(n)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var n=x.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Un(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,o=e.styles,s=e.transform;if(dt(s)&&a.found&&!n.found){var l=a.width,c=a.height,f={x:l/c/2,y:.5};r.style=Le(d(d({},o),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Hn(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:s}),children:n}]}]}function pt(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,o=e.iconName,s=e.transform,l=e.symbol,c=e.title,f=e.maskId,u=e.titleId,v=e.extra,h=e.watchable,b=h===void 0?!1:h,A=n.found?n:a,P=A.width,k=A.height,E=r==="fak",N=[g.replacementClass,o?"".concat(g.cssPrefix,"-").concat(o):""].filter(function(D){return v.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(v.classes).join(" "),O={children:[],attributes:d(d({},v.attributes),{},{"data-prefix":r,"data-icon":o,class:N,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(k)})},T=E&&!~v.classes.indexOf("fa-fw")?{width:"".concat(P/k*16*.0625,"em")}:{};b&&(O.attributes[K]=""),c&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||de())},children:[c]}),delete O.attributes.title);var C=d(d({},O),{},{prefix:r,iconName:o,main:a,mask:n,maskId:f,transform:s,symbol:l,styles:d(d({},T),v.styles)}),X=n.found&&a.found?F("generateAbstractMask",C)||{children:[],attributes:{}}:F("generateAbstractIcon",C)||{children:[],attributes:{}},G=X.children,Ye=X.attributes;return C.children=G,C.attributes=Ye,l?Hn(C):Un(C)}function jt(e){var t=e.content,a=e.width,n=e.height,r=e.transform,o=e.title,s=e.extra,l=e.watchable,c=l===void 0?!1:l,f=d(d(d({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});c&&(f[K]="");var u=d({},s.styles);dt(r)&&(u.transform=wn({transform:r,startCentered:!0,width:a,height:n}),u["-webkit-transform"]=u.transform);var v=Le(u);v.length>0&&(f.style=v);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function Bn(e){var t=e.content,a=e.title,n=e.extra,r=d(d(d({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),o=Le(n.styles);o.length>0&&(r.style=o);var s=[];return s.push({tag:"span",attributes:r,children:[t]}),a&&s.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),s}var He=_.styles;function et(e){var t=e[0],a=e[1],n=e.slice(4),r=st(n,1),o=r[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:s}}var Xn={found:!1,width:512,height:512};function Gn(e,t){!ia&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function tt(e,t){var a=t;return t==="fa"&&g.styleDefault!==null&&(t=H()),new Promise(function(n,r){if(F("missingIconAbstract"),a==="fa"){var o=ba(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&He[t]&&He[t][e]){var s=He[t][e];return n(et(s))}Gn(e,t),n(d(d({},Xn),{},{icon:g.showMissingIcons&&e?F("missingIconAbstract")||{}:{}}))})}var Mt=function(){},at=g.measurePerformance&&be&&be.mark&&be.measure?be:{mark:Mt,measure:Mt},ie='FA "6.4.0"',Vn=function(t){return at.mark("".concat(ie," ").concat(t," begins")),function(){return xa(t)}},xa=function(t){at.mark("".concat(ie," ").concat(t," ends")),at.measure("".concat(ie," ").concat(t),"".concat(ie," ").concat(t," begins"),"".concat(ie," ").concat(t," ends"))},bt={begin:Vn,end:xa},Ee=function(){};function Lt(e){var t=e.getAttribute?e.getAttribute(K):null;return typeof t=="string"}function qn(e){var t=e.getAttribute?e.getAttribute(ct):null,a=e.getAttribute?e.getAttribute(ft):null;return t&&a}function Kn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function Qn(){if(g.autoReplaceSvg===!0)return Te.replace;var e=Te[g.autoReplaceSvg];return e||Te.replace}function Jn(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function Zn(e){return x.createElement(e)}function wa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?Jn:Zn:a;if(typeof e=="string")return x.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){r.appendChild(wa(s,{ceFn:n}))}),r}function er(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Te={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(wa(r),a)}),a.getAttribute(K)===null&&g.keepOriginalSource){var n=x.createComment(er(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~mt(a).indexOf(g.replacementClass))return Te.replace(t);var r=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var o=n[0].attributes.class.split(" ").reduce(function(l,c){return c===g.replacementClass||c.match(r)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var s=n.map(function(l){return he(l)}).join(`
`);a.setAttribute(K,""),a.innerHTML=s}};function Rt(e){e()}function ka(e,t){var a=typeof t=="function"?t:Ee;if(e.length===0)a();else{var n=Rt;g.mutateApproach===nn&&(n=U.requestAnimationFrame||Rt),n(function(){var r=Qn(),o=bt.begin("mutate");e.map(r),o(),a()})}}var yt=!1;function Na(){yt=!0}function nt(){yt=!1}var je=null;function Ft(e){if(St&&g.observeMutations){var t=e.treeCallback,a=t===void 0?Ee:t,n=e.nodeCallback,r=n===void 0?Ee:n,o=e.pseudoElementsCallback,s=o===void 0?Ee:o,l=e.observeMutationsRoot,c=l===void 0?x:l;je=new St(function(f){if(!yt){var u=H();ne(f).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Lt(v.addedNodes[0])&&(g.searchPseudoElements&&s(v.target),a(v.target)),v.type==="attributes"&&v.target.parentNode&&g.searchPseudoElements&&s(v.target.parentNode),v.type==="attributes"&&Lt(v.target)&&~un.indexOf(v.attributeName))if(v.attributeName==="class"&&qn(v.target)){var h=Fe(mt(v.target)),b=h.prefix,A=h.iconName;v.target.setAttribute(ct,b||u),A&&v.target.setAttribute(ft,A)}else Kn(v.target)&&r(v.target)})}}),z&&je.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function tr(){je&&je.disconnect()}function ar(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var o=r.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(n[s]=l.join(":").trim()),n},{})),a}function nr(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=Fe(mt(e));return r.prefix||(r.prefix=H()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Mn(r.prefix,e.innerText)||gt(r.prefix,Ke(e.innerText))),!r.iconName&&g.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function rr(e){var t=ne(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),a=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return g.autoA11y&&(a?t["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(n||de()):(t["aria-hidden"]="true",t.focusable="false")),t}function ir(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=nr(e),n=a.iconName,r=a.prefix,o=a.rest,s=rr(e),l=Je("parseNodeAttributes",{},e),c=t.styleParser?ar(e):[];return d({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:s}},l)}var or=_.styles;function Aa(e){var t=g.autoReplaceSvg==="nest"?zt(e,{styleParser:!1}):zt(e);return~t.extra.classes.indexOf(oa)?F("generateLayersText",e,t):F("generateSvgReplacementMutation",e,t)}var B=new Set;ut.map(function(e){B.add("fa-".concat(e))});Object.keys(ce[y]).map(B.add.bind(B));Object.keys(ce[w]).map(B.add.bind(B));B=ve(B);function Dt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var a=x.documentElement.classList,n=function(v){return a.add("".concat(Ct,"-").concat(v))},r=function(v){return a.remove("".concat(Ct,"-").concat(v))},o=g.autoFetchSvg?B:ut.map(function(u){return"fa-".concat(u)}).concat(Object.keys(or));o.includes("fa")||o.push("fa");var s=[".".concat(oa,":not([").concat(K,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(K,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=ne(e.querySelectorAll(s))}catch{}if(l.length>0)n("pending"),r("complete");else return Promise.resolve();var c=bt.begin("onTree"),f=l.reduce(function(u,v){try{var h=Aa(v);h&&u.push(h)}catch(b){ia||b.name==="MissingIcon"&&console.error(b)}return u},[]);return new Promise(function(u,v){Promise.all(f).then(function(h){ka(h,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(h){c(),v(h)})})}function sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Aa(e).then(function(a){a&&ka([a],t)})}function lr(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Ze(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ze(r||{})),e(n,d(d({},a),{},{mask:r}))}}var cr=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?j:n,o=a.symbol,s=o===void 0?!1:o,l=a.mask,c=l===void 0?null:l,f=a.maskId,u=f===void 0?null:f,v=a.title,h=v===void 0?null:v,b=a.titleId,A=b===void 0?null:b,P=a.classes,k=P===void 0?[]:P,E=a.attributes,N=E===void 0?{}:E,O=a.styles,T=O===void 0?{}:O;if(t){var C=t.prefix,X=t.iconName,G=t.icon;return ze(d({type:"icon"},t),function(){return Q("beforeDOMElementCreation",{iconDefinition:t,params:a}),g.autoA11y&&(h?N["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(A||de()):(N["aria-hidden"]="true",N.focusable="false")),pt({icons:{main:et(G),mask:c?et(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:X,transform:d(d({},j),r),symbol:s,title:h,maskId:u,titleId:A,extra:{attributes:N,styles:T,classes:k}})})}},fr={mixout:function(){return{icon:lr(cr)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Dt,a.nodeCallback=sr,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?x:n,o=a.callback,s=o===void 0?function(){}:o;return Dt(r,s)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,o=n.title,s=n.titleId,l=n.prefix,c=n.transform,f=n.symbol,u=n.mask,v=n.maskId,h=n.extra;return new Promise(function(b,A){Promise.all([tt(r,l),u.iconName?tt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var k=st(P,2),E=k[0],N=k[1];b([a,pt({icons:{main:E,mask:N},prefix:l,iconName:r,transform:c,symbol:f,maskId:v,title:o,titleId:s,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,o=a.main,s=a.transform,l=a.styles,c=Le(l);c.length>0&&(r.style=c);var f;return dt(s)&&(f=F("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),n.push(f||o.icon),{children:n,attributes:r}}}},ur={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,o=r===void 0?[]:r;return ze({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:a,params:n});var s=[];return a(function(l){Array.isArray(l)?l.map(function(c){s=s.concat(c.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(ve(o)).join(" ")},children:s}]})}}}},mr={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,o=r===void 0?null:r,s=n.classes,l=s===void 0?[]:s,c=n.attributes,f=c===void 0?{}:c,u=n.styles,v=u===void 0?{}:u;return ze({type:"counter",content:a},function(){return Q("beforeDOMElementCreation",{content:a,params:n}),Bn({content:a.toString(),title:o,extra:{attributes:f,styles:v,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(ve(l))}})})}}}},dr={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?j:r,s=n.title,l=s===void 0?null:s,c=n.classes,f=c===void 0?[]:c,u=n.attributes,v=u===void 0?{}:u,h=n.styles,b=h===void 0?{}:h;return ze({type:"text",content:a},function(){return Q("beforeDOMElementCreation",{content:a,params:n}),jt({content:a,transform:d(d({},j),o),title:l,extra:{attributes:v,styles:b,classes:["".concat(g.cssPrefix,"-layers-text")].concat(ve(f))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.title,o=n.transform,s=n.extra,l=null,c=null;if(aa){var f=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();l=u.width/f,c=u.height/f}return g.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([a,jt({content:a.innerHTML,width:l,height:c,transform:o,title:r,extra:s,watchable:!0})])}}},vr=new RegExp('"',"ug"),Yt=[1105920,1112319];function gr(e){var t=e.replace(vr,""),a=Pn(t,0),n=a>=Yt[0]&&a<=Yt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Ke(r?t[0]:t),isSecondary:n||r}}function $t(e,t){var a="".concat(an).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var o=ne(e.children),s=o.filter(function(G){return G.getAttribute(qe)===t})[0],l=U.getComputedStyle(e,t),c=l.getPropertyValue("font-family").match(ln),f=l.getPropertyValue("font-weight"),u=l.getPropertyValue("content");if(s&&!c)return e.removeChild(s),n();if(c&&u!=="none"&&u!==""){var v=l.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?w:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?fe[h][c[2].toLowerCase()]:cn[h][f],A=gr(v),P=A.value,k=A.isSecondary,E=c[0].startsWith("FontAwesome"),N=gt(b,P),O=N;if(E){var T=Ln(P);T.iconName&&T.prefix&&(N=T.iconName,b=T.prefix)}if(N&&!k&&(!s||s.getAttribute(ct)!==b||s.getAttribute(ft)!==O)){e.setAttribute(a,O),s&&e.removeChild(s);var C=ir(),X=C.extra;X.attributes[qe]=t,tt(N,b).then(function(G){var Ye=pt(d(d({},C),{},{icons:{main:G,mask:ht()},prefix:b,iconName:O,extra:X,watchable:!0})),D=x.createElement("svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=Ye.map(function(Ia){return he(Ia)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function hr(e){return Promise.all([$t(e,"::before"),$t(e,"::after")])}function pr(e){return e.parentNode!==document.head&&!~rn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Wt(e){if(z)return new Promise(function(t,a){var n=ne(e.querySelectorAll("*")).filter(pr).map(hr),r=bt.begin("searchPseudoElements");Na(),Promise.all(n).then(function(){r(),nt(),t()}).catch(function(){r(),nt(),a()})})}var br={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Wt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?x:n;g.searchPseudoElements&&Wt(r)}}},Ut=!1,yr={mixout:function(){return{dom:{unwatch:function(){Na(),Ut=!0}}}},hooks:function(){return{bootstrap:function(){Ft(Je("mutationObserverCallbacks",{}))},noAuto:function(){tr()},watch:function(a){var n=a.observeMutationsRoot;Ut?nt():Ft(Je("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Ht=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var o=r.toLowerCase().split("-"),s=o[0],l=o.slice(1).join("-");if(s&&l==="h")return n.flipX=!0,n;if(s&&l==="v")return n.flipY=!0,n;if(l=parseFloat(l),isNaN(l))return n;switch(s){case"grow":n.size=n.size+l;break;case"shrink":n.size=n.size-l;break;case"left":n.x=n.x-l;break;case"right":n.x=n.x+l;break;case"up":n.y=n.y-l;break;case"down":n.y=n.y+l;break;case"rotate":n.rotate=n.rotate+l;break}return n},a)},xr={mixout:function(){return{parse:{transform:function(a){return Ht(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Ht(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,o=a.containerWidth,s=a.iconWidth,l={transform:"translate(".concat(o/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(c," ").concat(f," ").concat(u)},h={transform:"translate(".concat(s/2*-1," -256)")},b={outer:l,inner:v,path:h};return{tag:"g",attributes:d({},b.outer),children:[{tag:"g",attributes:d({},b.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),b.path)}]}]}}}},Be={x:0,y:0,width:"100%",height:"100%"};function Bt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function wr(e){return e.tag==="g"?e.children:[e]}var kr={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),o=r?Fe(r.split(" ").map(function(s){return s.trim()})):ht();return o.prefix||(o.prefix=H()),a.mask=o,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,o=a.main,s=a.mask,l=a.maskId,c=a.transform,f=o.width,u=o.icon,v=s.width,h=s.icon,b=xn({transform:c,containerWidth:v,iconWidth:f}),A={tag:"rect",attributes:d(d({},Be),{},{fill:"white"})},P=u.children?{children:u.children.map(Bt)}:{},k={tag:"g",attributes:d({},b.inner),children:[Bt(d({tag:u.tag,attributes:d(d({},u.attributes),b.path)},P))]},E={tag:"g",attributes:d({},b.outer),children:[k]},N="mask-".concat(l||de()),O="clip-".concat(l||de()),T={tag:"mask",attributes:d(d({},Be),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,E]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:wr(h)},T]};return n.push(C,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(N,")")},Be)}),{children:n,attributes:r}}}},Nr={provides:function(t){var a=!1;U.matchMedia&&(a=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=d(d({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||l.children.push({tag:"animate",attributes:d(d({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(l),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:d(d({},s),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ar={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return a.symbol=o,a}}}},Or=[Nn,fr,ur,mr,dr,br,yr,xr,kr,Nr,Ar];zn(Or,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var rt=I.parse;I.findIconDefinition;I.toHtml;var Sr=I.icon;I.layer;I.text;I.counter;var Oa={exports:{}},Cr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pr=Cr,Er=Pr;function Sa(){}function Ca(){}Ca.resetWarningCache=Sa;var Tr=function(){function e(n,r,o,s,l,c){if(c!==Er){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ca,resetWarningCache:Sa};return a.PropTypes=a,a};Oa.exports=Tr();var Ir=Oa.exports;const p=_a(Ir);function Xt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Xt(Object(a),!0).forEach(function(n){ee(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Xt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Me(e){return Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Me(e)}function ee(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _r(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,o;for(o=0;o<n.length;o++)r=n[o],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function jr(e,t){if(e==null)return{};var a=_r(e,t),n,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function it(e){return Mr(e)||Lr(e)||Rr(e)||Fr()}function Mr(e){if(Array.isArray(e))return ot(e)}function Lr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rr(e,t){if(e){if(typeof e=="string")return ot(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ot(e,t)}}function ot(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Fr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zr(e){var t,a=e.beat,n=e.fade,r=e.beatFade,o=e.bounce,s=e.shake,l=e.flash,c=e.spin,f=e.spinPulse,u=e.spinReverse,v=e.pulse,h=e.fixedWidth,b=e.inverse,A=e.border,P=e.listItem,k=e.flip,E=e.size,N=e.rotation,O=e.pull,T=(t={"fa-beat":a,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":v,"fa-fw":h,"fa-inverse":b,"fa-border":A,"fa-li":P,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},ee(t,"fa-".concat(E),typeof E<"u"&&E!==null),ee(t,"fa-rotate-".concat(N),typeof N<"u"&&N!==null&&N!==0),ee(t,"fa-pull-".concat(O),typeof O<"u"&&O!==null),ee(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(T).map(function(C){return T[C]?C:null}).filter(function(C){return C})}function Dr(e){return e=e-0,e===e}function Pa(e){return Dr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Yr=["style"];function $r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Wr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var n=a.indexOf(":"),r=Pa(a.slice(0,n)),o=a.slice(n+1).trim();return r.startsWith("webkit")?t[$r(r)]=o:t[r]=o,t},{})}function Ea(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(c){return Ea(e,c)}),r=Object.keys(t.attributes||{}).reduce(function(c,f){var u=t.attributes[f];switch(f){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=Wr(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=u:c.attrs[Pa(f)]=u}return c},{attrs:{}}),o=a.style,s=o===void 0?{}:o,l=jr(a,Yr);return r.attrs.style=$($({},r.attrs.style),s),e.apply(void 0,[t.tag,$($({},r.attrs),l)].concat(it(n)))}var Ta=!1;try{Ta=!0}catch{}function Ur(){if(!Ta&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gt(e){if(e&&Me(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(rt.icon)return rt.icon(e);if(e===null)return null;if(e&&Me(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Xe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ee({},e,t):{}}var De=M.forwardRef(function(e,t){var a=e.icon,n=e.mask,r=e.symbol,o=e.className,s=e.title,l=e.titleId,c=e.maskId,f=Gt(a),u=Xe("classes",[].concat(it(zr(e)),it(o.split(" ")))),v=Xe("transform",typeof e.transform=="string"?rt.transform(e.transform):e.transform),h=Xe("mask",Gt(n)),b=Sr(f,$($($($({},u),v),h),{},{symbol:r,title:s,titleId:l,maskId:c}));if(!b)return Ur("Could not find icon",f),null;var A=b.abstract,P={ref:t};return Object.keys(e).forEach(function(k){De.defaultProps.hasOwnProperty(k)||(P[k]=e[k])}),Hr(A[0],P)});De.displayName="FontAwesomeIcon";De.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};De.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Hr=Ea.bind(null,M.createElement);qt.extend(Ma);function Br({post:e}){return m("div",{className:"p-6 flex space-x-2",children:[i("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-600 -scale-x-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:i("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),m("div",{className:"flex-1",children:[i("div",{className:"flex justify-between items-center",children:m("div",{children:[i("span",{className:"text-gray-800",children:e.user.name}),i("small",{className:"ml-2 text-sm text-gray-600",children:qt(e.created_at).fromNow()}),i("small",{className:"ml-2 text-sm text-gray-600",children:new Date(e.created_at).toLocaleString()}),e.created_at!==e.updated_at&&i("small",{className:"text-sm text-gray-600",children:" · edited"})]})}),i("p",{className:"mt-4 text-lg text-gray-900",children:e.message})]})]})}const Vt=[{name:"About",href:"#about"},{name:"Therapist",href:"#therapist"},{name:"Contact",href:"#contact"},{name:"News",href:"#news"}],Xr=[{name:"mdi-facebook",link:"https://www.facebook.com/hsiuchenlin1",icon:i(Xa,{})}];function Qr({auth:e,laravelVersion:t,phpVersion:a,posts:n}){const[r,o]=oe.useState(!1),[s,l]=oe.useState(!1),[c,f]=oe.useState(!1),u=()=>{!c&&window.pageYOffset>400?f(!0):c&&window.pageYOffset<=400&&f(!1)},v=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",u),m(pe,{children:[i(ja,{title:"Welcome"}),m("div",{className:"bg-white",children:[m("header",{className:"absolute inset-x-0 top-0 z-50",children:[m("nav",{className:"fixed top-0 left-0 w-full flex items-center justify-between p-6 lg:px-8","aria-label":"Global",children:[i("div",{className:"flex lg:flex-1",children:m("a",{href:"#",className:"-m-1.5",children:[i("span",{className:"sr-only",children:"Serenity Acupuncture"}),i("img",{className:"h-12 w-auto",src:"jing7.png",alt:""})]})}),i("div",{className:"flex lg:hidden",children:m("button",{type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:()=>o(!0),children:[i("span",{className:"sr-only",children:"Open main menu"}),i($a,{className:"h-6 w-6","aria-hidden":"true"})]})}),i("div",{className:"hidden lg:flex lg:gap-x-12",children:Vt.map(h=>i("a",{href:h.href,className:"text-sm font-semibold leading-6 text-gray-900",children:h.name},h.name))}),i("div",{className:"hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8",children:e.user?i($e,{href:route("dashboard"),className:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Dashboard"}):m(pe,{children:[i($e,{href:route("login"),className:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Log in"}),i($e,{href:route("register"),className:"ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Register"})]})})]}),m(re,{as:"div",className:"lg:hidden",open:r,onClose:o,children:[i("div",{className:"fixed inset-0 z-50"}),m(re.Panel,{className:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10",children:[m("div",{className:"flex items-center justify-between",children:[m("a",{href:"#",className:"-m-1.5 p-1.5",children:[i("span",{className:"sr-only",children:"Serenity Acupuncture"}),i("img",{className:"h-8 w-auto",src:"jing7.png",alt:""})]}),m("button",{type:"button",className:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:()=>o(!1),children:[i("span",{className:"sr-only",children:"Close menu"}),i(Wa,{className:"h-6 w-6","aria-hidden":"true"})]})]}),i("div",{className:"mt-6 flow-root",children:m("div",{className:"-my-6 divide-y divide-gray-500/10",children:[i("div",{className:"space-y-2 py-6",children:Vt.map(h=>i("a",{href:h.href,className:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",onClick:()=>o(!1),children:h.name},h.name))}),i("div",{className:"py-6",children:e.user?i(pe,{children:i("a",{href:route("dashboard"),className:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",onClick:()=>o(!1),children:"Dashboard"})}):m(pe,{children:[i("a",{href:route("login"),className:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",onClick:()=>o(!1),children:"Log in"}),i("a",{href:route("register"),className:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",onClick:()=>o(!1),children:"Register"})]})})]})})]})]})]}),m("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:[i("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:i("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),i("div",{className:"mx-auto max-w-2xl py-4 sm:py-6 lg:py-7",children:i("div",{className:"sm:mb-2 sm:flex sm:justify-center center-button",children:m("div",{className:"relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 booking-overlay button-container",children:[m("span",{className:"responsive-text-sm",children:["You can book without registering. "," "]}),m("a",{href:route("login"),className:"font-semibold text-indigo-600 responsive-link",children:[i("span",{className:"absolute inset-0","aria-hidden":"true"}),"Log in to view your booking history ",i("span",{"aria-hidden":"true",children:"→"})]})]})})}),i("div",{className:"relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8",children:m("div",{className:"image-container",children:[i("img",{src:"/img/image16.jpg",alt:"meditation"}),i("div",{className:"text-center text-overlay",children:m("div",{className:"mx-auto max-w-2xl",children:[i("h1",{className:"responsive-text-lg font-thin tracking-tight text-black sm:text-lg",children:"Welcome to "}),i("div",{className:"responsive-py-2"}),i("h1",{className:"font-thin font-weight tracking-tight text-white sm:text-6xl responsive-text-4xl",children:"Serenity Acupuncture"}),i("div",{className:"responsive-mt-16 flex items-center justify-center gap-x-6",children:i("img",{src:"/img/jing8.png",className:"responsive-image"})}),i("div",{className:"responsive-mt-16 flex items-center justify-center gap-x-6",children:m("a",{href:"#",className:"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:h=>{h.preventDefault(),l(!0)},children:["Booking ",i("span",{"aria-hidden":"true",children:"→"})]})})]})})]})}),i(re,{as:"div",open:s,onClose:()=>l(!1),children:m("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[i(re.Overlay,{className:"fixed inset-0 bg-black opacity-40"}),m("div",{className:"relative bg-white rounded-md max-w-md mx-auto p-6 text-center",children:[i(re.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Appointments"}),m("p",{className:"mt-2 text-sm text-gray-500",children:["Please",m("a",{href:"tel:+1.250.871.8899",style:{textDecoration:"none",color:"green"},children:[i("span",{className:"mdi mdi-phone text-green-500 mr-2"}),"Call +1 (250) 871 - 8899"]})," or",m("a",{href:"sms:+1.250.871.8899",style:{textDecoration:"none",color:"blue"},children:[i("span",{className:"mdi mdi-phone text-green-500 mr-2"}),"Click here to send a text message"]})," to schedule an appointment. The online booking system is currently under construction and will be available soon. We apologize for the inconvenience."]}),i("button",{className:"mt-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md",onClick:()=>l(!1),children:"Close"})]})]})}),i("div",{className:"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]","aria-hidden":"true",children:i("div",{className:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})})]}),i("section",{id:"about",className:"py-12",children:i("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",children:m("div",{className:"max-w-3xl mx-auto",children:[i("h4",{className:"text-2xl font-extrabold text-gray-900 text-center",children:"What We Stand For"}),i("div",{className:"py-10"}),m("div",{className:"grid grid-cols-1 gap-24-switch sm:grid-cols-2",children:[i("div",{children:i("img",{className:"h-64 w-full object-cover rounded-lg",src:"/img/image8.jpg",alt:""})}),m("div",{children:[i("h5",{className:"text-lg leading-6 font-medium text-gray-900",children:"Our Vision"}),i("div",{className:"py-2"}),i("p",{className:"text-base text-gray-500",children:"To become the preferred Acupuncture Therapy Clinic on Vancouver Island and in the surrounding areas. Our primary objective is to ensure that you feel better after each treatment and that you live a healthier, happier life as a result. Our relationship with you will be built on trust, mutual respect, and collaboration."})]})]}),i("div",{className:"py-7"}),i("hr",{className:"border-gray-200"}),i("div",{className:"py-7"}),m("div",{className:"grid grid-cols-1 gap-24-switch sm:grid-cols-2",children:[m("div",{children:[i("div",{className:"mobile-hidden-false pb-6 mb-6",children:i("img",{className:"h-64 w-full object-cover rounded-lg",src:"/img/image7.jpg",alt:""})}),i("h5",{className:"text-lg leading-6 font-medium text-gray-900",children:"Our Mission"}),i("div",{className:"py-2"}),i("p",{className:"text-base text-gray-500",children:'To provide exceptional treatments utilizing an ancient healing technique to our patients who seek pain relief and improved well-being. Healing encompasses multiple factors, and the term "healer" has gained significant popularity. In reality, we all have the capacity to heal one another, as long as we hold good intentions.'})]}),i("div",{className:"mobile-hidden-true",children:i("img",{className:"h-64 w-full object-cover rounded-lg",src:"/img/image7.jpg",alt:""})})]}),i("div",{className:"py-7"}),i("hr",{className:"border-gray-200"}),i("div",{className:"py-7"}),m("div",{className:"grid grid-cols-1 gap-24-switch sm:grid-cols-2",children:[i("div",{children:i("img",{className:"h-64 w-full object-cover rounded-lg",src:"/img/image13.jpg",alt:""})}),m("div",{children:[i("h5",{className:"text-lg leading-6 font-medium text-gray-900",children:"Our Values"}),i("div",{className:"py-2"}),i("p",{className:"text-base text-gray-500",children:"Canada is a multicultural society that allows us to embrace and appreciate the values of others, as well as our own differences. This diversity strengthens us as a united and progressive society. Therefore, we actively acknowledge and respect professional and individual diversity at both the organizational and patient levels."})]})]})]})})}),i("section",{id:"therapist",children:i("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",children:m("div",{className:"max-w-3xl mx-auto",children:[i("h4",{className:"text-2xl font-extrabold text-gray-900 text-center",children:"Our Therapist"}),i("div",{className:"py-10"}),m("div",{className:"grid grid-cols-1 gap-24-switch sm:grid-cols-2",children:[i("div",{children:i("img",{className:"h-64 w-full object-cover rounded-lg",src:"/img/sa03.jpg",alt:""})}),m("div",{children:[i("h5",{className:"text-lg leading-6 font-medium text-gray-900",children:"Hsiu-chen Lin"}),i("div",{className:"py-2"}),i("p",{className:"text-base text-gray-500",children:"Hsiu-chen is a highly experienced therapist, holding certifications as a Registered Acupuncturist (R.Ac) and a Registered Traditional Chinese Medicine Practitioner (R.TCMP). With over fifteen years of expertise, Hsiu-chen has successfully aided patients in the British Columbia area, enabling them to improve their well-being and live more fulfilling lives. Her profound knowledge and skills were acquired through her graduation from the Canadian College of Oriental Medicine and Acupuncture."})]})]}),i("div",{className:"py-7"}),i("hr",{className:"border-gray-200"}),i("div",{className:"py-7"}),m("div",{className:"grid grid-cols-1 gap-24-switch sm:grid-cols-2",children:[m("div",{children:[i("div",{className:"mobile-hidden-false pb-6 mb-6",children:i("img",{className:"h-64 w-full object-cover rounded-lg",src:"/img/image6.jpg",alt:""})}),i("h5",{className:"text-lg leading-6 font-medium text-gray-900",children:"Treatment and Healing"}),i("div",{className:"py-2"}),i("p",{className:"text-base text-gray-500",children:"Serenity Acupuncture specializes in providing traditional treatments that address a wide range of concerns. Our treatment approach is designed to effectively manage various issues, including:"}),i("br",{}),m("ul",{className:"text-base text-gray-500",children:[i("li",{children:"- Enhancing the immune system."}),i("li",{children:"- Alleviating digestive concerns."}),i("li",{children:"- Improving sleep quality."}),i("li",{children:"- Easing muscle aches and migraines."}),i("li",{children:"- Managing both chronic and acute pain."}),i("li",{children:"- Reducing stress, anxiety, and depression."}),i("li",{children:"- Addressing insomnia and low energy levels."})]})]}),i("div",{children:i("img",{className:"mobile-hidden-true h-64 w-full object-cover rounded-lg",src:"/img/image6.jpg",alt:""})})]}),i("div",{className:"py-7"}),i("hr",{className:"border-gray-200"}),i("div",{className:"py-7"}),m("div",{className:"grid grid-cols-1 gap-24-switch sm:grid-cols-2",children:[i("div",{children:i("img",{className:"h-64 w-full object-cover rounded-lg",src:"/img/image4.jpg",alt:""})}),m("div",{children:[i("h5",{className:"text-lg leading-6 font-medium text-gray-900",children:"Clinical Practice"}),i("div",{className:"py-2"}),m("p",{className:"text-base text-gray-500",children:["Acupuncture is a renowned form of alternative medicine and an integral part of traditional Chinese medicine (TCM). It involves the careful insertion of thin needles into specific points on the body, with the aim of providing pain relief and promoting overall well-being.",i("br",{}),i("br",{}),"Central to the practice of acupuncture is the belief in the existence of life force energy, known as Qi, and the interconnected pathways called meridians. According to this philosophy, when Qi flows smoothly through the meridians, the body is in a state of balance and good health.",i("br",{}),i("br",{}),"By stimulating specific acupuncture points, practitioners seek to restore the harmonious flow of Qi and restore balance within the body's systems. Acupuncture is often used to address a wide range of health conditions and is known for its effectiveness in providing pain relief and promoting overall wellness."]}),i("br",{})]})]}),i("div",{className:"py-7"}),i("hr",{className:"border-gray-200"}),i("div",{className:"py-7"}),m("div",{className:"grid grid-cols-1 gap-24-switch sm:grid-cols-2",children:[m("div",{children:[i("div",{className:"mobile-hidden-false pb-6 mb-6",children:i("img",{className:"h-64 w-full object-cover rounded-lg",src:"/img/sa02.jpg",alt:""})}),i("h5",{className:"text-lg leading-6 font-medium text-gray-900",children:"Efficacy and Safety"}),i("div",{className:"py-2"}),i("p",{className:"text-base text-gray-500",children:"At Serenity Acupuncture, we provide acupuncture services that promote physical comfort, strength, and flexibility in your overall well-being while creating a relaxing atmosphere to foster emotional calm. our dedicated therapist is devoted to meeting your individual needs and providing you with exceptional acupuncture services."})]}),i("div",{children:i("img",{className:"mobile-hidden-true h-64 w-full object-cover rounded-lg",src:"/img/sa02.jpg",alt:""})})]}),i("div",{className:"py-7"}),i("hr",{className:"border-gray-200"}),i("div",{className:"py-7"}),m("div",{className:"grid grid-cols-1 gap-24-switch sm:grid-cols-2",children:[i("div",{children:i("img",{className:"h-64 w-full object-cover rounded-lg",src:"/img/image5.jpg",alt:""})}),m("div",{children:[i("h5",{className:"text-lg leading-6 font-medium text-gray-900",children:"Light and Hope"}),i("div",{className:"py-2"}),i("p",{className:"text-base text-gray-500",children:"In addition, acupuncture is frequently combined with complementary treatments like herbal medicine, dietary therapy, and lifestyle adjustments. This integrated approach amplifies the effectiveness of the treatment plan and nurtures the comprehensive well-being of individuals."})]})]}),i("div",{className:"py-7"}),i("hr",{className:"border-gray-200"}),i("div",{className:"py-7"}),m("div",{className:"grid grid-cols-1 gap-24-switch sm:grid-cols-2",children:[m("div",{children:[i("div",{className:"mobile-hidden-false pb-6 mb-6",children:i("img",{className:"h-64 w-full object-cover rounded-lg",src:"/img/image11.jpg",alt:""})}),i("h5",{className:"text-lg leading-6 font-medium text-gray-900",children:"Trust, Respect, and Happiness"}),i("div",{className:"py-2"}),i("p",{className:"text-base text-gray-500",children:"By utilizing specific acupuncture points, we aim to restore harmony within your body's energy systems, alleviating stress, anxiety, and emotional imbalances. Our goal is to help you achieve serenity and well-being through the ancient practice of acupuncture."})]}),i("div",{children:i("img",{className:"mobile-hidden-true h-64 w-full object-cover rounded-lg",src:"/img/image11.jpg",alt:""})})]}),i("div",{className:"py-7"})]})})}),i("section",{id:"contact",className:"py-12",children:m("div",{className:"container mx-auto px-4",children:[i("div",{className:"max-w-3xl mx-auto",children:i("h4",{className:"text-2xl font-extrabold text-gray-900 text-center",children:"Contact Us"})}),i("div",{className:"py-10"}),m("div",{className:"grid grid-cols-3 sm:grid-cols-3 gap-14",children:[i("div",{children:m("div",{className:"mb-4",children:[i("p",{className:"text-h7 text-center",children:"Kind"}),i("br",{}),i("img",{className:"h-96 sm:h-144 w-full object-cover rounded-lg",src:"/img/image12.jpg",alt:""})]})}),i("div",{children:m("div",{className:"mb-4",children:[i("p",{className:"text-h7 text-center",children:"Patient"}),i("br",{}),i("img",{className:"h-96 sm:h-144 w-full object-cover rounded-lg",src:"/img/sa05.jpg",alt:""})]})}),i("div",{children:m("div",{className:"mb-4",children:[i("p",{className:"text-h7 text-center",children:"Love"}),i("br",{}),i("img",{className:"h-96 sm:h-144 w-full object-cover rounded-lg",src:"/img/image3.jpg",alt:""})]})})]}),i("div",{className:"py-7"}),m("div",{className:"flex flex-wrap justify-between",children:[m("div",{className:"w-full sm:w-auto justify-center",children:[i("div",{className:"text-h6 bold",children:"Clinic Availability"}),i("div",{className:"py-1"}),i("div",{children:i("table",{className:"w-full",children:m("tbody",{children:[m("tr",{children:[i("td",{className:"pr-4",children:m("div",{className:"flex items-center",children:[i("span",{className:"mdi mdi-calendar text-blue-500 mr-2"}),"Monday to Thursday"]})}),i("td",{children:i("span",{style:{color:"#2196F3",filter:"brightness(85%)"},children:"8:30 am - 7:00 pm"})}),i("td",{})]}),m("tr",{children:[i("td",{className:"pr-4",children:m("div",{className:"flex items-center",children:[i("span",{className:"mdi mdi-calendar text-blue-500 mr-2"}),"Friday"]})}),i("td",{children:i("span",{style:{color:"#2196F3",filter:"brightness(85%)"},children:"8:30 am - 5:30 pm"})}),i("td",{})]}),m("tr",{children:[i("td",{className:"pr-4",children:m("div",{className:"flex items-center",children:[i("span",{className:"mdi mdi-calendar text-blue-500 mr-2"}),"Saturday"]})}),i("td",{children:i("span",{style:{color:"#2196F3",filter:"brightness(85%)"},children:"9:00 am - 5:00 pm"})}),i("td",{})]}),m("tr",{children:[i("td",{className:"pr-4",children:m("div",{className:"flex items-center",children:[i("span",{className:"mdi mdi-calendar text-red-500 mr-2"}),i("span",{style:{color:"rgba(217,48,37,1.00)"},children:"Sunday"})]})}),i("td",{children:i("span",{style:{fontWeight:400,color:"rgba(217,48,37,1.00)"},children:"Closed"})}),i("td",{})]})]})})}),i("div",{className:"py-14"}),i("div",{className:"text-h6 bold",children:"Phone"}),i("ul",{children:i("li",{children:m("a",{href:"#",onClick:h=>{h.preventDefault(),l(!0)},style:{textDecoration:"none",color:"darkgreen"},children:[i("span",{className:"mdi mdi-phone text-green-500 mr-2"}),"+1 (250) 871 - 8899"]})})}),i("div",{className:"py-14"}),i("div",{className:"flex lg:items-center lg:gap-x-10",children:Xr.map(h=>i("a",{href:h.link,className:"text-gray-900 mr-4",target:"_blank",rel:"noopener noreferrer",children:i("span",{className:"text-2xl",children:h.icon})},h.name))}),i("div",{className:"py-14"})]}),i("div",{className:"w-full sm:w-auto justify-center",children:i("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.218825372587!2d-124.99849438457963!3d49.68785187937745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5488140aac521a05%3A0xb4df04e1ec24c6a8!2sSerenity%20Acupuncture(Hsiu-chen%20Lin)!5e0!3m2!1sen!2sca!4v1669714043657!5m2!1sen!2sca",width:"600",height:"450",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})]})}),m("section",{id:"news",className:"py-12",children:[i("div",{className:"max-w-3xl mx-auto",children:i("h4",{className:"text-2xl font-extrabold text-gray-900 text-center",children:"News"})}),i("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:n.map(h=>i(Br,{post:h},h.id))})]}),i("footer",{className:"flex flex-col items-center justify-center",children:i("div",{className:"bg-white flex w-100 items-center px-4",children:m("p",{className:"text-gray-500",children:["© ",new Date().getFullYear(),", Serenity Acupuncture. All rights reserved."]})})}),i("div",{className:"py-7"})]}),i("div",{className:"fixed bottom-4 right-4",children:c&&i("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center",onClick:v,children:"↑"})})]})}export{Qr as default};
