import styled from 'styled-components';
import theme, { lightMode } from 'src/assets/theme';

export const RadioInputWrapper = styled.div<{ isError: boolean }>`
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 12px;
    align-self: start; 
`;

export const InputLabel = styled.p`
color: ${lightMode.colors.primaryText};
font-size: ${theme.fontSize.large};
font-weight: ${theme.fontWeight.semiBold};
line-height: 20px;
margin-bottom: 8px;
`;

export const LegalSexWrapper = styled.div`
`;

export const CitizenshipWrapper = styled.div`
`;

export const ErrorMsg = styled.div`
color: ${({ theme }) => theme.colors.mainRed};
	font-size: ${({ theme }) => theme.fontSize.large};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: 1.25;
    margin-top: 8px;
`;
