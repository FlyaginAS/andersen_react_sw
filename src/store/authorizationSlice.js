import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { loginUser } = authorizationSlice.actions;

export const selectIsLoggedIn = (state) =>
  state.authorization.isLoggedIn;

export default authorizationSlice.reducer;
