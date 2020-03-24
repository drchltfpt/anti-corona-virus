/**
 * Creates the Drawable object which will be the base class for
 * all drawable objects in the game. Sets up default variables
 * that all child objects will inherit, as well as the default
 * functions.
 */

class Drawable {
  constructor(x, y, speed, canvasWidth, canvasHeight, width, height) {
    // Default variables
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.width = width;
    this.height = height;
  }

  // Define abstract function to be implemented in child objects
  draw() {}
  move() {}
}

module.exports = Drawable;
