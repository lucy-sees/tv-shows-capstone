const generateCard = (show) => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('card');
  const cardImg = document.createElement('img');
  cardImg.src = show.image.medium;
  cardImg.alt = 'Movie Image';
  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  const movieTitle = 'Movie Title';
  const likeIcon = document.createElement('i');
  likeIcon.classList.add('fas', 'fa-star');
  cardTitle.textContent = `${movieTitle}`;
  cardTitle.appendChild(likeIcon);
  const likesCounter = document.createElement('span');
  likesCounter.classList.add('badge');
  likesCounter.textContent = 'Badge';
  const commentsBtn = document.createElement('button');
  commentsBtn.classList.add('card-button');
  commentsBtn.textContent = 'Comments';
  movieCard.append(cardImg, cardTitle, likesCounter, commentsBtn);
  console.log('My Image', show.image.medium);
  return movieCard;
};

export default generateCard;