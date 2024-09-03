import { createReducer } from '@reduxjs/toolkit';
import {
  fetchLoanApplicationsSuccess,
  fetchLoanOffersSuccess,
} from './actions';
import { LoansState } from './types';

const INITIAL_STATE: LoansState = {
  loanProducts: [],
  loanApplications: [],
};

const standardCallBack = (
  state: LoansState,
  action: { type: string; payload: Partial<LoansState> }
) => {
  if (action.payload) {
    return { ...state, ...action.payload };
  }
};

export const loansReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(fetchLoanOffersSuccess, standardCallBack)
    .addCase(fetchLoanApplicationsSuccess, standardCallBack);
});
