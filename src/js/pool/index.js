/**
 * Custom Pool object. Holds Bullet objects to be managed to prevent
 * garbage collection.
 */
export default class Pool {
  constructor(maxSize) {
    this.size = maxSize; // Max bullets allowed in the pool
    this.pool = [];
  }

  /*
   * Populates the pool array with Bullet objects
   */
  init() {}

  reset() {
    for (let i = 0; i < this.size; i++) {
      this.pool[i].reset(0, 0);
    }
  }

  /*
   * Grabs the last item in the list and initializes it and
   * pushes it to the front of the array.
   */
  get(x, y, speed) {
    if (!this.pool[this.size - 1].alive) {
      this.pool[this.size - 1].spawn(x, y, speed);
      this.pool.unshift(this.pool.pop());
    }
  }
  /*
   * Used for the ship to be able to get two bullets at once. If
   * only the get() function is used twice, the ship is able to
   * fire and only have 1 bullet spawn instead of 2.
   */
  getTwo(x1, y1, speed1, x2, y2, speed2) {
    if (!this.pool[this.size - 1].alive && !this.pool[this.size - 2].alive) {
      this.get(x1, y1, speed1);
      this.get(x2, y2, speed2);
    }
  }
  /*
   * Draws any in use Bullets. If a bullet goes off the screen,
   * clears it and pushes it to the front of the array.
   */
  animate() {
    for (let i = 0; i < this.size; i++) {
      // Only draw until we find a bullet that is not alive
      if (this.pool[i].alive) {
        if (this.pool[i].draw()) {
          this.pool[i].clear();
          this.pool.push(this.pool.splice(i, 1)[0]);
        }
      } else break;
    }
  }

  /*
   * Return all alive objects in the pool as an array
   * that will then be inserted into the quadtree
   */
  getPool() {
    let obj = [];
    for (let i = 0; i < this.size; i++) {
      if (this.pool[i].alive) {
        obj.push(this.pool[i]);
      }
    }
    return obj;
  }
}
