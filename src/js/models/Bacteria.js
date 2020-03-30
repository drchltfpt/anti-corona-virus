import Enemy from "./Enemy";
import ImageRepo from "../repos/ImageRepo";

export default class Bacteria extends Enemy {
  constructor(x, y) {
    super(
      x,
      y,
      ImageRepo.bacterias.width,
      ImageRepo.bacterias.height,
      "bacterias",
      ImageRepo.bacterias
    );

    this.collidableWith = ["leukocyte", "antibiotic"];
  }
}
