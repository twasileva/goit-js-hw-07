const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients')

const markup = ingredients.map(option => {
  const itemEl = document.createElement('li')
  itemEl.textContent = option
  return itemEl
})

listEl.append(...markup)

