class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._profileName = document.querySelector(userNameSelector);
    this._profileJob = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }

  setUserInfo(name, job) {
    this._profileName.textContent = name;
    this._profileJob.textContent = job;
  }
}

export default UserInfo;
