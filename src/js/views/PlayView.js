class PlayView {
  constructor(restartGameFunc, pauseGameFunc, resumeGameFunc) {
    this.restartGameFunc = restartGameFunc;
    this.pauseGameFunc = pauseGameFunc;
    this.resumeGameFunc = resumeGameFunc;

    this.loadingBlock = document.getElementById("loading");

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

  hideLoading() {
    this.loadingBlock.style.display = "none";

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
