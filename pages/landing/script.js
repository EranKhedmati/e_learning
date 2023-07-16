// Show && hide small menu --------------------------------------

// elements
const navSm = document.querySelector('.nav-sm'),
    navSmOpenBtn = document.getElementById("nav-sm-open-btn"),
    navSmCloseBtn = document.getElementById("nav-sm-close-btn"),
    navSmContent = document.getElementById("nav-sm-content");

navSm.addEventListener("click",()=>{
    navSm.style.display = "none";
})

navSmCloseBtn.addEventListener("click",()=>{
    navSm.style.display = "none";
})

navSmOpenBtn.addEventListener("click",()=>{
    navSm.style.display = "flex";
})

navSmContent.addEventListener("click",(e)=>{
    e.stopPropagation();
})