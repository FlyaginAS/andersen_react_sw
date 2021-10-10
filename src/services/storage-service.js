class StorageService {
  _myStorage = window.localStorage;

  setToStorage = (name, data) => {
    this._myStorage.setItem(name, JSON.stringify(data));
  };

  getFromStorage = (name) => {
    return JSON.parse(this._myStorage.getItem(name));
  };

  isUserRegistered = (name) => {
    const user = this._myStorage.getItem(name);
    return !!user;
  };

  setLastActiveUserName = (name) => {
    this.setToStorage('lastActiveUser', name);
  };

  getLastActiveUserName = (name) => {
    return this.getFromStorage('lastActiveUser');
  };
  getLastUser = () => {
    const name = this.getLastActiveUserName();
    return this.getFromStorage(name);
  };
}

const storageService = new StorageService();
export default storageService;
