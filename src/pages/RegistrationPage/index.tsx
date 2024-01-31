import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { resetRegistrationState } from 'src/redux/registration/registration.actions';
import { LogoWrapper } from 'src/components/Logo/style';
import Logo from 'src/components/Logo';
import StageFields from './StagesFields';
import Header from './Header';
import InputsContainer from './InputsContainer';
import RegistrationSuccess from './InputsContainer/InputsStages/SuccessfulRegistration/RegistrationSuccess';
import LogoContainer from './styles';

const RegistrationPage: React.FC = () => {
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);
  const registrationStage = useSelector(
    (state: RootState) => state.registration.stage,
  );
  const reduxSavedData = useSelector((state: RootState) => state.registration);
  const dispatch = useDispatch();

  const handleRegistrationSuccess = () => {
    setRegistrationSuccessful(true);
    dispatch(resetRegistrationState());
  };

  return (
    <div>
      <LogoContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </LogoContainer>
      {isRegistrationSuccessful ? (
        <RegistrationSuccess />
      ) : (
        <>
          <StageFields currStage={registrationStage} />
          <Header stage={registrationStage} />
          <InputsContainer
            stage={registrationStage}
            reduxSavedData={reduxSavedData}
            onRegistrationSuccess={handleRegistrationSuccess}
          />
        </>
      )}
    </div>
  );
};

export default RegistrationPage;
