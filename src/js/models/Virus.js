import Enemy from "./Enemy";
import ImageRepo from "../repos/ImageRepo";

export default class Virus extends Enemy {
  constructor(x, y) {
    super(
      x,
      y,
      ImageRepo.virus.width,
      ImageRepo.virus.height,
      "virus",
      ImageRepo.virus
    );

    this.collidableWith = ["vaccine"]; // constant
  }
}
