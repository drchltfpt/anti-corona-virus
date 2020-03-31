class MainView {
  constructor(startGameFunc, restartGameFunc, pauseGameFunc, resumeGameFunc) {
    this.startGameFunc = startGameFunc;
    this.restartGameFunc = restartGameFunc;
    this.pauseGameFunc = pauseGameFunc;
    this.resumeGameFunc = resumeGameFunc;

    this.loadingBlock = document.getElementById("loading");

    this.username = "";
    this.menuOption = document.getElementById("menu-option");
    this.ipUsername = document.getElementById("ip-username");
    this.btnStartGame = document.getElementById("btn-startGame");
    this.btnViewHighScore = document.getElementById("btn-view-high-score");

    this.pauseGame = document.getElementById("pause-game");
    this.btnPause = document.getElementById("btn-pause");

    this.score = document.getElementById("score");
    this.scoreCounter = document.getElementById("score-counter");

    this.gameOver = document.getElementById("game-over");
    this.btnRestart = document.getElementById("btn-restart");

    this.initStatus();
    this.initEvent();
  }

  initStatus() {}

  initEvent() {
    this.ipUsername.addEventListener("keyup", e => {
      this.handleIpUserChange(e);
    });

    this.btnStartGame.addEventListener("click", () => {
      this.handleStartGame();
    });

    this.btnRestart.addEventListener("click", () => {
      this.restartGameFunc();
    });

    this.btnPause.addEventListener("click", () => {
      const isPauseMode = this.btnPause.textContent.trim() === "Pause";
      console.log("isPauseMode ", isPauseMode);

      if (isPauseMode) {
        this.handlePauseGame();
      } else {
        this.handleResumeGame();
      }
    });
  }

  getUsername() {
    return this.username;
  }

  hideLoading() {
    this.loadingBlock.style.display = "none";
  }

  updateScoreCounter(score) {
    this.scoreCounter.innerHTML = score;
  }

  showGameOver() {
    this.pauseGame.style.display = "none";
    this.gameOver.style.display = "block";
  }

  hideGameOver() {
    this.gameOver.style.display = "none";
    this.pauseGame.style.display = "block";
  }

  showMenuOption() {
    this.menuOption.style.display = "block";
  }

  /* ======== Event handlers =====*/
  handleIpUserChange(e) {
    this.username = e.target.value.trim();
    if (this.username.length > 3) {
      this.btnStartGame.disabled = false;
    } else {
      this.btnStartGame.disabled = true;
    }
  }
  handleStartGame() {
    this.menuOption.style.display = "none";
    this.score.style.display = "block";
    this.pauseGame.style.display = "block";

    this.startGameFunc();
  }

  handlePauseGame() {
    this.pauseGameFunc();

    this.btnPause.innerHTML = "Resume";
  }

  handleResumeGame() {
    this.resumeGameFunc();
    this.btnPause.innerHTML = "Pause";
  }
}

export default MainView;
