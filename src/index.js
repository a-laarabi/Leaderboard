import './style.css';
import postPlayer from './__modules__/api.js';
import userProfile from './img/149071.png';
import profileOne from './img/profile1.jpg';
import profileTwo from './img/profile2.jpg';
import profileThree from './img/profile3.jpg';

import('./scss/styles.scss');

const profile = [profileOne, profileTwo, profileThree, userProfile];

const names = document.querySelector('.name');
const score = document.querySelector('.score');
const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

const legendSection = document.querySelector('.legend');

const legend = (arr) => {
  legendSection.innerHTML = '';
  arr.forEach((element, i) => {
    const firstThree = document.createElement('ul');

    firstThree.classList.add('legendList');
    firstThree.innerHTML += `
    <li><img src="${profile[i]}" alt="user profile"></li>
    <li class="playerName">${element.user}</li>
    <li class="playerScore">${element.score}</li>
    `;
    legendSection.appendChild(firstThree);
  });
};

const listScores = document.querySelector('.listScores');

const addToDom = (i, name, score) => {
  const player = document.createElement('ul');
  player.classList.add('playerScoreList');
  player.innerHTML += `
    <li><img class="userProfile" src="${profile[i]}" alt="user profile"></li>
    <li class="playerName">${name}</li>
    <li class="playerScore">${score}</li>
  `;
  listScores.appendChild(player);
};

const listAllPlayers = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Qo64ntsg5rYTD1fJgVFE/scores/');
  const data = await response.json();
  data.result.sort((a, b) => b.score - a.score);
  legend(data.result.slice(0, 3));
  data.result.forEach((element, i) => {
    if (i > 3) { i = 3; }
    addToDom(i, element.user, element.score);
  });
  refresh.disabled = false;
  refresh.innerHTML = 'Refresh';
};

submit.addEventListener('click', () => {
  if (names.value !== '' && score.value !== '') {
    postPlayer();
    names.value = null;
    score.value = null;
  }
});

refresh.addEventListener('click', () => {
  refresh.disabled = true;
  refresh.innerHTML = 'Loading...';
  listScores.innerHTML = '';
  listAllPlayers();
});

window.addEventListener('load', listAllPlayers);