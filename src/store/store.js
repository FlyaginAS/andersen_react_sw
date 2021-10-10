import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import authorizationReducer, {
  logoutUser,
} from './authorizationSlice';
import storageService from '../services/storage-service';

//myMiddleware
const logOut = (store) => (next) => (action) => {
  if (action.type === 'authorization/logoutUser') {
    console.log('logout middlevare');
    storageService.setToStorage('lastActiveUser', '');
  }
  next(action);
};
const logIn = (store) => (next) => (action) => {
  if (action.type === 'authorization/loginUser') {
    console.log('login user middlevare');
    console.log(action.payload);
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
      checkPermissionToAddToFavorites
    ),
});

export default store;
