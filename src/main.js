import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = form.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
      timeout: 3000,
      theme: 'light',
      close: true,
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.show({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
        timeout: 5000,
        theme: 'light',
        color: '#EF4040',
        progressBarColor: '#FFBEBE',
        close: true,
        maxWidth: 432,
        layout: 2,
        padding: 20,
        balloon: false,
        borderRadius: 4,
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Try again later.',
      position: 'topRight',
      timeout: 5000,
      close: true,
    });
  }
});
