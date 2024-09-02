import { ILoan } from '@constants/types';
import { createAction } from '@reduxjs/toolkit';

export const GET_LOANS_LOADING_KEY = '@LOANS/GET_LOANS';
export const fetchLoanOffersRequest = createAction<{ store_id: string }>(
  '@LOANS/GET_LOANS_API_REQUEST'
);
export const fetchLoanOffersSuccess = createAction<{
  categories: ILoan[];
}>('@LOANS/GET_LOANS_API_SUCCESS');
export const fetchLoanOffersError = createAction<{
  error: any;
}>('@LOANS/GET_LOANS_API_ERROR');
