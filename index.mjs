import * as dotenv from './node_modules';

dotenv.config();

const baseUrl = 'https://api.thecatapi.com/v1';

const getCatBreeds = async () => {
  try {

    const response = await fetch(`${baseUrl}breeds`, {
      method: 'GET',
      headers: {
        'x-api-key': process.env.CAT_API_KEY
      }
    });
    console.log('response', response);

    const catBreeds = await response.json();

    console.log('catBreeds', catBreeds);
  } catch (err) {
    console.error('Error in getCatBreeds', err);
  }
}

const getCatPictures = async () => {
  try {
    const response = await fetch(`${baseUrl}/images/search?limit=5`, {
      method: 'GET',
      headers: {
        'x-api-key': process.env.CAT_API_KEY
      }
    });
    console.log('response', response);

    const catPictures = await response.json();

    catPictures.forEach((element) => {
      const img = document.createElement('img');

      img.src = element.url;

      // document.getElementById('body').appendChild(img);
      console.log(document);
      document.body.appendChild(img);
    });

    console.log('catPictures', catPictures);
  } catch (err) {
    console.error('Error in getCatPictures', err);
  }
}
