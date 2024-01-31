import * as yup from 'yup';

const emailVerificationSchema = yup.object().shape({
  email: yup
    .string()
    .min(10, 'Please enter valid email address')
    .max(50, 'Please enter valid email address')
    .email('Please enter valid email address')
    .required('Email is required'),
});

export default emailVerificationSchema;
