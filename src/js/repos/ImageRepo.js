class ImageRepo {
  constructor() {
    // Define images
    this.background = new Image();
    this.spaceship = new Image();
    this.bullet = new Image();
    this.initSrc();
  }

  initSrc() {
    // Set images src
    this.background.src = "./imgs/bg.png";
    this.spaceship.src = "./imgs/ship.png";
    this.bullet.src = "./imgs/bullet.png";
  }
}

export default new ImageRepo();
