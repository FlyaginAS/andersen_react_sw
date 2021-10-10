import { createSlice } from '@reduxjs/toolkit';
import localStorage from '../services/storage-service';

const initialState = {
  user: localStorage.getLastUser(),
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    addFavorites: (state, action) => {
      const id = action.payload;
      const favorites = state.user.favorites;
      if (favorites.includes(id)) {
        return;
      }
      state.user.favorites.push(action.payload);
    },
    addHistory: (state, action) => {
      console.log('adding to history');
      const search = action.payload;
      const history = state.user.history;
      history.push(search);
    },
  },
});

export const { loginUser, logoutUser, addFavorites, addHistory } =
  authorizationSlice.actions;

export const selectUser = (state) => state.authorization.user;
export const selectFavorites = (state) =>
  state.authorization.user.favorites;

export default authorizationSlice.reducer;
