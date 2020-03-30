import Pool from ".";
import EnemyBullet from "../models/EnemyBullet";

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
      const bullet = new EnemyBullet(0, 0);

      this.pool.push(bullet);
    }
  }
}

export default EnemyBulletPool;
