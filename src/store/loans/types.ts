import { ILoanProduct } from '@constants/types';

export interface LoansState {
  loanProducts: Partial<Array<ILoanProduct>>;
}
