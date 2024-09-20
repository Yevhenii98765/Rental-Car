import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { autoReducer } from './auto/slice';
import { filterReducer } from './filters/slice';
import { filtersLeaseReducer } from './leaseFilters/slice';

const persistConfig = {
  key: 'auto',
  storage,
};

const persistedReducer = persistReducer(persistConfig, autoReducer);

export const store = configureStore({
  reducer: {
    auto: persistedReducer,
    filter: filterReducer,
    filtersLease: filtersLeaseReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
