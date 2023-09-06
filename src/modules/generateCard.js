const generateCard = (show) => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('card');
  const cardImg = document.createElement('img');
  cardImg.src = show.image.medium;
  cardImg.alt = `${show.name} image`;
  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  const movieTitle = show.name;
  const likeIcon = document.createElement('i');
  likeIcon.classList.add('fa-regular', 'fa-heart', 'like-icon');
  cardTitle.textContent = `${movieTitle} `;
  cardTitle.appendChild(likeIcon);
  const likesCounter = document.createElement('span');
  likesCounter.classList.add('badge');
  likesCounter.textContent = '10 Likes';
  const commentsBtn = document.createElement('button');
  commentsBtn.classList.add('card-button');
  commentsBtn.textContent = 'Comments';
  movieCard.append(cardImg, cardTitle, likesCounter, commentsBtn);
  return movieCard;
};

export default generateCard;