export default class UserInfo {
    constructor({nameUser, infoUser}) {
      this._nameUser = document.querySelector(nameUser);
      this._infoUser = document.querySelector(infoUser);
    }
  
    getUserInfo() {
      return {
        name: this._nameUser.textContent,
        link: this._infoUser.textContent
      }
    };
  
    setUserInfo(data) {
      this._nameUser.textContent = data.name;
      this._infoUser.textContent = data.link;
    };
  }
  