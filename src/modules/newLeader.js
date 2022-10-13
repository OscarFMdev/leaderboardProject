const newLeader = async (gameId = 'OZEgFFaKBSjCtkj2r5Ih', user = '', score = 0) => {
  const leader = {
    user,
    score,
  };

  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify(leader),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default newLeader;