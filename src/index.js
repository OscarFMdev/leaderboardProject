import getLeadersData from './modules/getData';
import newLeader from './modules/newLeader';
import './style.css';
/* Selectors */
const leaderNameInput = document.querySelector('.leader-name');
const leaderScoreInput = document.querySelector('.leader-score');
const leaderForm = document.querySelector('.leader-form');
const refreshBtn = document.querySelector('.refresh');
/* Array */

refreshBtn.addEventListener('click', () => {
  getLeadersData();
});

leaderForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  await newLeader(leaderNameInput, parseInt(leaderScoreInput.value, 10));
  newLeader(leaderNameInput, leaderScoreInput);
  leaderNameInput.value = '';
  leaderScoreInput.value = '';
});

getLeadersData();