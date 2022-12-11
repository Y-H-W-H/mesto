

export default class UserInfo {
    constructor({ profileNameSelector, profileAboutSelector }) {
        this._userNameElement = document.body.querySelector(profileNameSelector);
        this._userAboutELement = document.body.querySelector(profileAboutSelector);
    }
    getUserInfo() {
        const userData = {
            collectedName: this._userNameElement.textContent,
            collectedAbout: this._userAboutELement.textContent
        }
        return userData;
    }
    setUserInfo(collectedUserInfoInput) {
        this._userNameElement.textContent = collectedUserInfoInput.nameToSet;
        this._userAboutELement.textContent = collectedUserInfoInput.infoToSet;
    }
}