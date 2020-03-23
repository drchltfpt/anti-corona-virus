import Background from "../models/background";
import { animate } from "../utils/common-function";
/**
 * Creates the Game object which will hold all objects and data for
 * the game.
 */
export default function GameController() {
  /*
   * Gets canvas information and context and sets up all game
   * objects.
   * Returns true if the canvas is supported and false if it
   * is not. This is to stop the animation script from constantly
   * running on older browsers.
   */
  // Get the canvas element
  const bgCanvas = document.getElementById("background");
  // Test to see if canvas is supported
  if (bgCanvas.getContext) {
    // Initialize objects to contain their context and canvas
    // information
    animate(GameController);
    gameRendering(bgCanvas);
  }
}

function gameRendering(bgCanvas) {
  const bgContext = bgCanvas.getContext("2d");
  const background = new Background(0, 0, 1, bgCanvas.width, bgCanvas.height, bgContext);
  background.draw();
}