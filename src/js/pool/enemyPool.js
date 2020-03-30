import Pool from ".";
import Virus from "../models/Virus";
import Bacteria from "../models/Bacteria";

class EnemyPool extends Pool {
  constructor(maxSize) {
    super(maxSize);
  }

  /*
   * Populates the pool array with Bullet objects
   */
  init() {
    let EnemyClass, enemy;

    for (let i = 0; i < this.size; i++) {
      // Initalize the bullet object
      if (i % 2 === 0) {
        EnemyClass = Virus;
      } else {
        EnemyClass = Bacteria;
      }

      enemy = new EnemyClass(0, 0);

      this.pool.push(enemy);
    }
  }
}

export default EnemyPool;
