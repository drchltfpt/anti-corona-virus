import Pool from "./Pool";
import Enemy from "./Enemy";
import ImageRepo from "../repos/ImageRepo";

class EnemyPool extends Pool {
  constructor(maxSize) {
    super(maxSize);
  }

  /*
   * Populates the pool array with Bullet objects
   */
  init() {
    for (let i = 0; i < this.size; i++) {
      // Initalize the bullet object
      const enemy = new Enemy(
        0,
        0,
        ImageRepo.virus.width,
        ImageRepo.virus.height,
        i % 2 ? "virus": "bacterias"
      );

      this.pool.push(enemy);
    }
  }
}

export default EnemyPool;
