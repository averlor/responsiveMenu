'use strict';

// menu
var menuIcon = document.getElementById('menuIcon');
var menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu_state_open');
})