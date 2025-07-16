let indicator = document.querySelector(".scroll-indicator .progress");
// console.log(indicator);

let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// console.log(scrollHeight);

window.addEventListener('scroll',scroll);

function scroll(){
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight)*100;//percentage scrolled from top
    // console.log(scrolled);
    indicator.style.width = `${scrolled}%`;
}

