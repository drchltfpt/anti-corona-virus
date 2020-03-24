import Drawable from "../interfaces/Drawable";
import ImageRepository from "../repos/ImageRepo";
/**
 * Creates the Bullet object which the ship fires. The bullets are
 * drawn on the "main" canvas.
 */
class Bullet extends Drawable {
  constructor(x, y, speed, width, height, context) {
    super(x, y, speed, width, height);
    this.alive = false; // Is true if the bullet is currently in use
    this.context = context;
  }

  /*
   * Uses a "dirty rectangle" to erase the bullet and moves it.
   * Returns true if the bullet moved off the screen, indicating that
   * the bullet is ready to be cleared by the pool, otherwise draws
   * the bullet.
   */
  draw() {
    this.context.clearRect(this.x, this.y, this.width, this.height);
    this.y -= this.speed;
    if (this.y <= 0 - this.height) {
      return true;
    } else {
      this.context.drawImage(ImageRepository.bullet, this.x, this.y);
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
  }
}

export default Bullet;
