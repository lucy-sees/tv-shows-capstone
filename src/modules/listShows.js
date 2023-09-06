import generateCard from './generateCard.js';
import getShowLikes from './getShowLikes.js';

const listShows = async (shows) => {
  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';
  const showLikes = await getShowLikes();
  shows.forEach((show) => {
    const showLike = showLikes[show.id];
    const movieCard = generateCard(show, showLike);
    listContainer.append(movieCard);
  });
};

export default listShows;
