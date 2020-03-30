import Bullet from "./Bullet";
import ImageRepo from "../repos/ImageRepo";

export default class Leukocyte extends Bullet {
  constructor(x, y) {
    super(
      x,
      y,
      ImageRepo.vitaminC.width,
      ImageRepo.vitaminC.height,
      "vitaminC",
      ImageRepo.vitaminC
    );
  }
}
