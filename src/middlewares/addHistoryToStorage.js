import storageService from '../services/storage-service';

const addHistoryToStorage = (store) => (next) => (action) => {
  if (action.type !== 'authorization/addHistory') {
    return next(action);
  }

  let user = store.getState().authorization.user;

  if (!user) {
    return;
  }

  next(action);
  //получаем обновленного юзера
  user = store.getState().authorization.user;
  storageService.setToStorage(user.login, user);
};

export default addHistoryToStorage;
