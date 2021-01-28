const nav = document.querySelector('nav ul');
const hamburger = document.querySelector('#hamburger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');
    line1.classList.toggle('line1-resp');
    line2.classList.toggle('line2-resp');
    line3.classList.toggle('line3-resp');
})