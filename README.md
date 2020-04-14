# Tabs-on-native-JS
Табы на нативном JavaScript

Для начала создаем переменные получая необходимые элементы:

let tabs = document.querySelectorAll('.info-header-tab'), // переменная с массивом элементов переключения табов.
		content = document.querySelectorAll('.info-tabcontent'), // переменная с табами
		info = document.querySelector('.info-header'); // родитель элементов переключения
    
Далее, прописываем функцию для скрытия всех табов, кроме одного

function hideTabContent(a) {
		for (let i = a; i < content.length; i++) {
			content[i].classList.remove('show');  // show - это класс CSS для отображения элемента. Пример: display: flex 
			content[i].classList.add('hide'); // hide - это класс CSS для скрытия элементов. Пример: display: none 
		};
};

hideTabContent(1); //  при вызове функции, в качестве аргумента ставим единичку, чтобы отображался только первый таб 

Далее, создаем функцию, то бы при нажатии на переключатель tabs показывался определенный таб, а остальные скрылись

function showTabContent(b) {
		if (content[b].classList.contains('hide')) {
			content[b].classList.remove('hide');
			content[b].classList.add('show');
		};
};

Далее, навешиваем на переключателю броботчик событий, для переключения табов по клику.

ВНИМАНИЕ! Для того, чтобы не навешивать обработчики на каждый переключатель, мы делигируем событие определенному переключателю через его родитель!
.info-header - родитель
.info-header-tab - сами переключатели

Структура HTML такая: 
<ul class = "info-header">
  <li class = "info-header-tab"><li>
  <li class = "info-header-tab"><li>
  <li class = "info-header-tab"><li>
<ul>

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

