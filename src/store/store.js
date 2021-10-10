import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import authorizationReducer from './authorizationSlice';

//myMiddleware
const myLogMiddleware = (store) => (next) => (action) => {
  next(action);
};
const myLogMiddleware2 = (store) => (next) => (action) => {
  next(action);
};

const store = configureStore({
  reducer: {
    people: peopleReducer,
    authorization: authorizationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myLogMiddleware, myLogMiddleware2),
});

export default store;
