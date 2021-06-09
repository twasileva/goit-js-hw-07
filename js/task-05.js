const inputEl = document.getElementById('name-input')
const titleEl = document.getElementById('name-output')

inputEl.addEventListener('input', e => {

  if (e.currentTarget.value <= 0) {
    titleEl.textContent = 'незнакомец'
  } else {
    titleEl.textContent = e.currentTarget.value
  }
})

