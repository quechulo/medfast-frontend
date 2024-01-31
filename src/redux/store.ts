import {
  configureStore,
  PreloadedState,
  combineReducers,
} from '@reduxjs/toolkit';
import apiSlice from './api/apiSlice';
import userReducer from './user/user.actions';
import registrationReducer from './registration/registration.actions';
import isDevEnv from '../utils/isDevEnv';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  user: userReducer,
  registration: registrationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: isDevEnv(),
  });

export const store = setupStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof setupStore>;
// Inferred type: { }
export type AppDispatch = typeof store.dispatch;
