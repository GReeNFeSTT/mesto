export default class UserInfo {
    constructor({nameUser, infoUser}) {
      this._nameUser = document.querySelector(nameUser);
      this._infoUser = document.querySelector(infoUser);
    }
  
    getUserInfo = () => {
      return {
        name: this._nameUser.textContent,
        link: this._infoUser.textContent
      }
    };
  
    setUserInfo = ({name,link}) => {
      this._nameUser.textContent = name;
      this._infoUser.textContent = link;
    };
  }
  