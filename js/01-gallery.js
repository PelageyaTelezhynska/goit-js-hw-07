import { galleryItems } from "./gallery-items.js";
// Change code below this line



const refs = {
  gallery: document.querySelector(".gallery"),
};

console.log(galleryItems);


  const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
  )
  .join("");

function onGalleryClick(event) {
event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) return;
  
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
  
  instance.show(); 
}

window.addEventListener('keydown', onEscapeClick)
function onEscapeClick(event) {
  if (event.code === "Escape") { instance.close() };
}

refs.gallery.insertAdjacentHTML("beforeend", markup);

refs.gallery.addEventListener("click", onGalleryClick);



