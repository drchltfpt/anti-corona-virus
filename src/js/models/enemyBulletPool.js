import Pool from "./Pool";
import Bullet from "./Bullet";
import ImageRepo from "../repos/ImageRepo";

class EnemyBulletPool extends Pool {
  constructor(maxSize) {
    super(maxSize);
  }

  /*
   * Populates the pool array with Bullet objects
   */
  init() {
    for (let i = 0; i < this.size; i++) {
      // Initalize the bullet object
      const bullet = new Bullet(
        0,
        0,
        ImageRepo.enemyBullet.width,
        ImageRepo.enemyBullet.height,
        "enemyBullet"
      );
      bullet.collidableWith = "ship";
      bullet.type = "enemyBullet";

      this.pool.push(bullet);
    }
  }
}

export default EnemyBulletPool;