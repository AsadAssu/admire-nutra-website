import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import orderReducer from './orderSlice';
import queryReducer from './querySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: orderReducer,
    queries: queryReducer,
  },
});
