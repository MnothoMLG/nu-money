export interface ILoan {
  amount: number;
  type?: string;
  interest: number;
}

export enum EButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}
