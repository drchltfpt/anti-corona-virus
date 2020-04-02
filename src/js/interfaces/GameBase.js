export default class GameBase {
  constructor() {}

  async init() {}
  restart() {}

  doAfterInit() {}

  beforeRender() {}
  renderCondition() {}
  isPause() {}
  render() {}

  pause() {}

  resume() {}

  async setup() {
    const isInitOk = await this.init();

    // Any setup that is required that only runs once before game loads goes here
    if (isInitOk) {
      this.beforeStartGame();
    }
  }

  beforeStartGame() {}

  startGame(arg) {
    this.beforePlaying(arg);
    this.playingGame();
  }

  beforePlaying(arg) {}

  playingGame() {
    this.doAfterInit();
    this.gameLoop();
  }

  gameLoop() {
    this.beforeRender();
    // need to bind the current this reference to the callback
    if (this.renderCondition()) {
      requestAnimationFrame(this.gameLoop.bind(this));
      if (!this.isPause()) {
        this.render();
      }
    }
  }
}
