const categoriesEl = document.querySelector('#categories')

const quantityCategories = param => {
  const items = param.children.length;
  return `В списке ${items} категории.`
}

console.log(quantityCategories(categoriesEl));


const items = document.querySelectorAll('.item')

items.forEach(item => {
  const titleEl = item.firstElementChild
  const quantityElement = item.lastElementChild.childElementCount
  console.log(`Категория: ${titleEl.textContent}, Количество элементов: ${quantityElement}`);
})

