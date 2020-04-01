class User {
  constructor(id = "", name = "", score = 0) {
    this.id = id;
    this.name = name;
    this.score = score;
  }

  resetScore() {
    this.score = 0;
  }
}

export default User;
