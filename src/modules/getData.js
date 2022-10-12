const getLeadersData = (id) => {
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`)
    .then((response) => response.json())
    .then((json) => json.result);
};

export default getLeadersData;