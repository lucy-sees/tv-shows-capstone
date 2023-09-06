import generateCard from './generateCard.js';
import getShowLikes from './getShowLikes.js';

const listShows = async (shows) => {
  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';
  let showLikes = {};
  try {
    showLikes = await getShowLikes();
  } catch (error) {
    throw new Error('Oops! Try again. Reload page', Error);
  }

  shows.forEach((show) => {
    const showLike = showLikes[show.id] || 0;
    const movieCard = generateCard(show, showLike);
    listContainer.append(movieCard);
  });
};

export default listShows;
