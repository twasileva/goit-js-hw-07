const block = ["width: 30px; height: 30px"]

const colors = ["red", "blue", "green", "orange", "purple"];

const randomizer = max => {
  return Math.floor(Math.random() * max);
};

const inputEl = document.querySelector('input')
const renderBtnEl = document.querySelector('button[data-action="render"]')
const destroyBtnEl = document.querySelector('button[data-action="destroy"]')
const boxesEl = document.querySelector('#boxes')


inputEl.addEventListener('input', onSetValueInput)
renderBtnEl.addEventListener('click', createBoxes)
destroyBtnEl.addEventListener('click', destroyBoxes)

function onSetValueInput(event) {
  const valueInputEl = Number(event.currentTarget.value)
  return valueInputEl
}

function createBoxes(amount) {

  for (let i = 0; i < 5; i += 1) {
    const box = document.createElement('div')
    box.style.width = '30px'
    box.style.height = '30px'
    box.style.backgroundColor = colors[randomizer(colors.length)]

    if (i > 1) {
      box.style.width = '30px' + '10px'
      box.style.height = '30px' + '10px'
    }
    boxesEl.append(box)
  }
  console.log(boxesEl);
}

function destroyBoxes() {
  boxesEl.remove()
}

