import Bullet from "./Bullet";
import ImageRepo from "../repos/ImageRepo";

const width = ImageRepo.enemyBullet.width;
const height = ImageRepo.enemyBullet.height;

export default class EnemyBullet extends Bullet {
  constructor(x, y) {
    super(x, y, width, height, "enemyBullet", ImageRepo.enemyBullet);
    this.collidableWith = "doctor";
  }

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
    } else if (this.y >= this.canvasHeight) {
      return true;
    } else {
      this.context.drawImage(ImageRepo.enemyBullet, this.x, this.y);
      return false;
    }
  }
}
