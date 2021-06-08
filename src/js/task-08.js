const controls = {
  numberControls: 0,
  render() {
    console.log('render -> this', this);
    this.numberControls = numberControls
  },
  destroy() {
    console.log('destroy -> this', this);
    this.numberControls = numberControls
  }

  // boxes{

  // }

}

const colors = ["red", "blue", "green"];

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
  const block = document.createElement('div')
  block.style.backgroundColor = colors[randomizer(colors.length)]
  block.style.width = '30px'
  block.style.height = '30px'

  boxesEl.append(block)
}

console.log(createBoxes(3));