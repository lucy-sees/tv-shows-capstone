import generateCard from './generateCard.js';

const listShows = (shows) => {
  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';
  shows.forEach((show) => {
    const movieCard = generateCard(show);
    listContainer.append(movieCard);
  });
};

export default listShows;
