import styled from 'styled-components';

export const CheckBoxWrapper = styled.span`
	display: flex;
	justify-content: space-between;
	margin: 12px 0 0;
`;

export const ErrorMsg = styled.div`
color: ${({ theme }) => theme.colors.mainRed};
	font-size: ${({ theme }) => theme.fontSize.large};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: 1.25;
	margin-top: -8px; // adjustment with existing flexbox settings
`;
