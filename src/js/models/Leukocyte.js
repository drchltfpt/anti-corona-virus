import Bullet from "./Bullet";
import ImageRepo from "../repos/ImageRepo";

export default class Leukocyte extends Bullet {
  constructor(x, y) {
    super(
      x,
      y,
      ImageRepo.leukocyte.width,
      ImageRepo.leukocyte.height,
      "leukocyte",
      ImageRepo.leukocyte
    );
    this.collidableWith = "bacterias";
  }
}
