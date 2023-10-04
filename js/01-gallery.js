import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(basicLightbox);

// {/* <ul>
// <li>
// <a href="01-gallery.html">Image gallery</a>
// </li>
// <li>
// <a href="02-lightbox.html">SimpleLightbox library</a>
// </li>
// </ul> */}

// export const galleryItems = [
//     {
//       preview:
//         'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//       original:
//         'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//       description: 'Hokkaido Flower',
//     },



const gallaryList = document.querySelector('.gallery');
const typset = galleryItems.map(({ preview, original, description }) => {
    return `<li style="margin: 1px;" class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                loading="lazy"
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`;
}).join('');
gallaryList.insertAdjacentHTML("beforeend", typset);
const modalOpen = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
            return;
    }
    const clickedImageAlt = event.target.getAttribute('alt');
    const clickedImageSrc = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src='${clickedImageSrc}' alt='${clickedImageAlt}'/>`, {
            onShow: (instance) => {
                document.addEventListener('keydown', modalClose);
            },
            onClose: (instance) => {
                document.removeEventListener('keydown', modalClose);
                instance = null;
            }
        });
    instance.show();
};
const modalClose = (event) => {
    if (event.key !== 'Escape') {
        return;
    }
    instance.close();
};
document.addEventListener('keydown', modalClose);
gallaryList.addEventListener('click', (event) => {
    modalOpen(event);
});

