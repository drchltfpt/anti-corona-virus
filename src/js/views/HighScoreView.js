export default class HighScoreView {
  constructor() {
    this.highScore = document.getElementById("high-score");
    this.listUser = document.getElementById("list-user");
    this.btnBack = document.getElementById("btn-back");
    this.menuOption = document.getElementById("menu-option");

    this.initEvents();
  }

  initEvents() {
    this.btnBack.addEventListener("click", () => {
      this.handleBack();
    });
  }

  handleBack() {
    this.highScore.style.display = "none";
    this.menuOption.style.display = "block";
  }

  getHTMLItem(user, index) {
    return `
        <li>
          <b>#${index}</b>
          <font>${user.name}</font>
          <span>${user.score}</span>
        </li>
      `;
  }

  render(users) {
    let listUsersHTML = "";
    let user;
    for (let i = 0; i < users.length; i++) {
      user = users[i];
      listUsersHTML += this.getHTMLItem(user, i + 1);
    }

    this.listUser.innerHTML = listUsersHTML;
    this.highScore.style.display = "block";
  }
}

export const highScoreView = new HighScoreView();
