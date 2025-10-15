import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";

import findPlaceSlice from "../features/hero/findPlaceSlice";
import loginSlice from "../features/auth/loginSlice"; // your auth reducer

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  hero: findPlaceSlice,
  auth: loginSlice, // ✅ persist auth slice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);
