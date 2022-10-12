const newLeader = async (gameId = 'OZEgFFaKBSjCtkj2r5Ih', leaderName = '', leaderScore = 0) => {
  const leader = {
    user: leaderName,
    score: leaderScore,
  };

  const response = fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify(leader),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.result;
  // .then((response) => response.json())
  // .then((json) => console.log(json));
};

export default newLeader;