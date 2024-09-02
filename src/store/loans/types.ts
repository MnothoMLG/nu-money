import { ILoan } from '@constants/types';

export interface LoansState {
  offers: Partial<Array<ILoan>>;
}
