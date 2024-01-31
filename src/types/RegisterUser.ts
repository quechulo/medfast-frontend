type RegisterUser = {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    streetAddress: string,
    house: string,
    apartment: string,
    city: string,
    state: string,
    zip: string,
    email: string,
    phoneNumber: string,
    legalSex: 'Male' | 'Female' | 'Choose not to disclose' | null,
    citizenship: string,
    password: string
};

export default RegisterUser;
