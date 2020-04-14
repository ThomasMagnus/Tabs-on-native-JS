'use strict'

// let timer = setInterval(func, 3000);
// clearTimeout(timer);

// function func() {
// 	console.log('Hello, world!');
// };


// let timerId = setTimeout(function log() {
// 	console.log("Hello!");
// 	setTimeout(log, 3000);
// });

let btn = document.querySelector('.btn'),
	elem = document.querySelector('.box_2');

function myAnimate() {
	let pos = 0;

	let timer = setInterval(frame, 10); 
	function frame() {
		if (pos == 400) {
			clearInterval()
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		};
	};
};

function myAnimate2() {
	let pos = 400;

	let timer = setInterval(frame, 10); 
	function frame() {
		if (pos == 0) {
			clearInterval()
		} else {
			pos--;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		};
	
		if (pos == 400) {
			btn.disabled = false;
		} else {
			btn.disabled = true;
		};
	};
};

btn.addEventListener('click', myAnimate);