import display from './display';

const getLeadersData = async (id = '0UlnJitfqGQD5uy8eJ6a') => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`)
    .then((response) => response.json()) // To convert it to JSON
    .then((data) => { // To retrieve data
      const leadersArr = data.result; // data.result returns an array
      const leadersArrSorted = leadersArr.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
      display(leadersArrSorted);
    });
};

export default getLeadersData;