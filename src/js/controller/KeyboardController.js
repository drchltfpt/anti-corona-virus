const KEY_CODES = {
  9: "tab",
  32: "space",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

class KeyboardController {
  constructor() {
    this.KEY_STATUS = {};
    for (let code in KEY_CODES) {
      this.KEY_STATUS[KEY_CODES[code]] = false;
    }

    this.addEventListen();
  }

  addEventListen() {
    const self = this;
    /**
     * Sets up the document to listen to onkeydown events (fired when
     * any key on the keyboard is pressed down). When a key is pressed,
     * it sets the appropriate direction to true to let us know which
     * key it was.
     */

    document.onkeydown = function(e) {
      // Firefox and opera use charCode instead of keyCode to
      // return which key was pressed.
      var keyCode = e.keyCode ? e.keyCode : e.charCode;
      if (keyCode === 9) {
        e.preventDefault();
        return;
      }
      if (KEY_CODES[keyCode]) {
        e.preventDefault();
        self.KEY_STATUS[KEY_CODES[keyCode]] = true;
      }
    };

    /**
     * Sets up the document to listen to ownkeyup events (fired when
     * any key on the keyboard is released). When a key is released,
     * it sets teh appropriate direction to false to let us know which
     * key it was.
     */
    document.onkeyup = function(e) {
      var keyCode = e.keyCode ? e.keyCode : e.charCode;
      if (keyCode === 9) {
        e.preventDefault();
        self.KEY_STATUS.tab = true;
        return;
      }
      if (KEY_CODES[keyCode]) {
        e.preventDefault();
        self.KEY_STATUS[KEY_CODES[keyCode]] = false;
      }
    };
  }
}

export default new KeyboardController();
