const header =document.querySelector("header");
window.addEventListener("scroll",  function(){
    header.classList.toggle("sticky",window.scrollY > 80);
});
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

// Add a click event listener to toggle a class
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});


const sr =scrollReveal({
    origin:'top',
    distance:'85',
    duration:2500,
    reset:true,
})
sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:300});
sr.reveal ('.container',{delay:400});


sr.reveal ('.about-img',{});
sr.reveal ('.about-text',{delay:300});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.shop-content',{delay:300});

sr.reveal ('.review-content,.contact',{delay:300});