import { highScoreController } from "../controller/HighScoreController";

class MainView {
  constructor(startGameFunc) {
    this.startGameFunc = startGameFunc;

    this.loadingBlock = document.getElementById("loading");

    this.username = "";
    this.menuOption = document.getElementById("menu-option");
    this.ipUsername = document.getElementById("ip-username");
    this.btnStartGame = document.getElementById("btn-startGame");
    this.btnViewHighScore = document.getElementById("btn-view-high-score");

    this.initEvents();
  }

  initEvents() {
    this.ipUsername.addEventListener("keyup", e => {
      this.handleIpUserChange(e);
    });

    this.btnStartGame.addEventListener("click", () => {
      this.handleStartGame();
    });

    this.btnViewHighScore.addEventListener("click", () => {
      this.handleRequestViewHighScore();
    });
  }

  getUsername() {
    return this.username;
  }

  hideLoading() {
    this.loadingBlock.style.display = "none";
  }

  showMenuOption() {
    this.menuOption.style.display = "block";
  }

  /* ======== Event handlers =====*/
  handleIpUserChange(e) {
    this.username = e.target.value.trim();
    if (this.username.length >= 1) {
      this.btnStartGame.disabled = false;
    } else {
      this.btnStartGame.disabled = true;
    }
  }
  handleStartGame() {
    this.menuOption.style.display = "none";

    this.startGameFunc(this.username);
  }

  handleRequestViewHighScore() {
    this.menuOption.style.display = "none";
    highScoreController.showListHighScore();
  }
}

export default MainView;
