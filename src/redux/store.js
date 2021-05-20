import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './acuSlice';
import acupointReducer from "./acupointSlice"

export const store = configureStore({
  reducer: {
    data: dataReducer,
    acupoint: acupointReducer,
  },
});
