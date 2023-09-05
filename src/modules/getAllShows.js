const url = 'https://api.tvmaze.com/shows';

const getAllShows = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const allShows = data.slice(0, 20);
    console.log(allShows);
    // listShows(allShows);
  } catch (error) {
    throw new Error('Something went wrong, please try again', error);
  }
};

export default getAllShows;
