class User {
  constructor(id, score) {
    this.id = id;
    this.score = score;
  }

  resetScore() {
    this.score = 0;
  }
}

export default User;
