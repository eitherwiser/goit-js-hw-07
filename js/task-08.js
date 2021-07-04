const refs = {
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  container: document.querySelector('#boxes'),
};

function destroyBtn() {
  refs.container.append([])
  refs.container.innerHTML = '';
};

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const newContainer = document.createElement('div');
    newContainer.style.width = `${30 + 10 * i}px`;
    newContainer.style.height = `${30 + 10 * i}px`;
    newContainer.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    boxes.push(newContainer);
  }
  destroyBtn();
  refs.container.append(...boxes);
}

refs.destroyBtn.addEventListener('click', destroyBtn);

refs.renderBtn.addEventListener('click', () => {
  const amount = document.querySelector('input').value;
  createBoxes(amount);
});



/*
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
При нажатии на кнопку Очистить, коллекция элементов очищается.
Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

- Имеет случайный rgb цвет фона
- Размеры самого первого div - 30px на 30px
- Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
- Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
*/