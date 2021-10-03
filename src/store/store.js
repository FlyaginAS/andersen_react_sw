import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    slice: () => ({}),
  },
});

export default store;
