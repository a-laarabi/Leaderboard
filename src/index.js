// import './style.css';
import './newStyle.css';
import './scss/styles.scss'
import postPlayer from './__modules__/api.js';
import userProfile from './img/149071.png';
import profile_1 from './img/profile1.jpg';
import profile_2 from './img/profile2.jpg';
import profile_3 from './img/profile3.jpg';

const legendsProfile= [profile_1, profile_2, profile_3];

const names = document.querySelector('.name');
const score = document.querySelector('.score');
const submit = document.querySelector('.submit');

const legendSection = document.querySelector('.legend');

const legend = (arr) => {
  
  // console.log(arr);
  legendSection.innerHTML = '';
  arr.forEach((element, i) => {
    const firstThree = document.createElement('ul');

    firstThree.classList.add('legendList');
    firstThree.classList.add('hidden');
    firstThree.innerHTML += `
    <li><img src="${legendsProfile[i]}" alt="user profile"></li>
    <li class="playerName">${element.user}</li>
    <li class="playerScore">${element.score}</li>
    `;
    // console.log(firstThree.height());
    legendSection.appendChild(firstThree);
  });
  // console.log(legendSection.height());

  
  
}

const listScores = document.querySelector('.listScores');

const addToDom = (name, score) => {
  const player = document.createElement('ul');
  player.classList.add(`playerScoreList`);
  player.classList.add('hidden');
  player.innerHTML += `
    <li><img class="userProfile" src="${userProfile}" alt="user profile"></li>
    <li class="playerName">${name}</li>
    <li class="playerScore">${score}</li>
  `;
  listScores.appendChild(player);
};

const listAllPlayers = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7CEoFTu437FqyLNIZWMY/scores/');
  const data = await response.json();
  data.result.sort((a,b) => b.score - a.score);
  console.log(data.result)
  legend(data.result.slice(0,3));
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