export interface ILoanProduct {
  id: number;
  maximumAmount: number;
  name: string;
  interestRate: number;
}

export interface ILoanApplicationPayload {
  loan_amount: string | number;
  full_name?: string;
  email: string;
  loan_purpose: string;
}
export interface ILoanApplication extends ILoanApplicationPayload {
  id: number;
}

export interface IGenericResponse {
  message: string;
}

export enum EButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}
