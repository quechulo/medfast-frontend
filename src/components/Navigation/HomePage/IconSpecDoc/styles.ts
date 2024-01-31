import styled from 'styled-components';

export const IconSpecDocNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-right: 20px;
`;

export const ProfileImage = styled.div<{ $profileImg: string }>`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-image: url(${({ $profileImg }) => $profileImg});
  background-size: cover;
  background-position: center;
`;

export const DocSpec = styled.p`
  color: #313131;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-right: 45px;
`;

export const DocName = styled.p`
  color: #000;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;
