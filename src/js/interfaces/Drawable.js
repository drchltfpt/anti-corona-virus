/**
 * Creates the Drawable object which will be the base class for
 * all drawable objects in the game. Sets up default variables
 * that all child objects will inherit, as well as the default
 * functions.
 */

class Drawable {
  constructor(x, y, speed, width, height) {
    // Default variables
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
    this.collidableWith = "";
    this.isColliding = false;
    this.type = ""
  }

  // Define abstract function to be implemented in child objects
  draw() {}
  move() {}
  isCollidableWith(object) {
    return (this.collidableWith === object.type);
  } 
}

module.exports = Drawable;
