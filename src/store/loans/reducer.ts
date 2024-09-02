import { createReducer } from '@reduxjs/toolkit';
import { fetchLoanOffersSuccess } from './actions';
import { LoansState } from './types';

const INITIAL_STATE: LoansState = {
  loanProducts: [],
};

export const loansReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(fetchLoanOffersSuccess, (state, action) => {
    if (action.payload) {
      const { payload } = action;
      return { ...state, ...payload };
    }
  });
});
