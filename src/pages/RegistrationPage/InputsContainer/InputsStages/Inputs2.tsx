import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import InputField from 'src/components/inputs/InputField';
import BigWhiteButton from 'src/components/buttons/BigWhiteButton';
import { RegistrationData } from 'src/assets/UserData/userRegistrationData';
import BigButton from 'src/components/buttons/BigButton';
import { registrationFormSchema2 } from 'src/schemas/registrationFormSchema';
import { save2ndStage } from 'src/redux/registration/registration.actions';
import { RegistrationFormLarge, ButtonContainer, RegistrationForm, InputsWrapper } from '../styles';

const Inputs2: React.FC<{
  globalValues: RegistrationData
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
      save2ndStage({
        street: values.street,
        city: values.city,
        house: values.house,
        state: values.state,
        apartment: values.apartment,
        zip: values.zip,
      })
    );

    handleSubmitHigher();
	};
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: globalValues,
      validationSchema: registrationFormSchema2,
      onSubmit,
    });

  return (
    <InputsWrapper isVisible={isVisible}>
      <RegistrationFormLarge>
        <RegistrationForm>
          <InputField
            label="Street Address"
            type="text"
            id="steet"
            name="street"
            placeholder="Your street"
            value={values.street}
            error={touched.street && errors.street ? errors.street : ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            label="House"
            type="text"
            id="house"
            name="house"
            placeholder="Your house"
            value={values.house}
            error={touched.house && errors.house ? errors.house : ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            label="Apartment"
            type="text"
            id="apartment"
            name="apartment"
            placeholder="Your apartment"
            value={values.apartment}
            error={touched.apartment && errors.apartment ? errors.apartment : ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </RegistrationForm>
        <RegistrationForm>
          <InputField
            label="City"
            type="text"
            id="city"
            name="city"
            placeholder="Your city"
            value={values.city}
            error={touched.city && errors.city ? errors.city : ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            label="State"
            type="text"
            id="state"
            name="state"
            placeholder="Your state"
            value={values.state}
            error={touched.state && errors.state ? errors.state : ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            label="ZIP"
            type="text"
            id="zip"
            name="zip"
            placeholder="xxxxx"
            value={values.zip}
            error={touched.zip && errors.zip ? errors.zip : ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </RegistrationForm>
      </RegistrationFormLarge>
      <ButtonContainer>
        <BigWhiteButton
          text="Back"
          onClick={handleGoBack}
        />
        <BigButton
          text="Next"
          type="submit"
          isDisable={false}
          onClick={handleSubmit}
        />
      </ButtonContainer>

    </InputsWrapper>
  );
};
export default Inputs2;
