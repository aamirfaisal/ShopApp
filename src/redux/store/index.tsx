import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from '../reducer/CartSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
