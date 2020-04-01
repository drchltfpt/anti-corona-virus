import DoctorBullet from "./DoctorBullet";
import ImageRepo from "../repos/ImageRepo";

export default class Leukocyte extends DoctorBullet {
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
