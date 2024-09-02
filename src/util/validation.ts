import * as yup from 'yup';

export const applicationFormValidation = yup.object().shape({
  full_name: yup.string().required('Please enter your name'),
  email: yup.string().email('Please enter a valid email address'),
  loan_purpose: yup.string().required('Please provide a purpose your loan'),
  loan_amount: yup
    .number()
    .integer('Please enter a valid number')
    .positive('Your amount must be greater than zero')
    .required('Please enter an amount'),
});
