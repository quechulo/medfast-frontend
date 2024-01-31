import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface RegistrationState {
  stage: number;
  name: string;
  surname: string;
  dateOfBirth: string;

  street: string;
  city: string;
  house: string;
  state: string;
  apartment: string | '';
  zip: string;

  email: string;
  phoneNumber: string;

  legalSex: 'Male' | 'Female' | 'Choose not to disclose' | null;

  citizenship: string;
  password: string;
  passwordRepeated: string;
  conditionsAgreement: boolean;
}

// Define the initial state using that type
const initialState: RegistrationState = {
  stage: 1,
  name: '',
  surname: '',
  dateOfBirth: '',

  street: '',
  city: '',
  house: '',
  state: '',
  apartment: '',
  zip: '',

  email: '',
  phoneNumber: '',

  legalSex: 'Choose not to disclose',

  citizenship: '',
  password: '',
  passwordRepeated: '',
  conditionsAgreement: false,
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    stageInc: (state) => {
      state.stage += 1;
    },
    stageDec: (state) => {
      state.stage -= 1;
    },
    save1stStage: (
      state,
      action: PayloadAction<{
        name: string;
        surname: string;
        dateOfBirth: string;
      }>
    ) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.dateOfBirth = action.payload.dateOfBirth;
    },
    save2ndStage: (
      state,
      action: PayloadAction<{
        street: string;
        city: string;
        house: string;
        state: string;
        apartment: string | '';
        zip: string;
      }>
    ) => {
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.house = action.payload.house;
      state.state = action.payload.state;
      state.apartment = action.payload.apartment;
      state.zip = action.payload.zip;
    },
    save3rdStage: (
      state,
      action: PayloadAction<{
        email: string;
        phoneNumber: string;
      }>
    ) => {
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
    },
    save4thStage: (
      state,
      action: PayloadAction<{
        legalSex: 'Male' | 'Female' | 'Choose not to disclose' | null;
        citizenship: string;
      }>
    ) => {
      state.legalSex = action.payload.legalSex;
      state.citizenship = action.payload.citizenship;
    },
    save5thStage: (
      state,
      action: PayloadAction<{
        password: string;
      }>
    ) => {
      state.password = action.payload.password;
    },
    resetRegistrationState: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  stageInc,
  stageDec,
  save1stStage,
  save2ndStage,
  save3rdStage,
  save4thStage,
  save5thStage,
  resetRegistrationState,
} = registrationSlice.actions;

export default registrationSlice.reducer;
