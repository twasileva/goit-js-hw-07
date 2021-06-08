const block = {
  width: 0,
  height: 0,
  backgroundColor: 0,
  size() {
    this.width = `30px`
    this.height = `30px`
    this.backgroundColor = colors[randomizer(colors.length)]

  }

}

const colors = ["red", "blue", "green", "orange", "purple"];

const randomizer = max => {
  return Math.floor(Math.random() * max);
};


const controlsEl = document.getElementById('controls')
console.log(controlsEl);
const inputEl = document.querySelector('input')
console.log(inputEl);
const renderBtn = document.querySelector('button[data-action="render"]')
console.log(renderBtn);
const destroyBtn = document.querySelector('button[data-action="destroy"]')
console.log(destroyBtn);

const boxesEl = document.getElementById('boxes')
console.log(boxesEl);



renderBtn.addEventListener('click', () => {
  createBoxes()
})

const createBoxes = (amount) => {



  // const block = document.createElement('div')
  // block.style.backgroundColor = colors[randomizer(colors.length)]
  // block.style.width = '30px'
  // block.style.height = '30px'

  boxesEl.append(block.size(30, 30, 30))
}

console.log(createBoxes(3));