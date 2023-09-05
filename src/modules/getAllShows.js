import listShows from './listShows.js';

const url = 'https://api.tvmaze.com/shows';

const getAllShows = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const shows = data.slice(0, 12);
    console.log(shows);
    listShows(shows);
  } catch (error) {
    throw new Error('Something went wrong, please try again', error);
  }
};

export default getAllShows;
