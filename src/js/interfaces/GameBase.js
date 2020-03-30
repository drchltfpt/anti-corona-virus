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
      // await this.sleep(1000);
      this.doAfterInit();
      this.gameLoop();
    }
  }

  reSetup() {
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

  async sleep(miliseconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, miliseconds);
    });
  }
}
