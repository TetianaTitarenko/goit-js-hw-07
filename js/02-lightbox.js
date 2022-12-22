import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
gallery.classList.add("gallery")

function onClouse(event) {
console.log(event)
}

gallery.addEventListener("click", onClikcImg)


function makeItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt=""title="${description}" />
        </a>
  `;
    })
        .join(``);
}

const makeItems = makeItemsMarkup(galleryItems)

gallery.innerHTML = makeItems

function onClikcImg(event) {
        event.preventDefault()
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
        (function() {
        var $gallery = new SimpleLightbox('.gallery a', {captionDelay: 250});
    })();
}


