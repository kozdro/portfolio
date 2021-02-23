const navBtn = document.querySelector('.nav');
const navMenu = document.querySelector('.burger');

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})