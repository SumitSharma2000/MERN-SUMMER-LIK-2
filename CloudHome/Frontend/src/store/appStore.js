import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';

const AppStore = configureStore({
  reducer: {
    auth :authReducer
  },
})

export default AppStore