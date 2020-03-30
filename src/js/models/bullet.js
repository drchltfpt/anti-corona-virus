import Drawable from "../interfaces/Drawable";
/**
 * Creates the Bullet object which the ship fires. The bullets are
 * drawn on the "main" canvas.
 */
class Bullet extends Drawable {
  constructor(x, y, width, height, type, image) {
    super(x, y, 0, width, height);
    this.alive = false; // Is true if the bullet is currently in use
    this.type = type;
    this.image = image;
  }

  reset(x, y) {
    this.x = x;
    this.y = y;
    this.alive = false;
  }

  /*
   * Uses a "dirty rectangle" to erase the bullet and moves it.
   * Returns true if the bullet moved off the screen, indicating that
   * the bullet is ready to be cleared by the pool, otherwise draws
   * the bullet.
   */
  draw() {
    this.context.clearRect(
      this.x - 1,
      this.y - 1,
      this.width + 2,
      this.height + 2
    );
    this.y -= this.speed;

    if (this.isColliding) {
      return true;
    } else if (this.y <= 0 - this.height) {
      return true;
    } else {
      this.context.drawImage(this.image, this.x, this.y);
      return false;
    }
  }

  /*
   * Sets the bullet values
   */
  spawn(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.alive = true;
  }
  /*
   * Resets the bullet values
   */
  clear() {
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.alive = false;
    this.isColliding = false;
  }
}

export default Bullet;
