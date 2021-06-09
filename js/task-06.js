const inputEl = document.getElementById('validation-input')
const dataInputEl = document.querySelector('input[data-length="6"]')
const dataLengthInput = dataInputEl.dataset.length


inputEl.addEventListener('blur', e => {

  if (e.currentTarget.value.length === Number(dataLengthInput)) {
    e.currentTarget.classList.add("valid")
    e.currentTarget.classList.remove("invalid")
  } else {
    e.currentTarget.classList.add("invalid")
    e.currentTarget.classList.remove("valid")
  }

})