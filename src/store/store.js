import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import authorizationReducer from './authorizationSlice';

const store = configureStore({
  reducer: {
    people: peopleReducer,
    authorization: authorizationReducer,
  },
});

export default store;
