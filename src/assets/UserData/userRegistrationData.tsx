export interface RegistrationData {
  name: string;
  surname: string;
  dateOfBirth: string; // Assuming dateOfBirth is a string in a specific format (e.g., 'YYYY-MM-DD')

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

export const userRegistrationData: RegistrationData = {
  name: '',
  surname: '',
  dateOfBirth: '', // Assuming dateOfBirth is a string in a specific format (e.g., 'YYYY-MM-DD')

  street: '',
  city: '',
  house: '',
  state: '',
  apartment: '',
  zip: '',

  email: '',
  phoneNumber: '',

  legalSex: null,

  citizenship: '',
  password: '',
  passwordRepeated: '',
  conditionsAgreement: false,
};
