const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')

const markup = ingredients.forEach((ingredient) => {
  const ing = ingredient
  const itemEl = document.createElement('li');
  itemEl.textContent = `${ing}`
  list.append(itemEl)
})

// 2-й вариант решения задания

// const markup = ingredients.reduce(
//   (string, ingredient) => string + `< li > ${ ingredient }</li > `,
//   ""
// );
// list.innerHTML(markup)

