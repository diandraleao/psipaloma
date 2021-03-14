'use strict';

/**
 * import css/sass
 */

import css from '../css/reset.css';
import scss from '../css/main.scss';

// menu

let menuBtn = document.getElementById("mobile-menu");
let menuMob = document.querySelector(".header");
menuBtn.addEventListener('click', e => {
	menuBtn.classList.toggle("open");
	menuMob.classList.toggle("open-mob");
});


