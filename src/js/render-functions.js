import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">

        <!-- Категорії зверху -->
        <div class="gallery-categories">
          <span>Likes</span>
          <span>Views</span>
          <span>Comments</span>
          <span>Downloads</span>
        </div>

        <!-- Цифри знизу -->
        <div class="gallery-stats">
          <span>${image.likes}</span>
          <span>${image.views}</span>
          <span>${image.comments}</span>
          <span>${image.downloads}</span>
        </div>
      </a>
    </li>
  `
    )
    .join('');

  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.textContent = 'Loading images, please wait...';
  loader.classList.add('active');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.textContent = '';
  loader.classList.remove('active');
}
