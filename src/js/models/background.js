import Drawable from "../interfaces/Drawable";
import ImageRepository from "../repos/ImageRepo";
/**
 * Creates the Background object which will become a child of
 * the Drawable object. The background is drawn on the "background"
 * canvas and creates the illusion of moving by panning the image.
 */
class Background extends Drawable {
  constructor(x, y, speed, canvasWidth, canvasHeight, context) {
    super(x, y, speed, canvasWidth, canvasHeight);
    this.context = context;
  }
  // Implement abstract function
  draw() {
    // Pan background
    console.log(this.x, " ", this.y);
    this.y += this.speed;
    this.context.drawImage(ImageRepository.background, this.x, this.y);

    // Draw another image at the top edge of the first image
    this.context.drawImage(
      ImageRepository.background,
      this.x,
      this.y - this.canvasHeight
    );

    // If the image scrolled off the screen, reset
    if (this.y >= this.canvasHeight) this.y = 0;
  }
}

export default Background;
