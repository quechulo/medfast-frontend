import styled from 'styled-components';
import { lightMode } from 'src/assets/theme';

export const InputFieldWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
`;

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fontSize.large};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	line-height: 1.25;
	color: ${lightMode.colors.primaryText}
`;

export const InputWrapper = styled.div.attrs<{ $isError: boolean }>(
	(props) => ({
		style: {
			border: `${props.$isError ? props.theme.borders.errorBorder : ''}`,
		},
	}),
)`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	border: ${({ theme }) => theme.borders.mainBorder};
	gap: 8px;
`;

export const InputIconsWrapper = styled.div`
	padding-right: 16px;
	display: flex;
	gap: 8px;
`;

export const Input = styled.input`
	border-radius: 12px;
	border: unset;
	outline: none;
	flex: 1;
	font-size: ${({ theme }) => theme.fontSize.large};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	padding: 16px 0 16px 16px;
	line-height: 1.5;

	&::placeholder {
		color: ${({ theme }) => theme.colors.mainGray};
	}
`;

export const ErrorMsg = styled.span`
	color: ${({ theme }) => theme.colors.mainRed};
	font-size: ${({ theme }) => theme.fontSize.large};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: 1.25;
`;
