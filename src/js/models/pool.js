import Bullet from "./bullet";
import * as ImageRepository from '../models/image-repository';
/**
 * Custom Pool object. Holds Bullet objects to be managed to prevent
 * garbage collection.
 */
class Pool {
  constructor(maxSize) {
    this.maxSize = maxSize;
    let size = maxSize; // Max bullets allowed in the pool
    let pool = [];
    /*
     * Populates the pool array with Bullet objects
     */
    for (var i = 0; i < size; i++) {
      // Initalize the bullet object
      var bullet = new Bullet();
      bullet.init(
        0,
        0,
        ImageRepository.bullet.width,
        ImageRepository.bullet.height
      );
      pool[i] = bullet;
    }
	}


  // init() {
  //   for (var i = 0; i < size; i++) {
  //     // Initalize the bullet object
  //     var bullet = new Bullet();
  //     bullet.init(
  //       0,
  //       0,
  //       ImageRepository.bullet.width,
  //       ImageRepository.bullet.height
  //     );
  //     pool[i] = bullet;
  //   }
  // }
  /*
   * Grabs the last item in the list and initializes it and
   * pushes it to the front of the array.
   */
  get(x, y, speed) {
    if (!pool[size - 1].alive) {
      pool[size - 1].spawn(x, y, speed);
      pool.unshift(pool.pop());
    }
  }
  /*
   * Used for the ship to be able to get two bullets at once. If
   * only the get() function is used twice, the ship is able to
   * fire and only have 1 bullet spawn instead of 2.
   */
  getTwo(x1, y1, speed1, x2, y2, speed2) {
    if (!pool[size - 1].alive && !pool[size - 2].alive) {
      this.get(x1, y1, speed1);
      this.get(x2, y2, speed2);
    }
  }
  /*
   * Draws any in use Bullets. If a bullet goes off the screen,
   * clears it and pushes it to the front of the array.
   */
  animate() {
    for (var i = 0; i < size; i++) {
      // Only draw until we find a bullet that is not alive
      if (pool[i].alive) {
        if (pool[i].draw()) {
          pool[i].clear();
          pool.push(pool.splice(i, 1)[0]);
        }
      } else break;
    }
  }
}
