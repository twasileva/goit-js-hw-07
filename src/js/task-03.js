const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery')
const itemsEl = document.querySelectorAll('li')
const imgEl = document.querySelectorAll('img')

const addGallery = images.map((image) => {
  galleryEl.insertAdjacentHTML("afterbegin", `<li><img src='${image.url}' alt='${image.alt}'></li>`)
})

galleryEl.classList.add('list')
itemsEl.classList.add('li')
imgEl.classList.add('img')

