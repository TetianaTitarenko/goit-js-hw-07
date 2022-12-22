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
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
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

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `).show() 

    gallery.addEventListener("kyedown", onClose)

    function onClose(event) {
        if (event.code === "Escape") {
            instance.close()
        }
    }
}
// const originalImg = document.querySelector("[data-source]")
// console.log(originalImg)

// originalImg.addEventListener("kyedown", onClose)

// function onClose(event) {
//     if (event.code === "Escape") {
//         instance.close()
//     }
// }
