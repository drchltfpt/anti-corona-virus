import Pool from ".";
import Virus from "../models/Virus";
import Bacteria from "../models/Bacteria";

class EnemyPool extends Pool {
  constructor(maxSize) {
    super(maxSize);
    this.width = Virus.getSize().width;
    this.height = Virus.getSize().height;
    this.spacer = -this.height * 1.5;

    this.orginalPool = null;

    this.resetStartPosition();
  }

  resetStartPosition() {
    this.x = 100;
    this.y = -this.height;
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
    this.orginalPool = [...this.pool];
  }

  reset() {
    for (let i = 0; i < this.orginalPool.length; i++) {
      this.orginalPool[i].reset(0, 0);
    }

    this.size = this.orginalPool.length;
    this.pool = this.orginalPool;
  }

  addMoreEnemy(enemy) {
    // this.size += 1;
    // enemy.alive = true;
    // this.pool.push(enemy);
    // this.get(this.x, this.y, -2);
  }

  // Spawn a new wave of enemies
  spawnWave() {
    if (this.getPool().length === 0) {
      this.resetStartPosition();
    }

    for (let i = 1; i <= 18; i++) {
      this.get(this.x, this.y, 2);
      this.x += this.width + 25;
      if (i % 6 == 0) {
        this.x = 100;
        this.y += this.spacer;
      }
    }
  }
}

export default EnemyPool;
