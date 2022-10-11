export default class Leader {
  constructor(leaderName, leaderScore) {
    this.leaderName = leaderName;
    this.leaderScore = leaderScore;
  }

  get lName() {
    return this.leaderName;
  }

  get lScore() {
    return this.leaderScore;
  }
}