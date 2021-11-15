// --------------------------------------
// Или я чего-то не понял, или 1-е задание заключается в добавлении
// двух строчек, которые ниже.
// ?????
// --------------------------------------

// Import from Simplelightbox
// -------------------------------------
// Решение 1-й задачи
// -------------------------------------
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// -------------------------------------

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// --------------------------------------
// Initialization places
// --------------------------------------

const galleryPlace = document.querySelector(".gallery");

// --------------------------------------
// Create gallery
// --------------------------------------

const createGallery = (items) => {
  return items.map((element) => createItem(element)).join("");
};

const createItem = ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
          </a>`;
};

galleryPlace.insertAdjacentHTML("beforeend", createGallery(galleryItems));

// --------------------------------------
// Включение библиотеки
// --------------------------------------

const gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img", //Переключение на имидж
  captionsData: "alt", //Получение текста из Алт
  captionPosition: "bottom", //Подпись внизу
  captionDelay: 250, //Задержка 250 мс
  scrollZoom: false, //Масштабирование скролом отключено
});