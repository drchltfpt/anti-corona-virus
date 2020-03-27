import Background from "./models/Background";
import Ship from "./models/Ship";
import Bullet from "./models/Bullet";
import Enemy from "./models/Enemy";
import EnemyPool from "./models/EnemyPool";
import EnemyBulletPool from "./models/EnemyBulletPool";
import Pool from "./models/Pool";
import QuadTree from "./models/QuadTree";
import SoundPool from "./models/SoundPool";

import ImageRepo from "./repos/ImageRepo";

export default class Game {
  constructor() {
    this.playerScore = 0;
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

    document.getElementById("restart").addEventListener("click", () => {
      this.restart();
    });
  }

  init() {
    this.background = new Background(
      0,
      0,
      1,
      this.bgCanvas.width,
      this.bgCanvas.height,
      this.bgContext
    );

    // Set the ship to start near the bottom middle of the canvas
    const shipStartX = this.shipCanvas.width / 2 - ImageRepo.spaceship.width;
    const shipStartY =
      (this.shipCanvas.height / 4) * 3 + ImageRepo.spaceship.height * 2;
    this.ship = new Ship(
      shipStartX,
      shipStartY,
      ImageRepo.spaceship.width,
      ImageRepo.spaceship.height
    );
    this.ship.draw();

    // Initialize the enemy pool object
    this.enemyBulletPool = new EnemyBulletPool(50);
    this.enemyBulletPool.init();

    Enemy.prototype.enemyBulletPool = this.enemyBulletPool;

    Enemy.prototype.playerScore = this.playerScore;

    this.enemyPool = new EnemyPool(30);
    this.enemyPool.init();
    this.spawnWave();
    const height = ImageRepo.enemy.height;
    const width = ImageRepo.enemy.width;
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

    // Start QuadTree
    this.quadTree = new QuadTree({
      x: 0,
      y: 0,
      width: this.mainCanvas.width,
      height: this.mainCanvas.height
    });

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
  }

  /**
   * Ensure the game sound has loaded before starting the game
   */
  checkReadyState() {
    if (
      this.gameOverAudio.readyState === 4 &&
      this.backgroundAudio.readyState === 4
    ) {
      window.clearInterval(this.checkAudio);
    }
  }

  beforeRender() {
    // Insert objects into quadtree
    this.quadTree.clear();
    this.quadTree.insert(this.ship);
    this.quadTree.insert(this.ship.bulletPool.getPool());
    this.quadTree.insert(this.enemyPool.getPool());
    this.quadTree.insert(this.enemyBulletPool.getPool());
    this.detectCollision();
  }

  render() {
    document.getElementById("score").innerHTML = this.playerScore;
    this.background.draw();
    this.ship.move();
    this.ship.bulletPool.animate();
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
    let height = ImageRepo.enemy.height;
    let width = ImageRepo.enemy.width;
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
    document.getElementById("game-over").style.display = "block";
  }

  // Restart the game
  restart() {
    this.gameOverAudio.pause();
    document.getElementById("game-over").style.display = "none";
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
    this.background.init(0, 0);

    // Set the ship to start near the bottom middle of the canvas
    const shipStartX = this.shipCanvas.width / 2 - ImageRepo.spaceship.width;
    const shipStartY =
      (this.shipCanvas.height / 4) * 3 + ImageRepo.spaceship.height * 2;
    this.ship = new Ship(
      shipStartX,
      shipStartY,
      ImageRepo.spaceship.width,
      ImageRepo.spaceship.height
    );
    this.ship.draw();

    this.enemyPool.init();
    this.spawnWave();
    this.enemyBulletPool.init();
    this.playerScore = 0;
    this.backgroundAudio.currentTime = 0;
    this.backgroundAudio.play();
  }
}
