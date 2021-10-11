import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import authorizationReducer, {
  logoutUser,
} from './authorizationSlice';
import storageService from '../services/storage-service';

//myMiddleware
const logOut = (store) => (next) => (action) => {
  if (action.type === 'authorization/logoutUser') {
    storageService.setToStorage('lastActiveUser', '');
  }
  next(action);
};
const logIn = (store) => (next) => (action) => {
  if (action.type === 'authorization/loginUser') {
    storageService.setToStorage(
      'lastActiveUser',
      action.payload.login
    );
  }
  next(action);
};
//проверка разрешения диспатчить в избранное
const checkPermissionToAddToFavorites =
  (store) => (next) => (action) => {
    if (action.type === 'authorization/addFavorites') {
      //todo переписать условие через &
      if (store.getState().authorization.user) {
        next(action);
        //сохраняем в стор обновленного юзера. Это побочное
        //действие можно выполнять или тут, или в компоненте,
        // но не в редюсере- он чистая ф-ия
        const user = store.getState().authorization.user;
        storageService.setToStorage(user.login, user);
      } else {
        alert(
          'Только зарегистрированные пользователи могут добавлять в избранное'
        );
      }
    } else {
      next(action);
    }
  };

const addHistoryToStorage = (store) => (next) => (action) => {
  if (action.type === 'authorization/addHistory') {
    if (store.getState().authorization.user) {
      next(action);
      console.log('added history to storage');
      const user = store.getState().authorization.user;
      storageService.setToStorage(user.login, user);
    }
  } else {
    next(action);
  }
};

const store = configureStore({
  reducer: {
    people: peopleReducer,
    authorization: authorizationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      logOut,
      logIn,
      checkPermissionToAddToFavorites,
      addHistoryToStorage
    ),
});

export default store;
