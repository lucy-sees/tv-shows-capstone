import './style.css';
import logoImg from './imgs/movie-app-logo.png';
import getAllShows from './modules/getAllShows.js';

const siteLogo = document.getElementById('logo');
siteLogo.src = logoImg;

window.onload = () => {
  getAllShows();
};