import getAppID from './getAppID.js';

const appID = getAppID();

const fetchShowComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${id}`;
  try {
    const response = await fetch(url);

    if (response.status === 400) {
      return [];
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong, please try again');
  }
};

export default fetchShowComments;
