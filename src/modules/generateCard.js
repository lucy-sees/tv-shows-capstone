const generateCard = () => {
  const listContainer = document.getElementById('list-container');
  const movieCard = document.createElement('div');
  movieCard.classList.add('card');
  const cardImg = document.createElement('img');
  cardImg.src = '../imgs/movie-app-logo.png';
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
  listContainer.append(movieCard);
};

export default generateCard;