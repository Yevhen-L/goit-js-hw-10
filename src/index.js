import SlimSelect from 'slim-select';

new SlimSelect({
  select: '#breed-select',
});

import Notiflix from 'notiflix';

import { fetchBreeds, fetchCatByBreed }  from './js/cat-api';


const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

window.addEventListener('DOMContentLoaded', async () => {
  try {
    loader.style.display = 'block';
    const breeds = await fetchBreeds();
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
    loader.style.display = 'none';
  } catch (err) {
    loader.style.display = 'none';
    error.style.display = 'block';
  }
});

breedSelect.addEventListener('change', async event => {
  const breedId = event.target.value;
  if (breedId) {
    try {
      loader.style.display = 'block';
      catInfo.innerHTML = '';
      const catData = await fetchCatByBreed(breedId);
      const catImage = document.createElement('img');
      catImage.classList = 'size-image';
      catImage.src = catData.url;
      catImage.alt = catData.breeds[0].name;
      // catImage.classList.add();
      catInfo.appendChild(catImage);

      const breedName = document.createElement('h2');
      breedName.textContent = catData.breeds[0].name;
      catInfo.appendChild(breedName);

      const description = document.createElement('p');
      description.textContent = catData.breeds[0].description;
      catInfo.appendChild(description);

      const temperament = document.createElement('p');
      temperament.textContent = `Temperament: ${catData.breeds[0].temperament}`;
      catInfo.appendChild(temperament);

      loader.style.display = 'none';
      catInfo.style.display = 'block';
    } catch (err) {
      loader.style.display = 'none';
      error.style.display = 'block';
      Notiflix.Notify.failure(
        `Oops! Something went wrong! Try reloading the page!`
      );
    }
  } else {
    catInfo.style.display = 'block';
  }
});
