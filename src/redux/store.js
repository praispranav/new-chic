import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './acuSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
