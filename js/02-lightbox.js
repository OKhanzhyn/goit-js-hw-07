import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// console.log(simpleLightbox);

const gallaryList = document.querySelector('.gallery');
const typset = galleryItems.map(({ preview, original, description }) => {
    return `<li style="margin: 1px;" class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                loading="lazy"
                class="gallery__image"
                src="${preview}"
                
                alt="${description}"
            />
        </a>
    </li>`;
}).join('');

  gallaryList.innerHTML = typset;
  new SimpleLightbox('.gallery a', {
  caption: true,
  captionDelay: 250,
  fadeSpeed: 250,
  captionSelector: "img",
  captionData: "description",
  captionPosition: "bottom",}); 

