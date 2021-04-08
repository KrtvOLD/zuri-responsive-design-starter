const menuToggler = document.querySelector('.menu-icon');
const links = document.querySelector('.nav-links');

menuToggler.addEventListener('click', function(){
    if(!links.classList.contains('open-links')){
        links.classList.add('open-links');
    } else {
        links.classList.remove('open-links');
    }
})