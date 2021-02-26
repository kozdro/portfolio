const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.burger');


navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
});