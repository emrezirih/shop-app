import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './store/basket';
import productReducer from './store/products';
import themeReducer from './store/theme';


export const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer,
        theme: themeReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;