export type LegalSex = 'Male' | 'Female' | 'Choose not to disclose' | null;

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  streetAddress: string;
  house: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phoneNumber: string;
  legalSex: LegalSex;
  citizenship: string;
  role: number;
  isEmailConfirmed: boolean;
  createdAt: string;
  updatedAt: string;
}

// Todo: ask Michał to refactor to this interface instead of RegisterUser type
export interface RegisterUser
  extends Omit<
    User,
    'id' | 'role' | 'isEmailConfirmed' | 'createdAt' | 'updatedAt'
  > {
  password: string;
}
