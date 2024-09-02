import { createReducer } from '@reduxjs/toolkit';
import {
  fetchLoanOffersRequest,
  fetchLoanOffersSuccess,
  fetchLoanOffersError,
} from './actions';
import { LoansState } from './types';

const INITIAL_STATE: LoansState = {
  offers: [],
};

export const loansReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(fetchLoanOffersSuccess, (state, action) => {
    if (action.payload) {
      const { payload } = action;
      return { ...state, ...payload };
    }
  });
});
