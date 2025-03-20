import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import { coffeeApi } from './api/coffeeApi.js'; // Из предыдущего кода

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [coffeeApi.reducerPath]: coffeeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coffeeApi.middleware),
});