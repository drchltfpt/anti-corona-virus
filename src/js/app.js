export default class App {
  constructor(game) {
    this._game = game;
  }

  async sleep(miliseconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, miliseconds);
    });
  }

  async setup() {
    const isInitOk = await this._game.init();

    // Any setup that is required that only runs once before game loads goes here
    if (isInitOk) {
      await this.sleep(3000);
      this._game.doAfterInit();
      this.gameLoop();
    }
  }
  gameLoop() {
    this._game.beforeRender();
    // need to bind the current this reference to the callback
    requestAnimationFrame(this.gameLoop.bind(this));

    this._game.render();
  }
}
