import display from './modules/display';
import getLeadersData from './modules/getData';
import newLeader from './modules/newLeader';
import './style.css';

const leaderNameInput = document.querySelector('.leader-name');
const leaderScoreInput = document.querySelector('.leader-score');
const leaderForm = document.querySelector('.leader-form');
const refreshBtn = document.querySelector('.refresh');
const leadersArrayAPI = getLeadersData('OZEgFFaKBSjCtkj2r5Ih');

refreshBtn.addEventListener('click', async () => {
  const leadersContainer = document.querySelector('.leaders-container');
  leadersContainer.innerHTML = '';
  for (let i = 0; i < leadersArrayAPI.length; i += 1) {
    const newLI = document.createElement('li');
    newLI.innerHTML = `${leadersArrayAPI[i].leaderName}: ${leadersArrayAPI[i].leaderScore}`;
    newLI.classList = `leader-${i % 2}`;
    leadersContainer.appendChild(newLI);
  }
});

leaderForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  await newLeader(leaderNameInput, parseInt(leaderScoreInput.value, 10));
  newLeader(leaderNameInput, leaderScoreInput);
  leaderNameInput.value = '';
  leaderScoreInput.value = '';
  display(leadersArrayAPI);
});
console.log(leadersArrayAPI);
display(leadersArrayAPI);