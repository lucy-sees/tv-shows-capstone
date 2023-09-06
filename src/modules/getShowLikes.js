import getAppID from './getAppID.js';

const id = 'p7eyUav3i6tJe4HpTUQg';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes/`;

const getShowLikes = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    if (response.headers.get('content-length') === '0') {
      throw new Error('Response body is empty');
    }

    const data = await response.json();
    const likesObject = {};
    data.forEach((item) => {
      likesObject[item.item_id] = item.likes;
    });

    return likesObject;
  } catch (error) {
    throw new Error('Something went wrong, please try again');
  }
};

export default getShowLikes;
