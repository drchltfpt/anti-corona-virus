import Background from "./models/Background";
import Ship from "./models/Ship";
import Bullet from "./models/Bullet";

import ImageRepo from "./repos/ImageRepo";

export default class Game {
  constructor() {
    this.bgCanvas = document.getElementById("background");
    this.shipCanvas = document.getElementById("ship");
    this.mainCanvas = document.getElementById("main");

    this.bgContext = this.bgCanvas.getContext("2d");
    this.shipContext = this.shipCanvas.getContext("2d");
    this.mainContext = this.mainCanvas.getContext("2d");

    // Initialize objects to contain their context and canvas information
    Background.prototype.context = this.bgContext;
    Background.prototype.canvasWidth = this.bgCanvas.width;
    Background.prototype.canvasHeight = this.bgCanvas.height;

    Ship.prototype.context = this.shipContext;
    Ship.prototype.canvasWidth = this.shipCanvas.width;
    Ship.prototype.canvasHeight = this.shipCanvas.height;

    Bullet.prototype.context = this.mainContext;
    Bullet.prototype.canvasWidth = this.mainCanvas.width;
    Bullet.prototype.canvasHeight = this.mainCanvas.height;
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
      ImageRepo.spaceship.height
    );
    this.ship.draw();
  }

  render() {
    this.background.draw();
    this.ship.move();
    this.ship.bulletPool.animate();
  }
}
