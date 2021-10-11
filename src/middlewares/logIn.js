import storageService from '../services/storage-service';

const logIn = (store) => (next) => (action) => {
  if (action.type === 'authorization/loginUser') {
    storageService.setToStorage(
      'lastActiveUser',
      action.payload.login
    );
  }
  next(action);
};

export default logIn;
