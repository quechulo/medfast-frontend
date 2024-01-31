import styled from 'styled-components';

export const CheckBoxLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: 1.25;
	letter-spacing: 0.25px;
`;

export const CheckBoxInput = styled.input`
	height: 20px;
	width: 20px;
	&:checked {
		accent-color: ${({ theme }) => theme.colors.mainPurple};
	}
`;
