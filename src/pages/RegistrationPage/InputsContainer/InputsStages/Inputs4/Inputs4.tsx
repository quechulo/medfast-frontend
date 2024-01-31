import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BigWhiteButton from 'src/components/buttons/BigWhiteButton';
import RadioInput from 'src/components/inputs/RadioInput';
import { RegistrationData } from '../../../../../assets/UserData/userRegistrationData';
import {
  InputsWrapper,
  ButtonContainer66,
  Button33,
  Button66,
} from '../../styles';
import BigButton from '../../../../../components/buttons/BigButton';
import {
  CitizenshipWrapper,
  ErrorMsg,
  InputLabel,
  LegalSexWrapper,
  RadioInputWrapper,
} from './styles';
import AllCountriesDropdown from '../../../AllCountriesDropdown';
import { save4thStage } from '../../../../../redux/registration/registration.actions';

const Inputs4: React.FC<{
  globalValues: RegistrationData;
  isVisible: boolean;
  handleSubmitHigher: any;
  handleGoBack: any;
}> = (props) => {
  const { globalValues, isVisible, handleSubmitHigher, handleGoBack } = props;
  const [isRadioInputError, setIsRadioInputError] = useState(false);
  const [isCitizenshipError, setIsCitizenshipError] = useState(false);

  const [maleChecked, setMalechecked] = useState(false);
  const [femaleChecked, setFemalechecked] = useState(false);
  const [cntdChecked, setCntdchecked] = useState(false);

  const [legalSex, setLegalSex] = useState(globalValues.legalSex);
  const [citizenship, setCitizenship] = useState(globalValues.citizenship);

  const handleMaleChange = (check: boolean) => {
    if (check) {
      setMalechecked(true);
      setFemalechecked(false);
      setCntdchecked(false);
      setLegalSex('Male');
      setIsRadioInputError(false);
    } else {
      setMalechecked(false);
      setLegalSex(null);
    }
  };

  const handleFemaleChange = (check: boolean) => {
    if (check) {
      setMalechecked(false);
      setFemalechecked(true);
      setCntdchecked(false);
      setLegalSex('Female');
      setIsRadioInputError(false);
    } else {
      setFemalechecked(false);
      setLegalSex(null);
    }
  };

  const handleCntdChange = (check: boolean) => {
    if (check) {
      setMalechecked(false);
      setFemalechecked(false);
      setCntdchecked(true);
      setLegalSex('Choose not to disclose');
      setIsRadioInputError(false);
    } else {
      setCntdchecked(false);
      setLegalSex(null);
    }
  };

  const checkInputs = () => {
    if (!citizenship || !legalSex) {
      if (!citizenship) setIsCitizenshipError(true);
      if (!legalSex) setIsRadioInputError(true);
      return false;
    }
    if (citizenship) {
      setIsCitizenshipError(false);
    }
    if (legalSex) {
      setIsRadioInputError(false);
    }
    return true;
  };

  const onCountryChange = (value: string) => {
    setCitizenship(value);
    if (value) {
      setIsCitizenshipError(false);
    } else setIsCitizenshipError(true);
  };

  useEffect(() => {
    if (legalSex === 'Female') {
      setFemalechecked(true);
    } else if (legalSex === 'Male') {
      setMalechecked(true);
    } else {
      setCntdchecked(true);
    }
  }, [globalValues, legalSex]);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (checkInputs()) {
      dispatch(
        save4thStage({
          legalSex,
          citizenship,
        })
      );
      handleSubmitHigher();
    }
  };

  return (
    <InputsWrapper isVisible={isVisible}>
      <LegalSexWrapper>
        <InputLabel>Legal Sex</InputLabel>
        <RadioInputWrapper isError={isRadioInputError}>
          <RadioInput
            value={maleChecked}
            setValue={handleMaleChange}
            text="Male"
          />
          <RadioInput
            value={femaleChecked}
            setValue={handleFemaleChange}
            text="Female"
          />
          <RadioInput
            value={cntdChecked}
            setValue={handleCntdChange}
            text="Choose not to disclose"
          />
        </RadioInputWrapper>
        {isRadioInputError && <ErrorMsg>Legal Sex is required</ErrorMsg>}
      </LegalSexWrapper>
      <CitizenshipWrapper>
        <InputLabel>Citizenship</InputLabel>
        <AllCountriesDropdown
          onChange={onCountryChange}
          isError={isCitizenshipError}
        />
        {isCitizenshipError && <ErrorMsg>Citizenship is required</ErrorMsg>}
      </CitizenshipWrapper>
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

export default Inputs4;
