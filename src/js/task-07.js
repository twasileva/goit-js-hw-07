const inputEl = document.getElementById('font-size-control')
const textEl = document.getElementById('text')

inputEl.addEventListener('click', e => {
  const fontSize = Number(e.currentTarget.value)
  textEl.style.fontSize = `${fontSize}.px`
})