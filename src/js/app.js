export default class App {
  constructor(game) {
    this._game = game;
  }

  async run() {
    await this._game.setup();
  }
}
