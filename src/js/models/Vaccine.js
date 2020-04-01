import DoctorBullet from "./DoctorBullet";
import ImageRepo from "../repos/ImageRepo";

export default class Vaccine extends DoctorBullet {
  constructor(x, y) {
    super(
      x,
      y,
      ImageRepo.vaccine.width,
      ImageRepo.vaccine.height,
      "vaccine",
      ImageRepo.vaccine
    );
    this.collidableWith = ["virus"];
  }
}
