// Add imports above this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


// HW7
const galleryEl = document.querySelector("[class=gallery]");


function createListGalleryItem(items) {
  return items
    .map(
      (item) => `
      <li style="list-style:none">
  <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"
    />
    </a>
    </li>`
    )
    .join("");
}

const listGalleryItem = createListGalleryItem(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", listGalleryItem);

galleryEl.addEventListener("click", onClickGalleryItem);

function onClickGalleryItem(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  //   console.log(event.target);

  showModalImgSimpleLightbox();
}

function showModalImgSimpleLightbox() {
  let lightbox = new SimpleLightbox(".gallery a", {
    nav: true,
    caption: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}

// Change code below this line

console.log(galleryItems);

