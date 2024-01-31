import * as yup from 'yup';

export const registrationFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot be longer than 50 characters')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Name must not contain special characters and latin letters only')
    .required('Name is required'),

  surname: yup
    .string()
    .min(2, 'Surname must be at least 8 characters')
    .max(50, 'Surname cannot be longer than 50 characters')
    .matches(/[A-Z]/, 'At least one uppercase letter is required')
    .matches(/[a-z]/, 'At least one lowercase letter is required')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Name must not contain special characters and latin letters only')
    .required('Surname is required'),

  dateOfBirth: yup
    .string()
    .required('Date of birth is required'),
});

export const registrationFormSchema2 = yup.object().shape({
  street: yup
    .string()
    .min(2, 'Street Address must be at least 2 characters')
    .max(50, 'Street Address cannot be longer than 50 characters')
    .matches(
      /^[a-zA-Z0-9\s]+$/,
      'Street Address must not contain special characters and latin letters only'
    )
    .required('Street Address is required'),

  city: yup
    .string()
    .matches(/^[a-zA-Z0-9\s]+$/, 'City must not contain special characters and latin letters only')
    .required(),

  house: yup
    .string()
    .min(1, 'House must be at least 1 symbol')
    .max(10, 'House cannot be longer than 50 symbols')
    .matches(/^[a-zA-Z0-9\s]+$/, 'House must not contain special characters and latin letters only')
    .required('House is required'),

  state: yup
    .string()
    .min(2, 'State must be at least 2 characters')
    .max(50, 'State cannot be longer than 50 characters')
    .matches(/^[a-zA-Z0-9\s]+$/, 'State must not contain special characters and latin letters only')
    .required('State is required'),

  apartment: yup
    .string()
    .min(1, 'Street Address must be at least 1 symbol')
    .max(10, 'Street Address cannot be longer than 10 symbols')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Apartment must not contain special characters and latin letters only'),

  zip: yup
    .string()
    .min(1, 'ZIP must be at least 1 symbol')
    .max(10, 'ZIP cannot be longer than 10 symbols')
    .matches(/^[0-9\s]+$/, 'ZIP must contain only numerical characters')
    .required(),
});

export const registrationFormSchema3 = yup.object().shape({
  email: yup
    .string()
    .min(10, 'Email must be at least 10 symbols')
    .max(50, 'Email cannot be longer than 50 symbols')
    .email('Invalid email address')
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(
      /^\+\d \(\d{3}\) \d{3} \d{4}$/,
      'Invalid phone number format expected:"+ x (xxx) xxx xxxx"'
    )
    .matches(
      /^(\+\d)?[\d\s()+]+$/,
      'Phone number must contain only numerical symbols'
    )
    .required('Phone number is required'),
});

export const registrationFormSchema5Messages = {
  password: {
    required: 'Password is required',
    min: 'Password must be at least 8 symbols',
    max: 'Password cannot be longer than 50 symbols',
    uppercase: 'Password should contain at least one uppercase character',
    lowercase: 'Password should contain at least one lowercase character',
    number: 'Password should contain at least one number',
    special: 'Password should contain at least one special character ex."%"',
  },
  passwordRepeated: {
    required: 'Password confirmation is required',
    oneOf: 'Passwords must match',
  },
};

// note: this schema is used for both registration and reset password forms
export const registrationFormSchema5 = yup.object().shape({
  password: yup
    .string()
    .min(8, registrationFormSchema5Messages.password.min)
    .max(50, registrationFormSchema5Messages.password.max)
    .matches(/[A-Z]/, registrationFormSchema5Messages.password.uppercase)
    .matches(/[a-z]/, registrationFormSchema5Messages.password.lowercase)
    .matches(/[0-9]/, registrationFormSchema5Messages.password.number)
    .matches(/^(?=.*[!@#$%^&*(),.?":{}|<>;]).*$/, registrationFormSchema5Messages.password.special)
    .required(registrationFormSchema5Messages.password.required),

  passwordRepeated: yup
    .string()
    .required(registrationFormSchema5Messages.passwordRepeated.required)
    .oneOf([yup.ref('password')], registrationFormSchema5Messages.passwordRepeated.oneOf),
});
