/*
a. Сделайте модальное (появляющееся и исчезающее) окно
b. (не обязательное задание) Сделайте анимацию при появлении и исчезании.
*/
'use strict';

let btnPush = document.querySelector('.btn-push');
let modalWindow = document.querySelector('.modal-dialog');
let closeWindow = modalWindow.querySelector('.close');

btnPush.addEventListener('click', function(event) {
    modalWindow.classList.remove('hidden', 'boingOutDown');
    modalWindow.classList.add('magictime', 'boingInUp');
});

closeWindow.addEventListener('click', function(event) {
    modalWindow.classList.add('boingOutDown');
    setTimeout(function() {
               modalWindow.classList.add('hidden')
               }, 1000);
    modalWindow.classList.remove('boingInUp');
});

