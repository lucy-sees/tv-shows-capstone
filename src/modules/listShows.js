import generateCard from './generateCard.js';
import getShowLikes from './getShowLikes.js';

const listShows = async (appID, shows) => {
  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';

  try {
    let showLikes = {};
    showLikes = await getShowLikes(appID);
    let numberOfShow = 1;
    shows.forEach((show) => {
      const showLike = showLikes[show.id] ?? 0;
      const movieCard = generateCard(show, showLike, numberOfShow);
      listContainer.append(movieCard);

      numberOfShow += 1;
    });
  } catch (error) {
    throw new Error('Error while listing shows', error);
  }
};

export default listShows;
