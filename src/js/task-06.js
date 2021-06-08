const inputEl = document.getElementById('validation-input')
const dataLengthInput = document.querySelector('input[data-length]')

inputEl.addEventListener('blur', e => {

  if (e.currentTarget.value.length === 6) {
    e.currentTarget.classList.add("valid")
    e.currentTarget.classList.remove("invalid")
  } else {
    e.currentTarget.classList.add("invalid")
    e.currentTarget.classList.remove("valid")
  }

})