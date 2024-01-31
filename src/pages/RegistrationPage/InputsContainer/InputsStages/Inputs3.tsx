import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import InputField from 'src/components/inputs/InputField';
import BigWhiteButton from 'src/components/buttons/BigWhiteButton';
import { RegistrationData } from 'src/assets/UserData/userRegistrationData';
import BigButton from 'src/components/buttons/BigButton';
import { registrationFormSchema3 } from 'src/schemas/registrationFormSchema';
import { save3rdStage } from 'src/redux/registration/registration.actions';
import { InputsWrapper, RegistrationForm, ButtonContainer66, Button33, Button66 } from '../styles';

const Inputs3: React.FC<{
  globalValues: RegistrationData;
  isVisible: boolean;
  handleSubmitHigher: any;
  handleGoBack: any;
}> = (props) => {
  const {
    globalValues,
    isVisible,
    handleSubmitHigher,
    handleGoBack,
  } = props;
  const dispatch = useDispatch();
  const onSubmit = (values: RegistrationData) => {
    dispatch(
      save3rdStage({
        email: values.email,
        phoneNumber: values.phoneNumber,
      })
    );

    handleSubmitHigher();
	};
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: globalValues,
      validationSchema: registrationFormSchema3,
      onSubmit,
    });

  return (
    <InputsWrapper isVisible={isVisible}>
      <RegistrationForm>
        <InputField
          label="Email"
          type="text"
          id="email"
          name="email"
          placeholder="Name@gmail.com"
          value={values.email}
          error={touched.email && errors.email ? errors.email : ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputField
          label="Phone number"
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="+1 (xxx) xxx xxxx"
          value={values.phoneNumber}
          error={
            touched.phoneNumber && errors.phoneNumber ? errors.phoneNumber : ''
          }
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </RegistrationForm>
      <ButtonContainer66>
        <Button33>
          <BigWhiteButton text="Back" onClick={handleGoBack} />
        </Button33>
        <Button66>
          <BigButton
            text="Next"
            type="submit"
            isDisable={false}
            onClick={handleSubmit}
          />
        </Button66>
      </ButtonContainer66>
    </InputsWrapper>
  );
};
export default Inputs3;
