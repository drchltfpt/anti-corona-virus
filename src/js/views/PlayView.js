class PlayView {
  constructor(restartGameFunc, pauseGameFunc, resumeGameFunc, exitGameFunc) {
    this.bgCanvas = document.getElementById("background");
    this.shipCanvas = document.getElementById("ship");
    this.mainCanvas = document.getElementById("main");

    this.bgContext = this.bgCanvas.getContext("2d");
    this.shipContext = this.shipCanvas.getContext("2d");
    this.mainContext = this.mainCanvas.getContext("2d");

    this.pauseGame = document.getElementById("pause-game");
    this.btnPause = document.getElementById("btn-pause");

    this.score = document.getElementById("score");
    this.scoreCounter = document.getElementById("score-counter");

    this.gameOver = document.getElementById("game-over");
    this.btnRestart = document.getElementById("btn-restart");

    this.restartGameFunc = restartGameFunc;
    this.pauseGameFunc = pauseGameFunc;
    this.resumeGameFunc = resumeGameFunc;
    this.exitGameFunc = exitGameFunc;

    this.gameStatus = "pause"; // pause or resume

    this.initEvents();
  }

  initEvents() {
    this.btnRestart.addEventListener("click", () => {
      this.restartGameFunc();
    });

    this.btnPause.addEventListener("click", () => {
      if (this.gameStatus === "pause") {
        this.handlePauseGame();
      } else {
        this.handleResumeGame();
      }
    });

    document.addEventListener("keydown", e => {
      this.handKeyPressWithGameStatus(e);
    });
  }

  showMeta() {
    this.score.style.display = "block";
    this.pauseGame.style.display = "block";
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

  handlePauseGame() {
    this.pauseGameFunc();
    this.btnPause.innerHTML = "Resume";
    this.gameStatus = "resume";
  }

  handleResumeGame() {
    this.resumeGameFunc();
    this.btnPause.innerHTML = "Pause";
    this.gameStatus = "pause";
  }

  handleExitGame() {
    this.gameOver.style.display = "none";
    this.score.style.display = "none";
    this.pauseGame.style.display = "none";
    this.btnPause.innerHTML = "Pause";
    this.gameStatus = "pause";
    this.exitGameFunc();
  }

  handKeyPressWithGameStatus(e) {
    const keyCode = e.keyCode ? e.keyCode : e.charCode;
    // check User press "p"
    if (keyCode === 80) {
      if (this.score.style.display === "block") {
        e.preventDefault();
        if (this.gameStatus === "pause") {
          this.handlePauseGame();
        } else {
          this.handleResumeGame();
        }
      }
    }
    // check User pres "esc"
    if (keyCode === 27) {
      e.preventDefault();
      this.handleExitGame();
    }
  }

  static getGameScreen() {
    return document;
  }
}

export default PlayView;
