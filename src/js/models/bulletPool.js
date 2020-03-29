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
  init(bulletType) {
    for (let i = 0; i < this.size; i++) {
      // Initalize the bullet object
      const bullet = new Bullet(
        0,
        0,
        ImageRepo.leukocyte.width,
        ImageRepo.leukocyte.height,
        bulletType
      );
      bulletType == "vaccine" ? bullet.collidableWith = "virus" : bullet.collidableWith = "bacterias";

      this.pool.push(bullet);
    }
  }
}

export default BulletPool;
