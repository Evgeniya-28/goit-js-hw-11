import{a as p,S as d,i as n}from"./assets/vendor-Cm9gDZN8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m="52715870-cb8cb03de1263a77a911b462a",f="https://pixabay.com/api/";async function g(r){try{return(await p.get(f,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(o){throw console.error("Помилка запиту:",o),o}}const u=document.querySelector(".gallery");let y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const o=r.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy">

        <!-- Категорії зверху -->
        <div class="gallery-categories">
          <span>Likes</span>
          <span>Views</span>
          <span>Comments</span>
          <span>Downloads</span>
        </div>

        <!-- Цифри знизу -->
        <div class="gallery-stats">
          <span>${t.likes}</span>
          <span>${t.views}</span>
          <span>${t.comments}</span>
          <span>${t.downloads}</span>
        </div>
      </a>
    </li>
  `).join("");u.innerHTML=o,y.refresh()}function L(){u.innerHTML=""}function w(){const r=document.querySelector(".loader");r.textContent="Loading images, please wait...",r.classList.add("active")}function l(){const r=document.querySelector(".loader");r.textContent="",r.classList.remove("active")}const c=document.querySelector(".form");c.addEventListener("submit",async r=>{r.preventDefault();const o=c.elements["search-text"].value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight",timeout:3e3,theme:"light",close:!0});return}L(),w();try{const t=await g(o);if(l(),t.hits.length===0){n.show({title:"No results",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",timeout:5e3,theme:"light",color:"#EF4040",progressBarColor:"#FFBEBE",close:!0,maxWidth:432,layout:2,padding:20,balloon:!1,borderRadius:4});return}h(t.hits)}catch{l(),n.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight",timeout:5e3,close:!0})}});
//# sourceMappingURL=index.js.map
