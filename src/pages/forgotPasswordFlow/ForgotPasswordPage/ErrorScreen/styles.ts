import styled from 'styled-components';
import { SectionDescriptionImage } from 'src/layout/SliderLayout/Section/styles';

const CustomSectionDescriptionImage = styled(SectionDescriptionImage)`
  background-color: ${({ theme }) =>
    theme.colors.errorDescriptionImageBackground};
`;

export default CustomSectionDescriptionImage;
