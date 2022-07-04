class UserInfo {
  constructor({ userNameSelector, userJobSelector, avatarSelector }) {
    this._profileName = document.querySelector(userNameSelector);
    this._profileJob = document.querySelector(userJobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
      avatar: this._avatar.src,
      id: this._userId,
    };
  }

  setUserInfo(name, job, id) {
    this._profileName.textContent = name;
    this._profileJob.textContent = job;
    this._userId = id;
  }

  setAvatar(avatar) {
    this._avatar.src = avatar;
  }
}

export default UserInfo;
