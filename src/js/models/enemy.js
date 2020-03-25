import Drawable from "../interfaces/Drawable";
import Pool from "./Pool";
import ImageRepo from "../repos/ImageRepo";

class Enemy extends Drawable {
  constructor(x, y, width, height) {
    super(x, y, 0, width, height);
    this.chance = 0;
    this.percentFire = 0.01;
    this.alive = false; // Is true if the bullet is currently in use
  }

  /*
   * Sets the Enemy values
   */
  spawn(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.speedX = 0;
    this.speedY = speed;
    this.alive = true;
    this.leftEdge = this.x - 90;
    this.rightEdge = this.x + 90;
    this.bottomEdge = this.y + 140;
  }

  /*
   * Move the enemy
   */
  draw() {
    this.context.clearRect(this.x - 1, this.y, this.width + 1, this.height);
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x <= this.leftEdge) {
      this.speedX = this.speed;
    } else if (this.x >= this.rightEdge + this.width) {
      this.speedX = -this.speed;
    } else if (this.y >= this.bottomEdge) {
      this.speed = 1.5;
      this.speedY = 0;
      this.y -= 5;
      this.speedX = -this.speed;
    }
    this.context.drawImage(ImageRepo.enemy, this.x, this.y);
    // Enemy has a chance to shoot every movement
    this.chance = Math.floor(Math.random() * 101);
    if (this.chance / 100 < this.percentFire) {
      this.fire();
    }
  }

  /*
   * Fires a bullet
   */
  fire() {
    this.enemyBulletPool.get(this.x + this.width / 2, this.y + this.height, -2.5);
  }

  /*
   * Resets the enemy values
   */
  clear() {
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.alive = false;
  }
}

export default Enemy;