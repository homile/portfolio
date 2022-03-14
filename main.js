'use strict'

// Make navbar trasnparent when it is on the top
// navbar가 내려갈때 색상적용
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    // console.log(event.target.dataset.link);
    scrollIntoView(link);
});

// Handle click on "contact me" button on home
const contactMe = document.querySelector('.home_contact');
contactMe.addEventListener('click', () => {
    scrollIntoView('#contact')
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // homeHeight이 0 / 800
    // console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () =>{
   if(window.scrollY > homeHeight / 2){
      arrowUp.classList.add('visible');
   } else {
      arrowUp.classList.remove('visible');
   }
});

//  Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
   scrollIntoView("#home");
});

// 스크롤링이 자주 쓰이므로 하나로 통합
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}

