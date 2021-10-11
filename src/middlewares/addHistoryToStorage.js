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

  // if (action.type === 'authorization/addHistory') {
  //   if (store.getState().authorization.user) {
  //     next(action);
  //     console.log('added history to storage');
  //     const user = store.getState().authorization.user;
  //     storageService.setToStorage(user.login, user);
  //   }
  // } else {
  //   next(action);
  // }
};

export default addHistoryToStorage;
