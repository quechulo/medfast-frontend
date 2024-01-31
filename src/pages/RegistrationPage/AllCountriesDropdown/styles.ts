import styled from 'styled-components';
import theme from '../../../assets/theme';

export const Wrapper = styled.div`
width: 100%;
`;

export const Label = styled.label`
width: 100%;
`;

export const SelectWrapper = styled.select<{ id: string, name: string, isError: boolean }>`
    border: ${({ isError }) => (isError ? theme.borders.errorBorder : theme.borders.mainBorder)};
    border-radius: 12px;
    width: 100%;
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.normal};
    line-height: 24px;

    display: flex;
padding: 16px;
align-items: flex-start;
gap: 8px;
align-self: stretch;
&:focus {
    border: 1px solid #0065DE;
    background: #F9FDFF;
}
`;

export const OptionWrapper = styled.option`
display: flex;
width: 356px;
padding: 8px 16px;
align-items: flex-start;
border-radius: 6px;
&:checked {
    background: #EFF8FF;
}
&:hover {
    color: #0065DE;
font-feature-settings: 'clig' off, 'liga' off;
font-size: ${theme.fontSize.large};
font-style: normal;
font-weight: ${theme.fontWeight.medium};
line-height: 22px; /* 137.5% */
text-transform: capitalize;
}
`;
