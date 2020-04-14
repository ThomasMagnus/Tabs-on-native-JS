window.addEventListener('DOMContentLoaded', function(){

	'use strict'

	let tabs = document.querySelectorAll('.info-header-tab'),
		content = document.querySelectorAll('.info-tabcontent'),
		info = document.querySelector('.info-header');
	
	function hideTabContent(a) {
		for (let i = a; i < content.length; i++) {
			content[i].classList.remove('show');
			content[i].classList.add('hide');
		};

	};

	hideTabContent(1);

	function showTabContent(b) {
		if (content[b].classList.contains('hide')) {
			content[b].classList.remove('hide');
			content[b].classList.add('show');
		};

	};

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tabs.length; i++) {
				if (target == tabs[i]) {
					hideTabContent(0);
					showTabContent(i)
					break;
				};
			};
		};
	});
});