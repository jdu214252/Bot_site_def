const meniIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

meniIcon.onclick = () => {
    meniIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}