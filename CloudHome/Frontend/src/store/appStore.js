import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';

export const AppStore = configureStore({
  reducer: {
    auth :authReducer
  },
})