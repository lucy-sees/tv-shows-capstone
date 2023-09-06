import './style.css';
import logoImg from './imgs/movie-app-logo.png';
import getAllShows from './modules/getAllShows.js';
import getAppID from './modules/getAppID.js';

const siteLogo = document.getElementById('logo');
siteLogo.src = logoImg;

window.onload = () => {
  getAppID();
  getAllShows();
};