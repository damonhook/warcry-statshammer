import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { configureStore as createStore, combineReducers, Middleware } from '@reduxjs/toolkit';

import { config, fighters, stats } from './slices';

export const appReducer = combineReducers({
  config: config.reducer,
  fighters: fighters.reducer,
  stats: stats.reducer,
});

const middleware: Middleware[] = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

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
