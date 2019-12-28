let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if(pageYOffset > 10) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

let mob_btn = document.querySelector('.mobile-btn');
let close_menu = document.querySelector('.close-menu');
let overlay = document.querySelector('.overlay');
let list_menu = document.querySelector('.overlay > ul');
let listMenuItem = document.querySelectorAll('.overlay > ul > li');
mob_btn.onclick = () => {
    close_menu.style.display = "block";
    mob_btn.style.display = "none";
    list_menu.style.display = "block";
    overlay.style.display = "flex";

    listMenuItem.forEach((el, i) => el.onclick = () => hide())
    
    close_menu.onclick = () => {
        hide();
    }
};
let hide = () => {
    mob_btn.style.display = "block";
    overlay.style.display = "none";
    close_menu.style.display = "none";
}

let menu;
$(".header_wrap > ul > li > a").on("click", function(e){
    e.preventDefault();
    menu = window.innerWidth > 992 ? 76 : 50;
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - menu
    }, 500);
});