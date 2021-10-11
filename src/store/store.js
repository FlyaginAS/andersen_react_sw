import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import authorizationReducer from './authorizationSlice';

import {
  logOut,
  logIn,
  checkPermissionToAddToFavorites,
  addHistoryToStorage,
} from '../middlewares';

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
