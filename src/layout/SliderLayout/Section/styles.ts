import styled from 'styled-components';
import { InputFieldWrapper } from 'src/components/inputs/InputField/styles';

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionLogoWrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const SectionContentWrapper = styled.div`
  width: 372px;
`;

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
`;

export const SectionDescriptionImage = styled.div`
  width: 48px;
  height: 48px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.colors.sectionDescriptionImageBackground};
  border-radius: 51%;
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    cursor: unset;
  }
`;

export const SectionForm = styled.form`
  width: 100%;
  margin-top: 24px;

  // every sibling of InputField element
  div${InputFieldWrapper} ~ div${InputFieldWrapper} {
    margin-top: 16px;
  }
`;

export const SectionInputIconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

export const SectionToastWrapper = styled.div`
  margin: 24px 0;
  height: 76px;
`;

export const SectionTextUnderButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  > a,
  h5 {
    line-height: 20px;
  }
`;

// overide Michał button styles
export const SectionButtonWrapper = styled.div`
  > button {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.mainPurple};
    color: ${({ theme }) => theme.colors.mainWhite};
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    height: 56px;
  }
  margin-top: 24px;
`;
