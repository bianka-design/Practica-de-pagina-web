
let click = document.getElementById('menu-click');
let enlaces = document.querySelector('.enlace-header')
click.addEventListener('click',() => {
    enlaces.classList.toggle('click');
});
console.log(click)