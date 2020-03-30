import Bullet from "./Bullet";
import ImageRepo from "../repos/ImageRepo";

const width = ImageRepo.vitaminC.width;
const height = ImageRepo.vitaminC.height;

export default class Leukocyte extends Bullet {
  constructor(x, y) {
    super(x, y, width, height, "vitaminC", ImageRepo.vitaminC);
  }
}
