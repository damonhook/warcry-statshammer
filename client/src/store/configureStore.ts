import { combineReducers, configureStore as createStore, Middleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

import { config, fighters, notifications, stats } from './slices';

export const appReducer = combineReducers({
  config: config.reducer,
  fighters: fighters.reducer,
  stats: stats.reducer,
  notifications: notifications.reducer,
});

const middleware: Middleware[] = [thunk];
const persistConfig = {
  key: 'warcry-statshammer',
  storage,
  whitelist: ['config', 'fighters'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const configureStore = () => {
  const store = createStore({
    reducer: persistedReducer,
    middleware,
  });
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
