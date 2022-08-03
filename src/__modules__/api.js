const names = document.querySelector('.name');
const score = document.querySelector('.score');

const postPlayer = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7CEoFTu437FqyLNIZWMY/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      user: names.value,
      score: score.value,
    }),
  });
  const listPlayers = await response.json();
  return listPlayers;
};

export default postPlayer;