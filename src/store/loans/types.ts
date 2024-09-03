import { ILoanApplication, ILoanProduct } from '@constants/types';

export interface LoansState {
  loanProducts: Array<ILoanProduct>;
  loanApplications: Array<ILoanApplication>;
}
