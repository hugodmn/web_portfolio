import{S as o,r as u,U as f,Q as d,V as v,C as l,W as i,X as h,Y as m}from"./entry.fa62f85d.js";function I(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),v()&&(l(()=>{r.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),r}export{I as u};