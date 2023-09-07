import getAppID from './getAppID.js';
import updateLikesCounter from './updateLikesCounter.js';

const likeShow = async (id, card) => {
  try {
    const appID = await getAppID();
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`;

    const postData = { item_id: id };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    updateLikesCounter(card);
  } catch (error) {
    throw new Error('Liking went wrong', error);
  }
};

export default likeShow;
