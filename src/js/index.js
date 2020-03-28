import Game from "./Game";
import App from "./App";

window.onload = async () => {
  const app = new App(new Game());

  await app.setup();
};
