const inputEl = document.getElementById('name-input')
console.log(inputEl)
const titleEl = document.getElementById('name-output')
console.log(titleEl)

inputEl.addEventListener('blur', e => {

  if (e.currentTarget.value <= 0) {
    titleEl.textContent = 'незнакомец'
  } else {
    titleEl.textContent = e.currentTarget.value
  }
})

