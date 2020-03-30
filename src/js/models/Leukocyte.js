import Bullet from "./Bullet";
import ImageRepo from "../repos/ImageRepo";

const width = ImageRepo.leukocyte.width;
const height = ImageRepo.leukocyte.height;

export default class Leukocyte extends Bullet {
  constructor(x, y) {
    super(x, y, width, height, "leukocyte", ImageRepo.leukocyte);
    this.collidableWith = "bacterias";
  }
}
