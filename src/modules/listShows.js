import generateCard from './generateCard.js';

const listShows = (shows, showLikes) => {
  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';
  shows.forEach((show) => {
    const showLike = showLikes[show.id]; // Get the corresponding showLike for the current show
    const movieCard = generateCard(show, showLike);
    listContainer.append(movieCard);
  });
};

export default listShows;
