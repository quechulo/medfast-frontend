import styled from 'styled-components';

export const ReviewSliderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	color: ${({ theme }) => theme.colors.secondaryText};
	width: 628px;
	z-index: 1;

	h2 {
		font-weight: ${({ theme }) => theme.fontWeight.extraBold};
		line-height: 1.33;
	}

	h4 {
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		line-height: 2;
	}
`;

export const DetailsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const StarsWrapper = styled.div`
	display: flex;
	gap: 8px;
	padding-left: 4px;

	svg {
		height: 18px;
		width: 18px;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	gap: 18px;
`;

export const ArrowWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: ${({ theme }) => theme.borders.whiteBorder};
	height: 44px;
	width: 44px;

	svg {
		width: 32px;
		height: 32px;
	}
`;
