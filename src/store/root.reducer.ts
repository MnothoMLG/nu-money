import { combineReducers } from '@reduxjs/toolkit';
import { loadingReducer } from './loading/reducer';
import { loansReducer } from './loans/reducer';

export const reducers = combineReducers({
  loadingReducer,
  loansReducer,
});

export type AppState = ReturnType<typeof reducers>;
