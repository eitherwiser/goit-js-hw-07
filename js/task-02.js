const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsListItem = ingredients.map(ingredient => {
  const listNewItem = document.createElement('li');
  listNewItem.textContent = ingredient;
  return listNewItem;
});

ingredientsList.append(...ingredientsListItem);



/*
В HTML есть пустой список ul#ingredients.
В JS есть массив "ingredients"
Напиши скрипт, который для каждого элемента массива ingredients
создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
*/
