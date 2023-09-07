import postComment from './postComment.js';

const generatePopup = (show, commentsData) => {
  const numberOfComments = commentsData.length;
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
  const commentsDiv = document.createElement('div');
  commentsDiv.classList.add('comments-div');
  const commentsTitle = document.createElement('h3');
  commentsTitle.classList.add('comments-title');
  commentsTitle.textContent = `Comments (${numberOfComments})`;

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');
  commentsContainer.id = `comments-container-${show.id}`;

  if (commentsData.length === 0) {
    const noCommentsMessage = document.createElement('p');
    noCommentsMessage.textContent = 'No comments available.';
    commentsContainer.appendChild(noCommentsMessage);
  } else {
    commentsData.forEach((comment) => {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');

      const creationDateElement = document.createElement('span');
      creationDateElement.classList.add('comment-date');
      creationDateElement.textContent = `${comment.creation_date}`;

      const usernameElement = document.createElement('span');
      usernameElement.classList.add('comment-username');
      usernameElement.textContent = `${comment.username}:`;

      const commentTextElement = document.createElement('p');
      commentTextElement.classList.add('comment-text');
      commentTextElement.textContent = `${comment.comment}`;

      commentElement.append(creationDateElement, usernameElement, commentTextElement);

      commentsContainer.appendChild(commentElement);
    });
  }

  const addCommentsTitle = document.createElement('h3');
  addCommentsTitle.classList.add('comments-title');
  addCommentsTitle.textContent = 'Add a comment';
  const commentsForm = document.createElement('div');
  commentsForm.classList.add('comments-form');
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Your name';
  nameInput.classList.add('name-input');
  nameInput.setAttribute('id', 'name-input');
  const commentInput = document.createElement('textarea');
  commentInput.placeholder = 'Your comments';
  commentInput.classList.add('comment-input');
  commentInput.setAttribute('id', 'comment-input');
  commentInput.rows = 5;
  const commentBtn = document.createElement('button');
  commentBtn.classList.add('comment-btn');
  commentBtn.textContent = 'Comment';
  commentBtn.addEventListener('click', () => {
    const nameData = nameInput.value;
    const commentData = commentInput.value;
    postComment(show.id, nameData, commentData);
  });
  commentsForm.append(nameInput, commentInput, commentBtn);
  commentsDiv.append(commentsTitle, commentsContainer, addCommentsTitle);
  popupCard.append(closeBtn, popupImg, popupCardContent, commentsDiv, commentsForm);
  return popupCard;
};

export default generatePopup;
