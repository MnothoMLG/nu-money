import { AppState } from '../root.reducer';

export const getAllLoanProducts = (app: AppState) =>
  app.loansReducer.loanProducts;
