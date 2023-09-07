import likeShow from './likeShow.js';
import openPopup from './openPopup.js';

const generateCard = (show, showLike, numberOfShow) => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('card');
  const cardImg = document.createElement('img');
  cardImg.src = show.image.medium;
  cardImg.alt = `${show.name} image`;
  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  const movieTitle = `${numberOfShow}. ${show.name}`;
  const likeIcon = document.createElement('i');
  likeIcon.classList.add('fa-regular', 'fa-heart', 'like-icon');
  likeIcon.addEventListener('click', () => {
    likeIcon.classList.add('active');
    setTimeout(() => {
      likeIcon.classList.remove('active');
    }, 2000);
    likeShow(show.id, movieCard);
  });
  cardTitle.textContent = `${movieTitle} `;
  cardTitle.appendChild(likeIcon);
  const likesCounter = document.createElement('span');
  likesCounter.classList.add('badge');
  likesCounter.textContent = `${showLike} Likes`;
  const commentsBtn = document.createElement('button');
  commentsBtn.classList.add('card-button');
  commentsBtn.textContent = 'Comments';
  commentsBtn.addEventListener('click', () => openPopup(show));
  movieCard.append(cardImg, cardTitle, likesCounter, commentsBtn);
  return movieCard;
};

export default generateCard;