import "../css/index.css";
import GameController from "./controller/GameController";

window.onload = async () => {
  const game = new GameController();

  await game.setup();
};
