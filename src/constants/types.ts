export interface ILoanProduct {
  id: number;
  maximumAmount: number;
  name: string;
  interestRate: number;
}

export interface ICallBacks {
  onSuccess?: (msg: string) => void;
  onFailure?: (reason: string) => void;
}

export interface ILoanApplicationPayload extends ICallBacks {
  loan_amount: string | number;
  full_name?: string;
  email: string;
  loan_purpose: string;
}

export interface ILoanApplication {
  id: number;
  fullName: string;
  email: string;
  loanAmount: number;
  loanPurpose: string;
}

export interface IGenericResponse {
  message: string;
}

export enum EToastTypes {
  ERROR = 'error',
  SUCCESS = 'success',
}

export enum EButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export interface ToastConfig {
  type: EToastTypes;
  message: string;
  description?: string;
  topOffset?: number;
}
