class PlayView {
  constructor(restartGameFunc, pauseGameFunc, resumeGameFunc) {
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

    this.initEvents();
  }

  initEvents() {
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
  }

  handleResumeGame() {
    this.resumeGameFunc();
    this.btnPause.innerHTML = "Pause";
  }
}

export default PlayView;
