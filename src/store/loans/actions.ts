import { ILoanApplicationPayload, ILoanProduct } from '@constants/types';
import { createAction } from '@reduxjs/toolkit';

// ===== GET LOAN PRODUCTS

export const GET_LOAN_PRODUCTS_LOADING_KEY = '@LOANS/GET_LOANS';
export const fetchLoanOffersRequest = createAction(
  '@LOANS/GET_LOANS_API_REQUEST'
);
export const fetchLoanOffersSuccess = createAction<{
  loanProducts: ILoanProduct[];
}>('@LOANS/GET_LOANS_API_SUCCESS');
export const fetchLoanOffersError = createAction<{
  error: any;
}>('@LOANS/GET_LOANS_API_ERROR');

// ===== APPLY FOR A LOAN

export const APPLY_FOR_LOAN_LOADING_KEY = '@LOANS/APPLY_FOR_LOAN';
export const applyForLoanRequest = createAction<ILoanApplicationPayload>(
  '@LOANS/APPLY_FOR_LOAN_API_REQUEST'
);
export const applyForLoanSuccess = createAction<{
  message: string;
}>('@LOANS/APPLY_FOR_LOAN_API_SUCCESS');
export const applyForLoanError = createAction<{
  error: any;
}>('@LOANS/APPLY_FOR_LOAN_API_ERROR');
