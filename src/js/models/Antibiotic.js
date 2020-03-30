import Bullet from "./Bullet";
import ImageRepo from "../repos/ImageRepo";

export default class Antibiotic extends Bullet {
  constructor(x, y) {
    super(
      x,
      y,
      ImageRepo.antibiotic.width,
      ImageRepo.antibiotic.height,
      "antibiotic",
      ImageRepo.antibiotic
    );
    this.collidableWith = "bacterias";
  }
}
