import Drawable from "../interfaces/Drawable";
import BulletPool from "../models/BulletPool";
import ImageRepo from "../repos/ImageRepo";
import KeyboardController from "../controller/KeyboardController";
/**
 * Create the Ship object that the player controls. The ship is
 * drawn on the "ship" canvas and uses dirty rectangles to move
 * around the screen.
 */
export default class Ship extends Drawable {
  constructor(x, y, width, height) {
    super(x, y, 3, width, height);
    this.bulletPool = new BulletPool(30);
    this.bulletPool.init();

    this.counter = 0;
    this.fireRate = 15;
  }

  draw() {
    this.context.drawImage(ImageRepo.spaceship, this.x, this.y);
  }

  move() {
    this.counter++;
    // Determine if the action is move action
    if (
      KeyboardController.KEY_STATUS.left ||
      KeyboardController.KEY_STATUS.right ||
      KeyboardController.KEY_STATUS.down ||
      KeyboardController.KEY_STATUS.up
    ) {
      // The ship moved, so erase it's current image so it can
      // be redrawn in it's new location
      this.context.clearRect(this.x, this.y, this.width, this.height);

      // Update x and y according to the direction to move and
      // redraw the ship. Change the else if's to if statements
      // to have diagonal movement.
      if (KeyboardController.KEY_STATUS.left) {
        this.x -= this.speed;
        if (this.x <= 0)
          // Keep player within the screen
          this.x = 0;
      } else if (KeyboardController.KEY_STATUS.right) {
        this.x += this.speed;
        if (this.x >= this.canvasWidth - this.width)
          this.x = this.canvasWidth - this.width;
      } else if (KeyboardController.KEY_STATUS.up) {
        this.y -= this.speed;
        if (this.y <= (this.canvasHeight / 4) * 2)
          this.y = (this.canvasHeight / 4) * 2;
      } else if (KeyboardController.KEY_STATUS.down) {
        this.y += this.speed;
        if (this.y >= this.canvasHeight - this.height)
          this.y = this.canvasHeight - this.height;
      }

      // Finish by redrawing the ship
      this.draw();
    }

    if (KeyboardController.KEY_STATUS.space && this.counter >= this.fireRate) {
      this.fire();
      this.counter = 0;
    }
  }

  /*
   * Fires two bullets
   */
  fire() {
    // this.bulletPool.getTwo(this.x + 6, this.y, 3, this.x + 33, this.y, 3);
    this.bulletPool.get(this.x + 19.5, this.y, 3);
  }
}
