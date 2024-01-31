import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Button from 'src/components/buttons/Button';
import Eye from 'src/components/Eye';
import Logo from 'src/components/Logo';
import InputField from 'src/components/inputs/InputField';
import {
  SectionWrapper,
  SectionLogoWrapper,
  SectionContentWrapper,
  SectionDescription,
  SectionDescriptionImage,
  SectionForm,
  SectionInputIconWrapper,
  SectionTextUnderButton,
  SectionButtonWrapper,
  SectionToastWrapper,
} from 'src/layout/SliderLayout/Section/styles';
import StyledLink from 'src/components/StyledLink/styles';
import { registrationFormSchema5 } from 'src/schemas/registrationFormSchema';
import { useSendForgotPasswordNewPasswordMutation } from 'src/redux/auth/authApiSlice';
import getToastFromError from 'src/utils/getToastFromError';
import { SetNewPasswordPageParams } from 'src/types/ForgotPasswordTypes';
import { setForgotPasswordEmail } from 'src/redux/auth/authSlice';

interface Values {
  password: string;
  passwordRepeated: string;
}

const SetNewPasswordSection: React.FC = () => {
  const { token } = useParams<SetNewPasswordPageParams>();

  const dispatch = useDispatch();

  const [showToast, setShowToast] = useState(false);

  const [sendNewPassword, { isLoading, isSuccess, isError, error }] =
    useSendForgotPasswordNewPasswordMutation();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);

  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const handleTogglePasswdHidden = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleTogglePasswdHidden2 = () => {
    setIsPasswordVisible2((prevState) => !prevState);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    const capsLockOn = e.getModifierState('CapsLock');

    if (e.code === 'CapsLock') {
      setIsCapsLockOn((prevState) => !prevState);
      return;
    }

    setIsCapsLockOn(capsLockOn);
  };

  const onSubmit = (values: Values) => {
    sendNewPassword({ token: token as string, password: values.password });
    dispatch(setForgotPasswordEmail({ email: '' }));
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        password: '',
        passwordRepeated: '',
      },
      validationSchema: registrationFormSchema5,
      onSubmit,
    });

  if (isSuccess) {
    return <Navigate to="/forgot-password?status=success" replace />;
  }

  if (isError) {
    if (error && 'status' in error && error.status === 403) {
      return <Navigate to="/forgot-password?status=error" replace />;
    }
    setShowToast(true);
  }

  if (isLoading) {
    return (
      <SectionWrapper>
        <SectionLogoWrapper>
          <Logo />
        </SectionLogoWrapper>

        <SectionContentWrapper>
          <div>Loading...</div>
        </SectionContentWrapper>
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

          <h2>Set new password</h2>
          <h4>Please enter your new password</h4>
        </SectionDescription>

        <SectionForm onSubmit={handleSubmit}>
          <InputField
            label="New password"
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="New password"
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
              handleToggle={handleTogglePasswdHidden}
            />
          </InputField>

          <InputField
            label="Repeat password"
            type={isPasswordVisible2 ? 'text' : 'password'}
            id="passwordRepeated"
            name="passwordRepeated"
            placeholder="Repeat password"
            value={values.passwordRepeated}
            error={
              touched.passwordRepeated && errors.passwordRepeated
                ? errors.passwordRepeated
                : ''
            }
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
              isPasswordVisible={isPasswordVisible2}
              handleToggle={handleTogglePasswdHidden2}
            />
          </InputField>

          {showToast ? (
            <SectionToastWrapper>
              {getToastFromError(error)}
            </SectionToastWrapper>
          ) : null}

          <SectionButtonWrapper>
            <Button text="Set and login" type="submit" />
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

export default SetNewPasswordSection;
