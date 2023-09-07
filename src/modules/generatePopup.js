const generatePopup = (show) => {
  const overlayDiv = document.getElementById('overlay');
  const popupDiv = document.getElementById('popup');
  const popupCard = document.createElement('div');
  popupCard.classList.add('popup-card');
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-button');
  closeBtn.textContent = 'X';
  closeBtn.addEventListener('click', () => {
    overlayDiv.style.display = 'none';
    popupDiv.style.display = 'none';
  });
  const popupImg = document.createElement('img');
  popupImg.src = show.image.medium;
  popupImg.alt = `${show.name} image`;
  const popupCardContent = document.createElement('div');
  popupCardContent.classList.add('popup-card-content');
  const popupCardTitle = document.createElement('h2');
  popupCardTitle.classList.add('popup-card-title');
  popupCardTitle.textContent = `${show.name}`;
  const popupCardDetails = document.createElement('div');
  popupCardDetails.classList.add('popup-card-details');
  const popupCardType = document.createElement('span');
  popupCardType.classList.add('popup-card-type');
  popupCardType.textContent = `Show Type: ${show.type}`;
  const popupCardRating = document.createElement('span');
  popupCardRating.classList.add('popup-card-rating');
  popupCardRating.textContent = `Average Rating: ${show.rating.average}`;
  popupCardDetails.append(popupCardType, popupCardRating);
  const popupCardSummary = document.createElement('span');
  popupCardSummary.classList.add('popup-card-summary');
  popupCardSummary.innerHTML = `${show.summary}`;
  popupCardContent.append(popupCardTitle, popupCardDetails, popupCardSummary);
  popupCard.append(closeBtn, popupImg, popupCardContent);
  return popupCard;
};

export default generatePopup;
