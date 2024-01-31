import styled from 'styled-components';

const Wrapper = styled.button<{ $isDark?: boolean }>`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	width: 100%;
	height: 100%;
	border: 1px solid ${({ theme }) => theme.colors.mainPurple};
	border-radius: 6px;
	padding: 8px 16px;
	color: ${({ $isDark, theme }) => ($isDark ? theme.colors.mainGray : theme.colors.mainPurple)};
	background: transparent;

	&:hover {
		color: white;
		background: ${({ theme }) => `${theme.gradients.buttonBackground}, ${theme.colors.linearForButtons}`};
	}
`;

export default Wrapper;
