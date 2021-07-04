const currentValue = document.querySelector('#value');
const decrement = document.querySelector(
  'button[data-action="decrement"]',
);
const increment = document.querySelector(
  'button[data-action="increment"]',
);
let counterValue = 0;

function decrementClick() {
  counterValue -= 1;
  currentValue.textContent = counterValue;
}

function incrementClick() {
  counterValue += 1;
  currentValue.textContent = counterValue;
}

decrement.addEventListener('click', decrementClick);
increment.addEventListener('click', incrementClick);

/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/