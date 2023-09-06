import getAppID from './getAppID.js';

const id = 'p7eyUav3i6tJe4HpTUQg';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes/`;

const getShowLikes = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Check if the response has a body
    if (response.headers.get('content-length') === '0') {
      throw new Error('Response body is empty');
    }

    const data = await response.json();
    console.log('Show Likes Data:', data);
    // return data;
  } catch (error) {
    console.error('Error fetching show likes:', error);
    throw new Error('Something went wrong, please try again');
  }
};

export default getShowLikes;
