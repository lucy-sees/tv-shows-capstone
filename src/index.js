import './style.css';
import logoImg from './imgs/movie-app-logo.png';
import getAllShows from './modules/getAllShows.js';
import createNewApp from './modules/createNewApp.js';
import getShowLikes from './modules/getShowLikes.js';

const siteLogo = document.getElementById('logo');
siteLogo.src = logoImg;

window.onload = () => {
  // getAllShows();
  // createNewApp();
  getShowLikes();
};