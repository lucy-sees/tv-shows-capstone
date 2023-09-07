import generatePopup from './generatePopup.js';

const openPopup = (show) => {
  const overlayDiv = document.getElementById('overlay');
  const popupDiv = document.getElementById('popup');
  overlayDiv.style.display = 'block';
  popupDiv.style.display = 'block';

  popupDiv.innerHTML = '';

  const popupCard = generatePopup(show);
  popupDiv.append(popupCard);
};

export default openPopup;
