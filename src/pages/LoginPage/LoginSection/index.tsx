import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from 'src/components/Logo';
import InputField from 'src/components/inputs/InputField';
import CheckboxField from 'src/components/checkboxes/CheckboxField';
import Button from 'src/components/buttons/Button';
import Eye from 'src/components/Eye';
import StyledLink from 'src/components/StyledLink/styles';
import {
  SectionWrapper,
  SectionLogoWrapper,
  SectionContentWrapper,
  SectionDescription,
  SectionForm,
  SectionInputIconWrapper,
  SectionToastWrapper,
  SectionTextUnderButton,
  SectionButtonWrapper,
} from 'src/layout/SliderLayout/Section/styles';
import loginFormSchema from 'src/schemas/loginFormSchema';
import { useLoginMutation } from 'src/redux/auth/authApiSlice';
import getToastFromError from 'src/utils/getToastFromError';
import {
  setForgotPasswordEmail,
  setForgotPasswordToken,
} from 'src/redux/auth/authSlice';
import PersistWrapper from './styles';

interface Values {
  email: string;
  password: string;
  isPersist: boolean;
}

const LoginSection: React.FC = () => {
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    const capsLockOn = e.getModifierState('CapsLock');

    if (e.code === 'CapsLock') {
      setIsCapsLockOn((prevState) => !prevState);
      return;
    }

    setIsCapsLockOn(capsLockOn);
  };

  const onSubmit = async (values: Values) => {
    await login(values);
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        isPersist: false,
      },
      validationSchema: loginFormSchema,
      onSubmit,
    });

  useEffect(() => {
    // reset token and email from auth.forgotPasswordInfo
    dispatch(setForgotPasswordEmail({ email: '' }));
    dispatch(setForgotPasswordToken(''));
  });

  if (isSuccess) {
    return <Navigate to="/home/dashboard" />;
  }

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
          <h2>Welcome to Medfast!</h2>
          <h4>
            We happy to see you! To use your account, you should login first
          </h4>
        </SectionDescription>

        <SectionForm onSubmit={handleSubmit}>
          <InputField
            label="Email Adress"
            type="email"
            id="email"
            name="email"
            placeholder="Name@gmail.com"
            value={values.email}
            error={touched.email && errors.email ? errors.email : ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <InputField
            label="Password"
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter password"
            value={values.password}
            error={touched.password && errors.password ? errors.password : ''}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyUp={handleKeyPress}
          >
            {isCapsLockOn && (
              <SectionInputIconWrapper>
                <ReactSVG src="/assets/icons/allCaps.svg" />
              </SectionInputIconWrapper>
            )}
            <Eye
              isPasswordVisible={isPasswordVisible}
              handleToggle={togglePasswordVisibility}
            />
          </InputField>

          <PersistWrapper>
            <CheckboxField
              label="Keep me logged in"
              id="persist"
              name="isPersist"
              onChange={handleChange}
            />
            <StyledLink to="/forgot-password">Forgot your password?</StyledLink>
          </PersistWrapper>

          {isError && (
            <SectionToastWrapper>
              {getToastFromError(error)}
            </SectionToastWrapper>
          )}

          <SectionButtonWrapper>
            <Button text="Log In" type="submit" />
          </SectionButtonWrapper>

          <SectionTextUnderButton>
            <h5>Don’t have an account?</h5>
            <StyledLink to="/registration" $fWeight={400}>
              Register
            </StyledLink>
          </SectionTextUnderButton>
        </SectionForm>
      </SectionContentWrapper>
    </SectionWrapper>
  );
};

export default LoginSection;
