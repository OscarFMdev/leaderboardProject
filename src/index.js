import display from './modules/display';
import Leader from './modules/leader';
import './style.css';

const leaderNameInput = document.querySelector('.leader-name');
const leaderScoreInput = document.querySelector('.leader-score');
const leaderForm = document.querySelector('.leader-form');
const leadersArray = [{ leaderName: 'Foo', leaderScore: 4 }, { leaderName: 'Bar', leaderScore: 3 }];

leaderForm.addEventListener('submit', () => {
  const leader = new Leader(leaderNameInput.value, leaderScoreInput.value);
  leaderNameInput.value = '';
  leaderScoreInput.value = '';
  leadersArray.push(leader);
  display(leadersArray);
});
display(leadersArray);