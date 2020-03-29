import "../css/index.css";
import Game from "./Game";

window.onload = async () => {
  const game = new Game();

  await game.setup();
};
