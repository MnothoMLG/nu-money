import { AppState } from '../root.reducer';

export const getAllLoanOffersState = (app: AppState) => app.loansReducer.offers;
