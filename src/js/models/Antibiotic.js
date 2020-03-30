import Bullet from "./Bullet";
import ImageRepo from "../repos/ImageRepo";

const width = ImageRepo.antibiotic.width;
const height = ImageRepo.antibiotic.height;

export default class Antibiotic extends Bullet {
  constructor(x, y) {
    super(x, y, width, height, "antibiotic", ImageRepo.antibiotic);
    this.collidableWith = "bacterias";
  }
}
