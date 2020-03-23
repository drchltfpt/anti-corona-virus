import Background from './models/background';

export default class Game {
  constructor() {
    this.canvas = document.getElementById("background");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    this.background = new Background(0, 0, 1, this.canvas.width, this.canvas.height, this.ctx);
  }

  render() {
    console.log("rendering");
    this.background.draw();
  }
}
