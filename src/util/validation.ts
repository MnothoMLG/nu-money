import * as yup from 'yup';

export const applicationFormValidation = yup.object().shape({
  name: yup.string().required('This field is required'),
  contact: yup.string().required('This field is required'),
  phone: yup
    .string()
    .min(10, 'Enter a valid mobile number')
    .max(10, 'Enter a valid mobile number')
    .required('This field is required'),
});
