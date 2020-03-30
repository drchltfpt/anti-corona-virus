import Bullet from "./Bullet";
import ImageRepo from "../repos/ImageRepo";

const width = ImageRepo.vaccine.width;
const height = ImageRepo.vaccine.height;

export default class Vaccine extends Bullet {
  constructor(x, y) {
    super(x, y, width, height, "vaccine", ImageRepo.vaccine);
    this.collidableWith = "virus";
  }
}
