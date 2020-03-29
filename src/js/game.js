import FlowGame from "./FlowGame";
import Background from "./models/Background";
import Ship from "./models/Ship";
import Bullet from "./models/Bullet";
import Enemy from "./models/Enemy";
import EnemyPool from "./models/EnemyPool";
import EnemyBulletPool from "./models/EnemyBulletPool";
import QuadTree from "./models/QuadTree";
import SoundPool from "./models/SoundPool";
import PlayView from "./views/PlayView";

import ImageRepo from "./repos/ImageRepo";
import User from "./models/user";
import Helper from "./utils/Helper";

export default class Game extends FlowGame {
  constructor() {
    super();

    this.isGameOver = false;
    this.pauseStatus = false;

    this.bgCanvas = document.getElementById("background");
    this.shipCanvas = document.getElementById("ship");
    this.mainCanvas = document.getElementById("main");

    this.bgContext = this.bgCanvas.getContext("2d");
    this.shipContext = this.shipCanvas.getContext("2d");
    this.mainContext = this.mainCanvas.getContext("2d");

    // Initialize objects to contain their context and canvas information
    Background.prototype.context = this.bgContext;
    Background.prototype.canvasWidth = this.bgCanvas.width;
    Background.prototype.canvasHeight = this.bgCanvas.height;

    Ship.prototype.context = this.shipContext;
    Ship.prototype.canvasWidth = this.shipCanvas.width;
    Ship.prototype.canvasHeight = this.shipCanvas.height;

    Bullet.prototype.context = this.mainContext;
    Bullet.prototype.canvasWidth = this.mainCanvas.width;
    Bullet.prototype.canvasHeight = this.mainCanvas.height;

    Enemy.prototype.context = this.mainContext;
    Enemy.prototype.canvasWidth = this.mainCanvas.width;
    Enemy.prototype.canvasHeight = this.mainCanvas.height;
  }

  init() {
    return new Promise(async (resolve, reject) => {
      this.background = new Background(
        0,
        0,
        1,
        this.bgCanvas.width,
        this.bgCanvas.height,
        this.bgContext
      );

      // Audio files
      this.laser = new SoundPool(10);
      this.laser.init("laser");
      this.explosion = new SoundPool(20);
      this.explosion.init("explosion");

      this.backgroundAudio = new Audio("sounds/kick_shock.wav");
      this.backgroundAudio.loop = true;
      this.backgroundAudio.volume = 0.25;
      this.backgroundAudio.load();

      this.gameOverAudio = new Audio("sounds/game_over.wav");
      this.gameOverAudio.loop = true;
      this.gameOverAudio.volume = 0.25;
      this.gameOverAudio.load();

      this.ship = Ship.getShip();

      // Initialize the enemy pool object
      this.enemyBulletPool = new EnemyBulletPool(50);
      this.enemyBulletPool.init();

      Enemy.prototype.enemyBulletPool = this.enemyBulletPool;

      this.enemyPool = new EnemyPool(30);
      this.enemyPool.init();
      this.spawnWave();

      this.user = new User(1, 0);
      Enemy.prototype.user = this.user;

      // Start QuadTree
      this.quadTree = new QuadTree({
        x: 0,
        y: 0,
        width: this.mainCanvas.width,
        height: this.mainCanvas.height
      });

      // Init Views
      this.playView = new PlayView(
        this.restart.bind(this),
        this.pause.bind(this),
        this.resume.bind(this)
      );

      await Helper.sleep(1000);
      this.checkAudio = window.setInterval(() => {
        this.checkReadyState(resolve);
      }, 1000);
    });
  }

  /**
   * Ensure the game sound has loaded before starting the game
   */
  checkReadyState(resolve) {
    if (
      this.gameOverAudio.readyState === 4 &&
      this.backgroundAudio.readyState === 4
    ) {
      window.clearInterval(this.checkAudio);

      this.playView.hideLoading();

      resolve(true);
    }
  }

  doAfterInit() {
    this.ship.draw();
    this.backgroundAudio.play();
  }

  beforeRender() {
    // Insert objects into quadtree
    this.quadTree.clear();
    this.quadTree.insert(this.ship);
    this.quadTree.insert(this.ship.bulletPool.getPool());
    this.quadTree.insert(this.enemyPool.getPool());
    this.quadTree.insert(this.enemyBulletPool.getPool());
    this.detectCollision();
    this.playView.updateScoreCounter(this.user.score);
  }

  renderCondition() {
    return this.ship.alive;
  }

  isPause() {
    return this.pauseStatus;
  }

  render() {
    this.background.draw();
    this.isGameOver = !this.ship.move();
    if (this.isGameOver) {
      this.gameOver();
    }
    this.ship.animateBulletBool();
    this.enemyPool.animate();
    this.enemyBulletPool.animate();

    // No more enemies
    if (this.enemyPool.getPool().length === 0) {
      this.spawnWave();
    }
  }

  detectCollision() {
    let objects = [];
    this.quadTree.getAllObjects(objects);

    for (let x = 0; x < objects.length; x++) {
      let obj = [];
      this.quadTree.findObjects(obj, objects[x]);

      for (let y = 0; y < obj.length; y++) {
        // DETECT COLLISION ALGORITHM
        if (
          objects[x].collidableWith === obj[y].type &&
          objects[x].x < obj[y].x + obj[y].width &&
          objects[x].x + objects[x].width > obj[y].x &&
          objects[x].y < obj[y].y + obj[y].height &&
          objects[x].y + objects[x].height > obj[y].y
        ) {
          objects[x].isColliding = true;
          obj[y].isColliding = true;
        }
      }
    }
  }

  // Spawn a new wave of enemies
  spawnWave() {
    let height = ImageRepo.virus.height;
    let width = ImageRepo.virus.width;
    let x = 100;
    let y = -height;
    let spacer = y * 1.5;
    for (let i = 1; i <= 18; i++) {
      this.enemyPool.get(x, y, 2);
      x += width + 25;
      if (i % 6 == 0) {
        x = 100;
        y += spacer;
      }
    }
  }

  // Game over
  gameOver() {
    this.backgroundAudio.pause();
    this.gameOverAudio.currentTime = 0;
    this.gameOverAudio.play();

    this.playView.showGameOver();
  }

  pause() {
    this.pauseStatus = true;
  }

  resume() {
    this.pauseStatus = false;
  }

  // Restart the game
  restart() {
    this.gameOverAudio.pause();
    this.playView.hideGameOver();

    this.bgContext.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
    this.shipContext.clearRect(
      0,
      0,
      this.shipCanvas.width,
      this.shipCanvas.height
    );
    this.mainContext.clearRect(
      0,
      0,
      this.mainCanvas.width,
      this.mainCanvas.height
    );

    this.quadTree.clear();

    this.background.reset();

    // Set the ship to start near the bottom middle of the canvas
    this.ship.reset();

    this.enemyPool.reset();

    this.spawnWave();
    this.enemyBulletPool.reset();
    this.user.resetScore();

    this.backgroundAudio.currentTime = 0;

    this.reSetup();
  }
}
