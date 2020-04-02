class LocalStorage {
  constructor() {
    this.rootKey = "users";
  }
  getListUsers() {
    return JSON.parse(localStorage.getItem(this.rootKey)) || [];
  }

  _updateListUsers(users) {
    localStorage.setItem(this.rootKey, JSON.stringify(users));
  }

  addUser(user) {
    const users = this.getListUsers();
    users.push(user);
    this._updateListUsers(users);
  }

  updateScore(user) {
    const users = this.getListUsers();
    for (let u of users) {
      if (u.id === user.id) {
        if (user.score > u.score) u.score = user.score;
        break;
      }
    }
    this._updateListUsers(users);
  }

  containsUser(id) {
    const users = this.getListUsers();
    const hasId = users.some(u => u.id === id);
    return hasId;
  }
}

export default new LocalStorage();
