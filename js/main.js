window.addEventListener("load",()=>{setTimeout(()=>document.getElementById("loader").style.display="none",1200)});
const menu=document.querySelector(".menu"),nav=document.querySelector(".navbar nav");
menu.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.flexDirection="column";nav.style.position="absolute";nav.style.top="70px";nav.style.right="20px";nav.style.padding="20px";nav.style.background="#080a0c";nav.style.border="1px solid #292d31"});
document.querySelectorAll(".navbar nav a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<700)nav.style.display="none"}));
document.querySelectorAll(".filters button").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".filters .active")?.classList.remove("active");b.classList.add("active")}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform="translateY(0)"}}),{threshold:.08});
document.querySelectorAll(".section").forEach(e=>{e.style.opacity=0;e.style.transform="translateY(25px)";e.style.transition="opacity .8s,transform .8s";io.observe(e)});
