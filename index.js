import{a as L,b as D,i as h,S as M}from"./assets/vendor-BiSu-HFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const i={btnBurger:document.querySelector(".burger-menu-btn"),btnClose:document.querySelector(".burger-menu-close-btn"),burgerModal:document.querySelector(".burger-menu-modal"),switcher:document.querySelector(".theme-checkbox"),burgerMenuList:document.querySelector(".burger-menu-list")};i.btnBurger.addEventListener("click",()=>{i.burgerModal.classList.add("is-open"),i.btnClose.addEventListener("click",f)});const f=e=>{i.burgerModal.classList.remove("is-open"),e.target.removeEventListaner("click",f)};i.switcher.addEventListener("change",e=>{if(e.target.checked){document.body.classList.add("theme-light"),document.body.classList.remove("theme-dark");return}document.body.classList.add("theme-dark"),document.body.classList.remove("theme-light")});i.burgerMenuList.addEventListener("click",e=>{e.target.classList.contains("burger-menu-list-link")&&i.burgerModal.classList.remove("is-open")});const S="/SyntaxSquadProj/assets/desk-wallet-1x-BG686fSw.webp",w="/SyntaxSquadProj/assets/desk-wallet-2x-BJo8Iqwe.webp",T="/SyntaxSquadProj/assets/tab-wallet-1x-DV8Cy686.webp",E="/SyntaxSquadProj/assets/tab-wallet-2x-Cd3bSACA.webp",B="/SyntaxSquadProj/assets/mob-green-harvest-1x-g-AVFaSg.webp",C="/SyntaxSquadProj/assets/mob-green-harvest-2x-BFqCxbhZ.webp",J="/SyntaxSquadProj/assets/tab-green-harvest-1x-7cs801Hi.webp",N="/SyntaxSquadProj/assets/tab-green-harvest-2x-CSbXoMq8.webp",G="/SyntaxSquadProj/assets/desk-green-harvest-1x-BXBvmxpb.webp",R="/SyntaxSquadProj/assets/desk-green-harvest-2x-BXH4WKTp.webp",H="/SyntaxSquadProj/assets/mob-english-excellence-1x-1o0VgnW4.webp",$="/SyntaxSquadProj/assets/mob-english-excellence-2x-D-cY5Z8X.webp",F="/SyntaxSquadProj/assets/tab-english-excellence-1x-CUEUZYVy.webp",U="/SyntaxSquadProj/assets/tab-english-excellence-2x-B-h2Re0R.webp",O="/SyntaxSquadProj/assets/desk-english-excellence-1x-JJvQ0KRM.webp",I="/SyntaxSquadProj/assets/desk-english-excellence-2x-Cku1kiBg.webp",K="/SyntaxSquadProj/assets/mob-power-pulse-1x-Dgxlum8b.webp",_="/SyntaxSquadProj/assets/mob-power-pulse-2x-BYSwR85i.webp",W="/SyntaxSquadProj/assets/tab-power-pulse-1x-CjsUSXYW.webp",A="/SyntaxSquadProj/assets/tab-power-pulse-2x-B-KKFABn.webp",Y="/SyntaxSquadProj/assets/desk-power-pulse-1x-D8v261SK.webp",V="/SyntaxSquadProj/assets/desk-power-pulse-2x-qGSdex4r.webp",Z="/SyntaxSquadProj/assets/mob-mimino-1x-DyvCp0rJ.webp",g="/SyntaxSquadProj/assets/desk-mimino-2x-Ba-CZ-9u.webp",Q="/SyntaxSquadProj/assets/tab-mimino-1x-BTFRtb2H.webp",X="/SyntaxSquadProj/assets/tab-mimino-2x-cBDMb9Vx.webp",z="/SyntaxSquadProj/assets/desk-mimino-1x-5WcD388n.webp",ee="/SyntaxSquadProj/assets/mob-vyshyvanka-1x-BR9NoCB4.webp",te="/SyntaxSquadProj/assets/mob-vyshyvanka-2x-GajAx-B3.webp",se="/SyntaxSquadProj/assets/tab-vyshyvanka-1x-DjLB_jCJ.webp",oe="/SyntaxSquadProj/assets/tab-vyshyvanka-2x-K_dHg0AZ.webp",ae="/SyntaxSquadProj/assets/desk-vyshyvanka-1x-DwJ4vP4u.webp",re="/SyntaxSquadProj/assets/desk-vyshyvanka-2x-BKCmYviZ.webp",ne="/SyntaxSquadProj/assets/mob-chego-jewely-1x-DtKOBEyJ.webp",ie="/SyntaxSquadProj/assets/mob-chego-jewely-2x-Ci-bxQzd.webp",ce="/SyntaxSquadProj/assets/tab-chego-jewely-1x-BopGrc-K.webp",le="/SyntaxSquadProj/assets/tab-chego-jewely-2x-CCGrK-2Y.webp",de="/SyntaxSquadProj/assets/desk-chego-jewelry-1x-kTjtJvCP.webp",xe="/SyntaxSquadProj/assets/desk-chego-jewelry-2x-BIYQwmMK.webp",be="/SyntaxSquadProj/assets/mob-energy-flow-1x-DIJ0dc21.webp",ue="/SyntaxSquadProj/assets/mob-energy-flow-2x-mSg6lAem.webp",pe="/SyntaxSquadProj/assets/tab-energy-flow-1x-Dx7u--1N.webp",me="/SyntaxSquadProj/assets/tab-energy-flow-2x-BT2mhC4D.webp",ye="/SyntaxSquadProj/assets/desk-energy-flow-1x-DPn3SP4j.webp",Se="/SyntaxSquadProj/assets/desk-energy-flow-2x-B_s1YTWE.webp",we="/SyntaxSquadProj/assets/mob-fruitbox-1x-DRKfCYu3.webp",ge="/SyntaxSquadProj/assets/mob-fruitbox-2x-BPhWVpfl.webp",ve="/SyntaxSquadProj/assets/tab-fruitbox-1x-vl4qQiDJ.webp",he="/SyntaxSquadProj/assets/tab-fruitbox-2x-ifgAxWd7.webp",fe="/SyntaxSquadProj/assets/desk-fruitbox-1x-BCP33x6e.webp",ke="/SyntaxSquadProj/assets/desk-fruitbox-2x-c2YO1ZGj.webp",Pe="/SyntaxSquadProj/assets/mob-starlight-studio-1x-Dt_kIxaq.webp",je="/SyntaxSquadProj/assets/mob-starlight-studio-2x-Cmvo_JrT.webp",qe="/SyntaxSquadProj/assets/tab-starlight-studio-1x-8qxB83s0.webp",Le="/SyntaxSquadProj/assets/tab-starlight-studio-2x-m9GluHGL.webp",De="/SyntaxSquadProj/assets/desk-starlight-studio-1x-D5BGdaC7.webp",Me="/SyntaxSquadProj/assets/desk-starlight-studio-2x-0Qd4atD0.webp",v=[{title:"Wallet webservice",subtitle:"React, JavaScript, Node JS, Git",url:"",imgUrls:{mob1x:S,mob2x:w,tab1x:T,tab2x:E,desk1x:S,desk2x:w}},{title:"Green harvest webservice",subtitle:"React, JavaScript, Node JS, Git",url:"",imgUrls:{mob1x:B,mob2x:C,tab1x:J,tab2x:N,desk1x:G,desk2x:R}},{title:"English Exellence webservice",subtitle:"React, JavaScript, Node JS, Git",url:"",imgUrls:{mob1x:H,mob2x:$,tab1x:F,tab2x:U,desk1x:O,desk2x:I}},{title:"power pulse webservice",subtitle:"React, JavaScript, Node JS, Git",url:"",imgUrls:{mob1x:K,mob2x:_,tab1x:W,tab2x:A,desk1x:Y,desk2x:V}},{title:"mimino website",subtitle:"React, JavaScript, Node JS, Git",url:"",imgUrls:{mob1x:Z,mob2x:g,tab1x:Q,tab2x:X,desk1x:z,desk2x:g}},{title:"vyshyvanka vibes Landing Page",subtitle:"React, JavaScript, Node JS, Git",url:"",imgUrls:{mob1x:ee,mob2x:te,tab1x:se,tab2x:oe,desk1x:ae,desk2x:re}},{title:"chego jewelry website",subtitle:"React, JavaScript, Node JS, Git",url:"",imgUrls:{mob1x:ne,mob2x:ie,tab1x:ce,tab2x:le,desk1x:de,desk2x:xe}},{title:"energy flow webservice",subtitle:"React, JavaScript, Node JS, Git",url:"",imgUrls:{mob1x:be,mob2x:ue,tab1x:pe,tab2x:me,desk1x:ye,desk2x:Se}},{title:"fruitbox online store",subtitle:"React, JavaScript, Node JS, Git",url:"",imgUrls:{mob1x:we,mob2x:ge,tab1x:ve,tab2x:he,desk1x:fe,desk2x:ke}},{title:"starlight studio landing page",subtitle:"React, JavaScript, Node JS, Git",url:"",imgUrls:{mob1x:Pe,mob2x:je,tab1x:qe,tab2x:Le,desk1x:De,desk2x:Me}}],Te="/SyntaxSquadProj/assets/sprite-BsI9Tp63.svg",Ee=document.querySelector(".projects-list"),k=document.querySelector(".load-more-btn");let l=0,Be=3;const Ce=({title:e,subtitle:s,url:n,imgUrls:{mob1x:r,mob2x:t,tab1x:a,tab2x:c,desk1x:y,desk2x:q}})=>`
  <li class="my-projects-item">
  <picture>
    <source type="image/webp" srcset="${y} 1x, ${q} 2x" media="(min-width: 1280px)" />
    <source type="image/webp" srcset="${a} 1x, ${c} 2x" media="(min-width: 768px)" />
    <source type="image/webp" srcset="${r} 1x, ${t} 2x" media="(min-width: 320px)" />
    <img class="my-projects-img" src="${y}" alt="${e}" width="1008"/>
  </picture>
  <p class="my-projects-subtitle">${s}</p>
  <div class="link-card-container">
    <h3 class="my-projects-title">${e}</h3>
    <a class="my-projects-link" href="${n}" aria-label="Visit ${e} website">Visit
      <span class="proj-link-span">
        <svg class="visit-us-svg" width="24" height="24">
          <use href="${Te}#icon-Arrow-up-right"></use>
        </svg>
      </span>
    </a>
  </div>  
</li>
  `,P=()=>{const e=l+Be,s=v.slice(l,e);Ee.insertAdjacentHTML("beforeend",s.map(Ce).join("")),l=e,l>=v.length&&(k.style.display="none")};P();k.addEventListener("click",P);new L(".faq-accordion",{duration:1e3,showMultiple:!1,elementClass:"faq-ac-item",triggerClass:"faq-ac-trigger",panelClass:"faq-ac-item-text",activeClass:"is-open",openOnInit:[0]});const Je=({author:e,avatar_url:s,review:n})=>`<li class="swiper-slide">
    <div class="paragraph-wrapper">
     <p class="review-paragraph">${n}</p>
  </div>
    <div class="review-person">
      <img class="review-img" alt="${e} photo" src="${s}"/>
      <p class="review-name">${e}</p></li> `,Ne=e=>e.map(s=>Je(s)).join(""),o={swiperWrapper:document.querySelector(".swiper-wrapper"),buttonNext:document.querySelector(".button-next-js"),buttonPrev:document.querySelector(".button-prev-js"),buttons:document.querySelector(".buttons-wrapper")},Ge=async()=>{try{const s=(await D.get("https://portfolio-js.b.goit.study/api/reviews")).data;o.swiperWrapper.innerHTML=Ne(s),Re()}catch(e){h.error({message:e.message}),o.swiperWrapper.innerHTML="NOT FOUND",o.buttons.classList.add("hidden")}};Ge();const Re=()=>{const e=new M(".swiper",{slidesPerView:1,breakpoints:{1280:{slidesPerView:2,spaceBetween:32}}});o.buttonNext.addEventListener("click",()=>{e.slideNext(),e.activeIndex===1&&(o.buttonPrev.classList.add("active"),o.buttonPrev.classList.remove("disableHoverFocus"),o.buttonPrev.disabled),e.isEnd&&(o.buttonNext.classList.remove("active"),o.buttonNext.classList.add("disableHoverFocus"),o.buttonPrev.disabled)}),o.buttonPrev.addEventListener("click",()=>{e.slidePrev(),e.activeIndex===0&&(o.buttonPrev.disabled,o.buttonPrev.classList.remove("active"),o.buttonPrev.classList.add("disableHoverFocus")),e.isEnd||(o.buttonNext.classList.add("active"),o.buttonNext.classList.remove("disableHoverFocus"),o.buttonPrev.disabled)})},d=document.querySelector(".work-form"),x=document.getElementById("successModal"),He=document.querySelector(".close");function $e(){x.style.display="block",document.body.style.overflow="hidden"}function m(){x.style.display="none",document.body.style.overflow="auto"}d.addEventListener("submit",async function(e){e.preventDefault();const s=new FormData(d),n=Object.fromEntries(s.entries());try{const r=await fetch("https://portfolio-js.b.goit.study/api-docs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){const t=await r.json();throw new Error(t.message||"Error submitting form. Please check the entered data.")}$e(),d.reset()}catch(r){h.error({title:"Error",message:r.message,position:"topRight"});const t=d.querySelector('input[name="email"]');r.message.includes("email")&&t.classList.add("error")}});He.addEventListener("click",m);x.addEventListener("click",function(e){e.target===x&&m()});document.addEventListener("keydown",function(e){e.key==="Escape"&&m()});const p=document.querySelector(".scroll__up"),u=document.querySelector(".scroll__up-svg-path"),b=u.getTotalLength(),Fe=200;u.style.strokeDasharray=`${b} ${b}`;u.style.transition="stroke-dashoffset 20ms";const j=()=>window.scrollY||document.documentElement.scrollTop,Ue=()=>{const e=document.documentElement.scrollHeight-window.innerHeight,s=b-j()*b/e;u.style.strokeDashoffset=s};window.addEventListener("scroll",()=>{Ue(),j()>Fe?p.classList.add("scroll__up-active"):p.classList.remove("scroll__up-active")});p.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
