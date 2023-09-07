import getAppID from './getAppID.js';
import getCommentsCount from './getCommentsCount.js';

const appID = getAppID();

const fetchShowComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${id}`;
  try {
    const response = await fetch(url);

    if (response.status === 400) {
      return [];
    }

    const data = await response.json();
    getCommentsCount(data);
    return data;
  } catch (error) {
    throw new Error('Something went wrong, please try again');
  }
};

export default fetchShowComments;
