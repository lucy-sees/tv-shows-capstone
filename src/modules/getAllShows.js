import listShows from './listShows.js';
import getAppID from './getAppID.js';

const url = 'https://api.tvmaze.com/shows';

const getAllShows = async () => {
  getAppID();
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const shows = data.slice(0, 15);
    listShows(shows);
  } catch (error) {
    throw new Error('Something went wrong, please try again', error);
  }
};

export default getAllShows;
