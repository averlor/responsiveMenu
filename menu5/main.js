'use strict';

// menu
var menuIcon = document.getElementById('menuIcon');
var menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu_state_open');
})

// search
var search = document.querySelector('.search');
var searchInput = document.querySelector('.search__input');

search.addEventListener('click', (e) => {
    if (!e.target.hasAttribute('data-search')) return;
    if (!searchInput.value) {
        alert('Пустая строка поиска...Что мы ищем, Карл?!')
    } else {
        alert('Мы обязательно найдем: ' + searchInput.value)
    }
})
search.addEventListener('keyup', (e) => {
    if (!e.target.hasAttribute('data-search-enter')) return;
        if (e.keyCode === 13) {
            if (!searchInput.value) {
                alert('Пустая строка поиска...Что мы ищем, Карл?!')
            } else {
                alert('Мы обязательно найдем: ' + searchInput.value)
            }
        }
})