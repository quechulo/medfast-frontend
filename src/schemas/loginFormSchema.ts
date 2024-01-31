import * as yup from 'yup';

const loginFormSchema = yup.object().shape({
	email: yup
		.string()
		.min(10, 'Please enter valid email address')
		.max(50, 'Please enter valid email address')
		.email('Please enter valid email address')
		.required('Email is required'),

	password: yup
		.string()
		.min(8, 'Please enter valid password')
		.max(50, 'Please enter valid password')
		.matches(/[A-Z]/, 'Please enter valid password')
		.matches(/[a-z]/, 'Please enter valid password')
		.matches(/[0-9]/, 'Please enter valid password')
		.matches(/[!@#$%^&*(),.?":{}|<>;]/, 'Please enter valid password')
		.required('Password is required'),
});

export default loginFormSchema;
