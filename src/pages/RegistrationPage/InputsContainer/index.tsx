import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import {
  stageDec,
  stageInc,
  save1stStage,
  RegistrationState,
} from 'src/redux/registration/registration.actions';
import { registrationFormSchema } from 'src/schemas/registrationFormSchema';
import { RegistrationData } from 'src/assets/UserData/userRegistrationData';
import { useRegisterUserMutation } from 'src/redux/user/usersApiSlice';
import RegisterUser from 'src/types/RegisterUser';
import StyledLink from 'src/components/StyledLink/styles';

import Inputs1 from './InputsStages/Inputs1';
import Inputs2 from './InputsStages/Inputs2';
import Inputs3 from './InputsStages/Inputs3';
import Inputs4 from './InputsStages/Inputs4/Inputs4';
import Inputs5 from './InputsStages/Inputs5/Inputs5';

import { CenteredDiv, ContentDiv, HelperText, SignInWrapper } from './styles';

const InputsContainer: React.FC<{
  stage: number;
  reduxSavedData: RegistrationState;
  onRegistrationSuccess: () => void;
}> = (props) => {
  const { stage, reduxSavedData, onRegistrationSuccess } = props;
  const [registerUser] = useRegisterUserMutation();

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(stageInc());
  };
  const handleGoBack = () => {
    dispatch(stageDec());
  };

  const isRegisterUserSuccess = (res: any): res is FetchBaseQueryError =>
    'data' in res;
  const isRegisterUserError422 = (res: any): res is FetchBaseQueryError =>
    res.error.status === 422;
  const isRegisterUserFetchError = (res: any): res is FetchBaseQueryError =>
    res.error.status === 'FETCH_ERROR';

  const onSubmit = async (values: RegistrationData) => {
    if (stage === 5) {
      const registerData: RegisterUser = {
        firstName: reduxSavedData.name,
        lastName: reduxSavedData.surname,
        dateOfBirth: reduxSavedData.dateOfBirth,
        streetAddress: reduxSavedData.street,
        house: reduxSavedData.house,
        apartment: reduxSavedData.apartment,
        city: reduxSavedData.city,
        state: reduxSavedData.state,
        zip: reduxSavedData.zip,
        email: reduxSavedData.email,
        phoneNumber: reduxSavedData.phoneNumber,
        legalSex: reduxSavedData.legalSex,
        citizenship: reduxSavedData.citizenship,
        password: reduxSavedData.password,
      };

      const res = await registerUser(registerData);
      if (isRegisterUserSuccess(res)) {
        onRegistrationSuccess();
      } else if (isRegisterUserError422(res)) {
        alert('Email already in use');
      } else if (isRegisterUserFetchError(res)) {
        alert('Internal server error');
      }
      return { res };
    }

    if (stage === 1) {
      dispatch(
        save1stStage({
          name: values.name,
          surname: values.surname,
          dateOfBirth: values.dateOfBirth,
        })
      );
      increment();
      return { reduxSavedData };
    }

    increment();
    return { reduxSavedData };
  };

  const handleVisibility = (inputStage: number) => {
    if (inputStage === stage) {
      return true;
    }
    return false;
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: reduxSavedData,
      validationSchema: registrationFormSchema,
      onSubmit,
    });

  return (
    <CenteredDiv>
      <ContentDiv>
        <Inputs1
          values={values}
          isVisible={handleVisibility(1)}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
        />
        <Inputs2
          globalValues={reduxSavedData}
          isVisible={handleVisibility(2)}
          handleSubmitHigher={handleSubmit}
          handleGoBack={handleGoBack}
        />
        <Inputs3
          globalValues={values}
          isVisible={handleVisibility(3)}
          handleSubmitHigher={handleSubmit}
          handleGoBack={handleGoBack}
        />
        <Inputs4
          globalValues={values}
          isVisible={handleVisibility(4)}
          handleSubmitHigher={handleSubmit}
          handleGoBack={handleGoBack}
        />
        <Inputs5
          globalValues={values}
          isVisible={handleVisibility(5)}
          handleSubmitHigher={handleSubmit}
          handleGoBack={handleGoBack}
        />
        <SignInWrapper>
          <HelperText>Back to</HelperText>
          <StyledLink to="/" $fWeight={600}>
            Log In
          </StyledLink>
        </SignInWrapper>
      </ContentDiv>
    </CenteredDiv>
  );
};
export default InputsContainer;
