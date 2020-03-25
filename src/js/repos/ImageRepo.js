class ImageRepo {
  constructor() {
    // Define images
    this.background = new Image();
    this.spaceship = new Image();
    this.bullet = new Image();
    this.enemy = new Image();
    this.enemyBullet = new Image();
    this.initSrc();
  }

  initSrc() {
    // Set images src
    this.background.src = "./imgs/bg.png";
    this.spaceship.src = "./imgs/ship.png";
    this.bullet.src = "./imgs/bullet.png";
    this.enemy.src = "./imgs/enemy.png";
    this.enemyBullet.src = "./imgs/bullet_enemy.png";
  }
}

export default new ImageRepo();
