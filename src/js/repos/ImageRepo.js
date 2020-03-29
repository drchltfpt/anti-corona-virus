class ImageRepo {
  constructor() {
    // Define images
    this.background = new Image();
    this.spaceship = new Image();

    this.virus = new Image();
    this.bacterias = new Image();

    this.bullet = new Image();
    this.enemyBullet = new Image();
    // Equipments to kill bacterias and viruses
    this.vitaminC = new Image();
    this.antibiotic = new Image();
    this.vaccine = new Image();
    this.leukocyte = new Image();
    this.initSrc();
  }

  initSrc() {
    // Set images src
    this.background.src = "./imgs/bg.png";
    this.spaceship.src = "./imgs/ship.png";
    this.bullet.src = "./imgs/vaccine.png";
    this.vitaminC.src = "./imgs/lime.png"
    this.antibiotic.src = "./imgs/antibiotic.png";
    this.vaccine.src = "./imgs/vaccine.png";
    this.leukocyte.src = "./imgs/leukocyte.png";

    this.virus.src = "./imgs/virus.png";
    this.bacterias.src = "./imgs/bacterias.png";
    this.enemyBullet.src = "./imgs/bullet_enemy.png";
  }
}

export default new ImageRepo();
