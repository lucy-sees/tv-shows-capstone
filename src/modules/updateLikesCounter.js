const updateLikesCounter = (card) => {
  const likesCounter = card.querySelector('.badge');
  const currentLikes = parseInt(likesCounter.textContent, 10);

  if (Number.isNaN(currentLikes)) {
    likesCounter.textContent = '1 Like';
  } else {
    likesCounter.textContent = `${currentLikes + 1} Likes`;
  }
};

export default updateLikesCounter;
