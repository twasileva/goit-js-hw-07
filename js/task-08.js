const block = ["width: 30px; height: 30px"]

const colors = ["red", "blue", "green", "orange", "purple"];

const randomizer = max => {
  return Math.floor(Math.random() * max);
};

const inputEl = document.querySelector('input')
const renderBtnEl = document.querySelector('button[data-action="render"]')
const destroyBtnEl = document.querySelector('button[data-action="destroy"]')
const boxesEl = document.querySelector('#boxes')


renderBtnEl.addEventListener('click', createBoxes)
destroyBtnEl.addEventListener('click', destroyBoxes)




function createBoxes(amount) {

  inputEl.addEventListener('input', onSetValueInput)

  function onSetValueInput(event) {
    const amount = Number(event.currentTarget.value)
    const arrBoxes = []
    let totalSize = 30

    for (let i = 1; i <= amount; i += 1) {
      console.log(amount);
      const box = document.createElement('div')
      totalSize += 10
      box.style.width = `${totalSize}px`
      box.style.height = `${totalSize}px`
      box.style.backgroundColor = colors[randomizer(colors.length)]

      arrBoxes.push(box)
    }
    boxesEl.append(...arrBoxes)
    inputEl.textContent = ''
  }
}
const newBlocks = boxesEl.children
console.log(newBlocks);

function destroyBoxes() {
  boxesEl.removeChild(...newBlocks)
}

