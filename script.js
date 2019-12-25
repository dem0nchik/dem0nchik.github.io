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
let list_menu = document.querySelector('.header_wrap > ul');
let listMenuItem = document.querySelectorAll('.header_wrap > ul > li');
mob_btn.onclick = () => {
    close_menu.style.display = "block";
    mob_btn.style.display = "none";
    list_menu.style.display = "block";
    list_menu.classList.add('active-list');

    listMenuItem.forEach((el, i) => el.onclick = () => hide())
    
    close_menu.onclick = () => {
        hide();
    }
};
let hide = () => {
    close_menu.style.display = "none";
    mob_btn.style.display = "block";
    list_menu.style.display = "none";
    list_menu.classList.remove('active-list');
}

$(".header_wrap > ul > li > a").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 70
    }, 500);
});