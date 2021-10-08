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
  },
});

export const { loginUser } = authorizationSlice.actions;

export const selectUser = (state) => state.authorization.user;

export default authorizationSlice.reducer;
