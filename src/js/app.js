import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

import IMask from 'imask';

var phoneMask = IMask(
    document.getElementById('phone'), {
      mask: '+{7}(000)000-00-00'
    });

const dropBtn = document.querySelector('.dropdown__top');
const dropdown = document.querySelector('.dropdown');
dropBtn.addEventListener('click', () => {
    dropBtn.classList.toggle('active');
})
document.addEventListener('click', e => {
    if (!e.composedPath().includes(dropdown)){
        dropBtn.classList.remove('active');
    }
})

const btn = document.querySelector('.popup-open');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupCloseIcon = document.querySelector('.popup__icon');
const body = document.querySelector('body');

btn.addEventListener('click', (e)=>{
    popup.classList.toggle('active')
    body.classList.toggle('active')
})
popupClose.addEventListener('click', (e)=>{
    popup.classList.remove('active')
})
popupCloseIcon.addEventListener('click', (e)=>{
    popup.classList.remove('active')
})


