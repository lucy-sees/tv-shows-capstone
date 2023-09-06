const updateLikesCounter = (card) => {
  const likesCounter = card.querySelector('.badge');
  const currentLikes = parseInt(likesCounter.textContent, 10);
  likesCounter.textContent = currentLikes + 1;
};

export default updateLikesCounter;
