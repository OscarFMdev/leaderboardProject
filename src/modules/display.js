const display = (arr) => {
  const leadersContainer = document.querySelector('.leaders-container');
  leadersContainer.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const newLI = document.createElement('li');
    newLI.innerHTML = `${arr[i].leaderName}: ${arr[i].leaderScore}`;
    newLI.classList = `leader-${i % 2}`;
    leadersContainer.appendChild(newLI);
  }
};

export default display;