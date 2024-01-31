import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactSVG } from 'react-svg';
import { useFormik } from 'formik';
import InputField from 'src/components/inputs/InputField';
import BigWhiteButton from 'src/components/buttons/BigWhiteButton';
import { RegistrationData } from 'src/assets/UserData/userRegistrationData';
import { registrationFormSchema5 } from 'src/schemas/registrationFormSchema';
import CheckboxTerm from 'src/components/checkboxes/CheckboxTerms';
import { SectionInputIconWrapper } from 'src/layout/SliderLayout/Section/styles';
import { save5thStage } from 'src/redux/registration/registration.actions';
import BigButton from 'src/components/buttons/BigButton';
import Eye from 'src/components/Eye';
import {
  InputsWrapper,
  RegistrationForm,
  ButtonContainer66,
  Button33,
  Button66,
} from '../../styles';
import { CheckBoxWrapper, ErrorMsg } from './styles';

const Inputs5: React.FC<{
  // children?: React.ReactNode;
  globalValues: RegistrationData;
  isVisible: boolean;
  handleSubmitHigher: any;
  handleGoBack: any;
}> = (props) => {
  const { globalValues, isVisible, handleSubmitHigher, handleGoBack } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const [agreement, setAgreement] = useState(false);

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

  const [isAgreementError, setIsAgreementError] = useState(false);

  const dispatch = useDispatch();
  const onSubmit = () => {
    if (!agreement) {
      setIsAgreementError(true);
      return;
    }

    handleSubmitHigher();
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: globalValues,
      validationSchema: registrationFormSchema5,
      onSubmit,
    });

  const onPasswordChange = (e: ChangeEvent) => {
    handleChange(e);

    const { value } = document.getElementById('password') as HTMLInputElement;
    if (value) {
      dispatch(
        save5thStage({
          password: value,
        })
      );
    }
  };

  const handleAgreementCheckbox = () => {
    setAgreement((prevState) => !prevState);
    setIsAgreementError(agreement);
  };

  return (
    <InputsWrapper isVisible={isVisible}>
      <RegistrationForm>
        <InputField
          label="New password"
          type={isPasswordVisible ? 'text' : 'password'}
          id="password"
          name="password"
          placeholder="New password"
          value={values.password}
          error={touched.password && errors.password ? errors.password : ''}
          onChange={onPasswordChange}
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
        <CheckBoxWrapper>
          <CheckboxTerm
            id="terms&conditions"
            label='By clicking the "Register" button, you agree to our '
            value={agreement}
            onChange={handleAgreementCheckbox}
          />
        </CheckBoxWrapper>
        {isAgreementError && (
          <ErrorMsg>Accepting Terms and Conditions are required</ErrorMsg>
        )}
      </RegistrationForm>
      <ButtonContainer66>
        <Button33>
          <BigWhiteButton text="Back" onClick={handleGoBack} />
        </Button33>
        <Button66>
          <BigButton
            text="Register"
            type="submit"
            isDisable={false}
            onClick={handleSubmit}
          />
        </Button66>
      </ButtonContainer66>
    </InputsWrapper>
  );
};
export default Inputs5;
