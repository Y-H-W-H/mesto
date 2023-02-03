export default class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector, avatarSelector }) {
    this._userNameElement = document.body.querySelector(profileNameSelector);
    this._userAboutELement = document.body.querySelector(profileAboutSelector);
    this._userAvatarElement = document.body.querySelector(avatarSelector);
  }
  setMyAvatar(avatar) {
    this._userAvatarElement.src = avatar;
  }
  getUserInfo() {
    const userData = {
      collectedName: this._userNameElement.textContent,
      collectedAbout: this._userAboutELement.textContent,
      collectedAvatar: this._userAvatarElement.src,
    };
    return userData;
  }
  setUserInfo({ nameToSet, infoToSet }) {
    this._userNameElement.textContent = nameToSet;
    this._userAboutELement.textContent = infoToSet;
  }
}
