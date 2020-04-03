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

    this.listWeapon = document.getElementById("list-weapon");

    this.gameOver = document.getElementById("game-over");
    this.btnRestart = document.getElementById("btn-restart");

    this.gameExitConfirm = document.getElementById("confirm-exit");
    this.btnOkExit = document.getElementById("btn-ok-exit");
    this.btnCancelExit = document.getElementById("btn-cancel-exit");

    this.restartGameFunc = restartGameFunc;
    this.pauseGameFunc = pauseGameFunc;
    this.resumeGameFunc = resumeGameFunc;
    this.exitGameFunc = exitGameFunc;

    this.gameStatus = "pause"; // pause or resume

    this.initEvents();
  }

  initEvents() {
    this.btnRestart.addEventListener("click", () => {
      this.handleRestartGame();
    });

    this.btnPause.addEventListener("click", () => {
      if (this.gameStatus === "pause") {
        this.handlePauseGame();
      } else {
        this.handleResumeGame();
      }
    });

    this.btnOkExit.addEventListener("click", () => {
      this.handleExitGame();
    });

    this.btnCancelExit.addEventListener("click", () => {
      this.handleResumeGame();
    });

    document.addEventListener("keydown", e => {
      this.handKeyPressWithGameStatus(e);
    });
  }

  updateStyleForActiveWeapon(activeIndex) {
    const divWeapons = this.listWeapon.querySelectorAll(".weapon");
    for (let div of divWeapons) {
      div.classList.remove("weapon-active");
    }

    divWeapons[activeIndex].classList.add("weapon-active");
  }

  showMeta() {
    this.score.style.display = "block";
    this.pauseGame.style.display = "block";
    this.listWeapon.style.display = "block";
  }

  isGamePlaying() {
    // Game is playing only when pauseGame block is displayed
    return this.pauseGame.style.display === "block";
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

  handleRestartGame() {
    this.updateStyleForActiveWeapon(0);
    this.restartGameFunc();
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
    if (this.gameExitConfirm.style.display === "block")
      this.gameExitConfirm.style.display = "none";
  }

  handleExitGame() {
    this.gameExitConfirm.style.display = "none";
    this.gameOver.style.display = "none";
    this.score.style.display = "none";
    this.listWeapon.style.display = "none";
    this.pauseGame.style.display = "none";
    this.btnPause.innerHTML = "Pause";
    this.gameStatus = "pause";
    this.updateStyleForActiveWeapon(0);
    this.exitGameFunc();
  }

  handKeyPressWithGameStatus(e) {
    const keyCode = e.keyCode ? e.keyCode : e.charCode;
    // check User press "p"
    if (keyCode === 80) {
      if (this.isGamePlaying()) {
        e.preventDefault();
        if (this.gameStatus === "pause") {
          this.handlePauseGame();
        } else {
          this.handleResumeGame();
        }
      }
    }
    // check User pres "esc"
    else if (keyCode === 27) {
      e.preventDefault();
      if (this.gameOver.style.display === "block") {
        this.handleExitGame();
      } else {
        this.gameExitConfirm.style.display = "block";
        // this.handleExitGame();
        this.handlePauseGame();
      }
    }
  }

  static getGameScreen() {
    return document;
  }
}

export default PlayView;
