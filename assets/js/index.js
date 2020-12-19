const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".mini-menu");
const menuClose = document.querySelector(".close");
const navbar = document.querySelector("#header");

const navLeft = menu.getBoundingClientRect().left;

menuOpen.addEventListener('click', () => {
    if(navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navbar.classList.add("show");
    }
    console.log('in');
});

menuClose.addEventListener('click', () => {
    if(navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }

    console.log('out');
});
