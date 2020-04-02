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
    this.duplicatedWith = ["leukocyte"]; // constant
  }

  static getSize() {
    return {
      width: ImageRepo.virus.width,
      height: ImageRepo.virus.height
    };
  }

  isDuplicatedWith(object) {
    return this.duplicatedWith.includes(object.type);
  }
}
