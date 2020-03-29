export default class FlowGame {
  constructor() {}

  async init() {}
  restart() {}

  doAfterInit() {}
  beforeRender() {}
  renderCondition() {}

  render() {}

  async setup() {
    const isInitOk = await this.init();

    // Any setup that is required that only runs once before game loads goes here
    if (isInitOk) {
      await this.sleep(3000);
      this.doAfterInit();
      this.gameLoop();
    }
  }

  async reSetup() {
    this.doAfterInit();
    this.gameLoop();
  }

  gameLoop() {
    this.beforeRender();
    // need to bind the current this reference to the callback
    if (this.renderCondition()) {
      requestAnimationFrame(this.gameLoop.bind(this));
      this.render();
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
