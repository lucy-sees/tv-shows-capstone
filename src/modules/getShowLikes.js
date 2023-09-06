import getAppID from './getAppID.js';

const appID = getAppID();
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`;

const getShowLikes = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
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
