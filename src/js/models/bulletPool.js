import Pool from "./Pool";
import Bullet from "./Bullet";
import ImageRepo from "../repos/ImageRepo";

class BulletPool extends Pool {
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
        ImageRepo.bullet.width,
        ImageRepo.bullet.height,
        "bullet"
      );
      bullet.collidableWith = "enemy";
      bullet.type = "bullet";

      this.pool.push(bullet);
    }
  }
}

export default BulletPool;
