export default class Api {
  constructor(options) {
    this._apiUrl = options.apiUrl;
    this._headers = options.headers;
  }

  _responseCheck(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._apiUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._responseCheck);
  }

  getInitialCardList() {
    return fetch(`${this._apiUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._responseCheck);
  }
  patchProfile(profileData) {
    return fetch(`${this._apiUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: profileData["name"],
        about: profileData["link"],
      }),
    }).then(this._responseCheck);
  }

  patchAvatar(avatarData) {
    return fetch(`${this._apiUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarData["link"],
      }),
    }).then(this._responseCheck);
  }

  postCard(imgValues) {
    return fetch(`${this._apiUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: imgValues["name"],
        link: imgValues["link"],
      }),
    }).then(this._responseCheck);
  }
  deleteCard(cardId) {
    return fetch(`${this._apiUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._responseCheck);
  }
  putLike(cardId) {
    return fetch(`${this._apiUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._responseCheck);
  }
  cancelLike(cardId) {
    return fetch(`${this._apiUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._responseCheck);
  }
}
