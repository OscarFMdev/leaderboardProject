import display from './display';

const getLeadersData = async (id = 'OZEgFFaKBSjCtkj2r5Ih') => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`)
    .then((response) => response.json())
    .then((data) => {
      const leadersArr = data.result;
      const leadersArrSorted = leadersArr.sort((a, b) => parseFloat(a.score) - parseFloat(b.score));
      display(leadersArrSorted);
    });
};

export default getLeadersData;