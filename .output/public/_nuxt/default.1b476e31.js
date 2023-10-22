import{r as m,o as l,c as u,a as o,y as k,n as i,z as x,x as f,_ as v,b as a,w as c,d as _,t as d,q as $,A as y,s as S,v as C,B as w,C as D,D as T,T as j,p as B,e as H,E as N,F as I}from"./entry.23d1702a.js";import{_ as L}from"./nuxt-link.6162d48f.js";import{u as V}from"./cookie.fbbed109.js";import{u as z}from"./vue.f36acd1f.a99a01d3.js";const A=""+globalThis.__publicAssetsURL("images/17.jpg");const E={class:"sidebar-info"},F=f('<figure class="avatar-box"><img src="'+A+'" alt="Hugo Daumain" width="80"></figure><div class="info-content"><h1 class="name" title="Hugo Daumain"> Hugo Daumain </h1><p class="title text-center xl:block flex items-center justify-center gap-1"><span class="xl:after:content-[&#39;&#39;] after:content-[&#39;,&#39;]">Creative Technology Student</span><span>Deep Learning Student</span></p></div>',2),P=o("span",null,"Show Contacts",-1),R=o("ion-icon",{name:"chevron-down"},null,-1),q=[P,R],G=f('<div class="sidebar-info_more"><div class="separator"></div><ul class="contacts-list"><li class="contact-item"><div class="icon-box"><ion-icon name="mail-outline"></ion-icon></div><div class="contact-info"><p class="contact-title"> Email </p><a href="mailto:hugo.daumain@edu.devinci.fr" class="contact-link">hugo.daumain@edu.devinci.fr</a></div></li><li class="contact-item"><div class="icon-box"><ion-icon name="logo-github"></ion-icon></div><div class="contact-info"><p class="contact-title"> Github </p><a href="https://github.com/electron260" class="contact-link" target="_blank">electron260</a></div></li><li class="contact-item"><div class="icon-box"><ion-icon name="logo-linkedin"></ion-icon></div><div class="contact-info"><p class="contact-title"> Linkedin </p><a href="https://tr.linkedin.com/in/hugo-daumain" class="contact-link" target="_blank">Hugo Daumain</a></div></li><li class="contact-item"><div class="icon-box"><ion-icon name="location-outline"></ion-icon></div><div class="contact-info"><p class="contact-title"> Location </p><address>Paris, France</address></div></li></ul><div class="separator"></div></div>',1),M={__name:"Sidebar",setup(e){let t=m(!1);return(s,n)=>(l(),u("aside",{class:x(["sidebar",{active:i(t)}])},[o("div",E,[F,o("button",{class:"info_more-btn",onClick:n[0]||(n[0]=r=>k(t)?t.value=!i(t):t=!i(t))},q)]),G],2))}},O=M;const U={},J={class:"navbar"},K={class:"navbar-list"},Q={class:"navbar-item"},W={class:"navbar-item"},X={class:"navbar-item"};function Y(e,t){const s=L;return l(),u("nav",J,[o("ul",K,[o("li",Q,[a(s,{to:"/",class:"navbar-link"},{default:c(()=>[_(d(e.$t("pageTitles.about")),1)]),_:1})]),o("li",W,[a(s,{to:"/resume",class:"navbar-link"},{default:c(()=>[_(d(e.$t("pageTitles.resume")),1)]),_:1})]),o("li",X,[a(s,{to:"/projects",class:"navbar-link"},{default:c(()=>[_(d(e.$t("pageTitles.projects")),1)]),_:1})])])])}const Z=v(U,[["render",Y],["__scopeId","data-v-df807ea0"]]),p=$("cookieStore",()=>{const e=m(V("accept-cookie")),t=y("$cookies");function s(){return t.set("accept-cookie",!0,"30d"),this.cookie=!0}const n=S(()=>e.value);return{cookie:e,setCookie:s,getCookie:n}});const h=e=>(B("data-v-1144c8c8"),e=e(),H(),e),tt={class:"container left-0 right-0 mx-auto child md:w-[25%] bg-[#3f3f40] rounded-lg shadow-xl px-6 py-3 bottom-20 fixed z-[100] flex items-center justify-between animate-bounce"},et=h(()=>o("span",{class:"text-[#fafafa]"},"This site use cookies! 🍪",-1)),ot=h(()=>o("ion-icon",{name:"close-outline"},null,-1)),st=[ot],nt={__name:"CookieBar",setup(e){const t=p();return C(()=>{p()}),(s,n)=>(l(),w(j,{name:"bounce"},{default:c(()=>[D(o("div",tt,[et,o("span",{class:"cursor-pointer p-2 shadow-md rounded bg-[#383838] text-[#fafafa] hover:bg-[#1e1e1f] transition",onClick:n[0]||(n[0]=r=>i(t).setCookie())},st)],512),[[T,!i(t).getCookie]])]),_:1}))}},at=v(nt,[["__scopeId","data-v-1144c8c8"]]),it={class:"relative"},ct={class:"main-content"},ut={__name:"default",setup(e){const{locale:t}=N({useScope:"global"});return z({htmlAttrs:{lang:t},titleTemplate:s=>s?`${s} - Hugo Daumain`:"Hugo Daumain",link:[{rel:"icon",type:"image/png",href:"/nuxt.png"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",crossorigin:""}],script:[{src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",body:!1,type:"module"},{src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",body:!1,nomodule:!0}]}),(s,n)=>{const r=O,g=Z,b=at;return l(),u("main",it,[a(r),o("div",ct,[a(g),I(s.$slots,"default")]),a(b)])}}};export{ut as default};
