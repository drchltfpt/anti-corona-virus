import Drawable from "../interfaces/Drawable";
import DotorBulletPool from "../pool/DoctorBullletPool";
import SoundPool from "../pool/soundPool";
import ImageRepo from "../repos/ImageRepo";
import KeyboardController from "../controller/KeyboardController";
/**
 * Create the Ship object that the player controls. The ship is
 * drawn on the "ship" canvas and uses dirty rectangles to move
 * around the screen.
 */
export default class Doctor extends Drawable {
  constructor(x, y, width, height) {
    super(x, y, 3, width, height);

    this.bulletTypes = ["leukocyte", "antibiotic", "vaccine", "vitaminC"];
    this.activeBulletTypeIndex = 0;

    this.leukocytePool = new DotorBulletPool(30);
    this.leukocytePool.init("leukocyte");

    this.antibioticPool = new DotorBulletPool(30);
    this.antibioticPool.init("antibiotic");

    this.vaccinePool = new DotorBulletPool(30);
    this.vaccinePool.init("vaccine");

    this.vitaminCPool = new DotorBulletPool(30);
    this.vitaminCPool.init("vitaminC");

    this.bulletPool = this.leukocytePool;

    this.laser = new SoundPool(10);
    this.laser.init("laser");

    this.fireRate = 15; // constant
    this.collidableWith = "enemyBullet"; // constant
    this.type = "doctor"; // constant

    this.alive = true;
    this.counter = 0;
  }

  static createDoctor() {
    // Set the ship to start near the bottom middle of the canvas
    const shipStartX =
      Doctor.prototype.canvasWidth / 2 - ImageRepo.spaceship.width;
    const shipStartY =
      (Doctor.prototype.canvasHeight / 4) * 3 + ImageRepo.spaceship.height * 2;

    return new Doctor(
      shipStartX,
      shipStartY,
      ImageRepo.spaceship.width,
      ImageRepo.spaceship.height
    );
  }

  animateBulletBool() {
    this.leukocytePool.animate();
    this.antibioticPool.animate();
    this.vaccinePool.animate();
    this.vitaminCPool.animate();
  }

  reset() {
    const shipStartX = this.canvasWidth / 2 - ImageRepo.spaceship.width;
    const shipStartY =
      (this.canvasHeight / 4) * 3 + ImageRepo.spaceship.height * 2;

    this.x = shipStartX;
    this.y = shipStartY;
    this.alive = true;
    this.isColliding = false;
    this.counter = 0;

    this.leukocytePool.reset();
    this.antibioticPool.reset();
    this.vaccinePool.reset();
    this.vitaminCPool.reset();
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
    }

    // Finish by redrawing the ship
    if (!this.isColliding) {
      this.draw();
    } else {
      this.alive = false;
      return false;
    }

    if (
      KeyboardController.KEY_STATUS.space &&
      this.counter >= this.fireRate &&
      !this.isColliding
    ) {
      this.fire();
      this.counter = 0;
    }

    if (KeyboardController.KEY_STATUS.tab && !this.isColliding) {
      console.log("TAB: ", this.activeBulletTypeIndex);
      this.changeBulletType();
      KeyboardController.KEY_STATUS.tab = false;
    }

    return true;
  }

  /*
   * Fires two bullets
   */
  fire() {
    if (this.activeBulletTypeIndex === 0) {
      this.bulletPool = this.leukocytePool;
    } else if (this.activeBulletTypeIndex === 1) {
      this.bulletPool = this.antibioticPool;
    } else if (this.activeBulletTypeIndex === 2) {
      this.bulletPool = this.vaccinePool;
    } else if (this.activeBulletTypeIndex === 3) {
      this.bulletPool = this.vitaminCPool;
    } else {
      this.bulletPool = this.leukocytePool;
    }

    this.bulletPool.getTwo(this.x + 6, this.y, 3, this.x + 33, this.y, 3);
    // this.bulletPool.get(this.x + 19.5, this.y, 3);

    this.laser.get();
  }

  changeBulletType() {
    this.activeBulletTypeIndex =
      (this.activeBulletTypeIndex + 1) % this.bulletTypes.length;
  }
}
