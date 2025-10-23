import axios from 'axios';

const API_KEY = '52715870-cb8cb03de1263a77a911b462a';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Помилка запиту:', error);
    throw error;
  }
}
