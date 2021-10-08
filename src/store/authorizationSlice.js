import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
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
  },
});

export const { loginUser, logoutUser } = authorizationSlice.actions;

export const selectUser = (state) => state.authorization.user;

export default authorizationSlice.reducer;
