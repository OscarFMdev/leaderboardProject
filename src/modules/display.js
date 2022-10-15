const display = (arr) => {
  const leadersContainer = document.querySelector('.leaders-container');
  leadersContainer.innerHTML = '';
  if (arr.length < 10) {
    for (let i = 0; i < arr.length; i += 1) {
      const newLI = document.createElement('li');
      newLI.innerHTML = `${i + 1}. ${arr[i].user}: ${arr[i].score}`;
      newLI.classList = 'leader';
      leadersContainer.appendChild(newLI);
      if (i === 0) {
        newLI.innerHTML = `${i + 1}. ${arr[i].user}: ${arr[i].score} <span> 🥇 </span>`;
      }
      if (i === 1) {
        newLI.innerHTML = `${i + 1}. ${arr[i].user}: ${arr[i].score} <span> 🥈 </span>`;
      }
      if (i === 2) {
        newLI.innerHTML = `${i + 1}. ${arr[i].user}: ${arr[i].score} <span> 🥉 </span>`;
      }
    }
  } else {
    for (let i = 0; i < 10; i += 1) {
      const newLI = document.createElement('li');
      newLI.innerHTML = `${i + 1}. ${arr[i].user}: ${arr[i].score}`;
      newLI.classList = 'leader';
      leadersContainer.appendChild(newLI);
      if (i === 0) {
        newLI.innerHTML = `${i + 1}. ${arr[i].user}: ${arr[i].score} <span> 🥇 </span>`;
      }
      if (i === 1) {
        newLI.innerHTML = `${i + 1}. ${arr[i].user}: ${arr[i].score} <span> 🥈 </span>`;
      }
      if (i === 2) {
        newLI.innerHTML = `${i + 1}. ${arr[i].user}: ${arr[i].score} <span> 🥉 </span>`;
      }
    }
  }
};

export default display;