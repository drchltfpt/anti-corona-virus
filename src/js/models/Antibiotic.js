import DoctorBullet from "./DoctorBullet";
import ImageRepo from "../repos/ImageRepo";

export default class Antibiotic extends DoctorBullet {
  constructor(x, y) {
    super(
      x,
      y,
      ImageRepo.antibiotic.width,
      ImageRepo.antibiotic.height,
      "antibiotic",
      ImageRepo.antibiotic
    );
    this.collidableWith = ["bacterias"];
  }
}
