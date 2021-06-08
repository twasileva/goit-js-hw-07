const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1
  },
  decrement() {
    this.counterValue -= 1
  },
}

const incrementBtn = document.querySelector('button[data-action="increment"]')
const decrementBtn = document.querySelector('button[data-action="decrement"]')
let valueEl = document.querySelector('#value')

decrementBtn.addEventListener('click', function () {
  counter.decrement()
  valueEl.textContent = counter.counterValue
})

incrementBtn.addEventListener('click', function () {
  counter.increment()
  valueEl.textContent = counter.counterValue
})