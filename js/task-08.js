const block = ["width: 30px; height: 30px"]

const colors = ["red", "blue", "green", "orange", "purple"];

const randomizer = max => {
  return Math.floor(Math.random() * max);
};

const inputEl = document.querySelector('input')
const renderBtn = document.querySelector('button[data-action="render"]')
const destroyBtn = document.querySelector('button[data-action="destroy"]')
const boxesEl = document.querySelector('#boxes')

const form = document.createElement('div')
boxesEl.append(form)


const setInputValue = inputEl.addEventListener('input', e => {
  const inputValue = Number(e.currentTarget.value);
  console.log(inputValue);

})

renderBtn.addEventListener('click', () => {
  createBoxes()

})

const createBoxes = (amount) => {

  for (let i = 0; i <= amount; i += 1) {

    form.style.cssText = block[randomizer(block.length)]
    form.style.backgroundColor = colors[randomizer(colors.length)]

  }
  return form
}
console.log(createBoxes(setInputValue));



// алгоритм решения задачи

// задать начальные данные блока в массиве
// сделать рандомную функцию для выбора цвета
// массив цветов
// получить доступ ко всем дом-узлам: инпут, кнопки, див
// получить значение из инпута
// повесить слушателя событий на кнопку Создать, куда передать функцию createBoxes
// написать ф-цию createBoxes
// повесить слушателя событий на кнопку Очистить

