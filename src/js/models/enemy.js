import Drawable from "../interfaces/Drawable";
import SoundPool from "../pool/SoundPool";

class Enemy extends Drawable {
  constructor(x, y, width, height, type, image) {
    super(x, y, 0, width, height);
    this.type = type;
    this.image = image;

    this.percentFire = 0.01; // constant

    this.explosion = new SoundPool(10);
    this.explosion.init("explosion");

    this.alive = false; // Is true if the bullet is currently in use
    this.chance = 0;

    this.isSlowdown = false;
    this.slowdownRate = 10;
    this.slowdownWith = ["vitaminC"]; // constant
  }

  reset(x, y) {
    this.x = x;
    this.y = y;
    this.alive = false;
    this.chance = 0;
    this.isSlowdown = false;
    this.slowdownRate = 10;
  }

  isSlowdownWith(object) {
    return this.slowdownWith.includes(object.type);
  }

  slowdown() {
    if (!this.isSlowdown) this.isSlowdown = true;

    if (this.percentFire > 0.005) {
      this.percentFire -= 0.001;
    }

    if (this.speed > 0.5) {
      this.speed -= 0.25;
    }
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

    if (!this.isColliding) {
      if (this.isSlowdown) {
        if (this.slowdownRate >= 1) {
          this.context.drawImage(this.image, this.x, this.y);
          this.slowdownRate = 0;
        } else {
          this.slowdownRate += 1;
        }
      } else {
        this.context.drawImage(this.image, this.x, this.y);
      }

      // Enemy has a chance to shoot every movement
      this.chance = Math.floor(Math.random() * 101);
      if (this.chance / 100 < this.percentFire) {
        this.fire();
      }
      return false;
    } else {
      this.user.score += 10;
      this.explosion.get();
      return true;
    }
  }

  /*
   * Fires a bullet
   */
  fire() {
    this.enemyBulletPool.get(
      this.x + this.width / 2,
      this.y + this.height,
      -2.5
    );
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
    this.isColliding = false;
    this.isSlowdown = false;
    this.slowdownRate = 10;
  }
}

export default Enemy;
