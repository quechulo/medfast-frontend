import React from 'react';
import { Label, OptionWrapper, SelectWrapper, Wrapper } from './styles';

interface Props {
  isError: boolean;
  onChange: (a: string) => void;
}

const AllCountriesDropdown: React.FC<Props> = ({ isError, onChange }) => {
  const handleChange = () => {
    const { value } = document.getElementById('country') as HTMLInputElement;
    onChange(value);
  };

  const countryAdjectives: string[] = [
    'Afghan', 'Albanian', 'Algerian', 'American',
    'American Samoan', 'Andorran', 'Angolan',
    'Anguillan', 'Antarctic', 'Antiguan and Barbudan',
    'Argentine', 'Armenian', 'Aruban',
    'Australian', 'Austrian', 'Azerbaijani',
    'Bahamian', 'Bahraini', 'Bangladeshi',
    'Barbadian', 'Belarusian', 'Belgian',
    'Belizean', 'Beninese', 'Bermudian',
    'Bhutanese', 'Bolivian', 'Bosnian and Herzegovinian',
    'Motswana (Botswanan)', 'Bouvet Islander', 'Brazilian',
    'British Indian Ocean Territory', 'Bruneian', 'Bulgarian',
    'Burkinabe', 'Burundian', 'Cambodian',
    'Cameroonian', 'Canadian', 'Cape Verdean',
    'Caymanian', 'Central African', 'Chadian',
    'Chilean', 'Chinese', 'Christmas Islander',
    'Cocos Islander', 'Colombian', 'Comoran',
    'Congolese', 'Cook Islander', 'Costa Rican',
    'Ivorian', 'Croatian', 'Cuban',
    'Cypriot', 'Czech', 'Danish',
    'Djiboutian', 'Dominican', 'Dutch',
    'Dutch Antillean', 'Ecuadorian',
    'Egyptian', 'Salvadoran', 'Equatorial Guinean',
    'Eritrean', 'Estonian', 'Ethiopian',
    'Falkland Islander', 'Faroese', 'Fijian',
    'Finnish', 'French', 'French Guianese',
    'French Polynesian', 'French Southern Territories', 'Gabonese',
    'Gambian', 'Georgian', 'German',
    'Ghanaian', 'Gibraltar', 'Greek',
    'Greenlandic', 'Grenadian', 'Guadeloupean',
    'Guamanian', 'Guatemalan', 'Guernsey',
    'Guinean', 'Bissau-Guinean', 'Guyanese',
    'Haitian', 'Heard Islander', 'Holy See (Vatican)',
    'Honduran', 'Hong Konger',
    'Hungarian', 'Icelandic', 'Indian',
    'Indonesian',
    'Iranian', 'Iraqi', 'Irish',
    'Israeli', 'Italian', 'Jamaican',
    'Japanese', 'Jersey', 'Jordanian',
    'Kazakhstani', 'Kenyan', 'Kiribatian',
    'Korean (North)', 'Korean (South)', 'Kuwaiti',
    'Kyrgyz', 'Laotian', 'Latvian',
    'Lebanese', 'Mosotho (Lesothan)', 'Liberian',
    'Libyan', 'Liechtensteiner', 'Lithuanian',
    'Luxembourgish', 'Macanese', 'Macedonian',
    'Malagasy', 'Malawian', 'Malaysian',
    'Maldivian', 'Malian', 'Maltese',
    'Manx', 'Marshallese', 'Martiniquais',
    'Mauritanian', 'Mauritian', 'Mahoran',
    'Mexican', 'Micronesian', 'Moldovan',
    'Monacan', 'Mongolian', 'Montenegrin',
    'Montserratian', 'Moroccan', 'Mozambican',
    'Burmese (Myanmarese)', 'Namibian', 'Nauruan',
    'Nepali', 'New Caledonian', 'New Zealander',
    'Nicaraguan', 'Nigerien', 'Nigerian',
    'Niuean', 'Norfolk Islander', 'Northern Mariana Islander',
    'Norwegian', 'Omani', 'Pakistani', 'Palauan',
    'Palestinian', 'Panamanian', 'Papua New Guinean',
    'Paraguayan', 'Peruvian', 'Filipino', 'Pitcairn Islander',
    'Polish',
    'Portuguese', 'Puerto Rican', 'Qatari',
    'Reunionese', 'Romanian', 'Russian',
    'Rwandan', 'Saint Helenian', 'Kittitian and Nevisian',
    'Saint Lucian', 'Saint Pierrais and Miquelonnais',
    'Vincentian', 'Samoan', 'Sammarinese', 'Sao Tomean',
    'Saudi', 'Senegalese', 'Serbian', 'Seychellois',
    'Sierra Leonean', 'Singaporean', 'Slovak', 'Slovenian',
    'Solomon Islander', 'Somali', 'South African',
    'South Georgian and South Sandwich Islander', 'Spanish', 'Sri Lankan',
    'Sudanese', 'Surinamese', 'Svalbardian',
    'Swazi', 'Swedish', 'Swiss',
    'Syrian', 'Taiwanese', 'Tajikistani', 'Tanzanian', 'Thai',
    'Timorese', 'Togolese', 'Tokelauan', 'Tongan', 'Trinidadian and Tobagonian',
    'Tunisian', 'Turkish', 'Turkmen',
    'Turks and Caicos Islander', 'Tuvaluan', 'Ugandan',
    'Ukrainian', 'Emirati', 'British',
    'United States Minor Outlying Islander',
    'Uruguayan', 'Uzbekistani', 'Ni-Vanuatu',
    'Venezuelan', 'Vietnamese', 'British Virgin Islander',
    'U.S. Virgin Islander', 'Wallisian and Futunan', 'Sahrawi',
    'Yemeni', 'Zambian', 'Zimbabwean',
  ].sort();

  return (
    <Wrapper>
      <Label htmlFor="country" />

      <SelectWrapper
        id="country"
        name="country"
        isError={isError}
        onChange={handleChange}
      >
        <OptionWrapper value="" disabled selected>
          Choose from options
        </OptionWrapper>
        {countryAdjectives.map((citizenship) => (
          <OptionWrapper value={citizenship}>{citizenship}</OptionWrapper>
        ))}
      </SelectWrapper>
    </Wrapper>
  );
};

export default AllCountriesDropdown;
