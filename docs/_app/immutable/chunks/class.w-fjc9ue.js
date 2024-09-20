import{R as ae,b as re,S as m,h as A,l as S,d as se,T as ne,U as z,H as le,k as P,m as w,j as L,n as F,g as J,i as fe,V as ie,W as te,X as U,Y as D,v as X,Z as M,_ as ue,q as _e,a0 as G,a1 as ce,a2 as ve,a3 as oe,x as de,B as he,a4 as Ae,a5 as Ee,y as Ne,a6 as ge,a7 as Te}from"./runtime.B7mK2QHg.js";let H=null;function be(e,a){return a}function xe(e,a,r,s){for(var f=[],c=a.length,u=0;u<c;u++)ce(a[u].e,f,!0);var g=c>0&&f.length===0&&r!==null;if(g){var E=r.parentNode;ve(E),E.append(r),s.clear(),p(e,a[0].prev,a[c-1].next)}oe(f,()=>{for(var d=0;d<c;d++){var v=a[d];g||(s.delete(v.k),p(e,v.prev,v.next)),de(v.e,!g)}})}function Ce(e,a,r,s,f,c=null){var u=e,g={flags:a,items:new Map,first:null},E=(a&m)!==0;if(E){var d=e;u=A?S(he(d)):d.appendChild(ae())}A&&se();var v=null;re(()=>{var l=r(),o=ne(l)?l:l==null?[]:z(l),i=o.length;let _=!1;if(A){var N=u.data===le;N!==(i===0)&&(u=P(),S(u),w(!1),_=!0)}if(A){for(var T=null,x,h=0;h<i;h++){if(L.nodeType===8&&L.data===Ae){u=L,_=!0,w(!1);break}var n=o[h],t=s(n,h);x=Q(L,g,T,null,n,t,h,f,a),g.items.set(t,x),T=x}i>0&&S(P())}A||Ie(o,g,u,f,a,s),c!==null&&(i===0?v?F(v):v=J(()=>c(u)):v!==null&&fe(v,()=>{v=null})),_&&w(!0)}),A&&(u=L)}function Ie(e,a,r,s,f,c){var y,Y,q,B;var u=(f&Ee)!==0,g=(f&(D|M))!==0,E=e.length,d=a.items,v=a.first,l=v,o,i=null,_,N=[],T=[],x,h,n,t;if(u)for(t=0;t<E;t+=1)x=e[t],h=c(x,t),n=d.get(h),n!==void 0&&((y=n.a)==null||y.measure(),(_??(_=new Set)).add(n));for(t=0;t<E;t+=1){if(x=e[t],h=c(x,t),n=d.get(h),n===void 0){var j=l?l.e.nodes_start:r;i=Q(j,a,i,i===null?a.first:i.next,x,h,t,s,f),d.set(h,i),N=[],T=[],l=i.next;continue}if(g&&pe(n,x,t,f),n.e.f&ie&&(F(n.e),u&&((Y=n.a)==null||Y.unfix(),(_??(_=new Set)).delete(n))),n!==l){if(o!==void 0&&o.has(n)){if(N.length<T.length){var b=T[0],I;i=b.prev;var O=N[0],C=N[N.length-1];for(I=0;I<N.length;I+=1)K(N[I],b,r);for(I=0;I<T.length;I+=1)o.delete(T[I]);p(a,O.prev,C.next),p(a,i,O),p(a,C,b),l=b,i=C,t-=1,N=[],T=[]}else o.delete(n),K(n,l,r),p(a,n.prev,n.next),p(a,n,i===null?a.first:i.next),p(a,i,n),i=n;continue}for(N=[],T=[];l!==null&&l.k!==h;)(o??(o=new Set)).add(l),T.push(l),l=l.next;if(l===null)continue;n=l}N.push(n),i=n,l=n.next}if(l!==null||o!==void 0){for(var k=o===void 0?[]:z(o);l!==null;)k.push(l),l=l.next;var R=k.length;if(R>0){var ee=f&m&&E===0?r:null;if(u){for(t=0;t<R;t+=1)(q=k[t].a)==null||q.measure();for(t=0;t<R;t+=1)(B=k[t].a)==null||B.fix()}xe(a,k,ee,d)}}u&&te(()=>{var V;if(_!==void 0)for(n of _)(V=n.a)==null||V.apply()}),U.first=a.first&&a.first.e,U.last=i&&i.e}function pe(e,a,r,s){s&D&&X(e.v,a),s&M?X(e.i,r):e.i=r}function Q(e,a,r,s,f,c,u,g,E){var d=H;try{var v=(E&D)!==0,l=(E&ue)===0,o=v?l?_e(f):G(f):f,i=E&M?G(u):u,_={i,v:o,k:c,a:null,e:null,prev:r,next:s};return H=_,_.e=J(()=>g(e,o,i),A),_.e.prev=r&&r.e,_.e.next=s&&s.e,r===null?a.first=_:(r.next=_,r.e.next=_.e),s!==null&&(s.prev=_,s.e.prev=_.e),_}finally{H=d}}function K(e,a,r){for(var s=e.next?e.next.e.nodes_start:r,f=a?a.e.nodes_start:r,c=e.e.nodes_start;c!==s;){var u=Ne(c);f.before(c),c=u}}function p(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}let W=!1;function ke(){W||(W=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var a;if(!e.defaultPrevented)for(const r of e.target.elements)(a=r.__on_r)==null||a.call(r)})},{capture:!0}))}function Re(e){if(A){var a=!1,r=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var s=e.value;Z(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var f=e.checked;Z(e,"checked",null),e.checked=f}}};e.__on_r=r,ge(r),ke()}}function Z(e,a,r,s){r=r==null?null:r+"";var f=e.__attributes??(e.__attributes={});A&&(f[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||f[a]!==(f[a]=r)&&(a==="loading"&&(e[Te]=r),r===null?e.removeAttribute(a):e.setAttribute(a,r))}function Se(e,a){var r=e.__className,s=$(a);A&&e.getAttribute("class")===s?e.__className=s:(r!==s||A&&e.getAttribute("class")!==s)&&(s===""?e.removeAttribute("class"):e.setAttribute("class",s),e.__className=s)}function we(e,a){var r=e.__className,s=$(a);A&&e.className===s?e.__className=s:(r!==s||A&&e.className!==s)&&(a==null?e.removeAttribute("class"):e.className=s,e.__className=s)}function $(e){return e??""}function He(e,a,r){if(r){if(e.classList.contains(a))return;e.classList.add(a)}else{if(!e.classList.contains(a))return;e.classList.remove(a)}}export{we as a,Se as b,ke as c,Ce as e,be as i,Re as r,Z as s,He as t};