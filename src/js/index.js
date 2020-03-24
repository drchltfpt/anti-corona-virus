import Game from "./Game";
import App from "./App";

window.onload = () => {
  const app = new App(new Game());

  app.setup();
};
