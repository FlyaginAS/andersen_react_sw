import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import authorizationReducer, {
  logoutUser,
} from './authorizationSlice';
import storageService from '../services/storage-service';
//myMiddlewares
import {
  logOut,
  logIn,
  checkPermissionToAddToFavorites,
  addHistoryToStorage,
} from '../middlewares';

//проверка разрешения диспатчить в избранное

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
