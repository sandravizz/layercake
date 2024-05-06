import{e as De}from"../chunks/index.CzR0xuCU.js";import{j as z,a as p,t as _,g as Se,$ as Ce,i as y,c as r,s as j,b as n,n as Te,f as M}from"../chunks/disclose-version.DBj9Vt0q.js";import{p as ie,r as g,a as ce,h as t,m as b,s as h,A as R,B as Ie,x as qe,z as c}from"../chunks/runtime.D9nQNyi8.js";import{i as D}from"../chunks/if.CfD4apJF.js";import{e as S,i as C,a as ne,s as oe}from"../chunks/class.ClfF0HVi.js";import{h as E}from"../chunks/html.pu-OIvc1.js";import{c as Be}from"../chunks/svelte-component.42KP6Uti.js";import{i as de}from"../chunks/lifecycle.fbi-k1SI.js";import{d as re,t as Me,M as Re}from"../chunks/downloadBlob.DPn4pLDi.js";import{H,h as le}from"../chunks/hljsDefineSvelte.C5yA7T4x.js";import{p as Ee}from"../chunks/index-client.CFCBblPQ.js";import{u as He}from"../chunks/Brush.html.CQvyvXFB.js";import{c as Pe}from"../chunks/_components.wmAawi9f.js";async function Oe({fetch:$,params:i}){const{slug:d}=i,u=`${d}.json`,x=await $(u),m=await x.json();if(x.status===200)return{slug:d,content:m,active:d};De(500,`Could not load ${u}: ${m.message}`)}const ut=Object.freeze(Object.defineProperty({__proto__:null,load:Oe},Symbol.toStringTag,{value:"Module"}));var Ae=_('<button title="download zip file" class="icon svelte-1gef78k" style="background-image: url(/icons/download.svg)">Download &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>');function Fe($,i){ie(i,!1);let d=Ee(i,"data",8,()=>({})),u=b(!1);async function x(){h(u,!0);const f=[];f.push(...d().modules.map(v=>({path:v.slug.replace("./",""),data:v.contents}))),f.push({path:i.slug,data:d().main.contents});const s=He(f.filter(Boolean),"path",!1);if(s.length===1)re(s[0].data,`layercake-${i.slug}`,!0);else{const v=i.slug.split(".");re(Me(s),`layercake-${v[0]}.zip`)}h(u,!1)}de();var m=Ae();g(()=>m.disabled=t(u)),z("click",m,x,!1),p($,m),ce()}var Je=_('<div id="params-table" class="svelte-7in5zh"><!></div>'),Le=_('<h3 class="svelte-7in5zh">SSR Examples:</h3>'),Ne=_('<li><a class="svelte-7in5zh"> </a></li>'),Ue=_('<!> <ul class="svelte-7in5zh"></ul>',1),Ve=_('<h3 class="svelte-7in5zh"> </h3> <!>',1),Ge=_("<li> </li>"),Ke=_('<div class="contents"><pre class="svelte-7in5zh"><!></pre></div>'),Qe=_('<div class="main svelte-7in5zh"><div class="all-components svelte-7in5zh"><a href="/components" class="svelte-7in5zh">← View all components</a></div> <h1 class="svelte-7in5zh"> </h1> <div class="chart-hero svelte-7in5zh"><!></div> <div class="download svelte-7in5zh"><!></div> <div class="dek svelte-7in5zh"><!></div> <!> <div id="used-in" class="svelte-7in5zh"><!></div> <div id="pages"><ul id="page-nav" class="svelte-7in5zh"></ul> <div id="contents-container" class="svelte-7in5zh"><div class="copy svelte-7in5zh"></div> <!></div></div></div>');function vt($,i){ie(i,!1);const d=b(),u=b(),x=new Re({html:!0,linkify:!0});H.registerLanguage("svelte",le),le(H);let m=i.data,f=b(m.slug),s=b(m.content),v=b(m.active);function P(e){return x.render(e)}function ue(e,a){const l=a.split(".");let o=l[l.length-1];return o==="csv"&&(o="diff"),H.highlight(e,{language:o}).value}const O=new Map;Pe.flatMap(e=>e.components).forEach(e=>{O.set(e.slug,e)});function ve(e){const a=l=>l.map(o=>`\`${o.name}\``).join(" &vert; ");if(e.name)return`\`${e.name}\``;if(e.type.elements)return`(${a(e.type.elements)})`;if(e.expression){if(e.expression.name)return`\`${e.expression.name}\``;if(e.expression.elements)return`(${a(e.expression.elements)})`}}function me(e){return e?`\`${e}\``:"None"}function pe(e){return`<center>${e.type!=="OptionalType"?"yes":"no"}</center>`}const he=`|Param|Default|Required|Description|
|-----|-------|--------|-----------|`;let A="",F=b("");t(s).hasjsDoctable===!0&&(A=`${t(s).jsdocParsed.tags.map(e=>`**${e.name}** ${ve(e.type)}|${me(e.default)}|${pe(e.type)}|${e.description.replace(/^(-|–|—)/g,"").trim()}`).join(`
`)}`,h(F,t(s).jsdocParsed.tags.length?`${he}
${A}`:""));function J(){const e=t(d)[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const a=document.createElement("textarea");a.textContent=e,a.style.position="fixed",document.body.appendChild(a),a.select();try{return document.execCommand("copy")}catch(l){return console.warn("Copy to clipboard failed.",l),!1}finally{document.body.removeChild(a)}}}R(()=>(t(f),t(s),t(v),qe(i.data)),()=>{(()=>{const e=i.data;return h(f,e.slug),h(s,e.content),h(v,e.active),e})()}),R(()=>t(s),()=>{h(d,[t(s).main].concat(t(s).modules))}),R(()=>t(f),()=>{h(u,O.get(t(f)))}),Ie(),de();var L=Qe();Se(e=>{g(()=>Ce.title=`${y(t(u).slug)} component`)});var fe=r(L),N=n(n(fe,!0)),_e=r(N),U=n(n(N,!0)),V=r(U);Be(V,()=>t(u).component,e=>{e(V,{})});var G=n(n(U,!0)),ge=r(G);Fe(ge,{get data(){return t(s)},get slug(){return t(f)}});var K=n(n(G,!0)),be=r(K);E(be,()=>P(t(s).componentDescription));var Q=n(n(K,!0));D(Q,()=>t(s).hasjsDoctable===!0,e=>{var a=Je(),l=r(a);E(l,()=>P(t(F))),p(e,a)});var W=n(n(Q,!0)),xe=r(W);D(xe,()=>t(s).usedIn[0].matches.length>0||t(s).usedIn[1].matches.length>0,e=>{var a=Ve(),l=M(a),o=r(l),w=n(n(l,!0));S(w,1,()=>t(s).usedIn,C,(I,q,We)=>{var Z=Te(),we=M(Z);D(we,()=>c(q).matches.length>0,ze=>{var ee=Ue(),te=M(ee);D(te,()=>c(q).group==="SSR"&&t(s).usedIn[0].matches.length>0,B=>{var k=Le();p(B,k)});var ke=n(n(te,!0));S(ke,9,()=>c(q).matches,C,(B,k,Xe)=>{var ae=Ne(),se=r(ae),je=r(se);g(()=>j(je,c(k).split("/").pop())),g(()=>oe(se,"href",c(k))),p(B,ae)}),p(ze,ee)}),p(I,Z)}),g(()=>j(o,`Used in these${y(t(s).usedIn[0].matches.length===0&&t(s).usedIn[1].matches.length>0?" SSR":"")} examples:`)),p(e,a)});var X=n(n(W,!0)),Y=r(X);S(Y,9,()=>t(d),C,(e,a,l)=>{var o=Ge(),w=r(o);g(()=>{ne(o,`tab ${y(t(v)===c(a).slug?"active":"")} svelte-7in5zh`),j(w,c(a).slug)}),z("click",o,()=>h(v,c(a).slug),!1),z("keypress",o,()=>h(v,c(a).slug),!1),p(e,o)});var ye=n(n(Y,!0)),T=r(ye),$e=n(n(T,!0));S($e,1,()=>t(d),C,(e,a,l)=>{var o=Ke(),w=r(o),I=r(w);E(I,()=>ue(c(a).contents,c(a).slug)),g(()=>oe(o,"style",`display: ${y(t(v)===c(a).slug?"block":"none")};`)),p(e,o)}),g(()=>{j(_e,`${y(t(u).slug)} component`),ne(X,`${y(t(s).dek?"has-dek":"")} svelte-7in5zh`)}),z("click",T,J,!1),z("keypress",T,J,!1),p($,L),ce()}export{vt as component,ut as universal};