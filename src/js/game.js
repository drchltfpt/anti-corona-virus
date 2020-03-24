import Background from "./models/Background";
import Ship from "./models/Ship";
import ImageRepo from "./repos/ImageRepo";

export default class Game {
  constructor() {
    this.bgCanvas = document.getElementById("background");
    this.shipCanvas = document.getElementById("ship");
    this.mainCanvas = document.getElementById("main");

    this.bgContext = this.bgCanvas.getContext("2d");
    this.shipContext = this.shipCanvas.getContext("2d");
    this.mainContext = this.mainCanvas.getContext("2d");
  }

  init() {
    this.background = new Background(
      0,
      0,
      1,
      this.bgCanvas.width,
      this.bgCanvas.height,
      this.bgContext
    );

    // Set the ship to start near the bottom middle of the canvas
    const shipStartX = this.shipCanvas.width / 2 - ImageRepo.spaceship.width;
    const shipStartY =
      (this.shipCanvas.height / 4) * 3 + ImageRepo.spaceship.height * 2;
    this.ship = new Ship(
      shipStartX,
      shipStartY,
      ImageRepo.spaceship.width,
      ImageRepo.spaceship.height,
      this.shipContext
    );
    this.ship.draw();
  }

  render() {
    this.background.draw();
  }
}
