import './style.css';
import postPlayer from './__modules__/api.js';
import userProfile from './img/149071.png';

const names = document.querySelector('.name');
const score = document.querySelector('.score');
const submit = document.querySelector('.submit');

const listScores = document.querySelector('.listScores');

const addToDom = (name, score) => {
  const player = document.createElement('ul');
  player.classList.add('playerScoreList');
  player.innerHTML += `
    <li><img class="user" src="${userProfile}" alt="user profile"></li>
    <li class="playerName">${name}</li>
    <li class="playerScore">${score}</li>
  `;
  listScores.appendChild(player);
};

const listAllPlayers = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7CEoFTu437FqyLNIZWMY/scores/');
  const data = await response.json();
  data.result.sort((a,b) => b.score - a.score);
  data.result.forEach((element) => {
    addToDom(element.user, element.score);
  });
};

submit.addEventListener('click', () => {
  if (names.value !== '' && score.value !== '') {
    postPlayer();
    names.value = null;
    score.value = null;
  }
});

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  listScores.innerHTML = '';
  listAllPlayers();
});

window.addEventListener('load', listAllPlayers);