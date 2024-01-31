import styled from 'styled-components';
import { lightMode } from '../../../../../assets/theme';

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ContentDiv = styled.div`

width: 372px;
padding: 40px;
border-radius: 24px;
background: ${lightMode.colors.mainWhite};
box-shadow: 5px 0px 31px 0px #e4f3ff;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 12px;
`;

export const Title = styled.h2`
text-align: center;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 30px;
color: ${lightMode.colors.primaryText};
`;

export const InfoText = styled.p`
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 22px;
color: ${lightMode.colors.primaryText};
margin: 16px 0 32px 0;
`;

export const MedfastLogoBig = styled.div`
position: absolute;
top: 45vh;
left: 55vw;
z-index: -1;
`;
