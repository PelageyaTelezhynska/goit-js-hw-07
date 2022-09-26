import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

console.log(galleryItems);
const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`
  )
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", markup);

const originImgLink = gallery.dataset.source;

const instance = basicLightbox.create(`
    <img src="${originImgLink}" width="1280">
`);

refs.gallery.addEventListener("click", onItem);

function onItem(event) {
  preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  instance.show();
}
