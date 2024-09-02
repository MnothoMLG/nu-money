import { combineReducers } from '@reduxjs/toolkit';
import { loadingReducer } from './loading/reducer';
import { loansReducer } from './loans/reducer';
import { alertReducer } from './alert/reducer';

export const reducers = combineReducers({
  loadingReducer,
  alertReducer,
  loansReducer,
});

export type AppState = ReturnType<typeof reducers>;
