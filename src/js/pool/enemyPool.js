import Pool from ".";
import Virus from "../models/Virus";
import Bacteria from "../models/Bacteria";

class EnemyPool extends Pool {
  constructor(maxSize) {
    super(maxSize);

    this.numberOfEnemyAttacking = 18;
    this.width = Virus.getSize().width;
    this.height = Virus.getSize().height;
    this.spacer = -this.height * 1.5;

    this.resetStartPosition();
  }

  resetStartPosition() {
    this.x = 100;
    this.y = -this.height;
    this.numberOfEnemyAttacking = 18;
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

  get(x, y, speed) {
    if (!this.pool[this.size - 1].alive) {
      this.pool[this.size - 1].spawn(x, y, speed);
      this.pool.unshift(this.pool.pop());
    }
  }

  getFirstVirusNotAlive(x, y, speed, enemy = {}, bottomEdge) {
    let virusObj = null;
    let i;
    for (i = this.size - 1; i >= 0; i--) {
      if (this.pool[i].type === "virus" && !this.pool[i].alive) {
        virusObj = this.pool[i];
        break;
      }
    }
    if (virusObj) {
      virusObj.spawn(x, y, speed);
      virusObj.cloneAttr(enemy);
      virusObj.bottomEdge = bottomEdge;

      this.pool.unshift(this.pool.splice(i, 1)[0]);
      return true;
    }
    return false;
  }

  addMoreEnemy() {
    let startX = this.pool[5].x || Math.random() * 400 + 50;
    let startY = this.pool[5].y || Math.random() * 100 + 30;
    let bottomEdge = this.pool[5].bottomEdge || 200;
    // if (this.numberOfEnemyAttacking % 6 == 0) {
    startY += this.spacer;
    bottomEdge += this.spacer;
    // }

    const flag = this.getFirstVirusNotAlive(
      startX,
      startY,
      2,
      this.pool[5],
      bottomEdge
    );
    if (flag) {
      this.numberOfEnemyAttacking += 1;

      if (this.numberOfEnemyAttacking % 6 === 1) {
        //notification for all alive enemy to move down one row
        for (let i = 0; i < this.numberOfEnemyAttacking; i++) {
          this.pool[i].changeBottomEdge(this.numberOfEnemyAttacking);
        }
      }
    }
  }

  // Spawn a new wave of enemies
  spawnWave() {
    if (this.getPool().length === 0) {
      this.resetStartPosition();
    }

    for (let i = 1; i <= this.numberOfEnemyAttacking; i++) {
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
