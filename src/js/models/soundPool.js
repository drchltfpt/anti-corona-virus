/**
 * A sound pool to use for the sound effects
 */
class SoundPool {
  constructor(maxSize) {
    this.size = maxSize; // Max sounds allowed in the pool
    this.pool = [];
    this.soundPool = this.pool;
    this.currSound = 0;
  }

  /*
   * Populates the pool array with the given sound
   */
  init(object) {
    if (object == "laser") {
      for (let i = 0; i < this.size; i++) {
        // Initalize the sound
        let laser = new Audio("sounds/laser.wav");
        laser.volume = 0.12;
        laser.load();

        this.soundPool.push(laser);
      }
    } else if (object == "explosion") {
      for (let i = 0; i < this.size; i++) {
        let explosion = new Audio("sounds/explosion.wav");
        explosion.volume = 0.1;
        explosion.load();

        this.soundPool.push(explosion);
      }
    }
  }

  /*
   * Plays a sound
   */
  get() {
    if (
      this.soundPool[this.currSound].currentTime == 0 ||
      this.soundPool[this.currSound].ended
    ) {
      this.soundPool[this.currSound].play();
    }
    this.currSound = (this.currSound + 1) % this.size;
  }
}

export default SoundPool;
