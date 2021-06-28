'use strict';

/**
 * import css/sass
 */

import css from '../css/reset.css';
import scss from '../css/main.scss';

import {tns} from 'tiny-slider/src/tiny-slider';

// menu
let menuBtn = document.getElementById("mobile-menu");
let menuMob = document.querySelector(".header");
menuBtn.addEventListener('click', e => {
	menuBtn.classList.toggle("open");
	menuMob.classList.toggle("open-mob");
});


var slider = tns({
	container: '#instagram__carousel',
	items: 1,
	center: true,
	loop: true,
	nav: true,
	navPosition: 'bottom',
	controls: true,
	autoplay: true,
	speed: 600,
	autoplayTimeout: 3000,
	autoplayButtonOutput: false,
	controlsText: ['<', '>']
});


