import{F as x,aa as G,ab as W,V as N,r as z,a7 as k,k as L,b as J,ac as I,ad as K,ae as Q,af as X,ag as A,c as Z,p as ee,a as ne,t as te,j as re,i as ae,ah as S,ai as ie}from"./runtime.D9nQNyi8.js";function oe(){console.warn("hydration_mismatch")}let d=!1;function C(n){d=n}let u=null;function M(n){u=n}function T(n){if(n.nodeType!==8)return n;var e=n;if((e==null?void 0:e.data)!==x)return n;for(var t=[],r=0;(e=e.nextSibling)!==null;){if(e.nodeType===8){var i=e.data;if(i===x)r+=1;else if(i[0]===G){if(r===0)return u=t,e;r-=1}}t.push(e)}W()}var v,w,P,$,D,B,F,j,se;function ue(){v===void 0&&(v=Node.prototype,w=Element.prototype,P=Text.prototype,v.appendChild,$=v.cloneNode,se=document,w.__click=void 0,P.__nodeValue=" ",w.__className="",w.__attributes=null,D=N(v,"firstChild").get,B=N(v,"nextSibling").get,F=N(v,"textContent").set,j=N(w,"className").set)}function H(n,e){return $.call(n,e)}function g(){return document.createTextNode("")}function ve(n){const e=D.call(n);return d?e===null?n.appendChild(g()):T(e):e}function me(n,e){if(!d)return D.call(n);const t=n[0];return T(t)}function ye(n,e=!1){const t=B.call(n);if(!d)return t;if(e&&(t==null?void 0:t.nodeType)!==3){const r=g();if(t){const i=u.indexOf(t);u.splice(i,0,r),t.before(r)}else u.push(r);return r}return T(t)}function ge(n,e){j.call(n,e)}function ce(n){F.call(n,"")}function be(n,e,t,r,i){var a={capture:r,passive:i};function o(s){if(O(e,s),!s.cancelBubble)return t.call(this,s)}e.addEventListener(n,o,a),(e===document.body||e===window||e===document)&&z(()=>()=>{e.removeEventListener(n,o,a)})}function O(n,e){var h;var t=n.ownerDocument,r=e.type,i=((h=e.composedPath)==null?void 0:h.call(e))||[],a=i[0]||e.target;e.target!==a&&k(e,"target",{configurable:!0,value:a});var o=0,s=e.__root;if(s){var m=i.indexOf(s);if(m!==-1&&(n===document||n===window)){e.__root=n;return}var E=i.indexOf(n);if(E===-1)return;m<=E&&(o=m+1)}a=i[o]||e.target,k(e,"currentTarget",{configurable:!0,get(){return a||t}});function y(l){a=l;var f=l.parentNode||l.host||null;try{var _=l["__"+r];if(_!==void 0&&!l.disabled)if(L(_)){var[p,...q]=_;p.apply(l,[e,...q])}else _.call(l,e)}finally{!e.cancelBubble&&f!==n&&f!==null&&l!==n&&y(f)}}try{y(a)}finally{e.__root=n,a=n}}let c;function de(){c=void 0}function we(n){let e=null,t=d;var r;if(d){for(e=u,c===void 0&&(c=document.head.firstChild);c.nodeType!==8||c.data!==x;)c=c.nextSibling;c=T(c),c=c.nextSibling}else r=document.head.appendChild(g());try{J(()=>n(r))}finally{t&&M(e)}}const le=new Set,R=new Set;function Te(n,e){const t=n.__nodeValue,r=fe(e);d&&n.nodeValue===r?n.__nodeValue=r:t!==r&&(n.nodeValue=r,n.__nodeValue=r)}function Ee(n,e,t,r){e===void 0?r!==null&&r(n):e(n,t)}function fe(n){return typeof n=="string"?n:n==null?"":n+""}function _e(n,e){const t=e.anchor??e.target.appendChild(g());return I(()=>U(n,{...e,anchor:t}),!1)}function Ne(n,e){const t=e.target,r=u;let i=!1;try{return I(()=>{C(!0);for(var a=t.firstChild;a&&(a.nodeType!==8||a.data!==x);)a=a.nextSibling;a||K();const o=T(a),s=U(n,{...e,anchor:o});return C(!1),i=!0,s},!1)}catch(a){if(!i&&e.recover!==!1)return oe(),ce(t),C(!1),_e(n,e);throw a}finally{C(!!r),M(r),de()}}function U(n,{target:e,anchor:t,props:r={},events:i,context:a,intro:o=!1}){ue();const s=new Set,m=O.bind(null,e),E=O.bind(null,document),y=f=>{for(let _=0;_<f.length;_++){const p=f[_];s.has(p)||(s.add(p),e.addEventListener(p,m,A.includes(p)?{passive:!0}:void 0),document.addEventListener(p,E,A.includes(p)?{passive:!0}:void 0))}};y(Q(le)),R.add(y);let h;const l=X(()=>(Z(()=>{if(a){ee({});var f=te;f.c=a}i&&(r.$$events=i),h=n(t,r)||{},a&&ne()}),()=>{for(const f of s)e.removeEventListener(f,m);R.delete(y),V.delete(h)}));return V.set(h,l),h}let V=new WeakMap;function Ce(n){const e=V.get(n);e==null||e()}function b(n,e=ae){var t=e.dom;return t===null?e.dom=n:(L(t)||(t=e.dom=[t]),L(n)?t.push(...n):t.push(n)),n}function Y(n,e){var t=(e&S)!==0,r=(e&ie)!==0,i;return()=>{if(d)return b(t?u:u[0]);i||(i=re(n),t||(i=i.firstChild));var a=r?document.importNode(i,!0):H(i,!0);return b(t?[...a.childNodes]:a),a}}function xe(n,e){var t=(e&S)!==0,r=Y(`<svg>${n}</svg>`,0),i;return()=>{if(d)return b(t?u:u[0]);if(!i){var a=r();if(!(e&S))i=a.firstChild;else for(i=document.createDocumentFragment();a.firstChild;)i.appendChild(a.firstChild)}var o=H(i,!0);return b(t?[...o.childNodes]:o),o}}function Se(n){if(!d)return b(g());var e=u[0];return e||n.before(e=g()),b(e)}const Le=Y("<!>",S);function Oe(n,e){d||n.before(e)}const pe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pe);export{se as $,Oe as a,ye as b,ve as c,C as d,u as e,me as f,we as g,d as h,fe as i,be as j,g as k,T as l,ge as m,Le as n,Ee as o,b as p,Ne as q,_e as r,Te as s,Y as t,Ce as u,Se as v,xe as w};