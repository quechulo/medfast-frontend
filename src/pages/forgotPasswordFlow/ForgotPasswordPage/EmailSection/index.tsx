import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { ReactSVG } from 'react-svg';
import { useDispatch } from 'react-redux';
import Logo from 'src/components/Logo';
import InputField from 'src/components/inputs/InputField';
import Button from 'src/components/buttons/Button';
import StyledLink from 'src/components/StyledLink/styles';
import emailVerificationSchema from 'src/schemas/emailVerificationSchema';
import { useSendForgotPasswordEmailMutation } from 'src/redux/auth/authApiSlice';
import getToastFromError from 'src/utils/getToastFromError';
import { setForgotPasswordEmail } from 'src/redux/auth/authSlice';
import {
  SectionWrapper,
  SectionLogoWrapper,
  SectionContentWrapper,
  SectionDescription,
  SectionDescriptionImage,
  SectionForm,
  SectionTextUnderButton,
  SectionButtonWrapper,
  SectionToastWrapper,
} from 'src/layout/SliderLayout/Section/styles';

const is429Error = (error: any) => 'status' in error && error.status === 429;

interface Values {
  email: string;
}

const EmailSection: React.FC = () => {
  const dispatch = useDispatch();

  const [sendForgotPasswordEmail, { isLoading, isSuccess, isError, error }] =
    useSendForgotPasswordEmailMutation();

  const onSubmit = (values: Values) => {
    sendForgotPasswordEmail(values);
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: emailVerificationSchema,
      onSubmit,
    });

  useEffect(() => {
    if (isSuccess || (isError && is429Error(error))) {
      dispatch(setForgotPasswordEmail({ email: values.email }));
    }
  }, [isSuccess, isError, error, dispatch, values.email]);

  if (isLoading) {
    return (
      <SectionWrapper>
        <div>Loading...</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <SectionLogoWrapper>
        <Logo />
      </SectionLogoWrapper>

      <SectionContentWrapper>
        <SectionDescription>
          <SectionDescriptionImage>
            <ReactSVG src="/assets/icons/key.svg" />
          </SectionDescriptionImage>

          <h2>Forgot your password?</h2>
          <h4>
            Please enter your email address. We will send a code to change your
            password
          </h4>
        </SectionDescription>

        <SectionForm onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            type="email"
            id="email"
            name="email"
            placeholder="Name@gmail.com"
            value={values.email}
            error={touched.email && errors.email ? errors.email : ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {isError && !is429Error(error) ? (
            <SectionToastWrapper>
              {getToastFromError(error)}
            </SectionToastWrapper>
          ) : null}

          <SectionButtonWrapper>
            <Button type="submit" text="Send code" />
          </SectionButtonWrapper>

          <SectionTextUnderButton>
            <h5>Back to</h5>
            <StyledLink to="/" $fWeight={400}>
              Sign In
            </StyledLink>
          </SectionTextUnderButton>
        </SectionForm>
      </SectionContentWrapper>
    </SectionWrapper>
  );
};

export default EmailSection;
