import Drawable from "../interfaces/Drawable";
import ImageRepo from "../repos/ImageRepo";
/**
 * Creates the Background object which will become a child of
 * the Drawable object. The background is drawn on the "background"
 * canvas and creates the illusion of moving by panning the image.
 */
class Background extends Drawable {
  constructor(x, y, speed) {
    super(x, y, speed, 0, 0);
  }
  // Implement abstract function
  draw() {
    // Pan background
    this.y += this.speed;
    this.context.drawImage(ImageRepo.background, this.x, this.y);

    // Draw another image at the top edge of the first image
    this.context.drawImage(
      ImageRepo.background,
      this.x,
      this.y - this.canvasHeight
    );

    // If the image scrolled off the screen, reset
    if (this.y >= this.canvasHeight) this.y = 0;
  }

  reset() {
    this.x = 0;
    this.y = 0;
  }
}

export default Background;
