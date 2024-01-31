import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
width: 100%;
gap: 32px;
justify-content: space-between;
align-items: center;
background: ${({ theme }) => (`linear-gradient(139deg, ${theme.colors.mainPurple} -1.75%, ${theme.colors.forGradient} 91.52%)`)};
padding: 24px 20px 29px 16px;
border-radius: 10px;
`;

export const SubWrapper = styled.div`
display: flex;
gap: 8px;
flex-direction: column;
`;

export const Title = styled.h3`
color: ${({ theme }) => (theme.colors.mainWhite)};
font-size: ${({ theme }) => (theme.fontSize.large_plus)};
font-weight: ${({ theme }) => (theme.fontWeight.semiBold)};
line-height: 22px;
`;

export const Description = styled.p`
color: ${({ theme }) => (theme.colors.mainWhite)};
font-size: ${({ theme }) => (theme.fontSize.large)};
font-weight: ${({ theme }) => (theme.fontWeight.normal)};
line-height: 22px;
`;

export const IconWrapper = styled.div`
max-width: 120px;
height: 50px;
box-sizing: content-box;
`;
