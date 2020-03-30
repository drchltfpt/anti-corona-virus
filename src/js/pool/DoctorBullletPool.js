import Pool from ".";

import Leukocyte from "../models/Leukocyte";
import Antibiotic from "../models/Antibiotic";
import Vaccine from "../models/Vaccine";
import VitaminC from "../models/VitaminC";

export default class DoctorBulletPool extends Pool {
  constructor(maxSize) {
    super(maxSize);
  }

  /*
   * Populates the pool array with Bullet objects
   */
  init(bulletType) {
    let BulletClass;
    switch (bulletType) {
      case "leukocyte":
        BulletClass = Leukocyte;
        break;
      case "antibiotic":
        BulletClass = Antibiotic;
        break;
      case "vaccine":
        BulletClass = Vaccine;
        break;
      case "vitaminC":
        BulletClass = VitaminC;
        break;
      default:
        BulletClass = Leukocyte;
    }

    for (let i = 0; i < this.size; i++) {
      // Initalize the bullet object
      const bullet = new BulletClass(0, 0);

      // bulletType == "vaccine"
      //   ? (bullet.collidableWith = "virus")
      //   : (bullet.collidableWith = "bacterias");

      this.pool.push(bullet);
    }
  }
}
