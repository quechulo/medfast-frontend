import React from 'react';
import InputField from 'src/components/inputs/InputField';
import DateInputField from 'src/components/inputs/DateInputField';
import { RegistrationData } from 'src/assets/UserData/userRegistrationData';
import BigButton from 'src/components/buttons/BigButton';
import { InputsWrapper, RegistrationForm, ButtonContainer } from '../styles';

const Inputs1: React.FC<{
  values: RegistrationData;
  isVisible: boolean;

  errors: any;
  touched: any;
  handleChange: any;
  handleBlur: any;
  handleSubmit: any;
}> = (props) => {
  const {
    values,
    isVisible,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const handleDateChange = () => {
    const { value } = document.getElementById(
      'dateOfBirth'
    ) as HTMLInputElement;
    const dateFormatted = new Date(value).toLocaleDateString('en-us');
    values.dateOfBirth = dateFormatted;
  };

  return (
    <InputsWrapper isVisible={isVisible}>
      <RegistrationForm>
        <InputField
          label="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={values.name}
          error={touched.name && errors.name ? errors.name : ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <InputField
          label="Surname"
          type="text"
          id="surname"
          name="surname"
          placeholder="Your surname"
          value={values.surname}
          error={touched.surname && errors.surname ? errors.surname : ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <DateInputField
          label="Date of birth"
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          placeholder="MM/DD/YYYY"
          value={values.dateOfBirth}
          error={
            touched.dateOfBirth && errors.dateOfBirth ? errors.dateOfBirth : ''
          }
          onChange={handleDateChange}
          onBlur={handleBlur}
        />
      </RegistrationForm>
      <ButtonContainer>
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
export default Inputs1;
