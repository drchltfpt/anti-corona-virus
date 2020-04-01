import Bullet from "./Bullet";

export default class DoctorBullet extends Bullet {
  constructor(x, y, width, height, type, image) {
    super(x, y, width, height, type, image);
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
}
