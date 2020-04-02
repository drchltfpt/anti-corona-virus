import LocalStorage from "../utils/LocalStorage";
import { highScoreView } from "../views/HighScoreView";

export default class HighScoreController {
  showListHighScore() {
    const users = LocalStorage.getListUsers();
    this.sortUsers(users);

    highScoreView.render(users);
  }

  sortUsers(users) {
    users.sort((a, b) => b.score - a.score);
  }
}

export const highScoreController = new HighScoreController();
