const button = document.getElementById('menu-button');
const menu = document.getElementById('menu-full-page');

button.onclick = () => menu.classList.remove('gone');

menu.onclick = () => menu.classList.add('gone');
