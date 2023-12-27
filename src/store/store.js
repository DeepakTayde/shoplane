
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import productReducer from "./productSlice";
import wishListReducer from "./wishListSlice";
import authReducer from "./authSlice"
import userReducer from './userSlice'
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



export const store = configureStore({
  reducer: {
    cart: persistReducer(persistConfig, cartReducer),
    product: productReducer,
    wishList: wishListReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    user : userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)







// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     product: productReducer,
//     wishList: wishListReducer,
//   },
// });

// export default store;