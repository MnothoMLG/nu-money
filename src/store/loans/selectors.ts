import { AppState } from '../root.reducer';

export const getAllLoanProducts = (app: AppState) =>
  app.loansReducer.loanProducts;

export const getAllLoanApplications = (app: AppState) =>
  app.loansReducer.loanApplications;
