import {
  ILoanApplication,
  ILoanApplicationPayload,
  ILoanProduct,
} from '@constants/types';
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
  error: string;
}>('@LOANS/GET_LOANS_API_ERROR');

// ===== GET LOAN APPLICATIONS

export const GET_LOAN_APPLICATIONS_LOADING_KEY = '@LOANS/GET_LOAN_APPLICATIONS';
export const fetchLoanApplicationsRequest = createAction(
  '@LOANS/GET_LOAN_APPLICATIONS_API_REQUEST'
);
export const fetchLoanApplicationsSuccess = createAction<{
  loanApplications: ILoanApplication[];
}>('@LOANS/GET_LOAN_APPLICATIONS_API_SUCCESS');
export const fetchLoanApplicationsError = createAction<{
  error: string;
}>('@LOANS/GET_LOAN_APPLICATIONS_API_ERROR');

// ===== APPLY FOR A LOAN

export const APPLY_FOR_LOAN_LOADING_KEY = '@LOANS/APPLY_FOR_LOAN';
export const applyForLoanRequest = createAction<ILoanApplicationPayload>(
  '@LOANS/APPLY_FOR_LOAN_API_REQUEST'
);
export const applyForLoanSuccess = createAction(
  '@LOANS/APPLY_FOR_LOAN_API_SUCCESS'
);
export const applyForLoanError = createAction<{
  error: any;
}>('@LOANS/APPLY_FOR_LOAN_API_ERROR');
