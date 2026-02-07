import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import persistStore from "redux-persist/es/persistStore";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import themeReducer from "../features/theme/themeSlice"
import userReducer from "../features/user/userSlice"
import { baseApi } from "../api/baseApi";
import { imgbbApi } from "../services/imageUploadApi/imageUploadApi";


const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  blacklist: [baseApi.reducerPath],
};

const sessionConfig = {
  key: "session",
  version: 2,
  storage: storageSession,
};

const rootPersistReducers = combineReducers({
  themeReducer,
  userReducer,
});

const sessionReducers = combineReducers({
  themeReducer,
  userReducer,
});

const persistedReducers = persistReducer(persistConfig, rootPersistReducers);

const sessionReducer = persistReducer(sessionConfig, sessionReducers);

const store = configureStore({
  reducer: {
    local: persistedReducers,
    session: sessionReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [imgbbApi.reducerPath]: imgbbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(baseApi.middleware)
      .concat(imgbbApi.middleware),
});

export default store;
export const persistor = persistStore(store);
setupListeners(store.dispatch);
