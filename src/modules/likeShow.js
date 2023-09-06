import getAppID from './getAppID.js';

const appID = getAppID();
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`;

const likeShow = async (id, card) => {
  const postData = { item_id: id };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };
  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Increment the likes count on the card
    const likesCounter = card.querySelector('.badge');
    const currentLikes = parseInt(likesCounter.textContent, 10);
    likesCounter.textContent = currentLikes + 1;
  } catch (error) {
    throw new Error('Something went wrong, please try again');
  }
};

export default likeShow;
