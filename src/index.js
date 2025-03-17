import "./styles.css";
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

const content = document.querySelector('#content');

function clear() {
    content.textContent = '';
}

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');

home.addEventListener('click', (e) => {
    clear();
    loadHome();
});

menu.addEventListener('click', (e) => {
    clear();
    loadMenu();
});

about.addEventListener('click', (e) => {
    clear();
    loadAbout();
});

loadHome();