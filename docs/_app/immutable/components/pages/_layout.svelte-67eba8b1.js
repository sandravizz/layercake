import{S as sl,i as tl,s as nl,v as al,G as pl,k as v,a as B,q as P,e as Je,x as il,l as d,m,h as i,c as F,r as S,y as ol,n as o,H as hl,I as re,b as C,J as r,K as Ke,z as rl,L as R,u as vl,M as dl,f as Se,t as Te,N as Qe,A as cl,E as ml,O as gl,C as ul,P as kl,Q as bl,R as yl,T as El,U as Ol}from"../../chunks/index-21aa7309.js";import{l as X}from"../../chunks/singletons-29647d23.js";import{p as Il}from"../../chunks/stores-fe609b92.js";import{G as Nl}from"../../chunks/GuideContents-ad20fbae.js";import{e as Re}from"../../chunks/_examples-5e3fdcf7.js";import{e as Be}from"../../chunks/_examples_ssr-c0678590.js";X.disable_scroll_handling;const Cl=X.goto;X.invalidate;X.invalidateAll;X.preload_data;X.preload_code;X.before_navigate;X.after_navigate;function Fe(s,e,n){const a=s.slice();return a[19]=e[n],a}function Xe(s,e,n){const a=s.slice();return a[19]=e[n],a}function Ye(s){let e,n;return{c(){e=v("option"),n=P("Select..."),this.h()},l(a){e=d(a,"OPTION",{});var t=m(e);n=S(t,"Select..."),t.forEach(i),this.h()},h(){e.__value=s[1],e.value=e.__value,e.disabled=!0},m(a,t){C(a,e,t),r(e,n)},p(a,t){t&2&&(e.__value=a[1],e.value=e.__value)},d(a){a&&i(e)}}}function Ze(s){let e,n;return{c(){e=v("option"),n=P("Select..."),this.h()},l(a){e=d(a,"OPTION",{});var t=m(e);n=S(t,"Select..."),t.forEach(i),this.h()},h(){e.__value=s[1],e.value=e.__value,e.disabled=!0},m(a,t){C(a,e,t),r(e,n)},p(a,t){t&2&&(e.__value=a[1],e.value=e.__value)},d(a){a&&i(e)}}}function $e(s){let e,n=s[4](s[19].title)+"",a;return{c(){e=v("option"),a=P(n),this.h()},l(t){e=d(t,"OPTION",{});var f=m(e);a=S(f,n),f.forEach(i),this.h()},h(){e.__value="/example/"+s[19].slug,e.value=e.__value},m(t,f){C(t,e,f),r(e,a)},p:ul,d(t){t&&i(e)}}}function xe(s){let e,n=s[4](s[19].title)+"",a;return{c(){e=v("option"),a=P(n),this.h()},l(t){e=d(t,"OPTION",{});var f=m(e);a=S(f,n),f.forEach(i),this.h()},h(){e.__value="/example-ssr/"+s[19].slug,e.value=e.__value},m(t,f){C(t,e,f),r(e,a)},p:ul,d(t){t&&i(e)}}}function Pl(s){let e,n,a,t,f,u=s[2]?"Close":"Menu",c,p,I,w,ce,Z,q,K,g,ue=s[1].startsWith("/components"),$,_e=s[1].startsWith("/guide"),T,O,z,G,me,W,M,ge,fe,A,V,x,L,ee,ke,le,be,pe,ye,se,D,Ee,he,Oe,te,H,Ie,ne,J,Ne,ve,U,Ce,Ae,k=ue&&Ye(s),b=_e&&Ze(s),ae=Re.slice().sort(el),y=[];for(let l=0;l<ae.length;l+=1)y[l]=$e(Xe(s,ae,l));let ie=Be.slice().sort(ll),E=[];for(let l=0;l<ie.length;l+=1)E[l]=xe(Fe(s,ie,l));function _l(l){s[15](l)}let Le={sections:s[0]};return s[2]!==void 0&&(Le.open=s[2]),J=new Nl({props:Le}),al.push(()=>pl(J,"open",_l,s[2])),{c(){e=v("div"),a=B(),t=v("div"),f=v("span"),c=P(u),I=B(),w=v("a"),ce=P("Layer Cake"),Z=B(),q=v("ul"),K=v("li"),g=v("select"),k&&k.c(),$=Je(),b&&b.c(),T=v("option"),O=P("All"),z=v("option"),G=v("option"),me=P("Client-side");for(let l=0;l<y.length;l+=1)y[l].c();W=v("option"),M=v("option"),ge=P("Server-side");for(let l=0;l<E.length;l+=1)E[l].c();fe=B(),A=v("nav"),V=v("ul"),x=v("li"),L=v("a"),ee=v("span"),ke=P("Component gallery"),le=v("span"),be=P("Components"),ye=B(),se=v("li"),D=v("a"),Ee=P("Guide"),Oe=B(),te=v("li"),H=v("a"),Ie=B(),ne=v("div"),il(J.$$.fragment),this.h()},l(l){e=d(l,"DIV",{class:!0}),m(e).forEach(i),a=F(l),t=d(l,"DIV",{class:!0});var _=m(t);f=d(_,"SPAN",{class:!0});var N=m(f);c=S(N,u),N.forEach(i),I=F(_),w=d(_,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var h=m(w);ce=S(h,"Layer Cake"),h.forEach(i),_.forEach(i),Z=F(l),q=d(l,"UL",{class:!0});var Q=m(q);K=d(Q,"LI",{class:!0});var we=m(K);g=d(we,"SELECT",{class:!0});var j=m(g);k&&k.l(j),$=Je(),b&&b.l(j),T=d(j,"OPTION",{});var Ge=m(T);O=S(Ge,"All"),Ge.forEach(i),z=d(j,"OPTION",{class:!0}),m(z).forEach(i),G=d(j,"OPTION",{class:!0});var We=m(G);me=S(We,"Client-side"),We.forEach(i);for(let Y=0;Y<y.length;Y+=1)y[Y].l(j);W=d(j,"OPTION",{class:!0}),m(W).forEach(i),M=d(j,"OPTION",{class:!0});var Me=m(M);ge=S(Me,"Server-side"),Me.forEach(i);for(let Y=0;Y<E.length;Y+=1)E[Y].l(j);j.forEach(i),we.forEach(i),Q.forEach(i),fe=F(l),A=d(l,"NAV",{class:!0});var de=m(A);V=d(de,"UL",{class:!0});var oe=m(V);x=d(oe,"LI",{class:!0});var Ve=m(x);L=d(Ve,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var Pe=m(L);ee=d(Pe,"SPAN",{class:!0});var De=m(ee);ke=S(De,"Component gallery"),De.forEach(i),le=d(Pe,"SPAN",{class:!0});var Ue=m(le);be=S(Ue,"Components"),Ue.forEach(i),Pe.forEach(i),Ve.forEach(i),ye=F(oe),se=d(oe,"LI",{class:!0});var je=m(se);D=d(je,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var qe=m(D);Ee=S(qe,"Guide"),qe.forEach(i),je.forEach(i),Oe=F(oe),te=d(oe,"LI",{class:!0});var ze=m(te);H=d(ze,"A",{id:!0,target:!0,rel:!0,href:!0,class:!0});var fl=m(H);fl.forEach(i),ze.forEach(i),oe.forEach(i),Ie=F(de),ne=d(de,"DIV",{class:!0});var He=m(ne);ol(J.$$.fragment,He),He.forEach(i),de.forEach(i),this.h()},h(){o(e,"class",n=(s[2]?"open":"closed")+" mousecatcher svelte-6iinyn"),o(f,"class",p="menu-link "+(s[2]?"menu-open":"menu-closed")+" svelte-6iinyn"),o(w,"href","/"),o(w,"sveltekit:prefetch",""),o(w,"class","logo svelte-6iinyn"),o(t,"class","container svelte-6iinyn"),T.__value="/",T.value=T.__value,o(z,"class","header svelte-6iinyn"),z.disabled=!0,z.__value="",z.value=z.__value,o(G,"class","header svelte-6iinyn"),G.disabled=!0,G.__value="Client-side",G.value=G.__value,o(W,"class","header svelte-6iinyn"),W.disabled=!0,W.__value="",W.value=W.__value,o(M,"class","header svelte-6iinyn"),M.disabled=!0,M.__value="Server-side",M.value=M.__value,o(g,"class","svelte-6iinyn"),s[1]===void 0&&hl(()=>s[12].call(g)),o(K,"class","svelte-6iinyn"),o(q,"class","dropdown svelte-6iinyn"),o(ee,"class","wide-name svelte-6iinyn"),o(le,"class","short-name svelte-6iinyn"),o(L,"sveltekit:prefetch",""),o(L,"class",pe=re(s[1]==="/components"?"active":"")+" svelte-6iinyn"),o(L,"href","/components"),o(x,"class","svelte-6iinyn"),o(D,"sveltekit:prefetch",""),o(D,"class",he=re(s[1]==="/guide"?"active":"")+" svelte-6iinyn"),o(D,"href","/guide"),o(se,"class","svelte-6iinyn"),o(H,"id","github-link"),o(H,"target","_blank"),o(H,"rel","noreferrer"),o(H,"href","https://github.com/mhkeller/layercake"),o(H,"class","svelte-6iinyn"),o(te,"class","svelte-6iinyn"),o(V,"class","primary svelte-6iinyn"),o(ne,"class","secondary svelte-6iinyn"),o(A,"class",ve=re(s[2]?"open":"closed")+" svelte-6iinyn")},m(l,_){C(l,e,_),C(l,a,_),C(l,t,_),r(t,f),r(f,c),r(t,I),r(t,w),r(w,ce),C(l,Z,_),C(l,q,_),r(q,K),r(K,g),k&&k.m(g,null),r(g,$),b&&b.m(g,null),r(g,T),r(T,O),r(g,z),r(g,G),r(G,me);for(let N=0;N<y.length;N+=1)y[N].m(g,null);r(g,W),r(g,M),r(M,ge);for(let N=0;N<E.length;N+=1)E[N].m(g,null);Ke(g,s[1]),C(l,fe,_),C(l,A,_),r(A,V),r(V,x),r(x,L),r(L,ee),r(ee,ke),r(L,le),r(le,be),r(V,ye),r(V,se),r(se,D),r(D,Ee),r(V,Oe),r(V,te),r(te,H),r(A,Ie),r(A,ne),rl(J,ne,null),s[16](A),U=!0,Ce||(Ae=[R(e,"click",s[10]),R(e,"keypress",s[11]),R(f,"click",s[6]),R(f,"keypress",s[6]),R(g,"change",s[5]),R(g,"change",s[12]),R(L,"click",s[13]),R(D,"click",s[14])],Ce=!0)},p(l,[_]){if((!U||_&4&&n!==(n=(l[2]?"open":"closed")+" mousecatcher svelte-6iinyn"))&&o(e,"class",n),(!U||_&4)&&u!==(u=l[2]?"Close":"Menu")&&vl(c,u),(!U||_&4&&p!==(p="menu-link "+(l[2]?"menu-open":"menu-closed")+" svelte-6iinyn"))&&o(f,"class",p),_&2&&(ue=l[1].startsWith("/components")),ue?k?k.p(l,_):(k=Ye(l),k.c(),k.m(g,$)):k&&(k.d(1),k=null),_&2&&(_e=l[1].startsWith("/guide")),_e?b?b.p(l,_):(b=Ze(l),b.c(),b.m(g,T)):b&&(b.d(1),b=null),_&16){ae=Re.slice().sort(el);let h;for(h=0;h<ae.length;h+=1){const Q=Xe(l,ae,h);y[h]?y[h].p(Q,_):(y[h]=$e(Q),y[h].c(),y[h].m(g,W))}for(;h<y.length;h+=1)y[h].d(1);y.length=ae.length}if(_&16){ie=Be.slice().sort(ll);let h;for(h=0;h<ie.length;h+=1){const Q=Fe(l,ie,h);E[h]?E[h].p(Q,_):(E[h]=xe(Q),E[h].c(),E[h].m(g,null))}for(;h<E.length;h+=1)E[h].d(1);E.length=ie.length}_&2&&Ke(g,l[1]),(!U||_&2&&pe!==(pe=re(l[1]==="/components"?"active":"")+" svelte-6iinyn"))&&o(L,"class",pe),(!U||_&2&&he!==(he=re(l[1]==="/guide"?"active":"")+" svelte-6iinyn"))&&o(D,"class",he);const N={};_&1&&(N.sections=l[0]),!Ne&&_&4&&(Ne=!0,N.open=l[2],dl(()=>Ne=!1)),J.$set(N),(!U||_&4&&ve!==(ve=re(l[2]?"open":"closed")+" svelte-6iinyn"))&&o(A,"class",ve)},i(l){U||(Se(J.$$.fragment,l),U=!0)},o(l){Te(J.$$.fragment,l),U=!1},d(l){l&&i(e),l&&i(a),l&&i(t),l&&i(Z),l&&i(q),k&&k.d(),b&&b.d(),Qe(y,l),Qe(E,l),l&&i(fe),l&&i(A),cl(J),s[16](null),Ce=!1,ml(Ae)}}}const el=(s,e)=>s.title<e.title?-1:1,ll=(s,e)=>s.title<e.title?-1:1;function Sl(s,e,n){let a,t;gl(s,Il,O=>n(9,t=O));let{sections:f}=e,u,c="",p=!1,I;const w=O=>O.split(" (")[0];function ce(){n(2,p=!1),Cl(this.value||"/")}function Z(){p?setTimeout(()=>{p||n(3,I.scrollTop=0,I)},350):n(3,I.scrollTop=0,I),n(2,p=!p)}const q=()=>n(2,p=!1),K=()=>n(2,p=!1);function g(){c=kl(this),n(1,c),n(8,a),n(9,t),n(7,u)}const ue=()=>n(2,p=!1),$=()=>n(2,p=!1);function _e(O){p=O,n(2,p)}function T(O){al[O?"unshift":"push"](()=>{I=O,n(3,I)})}return s.$$set=O=>{"sections"in O&&n(0,f=O.sections)},s.$$.update=()=>{s.$$.dirty&512&&n(8,a=t.url.pathname==="/service-worker.js"),s.$$.dirty&896&&(a||(n(7,u=t.url.pathname),u.split("/")[1],n(1,c=`/${u.replace("/","")}`),u.replace(/\/$/,"").split("/").pop()))},[f,c,p,I,w,ce,Z,u,a,t,q,K,g,ue,$,_e,T]}class Tl extends sl{constructor(e){super(),tl(this,e,Sl,Pl,nl,{sections:0})}}function Al(s){let e,n,a,t;e=new Tl({props:{sections:s[0].sections}});const f=s[2].default,u=bl(f,s,s[1],null);return{c(){il(e.$$.fragment),n=B(),a=v("main"),u&&u.c()},l(c){ol(e.$$.fragment,c),n=F(c),a=d(c,"MAIN",{});var p=m(a);u&&u.l(p),p.forEach(i)},m(c,p){rl(e,c,p),C(c,n,p),C(c,a,p),u&&u.m(a,null),t=!0},p(c,[p]){const I={};p&1&&(I.sections=c[0].sections),e.$set(I),u&&u.p&&(!t||p&2)&&yl(u,f,c,c[1],t?Ol(f,c[1],p,null):El(c[1]),null)},i(c){t||(Se(e.$$.fragment,c),Se(u,c),t=!0)},o(c){Te(e.$$.fragment,c),Te(u,c),t=!1},d(c){cl(e,c),c&&i(n),c&&i(a),u&&u.d(c)}}}function Ll(s,e,n){let{$$slots:a={},$$scope:t}=e,{data:f}=e;return s.$$set=u=>{"data"in u&&n(0,f=u.data),"$$scope"in u&&n(1,t=u.$$scope)},[f,t,a]}class Ul extends sl{constructor(e){super(),tl(this,e,Ll,Al,nl,{data:0})}}export{Ul as default};