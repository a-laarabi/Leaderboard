//import './style.css';

class Player {
  constructor (name, score) {
    this.name = name;
    this.score = score;
  }
}

const scoresList = [] || JSON.parse(localStorage.getItem('items'));

const listScores = document.querySelector('.listScores');

const addToDom = (name, score) => {
  const player = document.createElement('div');
  player.innerHTML += `<p>${name}: ${score}</p>`;
  listScores.appendChild(player);
}

const getPlayerFromStorage = () => {

}

const addNewScore = (name, score) => {
  addToDom(name, score);
  const newPlayer = new Player(name, score);
  scoresList.push(newPlayer);
  localStorage.setItem('items', JSON.stringify(scoresList));
};

const names = document.querySelector('.name');
const score = document.querySelector('.score');
const submit = document.querySelector('.submit')

submit.addEventListener('click', () => {
  if (names.value !== '' && score.value !== '') {
    addNewScore (names.value, score.value);
    names.value = null;
    score.value = null;
  }
});

window.addEventListener('load', getPlayerFromStorage);

//still need to work on the local storage 
//and the refresh button