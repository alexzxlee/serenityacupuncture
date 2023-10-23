import{R as p,r as a,b as Ye,e as ne}from"./app-02160b21.js";import{a as J,c as _,l as k,u as O,s as ae,L as y,D as S,b as $,y as T,p as Ge,t as K,f as Ee,T as Ve,o as qe,j as ve,C as Xe,g as G}from"./use-is-mounted-1cad7a44.js";var ge;let N=(ge=p.useId)!=null?ge:function(){let e=J(),[t,n]=p.useState(e?()=>_.nextId():null);return k(()=>{t===null&&n(_.nextId())},[t]),t!=null?""+t:void 0};function we(e){return _.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let re=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),be=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(be||{}),Je=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Je||{});function Ke(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(re)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var $e=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))($e||{});function ze(e,t=0){var n;return e===((n=we(e))==null?void 0:n.body)?!1:O(t,{[0](){return e.matches(re)},[1](){let r=e;for(;r!==null;){if(r.matches(re))return!0;r=r.parentElement}return!1}})}function x(e){e==null||e.focus({preventScroll:!0})}let Qe=["textarea","input"].join(",");function Ze(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Qe))!=null?n:!1}function et(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),u=t(r);if(l===null||u===null)return 0;let o=l.compareDocumentPosition(u);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function V(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?et(e):e:Ke(e);l.length>0&&o.length>1&&(o=o.filter(E=>!l.includes(E))),r=r??u.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},s=0,f=o.length,v;do{if(s>=f||s+f<=0)return 0;let E=c+s;if(t&16)E=(E+f)%f;else{if(E<0)return 3;if(E>=f)return 1}v=o[E],v==null||v.focus(d),s+=i}while(v!==u.activeElement);return t&6&&Ze(v)&&v.select(),v.hasAttribute("tabindex")||v.setAttribute("tabindex","0"),2}function Z(e,t,n){let r=ae(t);a.useEffect(()=>{function l(u){r.current(u)}return document.addEventListener(e,l,n),()=>document.removeEventListener(e,l,n)},[e,n])}function tt(e,t,n=!0){let r=a.useRef(!1);a.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function l(o,i){if(!r.current||o.defaultPrevented)return;let c=function s(f){return typeof f=="function"?s(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),d=i(o);if(d!==null&&d.getRootNode().contains(d)){for(let s of c){if(s===null)continue;let f=s instanceof HTMLElement?s:s.current;if(f!=null&&f.contains(d)||o.composed&&o.composedPath().includes(f))return}return!ze(d,$e.Loose)&&d.tabIndex!==-1&&o.preventDefault(),t(o,d)}}let u=a.useRef(null);Z("mousedown",o=>{var i,c;r.current&&(u.current=((c=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:c[0])||o.target)},!0),Z("click",o=>{u.current&&(l(o,()=>u.current),u.current=null)},!0),Z("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function nt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&rt(n)?!1:r}function rt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let ot="div";var q=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(q||{});function lt(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return S({ourProps:l,theirProps:r,slot:{},defaultTag:ot,name:"Hidden"})}let oe=y(lt);var ye=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ye||{});function ce(e,t){let n=a.useRef([]),r=$(e);a.useEffect(()=>{let l=[...n.current];for(let[u,o]of t.entries())if(n.current[u]!==o){let i=r(t,l);return n.current=t,i}},[r,...t])}function ut(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function it(e,t,n){let r=ae(t);a.useEffect(()=>{function l(u){r.current(u)}return window.addEventListener(e,l,n),()=>window.removeEventListener(e,l,n)},[e,n])}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function at(){let e=a.useRef(0);return it("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function z(...e){return a.useMemo(()=>we(...e),[...e])}function Se(e,t,n,r){let l=ae(n);a.useEffect(()=>{e=e??window;function u(o){l.current(o)}return e.addEventListener(t,u,r),()=>e.removeEventListener(t,u,r)},[e,t,r])}function Pe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let ct="div";var Te=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Te||{});function st(e,t){let n=a.useRef(null),r=T(n,t),{initialFocus:l,containers:u,features:o=30,...i}=e;J()||(o=1);let c=z(n);pt({ownerDocument:c},!!(o&16));let d=mt({ownerDocument:c,container:n,initialFocus:l},!!(o&2));vt({ownerDocument:c,container:n,containers:u,previousActiveElement:d},!!(o&8));let s=at(),f=$(g=>{let P=n.current;P&&(D=>D())(()=>{O(s.current,{[B.Forwards]:()=>{V(P,F.First,{skipElements:[g.relatedTarget]})},[B.Backwards]:()=>{V(P,F.Last,{skipElements:[g.relatedTarget]})}})})}),v=Ge(),E=a.useRef(!1),L={ref:r,onKeyDown(g){g.key=="Tab"&&(E.current=!0,v.requestAnimationFrame(()=>{E.current=!1}))},onBlur(g){let P=Pe(u);n.current instanceof HTMLElement&&P.add(n.current);let D=g.relatedTarget;D instanceof HTMLElement&&D.dataset.headlessuiFocusGuard!=="true"&&(Le(P,D)||(E.current?V(n.current,O(s.current,{[B.Forwards]:()=>F.Next,[B.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&x(g.target)))}};return p.createElement(p.Fragment,null,!!(o&4)&&p.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:q.Focusable}),S({ourProps:L,theirProps:i,defaultTag:ct,name:"FocusTrap"}),!!(o&4)&&p.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:q.Focusable}))}let dt=y(st),I=Object.assign(dt,{features:Te}),A=[];if(typeof window<"u"&&typeof document<"u"){let e=function(t){t.target instanceof HTMLElement&&t.target!==document.body&&A[0]!==t.target&&(A.unshift(t.target),A=A.filter(n=>n!=null&&n.isConnected),A.splice(10))};window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}function ft(e=!0){let t=a.useRef(A.slice());return ce(([n],[r])=>{r===!0&&n===!1&&K(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=A.slice())},[e,A,t]),$(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function pt({ownerDocument:e},t){let n=ft(t);ce(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&x(n())},[t]);let r=a.useRef(!1);a.useEffect(()=>(r.current=!1,()=>{r.current=!0,K(()=>{r.current&&x(n())})}),[])}function mt({ownerDocument:e,container:t,initialFocus:n},r){let l=a.useRef(null),u=Ee();return ce(()=>{if(!r)return;let o=t.current;o&&K(()=>{if(!u.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){l.current=i;return}}else if(o.contains(i)){l.current=i;return}n!=null&&n.current?x(n.current):V(o,F.First)===be.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function vt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let u=Ee();Se(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!u.current)return;let i=Pe(n);t.current instanceof HTMLElement&&i.add(t.current);let c=r.current;if(!c)return;let d=o.target;d&&d instanceof HTMLElement?Le(i,d)?(r.current=d,x(d)):(o.preventDefault(),o.stopPropagation(),x(c)):x(r.current)},!0)}function Le(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let De=a.createContext(!1);function gt(){return a.useContext(De)}function le(e){return p.createElement(De.Provider,{value:e.force},e.children)}function ht(e){let t=gt(),n=a.useContext(Ae),r=z(e),[l,u]=a.useState(()=>{if(!t&&n!==null||_.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return a.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),a.useEffect(()=>{t||n!==null&&u(n.current)},[n,u,t]),l}let Et=a.Fragment;function wt(e,t){let n=e,r=a.useRef(null),l=T(Ve(s=>{r.current=s}),t),u=z(r),o=ht(r),[i]=a.useState(()=>{var s;return _.isServer?null:(s=u==null?void 0:u.createElement("div"))!=null?s:null}),c=J(),d=a.useRef(!1);return k(()=>{if(d.current=!1,!(!o||!i))return o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i)),()=>{d.current=!0,K(()=>{var s;d.current&&(!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((s=o.parentElement)==null||s.removeChild(o))))})}},[o,i]),c?!o||!i?null:Ye.createPortal(S({ourProps:{ref:l},theirProps:n,defaultTag:Et,name:"Portal"}),i):null}let bt=a.Fragment,Ae=a.createContext(null);function $t(e,t){let{target:n,...r}=e,l={ref:T(t)};return p.createElement(Ae.Provider,{value:n},S({ourProps:l,theirProps:r,defaultTag:bt,name:"Popover.Group"}))}let yt=y(wt),St=y($t),ue=Object.assign(yt,{Group:St}),Fe=a.createContext(null);function Re(){let e=a.useContext(Fe);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Re),t}return e}function Pt(){let[e,t]=a.useState([]);return[e.length>0?e.join(" "):void 0,a.useMemo(()=>function(n){let r=$(u=>(t(o=>[...o,u]),()=>t(o=>{let i=o.slice(),c=i.indexOf(u);return c!==-1&&i.splice(c,1),i}))),l=a.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(Fe.Provider,{value:l},n.children)},[t])]}let Tt="p";function Lt(e,t){let n=N(),{id:r=`headlessui-description-${n}`,...l}=e,u=Re(),o=T(t);k(()=>u.register(r),[r,u.register]);let i={ref:o,...u.props,id:r};return S({ourProps:i,theirProps:l,slot:u.slot||{},defaultTag:Tt,name:u.name||"Description"})}let Dt=y(Lt),At=Object.assign(Dt,{}),se=a.createContext(()=>{});se.displayName="StackContext";var ie=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ie||{});function Ft(){return a.useContext(se)}function Rt({children:e,onUpdate:t,type:n,element:r,enabled:l}){let u=Ft(),o=$((...i)=>{t==null||t(...i),u(...i)});return k(()=>{let i=l===void 0||l===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,l]),p.createElement(se.Provider,{value:o},e)}function xt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Mt=typeof Object.is=="function"?Object.is:xt,{useState:Ct,useEffect:Ot,useLayoutEffect:kt,useDebugValue:Nt}=ne;function It(e,t,n){const r=t(),[{inst:l},u]=Ct({inst:{value:r,getSnapshot:t}});return kt(()=>{l.value=r,l.getSnapshot=t,ee(l)&&u({inst:l})},[e,r,t]),Ot(()=>(ee(l)&&u({inst:l}),e(()=>{ee(l)&&u({inst:l})})),[e]),Nt(r),r}function ee(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Mt(n,r)}catch{return!0}}function Ht(e,t,n){return t()}const Bt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_t=!Bt,Ut=_t?Ht:It,jt="useSyncExternalStore"in ne?(e=>e.useSyncExternalStore)(ne):Ut;function Wt(e){return jt(e.subscribe,e.getSnapshot,e.getSnapshot)}function Yt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...u){let o=t[l].call(n,...u);o&&(n=o,r.forEach(i=>i()))}}}function Gt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,u=e-l;n.style(r,"paddingRight",`${u}px`)}}}function Vt(){if(!ut())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let u=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:c}=new URL(i.href),d=t.querySelector(c);d&&!l(d)&&(u=d)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),u&&u.isConnected&&(u.scrollIntoView({block:"nearest"}),u=null)})}}}function qt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Xt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let R=Yt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:qe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Xt(n)},l=[Vt(),Gt(),qt()];l.forEach(({before:u})=>u==null?void 0:u(r)),l.forEach(({after:u})=>u==null?void 0:u(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});R.subscribe(()=>{let e=R.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&R.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&R.dispatch("TEARDOWN",n)}});function Jt(e,t,n){let r=Wt(R),l=e?r.get(e):void 0,u=l?l.count>0:!1;return k(()=>{if(!(!e||!t))return R.dispatch("PUSH",e,n),()=>R.dispatch("POP",e,n)},[t,e]),u}let te=new Map,H=new Map;function he(e,t=!0){k(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let i=(o=H.get(r))!=null?o:1;if(i===1?H.delete(r):H.set(r,i-1),i!==1)return;let c=te.get(r);c&&(c["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",c["aria-hidden"]),r.inert=c.inert,te.delete(r))}let u=(n=H.get(r))!=null?n:0;return H.set(r,u+1),u!==0||(te.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}var Kt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Kt||{}),zt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(zt||{});let Qt={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},X=a.createContext(null);X.displayName="DialogContext";function U(e){let t=a.useContext(X);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return t}function Zt(e,t,n=()=>[document.body]){Jt(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function en(e,t){return O(t.type,Qt,e,t)}let tn="div",nn=ve.RenderStrategy|ve.Static;function rn(e,t){let n=N(),{id:r=`headlessui-dialog-${n}`,open:l,onClose:u,initialFocus:o,__demoMode:i=!1,...c}=e,[d,s]=a.useState(0),f=Xe();l===void 0&&f!==null&&(l=(f&G.Open)===G.Open);let v=a.useRef(null),E=T(v,t),L=a.useRef(null),g=z(v),P=e.hasOwnProperty("open")||f!==null,D=e.hasOwnProperty("onClose");if(!P&&!D)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!P)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!D)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof u!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${u}`);let w=l?0:1,[M,xe]=a.useReducer(en,{titleId:null,descriptionId:null,panelRef:a.createRef()}),C=$(()=>u(!1)),de=$(m=>xe({type:0,id:m})),j=J()?i?!1:w===0:!1,W=d>1,fe=a.useContext(X)!==null,Me=W?"parent":"leaf",pe=f!==null?(f&G.Closing)===G.Closing:!1,Ce=(()=>fe||pe?!1:j)(),Oe=a.useCallback(()=>{var m,b;return(b=Array.from((m=g==null?void 0:g.querySelectorAll("body > *"))!=null?m:[]).find(h=>h.id==="headlessui-portal-root"?!1:h.contains(L.current)&&h instanceof HTMLElement))!=null?b:null},[L]);he(Oe,Ce);let ke=(()=>W?!0:j)(),Ne=a.useCallback(()=>{var m,b;return(b=Array.from((m=g==null?void 0:g.querySelectorAll("[data-headlessui-portal]"))!=null?m:[]).find(h=>h.contains(L.current)&&h instanceof HTMLElement))!=null?b:null},[L]);he(Ne,ke);let Q=$(()=>{var m,b;return[...Array.from((m=g==null?void 0:g.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?m:[]).filter(h=>!(h===document.body||h===document.head||!(h instanceof HTMLElement)||h.contains(L.current)||M.panelRef.current&&h.contains(M.panelRef.current))),(b=M.panelRef.current)!=null?b:v.current]}),Ie=(()=>!(!j||W))();tt(()=>Q(),C,Ie);let He=(()=>!(W||w!==0))();Se(g==null?void 0:g.defaultView,"keydown",m=>{He&&(m.defaultPrevented||m.key===ye.Escape&&(m.preventDefault(),m.stopPropagation(),C()))});let Be=(()=>!(pe||w!==0||fe))();Zt(g,Be,Q),a.useEffect(()=>{if(w!==0||!v.current)return;let m=new ResizeObserver(b=>{for(let h of b){let Y=h.target.getBoundingClientRect();Y.x===0&&Y.y===0&&Y.width===0&&Y.height===0&&C()}});return m.observe(v.current),()=>m.disconnect()},[w,v,C]);let[_e,Ue]=Pt(),je=a.useMemo(()=>[{dialogState:w,close:C,setTitleId:de},M],[w,M,C,de]),me=a.useMemo(()=>({open:w===0}),[w]),We={ref:E,id:r,role:"dialog","aria-modal":w===0?!0:void 0,"aria-labelledby":M.titleId,"aria-describedby":_e};return p.createElement(Rt,{type:"Dialog",enabled:w===0,element:v,onUpdate:$((m,b)=>{b==="Dialog"&&O(m,{[ie.Add]:()=>s(h=>h+1),[ie.Remove]:()=>s(h=>h-1)})})},p.createElement(le,{force:!0},p.createElement(ue,null,p.createElement(X.Provider,{value:je},p.createElement(ue.Group,{target:v},p.createElement(le,{force:!1},p.createElement(Ue,{slot:me,name:"Dialog.Description"},p.createElement(I,{initialFocus:o,containers:Q,features:j?O(Me,{parent:I.features.RestoreFocus,leaf:I.features.All&~I.features.FocusLock}):I.features.None},S({ourProps:We,theirProps:c,slot:me,defaultTag:tn,features:nn,visible:w===0,name:"Dialog"})))))))),p.createElement(oe,{features:q.Hidden,ref:L}))}let on="div";function ln(e,t){let n=N(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:u,close:o}]=U("Dialog.Overlay"),i=T(t),c=$(s=>{if(s.target===s.currentTarget){if(nt(s.currentTarget))return s.preventDefault();s.preventDefault(),s.stopPropagation(),o()}}),d=a.useMemo(()=>({open:u===0}),[u]);return S({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:c},theirProps:l,slot:d,defaultTag:on,name:"Dialog.Overlay"})}let un="div";function an(e,t){let n=N(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:u},o]=U("Dialog.Backdrop"),i=T(t);a.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let c=a.useMemo(()=>({open:u===0}),[u]);return p.createElement(le,{force:!0},p.createElement(ue,null,S({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:l,slot:c,defaultTag:un,name:"Dialog.Backdrop"})))}let cn="div";function sn(e,t){let n=N(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:u},o]=U("Dialog.Panel"),i=T(t,o.panelRef),c=a.useMemo(()=>({open:u===0}),[u]),d=$(s=>{s.stopPropagation()});return S({ourProps:{ref:i,id:r,onClick:d},theirProps:l,slot:c,defaultTag:cn,name:"Dialog.Panel"})}let dn="h2";function fn(e,t){let n=N(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:u,setTitleId:o}]=U("Dialog.Title"),i=T(t);a.useEffect(()=>(o(r),()=>o(null)),[r,o]);let c=a.useMemo(()=>({open:u===0}),[u]);return S({ourProps:{ref:i,id:r},theirProps:l,slot:c,defaultTag:dn,name:"Dialog.Title"})}let pn=y(rn),mn=y(an),vn=y(sn),gn=y(ln),hn=y(fn),bn=Object.assign(pn,{Backdrop:mn,Panel:vn,Overlay:gn,Title:hn,Description:At});export{bn as S};
