class PlayView {
  constructor(restartGameFunc) {
    this.restartButton = document.getElementById('restart');
    this.restartGameFunc = restartGameFunc;
    this.initEvent();
  }

  initEvent() {
    this.restartButton.addEventListener('click', () => {
      this.restartGameFunc();
    });
  }


}

export default PlayView;