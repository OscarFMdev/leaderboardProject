const display = (arr) => {
  const leadersContainer = document.querySelector('.leaders-container');
  leadersContainer.innerHTML = '';
  for (let i = 0; i < 10; i += 1) {
    const newLI = document.createElement('li');
    newLI.innerHTML = `${arr[i].user}: ${arr[i].score}`;
    newLI.classList = `leader-${i % 2}`;
    leadersContainer.appendChild(newLI);
  }
};

export default display;