export default class App {
  constructor(game) {
    this._game = game;
  }

  setup() {
    this._game.init();
    // Any setup that is required that only runs once before game loads goes here
    this.gameLoop();
  }
  gameLoop() {
    // need to bind the current this reference to the callback
    requestAnimationFrame(this.gameLoop.bind(this));

    this._game.render();
  }
}
