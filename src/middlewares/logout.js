import storageService from '../services/storage-service';

const logOut = (store) => (next) => (action) => {
  if (action.type === 'authorization/logoutUser') {
    storageService.setToStorage('lastActiveUser', '');
  }
  next(action);
};

export default logOut;
